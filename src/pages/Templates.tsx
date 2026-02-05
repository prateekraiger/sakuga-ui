import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, LayoutTemplate, ShoppingCart, Star, Check } from 'lucide-react';
import { Header } from '../components/layouts';

const Templates: React.FC = () => {
  const templates = [
    {
      id: 'aether',
      title: 'Aether',
      description: 'A futuristic, dark-themed template designed for SaaS and tech startups. Features deep navigation and glassmorphism.',
      price: 29,
      path: '/templates/aether',
      features: ['Dark Mode', 'Glassmorphism', 'SaaS Focus'],
      color: 'blue'
    },
    {
      id: 'maskoko',
      title: 'MasKoko Agency',
      description: 'A vibrant, bold portfolio template for creative agencies and digital studios. High energy and smooth transitions.',
      price: 49,
      path: '/templates/maskoko',
      features: ['Creative Portfolio', 'Bold Typography', 'Smooth Animations'],
      color: 'purple'
    },
    {
      id: 'start-agency',
      title: 'Start Agency',
      description: 'Clean, professional, and trustworthy. The perfect starting point for consulting firms and corporate agencies.',
      price: 39,
      path: '/templates/start-agency',
      features: ['Corporate', 'Clean Design', 'Trustworthy'],
      color: 'emerald'
    },
    {
      id: 'horizon',
      title: 'Horizon',
      description: 'A procedurally generated 3D coastal sunset experience. Features real-time water physics and dynamic lighting.',
      price: 59,
      path: '/templates/horizon',
      features: ['3D WebGL', 'Interactive', 'Procedural Generation'],
      color: 'amber'
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500 selection:text-white">
      <Header />

      <div className="relative pt-32 pb-20 px-6 container mx-auto max-w-7xl">

        {/* Background Gradients */}
        <div className="fixed inset-0 pointer-events-none z-0">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10">
            {/* Page Header */}
            <div className="text-center mb-20 max-w-3xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
                    <LayoutTemplate className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">Premium Templates</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                    <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-neutral-500">
                        Production Ready
                    </span>
                    <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                        Templates
                    </span>
                </h1>

                <p className="text-xl text-neutral-400 leading-relaxed">
                    Complete, multi-page website templates built with React 19 and Tailwind CSS v4.
                    Save hundreds of hours of development time.
                </p>
            </div>

            {/* Templates Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {templates.map((template) => (
                    <div
                        key={template.id}
                        className="group relative flex flex-col bg-zinc-900/40 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
                    >
                        {/* Preview Placeholder */}
                        <Link to={template.path} className="aspect-[4/3] bg-zinc-800/50 relative overflow-hidden group-hover:opacity-90 transition-opacity">
                            <div className={`absolute inset-0 bg-gradient-to-br from-${template.color}-500/20 to-transparent opacity-50`} />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className={`w-32 h-32 rounded-full bg-${template.color}-500/20 blur-3xl`} />
                                <div className="relative z-10 px-6 py-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-full text-sm font-medium tracking-wide uppercase">
                                    View Demo
                                </div>
                            </div>
                        </Link>

                        {/* Content */}
                        <div className="p-8 flex flex-col flex-grow">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold">{template.title}</h3>
                                <div className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                                    <span className="text-sm font-bold text-white">${template.price}</span>
                                </div>
                            </div>

                            <p className="text-neutral-400 text-sm leading-relaxed mb-6 flex-grow">
                                {template.description}
                            </p>

                            {/* Features List */}
                            <ul className="space-y-3 mb-8">
                                {template.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-sm text-neutral-300">
                                        <Check className="w-4 h-4 text-green-400" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Actions */}
                            <div className="grid grid-cols-2 gap-3 mt-auto">
                                <Link
                                    to={template.path}
                                    className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors text-sm font-semibold"
                                >
                                    <span>Preview</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <button className="flex items-center justify-center gap-2 px-4 py-3 bg-white text-black rounded-xl hover:bg-neutral-200 transition-colors text-sm font-bold">
                                    <ShoppingCart className="w-4 h-4" />
                                    <span>Buy Now</span>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
