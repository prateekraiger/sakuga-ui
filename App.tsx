import React, { useState, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Lazy load pages for better performance
const Landing = lazy(() => import('./src/pages/Landing'));
const Templates = lazy(() => import('./src/pages/Templates'));
const AetherTemplate = lazy(() => import('./src/pages/AetherTemplate'));
const MasKokoTemplate = lazy(() => import('./src/pages/MasKokoTemplate'));
const StartAgencyTemplate = lazy(() => import('./src/pages/StartAgencyTemplate'));
const HorizonTemplate = lazy(() => import('./src/pages/HorizonTemplate'));
const EsteticoTemplate = lazy(() => import('./src/pages/EsteticoTemplate'));

// Layouts
import ShowcaseLayout from './src/layouts/ShowcaseLayout';

// Components - organized imports
import {
  ComponentsHome,
  Bento1,
  Bento2,
  Header,
  BENTO1_CODE,
  BENTO2_CODE,
  HEADER_CODE
} from './src/components/layouts';

import {
  CTA,
  ComponentView,
  Marquee,
  CTA_CODE,
  MARQUEE_CODE
} from './src/components/ui';

import {
  NebulaHero,
  FluxHero,
  GrowthHero,
  HeliosHero,
  QuantumHero,
  NEBULA_HERO_CODE,
  FLUX_HERO_CODE,
  GROWTH_HERO_CODE,
  HELIOS_HERO_CODE,
  QUANTUM_HERO_CODE
} from './src/components/heroes';

import {
  TaniaLanding,
  TANIA_LANDING_CODE
} from './src/components/templates';

import {
  Repository,
  Accordion,
  PricingSection,
  REPOSITORY_CODE,
  ACCORDION_CODE,
  PRICING_SECTION_CODE
} from './src/components/content';

import {
  CanvasNetwork,
  FocusLens,
  FractureGlass,
  HorizontalScroll,
  LiquidDistortion,
  MagneticSection,
  PixelWave,
  SpotlightGrid,
  VelocityText,
  VisualMask,
  VoxelTerrain,
  CANVAS_NETWORK_CODE,
  FOCUS_LENS_CODE,
  FRACTURE_GLASS_CODE,
  HORIZONTAL_SCROLL_CODE,
  LIQUID_DISTORTION_CODE,
  MAGNETIC_SECTION_CODE,
  PIXEL_WAVE_CODE,
  SPOTLIGHT_GRID_CODE,
  VELOCITY_TEXT_CODE,
  VISUAL_MASK_CODE,
  VOXEL_TERRAIN_CODE
} from './src/components/effects';

import {
  VideoExpand,
  VIDEO_EXPAND_CODE
} from './src/components/media';

// Loading component for Suspense fallback
const PageLoader: React.FC = () => (
  <div className="min-h-screen bg-[#050505] flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-blue-500/20 border-t-blue-500 rounded-full animate-spin" />
      <p className="text-neutral-400 text-sm">Loading...</p>
    </div>
  </div>
);

const App: React.FC = () => {
  // Shared Modal State for the showcase
  const [modalOpen, setModalOpen] = useState(false);
  const [modalCode, setModalCode] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const handleShowCode = (code: string, title: string) => {
    setModalCode(code);
    setModalTitle(title);
    setModalOpen(true);
  };

  const handleCloseCode = () => {
    setModalOpen(false);
  };

  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<Landing />} />

          {/* Templates Routes */}
          <Route path="/templates" element={<Templates />} />
          <Route path="/templates/aether" element={<AetherTemplate />} />
          <Route path="/templates/maskoko" element={<MasKokoTemplate />} />
          <Route path="/templates/start-agency" element={<StartAgencyTemplate />} />
          <Route path="/templates/horizon" element={<HorizonTemplate />} />
          <Route path="/templates/estetico" element={<EsteticoTemplate />} />

        {/* Components Showcase Routes */}
        <Route
          path="/components"
          element={
            <ShowcaseLayout
              codeString={modalCode}
              codeTitle={modalTitle}
              isCodeOpen={modalOpen}
              onCloseCode={handleCloseCode}
              onShowCode={handleShowCode}
            />
          }
        >
          {/* Components Home */}
          <Route
            index
            element={
              <div className="min-h-screen bg-black p-8 flex items-center justify-center w-full">
                <ComponentsHome />
              </div>
            }
          />

          {/* Layout Components */}
          <Route
            path="bento-1"
            element={
              <ComponentView title="Bento Grid" sourceCode={BENTO1_CODE}>
                <div className="min-h-screen bg-black p-8 flex items-center justify-center w-full">
                  <Bento1 />
                </div>
              </ComponentView>
            }
          />
          <Route
            path="bento-2"
            element={
              <ComponentView title="Analytics Bento" sourceCode={BENTO2_CODE}>
                <div className="min-h-screen bg-black p-8 flex items-center justify-center w-full">
                  <Bento2 />
                </div>
              </ComponentView>
            }
          />
          <Route
            path="header"
            element={
              <ComponentView title="Glass Header" sourceCode={HEADER_CODE}>
                <div className="min-h-screen bg-black p-8 flex items-center justify-center w-full relative overflow-hidden">
                  <Header className="absolute top-0 left-0 w-full z-10" />
                </div>
              </ComponentView>
            }
          />

          {/* Hero Components */}
          <Route
            path="hero-1"
            element={
              <ComponentView title="Nebula Hero" sourceCode={NEBULA_HERO_CODE}>
                <div className="min-h-screen bg-black p-8 flex items-center justify-center w-full">
                  <NebulaHero />
                </div>
              </ComponentView>
            }
          />
          <Route
            path="flux-hero"
            element={
              <ComponentView title="Flux Hero" sourceCode={FLUX_HERO_CODE}>
                <div className="min-h-screen bg-black p-8 flex items-center justify-center w-full">
                  <FluxHero />
                </div>
              </ComponentView>
            }
          />
          <Route
            path="growth-hero"
            element={
              <ComponentView title="Growth Hero" sourceCode={GROWTH_HERO_CODE}>
                <div className="min-h-screen bg-black p-8 flex items-center justify-center w-full">
                  <GrowthHero />
                </div>
              </ComponentView>
            }
          />
          <Route
            path="helios-hero"
            element={
              <ComponentView title="Helios Hero" sourceCode={HELIOS_HERO_CODE}>
                <div className="min-h-screen p-0 flex items-center justify-center w-full">
                  <HeliosHero />
                </div>
              </ComponentView>
            }
          />
          <Route
            path="quantum-hero"
            element={
              <ComponentView title="Quantum Hero" sourceCode={QUANTUM_HERO_CODE}>
                <div className="min-h-screen bg-black p-0 flex items-center justify-center w-full">
                  <QuantumHero />
                </div>
              </ComponentView>
            }
          />

          {/* Template Components */}
          <Route
            path="tania-landing"
            element={
              <ComponentView title="House of Tania" sourceCode={TANIA_LANDING_CODE}>
                <div className="min-h-screen bg-[#fcfcfc] p-0 flex items-center justify-center w-full">
                  <TaniaLanding />
                </div>
              </ComponentView>
            }
          />

          {/* Content Components */}
          <Route
            path="repository"
            element={
              <ComponentView title="The Repository" sourceCode={REPOSITORY_CODE}>
                <div className="min-h-screen bg-black p-0 flex items-center justify-center w-full">
                  <Repository />
                </div>
              </ComponentView>
            }
          />
          <Route
            path="accordion"
            element={
              <ComponentView title="Accordion" sourceCode={ACCORDION_CODE}>
                <div className="min-h-screen bg-black p-8 flex items-center justify-center w-full">
                  <Accordion />
                </div>
              </ComponentView>
            }
          />
          <Route
            path="cta"
            element={
              <ComponentView title="CTA Section" sourceCode={CTA_CODE}>
                <div className="min-h-screen bg-black p-8 flex items-center justify-center w-full">
                  <CTA />
                </div>
              </ComponentView>
            }
          />
          <Route
            path="pricing"
            element={
              <ComponentView title="Pricing Section" sourceCode={PRICING_SECTION_CODE}>
                <div className="min-h-screen bg-black p-8 flex items-center justify-center w-full">
                  <PricingSection />
                </div>
              </ComponentView>
            }
          />

          {/* Effect Components */}
          <Route
            path="canvas-network"
            element={
              <ComponentView title="Canvas Network" sourceCode={CANVAS_NETWORK_CODE}>
                <div className="min-h-screen bg-black p-8 flex items-center justify-center w-full">
                  <CanvasNetwork />
                </div>
              </ComponentView>
            }
          />
          <Route
            path="focus-lens"
            element={
              <ComponentView title="Focus Lens" sourceCode={FOCUS_LENS_CODE}>
                <div className="min-h-screen bg-black p-8 flex items-center justify-center w-full">
                  <FocusLens onShowCode={handleShowCode} />
                </div>
              </ComponentView>
            }
          />
          <Route
            path="fracture-glass"
            element={
              <ComponentView title="Fracture Glass" sourceCode={FRACTURE_GLASS_CODE}>
                <div className="min-h-screen bg-black p-8 flex items-center justify-center w-full">
                  <FractureGlass onShowCode={handleShowCode} />
                </div>
              </ComponentView>
            }
          />
          <Route
            path="horizontal-scroll"
            element={
              <ComponentView title="Horizontal Scroll" sourceCode={HORIZONTAL_SCROLL_CODE}>
                <div className="min-h-screen bg-black p-8 flex items-center justify-center w-full">
                  <HorizontalScroll />
                </div>
              </ComponentView>
            }
          />
          <Route
            path="liquid-distortion"
            element={
              <ComponentView title="Liquid Distortion" sourceCode={LIQUID_DISTORTION_CODE}>
                <div className="min-h-screen bg-black p-8 flex items-center justify-center w-full">
                  <LiquidDistortion onShowCode={handleShowCode} />
                </div>
              </ComponentView>
            }
          />
          <Route
            path="magnetic-section"
            element={
              <ComponentView title="Magnetic Section" sourceCode={MAGNETIC_SECTION_CODE}>
                <div className="min-h-screen bg-black p-8 flex items-center justify-center w-full">
                  <MagneticSection />
                </div>
              </ComponentView>
            }
          />
          <Route
            path="marquee"
            element={
              <ComponentView title="Marquee" sourceCode={MARQUEE_CODE}>
                <div className="min-h-screen bg-black p-8 flex items-center justify-center w-full">
                  <Marquee />
                </div>
              </ComponentView>
            }
          />
          <Route
            path="pixel-wave"
            element={
              <ComponentView title="Pixel Wave" sourceCode={PIXEL_WAVE_CODE}>
                <div className="min-h-screen bg-black p-8 flex items-center justify-center w-full">
                  <PixelWave onShowCode={handleShowCode} />
                </div>
              </ComponentView>
            }
          />
          <Route
            path="spotlight-grid"
            element={
              <ComponentView title="Spotlight Grid" sourceCode={SPOTLIGHT_GRID_CODE}>
                <div className="min-h-screen bg-black p-8 flex items-center justify-center w-full">
                  <SpotlightGrid onShowCode={handleShowCode} />
                </div>
              </ComponentView>
            }
          />
          <Route
            path="velocity-text"
            element={
              <ComponentView title="Velocity Text" sourceCode={VELOCITY_TEXT_CODE}>
                <div className="min-h-screen bg-black p-8 flex items-center justify-center w-full">
                  <VelocityText onShowCode={handleShowCode} />
                </div>
              </ComponentView>
            }
          />
          <Route
            path="visual-mask"
            element={
              <ComponentView title="Visual Mask" sourceCode={VISUAL_MASK_CODE}>
                <div className="min-h-screen bg-black p-8 flex items-center justify-center w-full">
                  <VisualMask />
                </div>
              </ComponentView>
            }
          />
          <Route
            path="voxel-terrain"
            element={
              <ComponentView title="Voxel Terrain" sourceCode={VOXEL_TERRAIN_CODE}>
                <div className="min-h-screen bg-black p-8 flex items-center justify-center w-full">
                  <VoxelTerrain onShowCode={handleShowCode} />
                </div>
              </ComponentView>
            }
          />

          {/* Media Components */}
          <Route
            path="video-expand"
            element={
              <ComponentView title="Video Expand" sourceCode={VIDEO_EXPAND_CODE}>
                <div className="min-h-screen bg-black p-8 flex items-center justify-center w-full">
                  <VideoExpand />
                </div>
              </ComponentView>
            }
          />
        </Route>

        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
