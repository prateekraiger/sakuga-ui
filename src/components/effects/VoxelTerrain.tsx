import React, { useEffect, useRef } from 'react';
import SectionLabel from '../ui/SectionLabel';

interface VoxelTerrainProps {
  onShowCode: (code: string, title: string) => void;
}

const codeSnippet = `// 3D Voxel Elevation
// CSS: perspective: 1000px; transform-style: preserve-3d;
// Grid transform: rotateX(60deg) rotateZ(45deg);

document.body.onmousemove = e => {
  voxels.forEach(v => {
    const r = v.getBoundingClientRect();
    const d = Math.sqrt(
      Math.pow(e.clientX - (r.left + r.width/2), 2) +
      Math.pow(e.clientY - (r.top + r.height/2), 2)
    );

    if (d < 100) {
      v.classList.add('lift');
      // .lift { transform: translateZ(60px); ... }
      clearTimeout(v.t);
      v.t = setTimeout(() => v.classList.remove('lift'), 300);
    }
  });
}`;

const VoxelTerrain: React.FC<VoxelTerrainProps> = ({ onShowCode }) => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    // Generate Voxels
    const total = 100; // 10x10
    grid.innerHTML = '';

    for (let i = 0; i < total; i++) {
      const v = document.createElement('div');
      // Base styles
      v.className = 'w-full h-full bg-[#111] border border-[#222] transition-all duration-200 ease-out relative';

      // Shadow Pseudo-element (created via JS for React simplicity without extra CSS file)
      const shadow = document.createElement('div');
      shadow.className = 'absolute -bottom-[10px] left-0 w-full h-[10px] bg-inherit brightness-50 origin-bottom opacity-0 transition-opacity duration-200';
      shadow.style.transform = 'skewX(45deg)';
      v.appendChild(shadow);

      grid.appendChild(v);
    }

    const voxels = Array.from(grid.children) as HTMLDivElement[];

    const handleMouseMove = (e: MouseEvent) => {
      // Voxel interaction needs screen coordinates because of the 3D transform
      const mx = e.clientX;
      const my = e.clientY;

      voxels.forEach((v) => {
        const r = v.getBoundingClientRect();
        // Distance from center of voxel rect on screen to mouse
        const d = Math.sqrt(Math.pow(mx - (r.left + r.width/2), 2) + Math.pow(my - (r.top + r.height/2), 2));

        if (d < 120) {
          // Lift state
          v.style.transform = 'translateZ(60px)';
          v.style.background = 'linear-gradient(135deg, #06b6d4, #3b82f6)';
          v.style.boxShadow = '0 0 30px rgba(6, 182, 212, 0.4)';
          v.style.borderColor = 'transparent';
          v.style.zIndex = '50';

          // Show shadow
          const shadow = v.firstChild as HTMLElement;
          if (shadow) shadow.style.opacity = '1';

          // Timer to reset
          const existingTimer = v.getAttribute('data-timer');
          if (existingTimer) clearTimeout(parseInt(existingTimer));

          const timer = setTimeout(() => {
            v.style.transform = '';
            v.style.background = '';
            v.style.boxShadow = '';
            v.style.borderColor = '';
            v.style.zIndex = '';
            if (shadow) shadow.style.opacity = '0';
          }, 300);

          v.setAttribute('data-timer', timer.toString());
        }
      });
    };

    // We attach to window/section to track mouse over the 3D space
    const section = grid.parentElement;
    if (section) section.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (section) section.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="voxel" className="relative h-[100vh] w-full bg-[#050505] flex items-center justify-center border-t border-white/5 overflow-hidden" style={{ perspective: '1000px' }}>
      <SectionLabel
        number="06"
        text="3D VOXEL TERRAIN"
        onCode={() => onShowCode(codeSnippet, "Voxel Terrain")}
      />

      <div
        ref={gridRef}
        className="grid grid-cols-[repeat(10,1fr)] gap-1 w-[600px] h-[600px]"
        style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg) rotateZ(45deg)' }}
      />

      <div className="absolute bottom-12 w-full text-center pointer-events-none">
        <p className="text-neutral-500 text-sm">Hover to elevate data landscape</p>
      </div>
    </section>
  );
};

export default VoxelTerrain;
