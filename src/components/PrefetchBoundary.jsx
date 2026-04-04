import React, { Suspense } from 'react';
import { usePrefetchComponent } from '../hooks/usePrefetchComponent';

/**
 * Component wrapper untuk smart prefetch lazy components
 * Menggunakan IntersectionObserver untuk prefetch sebelum komponen visible
 *
 * @param {React.ElementType} Component - Lazy component yang akan di-render
 * @param {string} sectionId - ID dari section untuk observer
 * @param {number} prefetchDistance - Jarak prefetch dalam pixels (default: 500)
 * @param {React.ElementType} fallback - Loader component saat loading
 */
const PrefetchBoundary = ({
  Component,
  sectionId,
  prefetchDistance = 500,
  fallback,
}) => {
  // Trigger smart prefetch
  usePrefetchComponent(sectionId, prefetchDistance);

  return (
    <Suspense fallback={fallback}>
      <Component />
    </Suspense>
  );
};

export default PrefetchBoundary;
