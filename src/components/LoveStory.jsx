import React, { useRef } from 'react';
import { useAutoReveal } from '../hooks/useScrollReveal';
import FloralDecoration from './FloralDecoration';

const LoveStory = () => {
  const sectionRef = useRef(null);
  useAutoReveal(sectionRef);

  const loveStoryTimeline = [
    {
      id: 1,
      title: 'Awal Pertemuan',
      date: '2024',
      icon: '💫',
      description:
        'Dipertemukan di sekolah tempat kami bekerja, kami percaya ini bukan kebetulan. Sebagai guru, kami berbagi panggilan yang sama untuk mendidik. Percakapan santai tentang pelajaran dan siswa menjadi awal dari hubungan yang bermakna. Tuhan mempertemukan dua hati pada waktu yang tepat.',
      color: 'pink',
    },
    {
      id: 2,
      title: 'Menjalin Kedekatan',
      date: '2025',
      icon: '💕',
      description:
        'Hari demi hari, kami belajar saling mengenal dan saling mendukung dalam tantangan mengajar. Di tengah beban profesi sebagai guru, kami menemukan kekuatan dalam satu sama lain. Curahan hati tentang murid-murid dan impian masa depan memperkuat ikatan kami. Cinta bukan tentang kesempurnaan, melainkan tentang saling bertahan dan melengkapi.',
      color: 'rose',
    },
    {
      id: 3,
      title: 'Lamaran',
      date: '2026',
      icon: '💍',
      description:
        'Dengan keyakinan yang semakin kuat dan restu dari keluarga, kami memutuskan untuk melangkah ke tahap serius. Komitmen kami bukan hanya sebagai pasangan, tetapi juga sebagai mitra yang berbagi visi untuk terus memberi inspirasi dan kasih sayang-baik di kelas maupun dalam rumah tangga.',
      color: 'pink',
    },
    {
      id: 4,
      title: 'Pernikahan',
      date: '11 April 2026',
      icon: '💒',
      description:
        'Dari guru yang saling mendukung, kami menjadi pasangan hidup. Kini kami memilih untuk menyempurnakan perjalanan ini dalam ikatan suci pernikahan. Dengan hati penuh kasih sayang, kami memulai rumah tangga sebagai awal baru untuk berbagi hidup, tumbuh, dan menua bersama.',
      color: 'rose',
    },
  ];

  return (
    <section
      id='love-story'
      ref={sectionRef}
      className='py-12 sm:py-16 md:py-24 bg-linear-to-br from-pink-50 via-white to-rose-50 relative overflow-hidden'
    >
      {/* Floral SVG Decorations */}
      <FloralDecoration position='top-right' variant='pink' size='md' opacity='opacity-30' />
      <FloralDecoration position='bottom-left' variant='pink' size='sm' opacity='opacity-25' />

      {/* Background decorative elements */}
      <div className='absolute inset-0 opacity-20'>
        <div className='hidden sm:block absolute top-20 left-20 w-48 sm:w-64 h-48 sm:h-64 bg-pink-300 rounded-full blur-3xl'></div>
        <div className='hidden sm:block absolute bottom-20 right-20 w-32 sm:w-48 h-32 sm:h-48 bg-rose-300 rounded-full blur-3xl'></div>
        <div className='hidden md:block absolute top-1/2 right-1/4 w-32 h-32 bg-pink-400 rounded-full blur-3xl'></div>
      </div>

      <div className='section-container relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-8 sm:mb-10 lg:mb-16 px-3 sm:px-0'>
          <p data-reveal='fade-up' className='text-pink-500 text-[10px] sm:text-xs font-medium tracking-widest uppercase mb-1.5 sm:mb-2'>
            Our Journey
          </p>
          <h2 data-reveal='fade-up' data-delay='1' className='text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-serif font-semibold text-pink-800 mb-2 sm:mb-3'>
            Love Story
          </h2>
          <div data-reveal='zoom' data-delay='2' className='w-16 sm:w-20 h-0.5 bg-linear-to-r from-transparent via-pink-400 to-transparent mx-auto mb-2 sm:mb-3'></div>
          <p data-reveal='fade-up' data-delay='3' className='text-pink-600 text-xs sm:text-sm lg:text-lg max-w-2xl mx-auto leading-relaxed'>
            Perjalanan cinta yang membawa kami ke hari bahagia ini
          </p>
        </div>

        {/* Timeline */}
        <div className='max-w-4xl mx-auto'>
          <div className='relative px-2 sm:px-4 lg:px-0'>
            {/* Vertical Line */}
            <div className='absolute left-3 sm:left-5 lg:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-pink-300 via-rose-400 to-pink-300 transform lg:-translate-x-1/2'></div>

            {loveStoryTimeline.map((story, index) => (
              <div
                key={story.id}
                data-reveal={index % 2 === 0 ? 'fade-left' : 'fade-right'}
                data-delay={String(Math.min(index + 1, 5))}
                className='relative flex flex-col lg:flex-row items-start lg:items-center mb-6 sm:mb-10 last:mb-0'
              >
                {/* Timeline Dot */}
                <div className='absolute left-0 sm:left-1 lg:left-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white rounded-full shadow-lg border-3 sm:border-4 border-pink-300 flex items-center justify-center transform -translate-x-1/2 z-10 transition-all duration-300 hover:scale-110 hover:border-pink-500 shrink-0'>
                  <span className='text-sm sm:text-base lg:text-lg'>
                    {story.icon}
                  </span>
                </div>

                {/* Content Card */}
                <div
                  className={`pl-14 sm:pl-18 lg:pl-0 ${
                    index % 2 === 0
                      ? 'lg:pr-[calc(50%+2rem)] lg:text-right'
                      : 'lg:pl-[calc(50%+2rem)] lg:text-left'
                  } w-full`}
                >
                  <div
                    className={`bg-white rounded-lg sm:rounded-2xl p-3 sm:p-5 lg:p-6 shadow-md lg:shadow-lg border border-pink-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                      index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                    }`}
                  >
                    {/* Date Badge */}
                    <div
                      className={`inline-block px-2.5 sm:px-4 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold mb-1.5 sm:mb-2 ${
                        story.color === 'pink'
                          ? 'bg-pink-100 text-pink-600'
                          : 'bg-rose-100 text-rose-600'
                      }`}
                    >
                      {story.date}
                    </div>

                    {/* Title */}
                    <h3
                      className={`font-serif text-base sm:text-lg lg:text-2xl font-semibold mb-1.5 sm:mb-2 lg:mb-3 ${
                        story.color === 'pink'
                          ? 'text-pink-700'
                          : 'text-rose-700'
                      }`}
                    >
                      {story.title}
                    </h3>

                    {/* Description */}
                    <p className='text-pink-600/80 text-[11px] sm:text-xs lg:text-base leading-relaxed'>
                      {story.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Quote */}
        <div data-reveal='zoom-up' data-duration='slow' className='text-center mt-8 sm:mt-10 lg:mt-16 px-3 sm:px-4'>
          <div className='bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-2xl p-3 sm:p-5 lg:p-8 max-w-2xl mx-auto shadow-md lg:shadow-lg border border-pink-100'>
            <span data-reveal='zoom' data-delay='1' className='text-2xl sm:text-3xl mb-2 sm:mb-3 block'>💕</span>
            <p data-reveal='fade-up' data-delay='2' className='text-pink-700 text-xs sm:text-sm lg:text-lg italic font-serif leading-relaxed'>
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
