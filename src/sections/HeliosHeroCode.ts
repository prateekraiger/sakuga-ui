export const HELIOS_HERO_CODE = `import React, { useEffect, useRef, useState } from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const HeliosHero: React.FC = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Icons
    // Lucide icons are imported as React components, so no need for createIcons()

    // Fade-in animation logic
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in-section').forEach((section) => {
      observer.observe(section);
    });

    // Count-up animation logic
    const animateNumber = (targetValue: number, duration: number) => {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentValue = Math.floor(progress * targetValue);
        setCount(currentValue);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    };

    const countUpObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateNumber(18600, 2500);
          countUpObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    if (countRef.current) {
      countUpObserver.observe(countRef.current);
    }

    return () => {
      observer.disconnect();
      countUpObserver.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-gray-900 selection:text-white text-gray-900 bg-gradient-to-b from-amber-300 via-yellow-400 to-amber-500 font-sans">
      <style>{\`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

        .glass-panel {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
        }
        .text-shadow-sm {
          text-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }
        .fade-in-section {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s ease-out, transform 1s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }
        .fade-in-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .hero-text-mask {
          mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
          -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          display: inline-block;
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(15px); }
        }
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 7s ease-in-out infinite;
        }
        ::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
      \`}</style>

      {/* Navigation */}
      <nav className="fixed z-50 transition-all duration-300 md:px-12 w-full top-0">
        <div className="flex max-w-7xl mx-auto pt-4 px-6 items-center justify-between">
          <div className="flex items-center group cursor-pointer">
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/288b92a4-f9e1-4169-8097-65331bc9a36c_320w.png"
              alt="Brand Logo"
              className="transition-transform duration-300 group-hover:scale-105 w-auto h-10 object-contain"
            />
          </div>
          <div className="hidden md:flex gap-12 text-lg font-medium text-gray-800/80 items-center">
            <a href="#" className="hover:text-gray-900 transition-colors">Specs</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Safety</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Vision</a>
          </div>
          <button className="hover:bg-gray-800 hover:scale-105 transition-all duration-300 active:scale-95 text-sm font-medium text-white bg-gray-900 rounded-full py-3 px-8 shadow-lg">
            Reserve
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className="overflow-hidden bg-center min-h-screen bg-cover relative flex items-center -translate-x-2 translate-y-3 pt-48 pb-32 md:py-80"
        style={{ backgroundImage: 'url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/77f6ea12-a46c-43c8-a1fc-871074b4d483_3840w.png)' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-20 w-full relative z-10">
          <div className="flex flex-col md:flex-row items-start justify-start">
            <div
                className="md:w-1/3 fade-in-section mb-0 space-y-8"
                style={{
                    maskImage: 'linear-gradient(170deg, transparent, black 0%, black 100%, transparent)',
                    WebkitMaskImage: 'linear-gradient(170deg, transparent, black 0%, black 100%, transparent)'
                }}
            >
                <h2 className="leading-tight text-3xl md:text-3xl font-thin text-gray-900 tracking-tighter font-montserrat text-left">
                The world's first bio-emotive home guardian.
                </h2>
                <div className="space-y-3">
                <button className="hover:bg-gray-800 transition-all hover:shadow-2xl hover:-translate-y-1 text-sm font-medium text-white bg-gray-900 rounded-full py-3 px-10 shadow-xl">
                    Reserve
                </button>
                <p className="uppercase text-xs font-medium tracking-wide opacity-60 pl-5">Shipping late 2026</p>
                </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="glass-panel flex flex-col fade-in-section hover:scale-[1.02] transition-transform duration-500 text-center rounded-[2.5rem] p-10 space-y-6 items-center">
            <div
              className="w-20 h-20 bg-cover rounded-2xl mb-2 shadow-sm"
              style={{ backgroundImage: 'url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3892e23a-c434-4bb7-b1d9-4914a210593e_320w.png?w=800&q=80)' }}
            />
            <h3 className="text-2xl font-semibold tracking-tight">
              The Guardian<br/><span className="text-lg font-normal opacity-70">Clinical Diagnostics</span>
            </h3>
            <p className="text-lg leading-relaxed opacity-80">
              robi detects fever, assesses pain levels, and dispenses precise medication doses instantly.
            </p>
            <div className="mt-auto pt-6 text-sm font-medium opacity-60 uppercase tracking-wider border-t border-gray-900/10 w-full">
              Vitals Monitoring: 24/7
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-panel flex flex-col fade-in-section hover:scale-[1.02] transition-transform duration-500 text-center rounded-[2.5rem] p-10 space-y-6 items-center" style={{ transitionDelay: '100ms' }}>
            <div
              className="w-20 h-20 bg-cover rounded-2xl mb-2 shadow-sm"
              style={{ backgroundImage: 'url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6cf90f9d-ad99-4d22-9d68-277089397c2f_320w.png?w=800&q=80)' }}
            />
            <h3 className="text-2xl font-semibold tracking-tight">
              The Steward<br/><span className="text-lg font-normal opacity-70">Household Autonomy</span>
            </h3>
            <p className="text-lg leading-relaxed opacity-80">
              From folding laundry to organizing playrooms. robi manages the home so you don't have to.
            </p>
            <div className="mt-auto pt-6 text-sm font-medium opacity-60 uppercase tracking-wider border-t border-gray-900/10 w-full">
              Articulated Precision: 99.9%
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-panel flex flex-col fade-in-section hover:scale-[1.02] transition-transform duration-500 text-center rounded-[2.5rem] p-10 space-y-6 items-center" style={{ transitionDelay: '200ms' }}>
            <div
              className="w-20 h-20 bg-cover rounded-2xl mb-2 shadow-sm"
              style={{ backgroundImage: 'url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce1daa6a-0269-464a-851b-3789fdf298b6_320w.png)' }}
            />
            <h3 className="text-2xl font-semibold tracking-tight">
              The Companion<br/><span className="text-lg font-normal opacity-70">Adaptive EQ</span>
            </h3>
            <p className="text-lg leading-relaxed opacity-80">
              Learns your family's humor, teaches lessons, and provides emotional support.
            </p>
            <div className="mt-auto pt-6 text-sm font-medium opacity-60 uppercase tracking-wider border-t border-gray-900/10 w-full">
              Language Modules: 50+
            </div>
          </div>
        </div>

        <div className="fade-in-section text-center py-24">
          <p className="md:text-4xl text-2xl font-medium text-gray-900 tracking-tight opacity-90 leading-tight mx-auto max-w-3xl">
            It's more than a machine, this yellow package is only for
          </p>
          <h1 className="mt-8 md:text-8xl text-6xl font-black text-gray-900 animate-float drop-shadow-[0_10px_10px_rgba(234,179,8,0.3)]">
            $<span ref={countRef}>\${count.toLocaleString()}</span>
          </h1>
        </div>
      </section>

      {/* Split View Section */}
      <section className="w-full max-w-7xl mx-auto mb-32 px-6">
        <div className="relative rounded-[3rem] overflow-hidden w-full shadow-2xl aspect-[1950/1251]">
          <img
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f4d48fd-4b64-4978-bbd5-8e354cb8adf4_1600w.png"
            alt="Robot Interior"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Specs Section */}
      <section className="px-6 py-12 max-w-7xl mx-auto mb-32">
        <div className="glass-panel p-8 md:p-12 rounded-[3rem] flex flex-col lg:flex-row gap-12 fade-in-section">
          <div className="lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-medium tracking-tight mb-10 text-gray-900">Product Specifications</h3>
            <div className="space-y-6 text-lg">
              {[
                { label: 'Exterior', value: 'Hypoallergenic "Warm-Touch" Silicone' },
                { label: 'Skeleton', value: 'Aerospace-Grade Titanium Alloy' },
                { label: 'Processing', value: 'Neural Engine V4 (Local Processing)' },
                { label: 'Battery', value: '48 Hours (Active) / 7 Days (Standby)' },
                { label: 'Safety', value: 'ISO 13485 Medical Device Certified' },
                { label: 'Privacy', value: 'Military-Grade Local Encryption' },
              ].map((spec, i) => (
                <div key={i} className={\`flex justify-between items-baseline \${i !== 5 ? 'border-b border-gray-900/10 pb-4' : 'pb-2'}\`}>
                   <span className="font-semibold w-1/3">\${spec.label}</span>
                   <span className="font-normal opacity-80 w-2/3 text-right">\${spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-2 gap-6">
            {[
              { label: '0.02s', sub: 'Reaction Time', dark: false },
              { label: '360°', sub: 'Active Shield', dark: false },
              { label: '100%', sub: 'Data Privacy', dark: false },
              { label: '24/7', sub: 'Autonomous Power', dark: true },
            ].map((stat, i) => (
              <div
                key={i}
                className={\`\${stat.dark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} rounded-[2rem] p-8 flex flex-col items-center justify-center text-center aspect-square shadow-inner\`}
              >
                <span className="text-4xl md:text-5xl font-medium tracking-tight mb-2">\${stat.label}</span>
                <span className={\`\${stat.dark ? 'text-gray-400' : 'text-gray-500'} text-lg font-medium\`}>\${stat.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Future Section */}
      <section
        className="flex flex-col bg-center text-center bg-cover max-w-7xl mx-auto px-6 pb-20 relative items-center"
        style={{ backgroundImage: 'url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cf57e8da-2b0f-4362-a531-8c64b2d6715d_3840w.png)' }}
      >
        <div className="fade-in-section w-64 h-64 mb-12 relative" />
        <div className="fade-in-section max-w-4xl mx-auto">
          <p className="md:text-2xl text-xl font-medium text-gray-900 opacity-80 mb-10">
            Limited first-run production. Secure your allocation.
          </p>
          <form className="flex flex-col md:flex-row gap-4 w-full max-w-xl mx-auto mb-20 items-center justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full md:w-auto flex-grow px-6 py-4 rounded-full bg-transparent border-2 border-gray-900 placeholder-gray-700 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900/50 focus:bg-white/10 transition-all text-lg font-medium"
            />
            <button type="submit" className="w-full md:w-auto px-8 py-4 bg-gray-900 text-white rounded-full font-medium text-lg hover:bg-gray-800 transition-all hover:scale-105 shadow-xl">
              Join the waitlist
            </button>
          </form>
        </div>

        <footer className="flex flex-col md:flex-row fade-in-section w-full border-gray-900/10 border-t pt-12 items-center justify-between">
          <div className="flex gap-6">
            {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-900/10 flex items-center justify-center hover:bg-gray-900 hover:text-white transition-colors">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <div className="flex gap-10 text-sm font-normal text-gray-800/60 my-4 md:my-0">
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-gray-900">Terms of Service</a>
          </div>
          <div className="md:text-right text-center">
            <span className="text-[10px] uppercase tracking-widest opacity-60">© 2025 Helios Robotics. All Rights Reserved.</span>
            <p className="text-xs text-gray-600">Designed by Allen Dela Cruz</p>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default HeliosHero;
\`;
