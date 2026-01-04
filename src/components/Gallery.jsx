import React, { useState, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import FloralDecoration from './FloralDecoration';

const Gallery = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageErrors, setImageErrors] = useState({});

  // Sample gallery images (in real app, these would be actual image URLs)
  const galleryImages = [
    {
      id: 1,
      src: './photo/nurul.jpeg',
      alt: 'Foto pre-wedding Nurul dan Ardhi - Momen romantis',
      category: 'prewedding',
    },
    {
      id: 2,
      src: './photo/nurul3.jpeg',
      alt: 'Foto pre-wedding Nurul dan Ardhi - Outdoor',
      category: 'prewedding',
    },
    {
      id: 3,
      src: './photo/nurul4.jpeg',
      alt: 'Foto lamaran Nurul dan Ardhi',
      category: 'engagement',
    },
    {
      id: 4,
      src: './photo/nurul5.jpeg',
      alt: 'Foto pre-wedding Nurul dan Ardhi - Studio',
      category: 'prewedding',
    },
    {
      id: 5,
      src: './photo/nurul6.jpeg',
      alt: 'Foto lamaran Nurul dan Ardhi - Keluarga',
      category: 'engagement',
    },
    {
      id: 6,
      src: './photo/nurul7.jpeg',
      alt: 'Foto pre-wedding Nurul dan Ardhi - Candid',
      category: 'prewedding',
    },
  ];

  const handleImageError = useCallback((imageId) => {
    setImageErrors((prev) => ({ ...prev, [imageId]: true }));
  }, []);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section
      id='gallery'
      ref={sectionRef}
      className='py-16 md:py-24 bg-gradient-to-br from-pink-100 via-white to-pink-50 relative overflow-hidden'
    >
      {/* Floral SVG Decorations */}
      <FloralDecoration
        position='top-left'
        variant='pink'
        size='sm'
        opacity='opacity-35'
      />
      <FloralDecoration
        position='bottom-right'
        variant='pink'
        size='md'
        opacity='opacity-40'
      />

      {/* Background decorative elements */}
      <div className='absolute inset-0 opacity-20'>
        <div className='absolute top-20 left-20 w-64 h-64 bg-pink-300 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-20 w-48 h-48 bg-blue-200 rounded-full blur-3xl'></div>
        <div className='absolute top-1/2 right-1/3 w-32 h-32 bg-pink-400 rounded-full blur-3xl'></div>
      </div>

      <div className='section-container relative z-10'>
        {/* Section Header */}
        <div
          className={`text-center mb-16 scroll-reveal ${
            isVisible ? 'is-visible' : ''
          }`}
        >
          <p className='text-pink-500 text-sm font-medium tracking-widest uppercase mb-2'>
            Our Moments
          </p>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-pink-800 mb-4'>
            Our Gallery
          </h2>
          <div className='w-24 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto mb-4'></div>
          <p className='text-pink-600 text-lg max-w-2xl mx-auto'>
            Momen-momen indah yang telah kami lalui bersama, menuju hari yang
            paling berkesan
          </p>
        </div>

        {/* Gallery Grid */}
        <div
          className='grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4'
          role='list'
          aria-label='Galeri foto pre-wedding'
        >
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              role='listitem'
              className={`scroll-reveal-scale ${
                isVisible
                  ? `is-visible reveal-delay-${Math.min(index + 1, 6)}`
                  : ''
              } group cursor-pointer relative overflow-hidden rounded-xl md:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-pink-100 focus-within:ring-2 focus-within:ring-pink-400 focus-within:ring-offset-2`}
            >
              {/* Image Container */}
              <button
                onClick={() => !imageErrors[image.id] && openLightbox(image)}
                className='relative overflow-hidden bg-pink-50 aspect-square w-full focus:outline-none'
                aria-label={`Lihat ${image.alt}`}
                disabled={imageErrors[image.id]}
              >
                {imageErrors[image.id] ? (
                  /* Error Placeholder */
                  <div className='absolute inset-0 flex items-center justify-center bg-pink-50'>
                    <div className='text-center p-4'>
                      <span className='text-3xl block mb-2'>🖼️</span>
                      <p className='text-pink-400 text-xs'>
                        Foto tidak tersedia
                      </p>
                    </div>
                  </div>
                ) : (
                  <img
                    src={image.src}
                    alt={image.alt}
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
                    loading='lazy'
                    decoding='async'
                    onError={() => handleImageError(image.id)}
                  />
                )}

                {/* Overlay */}
                {!imageErrors[image.id] && (
                  <div className='absolute inset-0 bg-gradient-to-t from-pink-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity duration-300'>
                    <div className='absolute bottom-0 left-0 right-0 p-3 md:p-4'>
                      <div className='flex items-center justify-between'>
                        <span className='text-white font-medium text-xs md:text-sm'>
                          {image.category === 'prewedding'
                            ? 'Pre-Wedding'
                            : 'Engagement'}
                        </span>
                        <div className='w-8 h-8 md:w-10 md:h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center'>
                          <svg
                            className='w-4 h-4 md:w-5 md:h-5 text-white'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            aria-hidden='true'
                          >
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7'
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div
          className={`text-center mt-12 scroll-reveal ${
            isVisible ? 'is-visible reveal-delay-7' : ''
          }`}
        >
          <div className='bg-white rounded-2xl p-8 max-w-md mx-auto border border-pink-200 shadow-lg'>
            <div className='text-4xl mb-4'>📸</div>
            <h4 className='font-serif text-xl text-pink-700 mb-3'>
              Lebih Banyak Foto
            </h4>
            <p className='text-pink-500 text-sm mb-4'>
              Ikuti media sosial kami untuk melihat foto-foto lainnya
            </p>
            <div className='flex justify-center space-x-4'>
              <a
                href='#'
                className='w-10 h-10 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110'
                aria-label='Instagram'
              >
                <span className='text-sm'>📷</span>
              </a>
              <a
                href='#'
                className='w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110'
                aria-label='Facebook'
              >
                <span className='text-sm'>👥</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className='fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in'
          onClick={closeLightbox}
          onKeyDown={(e) => e.key === 'Escape' && closeLightbox()}
          role='dialog'
          aria-modal='true'
          aria-label='Lightbox galeri foto'
        >
          <div className='relative max-w-4xl max-h-full'>
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className='absolute -top-12 right-0 text-white hover:text-pink-400 transition-colors duration-300 p-2 min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-pink-400 rounded-full'
              aria-label='Tutup lightbox'
            >
              <svg
                className='w-8 h-8'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>

            {/* Image */}
            <div className='relative'>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className='max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl'
                onClick={(e) => e.stopPropagation()}
              />

              {/* Image Info */}
              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-pink-900/80 to-transparent p-4 md:p-6 rounded-b-lg'>
                <p className='text-white font-medium text-base md:text-lg'>
                  {selectedImage.category === 'prewedding'
                    ? 'Pre-Wedding Session'
                    : 'Engagement Session'}
                </p>
                <p className='text-pink-200 text-sm mt-1'>
                  {selectedImage.alt}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
