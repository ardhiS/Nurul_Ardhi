import React from 'react';
import FloralDecoration from './FloralDecoration';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      className='bg-gradient-to-br from-pink-700 via-pink-800 to-pink-900 text-pink-100 py-12 relative overflow-hidden'
      role='contentinfo'
    >
      {/* Floral SVG Decorations - White variant for dark background */}
      <FloralDecoration
        position='top-left'
        variant='white'
        size='sm'
        opacity='opacity-20'
      />
      <FloralDecoration
        position='bottom-right'
        variant='white'
        size='sm'
        opacity='opacity-20'
      />

      <div className='section-container relative z-10'>
        {/* Main Footer Content */}
        <div className='text-center mb-8'>
          <div className='mb-6'>
            <h3 className='font-script text-3xl md:text-4xl text-white mb-2'>
              Nurul & Ardhi
            </h3>
            <p className='text-pink-200 text-sm md:text-base'>
              15 Februari 2026
            </p>
          </div>

          {/* Decorative Line */}
          <div className='w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent mx-auto mb-6'></div>

          {/* Thank You Message */}
          <div className='max-w-2xl mx-auto mb-8'>
            <p className='text-pink-100 text-base md:text-lg leading-relaxed'>
              Terima kasih telah menjadi bagian dari perjalanan cinta kami. Doa
              dan kehadiran Anda adalah hadiah terindah dalam hidup kami.
            </p>
          </div>

          {/* Social Media Links */}
          <div className='flex justify-center space-x-6 mb-8'>
            <a
              href='#'
              className='w-12 h-12 bg-pink-600 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg'
              aria-label='Instagram'
            >
              <span className='text-xl'>📷</span>
            </a>
            <a
              href='#'
              className='w-12 h-12 bg-pink-600 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg'
              aria-label='Facebook'
            >
              <span className='text-xl'>👥</span>
            </a>
            <a
              href='#'
              className='w-12 h-12 bg-pink-600 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg'
              aria-label='WhatsApp'
            >
              <span className='text-xl'>💬</span>
            </a>
          </div>

          {/* Wedding Hashtag */}
          <div className='mb-6'>
            <p className='text-pink-200 text-sm md:text-base'>
              Bagikan momen Anda dengan hashtag
            </p>
            <p className='font-medium text-white text-lg md:text-xl'>
              #NurulArdhiWedding2026
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-pink-600 pt-6'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            {/* Copyright */}
            <div className='text-pink-300 text-sm'>
              <p>&copy; {currentYear} Nurul & Ardhi Wedding. Made with ❤️</p>
            </div>

            {/* Quick Links */}
            <nav
              className='flex space-x-6 text-sm'
              aria-label='Quick navigation'
            >
              <button
                onClick={() => scrollToSection('hero')}
                className='text-pink-200 hover:text-white transition-colors duration-300 min-h-[44px] flex items-center'
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('couple')}
                className='text-pink-200 hover:text-white transition-colors duration-300 min-h-[44px] flex items-center'
              >
                Couple
              </button>
              <button
                onClick={() => scrollToSection('event')}
                className='text-pink-200 hover:text-white transition-colors duration-300 min-h-[44px] flex items-center'
              >
                Event
              </button>
              <button
                onClick={() => scrollToSection('rsvp')}
                className='text-pink-200 hover:text-white transition-colors duration-300 min-h-[44px] flex items-center'
              >
                RSVP
              </button>
            </nav>
          </div>
        </div>

        {/* Final Message */}
        <div className='text-center mt-8 pt-6 border-t border-pink-600'>
          <p className='text-pink-200 text-xs md:text-sm italic'>
            "Dan segala sesuatu Kami jadikan berpasang-pasangan agar kamu
            mengingat (kebesaran Allah)"
          </p>
          <p className='text-pink-300 text-xs mt-1'>- QS. Adz-Dzariyat: 49 -</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
