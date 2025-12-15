
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import CustomCursor from '../../components/CustomCursor';

const ShowcaseLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black">
      <CustomCursor />
      <div className="noise-overlay fixed inset-0 pointer-events-none opacity-30 z-0" />

      <Sidebar />

      <main className="flex-1 ml-64 relative z-10 w-full min-h-screen overflow-x-hidden">
        <div className="w-full h-full p-8 md:p-12 lg:p-16 max-w-7xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default ShowcaseLayout;
