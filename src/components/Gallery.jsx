import React, { useState } from 'react';

const Gallery = () => {
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
    <section id='gallery' className='py-16 md:py-24 bg-white'>
      <div className='section-container'>
        {/* Section Header */}
        <div className='text-center mb-16 animate-slide-up'>
          <h2 className='heading-primary'>Our Gallery</h2>
          <div className='w-24 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto mb-4'></div>
          <p className='text-elegant text-lg max-w-2xl mx-auto'>
            Momen-momen indah yang telah kami lalui bersama, menuju hari yang
            paling berkesan
          </p>
        </div>

        {/* Gallery Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`animate-slide-up group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                index % 3 === 0
                  ? 'sm:col-span-1 lg:col-span-1'
                  : index % 3 === 1
                  ? 'sm:col-span-1 lg:col-span-2'
                  : 'sm:col-span-2 lg:col-span-1'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(image)}
            >
              {/* Image Container */}
              <div className='relative overflow-hidden bg-blue-100 aspect-square'>
                <img
                  src={image.src}
                  alt={image.alt}
                  className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                  loading='lazy'
                />

                {/* Overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
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
          className='text-center mt-12 animate-slide-up'
          style={{ animationDelay: '0.6s' }}
        >
          <div className='bg-gradient-to-r from-blue-50 to-pink-50 rounded-2xl p-8 max-w-md mx-auto'>
            <div className='text-4xl mb-4'>📸</div>
            <h4 className='font-serif text-xl text-blue-800 mb-3'>
              Lebih Banyak Foto
            </h4>
            <p className='text-blue-600 text-sm mb-4'>
              Ikuti media sosial kami untuk melihat foto-foto lainnya
            </p>
            <div className='flex justify-center space-x-4'>
              <a
                href='#'
                className='w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center text-white transition-colors duration-300'
                aria-label='Instagram'
              >
                <span className='text-sm'>📷</span>
              </a>
              <a
                href='#'
                className='w-10 h-10 bg-pink-500 hover:bg-pink-600 rounded-full flex items-center justify-center text-white transition-colors duration-300'
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
              <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg'>
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
