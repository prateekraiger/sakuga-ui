export const TANIA_LANDING_CODE = `import React, { useState } from 'react';
import {
  Menu,
  Search,
  ShoppingBag,
  ArrowRight,
  ChevronDown,
  Asterisk,
  ArrowUpRight,
  Plus,
  CreditCard,
  Wallet,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';

const TaniaLanding: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-[#fcfcfc] text-[#0a0a0a] min-h-screen font-sans antialiased selection:bg-[#0a0a0a] selection:text-white overflow-x-hidden w-full">
      <style>{
        \`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@200;300;400&display=swap');

        .font-serif { font-family: 'Cormorant Garamond', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }

        /* Custom Colors if Tailwind config doesn't pick them up dynamically */
        .bg-luxury-black { background-color: #0a0a0a; }
        .text-luxury-black { color: #0a0a0a; }
        .bg-luxury-white { background-color: #fcfcfc; }
        .text-luxury-white { color: #fcfcfc; }
        .border-luxury-black { border-color: #0a0a0a; }
        .bg-luxury-grey { background-color: #e5e5e5; }

        /* Utilities */
        .tracking-ultra-tight { letter-spacing: -0.05em; }

        /* Custom scrollbar hide */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

        /* Animations */
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }

        /* Zoom effect */
        .img-zoom-container { overflow: hidden; }
        .img-zoom { transition: transform 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .group:hover .img-zoom { transform: scale(1.05); }
      \`}</style>

      {/* Navigation */}      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#fcfcfc]/90 backdrop-blur-sm border-b border-black/5">
        <div className="max-w-[1920px] mx-auto px-6 h-20 flex items-center justify-between">
          {/* Mobile Menu Trigger */}          <button
            className="lg:hidden p-2 -ml-2 hover:opacity-50 transition-opacity"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu width="24" strokeWidth="1.5" />
          </button>

          {/* Desktop Nav Left */}          <nav className="hidden lg:flex gap-8 text-xs uppercase tracking-widest font-medium text-black/60">
            <a href="#" className="hover:text-black transition-colors">Collections</a>
            <a href="#" className="hover:text-black transition-colors">Atelier</a>
            <a href="#" className="hover:text-black transition-colors">Maison</a>
          </nav>

          {/* Logo */}          <a href="#" className="absolute left-1/2 -translate-x-1/2 text-center group">
            <h1 className="font-serif text-3xl md:text-4xl tracking-tighter uppercase text-[#0a0a0a] leading-none group-hover:opacity-80 transition-opacity">
              House of Tania
            </h1>
          </a>

          {/* Right Actions */}          <div className="flex items-center gap-6">
            <button className="hidden lg:block hover:opacity-50 transition-opacity">
              <span className="text-xs uppercase tracking-widest font-medium">Account</span>
            </button>
            <button className="hover:opacity-50 transition-opacity">
              <Search width="20" strokeWidth="1.5" />
            </button>
            <button className="relative hover:opacity-50 transition-opacity">
              <ShoppingBag width="20" strokeWidth="1.5" />
              <span className="absolute -top-1 -right-1 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0a0a0a] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0a0a0a]"></span>
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Image */}        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"
            alt="Luxury Fashion Campaign"
            className="w-full h-full object-cover object-top opacity-90"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Hero Content */}        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <span className="text-white text-xs md:text-sm uppercase tracking-[0.3em] mb-4 opacity-0 animate-fade-in font-medium">Fall Winter 2024</span>
          <h2 className="text-white font-serif text-6xl md:text-8xl lg:text-9xl tracking-tighter mb-8 opacity-0 animate-fade-in delay-300">
            Silence &amp; Form
          </h2>
          <a href="#" className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border border-white/30 rounded-full hover:bg-white hover:text-black opacity-0 animate-fade-in delay-500">
            <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
            <span className="relative flex items-center gap-2 text-xs uppercase tracking-widest">
              Discover Collection
              <ArrowRight width="14" strokeWidth="1.5" />
            </span>
          </a>
        </div>

        {/* Scroll Indicator */}        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce duration-[2000ms]">
          <ChevronDown width="24" strokeWidth="1.5" />
        </div>
      </section>

      {/* The Philosophy / Statement */}      <section className="py-24 md:py-32 px-6 bg-luxury-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 opacity-40 flex justify-center">
             <Asterisk width="24" strokeWidth="1.5" />
          </div>
          <p className="font-serif text-3xl md:text-5xl leading-tight md:leading-snug tracking-tight text-luxury-black font-light">
            We believe in the quiet authority of impeccable design.
            <span className="text-black/40"> House of Tania creates garments that exist beyond the trend cycle, focused on silhouette, texture, and an understated elegance.</span>
          </p>
          <div className="mt-12">
            <a href="#" className="text-xs uppercase tracking-widest border-b border-black pb-1 hover:text-black/60 hover:border-black/60 transition-colors">Read the Manifesto</a>
          </div>
        </div>
      </section>

      {/* Categories / Asymmetrical Grid */}      <section className="px-4 md:px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-auto lg:h-[800px]">

          {/* Item 1: Large Left */}          <div className="lg:col-span-7 relative group cursor-pointer h-[500px] lg:h-full overflow-hidden">
            <div className="img-zoom-container h-full w-full">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" className="img-zoom w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Coats" />
            </div>
            <div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black/50 to-transparent">
              <h3 className="text-white font-serif text-4xl tracking-tight mb-2">Outerwear</h3>
              <p className="text-white/80 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">Shop The Edit</p>
            </div>
          </div>

          {/* Right Column Stack */}          <div className="lg:col-span-5 flex flex-col gap-4 h-full">
            {/* Item 2 */}            <div className="relative flex-1 group cursor-pointer overflow-hidden min-h-[300px]">
              <div className="img-zoom-container h-full w-full">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" className="img-zoom w-full h-full object-cover object-top" alt="Dresses" />
              </div>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-white font-serif text-3xl tracking-tight">Evening Wear</h3>
              </div>
              <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="text-white" width="20" />
              </div>
            </div>

            {/* Item 3 */}            <div className="relative flex-1 group cursor-pointer overflow-hidden min-h-[300px]">
              <div className="img-zoom-container h-full w-full">
                <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" className="img-zoom w-full h-full object-cover" alt="Accessories" />
              </div>
               <div className="absolute bottom-6 left-6">
                <h3 className="text-white font-serif text-3xl tracking-tight">Accessories</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Products (Catalogue) */}      <section className="py-12 md:py-24 bg-stone-50 overflow-hidden w-full">
        <div className="max-w-[1920px] mx-auto">
          <div className="px-6 mb-12 flex justify-between items-end">
            <div>
              <span className="text-xs uppercase tracking-widest text-black/50 mb-2 block">New Arrivals</span>
              <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-luxury-black">The Edit</h2>
            </div>
            <a href="#" className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest hover:opacity-60 transition-opacity">
              View All
              <ArrowRight width="16" strokeWidth="1.5" />
            </a>
          </div>

          {/* Horizontal Scroll Container */}          <div className="w-full overflow-x-auto no-scrollbar pb-12 px-6">
            <div className="flex gap-4 w-max">

              {/* Product Card 1 */}              <div className="flex-none w-[280px] md:w-[400px] group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-luxury-grey/30">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" alt="The Silk Dress" className="w-full h-full object-cover transition duration-700 ease-in-out group-hover:scale-105" />
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-black h-10 w-10 flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-colors">
                      <Plus width="20" strokeWidth="1.5" />
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-xl tracking-tight mb-1 group-hover:underline decoration-1 underline-offset-4">The Silk Slip</h3>
                    <p className="text-xs text-black/50">Midnight Blue</p>
                  </div>
                  <span className="text-sm font-medium">$890</span>
                </div>
              </div>

              {/* Product Card 2 */}              <div className="flex-none w-[280px] md:w-[400px] group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-luxury-grey/30">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" alt="Wool Blazer" className="w-full h-full object-cover transition duration-700 ease-in-out group-hover:scale-105" />
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-black h-10 w-10 flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-colors">
                       <Plus width="20" strokeWidth="1.5" />
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-xl tracking-tight mb-1 group-hover:underline decoration-1 underline-offset-4">Structured Wool Blazer</h3>
                    <p className="text-xs text-black/50">Charcoal</p>
                  </div>
                  <span className="text-sm font-medium">$1,250</span>
                </div>
              </div>

              {/* Product Card 3 */}              <div className="flex-none w-[280px] md:w-[400px] group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-luxury-grey/30">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp" alt="Cashmere Knit" className="w-full h-full object-cover transition duration-700 ease-in-out group-hover:scale-105" />
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-black h-10 w-10 flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-colors">
                       <Plus width="20" strokeWidth="1.5" />
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-xl tracking-tight mb-1 group-hover:underline decoration-1 underline-offset-4">Cashmere Knit</h3>
                    <p className="text-xs text-black/50">Oatmeal</p>
                  </div>
                  <span className="text-sm font-medium">$650</span>
                </div>
              </div>

               {/* Product Card 4 */}               <div className="flex-none w-[280px] md:w-[400px] group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-luxury-grey/30">
                  <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp" alt="Trousers" className="w-full h-full object-cover transition duration-700 ease-in-out group-hover:scale-105" />
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-black h-10 w-10 flex items-center justify-center rounded-full hover:bg-black hover:text-white transition-colors">
                       <Plus width="20" strokeWidth="1.5" />
                    </button>
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-serif text-xl tracking-tight mb-1 group-hover:underline decoration-1 underline-offset-4">Pleated Trousers</h3>
                    <p className="text-xs text-black/50">Black</p>
                  </div>
                  <span className="text-sm font-medium">$520</span>
                </div>
              </div>

              {/* Spacer for right padding */}              <div className="w-2 flex-none"></div>

            </div>
          </div>
        </div>
      </section>

      {/* Featured Feature: Video/Mood */}      {/* Fixed: Grid layout overlap and overflow issues */}      <section className="relative w-full py-24 bg-[#0a0a0a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp" className="w-full h-full object-cover grayscale" alt="Background Texture" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-xs uppercase tracking-[0.2em] text-white/60 mb-6 block">The Atelier</span>
            <h2 className="font-serif text-5xl md:text-7xl tracking-tighter mb-8 leading-none">Crafted for<br/>Eternity</h2>
            <p className="text-white/70 font-light text-lg mb-10 max-w-md">
              Every seam is intentional. Every fabric is sourced with an obsession for quality. We don't just make clothes; we engineer confidence.
            </p>
            <button className="bg-white text-black px-8 py-4 text-xs uppercase tracking-widest hover:bg-neutral-200 transition-colors">
              Explore Our Process
            </button>
          </div>

          {/* Image composition - Fixed container constraints */}          <div className="order-1 lg:order-2 h-[400px] md:h-[500px] w-full relative">
             <div className="absolute top-0 right-0 w-[85%] h-[85%] bg-neutral-900 overflow-hidden">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp" className="w-full h-full object-cover opacity-80 hover:scale-110 transition duration-[1.5s]" alt="Tailoring" />
             </div>
             <div className="absolute bottom-0 left-0 w-[60%] h-[60%] bg-neutral-800 border-4 border-[#0a0a0a] overflow-hidden shadow-2xl">
              <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" className="w-full h-full object-cover opacity-90 hover:scale-110 transition duration-[1.5s]" alt="Detail" />
             </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}      <section className="py-24 px-6 border-b border-black/5 bg-luxury-white">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="font-serif text-3xl md:text-4xl tracking-tight mb-4">Join the Inner Circle</h3>
          <p className="text-sm text-black/60 mb-8 font-light">Receive early access to collections and exclusive atelier insights.</p>

          <form className="flex flex-col md:flex-row gap-4 w-full max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="relative flex-grow group">
              <input type="email" placeholder=" " className="peer w-full bg-transparent border-b border-black/20 py-3 text-sm focus:outline-none focus:border-black transition-colors" required />
              <label className="absolute left-0 top-3 text-sm text-black/40 pointer-events-none transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-black peer-valid:-top-4 peer-valid:text-xs">Email Address</label>
            </div>
            <button type="submit" className="md:w-auto w-full py-3 px-8 bg-[#0a0a0a] text-white text-xs uppercase tracking-widest hover:bg-neutral-800 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}      <footer className="bg-luxury-white py-16 px-6">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <a href="#" className="block font-serif text-2xl tracking-tighter uppercase mb-6">House of Tania</a>
            <p className="text-xs text-black/40 leading-relaxed max-w-xs">
              Redefining luxury through the lens of modern minimalism and timeless craft.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="opacity-40 hover:opacity-100 transition-opacity"><Instagram width="18" /></a>
              <a href="#" className="opacity-40 hover:opacity-100 transition-opacity"><Facebook width="18" /></a>
              <a href="#" className="opacity-40 hover:opacity-100 transition-opacity"><Twitter width="18" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium mb-6">Shop</h4>
            <ul className="space-y-3 text-sm font-light text-black/60">
              <li><a href="#" className="hover:text-black transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Ready to Wear</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Gift Cards</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium mb-6">Client Services</h4>
            <ul className="space-y-3 text-sm font-light text-black/60">
              <li><a href="#" className="hover:text-black transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Shipping &amp; Returns</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Book an Appointment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest font-medium mb-6">Legal</h4>
            <ul className="space-y-3 text-sm font-light text-black/60">
              <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1920px] mx-auto mt-16 pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-black/30 uppercase tracking-widest">© 2024 House of Tania. All Rights Reserved.</p>
          <div className="flex gap-4">
            <CreditCard width="16" className="opacity-20" />
            <Wallet width="16" className="opacity-20" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TaniaLanding;
`;
