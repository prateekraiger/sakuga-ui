export const VELOCITY_TEXT_CODE = `import React, { useEffect, useRef } from 'react';
import SectionLabel from '../../components/ui/SectionLabel';

interface VelocityTextProps {
  onShowCode: (code: string, title: string) => void;
}

const codeSnippet = \\\`// Kinetic Velocity Scroll
const velocityTexts = document.querySelectorAll('.velocity-text');
let currentScroll = 0, targetScroll = 0;

function update() {
  targetScroll = window.scrollY;
  currentScroll += (targetScroll - currentScroll) * 0.1;
  const skew = Math.min(Math.max((targetScroll - currentScroll) * 0.15, -10), 10);

  velocityTexts.forEach((text, i) => {
    // Alternating skew direction
    const dir = i % 2 === 0 ? 1 : -1;
    text.style.transform = \\\\\\\`skewX(\\\\\\\${skew * dir}deg)\\\\\\\`;
  });
  requestAnimationFrame(update);
}
update();\\\`;

const VelocityText: React.FC<VelocityTextProps> = ({ onShowCode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRefs = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    let currentScroll = 0;
    let targetScroll = 0;
    let rafId: number;

    const update = () => {
      targetScroll = window.scrollY;
      currentScroll += (targetScroll - currentScroll) * 0.1;
      const velocity = targetScroll - currentScroll;
      const skew = Math.min(Math.max(velocity * 0.15, -10), 10);

      textRefs.current.forEach((text, i) => {
        if (text) {
          const dir = i % 2 === 0 ? 1 : -1;
          text.style.transform = \\\`skewX(\\\${skew * dir}deg)\\\`;
        }
      });

      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <section id="velocity" className="h-[80vh] flex flex-col justify-center items-center relative overflow-hidden bg-[#050505] border-t border-white/5">
      <SectionLabel
        number="01"
        text="VELOCITY SCROLL"
        onCode={() => onShowCode(codeSnippet, "Velocity Scroll")}
      />

      <div className="absolute top-32 text-center">
        <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest animate-pulse">[ SCROLL TO DEFORM ]</span>
      </div>

      <div ref={containerRef} className="text-center space-y-4">
        <h1
          ref={(el) => { textRefs.current[0] = el; }}
          className="text-[12vw] font-black leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600 will-change-transform"
        >
          KINETIC
        </h1>
        <h1
          ref={(el) => { textRefs.current[1] = el; }}
          className="text-[12vw] font-black leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-neutral-600 to-neutral-900 will-change-transform"
        >
          ENGINE
        </h1>
      </div>
    </section>
  );
};

export default VelocityText;`;
