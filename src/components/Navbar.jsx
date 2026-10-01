import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Charging Network');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Charging Network', href: '#charging-stations' },
    { name: 'Locations', href: '#highway-experience' },
    { name: 'Investment', href: '#investment' },
    { name: 'Franchise', href: '#franchise' },
    { name: 'About', href: '#charging-stations' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (link) => {
    setActiveTab(link.name);
    setMobileMenuOpen(false);
    const target = document.querySelector(link.href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="daylight-nav-wrapper">
      <div className="daylight-nav-container">
        {/* Brand Logo with evoltek-logo.png */}
        <a
          href="#home"
          className="daylight-brand"
          onClick={() => setActiveTab('Charging Network')}
          title="EVOLTEK"
        >
          <img
            src="/evoltek-logo.png"
            alt="EVOLTEK"
            className="daylight-logo-img"
          />
        </a>

        {/* Center Navigation Links */}
        <nav className={`daylight-nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link)}
              className={`daylight-nav-item ${activeTab === link.name ? 'active' : ''}`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Right Action Buttons: INVEST NOW (Green) & GET APP (White) */}
        <div className="daylight-nav-actions">
          <button
            className="btn-invest-green"
            onClick={() => alert('Opening Investment Portal...')}
          >
            INVEST NOW
          </button>
          <button
            className="btn-get-app"
            onClick={() => {
              const el = document.querySelector('#app');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            GET APP
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            className="daylight-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
