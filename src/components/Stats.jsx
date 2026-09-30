import React from 'react';

export default function Stats() {
  const stats = [
    { label: 'Energy Density', val: '480', unit: 'Wh/kg', desc: '+65% over legacy lithium-ion' },
    { label: 'Thermal Efficiency', val: '98.4', unit: '%', desc: 'Regenerative closed-loop recovery' },
    { label: 'Zero to Hundred', val: '1.89', unit: 'sec', desc: 'All-wheel hypervector launch' },
    { label: 'Lifecycle Retention', val: '92', unit: '%', desc: 'After 350,000 km active operation' }
  ];

  return (
    <section style={{ padding: '60px 0', background: 'rgba(13, 18, 31, 0.4)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '30px'
        }}>
          {stats.map((s, idx) => (
            <div key={idx} style={{ textAlign: 'left', padding: '16px' }}>
              <div style={{
                fontSize: '2.6rem',
                fontWeight: '800',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-main)',
                lineHeight: 1.1,
                marginBottom: '8px'
              }}>
                {s.val}
                <span style={{ fontSize: '1.2rem', color: 'var(--accent-cyan)', marginLeft: '4px' }}>{s.unit}</span>
              </div>
              <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '4px' }}>{s.label}</h4>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
