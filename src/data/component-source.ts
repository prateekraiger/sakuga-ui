export const BENTO1_CODE = `import React from 'react';

const Bento1 = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-5xl">
      {/* Featured Product (Hero) */}
      <section
        className="relative group overflow-hidden rounded-2xl sm:rounded-3xl border border-zinc-900 bg-zinc-950 col-span-1 sm:col-span-2 md:col-span-6 lg:col-span-8 min-h-[320px] sm:min-h-[360px] md:min-h-[460px]">
        <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/87192772-f196-4c19-b2f3-e7406399e82f_800w.jpg" alt="Data visualization dashboard interface" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
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
        <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/779c923e-bcc8-49c7-9328-661a04d3f208_800w.jpg" alt="Business dashboard with charts" className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" />
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
        <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6c133bac-27cf-429d-9c5d-de08f82858c1_800w.jpg" alt="Data center server visualization" className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700" />
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
        <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/193e1472-0514-44eb-893a-1376091263f3_800w.jpg" alt="Machine learning visualization" className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700" />
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
