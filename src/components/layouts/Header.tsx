import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <header className={className || "fixed z-50 w-full top-0 left-0 bg-black/20 backdrop-blur-md border-b border-white/5"}>
      <div className="sm:px-6 lg:px-8 max-w-7xl mx-auto px-4">
        <div className="flex pt-5 pb-5 items-center justify-between animate-[fadeSlideIn_0.5s_ease-out_0.1s_both]">
          <Link
            to="/"
            className="font-display font-black text-2xl tracking-tighter text-white hover:opacity-90 transition flex items-center gap-1"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">SAKUGA</span>
            <span className="text-neutral-500 font-medium">_UI</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <Link to="/components" className="hover:text-white transition">Components</Link>
            <Link to="/templates" className="hover:text-white transition">Templates</Link>
            <a href="/#features" className="hover:text-white transition">Features</a>
            <a href="/#playground" className="hover:text-white transition">Playground</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/prateekraiger/sakuga-ui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition p-2 hover:bg-white/5 rounded-lg"
              aria-label="GitHub Repository"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <Link
              to="/components"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-white text-black px-4 py-2 text-xs font-bold hover:bg-neutral-200 transition"
            >
              <span>Explore Code</span>
            </Link>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition backdrop-blur-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-[60] transition-all duration-300 ${isMenuOpen ? 'visible' : 'invisible'}`}>
        <div
          className={`absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMenuOpen(false)}
        ></div>
        <div
          className={`absolute right-0 top-0 bottom-0 w-full max-w-sm bg-slate-900/95 backdrop-blur-lg border-l border-white/10 shadow-2xl transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <span className="text-sm font-medium text-slate-300">Menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <nav className="p-6 space-y-1">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-base text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition">Home</Link>
            <Link to="/components" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-base text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition">Components</Link>
            <Link to="/templates" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-base text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition">Templates</Link>
            <a href="/#features" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-base text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition">Features</a>
            <a href="/#playground" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-base text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition">Playground</a>
            <div className="pt-4 border-t border-white/10 mt-4">
              <a href="https://github.com/prateekraiger/sakuga-ui" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full px-4 py-3 text-base font-medium text-black bg-white hover:bg-neutral-200 rounded-lg transition">
                GitHub Repository
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Progressive Blur Top */}
      <div className="gradient-blur">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
