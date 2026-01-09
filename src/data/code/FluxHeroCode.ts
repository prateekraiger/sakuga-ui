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
              scene.flux â€” Edited
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

    <style dangerouslySetInnerHTML={{__html: `
        .glass-panel {
            background: linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%);
            box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.36);
        }
        .preserve-3d {
            transform-style: preserve-3d;
        }
    `}} />
    </section>
  );
};

export default FluxHero;
