import { useEffect, useRef, useState, useCallback } from 'react';

/**
 * Custom hook for scroll-based reveal animations
 * Uses Intersection Observer for performance
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Root margin for earlier/later trigger
 * @returns {Object} - ref to attach and isVisible state
 */
export const useScrollReveal = (options = {}) => {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px' } = options;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once revealed, stop observing
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
};

/**
 * Hook for staggered children animations
 * @param {number} childCount - Number of children to animate
 * @param {number} baseDelay - Base delay in ms
 * @param {number} staggerDelay - Delay between each child in ms
 */
export const useStaggeredReveal = (
  childCount,
  baseDelay = 0,
  staggerDelay = 120
) => {
  const { ref, isVisible } = useScrollReveal();

  const getChildDelay = (index) => {
    return `${baseDelay + index * staggerDelay}ms`;
  };

  return { ref, isVisible, getChildDelay };
};

/**
 * Hook that auto-attaches scroll reveal to all [data-reveal] children
 * Uses a single IntersectionObserver for all elements — very performant
 * Each element animates independently when it enters the viewport
 * Also watches for dynamically-added elements via MutationObserver
 */
export const useAutoReveal = (containerRef) => {
  useEffect(() => {
    const container = containerRef?.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      container.querySelectorAll('[data-reveal]').forEach((el) => {
        el.classList.add('revealed');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    // Observe a single element if not already revealed
    const observeElement = (el) => {
      if (!el.classList.contains('revealed')) {
        observer.observe(el);
      }
    };

    // Initial scan: observe all [data-reveal] children
    const timer = requestAnimationFrame(() => {
      container.querySelectorAll('[data-reveal]').forEach(observeElement);
    });

    // Watch for dynamically-added [data-reveal] elements (e.g., async data)
    const mutationObserver = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        for (const node of mutation.addedNodes) {
          if (node.nodeType !== Node.ELEMENT_NODE) continue;
          // Check the node itself
          if (node.hasAttribute?.('data-reveal')) {
            observeElement(node);
          }
          // Check its children
          node.querySelectorAll?.('[data-reveal]')?.forEach(observeElement);
        }
      }
    });

    mutationObserver.observe(container, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(timer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [containerRef]);
};

export default useScrollReveal;
