import React from 'react';
import {
  Menu,
  Instagram,
  Phone,
  ArrowUpRight,
  ArrowRight,
  TrendingUp,
  Download,
  Play,
  CheckCircle2,
  Mail,
  Heart
} from 'lucide-react';

const EsteticoTemplate: React.FC = () => {
  return (
    <div className="antialiased selection:bg-stone-900 selection:text-white text-stone-900 bg-[#F2F2F2] min-h-screen font-sans">
      <style>{`
        /* Custom hide scrollbar for clean UI */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        /* Smooth fade in */
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Main Wrapper mimicking the "Card" aesthetic from the reference image */}
      <div className="sm:p-4 lg:p-6 max-w-[1600px] mr-auto ml-auto pt-2 pr-2 pb-2 pl-2">

        {/* HERO SECTION */}
        {/* Design DNA: Rounded corners, glassmorphism, background image, internal nav */}
        <header className="min-h-[700px] overflow-hidden bg-stone-900 w-full h-[95vh] rounded-[2rem] relative shadow-2xl">

            {/* Background Image */}
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6d443bab-5845-45a2-a9f1-912661773e41_3840w.png"
              alt="Modern Villa in Bali"
              className="transition-transform duration-[20s] hover:scale-105 ease-linear opacity-90 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0"
            />

            {/* Gradient Overlay */}
            <div className="bg-gradient-to-b from-black/30 via-transparent to-black/60 absolute top-0 right-0 bottom-0 left-0"></div>

            {/* Navigation Bar (Inside Hero) */}
            <nav className="z-20 flex sm:px-10 pt-6 pr-6 pb-6 pl-6 relative items-center justify-between">
                {/* Logo */}
                <div className="flex gap-2 items-center">
                    <span className="text-lg font-medium text-white tracking-tight">habitat.s</span>
                </div>

                {/* Desktop Menu (Pill Shape) */}
                <div className="hidden md:flex gap-1 bg-white/10 border-white/10 border rounded-full pt-1.5 pr-2 pb-1.5 pl-2 backdrop-blur-md items-center">
                    <a href="#about" className="hover:text-white hover:bg-white/10 transition-all duration-300 text-sm text-white/90 rounded-full pt-2 pr-5 pb-2 pl-5">About the Project</a>
                    <a href="#units" className="hover:text-white hover:bg-white/10 transition-all duration-300 text-sm text-white/90 rounded-full pt-2 pr-5 pb-2 pl-5">Lifestyle</a>
                    <a href="#video" className="hover:text-white hover:bg-white/10 transition-all duration-300 text-sm text-white/90 rounded-full pt-2 pr-5 pb-2 pl-5">Team</a>
                    <a href="#contact" className="hover:text-white hover:bg-white/10 transition-all duration-300 text-sm text-white/90 rounded-full pt-2 pr-5 pb-2 pl-5">Contact</a>
                </div>

                {/* Mobile Menu Toggle */}
                <button className="md:hidden p-2 bg-white/10 backdrop-blur-md rounded-full text-white">
                    <Menu className="w-6 h-6" />
                </button>

                {/* Social/Contact Icons (Top Right) */}
                <div className="hidden md:flex items-center gap-3">
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-all">
                        <Instagram className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white hover:bg-white/20 transition-all">
                        <Phone className="w-[16px] h-[16px]" color="white" />
                    </a>
                    <a href="#contact" className="group flex items-center gap-3 bg-white pl-5 pr-1.5 py-1.5 rounded-full transition-transform hover:scale-105">
                        <span className="text-sm font-medium text-stone-900">Get Presentation</span>
                        <span className="w-8 h-8 bg-stone-900 rounded-full flex items-center justify-center group-hover:bg-stone-800 transition-colors">
                            <ArrowUpRight className="w-4 h-4 text-white" />
                        </span>
                    </a>
                </div>
            </nav>

            {/* Hero Content */}
            <div className="sm:p-10 z-10 flex flex-col md:flex-row gap-8 w-full pt-6 pr-6 pb-12 pl-6 absolute bottom-0 left-0 gap-x-8 gap-y-8 items-end justify-between">

                {/* Main Text */}
                <div className="max-w-2xl fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <span className="inline-block uppercase text-xs font-medium text-white tracking-wider bg-white/20 border-white/10 border rounded-full mb-4 pt-1 pr-3 pb-1 pl-3 backdrop-blur-md">real estate Search engine</span>
                    <h1 className="sm:text-5xl lg:text-6xl leading-[1.1] text-4xl font-medium text-white tracking-tight mb-6">From Location to Lifestyle</h1>
                    <p className="leading-relaxed text-lg font-light text-white/80 max-w-lg mb-8">We index data that matters, Air Quality, Connectivity, Community, and Wellness.</p>

                    <a href="#contact" className="group inline-flex items-center gap-4 bg-white text-stone-900 pl-6 pr-2 py-2 rounded-full hover:shadow-lg hover:shadow-white/20 transition-all duration-300">
                        <span className="text-base font-medium">Get the presentation</span>
                        <span className="w-10 h-10 bg-stone-900 rounded-full flex items-center justify-center group-hover:bg-stone-700 transition-colors">
                            <ArrowRight className="w-[24px] h-[20px]" color="white" />
                        </span>
                    </a>
                </div>

                {/* Glass Cards (Stats) could go here */}
                <div className="flex flex-col gap-4 w-full md:w-auto fade-in-up" style={{ animationDelay: '0.3s' }}>
                    {/* Placeholder for stats if needed */}
                </div>
            </div>
        </header>

        {/* ABOUT PROJECT SECTION */}
        <section id="about" className="mt-24 px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                <div className="lg:col-span-5">
                    <h2 className="sm:text-4xl text-3xl font-medium text-stone-900 tracking-tight mb-6">The Market Sells Concrete. Users Buy Freedom</h2>
                    <p className="leading-relaxed text-lg font-light text-stone-500 mb-8">The traditional property search model is broken. Legacy platforms like Property24, Zillow, and Rightmove were built for a different era—indexing properties by "hardware" (bedrooms, bathrooms, square footage). But the post-pandemic buyer has evolved. We are witnessing a mass migration from employment hubs to lifestyle hubs. Today’s modern nomad, remote worker, and wellness-conscious family doesn't just want a roof; they want a habitat. They are searching for community, connectivity, and well-being, yet current tools force them to search by postcode and price.</p>
                    <p className="leading-relaxed text-base text-stone-500 mb-8">A Search Engine for Life Habitat.s is the first search engine designed to index the "soul" of a property, not just its shell. We pivot the search experience from Location-First to Lifestyle-First. Instead of typing "2 Bed, Cape Town," a user inputs their reality: "I need high-speed fiber, AQI &lt; 50 (clean air), access to a yoga studio, and a creative community."

Our platform aggregates the data that actually matters—internet speeds, air quality, noise levels, and community "vibe" scores—matching users to homes that fit their biological and digital needs.</p>
                </div>

                {/* Right Side Image/Visual */}
                <div className="lg:col-span-7 relative">
                    <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden group">
                        <img
                          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d5f8a6a3-9b20-4be2-8977-55f59234d709_3840w.jpg"
                          alt="Interior Design"
                          className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0"
                          style={{ transition: 'outline 0.1s ease-in-out' }}
                        />
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/20 inline-block">
                                <p className="text-stone-900 font-medium">Modern aesthetics with natural materials</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* LOCATION SECTION */}
        <section className="overflow-hidden text-white bg-stone-900 rounded-[2rem] mt-24 relative">
            <div className="absolute inset-0 opacity-40">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f609bc8d-0b8b-4668-bcb4-b2d9d27f65f6_3840w.jpg" alt="Bali Coast" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/80 to-transparent"></div>

            <div className="sm:p-16 lg:p-24 grid grid-cols-1 lg:grid-cols-2 z-10 pt-8 pr-8 pb-8 pl-8 relative gap-x-12 gap-y-12">
                <div>
                    <span className="uppercase block text-sm font-medium text-stone-400 tracking-wide mb-2">The Market Shift</span>
                    <h2 className="text-4xl font-medium tracking-tight mb-6">Why?</h2>
                    <p className="leading-relaxed text-lg font-light text-stone-300 mb-8">Users are demanding "community-in-a-box" and prioritizing on-site wellness amenities over square footage. Habitat.s indexes the data that actually matters to the modern buyer</p>

                    <div className="mb-8 space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
                                <span className="text-sm font-bold">01</span>
                            </div>
                            <span className="text-stone-300">Define your Lifestyle: Stop filtering by square footage. Set your parameters for air quality, community vibe, and wellness amenities.</span>
                        </div>
                        <div className="flex gap-4 gap-x-4 gap-y-4 items-center">
                            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
                                <span className="text-sm font-bold">02</span>
                            </div>
                            <span className="text-stone-300">Verified Intelligence: Real-time data on AQI (Air Quality), noise pollution, and verified internet upload speeds. No surprises.</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center bg-white/5">
                                <span className="text-sm font-bold">03</span>
                            </div>
                            <span className="text-stone-300">Sovereign Living: Identify properties with energy independence (solar/water) and regenerative design credentials.</span>
                        </div>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                        <TrendingUp className="w-6 h-6 text-emerald-400 mb-3" />
                        <p className="text-sm text-stone-200">Legacy portals were built to sell concrete boxes. Habitat.s is built to find your sanctuary.
See why the modern nomad is switching.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* UNIT TYPES */}
        <section className="sm:px-6 mt-24 pr-4 pl-4" id="units">
            <div className="flex flex-col md:flex-row mb-12 items-end justify-between">
                <div className="max-w-xl">
                    <h2 className="sm:text-4xl text-3xl font-medium text-stone-900 tracking-tight mb-4">The Future is Regenerative.</h2>
                    <p className="font-light text-stone-500">We don't just list homes; we verify habitats. From off-grid solar capacity to high-speed fiber availability, we bridge the gap between nature and technology.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Unit 1 */}
                <div className="group hover:shadow-xl transition-all duration-300 bg-white rounded-3xl pt-2 pr-2 pb-2 pl-2 relative shadow-sm">
                    <div className="h-64 rounded-2xl overflow-hidden mb-4 relative">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d0f7b419-0647-4406-80bd-b7728a0d3512_1600w.png" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" alt="Villa" />
                        <div className="text-xs font-semibold bg-white/90 rounded-full pt-1 pr-3 pb-1 pl-3 absolute top-4 right-4 backdrop-blur">Lifestyle Search</div>
                    </div>
                    <div className="pr-4 pb-6 pl-4">
                        <h3 className="text-xl font-semibold text-stone-900 mb-2">Curated Discovery</h3>
                        <p className="text-sm text-stone-500 mb-4">Access a global network of verified, wellness-centric properties that you won't find on traditional portals.</p>
                        <button className="hover:bg-stone-900 hover:text-white transition-colors flex gap-2 font-medium text-stone-900 w-full border-stone-200 border rounded-xl pt-3 pb-3 gap-x-2 gap-y-2 items-center justify-center">
                            Check Details <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Unit 2 */}
                <div className="group relative bg-white p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="h-64 rounded-2xl overflow-hidden mb-4 relative">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9d57bd6e-bcf3-463e-8d26-639cdfed7cb4_1600w.jpg" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" alt="Penthouse" />
                        <div className="text-xs font-semibold bg-white/90 rounded-full pt-1 pr-3 pb-1 pl-3 absolute top-4 right-4 backdrop-blur">Energy P2P Marketplace</div>
                    </div>
                    <div className="px-4 pb-6">
                        <h3 class="text-xl font-semibold text-stone-900 mb-2">Sovereign Living</h3>
                        <p className="text-sm text-stone-500 mb-4">Filter for energy independence. Find homes that offer water purification, solar sovereignty, and food gardens.</p>
                        <button className="w-full py-3 rounded-xl border border-stone-200 text-stone-900 font-medium hover:bg-stone-900 hover:text-white transition-colors flex items-center justify-center gap-2">
                            Check Details <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Unit 3 */}
                <div className="group relative bg-white p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className="h-64 rounded-2xl overflow-hidden mb-4 relative">
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e158eda3-1e80-4d87-a10d-8bfd444a26f3_1600w.jpg" className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover" alt="Apartment" />
                        <div className="text-xs font-semibold bg-white/90 rounded-full pt-1 pr-3 pb-1 pl-3 absolute top-4 right-4 backdrop-blur">Fractional Ownership</div>
                    </div>
                    <div className="px-4 pb-6">
                        <h3 className="text-xl font-semibold text-stone-900 mb-2">Tokenized Growth</h3>
                        <p className="text-sm text-stone-500 mb-4">(Future Feature)&nbsp;Participate in the value you create. Our roadmap includes fractional ownership models for the communities you love.</p>
                        <button className="w-full py-3 rounded-xl border border-stone-200 text-stone-900 font-medium hover:bg-stone-900 hover:text-white transition-colors flex items-center justify-center gap-2">
                            Check Details <ArrowUpRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </section>

        {/* LEAD MAGNET */}
        <section className="mt-24">
            <div className="sm:p-12 lg:p-20 flex flex-col overflow-hidden text-center bg-stone-100 rounded-[2rem] pt-8 pr-8 pb-8 pl-8 relative items-center">
                {/* Decorative blurred circles */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

                <div className="relative z-10 max-w-2xl">
                    <span className="text-stone-500 font-medium uppercase text-xs tracking-wider mb-4 block">Exclusive Offer</span>
                    <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-stone-900 mb-6">Get a Detailed Project Presentation</h2>
                    <p className="text-lg font-light text-stone-600 mb-8">We’ve prepared a comprehensive presentation with detailed ROI calculations.</p>

                    <a href="#contact" className="inline-flex items-center gap-3 bg-stone-900 text-white px-8 py-4 rounded-full hover:bg-stone-800 transition-all hover:scale-105 shadow-lg shadow-stone-900/10">
                        <span>Get Presentation with Prices &amp; ROI</span>
                        <Download className="w-4 h-4" />
                    </a>

                </div>
            </div>
        </section>

        {/* VIDEO & ABOUT US */}
        <section id="video" className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center px-4 sm:px-6">
            {/* Video Column */}
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl group cursor-pointer bg-black">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d39f590-8fe6-419c-9f3a-9291159b4018_1600w.png" className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity" alt="Video thumbnail" />
                <div className="flex absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform">
                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center pl-1">
                            <Play className="fill-stone-900 w-[24px] h-[24px] text-stone-900" />
                        </div>
                    </div>
                </div>
            </div>

            {/* About Content */}
            <div>
                <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-stone-900 mb-6">Why Investors Choose Estetico Estate</h2>
                <div className="prose prose-stone mb-8">
                    <p className="text-stone-500 text-lg leading-relaxed font-light">We work exclusively with carefully vetted and high-potential projects in Bali. Our goal is to help our clients make well-informed and strategic investment decisions.</p>
                </div>

                <div className="space-y-4">
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-stone-900 mt-0.5 flex-shrink-0" />
                        <span className="text-stone-700">Thorough due diligence of developers</span>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-stone-900 mt-0.5 flex-shrink-0" />
                        <span className="text-stone-700">Focus on liquidity &amp; high ROI potential</span>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-stone-900 mt-0.5 flex-shrink-0" />
                        <span className="text-stone-700">Full transparency &amp; legal safety</span>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle2 className="w-6 h-6 text-stone-900 mt-0.5 flex-shrink-0" />
                        <span className="text-stone-700">End-to-end support including resale assistance</span>
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-stone-200">
                    <p className="text-xl font-medium text-stone-900 italic">"For us, reputation matters more than a quick deal."</p>
                </div>
            </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="mt-24 mb-12">
            <div className="bg-white rounded-[2rem] p-8 sm:p-12 lg:p-16 shadow-xl border border-stone-100 flex flex-col lg:flex-row gap-12 lg:gap-24">

                <div className="lg:w-1/2">
                    <h2 className="text-4xl sm:text-5xl font-medium tracking-tight text-stone-900 mb-6">Contact Us</h2>
                    <p className="text-stone-500 text-lg font-light mb-10 max-w-md">Let us help you find a property that will be not only a profitable asset, but also a place of energy, inspiration, and growth.</p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="block text-sm text-stone-400">Email</span>
                                <a href="mailto:office@estetico.estate" className="hover:underline text-lg font-medium text-stone-900">info@habitats.com</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 group">
                            <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="block text-sm text-stone-400">Phone</span>
                                <a href="tel:+6281239838440" className="text-lg font-medium text-stone-900 hover:underline">+62 812 3983 8440</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2 bg-stone-50 rounded-3xl p-8">
                    <form action="#" className="space-y-5">
                        <div className="grid grid-cols-2 gap-5">
                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">First Name</label>
                                <input type="text" className="w-full bg-white border-0 rounded-xl px-4 py-3 text-stone-900 placeholder-stone-300 focus:ring-2 focus:ring-stone-900 focus:outline-none transition-shadow" placeholder="John" />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Last Name</label>
                                <input type="text" className="w-full bg-white border-0 rounded-xl px-4 py-3 text-stone-900 placeholder-stone-300 focus:ring-2 focus:ring-stone-900 focus:outline-none transition-shadow" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Email</label>
                            <input type="email" className="w-full bg-white border-0 rounded-xl px-4 py-3 text-stone-900 placeholder-stone-300 focus:ring-2 focus:ring-stone-900 focus:outline-none transition-shadow" placeholder="john@example.com" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-stone-500 uppercase tracking-wide">Phone</label>
                            <input type="tel" className="w-full bg-white border-0 rounded-xl px-4 py-3 text-stone-900 placeholder-stone-300 focus:ring-2 focus:ring-stone-900 focus:outline-none transition-shadow" placeholder="+1 (555) 000-0000" />
                        </div>

                        <button type="button" className="w-full bg-stone-900 text-white font-medium py-4 rounded-xl mt-4 hover:bg-stone-800 transition-colors flex items-center justify-center gap-2 group">
                            Get project presentation
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>
            </div>
        </section>

        {/* FOOTER */}
        <footer className="flex flex-col md:flex-row gap-6 border-stone-200 border-t pt-8 pr-6 pb-8 pl-6 gap-x-6 gap-y-6 items-center justify-between">
            <div className="flex items-center gap-2">
                <span className="font-semibold text-stone-900 tracking-tight">habitat.s</span>
            </div>

            <div className="flex gap-8 text-sm font-medium text-stone-500 gap-x-8 gap-y-8">
                <a href="#about" className="hover:text-stone-900 transition-colors">About</a>
                <a href="#units" className="hover:text-stone-900 transition-colors">Lifestyle</a>
                <a href="/#video" className="hover:text-stone-900 transition-colors">Team</a>
                <a href="#contact" className="hover:text-stone-900 transition-colors">Contact</a>
            </div>

            <div className="text-xs text-stone-400">© 2026 Habitat.s</div>
        </footer>

      </div>
    </div>
  );
};

export default EsteticoTemplate;
