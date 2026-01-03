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
        <div className='absolute bottom-20 left-20 w-48 h-48 bg-blue-200 rounded-full blur-3xl'></div>
        <div className='absolute top-1/2 left-1/2 w-32 h-32 bg-pink-400 rounded-full blur-3xl'></div>
      </div>

      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Section Header */}
        <div
          className={`text-center mb-12 md:mb-16 scroll-reveal ${
            isVisible ? 'is-visible' : ''
          }`}
        >
          <p className='text-pink-500 text-sm font-medium tracking-widest uppercase mb-2'>
            We're Getting Married
          </p>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-pink-800 mb-4'>
            The Happy Couple
          </h2>
          <div className='w-24 h-1 bg-gradient-to-r from-pink-300 via-pink-500 to-pink-300 mx-auto mb-4 rounded-full'></div>
          <p className='text-pink-600 text-base md:text-lg max-w-2xl mx-auto'>
            Dua hati yang bersatu dalam cinta, siap memulai perjalanan hidup
            bersama
          </p>
        </div>

        {/* Couple Cards Grid */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 max-w-5xl mx-auto'>
          {/* Bride Card */}
          <div
            className={`scroll-reveal-left ${
              isVisible ? 'is-visible reveal-delay-2' : ''
            } group relative bg-gradient-to-b from-white via-white to-pink-50/50 rounded-[2rem] shadow-[0_8px_40px_-12px_rgba(183,58,96,0.15)] border border-pink-100/80 overflow-hidden transition-all duration-400 ease-luxury hover:-translate-y-1 hover:shadow-[0_20px_50px_-12px_rgba(183,58,96,0.25)] hover:border-pink-200`}
          >
            {/* Subtle glow effect */}
            <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none'>
              <div className='absolute -top-20 -right-20 w-40 h-40 bg-pink-200 rounded-full blur-3xl opacity-30'></div>
            </div>

            {/* Photo Section */}
            <div className='relative m-5 md:m-6 rounded-2xl overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]'>
              <div className='aspect-[4/5] bg-gradient-to-br from-pink-100 via-pink-50 to-cream-100'>
                <img
                  src='/images/nurul2.jpeg'
                  alt='Foto Mempelai Wanita'
                  className='w-full h-full object-cover object-top'
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Placeholder */}
                <div className='absolute inset-0 bg-gradient-to-br from-pink-100 via-pink-50 to-cream-100 hidden items-center justify-center'>
                  <div className='text-center'>
                    <span className='text-6xl md:text-7xl block mb-2'>👰</span>
                    <p className='text-pink-400 text-sm'>Tambahkan foto</p>
                  </div>
                </div>
              </div>
              {/* Soft inner frame */}
              <div className='absolute inset-0 ring-1 ring-inset ring-white/40 rounded-2xl pointer-events-none'></div>
              {/* Decorative Badge */}
              <div className='absolute -bottom-3 right-6 w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-pink-300/40 border-4 border-white ring-2 ring-pink-200/50'>
                <span className='text-xl'>💍</span>
              </div>
            </div>

            {/* Info Section */}
            <div className='px-6 md:px-8 pb-8 pt-4 text-center relative'>
              <p className='text-pink-400 text-[0.7rem] font-semibold tracking-[0.2em] uppercase mb-3'>
                Mempelai Wanita
              </p>
              <h3 className='font-script text-3xl md:text-4xl text-pink-700 mb-2 leading-tight'>
                Nurul Faizah Ulfah
              </h3>
              <p className='text-pink-400 font-medium text-sm mb-5 tracking-wide'>
                S.Pd
              </p>
              <div className='w-16 h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent mx-auto mb-5'></div>
              <p className='text-pink-400/80 text-xs uppercase tracking-wider mb-1'>
                Putri dari
              </p>
              <p className='font-serif font-medium text-pink-700 text-base mb-6'>
                Alm Bapa Upah & Ibu Siti Solihat
              </p>
              <div className='bg-gradient-to-br from-pink-50 to-pink-100/50 rounded-xl p-5 border border-pink-100'>
                <p className='text-pink-600/90 leading-relaxed text-sm italic font-light'>
                  "Seorang guru yang mencintai seni dan alam. Percaya bahwa
                  cinta sejati adalah ketika dua jiwa menemukan ketenangan dalam
                  kebersamaan."
                </p>
              </div>
            </div>
          </div>

          {/* Groom Card */}
          <div
            className={`scroll-reveal-right ${
              isVisible ? 'is-visible reveal-delay-3' : ''
            } group relative bg-gradient-to-b from-white via-white to-blue-50/50 rounded-[2rem] shadow-[0_8px_40px_-12px_rgba(58,97,137,0.15)] border border-blue-100/80 overflow-hidden transition-all duration-400 ease-luxury hover:-translate-y-1 hover:shadow-[0_20px_50px_-12px_rgba(58,97,137,0.25)] hover:border-blue-200`}
          >
            {/* Subtle glow effect */}
            <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none'>
              <div className='absolute -top-20 -left-20 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-30'></div>
            </div>

            {/* Photo Section */}
            <div className='relative m-5 md:m-6 rounded-2xl overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.05)]'>
              <div className='aspect-[4/5] bg-gradient-to-br from-blue-100 via-blue-50 to-cream-100'>
                <img
                  src='/images/ardhi.jpg'
                  alt='Foto Mempelai Pria'
                  className='w-full h-full object-cover object-top'
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Placeholder */}
                <div className='absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-cream-100 hidden items-center justify-center'>
                  <div className='text-center'>
                    <span className='text-6xl md:text-7xl block mb-2'>🤵</span>
                    <p className='text-blue-400 text-sm'>Tambahkan foto</p>
                  </div>
                </div>
              </div>
              {/* Soft inner frame */}
              <div className='absolute inset-0 ring-1 ring-inset ring-white/40 rounded-2xl pointer-events-none'></div>
              {/* Decorative Badge */}
              <div className='absolute -bottom-3 left-6 w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-300/40 border-4 border-white ring-2 ring-blue-200/50'>
                <span className='text-xl'>💍</span>
              </div>
            </div>

            {/* Info Section */}
            <div className='px-6 md:px-8 pb-8 pt-4 text-center relative'>
              <p className='text-blue-400 text-[0.7rem] font-semibold tracking-[0.2em] uppercase mb-3'>
                Mempelai Pria
              </p>
              <h3 className='font-script text-3xl md:text-4xl text-blue-700 mb-2 leading-tight'>
                Ardhi Sasongko
              </h3>
              <p className='text-blue-400 font-medium text-sm mb-5 tracking-wide'>
                S.Sos
              </p>
              <div className='w-16 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent mx-auto mb-5'></div>
              <p className='text-blue-400/80 text-xs uppercase tracking-wider mb-1'>
                Putra dari
              </p>
              <p className='font-serif font-medium text-blue-700 text-base mb-6'>
                Bapak Alm. Suparman & Ibu alm. Tuminem
              </p>
              <div className='bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-5 border border-blue-100'>
                <p className='text-blue-600/90 leading-relaxed text-sm italic font-light'>
                  "Seorang Guru yang menyukai kehidupan dengan beram bentuk
                  tantangan selin itu juga teknologi melekat pada moto hidupnya,
                  jadilah orang jujur walaupun itu pahit"
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
