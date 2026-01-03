import React from 'react';

const Event = () => {
  const events = [
    {
      title: 'Akad Nikah',
      date: 'Minggu, 15 Februari 2026',
      time: '08:00 - 09:00 WIB',
      location: 'Masjid Al-Ikhlas',
      address: 'Jl. Harmoni No. 123, Jakarta Pusat',
      description:
        'Akad nikah akan dilaksanakan dalam suasana khidmat bersama keluarga terdekat',
      icon: '🕌',
      color: 'blue',
    },
    {
      title: 'Resepsi',
      date: 'Minggu, 15 Februari 2026',
      time: '11:00 - 15:00 WIB',
      location: 'Gedung Serbaguna Melati',
      address: 'Jl. Mawar Indah No. 456, Jakarta Selatan',
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
      className='py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-pink-50'
    >
      <div className='section-container'>
        {/* Section Header */}
        <div className='text-center mb-16 animate-slide-up'>
          <h2 className='heading-primary'>Wedding Events</h2>
          <div className='w-24 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto mb-4'></div>
          <p className='text-elegant text-lg max-w-2xl mx-auto'>
            Kami dengan senang hati mengundang Anda untuk hadir dalam momen
            bahagia kami
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8 md:gap-12'>
          {events.map((event, index) => (
            <div
              key={index}
              className={`animate-slide-up bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                event.color === 'blue'
                  ? 'border border-blue-100'
                  : 'border border-pink-100'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
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
                      <h4 className='font-semibold text-blue-800 text-lg mb-1'>
                        {event.location}
                      </h4>
                      <p className='text-blue-600 text-sm md:text-base leading-relaxed'>
                        {event.address}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => openMaps(event.address)}
                    className={`w-full mt-4 ${
                      event.color === 'blue' ? 'btn-blue' : 'btn-pink'
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
          className='mt-16 animate-slide-up'
          style={{ animationDelay: '0.4s' }}
        >
          <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg border border-blue-100 max-w-3xl mx-auto'>
            <h4 className='font-serif text-xl md:text-2xl text-blue-800 mb-4 text-center'>
              Catatan Penting
            </h4>
            <div className='grid md:grid-cols-2 gap-4 text-sm md:text-base text-blue-600'>
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
