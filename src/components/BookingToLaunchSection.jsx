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
      illustration: (
        <div className="step-illustration-wrap">
          {/* Flaticon Style Credit Card with #0f764a Primary Card */}
          <svg viewBox="0 0 120 110" className="step-flaticon-svg">
            <defs>
              {/* Back Gold Card Gradient */}
              <linearGradient id="goldCardGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="25%" stopColor="#fbb03b" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>

              {/* Front #0f764a Emerald Card Gradient */}
              <linearGradient id="emeraldCardGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#17935d" />
                <stop offset="40%" stopColor="#0f764a" />
                <stop offset="100%" stopColor="#0a5334" />
              </linearGradient>

              {/* Front Card Wave Reflection Arc Gradient */}
              <linearGradient id="emeraldReflection" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#34d399" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#0f764a" stopOpacity="0" />
              </linearGradient>

              {/* Chip Gold Gradient */}
              <linearGradient id="chipGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fef08a" />
                <stop offset="50%" stopColor="#fbbf24" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
            </defs>

            {/* Base Shadow */}
            <ellipse cx="60" cy="98" rx="46" ry="7" fill="#cbd5e1" fillOpacity="0.55" />

            {/* Back Golden Card (Rotated ~-26 deg like Flaticon) */}
            <g transform="translate(62, 40) rotate(-26)">
              {/* Card Body */}
              <rect x="-42" y="-27" width="84" height="54" rx="7" fill="url(#goldCardGrad)" stroke="#f59e0b" strokeWidth="0.8" />
              {/* Dark Magnetic Stripe */}
              <rect x="-42" y="-14" width="84" height="15" fill="#334155" />
              {/* Glossy White Reflection Arc */}
              <path d="M 28 -27 C 38 -15, 38 12, 28 27 L 34 27 C 42 12, 42 -15, 34 -27 Z" fill="#ffffff" fillOpacity="0.55" />
            </g>

            {/* Front Card in #0f764a */}
            <g transform="translate(10, 36)">
              {/* Dark Edge Depth */}
              <rect x="0" y="0" width="100" height="64" rx="8" fill="#073d26" />
              {/* Main Card Face in #0f764a */}
              <rect x="0" y="0" width="100" height="62" rx="8" fill="url(#emeraldCardGrad)" stroke="#1cd485" strokeWidth="0.75" />

              {/* Curved Top Reflection Wave */}
              <path
                d="M 0 0 L 100 0 C 100 0, 94 28, 62 26 C 26 24, 0 38, 0 38 Z"
                fill="url(#emeraldReflection)"
              />

              {/* Gold EMV Chip */}
              <g transform="translate(7, 10)">
                <rect x="0" y="0" width="20" height="15" rx="3.5" fill="url(#chipGrad)" stroke="#d97706" strokeWidth="0.8" />
                {/* Chip internal circuits */}
                <line x1="8" y1="0" x2="8" y2="15" stroke="#b45309" strokeWidth="0.75" />
                <line x1="0" y1="7.5" x2="20" y2="7.5" stroke="#b45309" strokeWidth="0.75" />
                <line x1="8" y1="4" x2="20" y2="4" stroke="#b45309" strokeWidth="0.6" />
                <line x1="8" y1="11" x2="20" y2="11" stroke="#b45309" strokeWidth="0.6" />
                <line x1="4" y1="0" x2="4" y2="15" stroke="#b45309" strokeWidth="0.6" />
              </g>

              {/* Top Right White Logo Bars */}
              <rect x="68" y="12" width="18" height="3.5" rx="1.75" fill="#ffffff" />
              <rect x="74" y="18" width="12" height="3.5" rx="1.75" fill="#ffffff" />

              {/* 4 Card Number Pill Blocks */}
              <g transform="translate(6, 42)">
                <rect x="0" y="0" width="14" height="7.5" rx="3.75" fill="#ffffff" />
                <rect x="18" y="0" width="14" height="7.5" rx="3.75" fill="#ffffff" />
                <rect x="36" y="0" width="14" height="7.5" rx="3.75" fill="#ffffff" />
                <rect x="54" y="0" width="14" height="7.5" rx="3.75" fill="#ffffff" />
              </g>

              {/* Glossy White Bottom Reflection Highlights */}
              <path
                d="M 58 54 C 68 53, 78 54, 86 54 C 84 55.5, 74 56, 58 55 Z"
                fill="#ffffff"
                fillOpacity="0.8"
              />
              <path
                d="M 72 57 C 82 56, 88 56.5, 94 57 C 91 58.5, 84 59, 72 58.5 Z"
                fill="#ffffff"
                fillOpacity="0.9"
              />
            </g>
          </svg>
        </div>
      )
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
      illustration: (
        <div className="step-illustration-wrap">
          {/* Flaticon Style Contract Document & Feather Quill */}
          <svg viewBox="0 0 120 110" className="step-flaticon-svg">
            <defs>
              <linearGradient id="docPaperGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fffbeb" />
                <stop offset="100%" stopColor="#fef3c7" />
              </linearGradient>
              <linearGradient id="docFoldGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#fde68a" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
              <linearGradient id="quillGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="60%" stopColor="#0f764a" />
                <stop offset="100%" stopColor="#073d26" />
              </linearGradient>
            </defs>

            {/* Document Shadow */}
            <rect x="22" y="16" width="64" height="82" rx="10" fill="#cbd5e1" fillOpacity="0.45" />

            {/* Main Document Body */}
            <g transform="translate(18, 12)">
              <rect x="0" y="0" width="66" height="84" rx="8" fill="url(#docPaperGrad)" stroke="#fcd34d" strokeWidth="1.5" />

              {/* Folded Top-Right Corner */}
              <path d="M 48 0 L 66 18 L 48 18 Z" fill="url(#docFoldGrad)" />
              <path d="M 48 0 L 66 18" stroke="#d97706" strokeWidth="1.2" />

              {/* Header Title Bar */}
              <rect x="10" y="14" width="28" height="6" rx="3" fill="#0f764a" />

              {/* Text Lines */}
              <rect x="10" y="26" width="46" height="4" rx="2" fill="#a7f3d0" />
              <rect x="10" y="34" width="46" height="4" rx="2" fill="#a7f3d0" />
              <rect x="10" y="42" width="38" height="4" rx="2" fill="#a7f3d0" />
              <rect x="10" y="50" width="44" height="4" rx="2" fill="#a7f3d0" />

              {/* Red & Gold Legal Wax Seal */}
              <circle cx="20" cy="67" r="9" fill="#ef4444" />
              <circle cx="20" cy="67" r="6.5" fill="#dc2626" />
              <polygon points="20,63 22,69 17,65 23,65 18,69" fill="#fde047" />

              {/* Signature Line */}
              <path d="M 34 68 Q 42 63, 48 68 T 58 66" stroke="#1e293b" strokeWidth="2" strokeLinecap="round" fill="none" />
            </g>

            {/* Flaticon Feather Quill Pen */}
            <g transform="translate(58, 22) rotate(-32)">
              {/* Feather Body */}
              <path
                d="M 16 0 C 26 18, 30 52, 16 68 C 10 50, 6 22, 16 0 Z"
                fill="url(#quillGrad)"
                stroke="#a7f3d0"
                strokeWidth="1"
              />
              {/* Glossy White Reflection on Feather */}
              <path
                d="M 17 6 C 22 20, 24 45, 17 56"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeOpacity="0.6"
                fill="none"
              />
              {/* Quill Shaft and Gold Nib */}
              <line x1="16" y1="2" x2="16" y2="78" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
              <polygon points="14,76 18,76 16,84" fill="#f59e0b" />
            </g>
          </svg>
        </div>
      )
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
      illustration: (
        <div className="step-illustration-wrap">
          {/* Flaticon Style EV Fast Charging Pedestal Station */}
          <svg viewBox="0 0 120 110" className="step-flaticon-svg">
            <defs>
              <linearGradient id="chargerMintBody" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1cd485" />
                <stop offset="40%" stopColor="#0f764a" />
                <stop offset="100%" stopColor="#073d26" />
              </linearGradient>
              <linearGradient id="chargerSideDark" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0a5334" />
                <stop offset="100%" stopColor="#042617" />
              </linearGradient>
              <linearGradient id="screenGlass" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>
            </defs>

            {/* Base Shadow */}
            <ellipse cx="60" cy="98" rx="42" ry="8" fill="#cbd5e1" fillOpacity="0.6" />

            {/* Charger Pedestal Base */}
            <rect x="34" y="90" width="52" height="8" rx="4" fill="#334155" />

            {/* Charger Main Body (2.5D Dual Tone) */}
            <g transform="translate(38, 14)">
              {/* Back / Side Depth */}
              <rect x="0" y="0" width="44" height="78" rx="10" fill="url(#chargerSideDark)" />
              {/* Front Face */}
              <rect x="0" y="0" width="40" height="78" rx="10" fill="url(#chargerMintBody)" stroke="#34d399" strokeWidth="1.2" />

              {/* Glossy White Reflection Arc on Body */}
              <path
                d="M 6 8 Q 12 4, 28 4"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeOpacity="0.75"
                fill="none"
              />

              {/* Digital Screen Display */}
              <rect x="7" y="16" width="26" height="26" rx="6" fill="url(#screenGlass)" stroke="#34d399" strokeWidth="1" />

              {/* Screen Reflection Slice */}
              <path d="M 9 18 L 22 18 L 14 36 L 9 36 Z" fill="#ffffff" fillOpacity="0.15" />

              {/* Electric Yellow Lightning Bolt Icon on Screen */}
              <polygon points="21,20 16,30 20,30 19,38 25,28 21,28" fill="#fbbf24" stroke="#f59e0b" strokeWidth="0.8" />

              {/* Status LED Bar (Glowing Green) */}
              <rect x="10" y="48" width="20" height="4" rx="2" fill="#a7f3d0" />
              <circle cx="20" cy="62" r="4.5" fill="#fde047" stroke="#ffffff" strokeWidth="1.2" />
            </g>

            {/* Charging Cable and Gun Nozzle */}
            <g transform="translate(78, 42)">
              {/* Coiled Black Cable */}
              <path d="M 0 10 C 14 12, 18 36, 6 48" stroke="#1e293b" strokeWidth="3.5" strokeLinecap="round" fill="none" />
              {/* Charging Nozzle Handle */}
              <rect x="-3" y="6" width="7" height="12" rx="2.5" fill="#f59e0b" />
              <rect x="-1" y="2" width="3" height="5" rx="1" fill="#1e293b" />
            </g>
          </svg>
        </div>
      )
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
      illustration: (
        <div className="step-illustration-wrap">
          {/* Flaticon Style Smartphone with Live Charging Map */}
          <svg viewBox="0 0 120 110" className="step-flaticon-svg">
            <defs>
              <linearGradient id="phoneBodyGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <linearGradient id="phoneScreenGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0f764a" />
                <stop offset="50%" stopColor="#0a5334" />
                <stop offset="100%" stopColor="#042617" />
              </linearGradient>
            </defs>

            {/* Phone Base Shadow */}
            <ellipse cx="60" cy="98" rx="36" ry="7" fill="#cbd5e1" fillOpacity="0.6" />

            {/* Phone Body with 3D Angle */}
            <g transform="translate(36, 8)">
              {/* Outer Shell */}
              <rect x="0" y="0" width="48" height="86" rx="9" fill="url(#phoneBodyGrad)" stroke="#38bdf8" strokeWidth="1.2" />

              {/* Inner Screen */}
              <rect x="3" y="3" width="42" height="80" rx="7" fill="url(#phoneScreenGrad)" />

              {/* Glossy White Reflection Arc (matching credit card reflection!) */}
              <path d="M 4 8 C 14 8, 30 18, 44 32 L 44 4 L 4 4 Z" fill="#ffffff" fillOpacity="0.12" />

              {/* Top Speaker Pill Notch */}
              <rect x="18" y="5" width="12" height="2.5" rx="1.25" fill="#000000" />

              {/* Map Route Graphics */}
              <circle cx="24" cy="38" r="14" fill="#0f764a" fillOpacity="0.3" />
              <circle cx="24" cy="38" r="8" fill="#1cd485" fillOpacity="0.5" />

              {/* Radar Navigation Arrow */}
              <polygon points="24,28 30,42 24,39 18,42" fill="#34d399" />

              {/* Telemetry Stat Cards in App */}
              <rect x="8" y="56" width="32" height="8" rx="2.5" fill="#ffffff" fillOpacity="0.2" />
              <circle cx="13" cy="60" r="2" fill="#fbbf24" />
              <rect x="18" y="58" width="16" height="3" rx="1.5" fill="#ffffff" />

              <rect x="8" y="67" width="32" height="8" rx="2.5" fill="#ffffff" fillOpacity="0.2" />
              <circle cx="13" cy="71" r="2" fill="#34d399" />
              <rect x="18" y="69" width="19" height="3" rx="1.5" fill="#ffffff" />

              {/* Bottom Home Indicator Line */}
              <rect x="18" y="78" width="12" height="2" rx="1" fill="#ffffff" fillOpacity="0.7" />
            </g>
          </svg>
        </div>
      )
    }
  ];

  return (
    <section id="process" className="booking-launch-section">
      <div className="container booking-launch-container">
        {/* Top Center Title Badge matching reference */}
        <div className="process-header">
          <div className="process-pill-badge">
            <span>FROM BOOKING TO LAUNCH</span>
          </div>
        </div>

        {/* Top-Right Decorative Microchip Circuit */}
        <div className="chip-decor decor-top-right" aria-hidden="true">
          <svg viewBox="0 0 160 160" fill="none" className="chip-svg">
            {/* Traces */}
            <path d="M 0 50 L 50 50 L 70 30 L 100 30" stroke="#cbd5e1" strokeWidth="1.2" />
            <path d="M 20 80 L 60 80 L 80 100 L 110 100" stroke="#cbd5e1" strokeWidth="1.2" />
            <path d="M 40 120 L 70 120 L 90 140 L 130 140" stroke="#cbd5e1" strokeWidth="1.2" />
            <circle cx="100" cy="30" r="2.5" fill="#94a3b8" />
            <circle cx="110" cy="100" r="2.5" fill="#94a3b8" />
            <circle cx="130" cy="140" r="2.5" fill="#94a3b8" />
          </svg>
          <div className="chip-badge-card">
            <span className="chip-brand">EVOLTEK</span>
          </div>
        </div>

        {/* Bottom-Left Decorative Microchip Circuit */}
        <div className="chip-decor decor-bottom-left" aria-hidden="true">
          <svg viewBox="0 0 160 160" fill="none" className="chip-svg">
            {/* Traces */}
            <path d="M 160 110 L 110 110 L 90 130 L 60 130" stroke="#cbd5e1" strokeWidth="1.2" />
            <path d="M 140 80 L 100 80 L 80 60 L 50 60" stroke="#cbd5e1" strokeWidth="1.2" />
            <path d="M 120 40 L 90 40 L 70 20 L 30 20" stroke="#cbd5e1" strokeWidth="1.2" />
            <circle cx="60" cy="130" r="2.5" fill="#94a3b8" />
            <circle cx="50" cy="60" r="2.5" fill="#94a3b8" />
            <circle cx="30" cy="20" r="2.5" fill="#94a3b8" />
          </svg>
          <div className="chip-badge-card">
            <span className="chip-brand">EVOLTEK</span>
          </div>
        </div>

        {/* Interactive 4-Step Process Flow Grid */}
        <div className="process-flow-wrapper">
          {/* Horizontal Connecting Tube */}
          <div className="process-connecting-line" aria-hidden="true"></div>

          {/* 4 Columns */}
          <div className="process-steps-grid">
            {steps.map((step) => (
              <div key={step.num} className="process-step-col">
                {/* Sage Green Hexagon Step Badge */}
                <div className="step-hexagon-badge">
                  <svg viewBox="0 0 100 110" className="hexagon-svg">
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
                  <span className="hexagon-num">{step.num}</span>
                </div>

                {/* Step Card with Top Pointer */}
                <div className="process-step-card">
                  <div className="card-top-row">
                    <h3 className="card-step-title">{step.title}</h3>
                    <div className="card-top-icon-pill">
                      {step.topIcon}
                    </div>
                  </div>
                  <p className="card-step-desc">{step.desc}</p>

                  {/* 3D Visual Illustration at bottom */}
                  {step.illustration}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
