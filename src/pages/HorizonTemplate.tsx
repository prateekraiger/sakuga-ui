import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { ArrowRight, Copy, MousePointer2, Waves, Sun, Zap, Quote, Twitter, Github, Disc, Heart } from 'lucide-react';

const HorizonTemplate: React.FC = () => {
    const canvasRef = useRef<HTMLDivElement>(null);

    // --- Intersection Observer for Animations ---
    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.reveal');
        elements.forEach(el => observer.observe(el));

        return () => {
            elements.forEach(el => observer.unobserve(el));
            observer.disconnect();
        };
    }, []);

    // --- Three.js Scene Setup ---
    useEffect(() => {
        if (!canvasRef.current) return;

        const container = canvasRef.current;
        const scene = new THREE.Scene();

        const fogColor = new THREE.Color(0x4a4e69);
        scene.fog = new THREE.FogExp2(fogColor, 0.005);

        const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 5, 20);
        camera.lookAt(0, 2, 0);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.shadowMap.enabled = true;
        container.appendChild(renderer.domElement);

        // --- Objects ---

        // 1. Water
        const waterGeometry = new THREE.PlaneGeometry(300, 300, 128, 128);
        const waterMaterial = new THREE.MeshStandardMaterial({
            color: 0x006994,
            roughness: 0.1,
            metalness: 0.6,
            flatShading: false,
            transparent: true,
            opacity: 0.9,
            side: THREE.DoubleSide
        });
        const water = new THREE.Mesh(waterGeometry, waterMaterial);
        water.rotation.x = -Math.PI / 2;
        water.receiveShadow = true;
        scene.add(water);

        // 2. Sand
        const sandGeometry = new THREE.PlaneGeometry(300, 50, 64, 64);
        const sandMaterial = new THREE.MeshStandardMaterial({
            color: 0xE6C288,
            roughness: 0.8,
            metalness: 0.1
        });
        const sand = new THREE.Mesh(sandGeometry, sandMaterial);
        sand.rotation.x = -Math.PI / 2;
        sand.position.z = 80;
        sand.position.y = -0.5;
        sand.rotation.z = 0.05;

        const sandPos = sand.geometry.attributes.position;
        for (let i = 0; i < sandPos.count; i++) {
            const z = sandPos.getZ(i);
            sandPos.setZ(i, z + Math.random() * 0.5);
        }
        sand.geometry.computeVertexNormals();
        scene.add(sand);

        // 3. Sun
        const sunGeometry = new THREE.SphereGeometry(15, 32, 32);
        const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffaa33 });
        const sun = new THREE.Mesh(sunGeometry, sunMaterial);
        scene.add(sun);

        // --- Lights ---
        const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
        scene.add(ambientLight);

        const sunLight = new THREE.DirectionalLight(0xffaa33, 1.5);
        sunLight.castShadow = true;
        sunLight.shadow.mapSize.width = 2048;
        sunLight.shadow.mapSize.height = 2048;
        scene.add(sunLight);

        const fillLight = new THREE.PointLight(0x0044ff, 0.5, 100);
        fillLight.position.set(0, 10, 10);
        scene.add(fillLight);

        // --- Animation State ---
        let time = 0;
        const waterVertices = waterGeometry.attributes.position;
        const initialWaterZ: number[] = [];

        for (let i = 0; i < waterVertices.count; i++) {
            initialWaterZ.push(waterVertices.getZ(i));
        }

        // --- Logic: Map Scroll to Sunset ---
        function updateSunPosition(value: number) {
            const sliderVal = parseFloat(value.toString());
            const elevation = (sliderVal / 100) * 30 - 5;
            const xPos = 0;
            const zPos = -100;
            const yPos = elevation;

            sun.position.set(xPos, yPos, zPos);
            sunLight.position.set(xPos, yPos, zPos - 20);

            const t = Math.max(0, Math.min(1, (sliderVal) / 100));

            const colorDay = new THREE.Color(0x87CEEB);
            const colorSunset = new THREE.Color(0xFD5E53);
            const colorNight = new THREE.Color(0x0f172a);

            let skyColor;
            if (t > 0.5) {
                skyColor = colorSunset.clone().lerp(colorDay, (t - 0.5) * 2);
                sunMaterial.color.setHex(0xffaa33);
                sunLight.color.setHex(0xffaa33);
                sunLight.intensity = 1.5;
            } else {
                skyColor = colorNight.clone().lerp(colorSunset, t * 2);
                sunMaterial.color.setHex(0xff4500);
                sunLight.color.setHex(0xff4500);
                sunLight.intensity = 0.5 + t;
            }

            scene.background = skyColor;
            scene.fog.color.copy(skyColor);

            waterMaterial.color.lerpColors(new THREE.Color(0x001133), new THREE.Color(0x006994), t);
        }

        // Scroll Event Listener
        const handleScroll = () => {
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollTop = window.scrollY;
            const scrollPercent = Math.max(0, Math.min(1, scrollTop / docHeight));

            // 40 = Day/Sunset, 0 = Night
            const val = 40 - (scrollPercent * 40);
            updateSunPosition(val);
        };

        window.addEventListener('scroll', handleScroll);
        updateSunPosition(40); // Initialize

        // --- Render Loop ---
        let animationId: number;
        function animate() {
            animationId = requestAnimationFrame(animate);
            time += 0.005;

            // Animate Water
            for (let i = 0; i < waterVertices.count; i++) {
                const x = waterVertices.getX(i);
                const y = waterVertices.getY(i);

                const wave1 = Math.sin(x * 0.1 + time) * 1.5;
                const wave2 = Math.cos(y * 0.1 + time * 0.8) * 1.5;
                const wave3 = Math.sin((x + y) * 0.05 + time * 0.5) * 1.0;

                waterVertices.setZ(i, initialWaterZ[i] + wave1 + wave2 + wave3);
            }
            waterVertices.needsUpdate = true;
            waterGeometry.computeVertexNormals();

            // Subtle camera movement
            camera.position.x = Math.sin(time * 0.1) * 1;
            camera.lookAt(0, 2, 0);

            renderer.render(scene, camera);
        }

        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationId);
            if (canvasRef.current && renderer.domElement) {
                canvasRef.current.removeChild(renderer.domElement);
            }
             // Dispose resources if needed (geometry, materials)
             waterGeometry.dispose();
             waterMaterial.dispose();
             sandGeometry.dispose();
             sandMaterial.dispose();
             sunGeometry.dispose();
             sunMaterial.dispose();
             renderer.dispose();
        };
    }, []);

    return (
        <div className="font-sans antialiased selection:bg-amber-500/30 text-white min-h-screen relative bg-[#0f172a] overflow-x-hidden">
             {/* Styles for reveal animation - Scoped or global consideration handled here simply */}
            <style>{`
                .reveal {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
                    filter: blur(5px);
                }
                .reveal.active {
                    opacity: 1;
                    transform: translateY(0);
                    filter: blur(0);
                }
                .delay-100 { transition-delay: 100ms; }
                .delay-200 { transition-delay: 200ms; }
                .delay-300 { transition-delay: 300ms; }
            `}</style>

            {/* 3D Scene Container */}
            <div id="canvas-container" ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"></div>

            {/* Navigation */}
            <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/5 backdrop-blur-md transition-all duration-300">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-amber-200 to-amber-500"></div>
                        <div className="text-sm font-medium tracking-tight uppercase opacity-90">Horizon</div>
                    </div>

                    <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-white/70">
                        <a href="#features" className="hover:text-white transition-colors duration-200">Features</a>
                        <a href="#technology" className="hover:text-white transition-colors duration-200">Technology</a>
                        <a href="#manifesto" className="hover:text-white transition-colors duration-200">Manifesto</a>
                    </nav>

                    <div className="flex items-center gap-4">
                        <a href="#" className="hidden md:block text-xs font-medium text-white/70 hover:text-white transition-colors">Log in</a>
                        <button className="px-3 py-1.5 rounded-full bg-white text-black text-xs font-medium hover:bg-gray-200 transition-colors duration-200 shadow-[0_0_15px_rgba(255,255,255,0.1)] cursor-pointer">
                            Get Started
                        </button>
                    </div>
                </div>
            </header>

            {/* Scrollable Content */}
            <div className="relative z-10 w-full">

                {/* Hero Section */}
                <section className="min-h-screen flex flex-col justify-center items-start px-6 md:px-12 max-w-7xl mx-auto pt-20">
                    <div className="reveal inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-medium text-amber-200/90 bg-amber-500/10 border border-amber-500/20 rounded-full backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                        </span>
                        <span className="tracking-wide">v2.0 is now live</span>
                    </div>

                    <h1 className="reveal delay-100 text-5xl md:text-8xl font-medium tracking-tighter mb-8 leading-[0.95] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
                        Digital <br /> serenity.
                    </h1>

                    <p className="reveal delay-200 text-lg md:text-xl text-white/60 font-normal leading-relaxed max-w-lg mb-12 tracking-wide">
                        A procedurally generated atmosphere that responds to your presence. Immerse yourself in the gradient of dusk.
                    </p>

                    <div className="reveal delay-300 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <button className="group flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-black bg-white rounded-full hover:bg-gray-100 transition-all duration-200 cursor-pointer">
                            Start Exploring
                            <ArrowRight className="transition-transform group-hover:translate-x-1" width={16} strokeWidth={1.5} />
                        </button>
                        <button className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-white/5 border border-white/10 rounded-full backdrop-blur-md hover:bg-white/10 transition-all duration-200 cursor-pointer">
                            <Copy width={16} strokeWidth={1.5} />
                            <span className="font-mono opacity-80">npm install horizon-ui</span>
                        </button>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="absolute bottom-12 left-6 md:left-12 flex items-center gap-3 text-xs text-white/40 font-medium animate-pulse">
                        <MousePointer2 width={14} strokeWidth={1.5} />
                        Scroll to animate sunset
                    </div>
                </section>

                {/* Features Grid */}
                <section id="features" className="py-32 px-6 border-t border-white/5 bg-gradient-to-b from-transparent to-black/20 backdrop-blur-[2px]">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                            <div className="reveal">
                                <h2 className="text-3xl font-medium tracking-tight mb-4">Native fluidity</h2>
                                <p className="text-white/50 max-w-md text-sm leading-relaxed">
                                    Built on top of WebGL, our rendering engine delivers 60fps performance across all devices without compromising visual fidelity.
                                </p>
                            </div>
                            <div className="text-right hidden md:block reveal delay-100">
                                <div className="text-xs text-white/30 font-mono mb-1">LATENCY</div>
                                <div className="text-xl text-emerald-400 font-mono">&lt; 16ms</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Card 1 */}
                            <div className="reveal delay-100 p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors duration-300 group">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                                    <Waves width={20} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-lg font-medium mb-2 tracking-tight">Fluid Dynamics</h3>
                                <p className="text-sm text-white/50 leading-relaxed">
                                    Real-time vertex displacement based on sine wave superposition creates organic, non-repeating water surfaces.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="reveal delay-200 p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors duration-300 group">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                                    <Sun width={20} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-lg font-medium mb-2 tracking-tight">Rayleigh Scattering</h3>
                                <p className="text-sm text-white/50 leading-relaxed">
                                    Simulated atmospheric light scattering changes the color palette dynamically based on light source elevation.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="reveal delay-300 p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors duration-300 group">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-black transition-all duration-300">
                                    <Zap width={20} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-lg font-medium mb-2 tracking-tight">Zero Config</h3>
                                <p className="text-sm text-white/50 leading-relaxed">
                                    Drop the component into your React or Vue project. No complex shader language knowledge required.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Large Quote / Break */}
                <section id="manifesto" className="py-40 px-6 border-t border-white/5 bg-black/40 backdrop-blur-lg">
                    <div className="max-w-4xl mx-auto text-center reveal">
                        <Quote className="text-white/20 mb-8 mx-auto" width={32} strokeWidth={1.5} />
                        <h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                            "The web was meant to be immersive. We are building the primitives for the next generation of spatial interfaces."
                        </h2>
                        <div className="mt-12 flex items-center justify-center gap-4 reveal delay-200">
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold">JD</div>
                            <div className="text-left">
                                <div className="text-sm font-medium text-white">James Doe</div>
                                <div className="text-xs text-white/40">Creative Director, Horizon</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section id="technology" className="py-24 px-6 border-t border-white/5 bg-black/60">
                    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="flex flex-col gap-2 reveal delay-100">
                            <span className="text-4xl font-medium tracking-tight">100k+</span>
                            <span className="text-xs font-medium uppercase text-white/40 tracking-wider">Downloads</span>
                        </div>
                        <div className="flex flex-col gap-2 reveal delay-200">
                            <span className="text-4xl font-medium tracking-tight">60fps</span>
                            <span className="text-xs font-medium uppercase text-white/40 tracking-wider">Performance</span>
                        </div>
                        <div className="flex flex-col gap-2 reveal delay-300">
                            <span className="text-4xl font-medium tracking-tight">24kb</span>
                            <span class="text-xs font-medium uppercase text-white/40 tracking-wider">Gzipped</span>
                        </div>
                        <div className="flex flex-col gap-2 reveal delay-100">
                            <span className="text-4xl font-medium tracking-tight">0.0s</span>
                            <span class="text-xs font-medium uppercase text-white/40 tracking-wider">Load Time</span>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="py-20 px-6 border-t border-white/5 bg-black relative overflow-hidden">
                    {/* Footer Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 blur-[100px] rounded-full pointer-events-none opacity-50"></div>

                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 mb-20 reveal">
                            <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-amber-200 to-amber-500"></div>
                                    <span className="text-lg font-medium tracking-tight">Horizon</span>
                                </div>
                                <p className="text-sm text-white/40 max-w-xs leading-relaxed">
                                    Crafting digital atmospheres for the modern web. Open source and ready for production.
                                </p>
                                <div className="flex gap-4 mt-4">
                                    <a href="#" className="text-white/40 hover:text-white transition-colors"><Twitter width={18} /></a>
                                    <a href="#" className="text-white/40 hover:text-white transition-colors"><Github width={18} /></a>
                                    <a href="#" className="text-white/40 hover:text-white transition-colors"><Disc width={18} /></a>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-medium text-white mb-4">Product</h4>
                                <ul className="space-y-3 text-sm text-white/40">
                                    <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Docs</a></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-sm font-medium text-white mb-4">Company</h4>
                                <ul className="space-y-3 text-sm text-white/40">
                                    <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-sm font-medium text-white mb-4">Legal</h4>
                                <ul className="space-y-3 text-sm text-white/40">
                                    <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                                    <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-sm font-medium text-white mb-4">Status</h4>
                                <div className="flex items-center gap-2 text-sm text-emerald-400">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                                    </span>
                                    All systems operational
                                </div>
                            </div>
                        </div>

                        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/20 reveal delay-100">
                            <p>© 2024 Horizon Inc. All rights reserved.</p>
                            <p>Designed with <Heart className="inline align-middle mx-1" width={10} /> in San Francisco</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default HorizonTemplate;
