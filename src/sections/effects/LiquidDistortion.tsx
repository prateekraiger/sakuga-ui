import React, { useEffect, useRef } from 'react';
import SectionLabel from '../../components/ui/SectionLabel';

interface LiquidDistortionProps {
  onShowCode: (code: string, title: string) => void;
}

const codeSnippet = `<!-- SVG Filter in HTML -->
<filter id="liquid-filter">
  <feTurbulence id="turb" type="fractalNoise" baseFrequency="0" numOctaves="2" />
  <feDisplacementMap in="SourceGraphic" in2="noise" scale="60" />
</filter>

// JS Animation
const turb = document.getElementById('turb');
let val = 0, target = 0;

img.onmouseenter = () => target = 0.03;
img.onmouseleave = () => target = 0.00;

function loop() {
  val += (target - val) * 0.05;
  turb.setAttribute('baseFrequency', \`\${val} \${val}\`);
  requestAnimationFrame(loop);
}
loop();`;

const LiquidDistortion: React.FC<LiquidDistortionProps> = ({ onShowCode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  // We'll access the global SVG filter ID defined in App.tsx or index.html
  // But for React safety, we can direct manipulation here if we assume the ID exists.

  useEffect(() => {
    const turb = document.getElementById('turb');
    const container = containerRef.current;
    if (!turb || !container) return;

    let val = 0.00;
    let target = 0.00;
    let rafId: number;

    const loop = () => {
      val += (target - val) * 0.05;
      // Accessing DOM directly for performance in animation loop
      turb.setAttribute('baseFrequency', `${val} ${val}`);
      rafId = requestAnimationFrame(loop);
    };

    const onEnter = () => { target = 0.02; }; // Slightly lower for smoother effect
    const onLeave = () => { target = 0.00; };

    container.addEventListener('mouseenter', onEnter);
    container.addEventListener('mouseleave', onLeave);

    loop();

    return () => {
      container.removeEventListener('mouseenter', onEnter);
      container.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="liquid" className="relative min-h-screen bg-[#050505] flex items-center justify-center border-t border-white/5 overflow-hidden py-20">
      <SectionLabel
        number="03"
        text="SVG TURBULENCE"
        onCode={() => onShowCode(codeSnippet, "Liquid Distortion")}
      />

      <div className="flex flex-col md:flex-row gap-20 items-center justify-center w-full px-6 max-w-7xl mx-auto">

        <div className="text-right max-w-sm order-2 md:order-1">
          <h2 className="text-6xl font-bold mb-6 tracking-tighter text-white">LIQUID<br />REALITY</h2>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Hover the image. A dynamically generated SVG noise map displaces the pixel data in real-time, creating a fluid surface tension effect.
          </p>
        </div>

        <div
          ref={containerRef}
          className="relative w-full max-w-[500px] aspect-[5/7] overflow-hidden border border-neutral-800 order-1 md:order-2 group hoverable cursor-pointer"
        >
          <img
            src="https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=1200&auto=format&fit=crop"
            className="w-full h-full object-cover transform scale-110 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-100"
            style={{ filter: "url('#liquid-filter')" }}
            alt="Liquid"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-overlay">
            <h3 className="text-9xl font-black text-white opacity-20 tracking-tighter">FLUX</h3>
          </div>
        </div>

      </div>
    </section>
  );
};

export default LiquidDistortion;
