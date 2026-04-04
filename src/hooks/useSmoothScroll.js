import { useCallback } from 'react';

/**
 * Custom smooth scroll hook dengan duration yang bisa dikontrol
 * Memberikan pengalaman scrolling yang lebih halus dan dapat disesuaikan
 *
 * @param {number} duration - Durasi scroll dalam milliseconds (default: 1200ms = lebih lambat)
 * @returns {Function} scrollToElement - Function untuk scroll ke element
 */
export const useSmoothScroll = (duration = 1200) => {
  const scrollToElement = useCallback(
    (elementId) => {
      const element = document.getElementById(elementId);
      if (!element) return;

      const targetPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      let startTime = null;

      // Easing function untuk smooth animation (ease-in-out)
      const easeInOutQuad = (t) => {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      };

      const animation = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));

        if (progress < 1) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    },
    [duration],
  );

  return scrollToElement;
};

export default useSmoothScroll;
