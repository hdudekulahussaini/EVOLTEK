import React, { useState, useEffect } from 'react';

export default function FranchiseOpportunitySection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [chargerSceneImg, setChargerSceneImg] = useState(null);

  // Extract ONLY the top-right charger & car scene (excluding all text and cards)
  useEffect(() => {
    const img = new Image();
    img.src = '/franchise-daylight.jpg';
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const sx = img.naturalWidth * 0.58;
        const sy = 0;
        const sw = img.naturalWidth * 0.42;
        const sh = img.naturalHeight * 0.48;

        canvas.width = sw;
        canvas.height = sh;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, sx, sy, sw, sh, 0, 0, sw, sh);
          setChargerSceneImg(canvas.toDataURL('image/jpeg', 0.96));
        }
      } catch (e) {
        // Fallback
      }
    };
  }, []);

  const cards = [
    {
      id: 'shared-investment',
      title: '50/50 SHARED\nINVESTMENT',
      desc: 'We invest together.\nYou grow with us.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ffffff" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 17l-1.5 1.5a2.12 2.12 0 0 1-3-3L8 14" />
          <path d="M13 7l1.5-1.5a2.12 2.12 0 0 1 3 3L16 10" />
          <path d="M8 14l2.5-2.5a1.5 1.5 0 0 1 2.12 0l.88.88a1.5 1.5 0 0 0 2.12 0L17 11" />
          <path d="M2 13l4-4 3 3-4 4a2 2 0 0 1-3-3z" />
          <path d="M22 11l-4 4-3-3 4-4a2 2 0 0 1 3 3z" />
        </svg>
      )
    },
    {
      id: 'choice-returns',
      title: 'CHOICE OF\nRETURNS',
      desc: 'Flexible options for\nmaximum value.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ffffff" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="6" cy="18" rx="3.5" ry="1.8" />
          <path d="M2.5 18v2c0 1 1.6 1.8 3.5 1.8s3.5-.8 3.5-1.8v-2" />
          <ellipse cx="14" cy="16" rx="3.5" ry="1.8" />
          <path d="M10.5 16v2c0 1 1.6 1.8 3.5 1.8s3.5-.8 3.5-1.8v-2" />
          <path d="M10.5 12v2c0 1 1.6 1.8 3.5 1.8s3.5-.8 3.5-1.8v-2" />
          <path d="M3 10 C 6 4, 12 4, 18 5" />
          <polyline points="15 2 19 5 16 8" />
        </svg>
      )
    },
    {
      id: 'maintenance-evoltek',
      title: 'MAINTENANCE\nBY EVOLTEK',
      desc: 'We keep it running.\nYou keep earning.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ffffff" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M13 7l-3 4.5h3.5L11 16" />
        </svg>
      )
    },
    {
      id: 'fast-dc-charging',
      title: 'FAST DC\nCHARGING',
      desc: 'High-speed charging\nfor a better tomorrow.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="rgba(255, 255, 255, 0.25)" />
        </svg>
      )
    },
    {
      id: 'extra-income',
      title: 'EXTRA INCOME\nPOTENTIAL',
      desc: 'Turn your location\ninto a long-term asset.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ffffff" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="15" width="3.2" height="6" rx="0.8" fill="rgba(255, 255, 255, 0.3)" />
          <rect x="8.5" y="11" width="3.2" height="10" rx="0.8" fill="rgba(255, 255, 255, 0.3)" />
          <rect x="14" y="7" width="3.2" height="14" rx="0.8" fill="rgba(255, 255, 255, 0.3)" />
          <path d="M3 13l6-5 5 4 7-8" />
          <polyline points="17 4 21 4 21 8" />
        </svg>
      )
    },
    {
      id: 'landowner-opportunity',
      title: 'LANDOWNER\nOPPORTUNITY',
      desc: 'Unleash the value\nof your land.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ffffff" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" fill="rgba(255, 255, 255, 0.2)" />
          <circle cx="12" cy="10" r="3" fill="#ffffff" />
        </svg>
      )
    },
    {
      id: 'quick-launch',
      title: 'QUICK LAUNCH',
      desc: 'From agreement\nto operation — faster\nthan you think.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ffffff" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
          <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" fill="rgba(255, 255, 255, 0.2)" />
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
          <path d="M12 9V4s3.03.55 4 2c1.08 1.62 0 5 0 5" />
          <circle cx="14.5" cy="9.5" r="1.2" fill="#ffffff" />
        </svg>
      )
    },
    {
      id: 'full-visibility',
      title: 'FULL VISIBILITY',
      desc: 'Track, monitor and\ngrow with real-time\ninsights.',
      icon: (
        <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#ffffff" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" fill="rgba(255, 255, 255, 0.2)" />
          <circle cx="12" cy="12" r="3" fill="#ffffff" />
          <circle cx="12" cy="12" r="1.2" fill="#042013" />
        </svg>
      )
    }
  ];

  return (
    <section id="franchise" className="franchise-daylight-section">
      <div className="container franchise-daylight-container">
        {/* Top Split Header: Left Info + Right Canopy Charger Visual */}
        <div className="franchise-hero-split">
          {/* Left Text Column */}
          <div className="franchise-header-left">
            {/* Main Headline */}
            <h2 className="franchise-heading-daylight">
              <span className="head-dark">BUILD YOUR EV</span>
              <br />
              <span className="head-green">CHARGING OPPORTUNITY.</span>
            </h2>

            {/* Subtitle */}
            <p className="franchise-sub-daylight">
              Be part of a cleaner future. Leverage the growing EV ecosystem
              <br className="desktop-break" />
              with a trusted partner — EVOLTEK.
            </p>
          </div>

          {/* Right Visual Column (Pristine Charger + EV Car Scene) */}
          <div className="franchise-hero-right" aria-hidden="true">
            <div className="charger-portal-wrapper">
              {chargerSceneImg ? (
                <img
                  src={chargerSceneImg}
                  alt="EVOLTEK DC Fast Charger and Electric Car"
                  className="charger-portal-img"
                />
              ) : (
                <div className="charger-portal-fallback">
                  <div className="kiosk-body">
                    <div className="kiosk-glow-strip" />
                    <div className="kiosk-screen">
                      <span className="kiosk-logo">⚡ EVOLTEK</span>
                      <span className="kiosk-status">FAST DC • READY</span>
                    </div>
                    <div className="kiosk-cable" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 8 Cards Grid (2 rows x 4 columns) */}
        <div className="franchise-daylight-grid">
          {cards.map((card, idx) => (
            <div
              key={card.id}
              className={`daylight-opportunity-card ${hoveredCard === idx ? 'card-active' : ''}`}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Top Row: Glossy Deep Emerald 3D Badge + Title */}
              <div className="card-top-content">
                <div className="daylight-card-icon-button">
                  {card.icon}
                </div>
                <div className="daylight-card-title-block">
                  <h3 className="daylight-card-title">
                    {card.title.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < card.title.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </h3>
                  <div className="daylight-card-divider" />
                </div>
              </div>

              {/* Card Description */}
              <p className="daylight-card-desc">
                {card.desc.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < card.desc.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>

              {/* Bottom Right Circular Arrow Action */}
              <div className="daylight-card-arrow-btn" aria-label="Learn more">
                <span className="arrow-glyph">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
