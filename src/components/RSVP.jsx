import React, { useState } from 'react';

const RSVP = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    attendance: '',
    guests: '1',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      setIsSubmitting(false);

      // Reset form after showing success
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          attendance: '',
          guests: '1',
          message: '',
        });
      }, 3000);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <section
        id='rsvp'
        className='py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-pink-50'
      >
        <div className='section-container'>
          <div className='max-w-2xl mx-auto text-center animate-fade-in'>
            <div className='bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-blue-100'>
              <div className='text-6xl mb-6'>🎉</div>
              <h3 className='font-serif text-3xl text-blue-800 mb-4'>
                Terima Kasih!
              </h3>
              <p className='text-blue-600 text-lg mb-6'>
                Konfirmasi kehadiran Anda telah berhasil dikirim. Kami sangat
                menantikan kehadiran Anda di hari bahagia kami.
              </p>
              <div className='w-20 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto'></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id='rsvp'
      className='py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-pink-50'
    >
      <div className='section-container'>
        {/* Section Header */}
        <div className='text-center mb-16 animate-slide-up'>
          <h2 className='heading-primary'>RSVP</h2>
          <div className='w-24 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto mb-4'></div>
          <p className='text-elegant text-lg max-w-2xl mx-auto'>
            Mohon konfirmasi kehadiran Anda agar kami dapat mempersiapkan acara
            dengan lebih baik
          </p>
        </div>

        <div className='max-w-2xl mx-auto'>
          {/* RSVP Form */}
          <div
            className='bg-white rounded-3xl shadow-xl p-6 md:p-8 border border-blue-100 animate-slide-up'
            style={{ animationDelay: '0.2s' }}
          >
            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Name Field */}
              <div>
                <label
                  htmlFor='name'
                  className='block text-blue-700 font-medium mb-2 text-sm md:text-base'
                >
                  Nama Lengkap *
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-pink-400 focus:ring-4 focus:ring-pink-100 outline-none transition-all duration-300 text-blue-800 placeholder-blue-400'
                  placeholder='Masukkan nama lengkap Anda'
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor='email'
                  className='block text-blue-700 font-medium mb-2 text-sm md:text-base'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-pink-400 focus:ring-4 focus:ring-pink-100 outline-none transition-all duration-300 text-blue-800 placeholder-blue-400'
                  placeholder='email@example.com'
                />
              </div>

              {/* Phone Field */}
              <div>
                <label
                  htmlFor='phone'
                  className='block text-blue-700 font-medium mb-2 text-sm md:text-base'
                >
                  No. WhatsApp
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  value={formData.phone}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-pink-400 focus:ring-4 focus:ring-pink-100 outline-none transition-all duration-300 text-blue-800 placeholder-blue-400'
                  placeholder='08123456789'
                />
              </div>

              {/* Attendance Field */}
              <div>
                <label className='block text-blue-700 font-medium mb-3 text-sm md:text-base'>
                  Konfirmasi Kehadiran *
                </label>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                  <label className='relative'>
                    <input
                      type='radio'
                      name='attendance'
                      value='hadir'
                      required
                      checked={formData.attendance === 'hadir'}
                      onChange={handleInputChange}
                      className='sr-only'
                    />
                    <div
                      className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 text-center ${
                        formData.attendance === 'hadir'
                          ? 'border-pink-400 bg-pink-50 text-pink-700'
                          : 'border-blue-200 bg-white text-blue-600 hover:border-blue-300'
                      }`}
                    >
                      <span className='text-2xl mb-2 block'>✅</span>
                      <span className='font-medium'>Ya, Saya Hadir</span>
                    </div>
                  </label>
                  <label className='relative'>
                    <input
                      type='radio'
                      name='attendance'
                      value='tidak_hadir'
                      required
                      checked={formData.attendance === 'tidak_hadir'}
                      onChange={handleInputChange}
                      className='sr-only'
                    />
                    <div
                      className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 text-center ${
                        formData.attendance === 'tidak_hadir'
                          ? 'border-blue-400 bg-blue-50 text-blue-700'
                          : 'border-blue-200 bg-white text-blue-600 hover:border-blue-300'
                      }`}
                    >
                      <span className='text-2xl mb-2 block'>❌</span>
                      <span className='font-medium'>
                        Maaf, Tidak Bisa Hadir
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Number of Guests */}
              {formData.attendance === 'hadir' && (
                <div>
                  <label
                    htmlFor='guests'
                    className='block text-blue-700 font-medium mb-2 text-sm md:text-base'
                  >
                    Jumlah Tamu
                  </label>
                  <select
                    id='guests'
                    name='guests'
                    value={formData.guests}
                    onChange={handleInputChange}
                    className='w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-pink-400 focus:ring-4 focus:ring-pink-100 outline-none transition-all duration-300 text-blue-800 bg-white'
                  >
                    <option value='1'>1 Orang</option>
                    <option value='2'>2 Orang</option>
                    <option value='3'>3 Orang</option>
                    <option value='4'>4 Orang</option>
                    <option value='5'>5+ Orang</option>
                  </select>
                </div>
              )}

              {/* Message Field */}
              <div>
                <label
                  htmlFor='message'
                  className='block text-blue-700 font-medium mb-2 text-sm md:text-base'
                >
                  Pesan & Doa
                </label>
                <textarea
                  id='message'
                  name='message'
                  rows='4'
                  value={formData.message}
                  onChange={handleInputChange}
                  className='w-full px-4 py-3 border-2 border-blue-200 rounded-xl focus:border-pink-400 focus:ring-4 focus:ring-pink-100 outline-none transition-all duration-300 text-blue-800 placeholder-blue-400 resize-none'
                  placeholder='Tuliskan pesan atau doa untuk mempelai...'
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full btn-primary text-base md:text-lg py-4 px-6 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {isSubmitting ? (
                  <span className='flex items-center justify-center'>
                    <svg
                      className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                    >
                      <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'
                      ></circle>
                      <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                      ></path>
                    </svg>
                    Mengirim...
                  </span>
                ) : (
                  'Kirim Konfirmasi'
                )}
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div
            className='mt-8 text-center animate-slide-up'
            style={{ animationDelay: '0.4s' }}
          >
            <div className='bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-blue-100'>
              <h4 className='font-serif text-lg text-blue-800 mb-3'>
                Informasi Tambahan
              </h4>
              <div className='grid sm:grid-cols-2 gap-4 text-sm text-blue-600'>
                <div className='flex items-center justify-center space-x-2'>
                  <span className='text-pink-500'>📞</span>
                  <span>Hubungi: 0812-3456-7890 (Nurul)</span>
                </div>
                <div className='flex items-center justify-center space-x-2'>
                  <span className='text-pink-500'>📞</span>
                  <span>Hubungi: 0812-9876-5432 (Ardhi)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;
