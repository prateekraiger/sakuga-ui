export const START_AGENCY_LANDING_CODE = `import React, { useState } from 'react';

// Icons based on provided SVG structure
const Logos = {
    Logitech: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24" className="opacity-80 w-[48px] h-[48px]" strokeWidth="2" style={{ width: '48px', height: '48px', color: 'rgb(23, 23, 23)' }}>
            <path fill="currentColor" d="M24 5.098a1.35 1.35 0 0 1-1.35 1.35a1.35 1.35 0 0 1-1.352-1.35a1.35 1.35 0 0 1 1.351-1.351A1.35 1.35 0 0 1 24 5.097zM16.549 18.31a2.29 2.29 0 0 1-2.322-2.322H12.2c0 2.449 1.9 4.264 4.306 4.264s4.348-1.857 4.348-4.264H18.87c-.043 1.351-1.056 2.322-2.322 2.322zm5.108-2.828h1.984V7.377h-1.984zM0 15.483h1.984V4H0zm7.135-8.359c-2.449 0-4.307 1.858-4.307 4.264a4.27 4.27 0 0 0 4.307 4.306c2.406 0 4.306-1.858 4.306-4.264S9.583 7.124 7.135 7.124m0 6.628c-1.31 0-2.322-1.013-2.322-2.364a2.29 2.29 0 0 1 2.322-2.322a2.29 2.29 0 0 1 2.321 2.322c0 1.309-.97 2.364-2.321 2.364m13.635-4.77V7.377h-2.828c-.464-.21-.929-.253-1.393-.253c-2.449 0-4.348 1.858-4.348 4.306s1.9 4.264 4.306 4.264s4.306-1.858 4.306-4.264c0-.844-.254-1.604-.676-2.195zm-4.221 4.77c-1.309 0-2.322-1.013-2.322-2.364a2.29 2.29 0 0 1 2.322-2.322a2.29 2.29 0 0 1 2.322 2.322c0 1.309-1.056 2.364-2.322 2.364"></path>
        </svg>
    ),
    // ... other logos
};

const StartAgencyLanding = () => {
    // Carousel State
    const [activeIndex, setActiveIndex] = useState(0);
    const totalCards = 3;

    const rotateCarousel = (direction) => {
        if (direction === 1) { // Next
            setActiveIndex((prev) => (prev + 1) % totalCards);
        } else { // Prev
            setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);
        }
    };

    // Spotlight Effect
    const handleSpotlight = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', \`\${x}px\`);
        card.style.setProperty('--mouse-y', \`\${y}px\`);
    };

    const getCardClass = (index) => {
        if (index === activeIndex) return 'active';
        if (index === (activeIndex + 1) % totalCards) return 'next';
        if (index === (activeIndex - 1 + totalCards) % totalCards) return 'prev';
        return '';
    };

    return (
        <div className="min-h-screen overflow-x-hidden selection:bg-neutral-300 selection:text-neutral-900 text-neutral-900 bg-neutral-100 relative font-geist">
             {/* ... Implementation ... */}
        </div>
    );
};
export default StartAgencyLanding;
`;
