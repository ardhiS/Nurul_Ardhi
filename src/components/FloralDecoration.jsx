import React from 'react';

/**
 * Reusable Floral SVG Decoration Component
 * Position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
 * Variant: 'pink' (default) | 'white' | 'blue'
 */
const FloralDecoration = ({
  position = 'top-left',
  variant = 'pink',
  size = 'md',
  opacity = 'opacity-60',
}) => {
  // Position classes
  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0 rotate-90',
    'bottom-left': 'bottom-0 left-0 -rotate-90',
    'bottom-right': 'bottom-0 right-0 rotate-180',
  };

  // Size classes
  const sizeClasses = {
    sm: 'w-32 md:w-48 lg:w-64',
    md: 'w-48 md:w-72 lg:w-96',
    lg: 'w-64 md:w-96 lg:w-[28rem]',
  };

  // Color variants
  const colors = {
    pink: {
      primary: '#ec4899',
      secondary: '#f472b6',
      tertiary: '#fbcfe8',
      center: '#fce7f3',
    },
    white: {
      primary: 'rgba(255,255,255,0.4)',
      secondary: 'rgba(255,255,255,0.3)',
      tertiary: 'rgba(255,255,255,0.2)',
      center: 'rgba(255,255,255,0.5)',
    },
    blue: {
      primary: '#5a8fc0',
      secondary: '#7aa7d1',
      tertiary: '#d1dfef',
      center: '#e8eff8',
    },
  };

  const color = colors[variant] || colors.pink;

  return (
    <svg
      className={`absolute ${positionClasses[position]} ${sizeClasses[size]} ${opacity} pointer-events-none animate-ornament-drift`}
      viewBox='0 0 200 200'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
    >
      {/* Main flower petals - horizontal */}
      <path
        d='M20 100c30-40 60-60 80-60s50 20 80 60c-30 40-60 60-80 60s-50-20-80-60z'
        fill={color.primary}
      />
      {/* Main flower petals - vertical */}
      <path
        d='M100 20c40 30 60 60 60 80s-20 50-60 80c-40-30-60-60-60-80s20-50 60-80z'
        fill={color.secondary}
      />
      {/* Center circle */}
      <circle cx='100' cy='100' r='20' fill={color.center} />
      {/* Decorative leaf details */}
      <path
        d='M60 60c20 10 30 25 40 40-15-5-30-15-40-40zM140 60c-20 10-30 25-40 40 15-5 30-15 40-40zM60 140c20-10 30-25 40-40-15 5-30 15-40 40zM140 140c-20-10-30-25-40-40 15 5 30 15 40 40z'
        fill={color.tertiary}
      />
    </svg>
  );
};

export default FloralDecoration;
