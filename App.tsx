
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './src/pages/Landing';
import AetherTemplate from './src/pages/AetherTemplate';
import ShowcaseLayout from './src/layouts/ShowcaseLayout';
import CodeModal from './src/components/CodeModal';
import BentoGrid from './src/components/BentoGrid';
import CTA from './src/components/CTA';

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
            />
        }>
<Route index element={<div className="min-h-screen bg-black p-8 flex items-center justify-center"><BentoGrid /></div>} />
<Route path="cta" element={<div className="min-h-screen bg-black p-8 flex items-center justify-center w-full"><CTA /></div>} />
        </Route>

        {/* Redirect unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
