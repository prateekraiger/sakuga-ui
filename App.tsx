
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './src/pages/Home';
import ShowcaseLayout from './src/layouts/ShowcaseLayout';

// Sections for independent routes
import VelocityText from './sections/VelocityText';
import FractureGlass from './sections/FractureGlass';
import LiquidDistortion from './sections/LiquidDistortion';
import SpotlightGrid from './sections/SpotlightGrid';
import PixelWave from './sections/PixelWave';
import VoxelTerrain from './sections/VoxelTerrain';
import FocusLens from './sections/FocusLens';

const App: React.FC = () => {
    // Shared Modal State for the showcase pages too
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
      {/* CodeModal is now ONLY for the Home page or as a fallback.
          For ShowcaseLayout, we pass the props down.
          However, Home renders its OWN CodeModal.
          So this global CodeModal might not be needed?
          Actually, Home renders its own.
          But the showcase routes use 'handleShowCode' which updates THIS state.
          So for Showcase, 'modalOpen' triggers the Sidebar.
      */}

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/components" element={
            <ShowcaseLayout
                codeString={modalCode}
                codeTitle={modalTitle}
                isCodeOpen={modalOpen}
                onCloseCode={handleCloseCode}
            />
        }>
             <Route index element={<div className="text-neutral-500 h-full flex items-center justify-center">Select a component from the sidebar to view.</div>} />
             <Route path="velocity" element={<VelocityText onShowCode={handleShowCode} />} />
             <Route path="fracture" element={<FractureGlass onShowCode={handleShowCode} />} />
             <Route path="liquid" element={<LiquidDistortion onShowCode={handleShowCode} />} />
             <Route path="spotlight" element={<SpotlightGrid onShowCode={handleShowCode} />} />
             <Route path="pixel" element={<PixelWave onShowCode={handleShowCode} />} />
             <Route path="voxel" element={<VoxelTerrain onShowCode={handleShowCode} />} />
             <Route path="lens" element={<FocusLens onShowCode={handleShowCode} />} />
        </Route>

        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
