import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Couple from './components/Couple';
import Event from './components/Event';
import Countdown from './components/Countdown';
import Gallery from './components/Gallery';
import LoveStory from './components/LoveStory';
import RSVP from './components/RSVP';
import Gift from './components/Gift';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';
import Navigation from './components/Navigation';

// nandain doang
function App() {
  const [isInvitationOpened, setIsInvitationOpened] = useState(false);
  const [guestName, setGuestName] = useState('');

  // Get guest name from URL parameter
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const toParam = urlParams.get('to');
    if (toParam) {
      // Decode and format the guest name
      setGuestName(decodeURIComponent(toParam.replace(/\+/g, ' ')));
    }
  }, []);

  const handleOpenInvitation = () => {
    setIsInvitationOpened(true);
  };

  return (
    <div className='App'>
      {/* Skip to main content link for accessibility */}
      <a
        href='#couple'
        className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-pink-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:shadow-lg'
      >
        Langsung ke konten utama
      </a>

      {/* Floating Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        <Hero onOpenInvitation={handleOpenInvitation} guestName={guestName} />
        <Couple />
        <Event />
        <Countdown />
        <LoveStory />
        <Gallery />
        <RSVP />
        <Gift />
      </main>

      {/* Footer */}
      <Footer />

      {/* Music Player */}
      <MusicPlayer shouldAutoPlay={isInvitationOpened} />
    </div>
  );
}

export default App;
