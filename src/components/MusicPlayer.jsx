import React, { useState, useEffect, useRef } from 'react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef(null);

  // Sample audio URL (in real app, use actual wedding music)
  const audioSrc = './music/akad.mp3';

  useEffect(() => {
    // Show music player after a short delay
    const showTimer = setTimeout(() => {
      setShowPlayer(true);
    }, 1000);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;

      // Handle audio loaded
      const handleCanPlay = () => setIsLoaded(true);
      audioRef.current.addEventListener('canplaythrough', handleCanPlay);

      return () => {
        audioRef.current?.removeEventListener('canplaythrough', handleCanPlay);
      };
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current
          .play()
          .then(() => setIsPlaying(true))
          .catch((error) => {
            console.log('Audio playback failed:', error);
          });
      }
    }
  };

  const handleAudioError = () => {
    console.log('Audio failed to load');
    setIsPlaying(false);
    setIsLoaded(false);
  };

  if (!showPlayer) {
    return null;
  }

  return (
    <div
      className='fixed bottom-6 right-6 z-50 animate-fade-in'
      role='complementary'
      aria-label='Pemutar musik'
    >
      <div className='bg-white/95 backdrop-blur-md rounded-full shadow-xl border border-pink-200 p-1.5'>
        <button
          onClick={toggleMusic}
          className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 min-w-[48px] min-h-[48px] focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 ${
            isPlaying
              ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg'
              : 'bg-pink-50 text-pink-600 hover:bg-pink-100'
          }`}
          aria-label={isPlaying ? 'Pause musik' : 'Putar musik'}
          aria-pressed={isPlaying}
        >
          {isPlaying ? (
            <div className='flex items-end space-x-0.5 h-5'>
              <div
                className='w-1 bg-white rounded-full animate-bounce'
                style={{ height: '60%', animationDuration: '0.5s' }}
              ></div>
              <div
                className='w-1 bg-white rounded-full animate-bounce'
                style={{
                  height: '100%',
                  animationDuration: '0.7s',
                  animationDelay: '0.1s',
                }}
              ></div>
              <div
                className='w-1 bg-white rounded-full animate-bounce'
                style={{
                  height: '80%',
                  animationDuration: '0.6s',
                  animationDelay: '0.2s',
                }}
              ></div>
              <div
                className='w-1 bg-white rounded-full animate-bounce'
                style={{
                  height: '40%',
                  animationDuration: '0.8s',
                  animationDelay: '0.3s',
                }}
              ></div>
            </div>
          ) : (
            <svg
              className='w-5 h-5 md:w-6 md:h-6'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z' />
            </svg>
          )}
        </button>
      </div>

      {/* Audio Element - No autoplay */}
      <audio
        ref={audioRef}
        src={audioSrc}
        onError={handleAudioError}
        preload='metadata'
      />

      {/* Playing indicator */}
      {isPlaying && (
        <div className='absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-sm flex items-center justify-center'>
          <span className='sr-only'>Musik sedang diputar</span>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
