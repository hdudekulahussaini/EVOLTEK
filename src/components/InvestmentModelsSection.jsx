import React, { useState } from 'react';
import InvestmentCalculator from './InvestmentCalculator';

export default function InvestmentModelsSection() {
  const [selectedOption, setSelectedOption] = useState('B'); // Default to Option B

  return (
    <>
      {/* 1. CALCULATE YOUR EV OPPORTUNITY SECTION (SOFT GREEN BACKGROUND) */}
      <section id="calculator" className="ev-calc-section">
        <div className="container returns-container">
          <InvestmentCalculator />
        </div>
      </section>

      {/* 2. RETURNS AND AGREEMENT SECTION (WHITE BACKGROUND) */}
      <section id="investment" className="returns-agreement-section">
        <div className="container returns-container">
          <div className="returns-header">
            <h2 className="returns-title">
              RETURNS AND AGREEMENT
            </h2>
            <p className="returns-subtitle">
              Flexible co-investment structures tailored for long-term growth or high-yield liquidity.
            </p>
          </div>

          {/* 2-Card Options Grid */}
          <div className="returns-cards-grid">
          {/* Card A: OPTION A: PERCENTAGE RETURN */}
          <div
            className={`returns-card returns-card-a ${selectedOption === 'A' ? 'active-returns-card' : ''}`}
            onClick={() => setSelectedOption('A')}
          >
            {/* Corner Decorative Circuit Branches */}
            <div className="card-corner-decor decor-top-right" aria-hidden="true">
              <svg viewBox="0 0 60 60" fill="none">
                <path d="M 60 10 L 30 10 L 15 25" stroke="#a7f3d0" strokeWidth="1.2" strokeOpacity="0.7" />
                <circle cx="15" cy="25" r="2.5" fill="#34d399" />
                <circle cx="45" cy="10" r="2.5" fill="#34d399" />
              </svg>
            </div>
            <div className="card-corner-decor decor-bottom-left" aria-hidden="true">
              <svg viewBox="0 0 60 60" fill="none">
                <path d="M 0 50 L 30 50 L 45 35" stroke="#a7f3d0" strokeWidth="1.2" strokeOpacity="0.7" />
                <circle cx="45" cy="35" r="2.5" fill="#34d399" />
                <circle cx="15" cy="50" r="2.5" fill="#34d399" />
              </svg>
            </div>

            {/* Card Titles */}
            <div className="returns-card-header">
              <span className="returns-opt-label">OPTION A:</span>
              <h3 className="returns-opt-title">PERCENTAGE RETURN</h3>
            </div>

            {/* Center Circular Badge (28% Return) */}
            <div className="returns-circle-badge badge-green-vibrant">
              <div className="circle-inner-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 2l2.4 2.4 3.4-.6 1.1 3.2 3.1 1.5-.6 3.4 2.4 2.4-1.8 3 1 3.3-3.2 1.1-1.5 3.1-3.4-.6-2.4 2.4-3-1.8-3.3 1-1.1-3.2-3.1-1.5.6-3.4-2.4-2.4 1.8-3-1-3.3 3.2-1.1 1.5-3.1 3.4.6L12 2z"
                    fill="rgba(255,255,255,0.25)"
                  />
                  <text x="12" y="16" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">%</text>
                </svg>
              </div>
              <strong className="circle-stat">28%</strong>
              <span className="circle-sub">Return</span>
            </div>

            {/* Bullet Points */}
            <ul className="returns-bullets-list">
              <li>
                <span className="green-bullet"></span>
                <span>28% return</span>
              </li>
              <li>
                <span className="green-bullet"></span>
                <span>10-year agreement</span>
              </li>
              <li>
                <span className="green-bullet"></span>
                <span>Full renewal after 10 years</span>
              </li>
            </ul>

            {/* CTA Button */}
            <button
              className="btn-returns-select btn-returns-teal"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedOption('A');
              }}
            >
              Select Option A
            </button>
          </div>

          {/* Card B: OPTION B: FIXED RETURN */}
          <div
            className={`returns-card returns-card-b ${selectedOption === 'B' ? 'active-returns-card' : ''}`}
            onClick={() => setSelectedOption('B')}
          >
            {/* Corner Decorative Circuit Branches */}
            <div className="card-corner-decor decor-top-right" aria-hidden="true">
              <svg viewBox="0 0 60 60" fill="none">
                <path d="M 60 10 L 30 10 L 15 25" stroke="#a7f3d0" strokeWidth="1.2" strokeOpacity="0.7" />
                <circle cx="15" cy="25" r="2.5" fill="#34d399" />
                <circle cx="45" cy="10" r="2.5" fill="#34d399" />
              </svg>
            </div>
            <div className="card-corner-decor decor-bottom-left" aria-hidden="true">
              <svg viewBox="0 0 60 60" fill="none">
                <path d="M 0 50 L 30 50 L 45 35" stroke="#a7f3d0" strokeWidth="1.2" strokeOpacity="0.7" />
                <circle cx="45" cy="35" r="2.5" fill="#34d399" />
                <circle cx="15" cy="50" r="2.5" fill="#34d399" />
              </svg>
            </div>

            {/* Card Titles */}
            <div className="returns-card-header">
              <span className="returns-opt-label">OPTION B:</span>
              <h3 className="returns-opt-title">FIXED RETURN</h3>
            </div>

            {/* Center Circular Badge (5% Monthly Return) */}
            <div className="returns-circle-badge badge-forest-green">
              <div className="circle-inner-icon">
                {/* Money stack icon */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="6" width="20" height="12" rx="2" />
                  <circle cx="12" cy="12" r="2" />
                  <path d="M6 12h.01M18 12h.01" />
                  <path d="M6 18H2v-6M18 18h4v-6" />
                </svg>
              </div>
              <strong className="circle-stat">5%</strong>
              <span className="circle-sub">Monthly<br />Return</span>
            </div>

            {/* Bullet Points */}
            <ul className="returns-bullets-list">
              <li>
                <span className="green-bullet"></span>
                <span>5-year agreement</span>
              </li>
              <li>
                <span className="green-bullet"></span>
                <span>5% Monthly Return on Investment (60% p.a.)</span>
              </li>
              <li>
                <span className="green-bullet"></span>
                <span>Direct monthly cash distribution</span>
              </li>
            </ul>

            {/* CTA Button */}
            <button
              className="btn-returns-select btn-returns-bright"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedOption('B');
              }}
            >
              Select Option B
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
