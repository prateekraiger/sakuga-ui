
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './src/pages/Landing';
import AetherTemplate from './src/pages/AetherTemplate';
import ShowcaseLayout from './src/layouts/ShowcaseLayout';
import CodeModal from './src/components/CodeModal';
import ComponentsHome from './src/components/BentoGrid'; // Renamed import alias for clarity, though file is BentoGrid.tsx
import Bento1 from './src/components/Bento1';
import CTA from './src/components/CTA';

import ComponentView from './src/components/ComponentView';
import { BENTO1_CODE, CTA_CODE, HEADER_CODE } from './src/data/component-source';
import Header from './src/components/Header';


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
      {/* Global CodeModal for Templates which don't use the Sidebar layout */}
      <CodeModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        code={modalCode}
        title={modalTitle}
      />

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
            <Route path="cta" element={
                <ComponentView title="CTA Section" sourceCode={CTA_CODE}>
                    <div className="min-h-screen bg-black p-8 flex items-center justify-center w-full"><CTA /></div>
                </ComponentView>
            } />
            <Route path="header" element={
                <ComponentView title="Glass Header" sourceCode={HEADER_CODE}>
                    <div className="min-h-screen bg-black p-8 flex items-center justify-center w-full"><Header /></div>
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
