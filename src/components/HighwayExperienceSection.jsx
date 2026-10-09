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
    <section
      id="highway-experience"
      className="highway-hub-experience-section relative overflow-hidden py-20 pb-16 bg-gradient-to-b from-[#f3f9f5] via-[#f7fbf8] to-[#eff7f2]"
    >
      {/* Background Subtle Organic Wave Contours */}
      <div className="highway-bg-waves absolute inset-0 pointer-events-none z-[1] overflow-hidden" aria-hidden="true">
        <svg viewBox="0 0 1440 600" fill="none" className="waves-svg w-full h-full" preserveAspectRatio="none">
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

      <div className="container highway-hub-container relative z-[2] max-w-[1240px] mx-auto px-6">
        {/* Top Header */}
        <div className="highway-hub-header text-center mb-[34px]">
          <div className="highway-hub-eyebrow inline-flex items-center justify-center gap-2.5 text-[0.84rem] font-bold tracking-[0.14em] text-green-700 uppercase mb-3">
            <span className="eyebrow-dash text-green-600 opacity-55">—</span>
            <span className="eyebrow-text">EVOLTEK HIGHWAY EXPERIENCE</span>
            <span className="eyebrow-dash text-green-600 opacity-55">—</span>
          </div>

          <h2 className="highway-hub-title text-center m-0 leading-[1.15]">
            <span className="title-top-line inline-block text-[1.35rem] sm:text-[1.85rem] font-extrabold tracking-[0.05em] text-[#14532d]">
              — YOUR EV RECHARGES. —
            </span>
            <br />
            <span className="title-bottom-line inline-block text-[2rem] sm:text-[2.5rem] lg:text-[3.2rem] font-black tracking-[-0.015em] text-[#052e16] mt-1">
              YOU RECHARGE TOO.
            </span>
          </h2>

          <p className="highway-hub-subtitle text-[1.05rem] font-semibold text-[#28543d] mt-3.5 mx-auto tracking-[0.02em]">
            Eat. Connect. Relax. Recharge. Drive.
          </p>
        </div>

        {/* Central Architectural Panoramic Visual with Photorealistic Background & Frosted Info Card */}
        <div className="highway-hub-photo-wrapper relative w-full rounded-[18px] sm:rounded-[26px] overflow-hidden shadow-[0_22px_50px_-10px_rgba(5,46,22,0.16),0_4px_16px_rgba(0,0,0,0.04)] border-[1.5px] border-emerald-500/20 mb-5 sm:mb-8">
          <img
            src="/highway-lounge-hub.jpg"
            alt="EVOLTEK Highway Experience — More Than A Charging Station, A Complete Travel Experience"
            className="highway-hub-panoramic-img w-full block object-cover object-center aspect-video lg:aspect-auto lg:h-[460px] max-h-[440px] lg:max-h-none"
          />

          {/* Frosted Green Card Overlay on Left */}
          <div className="highway-hub-overlay-card static sm:absolute sm:left-9 sm:top-1/2 sm:-translate-y-1/2 w-full sm:w-[330px] sm:max-w-[calc(100%-72px)] mt-3.5 sm:mt-0 bg-gradient-to-br from-[rgba(6,44,26,0.72)] sm:from-[rgba(6,44,26,0.65)] to-[rgba(3,24,15,0.88)] sm:to-[rgba(3,24,15,0.82)] backdrop-blur-[28px] border-[1.5px] border-white/35 rounded-[20px] sm:rounded-[24px] p-5 sm:p-7 sm:py-8 text-white shadow-[0_24px_50px_-10px_rgba(0,0,0,0.45),0_8px_24px_rgba(16,185,129,0.18),inset_0_1px_2px_rgba(255,255,255,0.5)] hover:border-green-400/60 transition-all duration-300 z-[3]">
            <div className="overlay-card-badge inline-block text-[0.72rem] font-extrabold tracking-[0.1em] text-emerald-300 bg-white/12 border border-emerald-300/35 backdrop-blur-md px-3 py-1 rounded-full uppercase mb-3.5 shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
              MORE THAN A CHARGING STATION
            </div>
            <h3 className="overlay-card-heading text-[1.7rem] font-black leading-[1.18] text-white mb-3.5 tracking-[-0.015em] drop-shadow-[0_2px_14px_rgba(0,0,0,0.45)]">
              A Complete<br />Travel Experience
            </h3>
            <p className="overlay-card-text text-[0.9rem] leading-[1.6] text-emerald-50 font-normal mb-4.5 drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]">
              Modern charging hubs with premium amenities, designed for a comfortable, convenient and connected journey.
            </p>
            <div className="overlay-card-accent-line w-12 h-[3.5px] bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
          </div>
        </div>

        {/* 6 Feature Cards Row */}
        <div className="highway-hub-cards-row grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-3.5 lg:gap-4 mb-9">
          {cards.map((card, idx) => (
            <div
              key={card.id}
              className={`highway-hub-card relative bg-white border-[1.5px] border-emerald-200/75 rounded-[18px] p-4 sm:p-5 pt-6 flex flex-col items-center text-center shadow-[0_6px_20px_rgba(5,46,22,0.04)] cursor-pointer transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-500 hover:shadow-[0_18px_36px_rgba(5,46,22,0.12),0_4px_12px_rgba(16,185,129,0.08)] group ${hoveredCard === idx ? 'active-hub-card -translate-y-1.5 border-emerald-500 shadow-[0_18px_36px_rgba(5,46,22,0.12)]' : ''}`}
              onMouseEnter={() => setHoveredCard(idx)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glossy 3D Jade Circle Button */}
              <div className="hub-card-icon-button w-[54px] h-[54px] rounded-full bg-[radial-gradient(circle_at_35%_30%,#047857_0%,#064e3b_70%,#022c22_100%)] flex items-center justify-center shadow-[inset_0_2px_3px_rgba(255,255,255,0.45),0_8px_18px_rgba(6,78,59,0.32)] mb-3.5 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[inset_0_2px_4px_rgba(255,255,255,0.6),0_10px_22px_rgba(16,185,129,0.4)]">
                {card.icon}
              </div>

              {/* Card Title */}
              <h3 className="hub-card-heading text-[0.9rem] font-extrabold tracking-[0.02em] text-[#064e3b] mb-2 uppercase">
                {card.title}
              </h3>

              {/* Card Description */}
              <p className="hub-card-description text-[0.77rem] font-medium text-slate-600 leading-[1.35] m-0 flex-grow">
                {card.desc.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i < card.desc.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Clean Energy / Smarter Tomorrow Divider */}
        <div className="highway-hub-footer-divider flex items-center justify-center gap-4 max-w-[440px] mx-auto mb-3">
          <div className="divider-h-line flex-grow h-[1.2px] bg-gradient-to-r from-transparent via-emerald-600/35 to-transparent" />
          <div className="divider-center-badge flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#047857">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <div className="divider-h-line flex-grow h-[1.2px] bg-gradient-to-r from-transparent via-emerald-600/35 to-transparent" />
        </div>

        <div className="highway-hub-tagline text-center text-[0.8rem] font-bold tracking-[0.18em] text-emerald-700 uppercase">
          CLEAN ENERGY &nbsp;/&nbsp; SMARTER TOMORROW
        </div>
      </div>
    </section>
  );
}
