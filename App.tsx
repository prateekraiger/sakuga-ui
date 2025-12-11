import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import CodeModal from './components/CodeModal';
import Footer from './components/Footer';

// Typography / Hero
import Hero from './sections/Hero';
import VelocityText from './sections/VelocityText';
import Marquee from './sections/Marquee';

// Distortion / Image
import FractureGlass from './sections/FractureGlass';
import LiquidDistortion from './sections/LiquidDistortion';
import VideoExpand from './sections/VideoExpand';

// Interaction / Grid
import SpotlightGrid from './sections/SpotlightGrid';
import PixelWave from './sections/PixelWave';
import VoxelTerrain from './sections/VoxelTerrain';

// Overlay
import FocusLens from './sections/FocusLens';
import VisualMask from './sections/VisualMask';

// Layout
import BentoGrid from './sections/BentoGrid';
import HorizontalScroll from './sections/HorizontalScroll';
import Accordion from './sections/Accordion';
import CanvasNetwork from './sections/CanvasNetwork';
import Repository from './sections/Repository';
import MagneticSection from './sections/MagneticSection';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  // Code Modal State
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCode, setModalCode] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const handleShowCode = (code: string, title: string) => {
    setModalCode(code);
    setModalTitle(title);
    setModalOpen(true);
  };

  return (
    <>
      <CustomCursor />
      <div className="noise-overlay" />
      
      {/* Global SVG Filters */}
      <svg className="absolute w-0 h-0 overflow-hidden" aria-hidden="true">
        <defs>
          <filter id="liquid-filter">
            <feTurbulence id="turb" type="fractalNoise" baseFrequency="0.0" numOctaves="2" result="noise"></feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="60" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
          </filter>
        </defs>
      </svg>

      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
      
      <CodeModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        code={modalCode} 
        title={modalTitle}
      />

      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 bg-[#050505] shadow-[0_50px_100px_#000] mb-[50vh]">
        
        {/* 1. Kinetic Typography */}
        <Hero />
        <VelocityText onShowCode={handleShowCode} />
        
        {/* 2. Visual Distortion */}
        <FractureGlass onShowCode={handleShowCode} />
        <LiquidDistortion onShowCode={handleShowCode} />
        
        {/* 3. Interactive Grids */}
        <SpotlightGrid onShowCode={handleShowCode} />
        <PixelWave onShowCode={handleShowCode} />
        <VoxelTerrain onShowCode={handleShowCode} />
        
        {/* 4. Overlay & Focus */}
        <FocusLens onShowCode={handleShowCode} />
        <VisualMask />
        
        {/* 5. Legacy / Layout Sections */}
        <BentoGrid />
        <HorizontalScroll />
        <MagneticSection />
        <VideoExpand />
        <Marquee />
        <Accordion />
        <CanvasNetwork />
        
        <Repository />
      </main>

      <Footer />
    </>
  );
};

export default App;