export const REPOSITORY_CODE = `import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

const Repository = () => {
  const [copied, setCopied] = useState(false);

  // Escaped backticks for nested code string
  const codeString = \`
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Repository = () => {
  return (
    <section className="relative w-full overflow-hidden bg-zinc-950 py-20 lg:py-40">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-semibold text-white md:text-6xl">
            The Repository
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Explore our open-source component library, meticulously crafted with React, TypeScript, and Tailwind CSS.
          </p>
          <a
            href="https://github.com/your-repo/your-library"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 px-6 py-3 text-base font-medium text-white shadow-sm transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-700"
          >
            View on GitHub
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>

        <div className="relative mt-16 rounded-3xl border border-zinc-700 bg-zinc-900/50 p-6 lg:p-10">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-black opacity-70"></div>

          <div className="relative overflow-hidden rounded-2xl bg-zinc-950/70 p-4 lg:p-6">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

            <pre className="overflow-x-auto text-sm text-zinc-300">
              <code>
{\`
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const AnimatedFeature = ({ title, description, icon }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className="flex flex-col items-start rounded-xl border border-zinc-700 bg-zinc-900/50 p-6 text-left"
  >
    <div className="rounded-full bg-zinc-700/50 p-3 text-white">{icon}</div>
    <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
    <p className="mt-2 text-zinc-400">{description}</p>
  </motion.div>
);

const Repository = () => {
  return (
    <section className="relative w-full overflow-hidden bg-zinc-950 py-20 lg:py-40">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-5xl font-semibold text-white md:text-6xl">
            The Repository
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Explore our open-source component library, meticulously crafted with React, TypeScript, and Tailwind CSS.
          </p>
          <a
            href="https://github.com/your-repo/your-library"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 px-6 py-3 text-base font-medium text-white shadow-sm transition-all duration-300 hover:border-zinc-600 hover:bg-zinc-700"
          >
            View on GitHub
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>

        <div className="relative mt-16 rounded-3xl border border-zinc-700 bg-zinc-900/50 p-6 lg:p-10">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-black opacity-70"></div>

          <div className="relative overflow-hidden rounded-2xl bg-zinc-950/70 p-4 lg:p-6">
            {/* Some placeholder code for demonstration */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

            <pre className="overflow-x-auto text-sm text-zinc-300">
              <code>
                {/* Real code content would go here */}
                {/* This is a simplified example */}
                {\`<Button variant="primary">Click Me</Button>\`}
              </code>
            </pre>

            <button className="absolute right-4 top-4 rounded-full bg-zinc-700/70 p-2 text-white transition-colors hover:bg-zinc-600/70">
              <Copy className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <AnimatedFeature
              title="Reusable Components"
              description="Build faster with our collection of accessible and customizable UI components."
              icon={<Laptop className="h-5 w-5" />}
            />
            <AnimatedFeature
              title="Tailwind CSS"
              description="Styled with utility-first classes for maximum flexibility and rapid development."
              icon={<Brush className="h-5 w-5" />}
            />
            <AnimatedFeature
              title="Open Source"
              description="Contribute to our growing library and help shape the future of UI development."
              icon={<Github className="h-5 w-5" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Repository;
\`}
              </code>
            </pre>

            <button
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
              }}
              className="absolute right-4 top-4 rounded-full bg-zinc-700/70 p-2 text-white transition-colors hover:bg-zinc-600/70"
            >
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Repository;
`;
