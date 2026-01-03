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
    <section className='relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-pink-100 overflow-hidden'>
      {/* Background decorative elements */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-20 left-10 w-32 h-32 bg-pink-300 rounded-full animate-float'></div>
        <div
          className='absolute bottom-20 right-10 w-24 h-24 bg-blue-300 rounded-full animate-float'
          style={{ animationDelay: '2s' }}
        ></div>
        <div
          className='absolute top-1/2 left-1/4 w-16 h-16 bg-pink-400 rounded-full animate-float'
          style={{ animationDelay: '4s' }}
        ></div>
      </div>

      <div className='section-container text-center relative z-10'>
        <div
          className={`transition-all duration-1000 ${
            isOpen ? 'animate-fade-in' : ''
          }`}
        >
          {/* Wedding Invitation Text */}
          <div className='mb-8 animate-slide-up'>
            <p className='text-blue-600 text-sm md:text-base font-medium tracking-wider uppercase mb-2'>
              Wedding Invitation
            </p>
            <div className='w-24 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto mb-6'></div>
          </div>

          {/* Bride & Groom Names */}
          <div
            className='mb-8 animate-slide-up'
            style={{ animationDelay: '0.2s' }}
          >
            <h1 className='font-script text-5xl md:text-7xl lg:text-8xl text-blue-800 mb-4 leading-tight'>
              Nurul & Ardhi
            </h1>
            <p className='text-blue-600 text-lg md:text-xl font-light tracking-wide'>
              We're Getting Married!
            </p>
          </div>

          {/* Wedding Date */}
          <div
            className='mb-12 animate-slide-up'
            style={{ animationDelay: '0.4s' }}
          >
            <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-blue-100 max-w-md mx-auto'>
              <p className='text-blue-700 text-base md:text-lg font-medium mb-2'>
                Save The Date
              </p>
              <p className='font-serif text-2xl md:text-3xl text-blue-800 mb-1'>
                15 Februari 2026
              </p>
              <p className='text-blue-600 text-sm md:text-base'>
                Minggu, 15:00 WIB
              </p>
            </div>
          </div>

          {/* Open Invitation Button */}
          {!isOpen && (
            <div
              className='animate-slide-up'
              style={{ animationDelay: '0.6s' }}
            >
              <button
                onClick={handleOpenInvitation}
                className='btn-primary text-base md:text-lg px-8 py-4 animate-pulse'
              >
                Buka Undangan
              </button>
            </div>
          )}

          {isOpen && (
            <div className='animate-fade-in' style={{ animationDelay: '0.8s' }}>
              <p className='text-blue-600 text-base md:text-lg mb-4'>
                Dengan penuh kegembiraan, kami mengundang Anda untuk merayakan
              </p>
              <button
                onClick={() =>
                  document
                    .getElementById('couple')
                    .scrollIntoView({ behavior: 'smooth' })
                }
                className='btn-secondary'
              >
                Lihat Detail
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      {isOpen && (
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
          <div className='w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center'>
            <div className='w-1 h-2 bg-blue-400 rounded-full mt-2 animate-pulse'></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
