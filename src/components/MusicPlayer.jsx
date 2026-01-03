import React, { useState, useEffect, useRef } from 'react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const audioRef = useRef(null);

  // Sample audio URL (in real app, use actual wedding music)
  const audioSrc = './music/akad.mp3';

  useEffect(() => {
    // Show music player after a short delay
    const timer = setTimeout(() => {
      setShowPlayer(true);
    }, 2000);

    return () => clearTimeout(timer);
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
      <div className='bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-sage-200 p-1'>
        <button
          onClick={toggleMusic}
          className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 ${
            isPlaying
              ? 'bg-gradient-to-r from-gold-400 to-gold-500 text-white shadow-lg'
              : 'bg-sage-100 text-sage-600 hover:bg-sage-200'
          }`}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? (
            <div className='flex space-x-1'>
              <div className='w-1 h-4 bg-white rounded-full animate-pulse'></div>
              <div
                className='w-1 h-4 bg-white rounded-full animate-pulse'
                style={{ animationDelay: '0.2s' }}
              ></div>
              <div
                className='w-1 h-4 bg-white rounded-full animate-pulse'
                style={{ animationDelay: '0.4s' }}
              ></div>
            </div>
          ) : (
            <div className='text-xl'>🎵</div>
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

      {/* Music Info Tooltip */}
      {isPlaying && (
        <div className='absolute bottom-16 right-0 bg-sage-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap animate-fade-in'>
          <div className='flex items-center space-x-2'>
            <span className='w-2 h-2 bg-gold-400 rounded-full animate-pulse'></span>
            <span>Playing wedding music</span>
          </div>
          <div className='absolute bottom-0 right-4 transform translate-y-1'>
            <div className='w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-sage-800'></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicPlayer;
