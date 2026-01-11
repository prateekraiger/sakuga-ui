import React, { useState, useEffect } from 'react';

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
    <header className={className || "fixed z-50 w-full top-0 left-0"}>
      <div className="sm:px-6 lg:px-8 max-w-7xl mx-auto px-4">
        <div className="flex pt-5 pb-5 items-center justify-between animate-[fadeSlideIn_0.5s_ease-out_0.1s_both]">
          <a
            href="/"
            className="bg-center text-2xl font-semibold tracking-tighter w-[140px] h-[36px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8cc3fd60-0bf0-41ad-a08b-be684f266e22_1600w.png)] bg-cover"
          ></a>

          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-400">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#how-it-works" className="hover:text-white transition">How it works</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="m10 17 5-5-5-5"></path>
                <path d="M15 12H3"></path>
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
              </svg>
              Sign in
            </button>
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
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-base text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition">Features</a>
            <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-base text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition">How it works</a>
            <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-base text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition">Pricing</a>
            <div className="pt-4 border-t border-white/10 mt-4">
              <a href="#" className="flex items-center justify-center gap-2 w-full px-4 py-3 text-base font-medium text-white bg-lime-600 hover:bg-lime-500 rounded-lg transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <path d="m10 17 5-5-5-5"></path>
                  <path d="M15 12H3"></path>
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                </svg>
                Sign in
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
