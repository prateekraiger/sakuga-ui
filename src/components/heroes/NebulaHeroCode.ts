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
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0950426a-fd01-4dc5-a916-33b7c3a94646_320w.jpg" className="h-full w-full object-cover opacity-90" alt="" />
                    </div>
                    <div className="aspect-video overflow-hidden rounded-md bg-white/5">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/859fc099-059b-4ec4-b0f1-06e736a8bdf4_320w.jpg" className="h-full w-full object-cover opacity-90" alt="" />
                    </div>
                    <div className="aspect-video overflow-hidden rounded-md bg-white/5">
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f17ac654-630a-4fb6-ae2e-e2c4a8fe9274_320w.jpg" className="h-full w-full object-cover opacity-90" alt="" />
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
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9fb3eba2-d3b1-4a3c-9feb-29a0b47b70c6_1600w.jpg" className="h-[360px] w-full object-cover sm:h-[460px]" alt="" />
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
                      <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e080ec8d-304b-41cc-a8e7-c2b6efc8ab07_800w.jpg" className="h-full w-full object-cover" alt="" />
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
