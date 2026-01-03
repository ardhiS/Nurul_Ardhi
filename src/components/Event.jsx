import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import FloralDecoration from './FloralDecoration';

const Event = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  const events = [
    {
      title: 'Akad Nikah',
      date: 'Minggu, 15 Februari 2026',
      time: '08:00 - 09:00 WIB',
      location: 'Villa AJ',
      address:
        'JJl. Raya Puncak KM 77 Leuwimalang, Kopo, Cipayung, Kabupaten Bogor, Jawa Barat 16750',
      description:
        'Akad nikah akan dilaksanakan dalam suasana khidmat bersama keluarga terdekat',
      icon: '🕌',
      color: 'blue',
    },
    {
      title: 'Resepsi',
      date: 'Minggu, 15 Februari 2026',
      time: '11:00 - 15:00 WIB',
      location: 'Villa AJ',
      address:
        'Jl. Raya Puncak KM 77 Leuwimalang, Kopo, Cipayung, Kabupaten Bogor, Jawa Barat 16750',
      description:
        'Resepsi pernikahan dengan makan bersama dan hiburan untuk tamu undangan',
      icon: '🎉',
      color: 'pink',
    },
  ];

  const openMaps = (address) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
      '_blank'
    );
  };

  return (
    <section
      id='event'
      ref={sectionRef}
      className='py-16 md:py-24 bg-gradient-to-br from-white via-pink-50 to-pink-100 relative overflow-hidden'
    >
      {/* Floral SVG Decorations */}
      <FloralDecoration
        position='top-right'
        variant='pink'
        size='md'
        opacity='opacity-40'
      />
      <FloralDecoration
        position='bottom-left'
        variant='blue'
        size='sm'
        opacity='opacity-30'
      />

      {/* Background decorative elements */}
      <div className='absolute inset-0 opacity-20'>
        <div className='absolute top-32 left-10 w-64 h-64 bg-pink-300 rounded-full blur-3xl'></div>
        <div className='absolute bottom-32 right-10 w-48 h-48 bg-blue-200 rounded-full blur-3xl'></div>
        <div className='absolute top-1/2 right-1/4 w-32 h-32 bg-pink-400 rounded-full blur-3xl'></div>
      </div>

      <div className='section-container relative z-10'>
        {/* Section Header */}
        <div
          className={`text-center mb-16 scroll-reveal ${
            isVisible ? 'is-visible' : ''
          }`}
        >
          <p className='text-pink-500 text-sm font-medium tracking-widest uppercase mb-2'>
            Save The Date
          </p>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-pink-800 mb-4'>
            Wedding Events
          </h2>
          <div className='w-24 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto mb-4'></div>
          <p className='text-pink-600 text-lg max-w-2xl mx-auto'>
            Kami dengan senang hati mengundang Anda untuk hadir dalam momen
            bahagia kami
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8 md:gap-12'>
          {events.map((event, index) => (
            <div
              key={index}
              className={`${
                index === 0 ? 'scroll-reveal-left' : 'scroll-reveal-right'
              } ${
                isVisible ? `is-visible reveal-delay-${index + 2}` : ''
              } bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-200`}
            >
              {/* Event Header */}
              <div
                className={`bg-gradient-to-r ${
                  event.color === 'blue'
                    ? 'from-blue-400 to-blue-500'
                    : 'from-pink-400 to-pink-500'
                } p-6 text-white text-center relative overflow-hidden`}
              >
                <div className='absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16'></div>
                <div className='absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12'></div>
                <div className='relative z-10'>
                  <div className='text-4xl mb-3'>{event.icon}</div>
                  <h3 className='font-serif text-2xl md:text-3xl font-semibold mb-2'>
                    {event.title}
                  </h3>
                  <p className='text-white/90 text-sm md:text-base'>
                    {event.description}
                  </p>
                </div>
              </div>

              {/* Event Details */}
              <div className='p-6 md:p-8'>
                {/* Date & Time */}
                <div className='mb-6'>
                  <div
                    className={`inline-flex items-center px-4 py-2 rounded-full mb-3 ${
                      event.color === 'blue'
                        ? 'bg-blue-50 border border-blue-200'
                        : 'bg-pink-50 border border-pink-200'
                    }`}
                  >
                    <span className='text-lg mr-2'>📅</span>
                    <span
                      className={`font-medium text-sm md:text-base ${
                        event.color === 'blue'
                          ? 'text-blue-700'
                          : 'text-pink-700'
                      }`}
                    >
                      {event.date}
                    </span>
                  </div>
                  <div
                    className={`inline-flex items-center px-4 py-2 rounded-full ml-2 ${
                      event.color === 'blue'
                        ? 'bg-blue-50 border border-blue-200'
                        : 'bg-pink-50 border border-pink-200'
                    }`}
                  >
                    <span className='text-lg mr-2'>⏰</span>
                    <span
                      className={`font-medium text-sm md:text-base ${
                        event.color === 'blue'
                          ? 'text-blue-700'
                          : 'text-pink-700'
                      }`}
                    >
                      {event.time}
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div className='mb-6'>
                  <div className='flex items-start space-x-3 mb-3'>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        event.color === 'blue' ? 'bg-blue-100' : 'bg-pink-100'
                      }`}
                    >
                      <span className='text-lg'>📍</span>
                    </div>
                    <div>
                      <h4 className='font-semibold text-pink-800 text-lg mb-1'>
                        {event.location}
                      </h4>
                      <p className='text-pink-600 text-sm md:text-base leading-relaxed'>
                        {event.address}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => openMaps(event.address)}
                    className={`w-full mt-4 py-3 px-6 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] ${
                      event.color === 'blue'
                        ? 'bg-blue-500 hover:bg-blue-600 text-white'
                        : 'bg-pink-500 hover:bg-pink-600 text-white'
                    }`}
                  >
                    <span className='mr-2'>🗺️</span>
                    Lihat Lokasi
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Important Notes */}
        <div
          className={`mt-16 scroll-reveal ${
            isVisible ? 'is-visible reveal-delay-4' : ''
          }`}
        >
          <div className='bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-pink-200 max-w-3xl mx-auto'>
            <h4 className='font-serif text-xl md:text-2xl text-pink-700 mb-4 text-center'>
              Catatan Penting
            </h4>
            <div className='grid md:grid-cols-2 gap-4 text-sm md:text-base text-pink-600'>
              <div className='flex items-start space-x-3'>
                <span className='text-pink-500 text-lg flex-shrink-0'>⚠️</span>
                <p>Harap datang tepat waktu untuk mengikuti rangkaian acara</p>
              </div>
              <div className='flex items-start space-x-3'>
                <span className='text-pink-500 text-lg flex-shrink-0'>👗</span>
                <p>Dress code: Formal/semi formal, hindari warna putih</p>
              </div>
              <div className='flex items-start space-x-3'>
                <span className='text-pink-500 text-lg flex-shrink-0'>🎁</span>
                <p>Kehadiran Anda adalah hadiah terindah bagi kami</p>
              </div>
              <div className='flex items-start space-x-3'>
                <span className='text-pink-500 text-lg flex-shrink-0'>📱</span>
                <p>Konfirmasi kehadiran melalui RSVP di bawah</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Event;
