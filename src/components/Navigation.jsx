import React, { useState, useEffect } from 'react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'hero', label: 'Home', icon: '🏠' },
    { id: 'couple', label: 'Mempelai', icon: '💑' },
    { id: 'event', label: 'Acara', icon: '📅' },
    { id: 'gallery', label: 'Galeri', icon: '📷' },
    { id: 'rsvp', label: 'RSVP', icon: '💌' },
    { id: 'gift', label: 'Hadiah', icon: '🎁' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past hero
      setIsScrolled(window.scrollY > 100);

      // Determine active section
      const sections = navItems.map((item) => item.id);
      for (const sectionId of sections.reverse()) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Don't show navigation until scrolled
  if (!isScrolled) return null;

  return (
    <>
      {/* Desktop Navigation - Floating Pill */}
      <nav
        className='fixed top-4 left-1/2 -translate-x-1/2 z-40 hidden md:block'
        role='navigation'
        aria-label='Main navigation'
      >
        <div className='bg-white/95 backdrop-blur-md rounded-full shadow-lg shadow-pink-200/30 border border-pink-100 px-2 py-2 animate-fade-in'>
          <ul className='flex items-center gap-1'>
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-md'
                      : 'text-pink-700 hover:bg-pink-50 hover:text-pink-800'
                  }`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Navigation - Bottom Bar */}
      <nav
        className='fixed bottom-0 left-0 right-0 z-40 md:hidden'
        role='navigation'
        aria-label='Mobile navigation'
      >
        <div className='bg-white/95 backdrop-blur-md border-t border-pink-100 shadow-[0_-4px_20px_-4px_rgba(127,46,69,0.15)] px-2 py-2 safe-area-pb animate-slide-up'>
          <ul className='flex items-center justify-around'>
            {navItems.slice(0, 5).map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`flex flex-col items-center justify-center p-2 min-w-[56px] min-h-[56px] rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 ${
                    activeSection === item.id
                      ? 'text-pink-600 bg-pink-50'
                      : 'text-pink-400 hover:text-pink-600 hover:bg-pink-50/50'
                  }`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                  aria-label={item.label}
                >
                  <span className='text-lg mb-0.5'>{item.icon}</span>
                  <span className='text-[10px] font-medium'>{item.label}</span>
                </button>
              </li>
            ))}
            {/* More button for additional items */}
            <li>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`flex flex-col items-center justify-center p-2 min-w-[56px] min-h-[56px] rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400 ${
                  isMenuOpen
                    ? 'text-pink-600 bg-pink-50'
                    : 'text-pink-400 hover:text-pink-600 hover:bg-pink-50/50'
                }`}
                aria-expanded={isMenuOpen}
                aria-label='More options'
              >
                <span className='text-lg mb-0.5'>•••</span>
                <span className='text-[10px] font-medium'>Lainnya</span>
              </button>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className='fixed inset-0 bg-black/50 backdrop-blur-sm z-30 animate-fade-in'
            onClick={() => setIsMenuOpen(false)}
            aria-hidden='true'
          />
        )}

        {/* Mobile Menu Sheet */}
        {isMenuOpen && (
          <div className='fixed bottom-20 left-4 right-4 bg-white rounded-2xl shadow-2xl border border-pink-100 p-4 z-40 animate-slide-up'>
            <div className='grid grid-cols-3 gap-3'>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 min-h-[80px] focus:outline-none focus:ring-2 focus:ring-pink-400 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-br from-pink-500 to-pink-600 text-white shadow-md'
                      : 'bg-pink-50 text-pink-700 hover:bg-pink-100'
                  }`}
                  aria-current={activeSection === item.id ? 'page' : undefined}
                >
                  <span className='text-2xl mb-1'>{item.icon}</span>
                  <span className='text-xs font-medium'>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
