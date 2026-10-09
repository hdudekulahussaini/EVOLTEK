import React from 'react';

export default function BookingToLaunchSection() {
  const steps = [
    {
      num: '01',
      title: 'BOOK',
      desc: 'Pay ₹25,000 booking advance.',
      topIcon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#0f764a">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" stroke="#0f764a" strokeWidth="2" />
          <circle cx="7" cy="15" r="1.5" fill="#ffffff" />
        </svg>
      ),
      imageSrc: '/booking-step-01.png',
      imageAlt: 'EVOLTEK Station Booking Mobile App'
    },
    {
      num: '02',
      title: 'AGREE',
      desc: 'Sign the 5 or 10-year agreement.',
      topIcon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#0f764a">
          <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
        </svg>
      ),
      imageSrc: '/booking-step-02.png',
      imageAlt: 'EVOLTEK Legal Partnership Agreement'
    },
    {
      num: '03',
      title: 'LAUNCH',
      desc: 'Station setup in about 2 months.',
      topIcon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#0f764a">
          <path d="M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33 0 1.38 1.12 2.5 2.5 2.5.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5c0 1.38 1.12 2.5 2.5 2.5s2.5-1.12 2.5-2.5V9c0-.69-.28-1.32-.73-1.77zM12 10H6V5h6v5zm6 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z" />
        </svg>
      ),
      imageSrc: '/booking-step-03.png',
      imageAlt: 'EVOLTEK Fast Charger Station Setup & EV Charging'
    },
    {
      num: '04',
      title: 'TRACK',
      desc: 'Monitor everything through the Evoltek mobile app.',
      topIcon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#0f764a">
          <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z" />
        </svg>
      ),
      imageSrc: '/booking-step-04.png',
      imageAlt: 'Real-time EVOLTEK Live Charging App Telemetry'
    }
  ];

  return (
    <section id="process" className="booking-launch-section relative py-20 bg-[#f7fbf8] overflow-hidden">
      <div className="container booking-launch-container max-w-[1280px] mx-auto px-6 relative z-10">
        {/* Top Center Title Badge matching reference */}
        <div className="process-header flex justify-center mb-14">
          <div className="process-pill-badge inline-flex items-center gap-2 bg-[#064e3b] text-white font-extrabold text-[0.88rem] tracking-wider uppercase px-7 py-2.5 rounded-full shadow-md">
            <span>FROM BOOKING TO LAUNCH</span>
          </div>
        </div>

        {/* Top-Right Decorative Microchip Circuit */}
        <div className="chip-decor decor-top-right absolute top-6 right-6 hidden md:block opacity-75 pointer-events-none" aria-hidden="true">
          <svg viewBox="0 0 160 160" fill="none" className="chip-svg w-28 h-28">
            <path d="M 0 50 L 50 50 L 70 30 L 100 30" stroke="#cbd5e1" strokeWidth="1.2" />
            <path d="M 20 80 L 60 80 L 80 100 L 110 100" stroke="#cbd5e1" strokeWidth="1.2" />
            <path d="M 40 120 L 70 120 L 90 140 L 130 140" stroke="#cbd5e1" strokeWidth="1.2" />
            <circle cx="100" cy="30" r="2.5" fill="#94a3b8" />
            <circle cx="110" cy="100" r="2.5" fill="#94a3b8" />
            <circle cx="130" cy="140" r="2.5" fill="#94a3b8" />
          </svg>
          <div className="chip-badge-card absolute bottom-2 right-2 bg-white px-2 py-0.5 rounded shadow-sm border border-slate-200">
            <span className="chip-brand text-[0.65rem] font-bold text-slate-500">EVOLTEK</span>
          </div>
        </div>

        {/* Bottom-Left Decorative Microchip Circuit */}
        <div className="chip-decor decor-bottom-left absolute bottom-6 left-6 hidden md:block opacity-75 pointer-events-none" aria-hidden="true">
          <svg viewBox="0 0 160 160" fill="none" className="chip-svg w-28 h-28">
            <path d="M 160 110 L 110 110 L 90 130 L 60 130" stroke="#cbd5e1" strokeWidth="1.2" />
            <path d="M 140 80 L 100 80 L 80 60 L 50 60" stroke="#cbd5e1" strokeWidth="1.2" />
            <path d="M 120 40 L 90 40 L 70 20 L 30 20" stroke="#cbd5e1" strokeWidth="1.2" />
            <circle cx="60" cy="130" r="2.5" fill="#94a3b8" />
            <circle cx="50" cy="60" r="2.5" fill="#94a3b8" />
            <circle cx="30" cy="20" r="2.5" fill="#94a3b8" />
          </svg>
          <div className="chip-badge-card absolute bottom-2 left-2 bg-white px-2 py-0.5 rounded shadow-sm border border-slate-200">
            <span className="chip-brand text-[0.65rem] font-bold text-slate-500">EVOLTEK</span>
          </div>
        </div>

        {/* Interactive 4-Step Process Flow Grid */}
        <div className="process-flow-wrapper relative mt-6">
          {/* Horizontal Connecting Tube */}
          <div className="process-connecting-line absolute top-6 left-12 right-12 h-1 bg-emerald-200 hidden lg:block -z-0" aria-hidden="true"></div>

          {/* 4 Columns */}
          <div className="process-steps-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((step) => (
              <div key={step.num} className="process-step-col flex flex-col items-center">
                {/* Sage Green Hexagon Step Badge */}
                <div className="step-hexagon-badge relative w-12 h-14 flex items-center justify-center mb-4 text-white font-black text-lg">
                  <svg viewBox="0 0 100 110" className="hexagon-svg absolute inset-0 w-full h-full">
                    <polygon
                      points="50 3, 97 28, 97 82, 50 107, 3 82, 3 28"
                      fill="url(#hexGrad)"
                      stroke="#34d399"
                      strokeWidth="2.5"
                    />
                    <defs>
                      <linearGradient id="hexGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#159960" />
                        <stop offset="100%" stopColor="#0f764a" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="hexagon-num relative z-10">{step.num}</span>
                </div>

                {/* Step Card with Top Pointer */}
                <div
                  className={`process-step-card bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-emerald-500 transition-all duration-300 w-full flex flex-col h-full ${step.title === 'TRACK' ? 'card-track process-step-card-track' : ''} ${step.title === 'LAUNCH' ? 'card-launch process-step-card-launch' : ''}`}
                >
                  <div className="card-top-row flex items-center justify-between mb-2">
                    <h3 className="card-step-title text-[1.1rem] font-black text-slate-900 uppercase">{step.title}</h3>
                    <div className="card-top-icon-pill p-1.5 bg-emerald-50 rounded-lg">
                      {step.topIcon}
                    </div>
                  </div>
                  <p className="card-step-desc text-[0.85rem] text-slate-600 mb-4">{step.desc}</p>

                  {/* High Quality Real Visual Image */}
                  <div
                    className={`step-illustration-wrap relative w-full h-44 flex items-center justify-center overflow-hidden rounded-xl bg-slate-50 ${step.title === 'TRACK' ? 'step-track-wrap' : ''} ${step.title === 'LAUNCH' ? 'step-launch-wrap' : ''}`}
                    style={step.title === 'TRACK' ? { justifyContent: 'flex-end' } : undefined}
                  >
                    <img
                      src={step.imageSrc}
                      alt={step.imageAlt}
                      className={`step-process-real-img max-h-full max-w-full object-contain ${step.title === 'TRACK' ? 'step-track-img' : ''} ${step.title === 'LAUNCH' ? 'step-launch-img' : ''}`}
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
