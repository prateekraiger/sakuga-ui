import React, { useEffect, useRef } from 'react';
import SectionLabel from '../components/SectionLabel';

interface PixelWaveProps {
  onShowCode: (code: string, title: string) => void;
}

const codeSnippet = `// Pixel Wave Field
const grid = document.getElementById('grid');
// Generate grid...
const pixels = document.querySelectorAll('.pixel');

grid.addEventListener('mousemove', (e) => {
  const rect = grid.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;
  
  pixels.forEach(p => {
    const pr = p.getBoundingClientRect();
    // Distance from pixel center to mouse
    const px = (pr.left - rect.left) + pr.width/2;
    const py = (pr.top - rect.top) + pr.height/2;
    const dist = Math.sqrt(Math.pow(mx - px, 2) + Math.pow(my - py, 2));
    
    if (dist < 100) {
      p.classList.add('active');
      clearTimeout(p.timer);
      p.timer = setTimeout(() => p.classList.remove('active'), 400);
    }
  });
});`;

const PixelWave: React.FC<PixelWaveProps> = ({ onShowCode }) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    // Generate pixels
    const cols = 20;
    const rows = 10;
    const total = cols * rows;
    
    grid.innerHTML = '';
    for (let i = 0; i < total; i++) {
      const pixel = document.createElement('div');
      pixel.className = 'bg-white/5 rounded-[1px] transition-all duration-200 ease-out';
      grid.appendChild(pixel);
    }

    const pixels = Array.from(grid.children) as HTMLDivElement[];

    const handleMouseMove = (e: MouseEvent) => {
      const rect = grid.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;

      pixels.forEach((p) => {
        // We use offsetLeft/Top relative to the grid container
        // This is faster than getBoundingClientRect for every pixel every frame
        const px = p.offsetLeft + p.offsetWidth / 2;
        const py = p.offsetTop + p.offsetHeight / 2;
        
        const dist = Math.sqrt(Math.pow(mx - px, 2) + Math.pow(my - py, 2));

        if (dist < 100) {
          p.style.backgroundColor = '#ffffff';
          p.style.transform = 'scale(0.5)';
          p.style.boxShadow = '0 0 10px rgba(255,255,255,0.8)';
          p.style.zIndex = '10';
          
          // Clear previous timeout if exists
          const existingTimer = p.getAttribute('data-timer');
          if (existingTimer) clearTimeout(parseInt(existingTimer));
          
          const timer = setTimeout(() => {
            p.style.backgroundColor = '';
            p.style.transform = '';
            p.style.boxShadow = '';
            p.style.zIndex = '';
          }, 400);
          
          p.setAttribute('data-timer', timer.toString());
        }
      });
    };

    grid.addEventListener('mousemove', handleMouseMove);
    return () => grid.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="pixel" className="relative h-[100vh] w-full bg-[#050505] flex items-center justify-center border-t border-white/5 overflow-hidden">
      <SectionLabel 
        number="05" 
        text="DIGITAL FIELD" 
        onCode={() => onShowCode(codeSnippet, "Pixel Wave")}
      />
      
      <div 
        ref={gridRef}
        className="grid grid-cols-[repeat(20,1fr)] gap-[1px] w-[90%] max-w-[1000px] aspect-[16/9]"
      />
      
      <div className="absolute bottom-12 w-full text-center pointer-events-none">
        <p className="text-neutral-500 text-sm">Move cursor to disturb the digital field</p>
      </div>
    </section>
  );
};

export default PixelWave;