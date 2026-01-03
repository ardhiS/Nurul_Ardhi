import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import FloralDecoration from './FloralDecoration';

const Gift = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });
  const [copiedAccount, setCopiedAccount] = useState(null);

  const giftOptions = [
    {
      type: 'Bank Transfer',
      accounts: [
        {
          bank: 'BCA',
          accountNumber: '1234567890',
          accountName: 'Nurul Faizah Ulfah',
          logo: '🏦',
        },
        {
          bank: 'Mandiri',
          accountNumber: '9876543210',
          accountName: 'Ardhi Sasongko',
          logo: '🏧',
        },
      ],
    },
    {
      type: 'E-Wallet',
      accounts: [
        {
          bank: 'GoPay',
          accountNumber: '081234567890',
          accountName: 'Nurul Faizah Ulfah',
          logo: '💳',
        },
        {
          bank: 'OVO',
          accountNumber: '081987654321',
          accountName: 'Ardhi Sasongko',
          logo: '💰',
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
      <FloralDecoration
        position='top-right'
        variant='pink'
        size='md'
        opacity='opacity-40'
      />
      <FloralDecoration
        position='bottom-left'
        variant='pink'
        size='sm'
        opacity='opacity-35'
      />

      {/* Background decorative elements */}
      <div className='absolute inset-0 opacity-30'>
        <div className='absolute top-20 left-20 w-64 h-64 bg-pink-300 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-20 w-48 h-48 bg-blue-200 rounded-full blur-2xl'></div>
      </div>

      <div className='section-container relative z-10'>
        {/* Section Header */}
        <div
          className={`text-center mb-16 scroll-reveal ${
            isVisible ? 'is-visible' : ''
          }`}
        >
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-pink-700 mb-4'>
            Wedding Gift
          </h2>
          <div className='w-24 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent mx-auto mb-4'></div>
          <p className='text-pink-600 text-lg max-w-3xl mx-auto'>
            Doa restu Anda adalah hadiah yang paling indah bagi kami. Namun jika
            Anda ingin memberikan hadiah, berikut adalah cara yang dapat Anda
            gunakan
          </p>
        </div>

        {/* Gift Message */}
        <div
          className={`text-center mb-12 scroll-reveal ${
            isVisible ? 'is-visible reveal-delay-2' : ''
          }`}
        >
          <div className='bg-white rounded-2xl p-8 md:p-12 max-w-2xl mx-auto border border-pink-200 shadow-lg'>
            <div className='text-6xl mb-6'>🎁</div>
            <h3 className='font-script text-3xl md:text-4xl text-pink-600 mb-4'>
              Amplop Digital
            </h3>
            <p className='text-pink-600 text-base md:text-lg leading-relaxed'>
              Terima kasih atas niat baik Anda. Hadiah Anda akan sangat membantu
              kami memulai hidup baru sebagai keluarga kecil yang bahagia.
            </p>
          </div>
        </div>

        {/* Gift Options */}
        <div className='space-y-8 max-w-4xl mx-auto'>
          {giftOptions.map((option, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`scroll-reveal-scale ${
                isVisible ? `is-visible reveal-delay-${3 + categoryIndex}` : ''
              }`}
            >
              <h4 className='font-serif text-2xl text-pink-600 mb-6 text-center'>
                {option.type}
              </h4>

              <div className='grid md:grid-cols-2 gap-6'>
                {option.accounts.map((account, accountIndex) => (
                  <div
                    key={accountIndex}
                    className='bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-pink-200 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1'
                  >
                    {/* Bank Header */}
                    <div className='flex items-center justify-center mb-6'>
                      <div className='w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center text-2xl text-white mr-4'>
                        {account.logo}
                      </div>
                      <div className='text-center'>
                        <h5 className='font-semibold text-xl text-pink-700'>
                          {account.bank}
                        </h5>
                        <p className='text-pink-500 text-sm'>Transfer Bank</p>
                      </div>
                    </div>

                    {/* Account Details */}
                    <div className='space-y-4'>
                      <div>
                        <label className='block text-pink-600 text-sm font-medium mb-2'>
                          Nomor Rekening
                        </label>
                        <div className='flex items-center space-x-3'>
                          <div className='flex-1 bg-pink-50 rounded-lg p-3 font-mono text-pink-800 text-lg font-semibold'>
                            {account.accountNumber}
                          </div>
                          <button
                            onClick={() =>
                              copyToClipboard(
                                account.accountNumber,
                                account.bank
                              )
                            }
                            className='bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition-colors duration-300 flex items-center justify-center min-w-[48px]'
                            title='Copy account number'
                          >
                            {copiedAccount ===
                            `${account.bank}-${account.accountNumber}` ? (
                              <span className='text-sm'>✅</span>
                            ) : (
                              <span className='text-sm'>📋</span>
                            )}
                          </button>
                        </div>
                        {copiedAccount ===
                          `${account.bank}-${account.accountNumber}` && (
                          <p className='text-green-600 text-sm mt-2 text-center'>
                            Nomor rekening berhasil disalin!
                          </p>
                        )}
                      </div>

                      <div>
                        <label className='block text-pink-600 text-sm font-medium mb-2'>
                          Atas Nama
                        </label>
                        <div className='bg-pink-50 rounded-lg p-3 font-medium text-pink-800'>
                          {account.accountName}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div
          className={`mt-16 text-center scroll-reveal ${
            isVisible ? 'is-visible reveal-delay-5' : ''
          }`}
        >
          <div className='bg-white rounded-2xl p-6 md:p-8 max-w-3xl mx-auto border border-pink-200 shadow-lg'>
            <h4 className='font-serif text-xl text-pink-700 mb-4'>
              Catatan Penting
            </h4>
            <div className='grid md:grid-cols-2 gap-4 text-sm text-pink-600'>
              <div className='flex items-start space-x-3'>
                <span className='text-blue-500 text-lg flex-shrink-0'>💡</span>
                <p className='text-left'>
                  Mohon sertakan nama Anda pada keterangan transfer untuk
                  konfirmasi
                </p>
              </div>
              <div className='flex items-start space-x-3'>
                <span className='text-blue-500 text-lg flex-shrink-0'>📱</span>
                <p className='text-left'>
                  Konfirmasi transfer dapat dikirim via WhatsApp kepada mempelai
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Thank You Message */}
        <div
          className={`text-center mt-12 scroll-reveal ${
            isVisible ? 'is-visible reveal-delay-6' : ''
          }`}
        >
          <p className='text-pink-700 text-lg md:text-xl italic'>
            "Barakallahu lakuma wa baraka alaikuma wa jama'a bainakuma fi khair"
          </p>
          <p className='text-pink-500 text-base mt-2'>
            Semoga Allah memberkahi kalian berdua dan menyatukan kalian dalam
            kebaikan
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gift;
