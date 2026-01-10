
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './src/pages/Landing';
import AetherTemplate from './src/pages/AetherTemplate';
import MasKokoTemplate from './src/pages/MasKokoTemplate';
import ShowcaseLayout from './src/layouts/ShowcaseLayout';
import CodeModal from './src/components/ui/CodeModal';
import ComponentsHome from './src/components/bento/BentoGrid'; // Renamed import alias for clarity, though file is BentoGrid.tsx
import Bento1 from './src/components/bento/Bento1';
import Bento2 from './src/components/bento/Bento2';
import CTA from './src/components/ui/CTA';

import ComponentView from './src/components/ui/ComponentView';
import GrowthHero from './src/sections/GrowthHero';
import HeliosHero from './src/sections/HeliosHero';

import Header from './src/components/layout/Header';
import NebulaHero from './src/sections/NebulaHero';
import FluxHero from './src/sections/FluxHero';
import QuantumHero from './src/sections/QuantumHero';
import TaniaLanding from './src/sections/TaniaLanding';
import Repository from './src/sections/content/Repository';
import Accordion from './src/sections/content/Accordion';
import CanvasNetwork from './src/sections/effects/CanvasNetwork';
import FocusLens from './src/sections/effects/FocusLens';
import FractureGlass from './src/sections/effects/FractureGlass';
import HorizontalScroll from './src/sections/effects/HorizontalScroll';
import LiquidDistortion from './src/sections/effects/LiquidDistortion';
import MagneticSection from './src/sections/effects/MagneticSection';
import Marquee from './src/sections/ui/Marquee';
import PixelWave from './src/sections/effects/PixelWave';
import SpotlightGrid from './src/sections/effects/SpotlightGrid';
import VelocityText from './src/sections/effects/VelocityText';
import VideoExpand from './src/sections/media/VideoExpand'; // VideoExpand is in media
import VisualMask from './src/sections/effects/VisualMask';
import VoxelTerrain from './src/sections/effects/VoxelTerrain';
import PricingSection from './src/sections/content/PricingSection';
import {
    BENTO1_CODE, BENTO2_CODE, CTA_CODE, HEADER_CODE, NEBULA_HERO_CODE, FLUX_HERO_CODE, GROWTH_HERO_CODE, HELIOS_HERO_CODE, QUANTUM_HERO_CODE, TANIA_LANDING_CODE, REPOSITORY_CODE,
    ACCORDION_CODE, CANVAS_NETWORK_CODE, FOCUS_LENS_CODE, FRACTURE_GLASS_CODE, HORIZONTAL_SCROLL_CODE, LIQUID_DISTORTION_CODE, MAGNETIC_SECTION_CODE, MARQUEE_CODE, PIXEL_WAVE_CODE, SPOTLIGHT_GRID_CODE, VELOCITY_TEXT_CODE, VIDEO_EXPAND_CODE, VISUAL_MASK_CODE, VOXEL_TERRAIN_CODE,
    PRICING_SECTION_CODE
} from './src/data/component-source';



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
      {/* Global CodeModal removed to prevent duplicate view in ShowcaseLayout */}
      {/* <CodeModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        code={modalCode}
        title={modalTitle}
      /> */}

      <Routes>
        {/* Landing Page */}
        <Route path="/" element={<Landing />} />

        {/* Templates Routes */}
        <Route path="/templates/aether" element={<AetherTemplate />} />
        <Route path="/templates/maskoko" element={<MasKokoTemplate />} />

        {/* Components Showcase Routes */}
        <Route path="/components" element={
            <ShowcaseLayout
                codeString={modalCode}
                codeTitle={modalTitle}
                isCodeOpen={modalOpen}
                onCloseCode={handleCloseCode}
                onShowCode={handleShowCode}
            />
        }>
            <Route index element={<div className="min-h-screen bg-black p-8 flex items-center justify-center w-full"><ComponentsHome /></div>} />
            <Route path="bento-1" element={
                <ComponentView title="Bento Grid" sourceCode={BENTO1_CODE}>
                    <div className="min-h-screen bg-black p-8 flex items-center justify-center w-full"><Bento1 /></div>
                </ComponentView>
            } />
            <Route path="bento-2" element={
                <ComponentView title="Analytics Bento" sourceCode={BENTO2_CODE}>
                    <div className="min-h-screen bg-black p-8 flex items-center justify-center w-full"><Bento2 /></div>
                </ComponentView>
            } />
            <Route path="cta" element={
                <ComponentView title="CTA Section" sourceCode={CTA_CODE}>
                    <div className="min-h-screen bg-black p-8 flex items-center justify-center w-full"><CTA /></div>
                </ComponentView>
            } />
            <Route path="header" element={
                <ComponentView title="Glass Header" sourceCode={HEADER_CODE}>
                    {/* Passed absolute position to prevent it from being fixed to viewport top in showcase */}
                    <div className="min-h-screen bg-black p-8 flex items-center justify-center w-full relative overflow-hidden">
                        <Header className="absolute top-0 left-0 w-full z-10" />
                    </div>
                </ComponentView>
            } />
            <Route path="hero-1" element={
                <ComponentView title="Nebula Hero" sourceCode={NEBULA_HERO_CODE}>
                    <div className="min-h-screen bg-black p-8 flex items-center justify-center w-full"><NebulaHero /></div>
                </ComponentView>
            } />
            <Route path="flux-hero" element={
                <ComponentView title="Flux Hero" sourceCode={FLUX_HERO_CODE}>
                    <div className="min-h-screen bg-black p-8 flex items-center justify-center w-full"><FluxHero /></div>
                </ComponentView>
            } />
            <Route path="growth-hero" element={
                <ComponentView title="Growth Hero" sourceCode={GROWTH_HERO_CODE}>
                    <div className="min-h-screen bg-black p-8 flex items-center justify-center w-full"><GrowthHero /></div>
                </ComponentView>
            } />
            <Route path="helios-hero" element={
                <ComponentView title="Helios Hero" sourceCode={HELIOS_HERO_CODE}>
                    <div className="min-h-screen p-0 flex items-center justify-center w-full"><HeliosHero /></div>
                </ComponentView>
            } />
            <Route path="quantum-hero" element={
                <ComponentView title="Quantum Hero" sourceCode={QUANTUM_HERO_CODE}>
                    <div className="min-h-screen bg-black p-0 flex items-center justify-center w-full"><QuantumHero /></div>
                </ComponentView>
            } />
            <Route path="tania-landing" element={
                <ComponentView title="House of Tania" sourceCode={TANIA_LANDING_CODE}>
                    <div className="min-h-screen bg-[#fcfcfc] p-0 flex items-center justify-center w-full"><TaniaLanding /></div>
                </ComponentView>
            } />
            <Route path="repository" element={
                <ComponentView title="The Repository" sourceCode={REPOSITORY_CODE}>
                    <div className="min-h-screen bg-black p-0 flex items-center justify-center w-full"><Repository /></div>
                </ComponentView>
            } />
            <Route path="accordion" element={<ComponentView title="Accordion" sourceCode={ACCORDION_CODE}><div className="min-h-screen bg-black p-8 flex items-center justify-center w-full"><Accordion /></div></ComponentView>} />
            <Route path="canvas-network" element={<ComponentView title="Canvas Network" sourceCode={CANVAS_NETWORK_CODE}><div className="min-h-screen bg-black p-8 flex items-center justify-center w-full"><CanvasNetwork /></div></ComponentView>} />
            <Route path="focus-lens" element={<ComponentView title="Focus Lens" sourceCode={FOCUS_LENS_CODE}><div className="min-h-screen bg-black p-8 flex items-center justify-center w-full"><FocusLens onShowCode={handleShowCode} /></div></ComponentView>} />
            <Route path="fracture-glass" element={<ComponentView title="Fracture Glass" sourceCode={FRACTURE_GLASS_CODE}><div className="min-h-screen bg-black p-8 flex items-center justify-center w-full"><FractureGlass onShowCode={handleShowCode} /></div></ComponentView>} />
            <Route path="horizontal-scroll" element={<ComponentView title="Horizontal Scroll" sourceCode={HORIZONTAL_SCROLL_CODE}><div className="min-h-screen bg-black p-8 flex items-center justify-center w-full"><HorizontalScroll /></div></ComponentView>} />
            <Route path="liquid-distortion" element={<ComponentView title="Liquid Distortion" sourceCode={LIQUID_DISTORTION_CODE}><div className="min-h-screen bg-black p-8 flex items-center justify-center w-full"><LiquidDistortion onShowCode={handleShowCode} /></div></ComponentView>} />
            <Route path="magnetic-section" element={<ComponentView title="Magnetic Section" sourceCode={MAGNETIC_SECTION_CODE}><div className="min-h-screen bg-black p-8 flex items-center justify-center w-full"><MagneticSection /></div></ComponentView>} />
            <Route path="marquee" element={<ComponentView title="Marquee" sourceCode={MARQUEE_CODE}><div className="min-h-screen bg-black p-8 flex items-center justify-center w-full"><Marquee /></div></ComponentView>} />
            <Route path="pixel-wave" element={<ComponentView title="Pixel Wave" sourceCode={PIXEL_WAVE_CODE}><div className="min-h-screen bg-black p-8 flex items-center justify-center w-full"><PixelWave onShowCode={handleShowCode} /></div></ComponentView>} />
            <Route path="spotlight-grid" element={<ComponentView title="Spotlight Grid" sourceCode={SPOTLIGHT_GRID_CODE}><div className="min-h-screen bg-black p-8 flex items-center justify-center w-full"><SpotlightGrid onShowCode={handleShowCode} /></div></ComponentView>} />
            <Route path="velocity-text" element={<ComponentView title="Velocity Text" sourceCode={VELOCITY_TEXT_CODE}><div className="min-h-screen bg-black p-8 flex items-center justify-center w-full"><VelocityText onShowCode={handleShowCode} /></div></ComponentView>} />
            <Route path="video-expand" element={<ComponentView title="Video Expand" sourceCode={VIDEO_EXPAND_CODE}><div className="min-h-screen bg-black p-8 flex items-center justify-center w-full"><VideoExpand /></div></ComponentView>} />
            <Route path="visual-mask" element={<ComponentView title="Visual Mask" sourceCode={VISUAL_MASK_CODE}><div className="min-h-screen bg-black p-8 flex items-center justify-center w-full"><VisualMask /></div></ComponentView>} />
            <Route path="voxel-terrain" element={<ComponentView title="Voxel Terrain" sourceCode={VOXEL_TERRAIN_CODE}><div className="min-h-screen bg-black p-8 flex items-center justify-center w-full"><VoxelTerrain onShowCode={handleShowCode} /></div></ComponentView>} />
            <Route path="pricing" element={<ComponentView title="Pricing Section" sourceCode={PRICING_SECTION_CODE}><div className="min-h-screen bg-black p-8 flex items-center justify-center w-full"><PricingSection /></div></ComponentView>} />

        </Route>

        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
