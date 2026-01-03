import React from 'react';
import Hero from './components/Hero';
import Couple from './components/Couple';
import Event from './components/Event';
import Countdown from './components/Countdown';
import Gallery from './components/Gallery';
import RSVP from './components/RSVP';
import Gift from './components/Gift';
import Footer from './components/Footer';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <div className='App'>
      {/* Main Content */}
      <main>
        <Hero />
        <Couple />
        <Event />
        <Countdown />
        <Gallery />
        <RSVP />
        <Gift />
      </main>

      {/* Footer */}
      <Footer />

      {/* Music Player */}
      <MusicPlayer />
    </div>
  );
}

export default App;
