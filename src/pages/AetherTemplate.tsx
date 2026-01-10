
import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Preloader from '../components/ui/Preloader';
import CodeModal from '../components/ui/CodeModal';
import Footer from '../components/layout/Footer';

// Typography / Hero
import Hero from '../sections/Hero';
import VelocityText from '../sections/effects/VelocityText';
import Marquee from '../sections/ui/Marquee';

// Distortion / Image
import FractureGlass from '../sections/effects/FractureGlass';
import LiquidDistortion from '../sections/effects/LiquidDistortion';
import VideoExpand from '../sections/media/VideoExpand';

// Interaction / Grid
import SpotlightGrid from '../sections/effects/SpotlightGrid';
import PixelWave from '../sections/effects/PixelWave';
import VoxelTerrain from '../sections/effects/VoxelTerrain';

// Overlay
import FocusLens from '../sections/effects/FocusLens';
import VisualMask from '../sections/effects/VisualMask';

// Layout
import BentoGrid from '../sections/BentoGrid';
import HorizontalScroll from '../sections/effects/HorizontalScroll';
import Accordion from '../sections/content/Accordion';
import CanvasNetwork from '../sections/effects/CanvasNetwork';
import MagneticSection from '../sections/effects/MagneticSection';

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
