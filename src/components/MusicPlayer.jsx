import React, { useState, useEffect, useRef } from 'react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  // Sample audio URL (in real app, use actual wedding music)
  const audioSrc = './music/akad.mp3';

  useEffect(() => {
    // Show music player immediately
    setShowPlayer(true);

    // Try to autoplay music
    const tryAutoplay = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setHasInteracted(true);
          })
          .catch((error) => {
            console.log('Autoplay prevented, waiting for user interaction');
          });
      }
    };

    // Try autoplay after a short delay
    const timer = setTimeout(tryAutoplay, 500);

    // Listen for first user interaction to enable audio
    const handleFirstInteraction = () => {
      if (!hasInteracted && audioRef.current) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            setHasInteracted(true);
          })
          .catch(console.error);
      }
    };

    // Add interaction listeners
    document.addEventListener('click', handleFirstInteraction, { once: true });
    document.addEventListener('touchstart', handleFirstInteraction, {
      once: true,
    });
    document.addEventListener('scroll', handleFirstInteraction, { once: true });

    return () => {
      clearTimeout(timer);
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('scroll', handleFirstInteraction);
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // Handle autoplay restrictions
        audioRef.current.play().catch((error) => {
          console.log('Autoplay was prevented:', error);
          // You could show a user message here about clicking to enable music
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleAudioError = () => {
    console.log('Audio failed to load');
    setIsPlaying(false);
  };

  if (!showPlayer) {
    return null;
  }

  return (
    <div className='fixed bottom-6 right-6 z-50 animate-fade-in'>
      <div className='bg-white/95 backdrop-blur-md rounded-full shadow-xl border border-pink-200 p-1.5'>
        <button
          onClick={toggleMusic}
          className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
            isPlaying
              ? 'bg-gradient-to-r from-pink-500 to-blue-500 text-white shadow-lg'
              : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
          }`}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
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

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={audioSrc}
        onError={handleAudioError}
        preload='none'
      />

      {/* Music Status Indicator - Compact for mobile */}
      {isPlaying && (
        <div className='absolute -top-2 -left-2 w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full border-2 border-white shadow-md flex items-center justify-center'>
          <div className='w-2 h-2 bg-white rounded-full animate-ping'></div>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
