
import React, { useState } from 'react';
import { Header, Footer, BentoGrid } from '../components/layouts';
import { Preloader, CodeModal, Marquee } from '../components/ui';
import { Hero } from '../components/heroes';
import { Accordion } from '../components/content';
import { 
  VelocityText, 
  FractureGlass, 
  LiquidDistortion, 
  SpotlightGrid, 
  PixelWave, 
  VoxelTerrain, 
  FocusLens, 
  VisualMask, 
  HorizontalScroll, 
  CanvasNetwork, 
  MagneticSection 
} from '../components/effects';
import { VideoExpand } from '../components/media';

const Home: React.FC = () => {
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
      {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

      <CodeModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        code={modalCode}
        title={modalTitle}
      />

      <Header />


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
      </main>

      <Footer />
    </>
  );
};

export default Home;
