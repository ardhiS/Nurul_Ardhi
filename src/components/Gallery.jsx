import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import FloralDecoration from './FloralDecoration';

const Gallery = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [selectedImage, setSelectedImage] = useState(null);

  // Sample gallery images (in real app, these would be actual image URLs)
  const galleryImages = [
    {
      id: 1,
      src: './photo/nurul.jpeg',
      alt: 'Pre-wedding photo 1',
      category: 'prewedding',
    },
    {
      id: 2,
      src: './photo/nurul3.jpeg',
      alt: 'Pre-wedding photo 2',
      category: 'prewedding',
    },
    {
      id: 3,
      src: './photo/nurul4.jpeg',
      alt: 'Engagement photo 1',
      category: 'engagement',
    },
    {
      id: 4,
      src: './photo/nurul5.jpeg',
      alt: 'Pre-wedding photo 3',
      category: 'prewedding',
    },
    {
      id: 5,
      src: './photo/nurul6.jpeg',
      alt: 'Engagement photo 2',
      category: 'engagement',
    },
    {
      id: 6,
      src: './photo/nurul7.jpeg',
      alt: 'Pre-wedding photo 4',
      category: 'prewedding',
    },
  ];

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
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`scroll-reveal-scale ${
                isVisible
                  ? `is-visible reveal-delay-${Math.min(index + 1, 6)}`
                  : ''
              } group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-pink-200 ${
                index % 3 === 0
                  ? 'sm:col-span-1 lg:col-span-1'
                  : index % 3 === 1
                  ? 'sm:col-span-1 lg:col-span-2'
                  : 'sm:col-span-2 lg:col-span-1'
              }`}
              onClick={() => openLightbox(image)}
            >
              {/* Image Container */}
              <div className='relative overflow-hidden bg-pink-100 aspect-square'>
                <img
                  src={image.src}
                  alt={image.alt}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                  loading='lazy'
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-pink-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  <div className='absolute bottom-0 left-0 right-0 p-4'>
                    <div className='flex items-center justify-between'>
                      <span className='text-white font-medium'>
                        {image.category === 'prewedding'
                          ? 'Pre-Wedding'
                          : 'Engagement'}
                      </span>
                      <div className='w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center'>
                        <span className='text-white text-lg'>🔍</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className='absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
              </div>
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
        >
          <div className='relative max-w-4xl max-h-full'>
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className='absolute -top-12 right-0 text-white hover:text-pink-400 transition-colors duration-300 text-4xl z-10'
              aria-label='Close lightbox'
            >
              ×
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
              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-pink-900/80 to-transparent p-6 rounded-b-lg'>
                <p className='text-white font-medium text-lg'>
                  {selectedImage.category === 'prewedding'
                    ? 'Pre-Wedding Session'
                    : 'Engagement Session'}
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
