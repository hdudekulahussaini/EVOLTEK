import React from 'react';

export default function Stats() {
  const stats = [
    { label: 'Energy Density', val: '480', unit: 'Wh/kg', desc: '+65% over legacy lithium-ion' },
    { label: 'Thermal Efficiency', val: '98.4', unit: '%', desc: 'Regenerative closed-loop recovery' },
    { label: 'Zero to Hundred', val: '1.89', unit: 'sec', desc: 'All-wheel hypervector launch' },
    { label: 'Lifecycle Retention', val: '92', unit: '%', desc: 'After 350,000 km active operation' }
  ];

  return (
    <section className="py-[60px] bg-[#0d121f]/40 border-t border-white/10" style={{ padding: '60px 0', background: 'rgba(13, 18, 31, 0.4)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {stats.map((s, idx) => (
            <div key={idx} className="text-left p-4">
              <div className="text-[2.6rem] font-extrabold font-mono text-white leading-[1.1] mb-2 flex items-baseline">
                {s.val}
                <span className="text-[1.2rem] text-cyan-400 ml-1">{s.unit}</span>
              </div>
              <h4 className="text-[1rem] font-bold text-white mb-1">{s.label}</h4>
              <p className="text-[0.82rem] text-slate-400">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
