import React, { useState, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import FloralDecoration from './FloralDecoration';

const RSVP = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  // RSVP form state
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

  // Guest wishes/messages state
  const [wishFormData, setWishFormData] = useState({
    guestName: '',
    attendance: '',
    guestCount: '1',
    wishMessage: '',
  });
  const [wishes, setWishes] = useState([]);
  const [wishErrors, setWishErrors] = useState({});
  const [isWishSubmitting, setIsWishSubmitting] = useState(false);

  // Load wishes from localStorage on mount
  useEffect(() => {
    const savedWishes = localStorage.getItem('wedding-wishes');
    if (savedWishes) {
      try {
        const parsed = JSON.parse(savedWishes);
        // Convert timestamp strings back to Date objects
        const wishesWithDates = parsed.map((wish) => ({
          ...wish,
          timestamp: new Date(wish.timestamp),
        }));
        setWishes(wishesWithDates);
      } catch (e) {
        console.error('Error loading wishes:', e);
      }
    }
  }, []);

  // Save wishes to localStorage whenever they change
  useEffect(() => {
    if (wishes.length > 0) {
      localStorage.setItem('wedding-wishes', JSON.stringify(wishes));
    }
  }, [wishes]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle wish form input changes
  const handleWishInputChange = (e) => {
    const { name, value } = e.target;
    setWishFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (wishErrors[name]) {
      setWishErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Validate wish form
  const validateWishForm = () => {
    const errors = {};
    if (!wishFormData.guestName.trim()) {
      errors.guestName = 'Nama harus diisi';
    }
    if (!wishFormData.attendance) {
      errors.attendance = 'Pilih status kehadiran';
    }
    if (!wishFormData.wishMessage.trim()) {
      errors.wishMessage = 'Pesan ucapan harus diisi';
    }
    setWishErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle wish form submission
  const handleWishSubmit = (e) => {
    e.preventDefault();
    if (!validateWishForm()) return;

    setIsWishSubmitting(true);

    // Simulate submission delay for better UX
    setTimeout(() => {
      const newWish = {
        id: Date.now(),
        guestName: wishFormData.guestName.trim(),
        attendance: wishFormData.attendance,
        guestCount:
          wishFormData.attendance === 'hadir'
            ? parseInt(wishFormData.guestCount)
            : 0,
        wishMessage: wishFormData.wishMessage.trim(),
        timestamp: new Date(),
      };

      // Add new wish to the list (newest first)
      setWishes((prev) => [newWish, ...prev]);

      // Reset form
      setWishFormData({
        guestName: '',
        attendance: '',
        guestCount: '1',
        wishMessage: '',
      });
      setIsWishSubmitting(false);
    }, 500);
  };

  // Format timestamp for display
  const formatTimestamp = (date) => {
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return 'Baru saja';
    if (minutes < 60) return `${minutes} menit yang lalu`;
    if (hours < 24) return `${hours} jam yang lalu`;
    if (days < 7) return `${days} hari yang lalu`;

    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
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
        className='py-16 md:py-24 bg-gradient-to-br from-pink-50 via-white to-pink-100 relative overflow-hidden'
      >
        {/* Background decorative elements */}
        <div className='absolute inset-0 opacity-20'>
          <div className='absolute top-20 right-20 w-64 h-64 bg-pink-300 rounded-full blur-3xl'></div>
          <div className='absolute bottom-20 left-20 w-48 h-48 bg-blue-200 rounded-full blur-3xl'></div>
        </div>

        <div className='section-container relative z-10'>
          <div className='max-w-2xl mx-auto text-center scroll-reveal is-visible'>
            <div className='bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-pink-200'>
              <div className='text-6xl mb-6'>🎉</div>
              <h3 className='font-serif text-3xl text-pink-700 mb-4'>
                Terima Kasih!
              </h3>
              <p className='text-pink-600 text-lg mb-6'>
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
        <div className='absolute top-1/2 left-1/4 w-32 h-32 bg-pink-400 rounded-full blur-3xl'></div>
      </div>

      <div className='section-container relative z-10'>
        <div className='max-w-2xl mx-auto'>
          <div
            className={`mt-16 scroll-reveal ${
              isVisible ? 'is-visible reveal-delay-4' : ''
            }`}
          >
            {/* Section Header */}
            <div className='text-center mb-8'>
              <h3 className='text-2xl md:text-3xl font-serif font-semibold text-pink-800 mb-2'>
                Ucapan & Doa
              </h3>
              <div className='w-16 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto mb-3'></div>
              <p className='text-pink-600 text-sm md:text-base'>
                Berikan ucapan dan doa terbaik untuk kedua mempelai
              </p>
            </div>

            {/* Wish Form */}
            <div className='bg-white rounded-2xl shadow-lg p-6 border border-pink-200 mb-8'>
              <form onSubmit={handleWishSubmit} className='space-y-5'>
                {/* Guest Name */}
                <div>
                  <label
                    htmlFor='guestName'
                    className='block text-pink-700 font-medium mb-2 text-sm'
                  >
                    Nama Anda *
                  </label>
                  <input
                    type='text'
                    id='guestName'
                    name='guestName'
                    value={wishFormData.guestName}
                    onChange={handleWishInputChange}
                    className={`w-full px-4 py-3 bg-pink-50 border-2 rounded-xl focus:ring-4 focus:ring-pink-100 outline-none transition-all duration-300 text-pink-800 placeholder-pink-400 ${
                      wishErrors.guestName
                        ? 'border-red-400 focus:border-red-400'
                        : 'border-pink-200 focus:border-pink-400'
                    }`}
                    placeholder='Masukkan nama Anda'
                  />
                  {wishErrors.guestName && (
                    <p className='text-red-500 text-xs mt-1'>
                      {wishErrors.guestName}
                    </p>
                  )}
                </div>

                {/* Attendance Status */}
                <div>
                  <label className='block text-pink-700 font-medium mb-2 text-sm'>
                    Status Kehadiran *
                  </label>
                  <div className='grid grid-cols-2 gap-3'>
                    <label className='relative cursor-pointer'>
                      <input
                        type='radio'
                        name='attendance'
                        value='hadir'
                        checked={wishFormData.attendance === 'hadir'}
                        onChange={handleWishInputChange}
                        className='sr-only'
                      />
                      <div
                        className={`p-3 border-2 rounded-xl text-center transition-all duration-300 ${
                          wishFormData.attendance === 'hadir'
                            ? 'border-pink-500 bg-pink-100 text-pink-700'
                            : 'border-pink-200 bg-pink-50 text-pink-600 hover:border-pink-300'
                        }`}
                      >
                        <span className='text-lg block mb-1'>✅</span>
                        <span className='text-sm font-medium'>Hadir</span>
                      </div>
                    </label>
                    <label className='relative cursor-pointer'>
                      <input
                        type='radio'
                        name='attendance'
                        value='tidak_hadir'
                        checked={wishFormData.attendance === 'tidak_hadir'}
                        onChange={handleWishInputChange}
                        className='sr-only'
                      />
                      <div
                        className={`p-3 border-2 rounded-xl text-center transition-all duration-300 ${
                          wishFormData.attendance === 'tidak_hadir'
                            ? 'border-blue-500 bg-blue-100 text-blue-700'
                            : 'border-pink-200 bg-pink-50 text-pink-600 hover:border-pink-300'
                        }`}
                      >
                        <span className='text-lg block mb-1'>🙏</span>
                        <span className='text-sm font-medium'>Tidak Hadir</span>
                      </div>
                    </label>
                  </div>
                  {wishErrors.attendance && (
                    <p className='text-red-500 text-xs mt-1'>
                      {wishErrors.attendance}
                    </p>
                  )}
                </div>

                {/* Number of Guests - Only show if attending */}
                {wishFormData.attendance === 'hadir' && (
                  <div className='animate-fade-in'>
                    <label
                      htmlFor='guestCount'
                      className='block text-pink-700 font-medium mb-2 text-sm'
                    >
                      Jumlah Tamu *
                    </label>
                    <select
                      id='guestCount'
                      name='guestCount'
                      value={wishFormData.guestCount}
                      onChange={handleWishInputChange}
                      className='w-full px-4 py-3 bg-pink-50 border-2 border-pink-200 rounded-xl focus:ring-4 focus:ring-pink-100 focus:border-pink-400 outline-none transition-all duration-300 text-pink-800 min-h-[48px]'
                    >
                      <option value='1'>1 Orang</option>
                      <option value='2'>2 Orang</option>
                      <option value='3'>3 Orang</option>
                      <option value='4'>4 Orang</option>
                      <option value='5'>5 Orang</option>
                    </select>
                    <p className='text-pink-400 text-xs mt-1'>
                      Termasuk Anda sendiri
                    </p>
                  </div>
                )}

                {/* Wish Message */}
                <div>
                  <label
                    htmlFor='wishMessage'
                    className='block text-pink-700 font-medium mb-2 text-sm'
                  >
                    Ucapan & Doa *
                  </label>
                  <textarea
                    id='wishMessage'
                    name='wishMessage'
                    rows='3'
                    value={wishFormData.wishMessage}
                    onChange={handleWishInputChange}
                    className={`w-full px-4 py-3 bg-pink-50 border-2 rounded-xl focus:ring-4 focus:ring-pink-100 outline-none transition-all duration-300 text-pink-800 placeholder-pink-400 resize-none ${
                      wishErrors.wishMessage
                        ? 'border-red-400 focus:border-red-400'
                        : 'border-pink-200 focus:border-pink-400'
                    }`}
                    placeholder='Tuliskan ucapan dan doa untuk kedua mempelai...'
                  ></textarea>
                  {wishErrors.wishMessage && (
                    <p className='text-red-500 text-xs mt-1'>
                      {wishErrors.wishMessage}
                    </p>
                  )}
                </div>

                {/* Additional Info */}
                <div
                  className={`mt-8 text-center scroll-reveal ${
                    isVisible ? 'is-visible reveal-delay-3' : ''
                  }`}
                >
                  <div className='bg-white rounded-2xl p-6 shadow-lg border border-pink-200'>
                    <h4 className='font-serif text-lg text-pink-700 mb-3'>
                      Informasi Tambahan
                    </h4>
                    <div className='grid sm:grid-cols-2 gap-4 text-sm text-pink-600'>
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

                {/* Submit Button */}
                <button
                  type='submit'
                  disabled={isWishSubmitting}
                  className='w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white py-3 px-6 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-medium shadow-md hover:shadow-lg'
                >
                  {isWishSubmitting ? (
                    <span className='flex items-center justify-center'>
                      <svg
                        className='animate-spin -ml-1 mr-2 h-4 w-4 text-white'
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
                    <span className='flex items-center justify-center'>
                      <span className='mr-2'>💌</span>
                      Kirim Ucapan
                    </span>
                  )}
                </button>
              </form>
            </div>

            {/* Wishes List */}
            <div className='space-y-4'>
              {wishes.length === 0 ? (
                /* Empty State */
                <div className='bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 border border-pink-100 text-center'>
                  <div className='text-5xl mb-4'>💝</div>
                  <p className='text-pink-600 font-medium mb-1'>
                    Belum ada ucapan
                  </p>
                  <p className='text-pink-400 text-sm'>
                    Jadilah yang pertama memberikan ucapan dan doa untuk kedua
                    mempelai
                  </p>
                </div>
              ) : (
                /* Wishes Cards */
                wishes.map((wish) => (
                  <div
                    key={wish.id}
                    className='bg-white rounded-2xl p-5 shadow-md border border-pink-100 hover:shadow-lg transition-shadow duration-300'
                  >
                    {/* Header: Name + Badge + Time */}
                    <div className='flex items-start justify-between mb-3'>
                      <div className='flex items-center gap-3'>
                        {/* Avatar */}
                        <div className='w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center text-white font-semibold text-sm shadow-sm'>
                          {wish.guestName.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <h5 className='font-semibold text-pink-800 text-sm md:text-base'>
                            {wish.guestName}
                          </h5>
                          {/* Attendance Badge */}
                          <div className='flex items-center gap-2 flex-wrap'>
                            <span
                              className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                                wish.attendance === 'hadir'
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-blue-100 text-blue-700'
                              }`}
                            >
                              {wish.attendance === 'hadir'
                                ? '✓ Hadir'
                                : '○ Tidak Hadir'}
                            </span>
                            {wish.attendance === 'hadir' &&
                              wish.guestCount > 0 && (
                                <span className='inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-pink-100 text-pink-700'>
                                  👥 {wish.guestCount} orang
                                </span>
                              )}
                          </div>
                        </div>
                      </div>
                      {/* Timestamp */}
                      <span className='text-pink-400 text-xs whitespace-nowrap'>
                        {formatTimestamp(wish.timestamp)}
                      </span>
                    </div>
                    {/* Message */}
                    <p className='text-pink-700 text-sm leading-relaxed pl-13'>
                      {wish.wishMessage}
                    </p>
                  </div>
                ))
              )}
            </div>

            {/* Wishes Count */}
            {wishes.length > 0 && (
              <div className='text-center mt-6'>
                <p className='text-pink-500 text-sm'>
                  💕 {wishes.length} ucapan dari tamu undangan
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RSVP;
