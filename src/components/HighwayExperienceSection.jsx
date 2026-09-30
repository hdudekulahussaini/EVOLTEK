import React, { useState } from 'react';

export default function HighwayExperienceSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const cards = [
    {
      id: 'fast-charging',
      title: 'FAST CHARGING',
      desc: 'Fast to high-end\ncharging ratio.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    },
    {
      id: 'restaurant',
      title: 'RESTAURANT',
      desc: 'Eat in a high-end\nrestaurant.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2v20M18 2a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3M6 2v20M3 2v6a3 3 0 0 0 6 0V2" />
        </svg>
      )
    },
    {
      id: 'wifi',
      title: 'WI-FI',
      desc: 'Ultra EV highway\ncharging hub.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.55a11 11 0 0 1 14.08 0" />
          <path d="M1.42 9a16 16 0 0 1 21.16 0" />
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
          <circle cx="12" cy="20" r="1.5" fill="#ffffff" />
        </svg>
      )
    },
    {
      id: 'parks',
      title: 'PARKS',
      desc: 'Clean tree-lined green\nspaces and parks.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff">
          <path d="M12 2C8.5 2 6 5 6 7.5c0 1.5.8 2.8 2 3.6C6.8 11.9 6 13.3 6 15c0 2.2 1.8 4 4 4h4c2.2 0 4-1.8 4-4 0-1.7-.8-3.1-2-3.9 1.2-.8 2-2.1 2-3.6C18 5 15.5 2 12 2z" />
          <rect x="11" y="17" width="2" height="5" rx="1" fill="#ffffff" />
        </svg>
      )
    },
    {
      id: 'rest-facilities',
      title: 'REST FACILITIES',
      desc: 'Restroom facilities &\namenities.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff">
          <circle cx="7.5" cy="4" r="2.2" />
          <path d="M5 9a1.5 1.5 0 0 1 1.5-1.5h2A1.5 1.5 0 0 1 10 9v5H8.8v6H6.2v-6H5V9z" />
          <circle cx="16.5" cy="4" r="2.2" />
          <path d="M14 9a1.5 1.5 0 0 1 1.5-1.5h2A1.5 1.5 0 0 1 19 9l-1 6h-1v5h-2v-5h-1L14 9z" />
        </svg>
      )
    },
    {
      id: 'lounge',
      title: 'LOUNGE',
      desc: 'Cozy armchair and\nWi-Fi lounge.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff">
          <path d="M7 6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4H7V6z" />
          <path d="M4 11a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6z" />
          <rect x="2" y="13" width="3" height="6" rx="1.5" />
          <rect x="19" y="13" width="3" height="6" rx="1.5" />
          <path d="M6 19v2M18 19v2" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  return (
    <section id="highway-experience" className="highway-hub-experience-section">
      {/* Background Subtle Organic Wave Contours */}
      <div className="highway-bg-waves" aria-hidden="true">
        <svg viewBox="0 0 1440 600" fill="none" className="waves-svg" preserveAspectRatio="none">
          <path
            d="M -100 120 C 300 40, 600 280, 1100 80 C 1300 -10, 1500 60, 1600 140"
            stroke="#a7f3d0"
            strokeWidth="1.2"
            strokeOpacity="0.45"
          />
          <path
            d="M -100 240 C 350 160, 750 420, 1200 200 C 1380 120, 1520 220, 1600 280"
            stroke="#6ee7b7"
            strokeWidth="1.5"
            strokeOpacity="0.35"
          />
          <path
            d="M -100 520 C 400 420, 900 580, 1550 460"
            stroke="#a7f3d0"
            strokeWidth="1.2"
            strokeOpacity="0.4"
          />
        </svg>
      </div>

      <div className="container highway-hub-container">
        {/* Top Header */}
        <div className="highway-hub-header">
          <div className="highway-hub-eyebrow">
            <span className="eyebrow-dash">—</span>
            <span className="eyebrow-text">EVOLTEK HIGHWAY EXPERIENCE</span>
            <span className="eyebrow-dash">—</span>
          </div>

          <h2 className="highway-hub-title">
            <span className="title-top-line">— YOUR EV RECHARGES. —</span>
            <br />
            <span className="title-bottom-line">YOU RECHARGE TOO.</span>
          </h2>

          <p className="highway-hub-subtitle">
            Eat. Connect. Relax. Recharge. Drive.
          </p>
        </div>

        {/* Central Architectural Panoramic Visual with Photorealistic Background & Frosted Info Card */}
        <div className="highway-hub-photo-wrapper">
          <img
            src="/highway-lounge-hub.jpg"
            alt="EVOLTEK Highway Experience — More Than A Charging Station, A Complete Travel Experience"
            className="highway-hub-panoramic-img"
          />
          
          {/* Frosted Green Card Overlay on Left */}
          <div className="highway-hub-overlay-card">
            <div className="overlay-card-badge">MORE THAN A CHARGING STATION</div>
            <h3 className="overlay-card-heading">
              A Complete<br />Travel Experience
            </h3>
            <p className="overlay-card-text">
              Modern charging hubs with premium amenities, designed for a comfortable, convenient and connected journey.
            </p>
            <div className="overlay-card-accent-line" />
          </div>
        </div>

        {/* 6 Feature Cards Row */}
        <div className="highway-hub-cards-row">
          {cards.map((card, idx) => (
            <div
              key={card.id}
              className={`highway-hub-card ${hoveredCard === idx ? 'active-hub-card' : ''}`}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glossy 3D Jade Circle Button */}
              <div className="hub-card-icon-button">
                {card.icon}
              </div>

              {/* Card Title */}
              <h3 className="hub-card-heading">{card.title}</h3>

              {/* Card Description */}
              <p className="hub-card-description">
                {card.desc.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < card.desc.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>

              {/* Bottom Subtle Arrow Indicator */}
              <div className="hub-card-arrow" aria-hidden="true">
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Clean Energy / Smarter Tomorrow Divider */}
        <div className="highway-hub-footer-divider">
          <div className="divider-h-line" />
          <div className="divider-center-badge">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#047857">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <div className="divider-h-line" />
        </div>

        <div className="highway-hub-tagline">
          CLEAN ENERGY &nbsp;/&nbsp; SMARTER TOMORROW
        </div>
      </div>
    </section>
  );
}
