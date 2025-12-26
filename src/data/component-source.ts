export const BENTO1_CODE = `import React from 'react';

const Bento1 = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-5xl">
      {/* Featured Product (Hero) */}
      <section
        className="relative group overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-900 bg-zinc-950 col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-8 min-h-[320px] sm:min-h-[360px] md:min-h-[460px]">
        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/87192772-f196-4c19-b2f3-e7406399e82f_800w.jpg" alt="Data visualization dashboard interface" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        <div className="relative sm:p-5 md:p-7 lg:p-8 flex flex-col h-full pt-4 pr-4 pb-4 pl-4">
          <div className="flex items-center justify-between">
            <div className="text-xs sm:text-sm text-zinc-300">
              <span className="inline-flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-blue-400"></span>
                Primary Dashboard
              </span>
            </div>
            <button className="inline-flex items-center justify-center size-8 sm:size-9 rounded-lg sm:rounded-xl bg-black/30 border border-white/10 backdrop-blur hover:border-white/20 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="more-vertical" className="lucide lucide-more-vertical w-3.5 sm:w-4 h-3.5 sm:h-4 text-zinc-100"><circle cx="12" cy="12" r="1" className=""></circle><circle cx="12" cy="5" r="1" className=""></circle><circle cx="12" cy="19" r="1" className=""></circle></svg>
            </button>
          </div>
          <div className="mt-auto">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight font-semibold text-white drop-shadow-[0_1px_0_rgba(0,0,0,0.2)]">
              Analytics Hub
            </h1>
            <p className="mt-2 sm:mt-3 md:mt-4 text-sm md:text-base text-zinc-200/90 max-w-xl font-normal">
              Real-time data insights with predictive modeling and automated reporting for enterprise-scale operations.
            </p>
            <div className="mt-4 sm:mt-6">
              <button className="inline-flex items-center justify-center size-10 sm:size-12 rounded-xl sm:rounded-2xl bg-blue-500 text-white shadow-[0_10px_30px_-10px_rgba(59,130,246,0.7)] hover:translate-y-[-1px] active:translate-y-0 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" className="lucide lucide-arrow-right w-4 sm:w-5 h-4 sm:h-5"><path d="M5 12h14" className=""></path><path d="m12 5 7 7-7 7" className=""></path></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Lineup (Accent Panel) */}
      <aside
        className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-900 col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-4 min-h-[320px] sm:min-h-[360px] md:min-h-[460px]"
        style={{ backgroundColor: '#3b82f6' }}>
        <div className="absolute inset-0 pointer-events-none opacity-25"
          style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '20px 20px', backgroundPosition: '10px 10px' }}>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-black/10 mix-blend-soft-light"></div>
        <div className="relative h-full sm:p-6 md:p-8 flex flex-col pt-4 pr-4 pb-4 pl-4">
          <div className="flex items-center justify-between text-white/90">
            <span className="text-xs sm:text-sm font-medium">Business Intelligence</span>
            <span className="text-xs sm:text-sm">5/5</span>
          </div>
          <h2
            className="mt-4 sm:mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-tight font-semibold text-white leading-tight">
            Smart Data
            <br />
            Processing
            <br />
            Platform
          </h2>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-white/80 max-w-sm font-normal">
            Complete suite of analytics tools that transform raw data into actionable business intelligence and growth
            insights.
          </p>
          <div className="mt-auto pt-4 sm:pt-6 flex items-center gap-3 text-white/90">
            <span className="inline-flex items-center gap-2 px-2.5 sm:px-3.5 h-8 sm:h-9 rounded-lg sm:rounded-xl bg-white/70 backdrop-blur border border-white/60 text-xs sm:text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="bar-chart-3" className="lucide lucide-bar-chart-3 w-3.5 sm:w-4 h-3.5 sm:h-4"><path d="M3 3v16a2 2 0 0 0 2 2h16" className=""></path><path d="M18 17V9" className=""></path><path d="M13 17V5" className=""></path><path d="M8 17v-3" className=""></path></svg>
              <span className="font-medium hidden sm:inline">Advanced analytics</span>
              <span className="font-medium sm:hidden">Analytics</span>
            </span>
          </div>
        </div>
      </aside>

      {/* Tile 1 */}
      <section
        className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-900 bg-zinc-950 col-span-1 md:col-span-3 lg:col-span-4 min-h-[200px] sm:min-h-[240px] md:min-h-[260px]">
        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/779c923e-bcc8-49c7-9328-661a04d3f208_800w.jpg" alt="Business dashboard with charts" className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent"></div>
        <div className="relative p-4 sm:p-5 md:p-6 h-full flex flex-col">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg tracking-tight font-semibold">Report Builder</h3>
            <button className="inline-flex items-center justify-center size-7 sm:size-8 rounded-lg bg-black/30 border border-white/10 backdrop-blur hover:border-white/20 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="more-vertical" className="lucide lucide-more-vertical w-3.5 sm:w-4 h-3.5 sm:h-4 text-zinc-100"><circle cx="12" cy="12" r="1" className=""></circle><circle cx="12" cy="5" r="1" className=""></circle><circle cx="12" cy="19" r="1" className=""></circle></svg>
            </button>
          </div>
          <div className="mt-auto">
            <button className="inline-flex items-center justify-center size-9 sm:size-11 rounded-xl sm:rounded-2xl bg-blue-500 text-white shadow-[0_10px_30px_-10px_rgba(59,130,246,0.7)] hover:translate-y-[-1px] active:translate-y-0 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" className="lucide lucide-arrow-right w-4 sm:w-5 h-4 sm:h-5"><path d="M5 12h14" className=""></path><path d="m12 5 7 7-7 7" className=""></path></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Tile 2 */}
      <section
        className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-900 bg-zinc-950 col-span-1 md:col-span-3 lg:col-span-4 min-h-[200px] sm:min-h-[240px] md:min-h-[260px]">
        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6c133bac-27cf-429d-9c5d-de08f82858c1_800w.jpg" alt="Data center server visualization" className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent"></div>
        <div className="relative p-4 sm:p-5 md:p-6 h-full flex flex-col">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg tracking-tight font-semibold">Data Pipeline</h3>
            <button className="inline-flex items-center justify-center size-7 sm:size-8 rounded-lg bg-black/30 border border-white/10 backdrop-blur hover:border-white/20 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="more-vertical" className="lucide lucide-more-vertical w-3.5 sm:w-4 h-3.5 sm:h-4 text-zinc-100"><circle cx="12" cy="12" r="1" className=""></circle><circle cx="12" cy="5" r="1" className=""></circle><circle cx="12" cy="19" r="1" className=""></circle></svg>
            </button>
          </div>
          <div className="mt-auto">
            <button className="inline-flex items-center justify-center size-9 sm:size-11 rounded-xl sm:rounded-2xl bg-blue-500 text-white shadow-[0_10px_30px_-10px_rgba(59,130,246,0.7)] hover:translate-y-[-1px] active:translate-y-0 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" className="lucide lucide-arrow-right w-4 sm:w-5 h-4 sm:h-5"><path d="M5 12h14" className=""></path><path d="m12 5 7 7-7 7" className=""></path></svg>
            </button>
          </div>
        </div>
      </section>

      {/* Tile 3 */}
      <section
        className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-900 bg-zinc-950 col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-4 min-h-[200px] sm:min-h-[240px] md:min-h-[260px]">
        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/193e1472-0514-44eb-893a-1376091263f3_800w.jpg" alt="Machine learning visualization" className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent"></div>
        <div className="relative p-4 sm:p-5 md:p-6 h-full flex flex-col">
          <div className="flex items-center justify-between">
            <h3 className="text-base sm:text-lg tracking-tight font-semibold">ML Insights</h3>
            <button className="inline-flex items-center justify-center size-7 sm:size-8 rounded-lg bg-black/30 border border-white/10 backdrop-blur hover:border-white/20 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="more-vertical" className="lucide lucide-more-vertical w-3.5 sm:w-4 h-3.5 sm:h-4 text-zinc-100"><circle cx="12" cy="12" r="1" className=""></circle><circle cx="12" cy="5" r="1" className=""></circle><circle cx="12" cy="19" r="1" className=""></circle></svg>
            </button>
          </div>
          <div className="mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-zinc-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="brain"
                className="lucide lucide-brain w-3.5 sm:w-4 h-3.5 sm:h-4">
                <path d="M12 18V5" className=""></path>
                <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" className=""></path>
                <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5" className=""></path>
                <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77" className=""></path>
                <path d="M18 18a4 4 0 0 0 2-7.464" className=""></path>
                <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517" className=""></path>
                <path d="M6 18a4 4 0 0 1-2-7.464" className=""></path>
                <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77" className=""></path>
              </svg>
              <span className="font-medium">Predictive Models</span>
            </div>
            <button className="inline-flex items-center justify-center size-9 sm:size-11 rounded-xl sm:rounded-2xl bg-blue-500 text-white shadow-[0_10px_30px_-10px_rgba(59,130,246,0.7)] hover:translate-y-[-1px] active:translate-y-0 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="arrow-right" className="lucide lucide-arrow-right w-4 sm:w-5 h-4 sm:h-5"><path d="M5 12h14" className=""></path><path d="m12 5 7 7-7 7" className=""></path></svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bento1;
`;

export const CTA_CODE = `import React, { useRef } from 'react';

const CTA: React.FC = () => {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      btnRef.current.style.setProperty('--x', \`\${x}px\`);
      btnRef.current.style.setProperty('--y', \`\${y}px\`);
    }
  };

  const handleMouseEnter = () => {
    if (btnRef.current) {
      btnRef.current.style.setProperty('--o', '1');
    }
  };

  const handleMouseLeave = () => {
    if (btnRef.current) {
      btnRef.current.style.setProperty('--o', '0');
    }
  };

  return (
    <section className="sm:px-6 lg:px-8 md:py-20 w-full max-w-7xl mr-auto ml-auto pt-14 pr-4 pb-14 pl-4">
      <div className="relative scroll-fade pt-20 visible">
        <div className="flex items-center justify-center">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wide border rounded-full px-3 py-1 text-slate-300/80 bg-white/5 border-white/10">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="rocket" className="lucide lucide-rocket h-3.5 w-3.5 text-cyan-300">
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
            Start Your Transformation
          </span>
        </div>

        <div className="scroll-fade scroll-fade-delay text-center max-w-3xl mt-6 mr-auto ml-auto visible">
          <h2 className="md:text-6xl text-4xl font-semibold text-slate-50 tracking-tight">Ready to Transform</h2>
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-slate-50 mt-1">
            Your
            <span className="bg-clip-text italic font-['Playfair_Display'] bg-gradient-to-r from-slate-200 via-cyan-300 to-indigo-300"> Business Operations?</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-400">
            Book a personalized consultation and discover how AI can revolutionize your workflows
          </p>

          {/* CTA Button */}
          <div className="relative inline-block group scroll-fade scroll-fade-delay-2 mt-6 visible">
            <button
              ref={btnRef}
              className="animate-[slideInBlur_0.8s_ease-out_1.2s_forwards] relative z-10 overflow-hidden transition-[transform] duration-150 ease-out active:scale-[0.98] text-white bg-neutral-900/60 border-white/20 border rounded-xl pt-3 pr-6 pb-3 pl-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
              style={{ '--x': '179.8125px', '--y': '49px', '--o': '0' } as React.CSSProperties}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="relative z-10 inline-flex items-center gap-2 font-semibold">
                Book A Free Call
                <svg className="h-5 w-5 transition-transform duration-200 ease-out group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
              <span className="pointer-events-none absolute bottom-0 left-1/2 right-1/2 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80 transition-[left,right] duration-500 ease-out group-hover:left-0 group-hover:right-0"></span>
              <span className="glow pointer-events-none absolute inset-0 -z-10" aria-hidden="true" style={{ transform: 'scale(0.95) translate(0px, -24px)' }}></span>
            </button>
            <span aria-hidden="true" className="pointer-events-none absolute -bottom-3 left-1/2 -translate-x-1/2 h-6 w-52 rounded-full opacity-70 group-hover:opacity-100 transition-opacity" style={{ background: 'radial-gradient(60% 100% at 50% 50%, rgba(255,255,255,.45), rgba(255,255,255,.22) 35%, transparent 70%)', filter: 'blur(10px) saturate(120%)' }}></span>
          </div>

          {/* Contact info */}
          <div className="mt-8 flex items-center justify-center gap-6 text-slate-400 scroll-fade scroll-fade-delay-3 visible">
            <a href="mailto:hello@neuralflow.ai" className="group hover:text-slate-200 transition flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="mail" className="lucide lucide-mail h-4 w-4">
                <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                <rect x="2" y="4" width="20" height="16" rx="2" />
              </svg>
              hello@neuralflow.ai
            </a>
            <span className="h-4 w-px bg-white/10"></span>
            <a href="tel:+1234567890" className="group hover:text-slate-200 transition flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="phone" className="lucide lucide-phone h-4 w-4">
                <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
              </svg>
              (555) 123-4567
            </a>
          </div>

          {/* Separator */}
          <div className="relative mt-14">
            <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-6">
              <span className="block mx-auto w-80 h-10 rounded-full bg-white/20 blur-2xl opacity-70"></span>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="pt-10 scroll-fade visible">
        <div className="flex gap-4 flex-wrap items-center justify-between">
          {/* Brand */}
          <a href="#" className="inline-flex items-center gap-2">
            <span className="text-sm font-bold text-neutral-200 tracking-tight">NeuralFlow</span>
          </a>

          {/* Socials */}
          <div className="flex items-center gap-4 text-slate-400">
            <a href="#" className="hover:text-slate-200 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="linkedin" className="lucide lucide-linkedin h-5 w-5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="#" className="hover:text-slate-200 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="twitter" className="lucide lucide-twitter h-5 w-5">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
            </a>
            <a href="#" className="hover:text-slate-200 transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="github" className="lucide lucide-github h-5 w-5">
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
          </div>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap gap-6 text-sm text-slate-400 mt-6">
          <a href="#process" className="hover:text-slate-200 transition">Process</a>
          <a href="#clients" className="hover:text-slate-200 transition">Clients</a>
          <a href="#pricing" className="hover:text-slate-200 transition">Pricing</a>
          <a href="#faq" className="hover:text-slate-200 transition">FAQ</a>
          <a href="#contact" className="hover:text-slate-200 transition">Contact</a>
          <a href="#" className="hover:text-slate-200 transition">Privacy</a>
          <a href="#" className="hover:text-slate-200 transition">Terms</a>
        </nav>

        {/* Bottom meta */}
        <div className="mt-8 flex items-center justify-between text-xs text-slate-500 flex-wrap gap-4">
          <span>© 2025 NeuralFlow. All rights reserved.</span>
          <span>Powered by Advanced AI Technology</span>
        </div>
      </footer>
    </section>
  );
};

export default CTA;
`;

export const HEADER_CODE = `import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <header className="fixed z-50 w-full top-0 left-0">
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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4">
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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={'fixed inset-0 z-[60] transition-all duration-300 ' + (isMenuOpen ? 'visible' : 'invisible')}>
        <div
          className={'absolute inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300 ' + (isMenuOpen ? 'opacity-100' : 'opacity-0')}
          onClick={() => setIsMenuOpen(false)}
        ></div>
        <div
          className={'absolute right-0 top-0 bottom-0 w-full max-w-sm bg-slate-900/95 backdrop-blur-lg border-l border-white/10 shadow-2xl transform transition-transform duration-300 ' + (isMenuOpen ? 'translate-x-0' : 'translate-x-full')}
        >
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <span className="text-sm font-medium text-slate-300">Menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5">
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4">
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
`;

export const NEBULA_HERO_CODE = `import React from 'react';

const NebulaHero: React.FC = () => {
  return (
    <section className="relative z-10 w-full bg-black text-slate-300">
      <div className="mx-auto max-w-7xl px-4 pt-10 pb-8 md:px-6 md:pt-16">
        <div className="max-w-3xl text-center mr-auto ml-auto">
          <p
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="sparkles"
              className="lucide lucide-sparkles h-4 w-4 text-sky-400">
              <path
                d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"
                className=""></path>
              <path d="M20 2v4" className=""></path>
              <path d="M22 4h-4" className=""></path>
              <circle cx="4" cy="20" r="2" className=""></circle>
            </svg>
            New: Instant publish with atomic deploys
          </p>
          <h1 className="sm:text-5xl md:text-7xl text-4xl font-semibold tracking-tight text-white/90">
            Ship websites at lightspeed
          </h1>
          <p className="mt-5 text-base md:text-lg text-slate-300">
            Nebula is a visual builder that lets you design, collaborate, and publish in one place. No code required—unless
            you want it.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row mt-8 items-center justify-center">
            <button type="button" className="button">
              <div className="points_wrapper">
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
                <i className="point"></i>
              </div>

              <span className="inner">Try for free<svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
                  <path d="M5 12h14" className=""></path>
                  <path d="m12 5 7 7-7 7" className=""></path>
                </svg></span>
            </button>
            <button className="group relative inline-flex items-center justify-center min-w-[120px] cursor-pointer rounded-xl px-[17px] py-[12px] text-white/70 tracking-tight font-semibold transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] hover:-translate-y-[3px] hover:scale-[1.1] hover:text-white" style={{boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.1)', background: 'radial-gradient(ellipse at bottom,rgba(71,81,92,1) 0%,rgba(0,0,0,1) 100%)'}}>
              <span className="relative z-10 font-normal">Watch demo</span>

              {/* replaces the old ::before underline */}
              <span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[1px] w-[70%] -translate-x-1/2 opacity-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.15,0.83,0.66,1)] group-hover:opacity-80" style={{background: 'linear-gradient(90deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%)'}}></span>
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3 text-sm text-slate-400">
            <div className="flex -space-x-2">
              <img className="h-6 w-6 rounded-full ring-2 ring-black/60 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9c519027-8b76-493a-ae3c-8cf962ccdf04_320w.jpg" alt="" />
              <img className="h-6 w-6 rounded-full ring-2 ring-black/60 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8d3cb9d4-adbe-41e5-a351-a4a6c22d6037_800w.jpg" alt="" />
              <img className="h-6 w-6 rounded-full ring-2 ring-black/60 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/69c45eba-968b-45e3-aff1-ebab9cb7b543_320w.jpg" alt="" />
            </div>
            <span className="">Trusted by modern teams of all sizes</span>
          </div>
        </div>
      </div>

      {/* Editor preview */}
      <div className="-mb-8 max-w-7xl md:px-6 mr-auto ml-auto pr-4 pl-4">
        <div
          className="relative w-full overflow-hidden shadow-black/50 bg-gradient-to-b from-white/[0.04] to-white/[0.02] border-white/10 border rounded-2xl mr-auto ml-auto shadow-2xl backdrop-blur-lg">
          {/* Topbar */}
          <div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-400/80"></span>
              <span className="h-3 w-3 rounded-full bg-green-500/80"></span>
              <div
                className="ml-3 hidden items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-xs text-slate-300 sm:flex">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  data-lucide="layout-panel-left" className="lucide lucide-layout-panel-left h-3.5 w-3.5 text-slate-200">
                  <rect width="7" height="18" x="3" y="3" rx="1" className=""></rect>
                  <rect width="7" height="7" x="14" y="3" rx="1" className=""></rect>
                  <rect width="7" height="7" x="14" y="14" rx="1" className=""></rect>
                </svg>
                Nebula Studio — Project: Aurora
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="hidden rounded-md border border-white/10 bg-white/5 p-1.5 text-slate-200 hover:bg-white/10 sm:inline-flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="share-2" className="lucide lucide-share-2 h-4 w-4"><circle cx="18" cy="5" r="3" className=""></circle><circle cx="6" cy="12" r="3" className=""></circle><circle cx="18" cy="19" r="3" className=""></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" className=""></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" className=""></line></svg></button>
              <button className="hidden rounded-md border border-white/10 bg-white/5 p-1.5 text-slate-200 hover:bg-white/10 sm:inline-flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="users" className="lucide lucide-users h-4 w-4"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" className=""></path><path d="M16 3.128a4 4 0 0 1 0 7.744" className=""></path><path d="M22 21v-2a4 4 0 0 0-3-3.87" className=""></path><circle cx="9" cy="7" r="4" className=""></circle></svg></button>
              <button className="rounded-md bg-sky-500/90 px-3 py-1.5 text-xs font-medium text-white hover:bg-sky-500">Publish</button>
            </div>
          </div>

          {/* Editor body */}
          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Left panel */}
            <aside className="hidden md:block md:col-span-3 bg-black/30 border-white/10 border-r pt-3 pr-3 pb-3 pl-3">
              <div className="mb-3 flex items-center justify-between">
                <div
                  className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-slate-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    data-lucide="panel-left" className="lucide lucide-panel-left h-3.5 w-3.5">
                    <rect width="18" height="18" x="3" y="3" rx="2" className=""></rect>
                    <path d="M9 3v18" className=""></path>
                  </svg>
                  Outline
                </div>
                <button className="rounded-md border border-white/10 bg-white/5 p-1 text-slate-300 hover:bg-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="search" className="lucide lucide-search h-4 w-4"><path d="m21 21-4.34-4.34" className=""></path><circle cx="11" cy="11" r="8" className=""></circle></svg>
                    </button>
              </div>

              <div className="space-y-1 text-slate-300">
                <div className="bg-white/5 rounded-lg pt-2 pr-2 pb-2 pl-2 space-y-3">
                  <div className="mb-1 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        data-lucide="laptop" className="lucide lucide-laptop h-4 w-4 text-sky-400">
                        <path
                          d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"
                          className=""></path>
                        <path d="M20.054 15.987H3.946" className=""></path>
                      </svg>
                      <span className="text-xs font-medium">Desktop — 1200</span>
                    </div>
                    <span className="rounded-md bg-white/5 px-1.5 py-0.5 text-[10px] text-slate-400">Primary</span>
                  </div>
                  <ul className="space-y-1 pl-6 text-xs">
                    <li className="flex items-center gap-2 rounded-md bg-sky-500/10 px-2 py-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        data-lucide="layers" className="lucide lucide-layers h-3.5 w-3.5 text-sky-400">
                        <path
                          d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"
                          className=""></path>
                        <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" className=""></path>
                        <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" className=""></path>
                      </svg>
                      Header
                    </li>
                    <li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        data-lucide="image" className="lucide lucide-image h-3.5 w-3.5 text-purple-400">
                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" className=""></rect>
                        <circle cx="9" cy="9" r="2" className=""></circle>
                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" className=""></path>
                      </svg>
                      Hero
                    </li>
                    <li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        data-lucide="grid" className="lucide lucide-grid h-3.5 w-3.5 text-emerald-400">
                        <rect width="18" height="18" x="3" y="3" rx="2" className=""></rect>
                        <path d="M3 9h18" className=""></path>
                        <path d="M3 15h18" className=""></path>
                        <path d="M9 3v18" className=""></path>
                        <path d="M15 3v18" className=""></path>
                      </svg>
                      Features
                    </li>
                    <li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        data-lucide="credit-card" className="lucide lucide-credit-card h-3.5 w-3.5 text-amber-400">
                        <rect width="20" height="14" x="2" y="5" rx="2" className=""></rect>
                        <line x1="2" x2="22" y1="10" y2="10" className=""></line>
                      </svg>
                      Pricing
                    </li>
                    <li className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-white/5">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        data-lucide="messages-square" className="lucide lucide-messages-square h-3.5 w-3.5 text-pink-400">
                        <path
                          d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
                          className=""></path>
                        <path
                          d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"
                          className=""></path>
                      </svg>
                      Testimonials
                    </li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg pt-2 pr-2 pb-2 pl-2 space-y-3">
                  <div className="mb-1 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                      data-lucide="package" className="lucide lucide-package h-4 w-4 text-indigo-400">
                      <path
                        d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"
                        className=""></path>
                      <path d="M12 22V12" className=""></path>
                      <polyline points="3.29 7 12 12 20.71 7" className=""></polyline>
                      <path d="m7.5 4.27 9 5.15" className=""></path>
                    </svg>
                    <span className="text-xs font-medium">Assets</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="aspect-video overflow-hidden rounded-md bg-white/5">
                      <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/0950426a-fd01-4dc5-a916-33b7c3a94646_320w.jpg" className="h-full w-full object-cover opacity-90" alt="" />
                    </div>
                    <div className="aspect-video overflow-hidden rounded-md bg-white/5">
                      <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/859fc099-059b-4ec4-b0f1-06e736a8bdf4_320w.jpg" className="h-full w-full object-cover opacity-90" alt="" />
                    </div>
                    <div className="aspect-video overflow-hidden rounded-md bg-white/5">
                      <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f17ac654-630a-4fb6-ae2e-e2c4a8fe9274_320w.jpg" className="h-full w-full object-cover opacity-90" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* Canvas */}
            <main className="relative md:col-span-6 bg-black/20">
              <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2 text-xs text-slate-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  data-lucide="monitor-smartphone" className="lucide lucide-monitor-smartphone h-4 w-4 text-sky-400">
                  <path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" className=""></path>
                  <path d="M10 19v-3.96 3.15" className=""></path>
                  <path d="M7 19h5" className=""></path>
                  <rect width="6" height="10" x="16" y="12" rx="2" className=""></rect>
                </svg>
                <span>Breakpoint</span>
                <span className="rounded-md bg-white/5 px-1.5 py-0.5">Desktop</span>
                <span className="text-slate-500">|</span>
                <span>1200</span>
                <div className="ml-auto flex items-center gap-1">
                  <button className="rounded-md border border-white/10 bg-white/5 p-1 hover:bg-white/10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="undo-2" className="lucide lucide-undo-2 h-4 w-4"><path d="M9 14 4 9l5-5" className=""></path><path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11" className=""></path></svg></button>
                  <button className="rounded-md border border-white/10 bg-white/5 p-1 hover:bg-white/10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="redo-2" className="lucide lucide-redo-2 h-4 w-4"><path d="m15 14 5-5-5-5" className=""></path><path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13" className=""></path></svg></button>
                </div>
              </div>

              <div className="sm:p-6 pt-4 pr-4 pb-4 pl-4">
                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-white/5 ring-1 ring-white/10">
                  <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/9fb3eba2-d3b1-4a3c-9feb-29a0b47b70c6_1600w.jpg" className="h-[360px] w-full object-cover sm:h-[460px]" alt="" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="max-w-xl rounded-xl border border-white/10 bg-black/40 p-4 backdrop-blur">
                      <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">Orion Canvas</h3>
                      <p className="mt-1 text-sm text-slate-300">A limitless canvas with modern layout, motion, and type
                        features—ready for production.</p>
                      <div className="mt-3 flex items-center gap-2">
                        <button className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-1.5 text-xs font-medium text-black hover:bg-white/90">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="wand-2" className="lucide lucide-wand-2 h-4 w-4"><path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72" className=""></path><path d="m14 7 3 3" className=""></path><path d="M5 6v4" className=""></path><path d="M19 14v4" className=""></path><path d="M10 2v2" className=""></path><path d="M7 8H3" className=""></path><path d="M21 16h-4" className=""></path><path d="M11 3H9" className=""></path></svg>
                              Auto layout
                            </button>
                        <button className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 hover:bg-white/10">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="move" className="lucide lucide-move h-4 w-4"><path d="M12 2v20" className=""></path><path d="m15 19-3 3-3-3" className=""></path><path d="m19 9 3 3-3 3" className=""></path><path d="M2 12h20" className=""></path><path d="m5 9-3 3 3 3" className=""></path><path d="m9 5 3-3 3 3" className=""></path></svg>
                              Drag
                            </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mini device preview */}
                <div
                  className="pointer-events-none absolute -bottom-6 right-4 hidden w-64 rounded-xl border border-white/10 bg-white/5 p-2 backdrop-blur lg:block">
                  <div className="rounded-lg border border-white/10 bg-black/50 p-2">
                    <div className="aspect-[9/16] overflow-hidden rounded-md">
                      <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/e080ec8d-304b-41cc-a8e7-c2b6efc8ab07_800w.jpg" className="h-full w-full object-cover" alt="" />
                    </div>
                    <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400">
                      <span className="inline-flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="smartphone" className="lucide lucide-smartphone h-3 w-3"><rect width="14" height="20" x="5" y="2" rx="2" ry="2" className=""></rect><path d="M12 18h.01" className=""></path></svg> Mobile 390</span>
                      <span className="rounded bg-white/5 px-1 py-0.5">Preview</span>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            {/* Right panel */}
            <aside className="hidden md:block md:col-span-3 border-l border-white/10 bg-black/30 p-3">
              <div className="mb-3 flex items-center justify-between">
                <div
                  className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs font-medium text-slate-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    data-lucide="sliders-horizontal" className="lucide lucide-sliders-horizontal h-3.5 w-3.5">
                    <line x1="21" x2="14" y1="4" y2="4" className=""></line>
                    <line x1="10" x2="3" y1="4" y2="4" className=""></line>
                    <line x1="21" x2="12" y1="12" y2="12" className=""></line>
                    <line x1="8" x2="3" y1="12" y2="12" className=""></line>
                    <line x1="21" x2="16" y1="20" y2="20" className=""></line>
                    <line x1="12" x2="3" y1="20" y2="20" className=""></line>
                    <line x1="14" x2="14" y1="2" y2="6" className=""></line>
                    <line x1="8" x2="8" y1="10" y2="14" className=""></line>
                    <line x1="16" x2="16" y1="18" y2="22" className=""></line>
                  </svg>
                  Properties
                </div>
                <button className="rounded-md border border-white/10 bg-white/5 p-1 text-slate-300 hover:bg-white/10">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="more-horizontal" className="lucide lucide-more-horizontal h-4 w-4"><circle cx="12" cy="12" r="1" className=""></circle><circle cx="19" cy="12" r="1" className=""></circle><circle cx="5" cy="12" r="1" className=""></circle></svg>
                    </button>
              </div>

              <div className="space-y-3">
                <div className="bg-white/5 rounded-lg pt-3 pr-3 pb-3 pl-3 space-y-3">
                  <div className="mb-2 flex items-center justify-between text-xs">
                    <span className="text-slate-300">Position</span>
                    <span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-slate-400">Relative</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-[11px]">
                    <button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-300 hover:bg-white/10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="align-start-vertical" className="lucide lucide-align-start-vertical mr-1 inline h-3.5 w-3.5"><rect width="9" height="6" x="6" y="14" rx="2" className=""></rect><rect width="16" height="6" x="6" y="4" rx="2" className=""></rect><path d="M2 2v20" className=""></path></svg>Top</button>
                    <button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-300 hover:bg-white/10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="align-center-vertical" className="lucide lucide-align-center-vertical mr-1 inline h-3.5 w-3.5"><path d="M12 2v20" className=""></path><path d="M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4" className=""></path><path d="M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4" className=""></path><path d="M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1" className=""></path><path d="M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1" className=""></path></svg>Center</button>
                    <button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-300 hover:bg-white/10"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="align-end-vertical" className="lucide lucide-align-end-vertical mr-1 inline h-3.5 w-3.5"><rect width="16" height="6" x="2" y="4" rx="2" className=""></rect><rect width="9" height="6" x="9" y="14" rx="2" className=""></rect><path d="M22 22V2" className=""></path></svg>Bottom</button>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg pt-3 pr-3 pb-3 pl-3 space-y-3">
                  <div className="mb-2 flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-medium">Size</span>
                    <span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-slate-400">Auto</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div
                      className="rounded-md border border-white/10 bg-black/40 px-2 py-1 text-slate-300 font-medium text-center">
                      W: 1200</div>
                    <div
                      className="rounded-md border border-white/10 bg-black/40 px-2 py-1 text-slate-300 font-medium text-center">
                      H: Auto</div>
                  </div>
                  <div className="mt-2 grid grid-cols-4 gap-2 text-[11px]">
                    <button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-300 font-medium hover:bg-white/10 transition focus:ring-2 focus:ring-sky-500 focus:outline-none">Fill</button>
                    <button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-300 font-medium hover:bg-white/10 transition focus:ring-2 focus:ring-sky-500 focus:outline-none">Fit</button>
                    <button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-300 font-medium hover:bg-white/10 transition focus:ring-2 focus:ring-sky-500 focus:outline-none">Fixed
        </button><button className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-slate-300 font-medium hover:bg-white/10 transition focus:ring-2 focus:ring-sky-500 focus:outline-none">Min</button>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg pt-3 pr-3 pb-3 pl-3 space-y-3">
                  <div className="mb-2 flex items-center justify-between text-xs">
                    <span className="text-slate-300">Effects</span>
                    <span className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] text-slate-400">3</span>
                  </div>
                  <div className="space-y-2 text-[11px]">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 text-slate-300"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="droplet" className="lucide lucide-droplet w-[14px] h-[14px]" style={{width: '14px', height: '14px', color: 'rgb(56, 189, 248)'}}><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" className=""></path></svg>Blur</span>
                      <span className="rounded bg-white/5 px-1.5 py-0.5 text-slate-400">8px</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 text-slate-300"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="sun" className="lucide lucide-sun h-3.5 w-3.5 text-amber-400"><circle cx="12" cy="12" r="4" className=""></circle><path d="M12 2v2" className=""></path><path d="M12 20v2" className=""></path><path d="m4.93 4.93 1.41 1.41" className=""></path><path d="m17.66 17.66 1.41 1.41" className=""></path><path d="M2 12h2" className=""></path><path d="M20 12h2" className=""></path><path d="m6.34 17.66-1.41 1.41" className=""></path><path d="m19.07 4.93-1.41 1.41" className=""></path></svg>Glow</span>
                      <span className="rounded bg-white/5 px-1.5 py-0.5 text-slate-400">20%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 text-slate-300"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="layers" className="lucide lucide-layers h-3.5 w-3.5 text-purple-400"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" className=""></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" className=""></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" className=""></path></svg>Blend</span>
                      <span className="rounded bg-white/5 px-1.5 py-0.5 text-slate-400">Overlay</span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NebulaHero;
`;

export const FLUX_HERO_CODE = `import React, { useEffect, useRef } from 'react';
import { ArrowRight, Terminal, RotateCw, Move, MousePointer2, Box, Scaling, Image, Layers, Plus } from 'lucide-react';

const FluxHero: React.FC = () => {
    const scrollObserver = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Start animation when in view
                    const target = entry.target as HTMLElement;
                    target.dataset.visible = 'true';
                }
            });
        };

        scrollObserver.current = new IntersectionObserver(handleIntersect, {
            threshold: 0.1,
        });

        const elements = document.querySelectorAll('.animate-on-scroll');
        elements.forEach((el) => scrollObserver.current?.observe(el));

        return () => {
            scrollObserver.current?.disconnect();
        };
    }, []);

  return (
    <section className="min-h-screen bg-black overflow-hidden flex items-center justify-center p-4">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 z-10 w-full max-w-[90rem] mr-auto ml-auto relative items-center">
      <div className="lg:col-span-6 flex flex-col gap-8">
        <div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 w-fit animate-on-scroll opacity-0 transition-opacity duration-700 data-[visible=true]:opacity-100">
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
          <span className="text-[10px] uppercase text-orange-200 tracking-widest font-mono">
            Flux 2.0 is live
          </span>
        </div>

        <h1
          className="md:text-7xl lg:text-8xl leading-[0.95] animate-on-scroll text-5xl font-medium text-white tracking-tighter font-display opacity-0 translate-y-4 transition-all duration-700 delay-100 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
        >
          Design in
          <span className="bg-clip-text text-transparent bg-gradient-to-l from-[#fd953f] to-orange-600 px-2">
            3D
          </span>
          .
          <br />
          Ship to web.
        </h1>

        <p className="text-lg text-neutral-400 font-light max-w-md leading-relaxed animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 delay-200 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0">
          A collaborative design tool for the browser. Create organic shapes,
          interactive scenes, and export production-ready React components in
          seconds.
        </p>

        <div className="flex flex-wrap animate-on-scroll gap-4 items-center opacity-0 translate-y-4 transition-all duration-700 delay-300 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0">
          <button className="group flex overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(234,88,12,0.5)] focus:outline-none text-sm font-medium text-white tracking-widest font-geist rounded-full py-5 px-12 relative items-center justify-center">
             {/* Full Border Beam */}
             <div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
                <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,#ea580c_360deg)]" style={{ animation: 'beam-spin 3s linear infinite' }}></div>
                <div className="absolute inset-[1px] rounded-full bg-black"></div>
              </div>

              {/* Inner Background & Effects */}
              <div className="-z-10 overflow-hidden bg-zinc-950 rounded-full absolute top-[2px] right-[2px] bottom-[2px] left-[2px]">
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/60 to-transparent"></div>
                <div className="opacity-30 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)', backgroundSize: '12px 12px', animation: 'dots-move 8s linear infinite' }}></div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-orange-500/10 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-orange-500/30"></div>
              </div>

              <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
                Start Building
              </span>
              <ArrowRight className="relative z-10 ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <div className="flex bg-white/5 rounded-full py-3 px-4 backdrop-blur-xl gap-4 items-center"
            style={{ position: 'relative', '--border-gradient': 'linear-gradient(225deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0))', '--border-radius-before': '9999px' } as React.CSSProperties}>
            <div className="flex -space-x-2">
              <div
                className="bg-neutral-700 w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/90ec73f0-6fd3-4d0c-922c-fcc592c983df_320w.webp)] bg-cover bg-center border-[#050505] border rounded-full">
              </div>
              <div
                className="bg-neutral-600 w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e3e1091-f8e8-4022-a02a-fa37a35c59a5_320w.jpg)] bg-cover bg-center border-[#050505] border rounded-full">
              </div>
              <div
                className="bg-neutral-500 w-6 h-6 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c4ee565a-2084-483b-8358-9fc06da5ee99_320w.jpg)] bg-cover bg-center border-[#050505] border rounded-full transition-all duration-100 ease-in-out hover:scale-110"></div>
            </div>
            <span className="text-xs text-neutral-400">
                Used by 10k+ designers
            </span>
          </div>
        </div>

        <div className="mt-8 font-mono text-xs text-neutral-500 flex items-center gap-2 animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 delay-400 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0">
          <Terminal className="w-3 h-3" />
          <span>npm install @flux/react-three-fiber</span>
        </div>
      </div>

      <div className="lg:col-span-6 animate-on-scroll h-[420px] md:h-[520px] lg:h-[620px] relative perspective-[1000px] opacity-0 translate-y-4 transition-all duration-700 delay-500 data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0">
        <div
          className="glass-panel overflow-hidden flex flex-col transform transition-transform hover:rotate-0 duration-700 ease-out rounded-xl absolute top-0 right-0 bottom-0 left-0 rotate-x-[5deg] rotate-y-[-5deg] border border-white/5 bg-black/40">
          <div className="flex bg-white/5 h-10 border-white/5 border-b px-4 backdrop-blur-md gap-2 items-center">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/20"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/20"></div>
            </div>
            <div className="mx-auto font-mono text-[10px] text-neutral-500">
              scene.flux — Edited
            </div>
          </div>
          <div className="flex-1 overflow-hidden bg-neutral-950 relative preserve-3d">
            <iframe src="https://my.spline.design/genkubgreetingrobot-ojzcjWInavuKpZSt2luvgvjl/" frameBorder="0"
              allowFullScreen loading="lazy" className="absolute inset-0 w-full h-full border-none pointer-events-none"
              data-container-bg="true"></iframe>
            <div className="absolute top-0 right-0 bottom-0 left-0 pointer-events-none"
              style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '50px 50px', transform: 'perspective(500px) rotateX(60deg) translateY(100px) scale(2)', opacity: 0.5 }}>
            </div>

            {/* 3D Cube Simulation */}
            <div
              className="preserve-3d animate-[spin-slow_10s_linear_infinite] w-32 h-32 absolute top-3/4 left-1/2 -ml-16 -mt-16 pointer-events-none">
              <div className="backdrop-blur-[2px] bg-purple-500/10 border-purple-500/40 border absolute inset-0" style={{ transform: 'translateZ(4rem)' }}></div>
              <div className="backdrop-blur-[2px] bg-purple-500/10 border-purple-500/40 border absolute inset-0" style={{ transform: 'rotateY(180deg) translateZ(4rem)' }}></div>
              <div className="backdrop-blur-[2px] bg-purple-500/10 border-purple-500/40 border absolute inset-0" style={{ transform: 'rotateY(90deg) translateZ(4rem)' }}></div>
              <div className="backdrop-blur-[2px] bg-purple-500/10 border-purple-500/40 border absolute inset-0" style={{ transform: 'rotateY(-90deg) translateZ(4rem)' }}></div>
              <div className="backdrop-blur-[2px] bg-purple-500/10 border-purple-500/40 border absolute inset-0" style={{ transform: 'rotateX(90deg) translateZ(4rem)' }}></div>
              <div className="backdrop-blur-[2px] bg-purple-500/10 border-purple-500/40 border absolute inset-0" style={{ transform: 'rotateX(-90deg) translateZ(4rem)' }}></div>
              <div className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 bg-blue-500/20 rounded-full blur-md animate-pulse preserve-3d"></div>
            </div>

            {/* Axis Gizmo */}
            <div className="pointer-events-none z-20 absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="absolute bottom-0 left-0 w-px h-20 bg-green-500 origin-bottom"></div>
              <div className="absolute bottom-0 left-0 h-px w-20 bg-red-500 origin-left"></div>
              <div className="absolute bottom-0 left-0 w-px h-16 bg-blue-500 origin-bottom transform rotate-45 translate-y-2 -translate-x-2"></div>
            </div>

            {/* Controls */}
            <div
              className="flex gap-1 z-30 bg-[#0A0A0A]/90 border-white/10 border rounded-full p-1.5 absolute bottom-6 left-1/2 -translate-x-1/2 shadow-2xl backdrop-blur-md items-center">
              <button className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-[10px] font-medium text-white hover:bg-white/20 transition-all border border-white/5">
                 <RotateCw className="w-3.5 h-3.5" />
                 Rotate
              </button>
              <button className="flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-medium text-neutral-400 hover:text-white hover:bg-white/5 transition-all border border-transparent">
                 <Move className="w-3.5 h-3.5" />
                 Move
              </button>
            </div>
          </div>
        </div>

        {/* Floating Toolbar */}
        <div
          className="flex flex-col glass-panel animate-[float_6s_ease-in-out_infinite] bg-neutral-800/40 w-12 rounded-lg p-2 absolute top-12 -left-6 gap-2 border border-white/10 backdrop-blur-md">
          <button className="p-1.5 hover:bg-white/10 rounded text-purple-400"><MousePointer2 className="w-4 h-4" /></button>
          <button className="p-1.5 hover:bg-white/10 rounded text-neutral-400 hover:text-white"><Box className="w-4 h-4" /></button>
          <button className="p-1.5 hover:bg-white/10 rounded text-neutral-400 hover:text-white"><Move className="w-4 h-4" /></button>
          <button className="p-1.5 hover:bg-white/10 rounded text-neutral-400 hover:text-white"><Scaling className="w-4 h-4" /></button>
          <div className="h-px w-full bg-white/10 my-1"></div>
          <button className="p-1.5 hover:bg-white/10 rounded text-neutral-400 hover:text-white"><Image className="w-4 h-4" /></button>
        </div>

        {/* Material Panel */}
        <div
          className="glass-panel animate-[float_7s_ease-in-out_infinite_1s] w-48 rounded-lg p-4 absolute -bottom-4 -right-4 border border-white/10 bg-black/60 backdrop-blur-md">
          <div className="flex justify-between items-center mb-4">
            <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">Material</span>
            <Layers className="w-3 h-3 text-neutral-500" />
          </div>
          <div className="space-y-3">
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] text-neutral-400">
                <span>Roughness</span>
                <span>0.4</span>
              </div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full w-[40%] bg-purple-500 rounded-full"></div>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] text-neutral-400">
                <span>Metalness</span>
                <span>0.8</span>
              </div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <div className="bg-orange-500 w-[80%] h-full rounded-full"></div>
              </div>
            </div>
            <div className="flex gap-2 pt-2">
              <div className="w-6 h-6 rounded bg-purple-500/50 border border-white/20"></div>
              <div className="bg-orange-500/50 w-6 h-6 border-white/20 border rounded"></div>
              <div className="w-6 h-6 rounded bg-white/10 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/20 transition-colors cursor-pointer">
                <Plus className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <style dangerouslySetInnerHTML={{__html: \`
        .glass-panel {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.36);
        }
        .preserve-3d {
            transform-style: preserve-3d;
        }
    \`}} />
    </section>
  );
};

export default FluxHero;
`;

export const GROWTH_HERO_CODE = `import React from 'react';

const GrowthHero: React.FC = () => {
  return (
    <section className="relative z-10 max-w-4xl sm:pt-20 md:pt-28 text-center mr-auto ml-auto pt-14 pb-12">
      {/* Social proof */}
      <div className="mb-6 flex items-center justify-center gap-4">
        <div className="flex -space-x-3">
          <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/2201bb49-ba9d-4655-9360-c0350107a9fd_320w.jpg" alt="Client 1" className="h-9 w-9 rounded-full ring-2 ring-black/60 object-cover" />
          <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/c1bfea42-f5c9-4b52-974e-36fe36212b17_320w.jpg" alt="Client 2" className="h-9 w-9 rounded-full ring-2 ring-black/60 object-cover" />
          <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b6d79211-32f1-430e-96b3-9b4d857c1482_320w.jpg" alt="Client 3" className="h-9 w-9 rounded-full ring-2 ring-black/60 object-cover" />
          <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/5bf79840-b7ed-4d8d-acd3-c5f5835a065e_320w.jpg" alt="Client 4" className="h-9 w-9 rounded-full ring-2 ring-black/60 object-cover" />
          <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/590efc90-e69f-4f7e-a7c1-e54d0a7fe400_320w.jpg" alt="Client 5" className="h-9 w-9 rounded-full ring-2 ring-black/60 object-cover" />
        </div>
        <div className="flex flex-col items-start">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="star"
              className="lucide lucide-star h-4 w-4 fill-white">
              <path
                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                className=""></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="star"
              className="lucide lucide-star h-4 w-4 fill-white">
              <path
                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                className=""></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="star"
              className="lucide lucide-star h-4 w-4 fill-white">
              <path
                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                className=""></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="star"
              className="lucide lucide-star h-4 w-4 fill-white">
              <path
                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                className=""></path>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="star"
              className="lucide lucide-star h-4 w-4 fill-white">
              <path
                d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
                className=""></path>
            </svg>
          </div>
          <p className="mt-1 text-xs font-medium text-white/70 font-geist">140+ happy partners</p>
        </div>
      </div>

      <h1 className="max-w-5xl sm:text-5xl md:text-7xl text-4xl tracking-tighter font-geist mr-auto ml-auto">
        Ready to
        <span className="italic text-white tracking-tight font-instrument-serif" style={{ fontFamily: '"Playfair Display", serif' }}> boost </span>
        your growth with performance ads?
      </h1>

      <p className="max-w-2xl sm:text-lg text-base font-normal text-white/70 font-geist mt-6 mr-auto ml-auto">
        We engineer profitable acquisition systems for digital brands. If efficient, scalable growth is your goal, you’re in
        the right place.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row mt-8 items-center justify-center">
        <a href="#"
          className="inline-flex items-center gap-2 shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] text-base font-medium text-black font-geist bg-emerald-500 rounded-xl pt-3 pr-6 pb-3 pl-6">Get
          Started</a>
        <a href="#"
          className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-base font-medium text-white/90 backdrop-blur hover:bg-white/10 font-geist">

          Learn more
        </a>
      </div>

      {/* Glow plate */}

    </section>
  );
};

export default GrowthHero;
`;

export const HELIOS_HERO_CODE = `import React, { useEffect, useRef, useState } from 'react';
import { Facebook, Twitter, Instagram, Youtube, Menu } from 'lucide-react';

const HeliosHero: React.FC = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
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
      <nav className="fixed z-50 transition-all duration-300 md:px-12 w-full">
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
        className="overflow-hidden bg-center h-screen bg-cover relative flex items-center"
        style={{ backgroundImage: 'url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/77f6ea12-a46c-43c8-a1fc-871074b4d483_3840w.png)' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-20 w-full">
          <div className="fade-in-section max-w-lg">
            <h2 className="leading-tight text-4xl md:text-5xl font-thin text-gray-900 tracking-tighter font-montserrat mb-8">
              The world\\'s first bio-emotive home guardian.
            </h2>
            <div className="space-y-4">
              <button className="hover:bg-gray-800 transition-all hover:shadow-2xl hover:-translate-y-1 text-sm font-medium text-white bg-gray-900 rounded-full py-3 px-10 shadow-xl">
                Reserve
              </button>
              <p className="uppercase text-xs font-bold tracking-widest opacity-60">Shipping late 2026</p>
            </div>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
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
          <div className="glass-panel flex flex-col fade-in-section hover:scale-[1.02] transition-transform duration-500 text-center rounded-[2.5rem] p-10 space-y-6 items-center delay-100">
            <div
              className="w-20 h-20 bg-cover rounded-2xl mb-2 shadow-sm"
              style={{ backgroundImage: 'url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6cf90f9d-ad99-4d22-9d68-277089397c2f_320w.png?w=800&q=80)' }}
            />
            <h3 className="text-2xl font-semibold tracking-tight">
              The Steward<br/><span className="text-lg font-normal opacity-70">Household Autonomy</span>
            </h3>
            <p className="text-lg leading-relaxed opacity-80">
              From folding laundry to organizing playrooms. robi manages the home so you don\\'t have to.
            </p>
            <div className="mt-auto pt-6 text-sm font-medium opacity-60 uppercase tracking-wider border-t border-gray-900/10 w-full">
              Articulated Precision: 99.9%
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-panel flex flex-col fade-in-section hover:scale-[1.02] transition-transform duration-500 text-center rounded-[2.5rem] p-10 space-y-6 items-center delay-200">
            <div
              className="w-20 h-20 bg-cover rounded-2xl mb-2 shadow-sm"
              style={{ backgroundImage: 'url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce1daa6a-0269-464a-851b-3789fdf298b6_320w.png)' }}
            />
            <h3 className="text-2xl font-semibold tracking-tight">
              The Companion<br/><span className="text-lg font-normal opacity-70">Adaptive EQ</span>
            </h3>
            <p className="text-lg leading-relaxed opacity-80">
              Learns your family\\'s humor, teaches lessons, and provides emotional support.
            </p>
            <div className="mt-auto pt-6 text-sm font-medium opacity-60 uppercase tracking-wider border-t border-gray-900/10 w-full">
              Language Modules: 50+
            </div>
          </div>
        </div>

        <div className="fade-in-section text-center py-24">
          <p className="md:text-4xl text-2xl font-medium text-gray-900 tracking-tight opacity-90 leading-tight mx-auto max-w-3xl">
            It\\'s more than a machine, this yellow package is only for
          </p>
          <h1 className="mt-8 md:text-8xl text-6xl font-black text-gray-900 animate-float drop-shadow-[0_10px_10px_rgba(234,179,8,0.3)]">
            $\`<span ref={countRef}>{count.toLocaleString()}</span>
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
                  <span className="font-semibold w-1/3\">\${spec.label}</span>
                  <span className="font-normal opacity-80 w-2/3 text-right\">\${spec.value}</span>
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
                <span className="text-4xl md:text-5xl font-medium tracking-tight mb-2\">\${stat.label}</span>
                <span className={\`text-lg font-medium \${stat.dark ? 'text-gray-400' : 'text-gray-500'}\`}>\${stat.sub}</span>
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
`;
