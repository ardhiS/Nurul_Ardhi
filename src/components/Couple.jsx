import React from 'react';

const Couple = () => {
  return (
    <section id='couple' className='py-16 md:py-24 bg-white'>
      <div className='section-container'>
        {/* Section Header */}
        <div className='text-center mb-12 md:mb-16 animate-slide-up'>
          <h2 className='heading-primary'>The Happy Couple</h2>
          <div className='w-24 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto mb-4'></div>
          <p className='text-elegant text-lg max-w-2xl mx-auto'>
            Dua hati yang bersatu dalam cinta, siap memulai perjalanan hidup
            bersama
          </p>
        </div>

        {/* Couple Cards Container */}
        <div className='flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12'>
          {/* Bride Card */}
          <div
            className='w-full max-w-sm bg-white rounded-3xl shadow-lg border border-blue-100 p-6 md:p-8 animate-slide-up'
            style={{ animationDelay: '0.2s' }}
          >
            {/* Photo Container */}
            <div className='flex justify-center mb-6'>
              <div className='relative'>
                <div className='w-48 h-56 md:w-56 md:h-64 bg-gradient-to-br from-blue-100 to-pink-100 rounded-2xl shadow-md overflow-hidden'>
                  {/* Ganti path foto mempelai wanita di sini */}
                  <img
                    src='/images/nurul2.jpeg'
                    alt='Foto Mempelai Wanita'
                    className='w-full h-full object-cover object-center'
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Placeholder jika foto belum ada */}
                  <div className='w-full h-full bg-gradient-to-br from-blue-100 to-pink-100 hidden items-center justify-center'>
                    <div className='text-center'>
                      <span className='text-5xl md:text-6xl block mb-2'>
                        👰
                      </span>
                      <p className='text-blue-400 text-xs'>Tambahkan foto</p>
                    </div>
                  </div>
                </div>
                {/* Decorative ring */}
                <div className='absolute -bottom-2 -right-2 w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center shadow-md'>
                  <span className='text-lg'>💍</span>
                </div>
              </div>
            </div>

            {/* Name & Info */}
            <div className='text-center mb-6'>
              <h3 className='font-script text-3xl md:text-4xl text-blue-800 mb-2'>
                Nurul Faizah Ulfah
              </h3>
              <p className='text-pink-600 font-medium text-sm mb-3'>S.Pd</p>
              <div className='w-16 h-0.5 bg-pink-400 mx-auto mb-4'></div>
              <p className='text-blue-500 text-sm mb-1'>Putri dari</p>
              <p className='font-medium text-blue-700 text-base'>
                Bapak Ahmad & Ibu Siti
              </p>
            </div>

            {/* Quote */}
            <div className='bg-blue-50 rounded-xl p-4'>
              <p className='text-blue-600 leading-relaxed text-sm text-center italic'>
                "Seorang guru yang mencintai seni dan alam. Percaya bahwa cinta
                sejati adalah ketika dua jiwa menemukan ketenangan dalam
                kebersamaan."
              </p>
            </div>
          </div>

          {/* Heart Divider - visible on all screens */}
          <div className='flex-shrink-0'>
            <div className='w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center shadow-lg animate-float'>
              <span className='text-2xl md:text-3xl text-white'>💕</span>
            </div>
          </div>

          {/* Groom Card */}
          <div
            className='w-full max-w-sm bg-white rounded-3xl shadow-lg border border-pink-100 p-6 md:p-8 animate-slide-up'
            style={{ animationDelay: '0.4s' }}
          >
            {/* Photo Container */}
            <div className='flex justify-center mb-6'>
              <div className='relative'>
                <div className='w-48 h-56 md:w-56 md:h-64 bg-gradient-to-br from-pink-100 to-blue-100 rounded-2xl shadow-md overflow-hidden'>
                  {/* Ganti path foto mempelai pria di sini */}
                  <img
                    src='/images/ardhi.jpg'
                    alt='Foto Mempelai Pria'
                    className='w-full h-full object-cover object-center'
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Placeholder jika foto belum ada */}
                  <div className='w-full h-full bg-gradient-to-br from-pink-100 to-blue-100 hidden items-center justify-center'>
                    <div className='text-center'>
                      <span className='text-5xl md:text-6xl block mb-2'>
                        🤵
                      </span>
                      <p className='text-blue-400 text-xs'>Tambahkan foto</p>
                    </div>
                  </div>
                </div>
                {/* Decorative ring */}
                <div className='absolute -bottom-2 -left-2 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-md'>
                  <span className='text-lg'>💍</span>
                </div>
              </div>
            </div>

            {/* Name & Info */}
            <div className='text-center mb-6'>
              <h3 className='font-script text-3xl md:text-4xl text-blue-800 mb-2'>
                Ardhi Sasongko
              </h3>
              <p className='text-blue-600 font-medium text-sm mb-3'>S.Sos</p>
              <div className='w-16 h-0.5 bg-blue-400 mx-auto mb-4'></div>
              <p className='text-blue-500 text-sm mb-1'>Putra dari</p>
              <p className='font-medium text-blue-700 text-base'>
                Bapak Hadi & Ibu Rina
              </p>
            </div>

            {/* Quote */}
            <div className='bg-pink-50 rounded-xl p-4'>
              <p className='text-blue-600 leading-relaxed text-sm text-center italic'>
                "Seorang arsitek yang menyukai traveling dan fotografi. Percaya
                bahwa rumah terbaik adalah di mana hati merasa damai bersama
                orang terkasih."
              </p>
            </div>
          </div>
        </div>

        {/* Love Quote */}
        <div
          className='text-center mt-12 md:mt-16 animate-slide-up'
          style={{ animationDelay: '0.6s' }}
        >
          <div className='bg-gradient-to-r from-blue-50 to-pink-50 rounded-2xl p-6 md:p-8 max-w-3xl mx-auto'>
            <blockquote className='font-script text-xl md:text-2xl lg:text-3xl text-blue-700 mb-4 leading-relaxed'>
              "Dan di antara tanda-tanda-Nya ialah Dia menciptakan untukmu
              isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan
              merasa tenteram kepadanya"
            </blockquote>
            <cite className='text-blue-600 font-medium text-sm md:text-base'>
              - QS. Ar-Rum: 21 -
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Couple;
