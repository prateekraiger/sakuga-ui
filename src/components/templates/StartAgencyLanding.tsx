import React, { useState, useRef, useEffect } from 'react';

// Icons
const Logos = {
    Logitech: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24" className="opacity-80 w-[48px] h-[48px]" strokeWidth="2" style={{ width: '48px', height: '48px', color: 'rgb(23, 23, 23)' }}>
            <path fill="currentColor" d="M24 5.098a1.35 1.35 0 0 1-1.35 1.35a1.35 1.35 0 0 1-1.352-1.35a1.35 1.35 0 0 1 1.351-1.351A1.35 1.35 0 0 1 24 5.097zM16.549 18.31a2.29 2.29 0 0 1-2.322-2.322H12.2c0 2.449 1.9 4.264 4.306 4.264s4.348-1.857 4.348-4.264H18.87c-.043 1.351-1.056 2.322-2.322 2.322zm5.108-2.828h1.984V7.377h-1.984zM0 15.483h1.984V4H0zm7.135-8.359c-2.449 0-4.307 1.858-4.307 4.264a4.27 4.27 0 0 0 4.307 4.306c2.406 0 4.306-1.858 4.306-4.264S9.583 7.124 7.135 7.124m0 6.628c-1.31 0-2.322-1.013-2.322-2.364a2.29 2.29 0 0 1 2.322-2.322a2.29 2.29 0 0 1 2.321 2.322c0 1.309-.97 2.364-2.321 2.364m13.635-4.77V7.377h-2.828c-.464-.21-.929-.253-1.393-.253c-2.449 0-4.348 1.858-4.348 4.306s1.9 4.264 4.306 4.264s4.306-1.858 4.306-4.264c0-.844-.254-1.604-.676-2.195zm-4.221 4.77c-1.309 0-2.322-1.013-2.322-2.364a2.29 2.29 0 0 1 2.322-2.322a2.29 2.29 0 0 1 2.322 2.322c0 1.309-1.056 2.364-2.322 2.364"></path>
        </svg>
    ),
    Samsung: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24" className="opacity-80 w-[96px] h-[96px]" strokeWidth="2" style={{ width: '96px', height: '96px', color: 'rgb(23, 23, 23)' }}>
            <path fill="currentColor" d="m19.817 10.28l.046 2.694h-.023l-.78-2.693h-1.283v3.392h.848l-.046-2.785h.023l.836 2.785h1.227v-3.392zm-16.15 0l-.641 3.428h.928l.47-3.118h.023l.459 3.118h.916l-.63-3.427zm5.181 0l-.424 2.614h-.023l-.424-2.613H6.58l-.069 3.427h.86l.023-3.083h.011l.573 3.083h.871l.573-3.083h.023l.023 3.083h.86l-.08-3.427zm-7.266 2.454a.5.5 0 0 1 .011.252c-.023.114-.103.229-.332.229c-.218 0-.344-.126-.344-.31v-.332H0v.264c0 .768.607.997 1.25.997c.618 0 1.134-.218 1.214-.78c.046-.298.012-.492 0-.561c-.16-.722-1.467-.929-1.559-1.33a.5.5 0 0 1 0-.183c.023-.115.104-.23.31-.23s.32.127.32.31v.206h.86v-.24c0-.745-.676-.86-1.157-.86c-.608 0-1.112.206-1.204.757a1.04 1.04 0 0 0 .012.458c.137.71 1.364.917 1.536 1.352m11.152 0c.034.08.022.184.011.253c-.023.114-.103.229-.332.229c-.218 0-.344-.126-.344-.31v-.332h-.917v.264c0 .756.596.985 1.238.985c.619 0 1.123-.206 1.203-.779c.046-.298.012-.481 0-.562c-.137-.71-1.433-.928-1.524-1.318a.5.5 0 0 1 0-.183c.023-.115.103-.23.31-.23c.194 0 .32.127.32.31v.206h.848v-.24c0-.745-.665-.86-1.146-.86c-.607 0-1.1.195-1.192.757c-.023.149-.023.286.012.458c.137.71 1.34.905 1.513 1.352m2.888.459c.24 0 .31-.16.332-.252c.012-.035.012-.092.012-.126V10.28h.87v2.464c0 .069 0 .195-.01.23c-.058.641-.562.847-1.193.847c-.63 0-1.134-.206-1.192-.848c0-.034-.011-.16-.011-.229V10.28h.87v2.533c0 .046 0 .091.012.126c0 .091.07.252.31.252m7.152-.034c.252 0 .332-.16.355-.253c.011-.034.011-.091.011-.126v-.493h-.355v-.504H24v.917c0 .069 0 .115-.011.23c-.058.63-.597.847-1.204.847s-1.146-.217-1.203-.848c-.012-.114-.012-.16-.012-.229v-1.444c0-.057.012-.172.012-.23c.08-.641.596-.847 1.203-.847s1.135.206 1.203.848c.012.103.012.229.012.229v.115h-.86v-.195s0-.08-.011-.126c-.012-.08-.08-.252-.344-.252c-.252 0-.32.16-.344.252c-.011.045-.011.103-.011.16v1.57c0 .046 0 .092.011.126c0 .092.092.253.333.253"></path>
        </svg>
    ),
    Lenovo: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24" className="text-neutral-900 opacity-80" style={{ width: '48px', height: '48px' }}>
            <path fill="currentColor" d="M21.044 12.288c0 .5-.343.867-.815.867c-.464 0-.827-.38-.827-.867c0-.51.343-.868.815-.868c.464 0 .827.381.827.868m-14.305-.92a.79.79 0 0 0-.651.307a1 1 0 0 0-.172.738l1.479-.614a.71.71 0 0 0-.656-.43zm6.963.052c-.472 0-.816.358-.816.868c0 .486.364.867.828.867c.472 0 .815-.368.815-.867c0-.487-.363-.868-.827-.868M24 7.997v8.006H0V7.997zM5.01 13.05H3.088V9.825H2.23v4.003h2.78zm1.137-.094l2.163-.897a1.67 1.67 0 0 0-.37-.86c-.284-.33-.704-.505-1.216-.505c-.931 0-1.633.686-1.633 1.593c0 .93.704 1.593 1.726 1.593c.572 0 1.158-.272 1.432-.589l-.535-.411c-.357.264-.56.326-.885.326c-.292 0-.52-.09-.682-.25m5.57-1.039c0-.709-.507-1.223-1.252-1.223a1.28 1.28 0 0 0-1.005.494v-.442h-.846v3.081h.846v-1.753c0-.316.245-.651.698-.651c.35 0 .712.243.712.651v1.753h.847zm3.647.37c0-.904-.725-1.593-1.65-1.593c-.933 0-1.663.7-1.663 1.593c0 .903.726 1.592 1.651 1.592c.932 0 1.662-.7 1.662-1.592m2.066 1.54l1.268-3.081h-.967l-.765 2.099l-.765-2.1h-.966l1.268 3.081zm4.449-1.54c0-.904-.725-1.593-1.65-1.593c-.932 0-1.662.7-1.662 1.593c0 .903.725 1.592 1.65 1.592c.932 0 1.662-.7 1.662-1.592"></path>
        </svg>
    ),
    Vercel: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24" className="opacity-80 w-[48px] h-[48px]" strokeWidth="2" style={{ width: '48px', height: '48px', color: 'rgb(23, 23, 23)' }}>
            <path fill="currentColor" d="m12 1.608l12 20.784H0Z"></path>
        </svg>
    ),
    Stripe: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24" className="opacity-80 w-[48px] h-[48px]" strokeWidth="2" style={{ width: '48px', height: '48px', color: 'rgb(23, 23, 23)' }}>
            <path fill="currentColor" d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409c0-.831.683-1.305 1.901-1.305c2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0C9.667 0 7.589.654 6.104 1.872C4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219c2.585.92 3.445 1.574 3.445 2.583c0 .98-.84 1.545-2.354 1.545c-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813c1.664-1.305 2.525-3.236 2.525-5.732c0-4.128-2.524-5.851-6.594-7.305z"></path>
        </svg>
    ),
    Notion: () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24" className="opacity-80 w-[48px] h-[48px] z-10" strokeWidth="2" style={{ width: '48px', height: '48px', color: 'rgb(23, 23, 23)' }}>
            <path fill="currentColor" d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514c-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233l4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632"></path>
        </svg>
    )
};

const StartAgencyLanding: React.FC = () => {
    // Carousel State
    const [activeIndex, setActiveIndex] = useState(0);
    const totalCards = 3;

    const rotateCarousel = (direction: number) => {
        if (direction === 1) { // Next
            setActiveIndex((prev) => (prev + 1) % totalCards);
        } else { // Prev
            setActiveIndex((prev) => (prev - 1 + totalCards) % totalCards);
        }
    };

    // Spotlight Effect
    const handleSpotlight = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    };

    // Helper to determine card class based on active index
    const getCardClass = (index: number) => {
        if (index === activeIndex) return 'active';
        if (index === (activeIndex + 1) % totalCards) return 'next';
        if (index === (activeIndex - 1 + totalCards) % totalCards) return 'prev';
        return '';
    };

    return (
        <div className="min-h-screen overflow-x-hidden selection:bg-neutral-300 selection:text-neutral-900 text-neutral-900 bg-neutral-100 relative font-geist">
            {/* Background Grid Lines */}
            <div className="fixed grid-lines w-full h-full top-0 right-0 bottom-0 left-0 pointer-events-none"></div>

            <div className="relative z-10 flex flex-col lg:flex-row min-h-screen max-w-[1600px] mx-auto">

                {/* Sidebar / Navigation */}
                <aside className="lg:w-64 lg:fixed lg:h-screen flex flex-col z-50 glass-panel lg:bg-transparent lg:backdrop-blur-none lg:border-none lg:border-r w-full border-neutral-200/50 border-b pt-8 pr-8 pb-8 pl-8 justify-between">
                    <div>
                        <div className="mb-12 animate-clip-in" style={{ animationDelay: '0.1s' }}>
                            <a href="#" className="block text-3xl tracking-tighter font-medium group font-geist">
                                start<span className="text-neutral-400 group-hover:text-neutral-900 transition-colors font-geist">.agency</span>
                            </a>
                        </div>

                        <nav className="space-y-4 animate-clip-in" style={{ animationDelay: '0.2s' }}>
                            <a href="#" className="block text-lg text-neutral-900 font-medium hover:translate-x-1 transition-transform font-geist">Home</a>
                            <a href="#" className="block text-lg text-neutral-500 hover:text-neutral-900 hover:translate-x-1 transition-all font-geist">Work</a>
                            <a href="#" className="block text-lg text-neutral-500 hover:text-neutral-900 hover:translate-x-1 transition-all font-geist">Services</a>
                            <a href="#" className="block text-lg text-neutral-500 hover:text-neutral-900 hover:translate-x-1 transition-all font-geist">Pricing</a>
                            <a href="#" className="block hover:text-neutral-900 hover:translate-x-1 transition-all text-lg text-neutral-500 font-geist">Contact</a>
                        </nav>
                    </div>

                    <div className="hidden lg:block space-y-2 animate-clip-in" style={{ animationDelay: '0.3s' }}>
                        <div className="flex items-center gap-2 mb-4">
                            <img src="https://ui-avatars.com/api/?name=Start+Agency&background=random&color=fff" alt="User" className="w-8 h-8 rounded-full opacity-80" />
                            <div className="text-sm leading-tight">
                                <p className="font-medium text-neutral-900 font-geist">start.agency</p>
                                <p className="text-neutral-500 font-geist">@startagency</p>
                            </div>
                        </div>
                        <p className="text-xs text-neutral-400 font-geist">Template designed by François Savard from END Agency.</p>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 lg:ml-64 lg:p-16 flex flex-col gap-20 lg:gap-12 overflow-hidden pt-6 pr-6 pb-6 pl-6 gap-x-20 gap-y-20">

                    {/* Hero Section */}
                    <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-10 gap-x-12 gap-y-12">
                        <div className="animate-clip-in lg:col-span-7 pb-4 space-y-8" style={{ animationDelay: '0.4s' }}>
                            <h1 className="leading-[0.95] lg:text-7xl xl:text-7xl text-5xl font-medium text-neutral-900 tracking-tight font-geist">Design partner for startups that move fast and ship right.</h1>
                            <p className="leading-snug lg:text-base text-xl font-normal text-neutral-500 font-geist">
                                We help founders turn messy ideas into products people actually use.
                                Product, brand, and web design. One team. Zero friction.
                            </p>
                            <button className="glass-button all-unset cursor-pointer outline-none focus:outline-none z-30 pointer-events-auto text-base rounded-full mt-1 mb-1 relative overflow-hidden group">
                                <span className="button-text relative block select-none font-medium text-base text-neutral-800 tracking-tight px-6 py-3.5 font-geist" style={{ fontSize: '18px' }}>
                                    Design with us
                                </span>
                                <div className="button-shine absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/20"></div>
                            </button>

                            <section className="animate-fade-up w-full my-6 space-y-2" style={{ animationDelay: '0.6s' }}>
                                <p className="text-base text-neutral-500 font-geist">Trusted by startups that raised millions and globally recognized brands</p>

                                <div className="overflow-hidden mask-image-gradient w-full relative gap-x-4 gap-y-4">
                                    {/* Gradient masks for fade effect */}
                                    <div className="z-10 bg-gradient-to-r from-neutral-100 to-transparent w-32 h-full absolute top-0 left-0"></div>
                                    <div className="bg-gradient-to-l from-neutral-100 to-transparent w-32 h-full z-10 absolute top-0 right-0"></div>

                                    <div className="flex w-max animate-marquee hover:pause-animation">
                                        {/* Logos Batch 1 */}
                                        <div className="flex pr-4 pl-4 items-center gap-x-2 lg:gap-2">
                                            <div className="glass-panel flex hover:grayscale-0 transition-all duration-500 spotlight-card bg-neutral-50 w-48 h-24 rounded-2xl grayscale items-center justify-center p-4" onMouseMove={handleSpotlight}>
                                                <Logos.Logitech />
                                            </div>
                                            <div className="glass-panel flex hover:grayscale-0 transition-all duration-500 spotlight-card bg-neutral-50 w-48 h-24 rounded-2xl grayscale items-center justify-center p-4" onMouseMove={handleSpotlight}>
                                                <Logos.Samsung />
                                            </div>
                                            <div className="glass-panel flex hover:grayscale-0 transition-all duration-500 spotlight-card bg-neutral-50 w-48 h-24 rounded-2xl grayscale items-center justify-center p-4" onMouseMove={handleSpotlight}>
                                                <Logos.Lenovo />
                                            </div>
                                            <div className="glass-panel flex hover:grayscale-0 transition-all duration-500 spotlight-card bg-neutral-50 w-48 h-24 rounded-2xl grayscale items-center justify-center p-4" onMouseMove={handleSpotlight}>
                                                <Logos.Vercel />
                                            </div>
                                            <div className="glass-panel flex hover:grayscale-0 transition-all duration-500 spotlight-card bg-neutral-50 w-48 h-24 rounded-2xl grayscale items-center justify-center p-4" onMouseMove={handleSpotlight}>
                                                <Logos.Stripe />
                                            </div>
                                            <div className="glass-panel flex hover:grayscale-0 transition-all duration-500 spotlight-card w-48 h-24 rounded-2xl grayscale items-center justify-center p-4" onMouseMove={handleSpotlight}>
                                                <Logos.Notion />
                                            </div>
                                        </div>

                                        {/* Logos Batch 2 (Duplicate for loop) */}
                                        <div className="flex items-center gap-4 lg:gap-8 px-4">
                                            <div className="glass-panel rounded-2xl w-48 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 spotlight-card p-4" onMouseMove={handleSpotlight}>
                                                <Logos.Logitech />
                                            </div>
                                            <div className="glass-panel rounded-2xl w-48 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 spotlight-card p-4" onMouseMove={handleSpotlight}>
                                                <Logos.Samsung />
                                            </div>
                                            <div className="glass-panel rounded-2xl w-48 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 spotlight-card p-4" onMouseMove={handleSpotlight}>
                                                <Logos.Lenovo />
                                            </div>
                                            <div className="glass-panel rounded-2xl w-48 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 spotlight-card p-4" onMouseMove={handleSpotlight}>
                                                <Logos.Vercel />
                                            </div>
                                            <div className="glass-panel rounded-2xl w-48 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 spotlight-card p-4" onMouseMove={handleSpotlight}>
                                                <Logos.Stripe />
                                            </div>
                                            <div className="glass-panel rounded-2xl w-48 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 spotlight-card p-4" onMouseMove={handleSpotlight}>
                                                <Logos.Notion />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div className="lg:col-span-4 flex flex-col animate-clip-in bg-stone-50 border-stone-200 border rounded-3xl pt-2 pr-2 pb-2 pl-2 space-y-8 gap-x-12 gap-y-12 justify-between" style={{ animationDelay: '0.5s', height: 'fit-content' }}>
                            <div className="aspect-[16/9] overflow-hidden w-full border-stone-200 border rounded-2xl relative gap-x-12 gap-y-12" style={{ padding: '176.75% 0 0 0', position: 'relative' }}>
                                <iframe src="https://player.vimeo.com/video/1147300181?autoplay=1&muted=1&loop=1&controls=0&transparent=0&title=0&byline=0&portrait=0" className="absolute inset-0 h-full w-full border-0 rounded-2xl" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" title="Start agency template"></iframe>
                            </div>
                        </div>
                    </section>


                    {/* Featured Work: 3D Carousel */}
                    <section className="animate-fade-up w-full pt-12 pb-12 relative" style={{ animationDelay: '0.8s' }}>
                        <div className="flex mb-12 pr-2 pl-2 items-end justify-between">
                            <h2 className="lg:text-5xl text-4xl font-medium text-neutral-900 tracking-tight font-geist">Featured Work</h2>
                            <div className="flex gap-4">
                                <button onClick={() => rotateCarousel(-1)} className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-white hover:border-neutral-400 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-xl"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 12H4m0 0l6-6m-6 6l6 6"></path></svg>
                                </button>
                                <button onClick={() => rotateCarousel(1)} className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center hover:bg-white hover:border-neutral-400 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" className="text-xl"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 12h16m0 0l-6-6m6 6l-6 6"></path></svg>
                                </button>
                            </div>
                        </div>

                        <div className="carousel-container flex w-full h-[500px] relative items-center justify-center">

                            {/* Card 1 */}
                            <div className={`carousel-card ${getCardClass(0)} lg:w-3/4 glass-panel spotlight-card cursor-pointer w-full h-full rounded-3xl pt-2 pr-2 pb-2 pl-2`} onMouseMove={handleSpotlight}>
                                <div className="w-full h-full bg-neutral-50 rounded-2xl overflow-hidden relative group">
                                    <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
                                        <span className="bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-medium border border-black/5 font-geist">Fintech Dashboard</span>
                                    </div>
                                    <div className="flex bg-gradient-to-br from-neutral-100 to-neutral-200 w-full h-full gap-x-4 gap-y-4 items-center justify-center">
                                        <div className="flex flex-col gap-4 transform group-hover:scale-[1.02] transition-transform duration-500 bg-center bg-white w-[80%] h-[70%] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c053fe9-7127-4df7-ae87-36ae206fe067_1600w.jpg)] bg-cover border-neutral-100 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-2xl gap-x-4 gap-y-4">
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className={`carousel-card ${getCardClass(1)} lg:w-3/4 glass-panel spotlight-card cursor-pointer w-full h-full rounded-3xl pt-2 pr-2 pb-2 pl-2 gap-x-4 gap-y-4`} onMouseMove={handleSpotlight}>
                                <div className="w-full h-full bg-neutral-50 rounded-2xl overflow-hidden relative group">
                                    <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
                                        <span className="bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-medium border border-black/5 font-geist">Mobile Health App</span>
                                    </div>
                                    <div className="flex bg-gradient-to-bl from-blue-50 to-neutral-100 w-full h-full items-center justify-center">
                                        <div className="flex flex-col transform group-hover:scale-[1.02] transition-transform duration-500 bg-center bg-white w-[40%] h-[80%] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0851aedf-fdcc-48be-8ea0-cd63cc04fcda_800w.jpg)] bg-cover border-neutral-100 border rounded-xl pt-4 pr-4 pb-4 pl-4 shadow-2xl">
                                            <div className="mt-auto flex justify-between">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className={`carousel-card ${getCardClass(2)} w-full lg:w-3/4 h-full glass-panel rounded-3xl p-2 spotlight-card cursor-pointer`} onMouseMove={handleSpotlight}>
                                <div className="w-full h-full bg-neutral-50 rounded-2xl overflow-hidden relative group">
                                    <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
                                        <span className="bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-medium border border-black/5 font-geist">SaaS Analytics</span>
                                    </div>
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-tr from-orange-50 to-neutral-100">
                                        <div className="transform group-hover:scale-[1.02] transition-transform duration-500 flex bg-white w-[80%] h-[70%] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/51dd450a-0485-4587-89d8-c6078fb01266_1600w.jpg)] bg-cover bg-center border-neutral-100 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-2xl gap-x-2 gap-y-2 items-end">
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default StartAgencyLanding;
