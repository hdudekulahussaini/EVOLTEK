import React from 'react';

export default function Footer() {
  const navItems = [
    {
      name: 'Charging Network',
      href: '#charging-stations',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      )
    },
    {
      name: 'EV Hubs',
      href: '#highway-experience',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      )
    },
    {
      name: 'Investment',
      href: '#investment',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      )
    },
    {
      name: 'ROI Calculator',
      href: '#calculator',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <line x1="8" y1="6" x2="16" y2="6" />
          <line x1="16" y1="14" x2="16" y2="18" />
          <path d="M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01" />
        </svg>
      )
    },
    {
      name: 'Franchise',
      href: '#franchise',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      )
    },
    {
      name: 'Contact',
      href: '#contact',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      )
    }
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="evoltek-footer-exact">
      <div className="container footer-exact-container">
        {/* Main 3-Column Grid */}
        <div className="footer-exact-grid">
          {/* Column 1: Glowing Brand Logo & Tagline */}
          {/* Column 1: evoltek-logo.jpg & Tagline */}
          <div className="footer-col-brand">
            <div className="footer-brand-logo-badge">
              <img
                src="/evoltek-logo.jpg"
                alt="EVOLTEK"
                className="footer-logo-img"
              />
            </div>
            <p className="footer-brand-tagline">
              Powering Every Journey.
            </p>
          </div>

          {/* Vertical Divider 1 */}
          <div className="footer-vert-divider" aria-hidden="true" />

          {/* Column 2: Navigation Links with Icons */}
          <div className="footer-col-links">
            <ul className="footer-links-list">
              {navItems.map((item) => (
                <li key={item.name} className="footer-link-item">
                  <a
                    href={item.href}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className="footer-link-anchor"
                  >
                    <span className="footer-item-icon">{item.icon}</span>
                    <span className="footer-item-text">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Vertical Divider 2 */}
          <div className="footer-vert-divider" aria-hidden="true" />

          {/* Column 3: CTAs (Investor & Contact Pill Buttons) */}
          <div className="footer-col-actions">
            {/* Primary Filled Glowing Pill */}
            <a
              href="#investment"
              onClick={(e) => handleLinkClick(e, '#investment')}
              className="footer-btn-primary"
            >
              <div className="btn-inner-left">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
                <span className="btn-label">Become an Investor</span>
              </div>
              <span className="btn-arrow">→</span>
            </a>

            {/* Outlined Glowing Pill */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#franchise')}
              className="footer-btn-outline"
            >
              <div className="btn-inner-left">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="btn-label">Talk to Evoltek</span>
              </div>
              <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>

        {/* Bottom Horizontal Accent Line with Glowing Lightning Bolt */}
        <div className="footer-exact-bottom">
          <div className="footer-exact-divider">
            <div className="footer-div-line" />
            <div className="footer-div-bolt">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#34d399">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <div className="footer-div-line" />
          </div>

          <p className="footer-exact-copyright">
            © 2026 Evoltek. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
