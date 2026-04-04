import React, { useCallback, memo, useRef } from 'react';
import { useAutoReveal } from '../hooks/useScrollReveal';
import { FaBuilding, FaRing } from 'react-icons/fa6';
import FloralDecoration from './FloralDecoration';

const Event = () => {
  const sectionRef = useRef(null);
  useAutoReveal(sectionRef);

  // Google Maps embed URL for Villa AJ Puncak
  const mapsEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.9348386739025!2d106.90496067329335!3d-6.6549988650547665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c826194b1c35%3A0x3b65684f26bbb546!2sVilla%20AJ%20by%20Arkadia!5e0!3m2!1sid!2sid!4v1767525627206!5m2!1sid!2sid';
  const mapsDirectionsUrl = 'https://maps.app.goo.gl/ro5G1QCaC35yLDCz6';

  const events = [
    {
      title: 'Akad Nikah',
      date: 'Sabtu, 11 April 2026',
      time: '09:00 - 10:00 WIB',
      location: 'Villa AJ by Arkadia',
      address: 'Villa AJ by Arkadia',
      description:
        'Akad nikah akan dilaksanakan dalam suasana khidmat bersama keluarga terdekat',
      icon: 'mosque',
      color: 'gold',
      startDateTime: '2026-04-11T09:00:00',
      endDateTime: '2026-04-11T10:00:00',
    },
    {
      title: 'Resepsi',
      date: 'Sabtu, 11 April 2026',
      time: '10:00 - Selesai',
      location: 'Villa AJ by Arkadia',
      address: 'Villa AJ by Arkadia',
      description:
        'Resepsi pernikahan dengan makan bersama dan hiburan untuk tamu undangan',
      icon: 'cheers',
      color: 'maroon',
      startDateTime: '2026-04-11T10:00:00',
      endDateTime: '2026-04-11T15:00:00',
    },
  ];

  const openMaps = useCallback((address) => {
    const encodedAddress = encodeURIComponent(address);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
      '_blank',
      'noopener,noreferrer',
    );
  }, []);

  const addToGoogleCalendar = useCallback((event) => {
    const startDate = event.startDateTime
      .replace(/[-:]/g, '')
      .replace('T', 'T');
    const endDate = event.endDateTime.replace(/[-:]/g, '').replace('T', 'T');

    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      `Pernikahan Nurul & Ardhi - ${event.title}`,
    )}&dates=${startDate.replace('T', 'T')}00/${endDate.replace('T', 'T')}00&details=${encodeURIComponent(
      event.description,
    )}&location=${encodeURIComponent(event.location)}&ctz=Asia/Jakarta`;

    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  const downloadICS = useCallback((event) => {
    const formatDateForICS = (dateStr) => {
      return dateStr.replace(/[-:]/g, '');
    };

    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Nurul & Ardhi Wedding//ID
BEGIN:VEVENT
DTSTART;TZID=Asia/Jakarta:${formatDateForICS(event.startDateTime)}
DTEND;TZID=Asia/Jakarta:${formatDateForICS(event.endDateTime)}
SUMMARY:Pernikahan Nurul & Ardhi - ${event.title}
DESCRIPTION:${event.description}
LOCATION:${event.location}
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], {
      type: 'text/calendar;charset=utf-8',
    });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `wedding-nurul-ardhi-${event.title.toLowerCase().replace(' ', '-')}.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
  }, []);

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
        <div className='absolute bottom-32 right-10 w-48 h-48 bg-accent-300 rounded-full blur-3xl'></div>
        <div className='absolute top-1/2 right-1/4 w-32 h-32 bg-pink-400 rounded-full blur-3xl'></div>
      </div>

      <div className='section-container relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <p data-reveal='fade-up' className='text-pink-500 text-sm font-medium tracking-widest uppercase mb-2'>
            Save The Date
          </p>
          <h2 data-reveal='fade-up' data-delay='1' className='text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-pink-800 mb-4'>
            Wedding Events
          </h2>
          <div data-reveal='zoom' data-delay='2' className='w-24 h-0.5 bg-linear-to-r from-transparent via-pink-400 to-transparent mx-auto mb-4'></div>
          <p data-reveal='fade-up' data-delay='3' className='text-pink-600 text-lg max-w-2xl mx-auto'>
            Kami dengan senang hati mengundang Anda untuk hadir dalam momen
            bahagia kami
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8 md:gap-12'>
          {events.map((event, index) => (
            <div
              key={index}
              data-reveal={index === 0 ? 'fade-left' : 'fade-right'}
              data-delay={String(index * 2 + 1)}
              className='bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-pink-200'
            >
              {/* Event Header */}
              <div
                className={`bg-gradient-to-r ${event.color === 'gold'
                  ? 'from-accent-500 to-accent-600'
                  : 'from-pink-500 to-pink-600'
                  } p-6 text-white text-center relative overflow-hidden`}
              >
                <div className='absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16'></div>
                <div className='absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12'></div>
                <div className='relative z-10'>
                  <div className='mb-4 flex justify-center'>
                    {event.icon === 'mosque' ? (
                      /* Akad Nikah — frosted white circle, glow warna accent biru theme */
                      <div className='w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/40 shadow-[0_0_28px_rgba(45,117,184,0.5)]'>
                        <FaBuilding className='w-9 h-9 text-white drop-shadow-md' />
                      </div>
                    ) : (
                      /* Resepsi — frosted white circle, glow warna primary maroon theme */
                      <div className='w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/40 shadow-[0_0_28px_rgba(205,45,86,0.5)]'>
                        <FaRing className='w-9 h-9 text-white drop-shadow-md' />
                      </div>
                    )}
                  </div>
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
                <div data-reveal='fade-up' data-delay={String(index * 2 + 2)} className='mb-6'>
                  <div
                    className={`inline-flex items-center px-4 py-2 rounded-full mb-3 ${event.color === 'gold'
                      ? 'bg-accent-50 border border-accent-200'
                      : 'bg-pink-50 border border-pink-200'
                      }`}
                  >
                    <span className='text-lg mr-2'>📅</span>
                    <span
                      className={`font-medium text-sm md:text-base ${event.color === 'gold'
                        ? 'text-accent-700'
                        : 'text-pink-700'
                        }`}
                    >
                      {event.date}
                    </span>
                  </div>
                  <div
                    className={`inline-flex items-center px-4 py-2 rounded-full ml-2 ${event.color === 'gold'
                      ? 'bg-accent-50 border border-accent-200'
                      : 'bg-pink-50 border border-pink-200'
                      }`}
                  >
                    <span className='text-lg mr-2'>⏰</span>
                    <span
                      className={`font-medium text-sm md:text-base ${event.color === 'gold'
                        ? 'text-accent-700'
                        : 'text-pink-700'
                        }`}
                    >
                      {event.time}
                    </span>
                  </div>
                </div>

                {/* Location */}
                <div data-reveal='fade-up' data-delay={String(index * 2 + 3)} className='mb-6'>
                  <div className='flex items-start space-x-3 mb-3'>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${event.color === 'gold' ? 'bg-accent-100' : 'bg-pink-100'
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
                    className={`w-full mt-4 py-3.5 px-6 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-offset-2 ${event.color === 'gold'
                      ? 'bg-accent-500 hover:bg-accent-600 text-white focus:ring-accent-400'
                      : 'bg-pink-500 hover:bg-pink-600 text-white focus:ring-pink-400'
                      }`}
                    aria-label={`Buka lokasi ${event.location} di Google Maps`}
                  >
                    <svg
                      className='w-5 h-5'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                      />
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                      />
                    </svg>
                    <span>Buka di Google Maps</span>
                  </button>

                  {/* Add to Calendar Buttons */}
                  <div className='flex gap-2 mt-3'>
                    <button
                      onClick={() => addToGoogleCalendar(event)}
                      className='flex-1 py-2.5 px-4 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 bg-pink-100 hover:bg-pink-200 text-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-1'
                      aria-label={`Tambahkan ${event.title} ke Google Calendar`}
                    >
                      <span>📅</span>
                      <span>Google Calendar</span>
                    </button>
                    <button
                      onClick={() => downloadICS(event)}
                      className='flex-1 py-2.5 px-4 rounded-lg font-medium text-sm transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-1'
                      aria-label={`Download file kalender untuk ${event.title}`}
                    >
                      <span>⬇️</span>
                      <span>Unduh .ics</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Maps Embed */}
        <div data-reveal='zoom-up' data-duration='slow' className='mt-12'>
          <div className='bg-white rounded-2xl p-4 shadow-lg border border-pink-200 max-w-4xl mx-auto'>
            <h4 data-reveal='fade-up' className='font-serif text-xl text-pink-700 mb-4 text-center'>
              📍 Lokasi Acara
            </h4>
            <div className='relative w-full h-64 md:h-80 rounded-xl overflow-hidden'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.934795620348!2d106.90753559999999!3d-6.6550042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c826194b1c35%3A0x3b65684f26bbb546!2sVilla%20AJ%20by%20Arkadia!5e0!3m2!1sid!2sid!4v1767526388626!5m2!1sid!2sid'
                className='absolute inset-0 w-full h-full border-0'
                allowFullScreen=''
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
                title='Lokasi Villa AJ Puncak Bogor'
              ></iframe>
            </div>
            <div data-reveal='fade-up' data-delay='2' className='mt-4 text-center'>
              <a
                href='https://maps.app.goo.gl/ro5G1QCaC35yLDCz6'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-full font-medium hover:from-pink-600 hover:to-pink-700 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 min-h-[48px]'
              >
                <svg
                  className='w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                  />
                </svg>
                Buka di Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div data-reveal='fade-up' data-duration='slow' className='mt-16'>
          <div className='bg-gradient-to-br from-pink-50 to-blue-50 rounded-3xl p-8 md:p-10 shadow-lg border border-pink-200 max-w-3xl mx-auto'>
            <div data-reveal='zoom' className='text-center mb-8'>
              <span className='inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full mb-4 shadow-lg'>
                <svg
                  className='w-8 h-8 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </span>
              <h4 className='font-serif text-xl md:text-2xl text-pink-700'>
                Catatan Penting
              </h4>
            </div>
            <div className='grid md:grid-cols-3 gap-4 md:gap-6'>
              <div data-reveal='fade-up' data-delay='1' className='flex flex-col items-center text-center bg-white rounded-2xl p-5 shadow-sm border border-pink-100 hover:shadow-md transition-shadow'>
                <span className='w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mb-4 shadow-md'>
                  <svg className='w-7 h-7 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                </span>
                <p className='text-pink-700 text-sm md:text-base font-medium'>
                  Harap datang tepat waktu untuk mengikuti rangkaian acara
                </p>
              </div>

              <div data-reveal='fade-up' data-delay='2' className='flex flex-col items-center text-center bg-white rounded-2xl p-5 shadow-sm border border-pink-100 hover:shadow-md transition-shadow'>
                <span className='w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center mb-4 shadow-md'>
                  <svg className='w-7 h-7 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7' />
                  </svg>
                </span>
                <p className='text-pink-700 text-sm md:text-base font-medium'>
                  Kehadiran Anda adalah hadiah terindah bagi kami
                </p>
              </div>

              <div data-reveal='fade-up' data-delay='3' className='flex flex-col items-center text-center bg-white rounded-2xl p-5 shadow-sm border border-pink-100 hover:shadow-md transition-shadow md:col-span-1 col-span-full md:mx-0 mx-auto md:w-full w-full max-w-xs'>
                <span className='w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center mb-4 shadow-md'>
                  <svg className='w-7 h-7 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                </span>
                <p className='text-pink-700 text-sm md:text-base font-medium'>
                  Konfirmasi kehadiran melalui RSVP di bawah
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Event);
