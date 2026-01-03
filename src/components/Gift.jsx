import React, { useState } from 'react';

const Gift = () => {
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
      className='py-16 md:py-24 bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 relative overflow-hidden'
    >
      {/* Background decorative elements */}
      <div className='absolute inset-0 opacity-10'>
        <div className='absolute top-20 left-20 w-64 h-64 bg-pink-300 rounded-full blur-3xl'></div>
        <div className='absolute bottom-20 right-20 w-48 h-48 bg-white rounded-full blur-2xl'></div>
      </div>

      <div className='section-container relative z-10'>
        {/* Section Header */}
        <div className='text-center mb-16 animate-slide-up'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-white mb-4'>
            Wedding Gift
          </h2>
          <div className='w-24 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto mb-4'></div>
          <p className='text-blue-100 text-lg max-w-3xl mx-auto'>
            Doa restu Anda adalah hadiah yang paling indah bagi kami. Namun jika
            Anda ingin memberikan hadiah, berikut adalah cara yang dapat Anda
            gunakan
          </p>
        </div>

        {/* Gift Message */}
        <div
          className='text-center mb-12 animate-slide-up'
          style={{ animationDelay: '0.2s' }}
        >
          <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-2xl mx-auto border border-white/20'>
            <div className='text-6xl mb-6'>🎁</div>
            <h3 className='font-script text-3xl md:text-4xl text-pink-300 mb-4'>
              Amplop Digital
            </h3>
            <p className='text-blue-200 text-base md:text-lg leading-relaxed'>
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
              className='animate-slide-up'
              style={{ animationDelay: `${0.3 + categoryIndex * 0.1}s` }}
            >
              <h4 className='font-serif text-2xl text-pink-300 mb-6 text-center'>
                {option.type}
              </h4>

              <div className='grid md:grid-cols-2 gap-6'>
                {option.accounts.map((account, accountIndex) => (
                  <div
                    key={accountIndex}
                    className='bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1'
                  >
                    {/* Bank Header */}
                    <div className='flex items-center justify-center mb-6'>
                      <div className='w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-2xl text-white mr-4'>
                        {account.logo}
                      </div>
                      <div className='text-center'>
                        <h5 className='font-semibold text-xl text-blue-800'>
                          {account.bank}
                        </h5>
                        <p className='text-blue-600 text-sm'>Transfer Bank</p>
                      </div>
                    </div>

                    {/* Account Details */}
                    <div className='space-y-4'>
                      <div>
                        <label className='block text-blue-600 text-sm font-medium mb-2'>
                          Nomor Rekening
                        </label>
                        <div className='flex items-center space-x-3'>
                          <div className='flex-1 bg-blue-50 rounded-lg p-3 font-mono text-blue-800 text-lg font-semibold'>
                            {account.accountNumber}
                          </div>
                          <button
                            onClick={() =>
                              copyToClipboard(
                                account.accountNumber,
                                account.bank
                              )
                            }
                            className='bg-pink-500 hover:bg-pink-600 text-white p-3 rounded-lg transition-colors duration-300 flex items-center justify-center min-w-[48px]'
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
                        <label className='block text-blue-600 text-sm font-medium mb-2'>
                          Atas Nama
                        </label>
                        <div className='bg-blue-50 rounded-lg p-3 font-medium text-blue-800'>
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
          className='mt-16 text-center animate-slide-up'
          style={{ animationDelay: '0.6s' }}
        >
          <div className='bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 max-w-3xl mx-auto border border-white/20'>
            <h4 className='font-serif text-xl text-pink-300 mb-4'>
              Catatan Penting
            </h4>
            <div className='grid md:grid-cols-2 gap-4 text-sm text-blue-200'>
              <div className='flex items-start space-x-3'>
                <span className='text-pink-400 text-lg flex-shrink-0'>💡</span>
                <p className='text-left'>
                  Mohon sertakan nama Anda pada keterangan transfer untuk
                  konfirmasi
                </p>
              </div>
              <div className='flex items-start space-x-3'>
                <span className='text-pink-400 text-lg flex-shrink-0'>📱</span>
                <p className='text-left'>
                  Konfirmasi transfer dapat dikirim via WhatsApp kepada mempelai
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Thank You Message */}
        <div
          className='text-center mt-12 animate-slide-up'
          style={{ animationDelay: '0.8s' }}
        >
          <p className='text-blue-200 text-lg md:text-xl italic'>
            "Barakallahu lakuma wa baraka alaikuma wa jama'a bainakuma fi khair"
          </p>
          <p className='text-blue-300 text-base mt-2'>
            Semoga Allah memberkahi kalian berdua dan menyatukan kalian dalam
            kebaikan
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gift;
