import React from 'react';

const Bento2 = () => {
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
        style={{backgroundColor: '#3b82f6'}}>
        <div className="absolute inset-0 pointer-events-none opacity-25"
          style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize:'20px 20px', backgroundPosition:'10px 10px'}}>
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
        <img src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/6c133bac-27cf-429d-9c5d-de08f82858c1_800w.jpg" alt="Data center server visualization" className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700" style={{}} />
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

export default Bento2;
