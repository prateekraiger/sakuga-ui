
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './src/pages/Landing';
import AetherTemplate from './src/pages/AetherTemplate';
import ShowcaseLayout from './src/layouts/ShowcaseLayout';
import CodeModal from './src/components/CodeModal';
import ComponentsHome from './src/components/BentoGrid'; // Renamed import alias for clarity, though file is BentoGrid.tsx
import Bento1 from './src/components/Bento1';
import Bento2 from './src/components/Bento2';
import CTA from './src/components/CTA';

import ComponentView from './src/components/ComponentView';
import GrowthHero from './src/sections/GrowthHero';
import HeliosHero from './src/sections/HeliosHero';
import { BENTO1_CODE, BENTO2_CODE, CTA_CODE, HEADER_CODE, NEBULA_HERO_CODE, FLUX_HERO_CODE, GROWTH_HERO_CODE, HELIOS_HERO_CODE, QUANTUM_HERO_CODE } from './src/data/component-source';
import Header from './src/components/Header';
import NebulaHero from './src/sections/NebulaHero';
import FluxHero from './src/sections/FluxHero';
import QuantumHero from './src/sections/QuantumHero';



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

        </Route>

        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
