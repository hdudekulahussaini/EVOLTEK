import React from 'react';

export default function Features() {
  const features = [
    {
      title: 'Solid-State Cell Matrix',
      description: 'Silicon-graphene anode composite delivering 480 Wh/kg specific energy density with non-flammable ceramic electrolytes.',
      tag: 'Energy Storage',
      metric: '480 Wh/kg',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2">
          <rect x="2" y="7" width="16" height="10" rx="2" ry="2"/>
          <line x1="22" y1="11" x2="22" y2="13"/>
        </svg>
      )
    },
    {
      title: 'Neural Torque Vectoring',
      description: 'Sub-millisecond independent wheel slip regulation powered by dual edge AI accelerators executing 25,000 feedback cycles/sec.',
      tag: 'Control Systems',
      metric: '0.4 ms Latency',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="m4.93 4.93 4.24 4.24"/>
          <path d="m14.83 9.17 4.24-4.24"/>
          <path d="m14.83 14.83 4.24 4.24"/>
          <path d="m9.17 14.83-4.24 4.24"/>
          <circle cx="12" cy="12" r="2"/>
        </svg>
      )
    },
    {
      title: '800V HyperCharge Network',
      description: 'Ultra-fast direct charging protocol charging from 10% to 80% in under 9 minutes with active cryogenic cooled couplings.',
      tag: 'Infrastructure',
      metric: '9 min 10-80%',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-emerald)" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      )
    },
    {
      title: 'Quantum Thermal Management',
      description: 'Phase-change microchannel liquid jacket ensuring cells maintain optimal 24°C temperature envelope regardless of ambient extremes.',
      tag: 'Thermal Dynamics',
      metric: '±0.5°C Stability',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" strokeWidth="2">
          <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="features" className="py-20 border-t border-white/10" style={{ padding: '80px 0', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-[50px]">
          <span className="badge inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">Architectural Breakthroughs</span>
          <h2 className="text-[2.4rem] font-extrabold tracking-[-0.02em] mb-3 text-white">
            Built with Zero Compromises
          </h2>
          <p className="text-slate-400 max-w-[600px] mx-auto text-[1.05rem] leading-relaxed">
            Every subsystem is engineered to push beyond the physical limits of conventional electric vehicle architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="glass-card p-[30px] flex flex-col justify-between rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-emerald-500/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-[46px] h-[46px] rounded-xl bg-white/[0.04] flex items-center justify-center border border-white/10">
                    {feat.icon}
                  </div>
                  <span className="text-[0.75rem] uppercase tracking-[0.06em] text-slate-400 font-semibold">
                    {feat.tag}
                  </span>
                </div>

                <h3 className="text-[1.25rem] font-bold mb-2.5 text-white">
                  {feat.title}
                </h3>
                <p className="text-[0.92rem] text-slate-400 leading-[1.6] mb-6">
                  {feat.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[0.8rem] text-slate-500">Benchmark:</span>
                <span className="font-mono font-bold text-white text-[0.95rem]">
                  {feat.metric}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
