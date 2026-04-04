import { useEffect, useRef } from 'react';

/**
 * Smart prefetch hook yang trigger lazy loading komponen
 * ketika user mendekati section (500px sebelum visible)
 *
 * @param {string} sectionId - ID dari section yang akan di-prefetch
 * @param {number} threshold - Pixel sebelum visible yang trigger prefetch (default: 500)
 */
export const usePrefetchComponent = (sectionId, threshold = 500) => {
  const observerRef = useRef(null);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    // Jangan setup observer jika sudah di-prefetch
    if (hasTriggeredRef.current) return;

    // Create IntersectionObserver dengan margin negatif (trigger sebelum visible)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Trigger prefetch ketika section mendekati viewport
          if (entry.isIntersecting && !hasTriggeredRef.current) {
            hasTriggeredRef.current = true;
            // Observer akan trigger lazy loading - komponen mulai render
            observer.disconnect();
          }
        });
      },
      {
        // rootMargin negative = trigger sebelum section visible
        rootMargin: `${threshold}px 0px ${threshold}px 0px`,
      },
    );

    observer.observe(section);
    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sectionId, threshold]);
};

export default usePrefetchComponent;
