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
    <section id="features" style={{ padding: '80px 0', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <span className="badge" style={{ marginBottom: '12px' }}>Architectural Breakthroughs</span>
          <h2 style={{ fontSize: '2.4rem', fontWeight: '800', letterSpacing: '-0.02em', marginBottom: '12px' }}>
            Built with Zero Compromises
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
            Every subsystem is engineered to push beyond the physical limits of conventional electric vehicle architectures.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px'
        }}>
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '30px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--border-subtle)'
                  }}>
                    {feat.icon}
                  </div>
                  <span style={{
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--text-dim)',
                    fontWeight: '600'
                  }}>
                    {feat.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '10px' }}>
                  {feat.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '24px' }}>
                  {feat.description}
                </p>
              </div>

              <div style={{
                paddingTop: '16px',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>Benchmark:</span>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontWeight: '700',
                  color: 'var(--text-main)',
                  fontSize: '0.95rem'
                }}>
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
