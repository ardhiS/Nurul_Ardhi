import React, { useState, useRef } from 'react';
import { useAutoReveal } from '../hooks/useScrollReveal';
import FloralDecoration from './FloralDecoration';

const Gift = () => {
  const sectionRef = useRef(null);
  useAutoReveal(sectionRef);
  const [copiedAccount, setCopiedAccount] = useState(null);

  const giftOptions = [
    {
      type: 'Bank Transfer',
      accounts: [
        {
          bank: 'BSI',
          accountNumber: '7213153557',
          accountName: 'Nurul Faizah Ulfah',
          logo: '🏧',
        },
      ],
    },
  ];

  const copyToClipboard = (accountNumber, bankName) => {
    navigator.clipboard.writeText(accountNumber).then(() => {
      setCopiedAccount(`${bankName}-${accountNumber}`);
      setTimeout(() => setCopiedAccount(null), 2000);
    });
  };

  return (
    <section
      id='gift'
      ref={sectionRef}
      className='py-16 md:py-24 bg-gradient-to-br from-pink-100 via-white to-pink-50 relative overflow-hidden'
    >
      {/* Floral SVG Decorations */}
      <FloralDecoration position='top-right' variant='pink' size='md' opacity='opacity-40' />
      <FloralDecoration position='bottom-left' variant='pink' size='sm' opacity='opacity-35' />

      {/* Background decorative elements */}
      <div className='absolute inset-0 opacity-30'>
        <div className='absolute top-20 left-20 w-64 h-64 bg-pink-300 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-20 w-48 h-48 bg-accent-300 rounded-full blur-2xl'></div>
      </div>

      <div className='section-container relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-16'>
          <h2 data-reveal='fade-up' className='text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-pink-700 mb-4'>
            Wedding Gift
          </h2>
          <div data-reveal='zoom' data-delay='1' className='w-24 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto mb-4'></div>
          <p data-reveal='fade-up' data-delay='2' className='text-pink-600 text-lg max-w-3xl mx-auto'>
            Doa restu Anda adalah hadiah yang paling indah bagi kami. Namun jika
            Anda ingin memberikan hadiah, berikut adalah cara yang dapat Anda
            gunakan
          </p>
        </div>

        {/* Gift Message */}
        <div data-reveal='zoom-up' data-duration='slow' className='text-center mb-12'>
          <div className='bg-white rounded-2xl p-8 md:p-12 max-w-2xl mx-auto border border-pink-200 shadow-lg'>
            <div data-reveal='zoom' data-delay='1' className='text-6xl mb-6'>🎁</div>
            <h3 data-reveal='fade-up' data-delay='2' className='font-script text-3xl md:text-4xl text-pink-600 mb-4'>
              Amplop Digital
            </h3>
            <p data-reveal='fade-up' data-delay='3' className='text-pink-600 text-base md:text-lg leading-relaxed'>
              Terima kasih atas niat baik Anda. Hadiah Anda akan sangat membantu
              kami memulai hidup baru sebagai keluarga kecil yang bahagia.
            </p>
          </div>
        </div>

        {/* Gift Options */}
        <div className='space-y-8 max-w-4xl mx-auto'>
          {giftOptions.map((option, categoryIndex) => (
            <div key={categoryIndex} data-reveal='fade-up' data-delay='1'>
              <h4 data-reveal='fade-up' data-delay='2' className='font-serif text-2xl text-pink-600 mb-8 text-center'>
                {option.type}
              </h4>

              <div className='flex justify-center'>
                {option.accounts.map((account, accountIndex) => (
                  <div
                    key={accountIndex}
                    data-reveal='zoom-up'
                    data-delay='3'
                    className='bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-pink-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-full max-w-md'
                  >
                    {/* Bank Header */}
                    <div className='flex flex-col items-center mb-8'>
                      <div className='w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mb-4 shadow-lg'>
                        <svg
                          className='w-10 h-10 text-white'
                          fill='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path d='M4 10h16v10H4V10zm0-6h16v4H4V4zm2 8v6h12v-6H6zm2 2h8v2H8v-2z' />
                        </svg>
                      </div>
                      <h5 className='font-bold text-2xl text-accent-600'>
                        {account.bank}
                      </h5>
                      <p className='text-pink-500 text-sm mt-1'>
                        Transfer Bank
                      </p>
                    </div>

                    {/* Account Details */}
                    <div className='space-y-5'>
                      <div className='bg-gradient-to-r from-pink-50 to-accent-50 rounded-2xl p-5 border border-pink-100'>
                        <label className='block text-pink-600 text-xs font-semibold uppercase tracking-wider mb-3'>
                          Nomor Rekening
                        </label>
                        <div className='flex items-center justify-between'>
                          <span className='font-mono text-xl md:text-2xl font-bold text-gray-800 tracking-wider'>
                            {account.accountNumber}
                          </span>
                          <button
                            onClick={() =>
                              copyToClipboard(
                                account.accountNumber,
                                account.bank,
                              )
                            }
                            className='bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white p-3 rounded-xl transition-all duration-300 flex items-center justify-center min-w-[48px] shadow-md hover:shadow-lg'
                            title='Copy account number'
                          >
                            {copiedAccount ===
                            `${account.bank}-${account.accountNumber}` ? (
                              <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                              </svg>
                            ) : (
                              <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z' />
                              </svg>
                            )}
                          </button>
                        </div>
                        {copiedAccount ===
                          `${account.bank}-${account.accountNumber}` && (
                          <p className='text-green-600 text-sm mt-3 text-center font-medium flex items-center justify-center gap-1'>
                            <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                            </svg>
                            Nomor rekening berhasil disalin!
                          </p>
                        )}
                      </div>

                      <div className='bg-gradient-to-r from-accent-50 to-pink-50 rounded-2xl p-5 border border-accent-100'>
                        <label className='block text-pink-600 text-xs font-semibold uppercase tracking-wider mb-3'>
                          Atas Nama
                        </label>
                        <span className='font-semibold text-lg text-gray-800'>
                          {account.accountName}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div data-reveal='fade-up' data-duration='slow' className='mt-16 text-center'>
          <div className='bg-gradient-to-br from-pink-50 to-accent-50 rounded-3xl p-8 md:p-10 max-w-2xl mx-auto border border-pink-200 shadow-lg'>
            <div data-reveal='zoom' className='text-center mb-6'>
              <span className='inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full mb-4'>
                <svg
                  className='w-7 h-7 text-white'
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
            <div className='space-y-4'>
              <div data-reveal='fade-left' data-delay='1' className='flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm border border-pink-100'>
                <span className='flex-shrink-0 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center shadow-md'>
                  <svg className='w-6 h-6 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' />
                  </svg>
                </span>
                <p className='text-pink-700 text-sm md:text-base font-medium'>
                  Mohon sertakan nama Anda pada keterangan transfer untuk
                  konfirmasi
                </p>
              </div>
              <div data-reveal='fade-right' data-delay='2' className='flex items-center gap-4 bg-white rounded-2xl p-4 shadow-sm border border-blue-100'>
                <span className='flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-400 to-green-500 rounded-xl flex items-center justify-center shadow-md'>
                  <svg className='w-6 h-6 text-white' fill='currentColor' viewBox='0 0 24 24'>
                    <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z' />
                  </svg>
                </span>
                <p className='text-pink-700 text-sm md:text-base font-medium'>
                  Konfirmasi transfer dapat dikirim via WhatsApp kepada mempelai
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Thank You Message */}
        <div data-reveal='fade-up' data-delay='3' className='text-center mt-12'>
          <p className='text-pink-700 text-lg md:text-xl italic'>
            "Barakallahu lakuma wa baraka alaikuma wa jama'a bainakuma fi khair"
          </p>
          <p data-reveal='fade-up' data-delay='4' className='text-pink-500 text-base mt-2'>
            Semoga Allah memberkahi kami berdua dan menyatukan kami dalam
            kebaikan
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gift;
