import React, { useState, useEffect, lazy, Suspense } from 'react';
import Navigation from './components/Navigation';
import MusicPlayer from './components/MusicPlayer';
import PrefetchBoundary from './components/PrefetchBoundary';
import Hero from './components/Hero'; // Sync import - Hero loads immediately

// Lazy load below-the-fold components with preload hints for above-the-fold
const Couple = lazy(() => import('./components/Couple'));
const Event = lazy(() => import('./components/Event'));
const Countdown = lazy(() => import('./components/Countdown'));
const LoveStory = lazy(() => import('./components/LoveStory'));
const Gallery = lazy(() => import('./components/Gallery'));
const RSVP = lazy(() => import('./components/RSVP'));
const Gift = lazy(() => import('./components/Gift'));
const Footer = lazy(() => import('./components/Footer'));

// Loading fallback component
const SectionLoader = () => (
  <div className='py-16 flex items-center justify-center'>
    <div className='animate-pulse flex flex-col items-center'>
      <div className='w-12 h-12 border-4 border-pink-200 border-t-pink-500 rounded-full animate-spin'></div>
      <p className='mt-4 text-pink-400 text-sm'>Memuat...</p>
    </div>
  </div>
);

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
        {/* Hero - Sync load (immediate display) */}
        <Hero onOpenInvitation={handleOpenInvitation} guestName={guestName} />

        {/* Above-the-fold components with preload */}
        <Suspense fallback={<SectionLoader />}>
          <Couple />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Event />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Countdown />
        </Suspense>

        {/* Below-the-fold components with smart prefetch */}
        <PrefetchBoundary
          Component={LoveStory}
          sectionId='love-story'
          prefetchDistance={500}
          fallback={<SectionLoader />}
        />
        <PrefetchBoundary
          Component={Gallery}
          sectionId='gallery'
          prefetchDistance={500}
          fallback={<SectionLoader />}
        />
        <PrefetchBoundary
          Component={RSVP}
          sectionId='rsvp'
          prefetchDistance={500}
          fallback={<SectionLoader />}
        />
        <PrefetchBoundary
          Component={Gift}
          sectionId='gift'
          prefetchDistance={500}
          fallback={<SectionLoader />}
        />
      </main>

      {/* Footer - Standard lazy load */}
      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>

      {/* Music Player */}
      <MusicPlayer shouldAutoPlay={isInvitationOpened} />
    </div>
  );
}

export default App;
