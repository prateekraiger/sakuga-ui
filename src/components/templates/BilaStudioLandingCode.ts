export const BILA_STUDIO_LANDING_CODE = `import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowRight, 
  Check, 
  Instagram, 
  Facebook, 
  Twitter,
  Cookie,
  Plus,
  Minus
} from 'lucide-react';

const BilaStudioLanding: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(false);
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(false);
  const [cookieConsent, setCookieConsent] = useState({
    necessary: true,
    analytics: false,
    marketing: false
  });
  const [openServiceIndex, setOpenServiceIndex] = useState<number | null>(null);

  useEffect(() => {
    // Cookie initialization
    const consent = localStorage.getItem('bila_cookie_consent');
    if (!consent) {
      setTimeout(() => setShowCookieBanner(true), 1000);
    } else {
      setCookieConsent(JSON.parse(consent));
    }
  }, []);

  const handleAcceptAll = () => {
    const consent = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem('bila_cookie_consent', JSON.stringify(consent));
    setCookieConsent(consent);
    setShowCookieBanner(false);
  };

  const handleDeclineAll = () => {
    const consent = { necessary: true, analytics: false, marketing: false };
    localStorage.setItem('bila_cookie_consent', JSON.stringify(consent));
    setCookieConsent(consent);
    setShowCookieBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('bila_cookie_consent', JSON.stringify(cookieConsent));
    setIsCookieModalOpen(false);
    setShowCookieBanner(false);
  };

  const toggleService = (index: number) => {
    setOpenServiceIndex(openServiceIndex === index ? null : index);
  };

  return (
    <div className="bg-[#Fdfcf8] text-stone-900 antialiased selection:bg-teal-200 selection:text-teal-900 relative w-full overflow-x-hidden font-manrope">
      <style>{\`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital,wght@0,400;1,400&display=swap');

        .font-instrument-serif { font-family: 'Instrument Serif', serif !important; }
        .font-manrope { font-family: 'Manrope', sans-serif !important; }

        .hill-curve {
          border-top-left-radius: 50% 100px;
          border-top-right-radius: 50% 100px;
        }
        @media (min-width: 768px) {
          .hill-curve {
            border-top-left-radius: 50% 240px;
            border-top-right-radius: 50% 240px;
          }
        }

        @keyframes heroReveal {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-hero-reveal {
          animation: heroReveal 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
          opacity: 0;
          animation-delay: 0.3s;
        }

        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-bg {
          background: linear-gradient(-45deg, #ffc3a0, #ffafbd, #c2e9fb, #e2ebf0, #d4fc79, #96e6a1);
          background-size: 400% 400%;
          animation: gradientMove 8s ease infinite;
        }

        .adaptive-text {
          color: #ffffff;
          mix-blend-mode: difference;
        }

        @keyframes blurIn {
          from { opacity: 0; filter: blur(10px); transform: scale(0.95); }
          to { opacity: 1; filter: blur(0); transform: scale(1); }
        }
        .animate-blur-in {
          animation: blurIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      \`}</style>

      {/* Header */}
      <header className="absolute top-0 left-0 w-full z-50 pointer-events-none">
        <nav className="flex adaptive-text w-full max-w-[90rem] mx-auto px-8 py-8 items-center justify-between pointer-events-auto">
          <a href="#" className="hover:opacity-80 transition-opacity text-2xl italic text-amber-950 font-instrument-serif z-50 relative">
            Bila.
          </a>

          <div className="hidden md:flex gap-10 text-green-950 items-center">
            <a href="#" className="hover:opacity-70 transition-opacity text-lg font-medium">Services</a>
            <a href="#" className="hover:opacity-70 transition-opacity text-lg font-medium">Portfolio</a>
            <a href="#" className="hover:opacity-70 transition-opacity text-lg font-medium">Agency</a>
          </div>

          <a href="#" className="hidden hover:bg-white hover:text-black transition-colors md:block text-lg font-medium text-amber-950 border-green-950 border rounded-full px-6 py-2">
            Let's Talk
          </a>

          <button 
            className="md:hidden relative z-50 p-1" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div className={\`fixed inset-0 z-[60] bg-[#Fdfcf8] flex flex-col items-center justify-center transition-opacity duration-300 md:hidden \${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}\`}>
        <button 
          className="absolute top-8 right-8 text-slate-900 p-2"
          onClick={() => setIsMenuOpen(false)}
        >
          <X size={32} />
        </button>
        <nav className="flex flex-col items-center gap-8 text-3xl font-instrument-serif italic text-slate-900">
          <a href="#" className="hover:text-cyan-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#" className="hover:text-cyan-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
          <a href="#" className="hover:text-cyan-600 transition-colors" onClick={() => setIsMenuOpen(false)}>Agency</a>
          <a href="#" className="mt-4 px-8 py-3 border border-slate-900 rounded-full font-manrope not-italic text-lg hover:bg-slate-900 hover:text-white transition-all" onClick={() => setIsMenuOpen(false)}>
            Let's Talk
          </a>
        </nav>
      </div>

      <main className="relative w-full flex flex-col">
        {/* Hero Section */}
        <section className="flex flex-col overflow-hidden animate-gradient-bg md:min-h-[110vh] md:pt-40 min-h-[90vh] w-full z-0 pt-32 relative items-center justify-start">
          <div className="relative z-10 text-center px-4 adaptive-text mt-12 md:mt-20 pb-40">
            <h1 className="text-[15vw] md:text-[12vw] leading-[0.85] animate-hero-reveal tracking-tighter opacity-95">
              Innate <br /> 
              <span className="font-light italic opacity-90 font-instrument-serif">Studios</span>
            </h1>
          </div>

          <div className="hill-curve flex bg-[#Fdfcf8] w-full h-[35vh] z-20 absolute bottom-0 left-0 shadow-[0_-20px_60px_rgba(0,0,0,0.1)] justify-center items-start pt-12 md:pt-16">
            <a href="#intro" className="animate-gradient-bg hover:opacity-90 transition-all flex items-center gap-2 group text-sm font-medium text-slate-900 rounded-full px-6 py-3 shadow-lg">
              <span className="group-hover:text-black transition-colors text-sm font-medium text-slate-800 tracking-tight">
                Discover
              </span>
              <ArrowRight className="w-4 h-4 text-stone-700 group-hover:text-black transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </section>

        {/* Intro Statement */}
        <section id="intro" className="md:pb-32 -mt-1 bg-[#Fdfcf8] z-20 pt-12 pb-20 relative">
          <div className="md:px-12 max-w-[90rem] mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-32">
              <p className="md:text-5xl leading-[1.15] text-3xl font-medium text-slate-800 tracking-tight">
                We are an independent studio creating <span className="font-instrument-serif md:text-6xl text-4xl italic text-cyan-600">digital experiences</span> through the design of clear, functional, and sustainable websites.
              </p>
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-y-32 gap-x-12 gap-y-20">
              {[
                { title: 'Orion security', category: 'Private security, web project', color1: 'bg-cyan-400', color2: 'bg-cyan-400' },
                { title: 'Fremont-Bousso', category: 'Independent lawyer, web project', color1: 'bg-red-500', color2: 'bg-green-500', margin: 'md:mt-24' },
                { title: 'FOCUS emlyon', category: 'Audiovisual association, web project', color1: 'bg-[#AA7A56]', color2: 'bg-[#232F42]' },
                { title: 'Auravocats', category: 'Law firm, web project', color1: 'bg-[#6EC6D9]', color2: 'bg-green-400', margin: 'md:mt-24' }
              ].map((project, i) => (
                <article key={i} className={\`group cursor-pointer \${project.margin || ''}\`}>
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200 mb-6">
                    <div className="absolute inset-0 bg-slate-300 group-hover:scale-105 transition-transform duration-700 ease-in-out">
                      <div className="w-full h-full flex items-center justify-center bg-[#E8E6E1]">
                        <div className={\`w-32 h-32 rounded-full \${project.color1} mix-blend-multiply filter blur-2xl opacity-60\`}></div>
                        <div className={\`w-40 h-40 rounded-full \${project.color2} mix-blend-multiply filter blur-2xl opacity-60 -ml-12\`}></div>
                      </div>
                    </div>
                    <div className="group-hover:bg-black/10 transition-colors duration-500 bg-black/0 absolute inset-0"></div>
                  </div>
                  <div className="flex justify-between items-center border-t border-slate-300 pt-5 min-h-[5rem]">
                    <div>
                      <h3 className="md:text-4xl leading-none text-3xl text-slate-900 mb-1">{project.title}</h3>
                      <span className="text-lg text-slate-500">{project.category}</span>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0 ease-out">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-bold uppercase tracking-widest text-slate-900 hover:bg-slate-900 hover:text-white transition-colors duration-300">
                        View site
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Services Section */}
            <div id="services" className="mt-40 mb-20 scroll-mt-32">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-4 flex flex-col items-start">
                  <h2 className="md:text-5xl font-instrument-serif text-4xl italic text-slate-900 mb-8">Our Expertise</h2>
                  <a href="#" className="inline-flex items-center gap-3 hover:bg-cyan-600 transition-all duration-300 hover:shadow-xl group text-lg font-medium text-white bg-slate-900 rounded-full px-8 py-4 shadow-lg">
                    View Portfolio
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                <div className="md:col-span-8 flex flex-col">
                  {[
                    { title: 'Websites', description: 'Design of immersive and high-performance digital platforms. We use next-generation tools to quickly design reliable, clear, and effective websites.', tags: ['UX/UI Design', 'Development', 'E-commerce'] },
                    { title: 'Rebranding', description: 'Complete overhaul of brand identity. We redefine your visual and verbal territory to ensure total consistency across all touchpoints, from logo to marketing materials.', tags: ['Logo', 'Art Direction', 'Brand Guidelines'] },
                    { title: 'Audit & Strategy', description: 'In-depth analysis of your online presence and definition of a clear roadmap. We identify growth opportunities to maximize your digital impact.', tags: ['UX Audit', 'Positioning', 'Content'] },
                    { title: 'SEO Strategy', description: 'Analysis of your online visibility and definition of strategies adapted to your objectives. We mobilize different SEO levers to identify concrete growth axes and sustainably improve your digital performance.', tags: ['SEO Audit', 'Organic Search', 'Search Results'] }
                  ].map((service, i) => (
                    <div 
                      key={i} 
                      className="group py-8 border-b border-slate-300 cursor-pointer overflow-hidden transition-all duration-500"
                      onClick={() => toggleService(i)}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className={\`md:text-3xl text-2xl font-medium transition-colors duration-300 \${openServiceIndex === i ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-900'}\`}>
                          {service.title}
                        </span>
                        <div className={\`w-10 h-10 flex items-center justify-center rounded-full border border-slate-300 transition-all duration-300 \${openServiceIndex === i ? 'bg-slate-900 border-slate-900' : 'group-hover:border-slate-900 group-hover:bg-slate-900'}\`}>
                          <Plus className={\`w-5 h-5 transition-all duration-300 \${openServiceIndex === i ? 'text-white rotate-45' : 'text-stone-400 group-hover:text-white group-hover:rotate-90'}\`} />
                        </div>
                      </div>
                      <div className={\`grid transition-all duration-500 ease-out \${openServiceIndex === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}\`}>
                        <div className="overflow-hidden">
                          <div className={\`pt-4 transition-opacity duration-700 max-w-2xl \${openServiceIndex === i ? 'opacity-100' : 'opacity-0'}\`}>
                            <p className="leading-relaxed text-lg font-light text-slate-600">{service.description}</p>
                            <div className="flex flex-wrap gap-3 mt-4 text-sm font-medium text-cyan-600 uppercase tracking-wide">
                              {service.tags.map((tag, j) => (
                                <span key={j}>• {tag}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <section id="contact" className="bg-[#Fdfcf8] pb-6 px-4 md:px-6 relative z-30">
          <div className="w-full max-w-[90rem] mx-auto bg-[#07201D] rounded-[2.5rem] md:rounded-[3.5rem] text-[#F0F7F6] py-20 px-6 md:px-20 relative overflow-hidden shadow-2xl flex flex-col items-center text-center">
            <div className="flex justify-center mb-8 opacity-10 text-cyan-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="currentColor">
                <path d="M10 11h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h3v-3zm10 0h-4a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h3v-3z"></path>
              </svg>
            </div>

            <div className="max-w-5xl mx-auto mb-16">
              <h2 className="md:text-7xl leading-[1.1] text-4xl text-white tracking-tight font-instrument-serif mb-8 italic">
                "Everything you can imagine is real"
              </h2>
              <p className="md:text-sm uppercase text-xs font-medium text-cyan-400/50 tracking-[0.25em]">
                — pablo Picasso
              </p>
            </div>

            <div className="w-full h-px bg-white/5 mb-16 max-w-6xl mx-auto"></div>

            <div className="flex flex-col gap-10 w-full items-center justify-center">
              <div className="flex items-center gap-3 text-cyan-400/60 uppercase tracking-[0.15em] text-xs font-bold">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-600/80"></div>
                <span>Lyon, France</span>
              </div>

              <nav className="flex flex-wrap justify-center gap-8 md:gap-16 text-cyan-100/80 uppercase tracking-[0.15em] text-xs font-bold">
                <a href="#" className="hover:text-white transition-colors">Services</a>
                <a href="#" className="hover:text-white transition-colors">Portfolio</a>
                <a href="#" className="hover:text-white transition-colors">Agency</a>
                <a href="#" className="hover:text-white transition-colors">Contact</a>
              </nav>

              <nav className="flex flex-wrap justify-center gap-6 md:gap-8 text-cyan-400/30 uppercase tracking-[0.1em] text-[10px] font-medium">
                <a href="#" className="hover:text-cyan-200/50 transition-colors">Legal Notice</a>
                <button 
                  onClick={() => setIsCookieModalOpen(true)}
                  className="hover:text-cyan-200/50 transition-colors uppercase tracking-[0.1em] text-[10px] font-medium"
                >
                  Cookie Settings
                </button>
                <a href="#" className="hover:text-cyan-200/50 transition-colors">Privacy Policy</a>
              </nav>

              <div className="flex items-center gap-3 text-cyan-400/40 text-xs mt-4">
                <span className="font-instrument-serif italic text-2xl text-white opacity-90">Bila.</span>
                <span className="tracking-widest text-[10px] mt-1">© 2025</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-8 right-4 md:bottom-8 md:right-8 z-50 max-w-sm w-[calc(100%-2rem)] bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl rounded-2xl p-6 transition-all duration-500 flex flex-col gap-4 animate-hero-reveal">
          <div>
            <div className="flex items-center gap-2 text-slate-900 font-semibold mb-2">
              <Cookie size={18} />
              <span>Privacy & Cookies</span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              We use cookies to improve your experience and analyze our traffic. You can choose your preferences.
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 w-full">
              <button 
                onClick={handleDeclineAll}
                className="flex-1 py-2.5 px-4 rounded-lg border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-600 hover:bg-slate-50 transition-colors"
              >
                Decline
              </button>
              <button 
                onClick={handleAcceptAll}
                className="flex-1 uppercase hover:bg-cyan-700 transition-colors text-xs font-bold text-white tracking-wider bg-slate-900 rounded-lg px-4 py-2.5 shadow-lg"
              >
                Accept
              </button>
            </div>
            <button 
              onClick={() => setIsCookieModalOpen(true)}
              className="w-full py-2 text-[10px] text-slate-400 font-bold uppercase tracking-widest hover:text-slate-800 transition-colors underline underline-offset-4"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      )}

      {/* Cookie Settings Modal */}
      {isCookieModalOpen && (
        <div className="fixed inset-0 z-[70] bg-slate-900/20 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden animate-blur-in">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
              <h3 className="font-instrument-serif text-2xl italic text-slate-900">Cookie Preferences</h3>
              <button onClick={() => setIsCookieModalOpen(false)} className="text-slate-400 hover:text-slate-900 transition-colors p-2 rounded-full hover:bg-slate-100">
                <X size={20} />
              </button>
            </div>
            <div className="p-6 max-h-[60vh] overflow-y-auto space-y-6">
              <p className="text-sm text-slate-500 mb-6">Manage your consent preferences for the different cookie categories used on our site.</p>
              
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="font-semibold text-slate-900 text-sm mb-1">Essential Cookies</p>
                  <p className="text-xs text-slate-500">Necessary for the technical operation of the site. Cannot be disabled.</p>
                </div>
                <div className="relative inline-flex h-6 w-11 shrink-0 cursor-not-allowed items-center rounded-full border-2 border-transparent bg-slate-300 transition-colors duration-200 ease-in-out opacity-50">
                  <span className="translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
                </div>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="font-semibold text-slate-900 text-sm mb-1">Analytics & Performance</p>
                  <p className="text-xs text-slate-500">Help us understand how you interact with the site to improve it.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={cookieConsent.analytics} 
                    onChange={(e) => setCookieConsent({ ...cookieConsent, analytics: e.target.checked })}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-900"></div>
                </label>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="font-semibold text-slate-900 text-sm mb-1">Marketing</p>
                  <p className="text-xs text-slate-500">Used to display relevant advertisements on other sites.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={cookieConsent.marketing} 
                    onChange={(e) => setCookieConsent({ ...cookieConsent, marketing: e.target.checked })}
                    className="sr-only peer" 
                  />
                  <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-slate-900"></div>
                </label>
              </div>
            </div>
            <div className="p-6 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
              <button 
                onClick={() => setIsCookieModalOpen(false)} 
                className="px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-slate-500 hover:text-slate-900 hover:bg-slate-200/50 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleSavePreferences} 
                className="px-6 py-2.5 rounded-lg bg-slate-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-cyan-700 transition-colors shadow-lg shadow-cyan-900/10"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BilaStudioLanding;
`;
