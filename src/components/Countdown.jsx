import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import FloralDecoration from './FloralDecoration';

const Countdown = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isEnded, setIsEnded] = useState(false);
  const [prevTimeLeft, setPrevTimeLeft] = useState(null);

  const weddingDate = new Date('2026-02-15T08:00:00').getTime();

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setPrevTimeLeft(timeLeft);
        setTimeLeft({ days, hours, minutes, seconds });
        setIsEnded(false);
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsEnded(true);
      }
    };

    // Initial calculation
    calculateTimeLeft();

    // Only set interval if event hasn't ended
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  const timeUnits = [
    {
      key: 'days',
      value: timeLeft.days,
      label: 'Hari',
      bgColor: 'bg-blue-500',
      textColor: 'text-blue-50',
    },
    {
      key: 'hours',
      value: timeLeft.hours,
      label: 'Jam',
      bgColor: 'bg-pink-400',
      textColor: 'text-pink-50',
    },
    {
      key: 'minutes',
      value: timeLeft.minutes,
      label: 'Menit',
      bgColor: 'bg-blue-400',
      textColor: 'text-blue-50',
    },
    {
      key: 'seconds',
      value: timeLeft.seconds,
      label: 'Detik',
      bgColor: 'bg-pink-300',
      textColor: 'text-pink-50',
    },
  ];

  return (
    <section
      id='countdown'
      ref={sectionRef}
      className='py-16 md:py-24 bg-gradient-to-br from-pink-600 via-pink-500 to-pink-400 relative overflow-hidden'
    >
      {/* Floral SVG Decorations - White variant for dark background */}
      <FloralDecoration
        position='top-left'
        variant='white'
        size='md'
        opacity='opacity-30'
      />
      <FloralDecoration
        position='bottom-right'
        variant='white'
        size='md'
        opacity='opacity-30'
      />

      {/* Background decorative elements */}
      <div className='absolute inset-0 opacity-20'>
        <div className='absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl'></div>
        <div className='absolute bottom-10 right-10 w-48 h-48 bg-pink-200 rounded-full blur-2xl'></div>
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-200 rounded-full blur-3xl'></div>
      </div>

      <div className='section-container relative z-10'>
        {/* Section Header */}
        <div
          className={`text-center mb-16 scroll-reveal ${
            isVisible ? 'is-visible' : ''
          }`}
        >
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-white mb-4'>
            Countdown to Our Special Day
          </h2>
          <div className='w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-4'></div>
          <p className='text-pink-100 text-lg max-w-2xl mx-auto'>
            Setiap detik yang berlalu membawa kami lebih dekat pada momen indah
            ini
          </p>
        </div>

        {/* Countdown Timer */}
        {isEnded ? (
          /* Event Has Started Message */
          <div className='text-center scroll-reveal is-visible'>
            <div className='bg-white/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-2xl mx-auto border border-white/30'>
              <div className='text-6xl md:text-7xl mb-6'>🎉</div>
              <h3 className='font-serif text-3xl md:text-4xl text-white mb-4'>
                Hari Bahagia Telah Tiba!
              </h3>
              <p className='text-pink-100 text-lg'>
                Terima kasih telah menjadi bagian dari momen indah kami
              </p>
            </div>
          </div>
        ) : (
          <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto'>
            {timeUnits.map((unit, index) => {
              const hasChanged =
                prevTimeLeft && prevTimeLeft[unit.key] !== unit.value;
              return (
                <div
                  key={unit.key}
                  className={`text-center relative scroll-reveal-scale ${
                    isVisible ? `is-visible reveal-delay-${index + 1}` : ''
                  }`}
                >
                  <div
                    className={`${unit.bgColor} rounded-3xl shadow-2xl p-6 md:p-8 mb-4 transform hover:scale-105 transition-all duration-300 relative overflow-hidden`}
                  >
                    {/* Decorative corner elements */}
                    <div className='absolute top-0 right-0 w-16 h-16 bg-white/20 rounded-full -translate-y-8 translate-x-8'></div>
                    <div className='absolute bottom-0 left-0 w-12 h-12 bg-white/20 rounded-full translate-y-6 -translate-x-6'></div>

                    <div className='relative z-10'>
                      <div
                        className={`text-4xl md:text-5xl lg:text-6xl font-bold ${
                          unit.textColor
                        } mb-2 font-mono tabular-nums transition-transform duration-300 ${
                          hasChanged ? 'countdown-tick' : ''
                        }`}
                        aria-live='polite'
                        aria-atomic='true'
                      >
                        {unit.value.toString().padStart(2, '0')}
                      </div>
                      <div
                        className={`text-sm md:text-base font-medium ${unit.textColor} opacity-90 uppercase tracking-wide`}
                      >
                        {unit.label}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Wedding Date Reminder */}
        <div
          className={`text-center mt-16 scroll-reveal ${
            isVisible ? 'is-visible reveal-delay-5' : ''
          }`}
        >
          <div className='bg-white/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-2xl mx-auto border border-white/30'>
            <div className='text-6xl md:text-7xl mb-6'>💍</div>
            <h3 className='font-script text-3xl md:text-4xl text-white mb-4'>
              Save The Date
            </h3>
            <div className='text-white mb-4'>
              <p className='text-xl md:text-2xl font-semibold mb-2'>
                15 Februari 2026
              </p>
              <p className='text-pink-100 text-base md:text-lg'>
                Minggu • 08:00 WIB
              </p>
            </div>
            <div className='w-20 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto'></div>
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-12 scroll-reveal ${
            isVisible ? 'is-visible reveal-delay-6' : ''
          }`}
        >
          <p className='text-pink-100 text-lg md:text-xl mb-6'>
            Jangan sampai terlewatkan momen bahagia kami
          </p>
          <button
            onClick={() =>
              document
                .getElementById('rsvp')
                .scrollIntoView({ behavior: 'smooth' })
            }
            className='bg-white text-pink-600 hover:bg-pink-50 font-medium text-base md:text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105'
          >
            Konfirmasi Kehadiran
          </button>
        </div>
      </div>
    </section>
  );
};

export default Countdown;
