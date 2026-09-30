import React, { useState } from 'react';

export default function AppShowcaseSection() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 'status',
      title: 'Station Status',
      desc: 'Check live status of your charging station.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="3" />
          <line x1="9" y1="7" x2="15" y2="7" />
          <polyline points="10 13 12 11 14 13" />
          <line x1="12" y1="11" x2="12" y2="17" />
        </svg>
      )
    },
    {
      id: 'availability',
      title: 'Charger Availability',
      desc: 'See available & occupied chargers in real-time.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6v4a6 6 0 0 1-12 0V6" />
          <line x1="9" y1="2" x2="9" y2="6" />
          <line x1="15" y1="2" x2="15" y2="6" />
          <path d="M12 16v5a1 1 0 0 1-1 1H9" />
        </svg>
      )
    },
    {
      id: 'usage',
      title: 'Usage',
      desc: 'Track energy consumption and usage trends.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
          <path d="M3 20h18" />
          <circle cx="12" cy="4" r="1.5" fill="#ffffff" />
        </svg>
      )
    },
    {
      id: 'sessions',
      title: 'Sessions',
      desc: 'View all charging sessions and details.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )
    },
    {
      id: 'earnings',
      title: 'Earnings',
      desc: 'Monitor your earnings and revenue reports.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3h12M6 8h12M6 13h5a4 4 0 0 0 4-4M6 13l9 8" />
        </svg>
      )
    },
    {
      id: 'performance',
      title: 'Performance',
      desc: 'Get insights to grow your business.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 17l6-6 4 4 8-8" />
          <polyline points="17 7 21 7 21 11" />
        </svg>
      )
    }
  ];

  return (
    <section id="app" className="app-showcase-section">
      <div className="container app-showcase-container">
        {/* 3-Column Layout: Left Intro + Center Phone Mockup + Right 6 Glowing Feature Pills */}
        <div className="app-showcase-grid">
          {/* Left Column */}
          <div className="app-col-intro">
            {/* Main Headline */}
            <h2 className="app-main-heading">
              <span className="head-dark-green">YOUR STATION.</span>
              <br />
              <span className="head-glow-green">YOUR NUMBERS.</span>
              <br />
              <span className="head-dark-green">YOUR CONTROL.</span>
            </h2>

            {/* Subtitle */}
            <p className="app-lead-desc">
              Manage your station, track performance,
              <br className="desktop-break" />
              and view earnings—all in one app.
            </p>

            {/* CTA Button */}
            <a
              href="#download"
              onClick={(e) => {
                e.preventDefault();
                alert('Opening EVOLTEK Franchise App download page...');
              }}
              className="app-download-btn"
            >
              <span className="btn-download-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </span>
              <span className="btn-divider-pipe" />
              <span className="btn-text">DOWNLOAD THE APP</span>
              <span className="btn-arrow-right">→</span>
            </a>
          </div>

          {/* Center Column: Phone Mockup */}
          <div className="app-col-mockup">
            <div className="phone-mockup-wrapper">
              <img
                src="/phone-app-mockup.png"
                alt="EVOLTEK Franchise Mobile App Dashboard — Station Status, Charger Availability, Total Usage, Earnings"
                className="phone-mockup-img"
              />
            </div>
          </div>

          {/* Right Column: 6 Glowing Feature Pills */}
          <div className="app-col-features">
            <div className="features-pill-stack">
              {features.map((feat, idx) => (
                <div
                  key={feat.id}
                  className={`app-feature-pill ${activeFeature === idx ? 'pill-active' : ''}`}
                  onMouseEnter={() => setActiveFeature(idx)}
                >
                  {/* Left Circular Emerald Icon Badge */}
                  <div className="pill-icon-bubble">
                    {feat.icon}
                  </div>

                  {/* Text Content */}
                  <div className="pill-text-content">
                    <h3 className="pill-title">{feat.title}</h3>
                    <p className="pill-desc">{feat.desc}</p>
                  </div>

                  {/* Right Arrow */}
                  <div className="pill-arrow-wrap">
                    <span className="pill-arrow">›</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
