import React, { useRef } from 'react';
import SectionLabel from '../components/SectionLabel';

interface FractureGlassProps {
  onShowCode: (code: string, title: string) => void;
}

const codeSnippet = `// Fracture Glass Effect
const container = document.getElementById('fracture');
const slices = document.querySelectorAll('.slice');

container.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();
  const yVal = (e.clientY - rect.top - (rect.height / 2)) / (rect.height / 2);
  
  slices.forEach(slice => {
    const dir = parseFloat(slice.getAttribute('data-dir'));
    slice.style.transform = \`translateY(\${yVal * 40 * dir}px)\`;
  });
});`;

const FractureGlass: React.FC<FractureGlassProps> = ({ onShowCode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const slicesRef = useRef<(HTMLDivElement | null)[]>([]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const yVal = (e.clientY - rect.top - (rect.height / 2)) / (rect.height / 2);

    slicesRef.current.forEach((slice, i) => {
      if (slice) {
        // Different movement multipliers for each slice
        const multipliers = [1.5, -1.2, 2.0, -1.5, 1.0]; 
        slice.style.transform = `translateY(${yVal * 40 * multipliers[i]}px)`;
      }
    });
  };

  const handleMouseLeave = () => {
    slicesRef.current.forEach(slice => {
      if (slice) slice.style.transform = `translateY(0)`;
    });
  };

  // Positions for background image alignment
  const bgPositions = ['5% 50%', '27% 50%', '50% 50%', '73% 50%', '95% 50%'];

  return (
    <section 
      id="fracture" 
      className="relative h-[100vh] w-full bg-[#050505] flex items-center justify-center border-t border-white/5 overflow-hidden"
    >
      <SectionLabel 
        number="02" 
        text="MOUSE FRACTURE" 
        onCode={() => onShowCode(codeSnippet, "Fracture Glass")}
      />
      
      <div 
        ref={containerRef}
        className="flex w-[80%] h-[70vh] gap-1 group hoverable cursor-crosshair"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <div 
            key={i}
            ref={(el) => { slicesRef.current[i] = el; }}
            className="flex-1 relative overflow-hidden h-full bg-[#111] transition-transform duration-100 ease-linear"
          >
            <div 
              className="absolute top-[-20%] left-0 w-[100vw] h-[140%] bg-cover bg-center transition-all duration-500 grayscale group-hover:grayscale-0"
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2600')",
                backgroundPosition: bgPositions[i],
                // We need to counteract the flex layout to make the image look continuous
                // But simplified here for the "sliced" aesthetic
                left: `-${i * 20}vw` 
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FractureGlass;