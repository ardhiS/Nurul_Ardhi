import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-blue-900 text-blue-100 py-12'>
      <div className='section-container'>
        {/* Main Footer Content */}
        <div className='text-center mb-8'>
          <div className='mb-6'>
            <h3 className='font-script text-3xl md:text-4xl text-pink-300 mb-2'>
              Nurul & Ardhi
            </h3>
            <p className='text-blue-300 text-sm md:text-base'>
              15 Februari 2026
            </p>
          </div>

          {/* Decorative Line */}
          <div className='w-32 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto mb-6'></div>

          {/* Thank You Message */}
          <div className='max-w-2xl mx-auto mb-8'>
            <p className='text-blue-200 text-base md:text-lg leading-relaxed'>
              Terima kasih telah menjadi bagian dari perjalanan cinta kami. Doa
              dan kehadiran Anda adalah hadiah terindah dalam hidup kami.
            </p>
          </div>

          {/* Social Media Links */}
          <div className='flex justify-center space-x-6 mb-8'>
            <a
              href='#'
              className='w-12 h-12 bg-blue-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg'
              aria-label='Instagram'
            >
              <span className='text-xl'>📷</span>
            </a>
            <a
              href='#'
              className='w-12 h-12 bg-blue-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg'
              aria-label='Facebook'
            >
              <span className='text-xl'>👥</span>
            </a>
            <a
              href='#'
              className='w-12 h-12 bg-blue-800 hover:bg-pink-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg'
              aria-label='WhatsApp'
            >
              <span className='text-xl'>💬</span>
            </a>
          </div>

          {/* Wedding Hashtag */}
          <div className='mb-6'>
            <p className='text-blue-300 text-sm md:text-base'>
              Bagikan momen Anda dengan hashtag
            </p>
            <p className='font-medium text-pink-300 text-lg md:text-xl'>
              #NurulArdhiWedding2026
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-blue-800 pt-6'>
          <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
            {/* Copyright */}
            <div className='text-blue-400 text-sm'>
              <p>&copy; {currentYear} Nurul & Ardhi Wedding. Made with ❤️</p>
            </div>

            {/* Quick Links */}
            <div className='flex space-x-6 text-sm'>
              <button
                onClick={() =>
                  document
                    .getElementById('hero')
                    .scrollIntoView({ behavior: 'smooth' })
                }
                className='text-blue-300 hover:text-pink-300 transition-colors duration-300'
              >
                Home
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById('couple')
                    .scrollIntoView({ behavior: 'smooth' })
                }
                className='text-blue-300 hover:text-pink-300 transition-colors duration-300'
              >
                Couple
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById('event')
                    .scrollIntoView({ behavior: 'smooth' })
                }
                className='text-blue-300 hover:text-pink-300 transition-colors duration-300'
              >
                Event
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById('rsvp')
                    .scrollIntoView({ behavior: 'smooth' })
                }
                className='text-blue-300 hover:text-pink-300 transition-colors duration-300'
              >
                RSVP
              </button>
            </div>
          </div>
        </div>

        {/* Final Message */}
        <div className='text-center mt-8 pt-6 border-t border-blue-800'>
          <p className='text-blue-400 text-xs md:text-sm italic'>
            "Dan segala sesuatu Kami jadikan berpasang-pasangan agar kamu
            mengingat (kebesaran Allah)"
          </p>
          <p className='text-blue-500 text-xs mt-1'>- QS. Adz-Dzariyat: 49 -</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
