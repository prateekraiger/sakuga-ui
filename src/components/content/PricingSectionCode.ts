export const PRICING_SECTION_CODE = `import React, { useState } from 'react';
import { Check, CheckCircle2, Star } from 'lucide-react';

const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const plans = [
    {
      name: 'Starter',
      price: billingCycle === 'monthly' ? '$0' : '$0',
      period: billingCycle === 'monthly' ? '/mo' : '/yr',
      buttonText: 'Start Building',
      featured: false,
      features: [
        'Up to 1K API calls per month',
        'Basic data ingestion pipelines',
        'Web console access',
        'Community support',
        'Basic monitoring & alerts',
      ],
    },
    {
      name: 'Professional',
      price: billingCycle === 'monthly' ? '$49' : '$470',
      period: billingCycle === 'monthly' ? '/mo' : '/yr',
      buttonText: 'Upgrade to Pro',
      featured: true,
      tag: 'Most Popular',
      image: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4ca8123b-2b44-4ef6-9ce7-51db6671104c_800w.jpg',
      features: [
        'Unlimited API calls',
        'Advanced reasoning models & orchestration',
        'Performance analytics & insights',
        'Custom workflows & integrations',
        'Priority support with SLA',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: billingCycle === 'monthly' ? '/mo' : '/yr',
      buttonText: 'Contact Sales',
      featured: false,
      features: [
        'On‑premises & private cloud deployment',
        'Advanced security & compliance controls',
        'Dedicated support team & onboarding',
        'Team management & usage analytics',
        'Custom model training & fine‑tuning',
      ],
    },
  ];

  return (
    <section className="isolate overflow-hidden pt-24 pb-24 relative bg-[#050505]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(255,255,255,0.05),transparent_60%)]"></div>

      <div className="z-10 md:px-8 max-w-7xl mx-auto px-6 relative">
        <div className="text-center">
          <h2 className="sm:text-5xl text-4xl font-medium text-white tracking-tight font-display animate-[fadeSlideIn_1.0s_ease-out_0.1s_both]">
            Pricing Plans
          </h2>

          <div className="flex mt-6 gap-x-4 items-center justify-center animate-[fadeSlideIn_1.0s_ease-out_0.2s_both]">
            <span className={\`text-sm transition-colors \${billingCycle === 'monthly' ? 'text-white' : 'text-white/70'}\`}>Monthly</span>
            <button
              id="billingToggle"
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="relative inline-flex h-8 w-16 items-center rounded-full bg-white/10 p-1 ring-1 ring-white/15 transition hover:bg-white/15"
            >
              <span
                id="billingKnob"
                className={\`inline-flex h-6 w-6 rounded-full bg-white shadow-[0_2px_8px_rgba(0,0,0,0.25)] transition-transform will-change-transform \${
                  billingCycle === 'annual' ? 'translate-x-8' : 'translate-x-0'
                }\`}
              />
            </button>
            <span className={\`text-sm transition-colors \${billingCycle === 'annual' ? 'text-white' : 'text-white/70'}\`}>
              Annual
              <span className="ml-2 inline-flex items-center rounded-full bg-amber-400/10 px-2 py-0.5 text-[10px] text-amber-300 ring-1 ring-amber-300/20">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 mt-10">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={\`animate-[fadeSlideIn_1.0s_ease-out_both] border-white/10 border rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-500 hover:border-white/20 hover:bg-white/5 \${
                plan.featured ? 'ring-amber-300/10 ring-1 pt-2 px-2 pb-2' : 'p-6'
              }\`}
              style={{ animationDelay: \`\${0.3 + index * 0.1}s\` }}
            >
              {plan.featured ? (
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-white/[0.06] to-transparent h-full flex flex-col">
                  <div className="absolute inset-0 -z-10">
                    <img
                      src={plan.image}
                      alt="Premium background"
                      className="h-48 w-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-[radial-gradient(60%_80%_at_80%_0%,rgba(251,191,36,0.25),transparent_60%)]"></div>
                  </div>

                  <div className="p-6 flex-grow">
                    <div className="flex items-start justify-between">
                      <div>
                        <div className="text-sm uppercase tracking-[0.18em] text-white/70 font-display">
                          {plan.name}
                        </div>
                        <div className="mt-2 flex items-end gap-2">
                          <div className="text-4xl font-medium tracking-tight text-white font-display">
                            {plan.price}
                          </div>
                          <div className="text-sm text-white/60 mb-1">{plan.period}</div>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/15 px-2.5 py-1 text-[10px] text-amber-300 ring-1 ring-amber-300/25 font-medium uppercase tracking-wider">
                        <Star className="h-3.5 w-3.5 fill-amber-300/20" /> {plan.tag}
                      </span>
                    </div>

                    <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-amber-300 to-amber-400 px-4 py-3 text-sm font-semibold tracking-tight text-black shadow-[0_10px_30px_rgba(251,191,36,0.25)] transition-all hover:from-amber-200 hover:to-amber-300 hover:scale-[1.02] active:scale-95">
                      {plan.buttonText}
                    </button>

                    <ul className="mt-8 space-y-3.5 text-sm text-white/85">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm uppercase tracking-[0.18em] text-white/60 font-display">{plan.name}</div>
                      <div className="mt-2 flex items-end gap-2">
                        <div className="text-4xl font-medium tracking-tight text-white font-display">
                          {plan.price}
                        </div>
                        <div className="text-sm text-white/50 mb-1">{plan.period}</div>
                      </div>
                    </div>
                  </div>

                  <button className={\`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold tracking-tight transition-all active:scale-95 \${
                    plan.name === 'Enterprise'
                      ? 'border border-white/15 bg-white/5 text-white/90 hover:bg-white/10 hover:border-white/30'
                      : 'bg-white text-black hover:bg-white/90 hover:scale-[1.02]'
                  }\`}>
                    {plan.buttonText}
                  </button>

                  <ul className="mt-8 space-y-3.5 text-sm text-white/75">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>

        <p className="animate-[fadeSlideIn_1.0s_ease-out_0.6s_both] text-xs text-white/50 text-center mt-8">
          All plans include 14-day free trial. No setup fees.
        </p>
      </div>
    </section>
  );
};

export default PricingSection;
`;
