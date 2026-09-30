import React from 'react';
import { Leaf, Zap, Users, ArrowRight } from 'lucide-react';

export default function ReadyToPowerSection() {
  const handleInvestorClick = (e) => {
    e.preventDefault();
    const el = document.querySelector('#investment') || document.querySelector('#calculator');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      alert('Opening Evoltek Investor Portal...');
    }
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    const el = document.querySelector('#franchise') || document.querySelector('#contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      alert('Connecting you with an Evoltek Representative...');
    }
  };

  return (
    <section id="ready-to-power" className="ready-power-cinematic-section" aria-label="Ready to Power the Future">
      {/* Background Image Layer */}
      <div className="ready-power-bg-container">
        <img
          src="/suitable-charging-bg.jpg"
          alt="EVOLTEK Clean Energy EV Charging Hub"
          className="ready-power-bg-photo"
          loading="eager"
        />
        {/* Subtle cinematic gradient vignette for crisp text contrast */}
        <div className="ready-power-vignette-overlay" />
      </div>

      {/* Main Foreground Content (True HTML Typography & Interactive UI) */}
      <div className="container ready-power-main-content">
        {/* Central Headline */}
        <h2 className="ready-cinematic-headline">
          <span className="headline-white">READY TO</span>
          <br />
          <span className="headline-green-glow">POWER THE FUTURE?</span>
        </h2>

        {/* Subtitle */}
        <p className="ready-cinematic-desc">
          Partner with Evoltek and build the next generation
          <br className="desktop-break" />
          of EV charging infrastructure.
        </p>

        {/* Action Buttons */}
        <div className="ready-cinematic-actions">
          {/* Primary Lime Button: BECOME AN INVESTOR */}
          <a
            href="#investment"
            onClick={handleInvestorClick}
            className="btn-cinematic-invest"
            aria-label="Become an Investor"
          >
            <span>BECOME AN INVESTOR</span>
            <span className="btn-arrow-sym">→</span>
          </a>

          {/* Secondary Frosted Glass Button: TALK TO EVOLTEK */}
          <a
            href="#contact"
            onClick={handleContactClick}
            className="btn-cinematic-talk"
            aria-label="Talk to Evoltek"
          >
            <span>TALK TO EVOLTEK</span>
          </a>
        </div>

        {/* Bottom Feature Badges */}
        <div className="ready-cinematic-badges-row">
          <div className="cinematic-badge-card" title="100% Renewable clean energy">
            <span className="badge-glyph-wrap">
              <Leaf size={16} className="badge-svg-icon" />
            </span>
            <span className="badge-text-label">CLEAN ENERGY</span>
          </div>

          <div className="badge-pipe-separator" aria-hidden="true" />

          <div className="cinematic-badge-card" title="High-yield sustainable infrastructure investment">
            <span className="badge-glyph-wrap">
              <Zap size={16} className="badge-svg-icon" />
            </span>
            <span className="badge-text-label">SUSTAINABLE GROWTH</span>
          </div>

          <div className="badge-pipe-separator" aria-hidden="true" />

          <div className="cinematic-badge-card" title="Connecting urban and highway EV communities">
            <span className="badge-glyph-wrap">
              <Users size={16} className="badge-svg-icon" />
            </span>
            <span className="badge-text-label">STRONGER COMMUNITIES</span>
          </div>
        </div>
      </div>
    </section>
  );
}
