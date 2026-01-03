import { useEffect, useRef, useState } from 'react';

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

export default useScrollReveal;
