import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import FloralDecoration from './FloralDecoration';

const LoveStory = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  const loveStoryTimeline = [
    {
      id: 1,
      title: 'Awal Pertemuan',
      date: '2024',
      icon: '💫',
      description:
        'Di dunia yang luas ini, kami percaya bahwa tidak ada pertemuan yang benar-benar kebetulan. Bukan karena bertemu lalu berjodoh, tapi karena berjodoh maka kami dipertemukan. Tuhan mempertemukan dua hati pada waktu yang tepat dengan cara yang sederhana, namun bermakna.',
      color: 'pink',
    },
    {
      id: 2,
      title: 'Menjalin Kedekatan',
      date: '2025',
      icon: '💕',
      description:
        'Hari demi hari, kami belajar saling mengenal. Bukan hanya tentang bahagia, tetapi juga tentang perbedaan, luka, dan doa. Karena cinta bukan tentang kesempurnaan, melainkan tentang saling bertahan dan melengkapi.',
      color: 'rose',
    },
    {
      id: 3,
      title: 'Lamaran',
      date: '2026',
      icon: '💍',
      description:
        'Dengan keyakinan yang semakin kuat dan restu dari keluarga, kami mengikat sebuah janji dalam tunangan sebagai langkah serius menuju masa depan bersama.',
      color: 'pink',
    },
    {
      id: 4,
      title: 'Pernikahan',
      date: '11 April 2026',
      icon: '💒',
      description:
        'Kini, dengan niat yang sama dan doa yang menyertai, kami memilih untuk menyempurnakan perjalanan ini dalam ikatan suci pernikahan. Sebagai awal baru untuk berbagi hidup, tumbuh, dan menua bersama.',
      color: 'rose',
    },
  ];

  return (
    <section
      id='love-story'
      ref={sectionRef}
      className='py-16 md:py-24 bg-linear-to-br from-pink-50 via-white to-rose-50 relative overflow-hidden'
    >
      {/* Floral SVG Decorations */}
      <FloralDecoration
        position='top-right'
        variant='pink'
        size='md'
        opacity='opacity-30'
      />
      <FloralDecoration
        position='bottom-left'
        variant='pink'
        size='sm'
        opacity='opacity-25'
      />

      {/* Background decorative elements */}
      <div className='absolute inset-0 opacity-20'>
        <div className='hidden sm:block absolute top-20 left-20 w-48 sm:w-64 h-48 sm:h-64 bg-pink-300 rounded-full blur-3xl'></div>
        <div className='hidden sm:block absolute bottom-20 right-20 w-32 sm:w-48 h-32 sm:h-48 bg-rose-300 rounded-full blur-3xl'></div>
        <div className='hidden md:block absolute top-1/2 right-1/4 w-32 h-32 bg-pink-400 rounded-full blur-3xl'></div>
      </div>

      <div className='section-container relative z-10'>
        {/* Section Header */}
        <div
          className={`text-center mb-10 sm:mb-12 lg:mb-16 scroll-reveal-fade-up-zoom px-4 sm:px-0 ${
            isVisible ? 'is-visible' : ''
          }`}
        >
          <p className='text-pink-500 text-xs sm:text-sm font-medium tracking-widest uppercase mb-2'>
            Our Journey
          </p>
          <h2 className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-serif font-semibold text-pink-800 mb-3 sm:mb-4'>
            Love Story
          </h2>
          <div className='w-20 sm:w-24 h-0.5 bg-linear-to-r from-transparent via-pink-400 to-transparent mx-auto mb-3 sm:mb-4'></div>
          <p className='text-pink-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed'>
            Perjalanan cinta yang membawa kami ke hari bahagia ini
          </p>
        </div>

        {/* Timeline */}
        <div className='max-w-4xl mx-auto'>
          <div className='relative px-4 sm:px-0'>
            {/* Vertical Line */}
            <div className='absolute left-4 sm:left-5 lg:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-pink-300 via-rose-400 to-pink-300 transform lg:-translate-x-1/2'></div>

            {loveStoryTimeline.map((story, index) => (
              <div
                key={story.id}
                className={`relative flex flex-col lg:flex-row items-start lg:items-center mb-8 sm:mb-12 last:mb-0 scroll-reveal-fade-up ${
                  index % 2 === 0
                    ? 'scroll-reveal-slide-left'
                    : 'scroll-reveal-slide-right'
                } scroll-reveal-delay-${Math.min(index + 1, 5)} ${
                  isVisible ? 'is-visible' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className='absolute left-0 sm:left-1 lg:left-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg border-4 border-pink-300 flex items-center justify-center transform -translate-x-1/2 z-10 transition-all duration-300 hover:scale-110 hover:border-pink-500 shrink-0'>
                  <span className='text-lg sm:text-xl'>{story.icon}</span>
                </div>

                {/* Content Card */}
                <div
                  className={`pl-16 sm:pl-20 lg:pl-0 ${
                    index % 2 === 0
                      ? 'lg:pr-[calc(50%+2rem)] lg:text-right'
                      : 'lg:pl-[calc(50%+2rem)] lg:text-left'
                  } w-full`}
                >
                  <div
                    className={`bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-pink-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                      index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                    }`}
                  >
                    {/* Date Badge */}
                    <div
                      className={`inline-block px-3 sm:px-4 py-1 rounded-full text-xs font-semibold mb-2 sm:mb-3 ${
                        story.color === 'pink'
                          ? 'bg-pink-100 text-pink-600'
                          : 'bg-rose-100 text-rose-600'
                      }`}
                    >
                      {story.date}
                    </div>

                    {/* Title */}
                    <h3
                      className={`font-serif text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3 ${
                        story.color === 'pink'
                          ? 'text-pink-700'
                          : 'text-rose-700'
                      }`}
                    >
                      {story.title}
                    </h3>

                    {/* Description */}
                    <p className='text-pink-600/80 text-xs sm:text-sm lg:text-base leading-relaxed'>
                      {story.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Quote */}
        <div
          className={`text-center mt-10 sm:mt-12 lg:mt-16 scroll-reveal-fade-up-zoom px-4 sm:px-0 ${
            isVisible ? 'is-visible' : ''
          }`}
        >
          <div className='bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 max-w-2xl mx-auto shadow-lg border border-pink-100'>
            <span className='text-3xl sm:text-4xl mb-3 sm:mb-4 block'>💕</span>
            <p className='text-pink-700 text-base sm:text-lg lg:text-xl italic font-serif leading-relaxed'>
              "Tidak ada yang spesial dalam cerita kami. Tapi kami sangat
              spesial untuk satu sama lain. Dan kami bersyukur, dipertemukan
              Allah di waktu terbaik."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveStory;
