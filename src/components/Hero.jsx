import React, { useState } from 'react';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    // Smooth scroll to next section
    const nextSection = document.getElementById('couple');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className='relative min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-50 via-white to-pink-50 overflow-hidden'>
      {/* Floral SVG Decorative - Top Left */}
      <svg
        className='absolute top-0 left-0 w-48 md:w-72 lg:w-96 pointer-events-none animate-ornament-drift'
        viewBox='0 0 200 200'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M20 100c30-40 60-60 80-60s50 20 80 60c-30 40-60 60-80 60s-50-20-80-60z'
          fill='#ec4899'
        />
        <path
          d='M100 20c40 30 60 60 60 80s-20 50-60 80c-40-30-60-60-60-80s20-50 60-80z'
          fill='#f472b6'
        />
        <circle cx='100' cy='100' r='20' fill='#fce7f3' />
        <path
          d='M60 60c20 10 30 25 40 40-15-5-30-15-40-40zM140 60c-20 10-30 25-40 40 15-5 30-15 40-40zM60 140c20-10 30-25 40-40-15 5-30 15-40 40zM140 140c-20-10-30-25-40-40 15 5 30 15 40 40z'
          fill='#fbcfe8'
        />
      </svg>

      {/* Floral SVG Decorative - Bottom Right */}
      <svg
        className='absolute bottom-0 right-0 w-48 md:w-72 lg:w-96 pointer-events-none rotate-180 animate-ornament-drift [animation-delay:4s]'
        viewBox='0 0 200 200'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M20 100c30-40 60-60 80-60s50 20 80 60c-30 40-60 60-80 60s-50-20-80-60z'
          fill='#ec4899'
        />
        <path
          d='M100 20c40 30 60 60 60 80s-20 50-60 80c-40-30-60-60-60-80s20-50 60-80z'
          fill='#f472b6'
        />
        <circle cx='100' cy='100' r='20' fill='#fce7f3' />
        <path
          d='M60 60c20 10 30 25 40 40-15-5-30-15-40-40zM140 60c-20 10-30 25-40 40 15-5 30-15 40-40zM60 140c20-10 30-25 40-40-15 5-30 15-40 40zM140 140c-20-10-30-25-40-40 15 5 30 15 40 40z'
          fill='#fbcfe8'
        />
      </svg>

      {/* Soft gradient orbs */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-1/4 left-1/4 w-64 h-64 bg-pink-200 rounded-full blur-3xl opacity-20 animate-ornament-drift'></div>
        <div className='absolute bottom-1/4 right-1/4 w-48 h-48 bg-rose-200 rounded-full blur-3xl opacity-15 animate-ornament-drift [animation-delay:3s]'></div>
      </div>

      {/* Main Content */}
      <div className='section-container text-center relative z-10 px-4 py-8'>
        <div
          className={`transition-all duration-1000 ${
            isOpen ? 'animate-hero-reveal' : ''
          }`}
        >
          {/* Subtitle - Wedding Invitation */}
          <div className='mb-6 opacity-0 animate-hero-reveal'>
            <p className='text-pink-400 text-xs md:text-sm font-medium tracking-[0.3em] uppercase'>
              The Wedding Of
            </p>
          </div>

          {/* Couple Names - Hero Typography */}
          <div className='mb-4 opacity-0 animate-hero-reveal [animation-delay:150ms]'>
            <h1 className='font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-pink-700 leading-none'>
              Nurul
            </h1>
            <div className='flex items-center justify-center gap-3 my-2'>
              <span className='w-12 md:w-20 h-px bg-gradient-to-r from-transparent to-pink-300'></span>
              <span className='text-pink-400 text-2xl md:text-3xl'>&</span>
              <span className='w-12 md:w-20 h-px bg-gradient-to-l from-transparent to-pink-300'></span>
            </div>
            <h1 className='font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-pink-700 leading-none'>
              Ardhi
            </h1>
          </div>

          {/* Tagline */}
          <p className='text-pink-500 text-sm md:text-base font-light tracking-widest uppercase mb-6 opacity-0 animate-hero-reveal [animation-delay:300ms]'>
            We're Getting Married
          </p>

          {/* Romantic Quote with Divider */}
          <div className='mb-8 opacity-0 animate-hero-reveal [animation-delay:450ms]'>
            <div className='flex items-center justify-center gap-2 mb-3'>
              <span className='w-8 h-px bg-pink-200'></span>
              <span className='text-pink-400 text-lg'>💍</span>
              <span className='w-8 h-px bg-pink-200'></span>
            </div>
            <p className='text-pink-400 text-sm md:text-base italic font-light max-w-sm mx-auto leading-relaxed'>
              "Two souls, one heart, forever entwined in love"
            </p>
          </div>

          {/* Date Card - Floating Animation */}
          <div className='mb-10 opacity-0 animate-hero-reveal [animation-delay:600ms]'>
            <div className='inline-block bg-white/90 backdrop-blur-sm rounded-2xl px-8 py-6 shadow-xl shadow-pink-100/50 border border-pink-100 animate-hero-float'>
              <p className='text-pink-500 text-xs md:text-sm font-medium tracking-widest uppercase mb-2'>
                Save The Date
              </p>
              <p className='font-serif text-2xl md:text-3xl text-pink-800 font-medium'>
                15 Februari 2026
              </p>
              <p className='text-pink-400 text-xs md:text-sm mt-1'>
                Minggu • 15:00 WIB
              </p>
            </div>
          </div>

          {/* CTA Button */}
          {!isOpen && (
            <div className='opacity-0 animate-hero-reveal [animation-delay:750ms]'>
              <button
                onClick={handleOpenInvitation}
                className='group relative bg-gradient-to-r from-pink-500 via-pink-500 to-rose-500 text-white text-sm md:text-base font-medium px-10 py-4 rounded-full shadow-lg shadow-pink-300/40 transition-all duration-[350ms] ease-out hover:scale-105 hover:shadow-xl hover:shadow-pink-400/50 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 animate-hero-glow'
              >
                <span className='relative z-10 flex items-center gap-2'>
                  <span>Buka Undangan</span>
                  <svg
                    className='w-4 h-4 transition-transform duration-[350ms] ease-out group-hover:translate-x-1'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M9 5l7 7-7 7'
                    />
                  </svg>
                </span>
              </button>
            </div>
          )}

          {/* After Open State */}
          {isOpen && (
            <div className='space-y-4 opacity-0 animate-hero-reveal [animation-delay:200ms]'>
              <p className='text-pink-600 text-sm md:text-base font-light max-w-md mx-auto leading-relaxed'>
                Dengan penuh kebahagiaan, kami mengundang Anda untuk berbagi
                kegembiraan di hari istimewa kami
              </p>
              <button
                onClick={() =>
                  document
                    .getElementById('couple')
                    .scrollIntoView({ behavior: 'smooth' })
                }
                className='inline-flex items-center gap-2 bg-white text-pink-600 border border-pink-200 px-6 py-3 rounded-full font-medium text-sm transition-all duration-[350ms] ease-out hover:bg-pink-50 hover:border-pink-300 hover:shadow-md hover:scale-105'
              >
                <span>Lihat Detail</span>
                <svg
                  className='w-4 h-4 transition-transform duration-[350ms] ease-out'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M19 9l-7 7-7-7'
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Scroll Indicator */}
      {isOpen && (
        <div className='absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 animate-hero-reveal [animation-delay:400ms]'>
          <div className='w-5 h-8 border-2 border-pink-300 rounded-full flex justify-center animate-hero-float'>
            <div className='w-1 h-2 bg-pink-400 rounded-full mt-1.5'></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
