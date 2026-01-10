import React from 'react';
import SectionLabel from '../../components/ui/SectionLabel';

const VisualMask: React.FC = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-black border-t border-white/5">
      <SectionLabel number="08" text="SVG CLIPPING MASK" />

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-video-of-ink-in-water-2527-large.mp4" type="video/mp4" />
      </video>

      {/* SVG Mask Overlay */}
      <div className="absolute inset-0 z-10 w-full h-full">
        <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="text-mask">
              <rect width="100%" height="100%" fill="white" />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fontFamily="'Space Grotesk', sans-serif"
                fontWeight="900"
                fontSize="15vw"
                fill="black"
              >
                IMPACT
              </text>
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="black" mask="url(#text-mask)" />
        </svg>
      </div>
    </section>
  );
};

export default VisualMask;
