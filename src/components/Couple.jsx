import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import FloralDecoration from './FloralDecoration';

const Couple = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id='couple'
      ref={sectionRef}
      className='py-16 md:py-24 bg-gradient-to-br from-pink-50 via-white to-pink-100 relative overflow-hidden'
    >
      {/* Floral SVG Decorations */}
      <FloralDecoration
        position='top-left'
        variant='pink'
        size='md'
        opacity='opacity-40'
      />
      <FloralDecoration
        position='bottom-right'
        variant='pink'
        size='md'
        opacity='opacity-40'
      />

      {/* Background decorative elements */}
      <div className='absolute inset-0 opacity-20'>
        <div className='absolute top-20 right-20 w-64 h-64 bg-pink-300 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 left-20 w-48 h-48 bg-accent-300 rounded-full blur-3xl'></div>
        <div className='absolute top-1/2 left-1/2 w-32 h-32 bg-pink-400 rounded-full blur-3xl'></div>
      </div>

      <div className='max-w-6xl mx-auto px-3 sm:px-4 lg:px-8 relative z-10'>
        {/* Bismillah & Islamic Greeting */}
        <div
          className={`text-center mb-6 sm:mb-8 scroll-reveal ${
            isVisible ? 'is-visible' : ''
          }`}
        >
          <div className='bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-2xl p-3 sm:p-4 md:p-6 max-w-2xl mx-auto shadow-md sm:shadow-lg border border-pink-100'>
            {/* Bismillah with Arabic Calligraphy */}
            <div className='mb-2 sm:mb-3 md:mb-4'>
              <svg
                className='w-32 sm:w-40 md:w-48 lg:w-64 mx-auto mb-1 sm:mb-2'
                viewBox='0 0 200 60'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <text
                  x='50%'
                  y='50%'
                  dominantBaseline='middle'
                  textAnchor='middle'
                  className='fill-pink-600'
                  style={{
                    fontFamily: "'Amiri', 'Traditional Arabic', serif",
                    fontSize: '28px',
                    fontWeight: '400',
                  }}
                >
                  بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
                </text>
              </svg>
              <p className='text-pink-500 text-[10px] sm:text-xs md:text-sm font-light italic mb-2 sm:mb-3 md:mb-4'>
                Dengan Nama Allah Yang Maha Pengasih lagi Maha Penyayang
              </p>
              <div className='w-12 sm:w-14 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent mx-auto mb-2 sm:mb-3 md:mb-4'></div>
            </div>

            <h3 className='font-serif text-lg sm:text-xl md:text-3xl text-pink-700 mb-2 sm:mb-2 md:mb-3'>
              Assalamu'alaikum Wr. Wb.
            </h3>
            <p className='text-pink-600 text-xs sm:text-sm md:text-base leading-relaxed'>
              Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i
              serta kerabat sekalian untuk menghadiri acara pernikahan kami.
            </p>
          </div>
        </div>

        {/* Section Header */}
        <div
          className={`text-center mb-12 md:mb-16 scroll-reveal-fade-up-zoom ${
            isVisible ? 'is-visible' : ''
          }`}
        >
          <p className='text-pink-500 text-sm font-medium tracking-widest uppercase mb-2'>
            We're Getting Married
          </p>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-pink-800 mb-4'>
            The Happy Couple
          </h2>
          <div className='w-24 h-1 bg-linear-to-r from-pink-300 via-pink-500 to-pink-300 mx-auto mb-4 rounded-full'></div>
          <p className='text-pink-600 text-base md:text-lg max-w-2xl mx-auto'>
            Dua hati yang bersatu dalam cinta, siap memulai perjalanan hidup
            bersama
          </p>
        </div>

        {/* Couple Cards Grid */}
        <div className='flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 max-w-5xl mx-auto items-stretch'>
          {/* Bride Card - Slide in from Left */}
          <div
            className={`w-full md:w-1/2 scroll-reveal-slide-left scroll-reveal-delay-1 ${
              isVisible ? 'is-visible' : ''
            } group relative bg-gradient-to-b from-white via-white to-pink-50/50 rounded-2xl md:rounded-[2rem] shadow-[0_8px_40px_-12px_rgba(183,58,96,0.15)] border border-pink-100/80 overflow-hidden transition-all duration-400 ease-luxury hover:-translate-y-1 hover:shadow-[0_20px_50px_-12px_rgba(183,58,96,0.25)] hover:border-pink-200`}
          >
            {/* Subtle glow effect */}
            <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none'>
              <div className='absolute -top-20 -right-20 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-30'></div>
            </div>

            {/* Photo Section */}
            <div className='relative m-4 md:m-5 lg:m-6 flex justify-center'>
              <div className='relative w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] border-4 border-pink-200/50'>
                <div className='w-full h-full bg-gradient-to-br from-pink-100 via-pink-50 to-cream-100'>
                  <img
                    src='/images/nurul-2.jpeg'
                    alt='Foto Mempelai Wanita'
                    className='w-full h-full object-cover object-[center_73%]'
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Placeholder */}
                  <div className='absolute inset-0 bg-gradient-to-br from-pink-100 via-pink-50 to-cream-100 hidden items-center justify-center'>
                    <div className='text-center'>
                      <span className='text-5xl md:text-7xl block mb-2'>
                        👰
                      </span>
                      <p className='text-pink-400 text-sm'>Tambahkan foto</p>
                    </div>
                  </div>
                </div>
                {/* Soft inner frame */}
                <div className='absolute inset-0 ring-1 ring-inset ring-white/40 rounded-full pointer-events-none'></div>
              </div>
              {/* Decorative Badge - Pojok kanan bawah */}
              <div className='absolute bottom-0 right-1/4 w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-pink-400/50 border-4 border-white ring-2 ring-pink-200/50 z-10'>
                <span className='text-lg md:text-xl'>💍</span>
              </div>
            </div>

            {/* Info Section */}
            <div className='px-4 sm:px-5 md:px-6 pb-5 md:pb-6 pt-3 md:pt-4 text-center relative'>
              <p className='text-pink-400 text-xs md:text-sm font-semibold tracking-[0.15em] md:tracking-[0.2em] uppercase mb-2'>
                Mempelai Wanita
              </p>
              <h3 className='font-script text-2xl sm:text-2xl md:text-2xl lg:text-3xl text-pink-700 mb-1 md:mb-2 leading-tight'>
                Nurul Faizah Ulfah
              </h3>
              <p className='text-pink-400 font-medium text-sm md:text-sm mb-3 md:mb-4 tracking-wide'>
                S.Pd
              </p>
              <div className='w-16 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent mx-auto mb-3 md:mb-4'></div>
              <p className='text-pink-400/80 text-xs uppercase tracking-wider mb-1'>
                Putri dari
              </p>
              <p className='font-serif font-medium text-pink-700 text-sm md:text-sm mb-4 md:mb-5 leading-tight'>
                Alm Bapak Upah & Ibu Siti Solihat
              </p>
              <div className='bg-gradient-to-br from-pink-50 to-pink-100/50 rounded-lg md:rounded-xl p-3 md:p-4 border border-pink-100'>
                <p className='text-pink-600/90 leading-relaxed text-sm md:text-sm italic font-light'>
                  "Seorang guru yang mencintai seni dan alam."
                </p>
              </div>
            </div>
          </div>

          {/* Groom Card - Slide in from Right */}
          <div
            className={`w-full md:w-1/2 scroll-reveal-slide-right scroll-reveal-delay-2 ${
              isVisible ? 'is-visible' : ''
            } group relative bg-gradient-to-b from-white via-white to-accent-50/30 rounded-2xl md:rounded-[2rem] shadow-[0_8px_40px_-12px_rgba(10,122,230,0.1)] border border-accent-100/50 overflow-hidden transition-all duration-400 ease-luxury hover:-translate-y-1 hover:shadow-[0_20px_50px_-12px_rgba(10,122,230,0.15)] hover:border-accent-200`}
          >
            {/* Subtle glow effect */}
            <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none'>
              <div className='absolute -top-20 -left-20 w-40 h-40 bg-accent-200 rounded-full blur-3xl opacity-30'></div>
            </div>

            {/* Photo Section */}
            <div className='relative m-4 md:m-5 lg:m-6 flex justify-center'>
              <div className='relative w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-full overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.05)] border-4 border-accent-200/50'>
                <div className='w-full h-full bg-gradient-to-br from-accent-100 via-accent-50 to-cream-100'>
                  <img
                    src='/images/ardhi-2.jpeg'
                    alt='Foto Mempelai Pria'
                    className='w-full h-full object-cover object-[center_50%] scale-110'
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Placeholder */}
                  <div className='absolute inset-0 bg-gradient-to-br from-accent-100 via-accent-50 to-cream-100 hidden items-center justify-center'>
                    <div className='text-center'>
                      <span className='text-5xl md:text-7xl block mb-2'>
                        🤵
                      </span>
                      <p className='text-accent-600 text-sm'>Tambahkan foto</p>
                    </div>
                  </div>
                </div>
                {/* Soft inner frame */}
                <div className='absolute inset-0 ring-1 ring-inset ring-white/40 rounded-full pointer-events-none'></div>
              </div>
              {/* Decorative Badge - Pojok kiri bawah */}
              <div className='absolute bottom-0 left-1/4 w-12 h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br from-accent-400 to-accent-500 rounded-full flex items-center justify-center shadow-lg shadow-accent-400/50 border-4 border-white ring-2 ring-accent-200/50 z-10'>
                <span className='text-lg md:text-xl'>💍</span>
              </div>
            </div>

            {/* Info Section */}
            <div className='px-4 sm:px-5 md:px-6 pb-5 md:pb-6 pt-3 md:pt-4 text-center relative'>
              <p className='text-accent-600 text-xs md:text-sm font-semibold tracking-[0.15em] md:tracking-[0.2em] uppercase mb-2'>
                Mempelai Pria
              </p>
              <h3 className='font-script text-2xl sm:text-2xl md:text-2xl lg:text-3xl text-accent-700 mb-1 md:mb-2 leading-tight'>
                Ardhi Sasongko
              </h3>
              <p className='text-accent-600 font-medium text-sm md:text-sm mb-3 md:mb-4 tracking-wide'>
                S.Sos
              </p>
              <div className='w-16 h-px bg-gradient-to-r from-transparent via-accent-400 to-transparent mx-auto mb-3 md:mb-4'></div>
              <p className='text-accent-500/80 text-xs uppercase tracking-wider mb-1'>
                Putra dari
              </p>
              <p className='font-serif font-medium text-accent-700 text-sm md:text-sm mb-4 md:mb-5 leading-tight'>
                Alm. Bapak Suparman & Alm. Ibu Tuminem
              </p>
              <div className='bg-gradient-to-br from-accent-50 to-accent-100/50 rounded-lg md:rounded-xl p-3 md:p-4 border border-accent-100'>
                <p className='text-accent-700/90 leading-relaxed text-sm md:text-sm italic font-light'>
                  "Jadilah orang jujur walaupun itu pahit."
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Heart Connector - Center */}
        <div
          className={`flex justify-center my-8 md:my-12 scroll-reveal-scale ${
            isVisible ? 'is-visible reveal-delay-4' : ''
          }`}
        >
          <div className='w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-xl animate-hero-float'>
            <span className='text-2xl md:text-3xl'>💕</span>
          </div>
        </div>

        {/* Love Quote */}
        <div
          className={`text-center scroll-reveal ${
            isVisible ? 'is-visible reveal-delay-5' : ''
          }`}
        >
          <div className='bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl p-6 md:p-10 max-w-3xl mx-auto shadow-xl'>
            <div className='text-pink-200 text-4xl mb-4'>❝</div>
            <blockquote className='font-script text-xl md:text-2xl lg:text-3xl text-white mb-4 leading-relaxed'>
              Dan di antara tanda-tanda-Nya ialah Dia menciptakan untukmu
              isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan
              merasa tenteram kepadanya
            </blockquote>
            <div className='w-16 h-0.5 bg-pink-300 mx-auto mb-4'></div>
            <cite className='text-pink-200 font-medium text-sm md:text-base'>
              QS. Ar-Rum: 21
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Couple;
