import React, { useState } from 'react';
import InvestmentCalculator from './InvestmentCalculator';

export default function InvestmentModelsSection() {
  const [selectedOption, setSelectedOption] = useState('B'); // Default to Option B

  return (
    <>
      {/* 1. CALCULATE YOUR EV OPPORTUNITY SECTION (SOFT GREEN BACKGROUND) */}
      <section id="calculator" className="ev-calc-section relative py-20 bg-[#eff9f2] overflow-hidden">
        <div className="container returns-container max-w-[1240px] mx-auto px-6">
          <InvestmentCalculator />
        </div>
      </section>

      {/* 2. RETURNS AND AGREEMENT SECTION (WHITE BACKGROUND) */}
      <section id="investment" className="returns-agreement-section relative py-20 bg-white overflow-hidden">
        <div className="container returns-container max-w-[1240px] mx-auto px-6">
          <div className="returns-header text-center mb-14">
            <h2 className="returns-title text-[clamp(1.9rem,3.4vw,2.8rem)] font-black tracking-tight text-slate-900 uppercase">
              RETURNS AND AGREEMENT
            </h2>
            <p className="returns-subtitle text-slate-600 text-[1.05rem] mt-3">
              Flexible co-investment structures tailored for long-term growth or high-yield liquidity.
            </p>
          </div>

          {/* 2-Card Options Grid */}
          <div className="returns-cards-grid grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[960px] mx-auto">
            {/* Card A: OPTION A: PERCENTAGE RETURN */}
            <div
              className={`returns-card returns-card-a relative bg-white rounded-3xl p-8 border-2 border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center cursor-pointer overflow-hidden ${selectedOption === 'A' ? 'active-returns-card border-emerald-500 shadow-xl ring-4 ring-emerald-500/20' : ''}`}
              onClick={() => setSelectedOption('A')}
            >
              {/* Corner Decorative Circuit Branches */}
              <div className="card-corner-decor decor-top-right absolute top-3 right-3 w-14 h-14 pointer-events-none opacity-60" aria-hidden="true">
                <svg viewBox="0 0 60 60" fill="none">
                  <path d="M 60 10 L 30 10 L 15 25" stroke="#a7f3d0" strokeWidth="1.2" strokeOpacity="0.7" />
                  <circle cx="15" cy="25" r="2.5" fill="#34d399" />
                  <circle cx="45" cy="10" r="2.5" fill="#34d399" />
                </svg>
              </div>
              <div className="card-corner-decor decor-bottom-left absolute bottom-3 left-3 w-14 h-14 pointer-events-none opacity-60" aria-hidden="true">
                <svg viewBox="0 0 60 60" fill="none">
                  <path d="M 0 50 L 30 50 L 45 35" stroke="#a7f3d0" strokeWidth="1.2" strokeOpacity="0.7" />
                  <circle cx="45" cy="35" r="2.5" fill="#34d399" />
                  <circle cx="15" cy="50" r="2.5" fill="#34d399" />
                </svg>
              </div>

              {/* Card Titles */}
              <div className="returns-card-header mb-6">
                <span className="returns-opt-label block text-[0.82rem] font-bold text-emerald-700 tracking-wider uppercase">OPTION A:</span>
                <h3 className="returns-opt-title text-[1.3rem] font-black text-slate-900 tracking-tight uppercase">PERCENTAGE RETURN</h3>
              </div>

              {/* Center Circular Badge (28% Return) */}
              <div className="returns-circle-badge badge-green-vibrant w-32 h-32 rounded-full flex flex-col items-center justify-center text-white mb-8 shadow-lg bg-gradient-to-br from-[#10b981] to-[#047857]">
                <div className="circle-inner-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2l2.4 2.4 3.4-.6 1.1 3.2 3.1 1.5-.6 3.4 2.4 2.4-1.8 3 1 3.3-3.2 1.1-1.5 3.1-3.4-.6-2.4 2.4-3-1.8-3.3 1-1.1-3.2-3.1-1.5.6-3.4-2.4-2.4 1.8-3-1-3.3 3.2-1.1 1.5-3.1 3.4.6L12 2z"
                      fill="rgba(255,255,255,0.25)"
                    />
                    <text x="12" y="16" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold">%</text>
                  </svg>
                </div>
                <strong className="circle-stat text-3xl font-black leading-none">28%</strong>
                <span className="circle-sub text-[0.75rem] font-semibold uppercase tracking-wider mt-1 text-emerald-100">Return</span>
              </div>

              {/* Bullet Points */}
              <ul className="returns-bullets-list flex flex-col gap-3 text-left mb-8 w-full max-w-[300px] list-none p-0">
                <li className="flex items-center gap-2.5 text-[0.92rem] text-slate-700 font-medium">
                  <span className="green-bullet w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                  <span>28% return</span>
                </li>
                <li className="flex items-center gap-2.5 text-[0.92rem] text-slate-700 font-medium">
                  <span className="green-bullet w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                  <span>10-year agreement</span>
                </li>
                <li className="flex items-center gap-2.5 text-[0.92rem] text-slate-700 font-medium">
                  <span className="green-bullet w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                  <span>Full renewal after 10 years</span>
                </li>
              </ul>

              {/* CTA Button */}
              <button
                className="btn-returns-select btn-returns-teal w-full max-w-[260px] py-3.5 px-6 rounded-full font-extrabold text-[0.92rem] uppercase tracking-wider cursor-pointer transition-all duration-200 shadow-md bg-[#0f764a] hover:bg-[#0b5e3a] text-white border-0"
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
              className={`returns-card returns-card-b relative bg-white rounded-3xl p-8 border-2 border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center cursor-pointer overflow-hidden ${selectedOption === 'B' ? 'active-returns-card border-emerald-500 shadow-xl ring-4 ring-emerald-500/20' : ''}`}
              onClick={() => setSelectedOption('B')}
            >
              {/* Corner Decorative Circuit Branches */}
              <div className="card-corner-decor decor-top-right absolute top-3 right-3 w-14 h-14 pointer-events-none opacity-60" aria-hidden="true">
                <svg viewBox="0 0 60 60" fill="none">
                  <path d="M 60 10 L 30 10 L 15 25" stroke="#a7f3d0" strokeWidth="1.2" strokeOpacity="0.7" />
                  <circle cx="15" cy="25" r="2.5" fill="#34d399" />
                  <circle cx="45" cy="10" r="2.5" fill="#34d399" />
                </svg>
              </div>
              <div className="card-corner-decor decor-bottom-left absolute bottom-3 left-3 w-14 h-14 pointer-events-none opacity-60" aria-hidden="true">
                <svg viewBox="0 0 60 60" fill="none">
                  <path d="M 0 50 L 30 50 L 45 35" stroke="#a7f3d0" strokeWidth="1.2" strokeOpacity="0.7" />
                  <circle cx="45" cy="35" r="2.5" fill="#34d399" />
                  <circle cx="15" cy="50" r="2.5" fill="#34d399" />
                </svg>
              </div>

              {/* Card Titles */}
              <div className="returns-card-header mb-6">
                <span className="returns-opt-label block text-[0.82rem] font-bold text-emerald-700 tracking-wider uppercase">OPTION B:</span>
                <h3 className="returns-opt-title text-[1.3rem] font-black text-slate-900 tracking-tight uppercase">FIXED RETURN</h3>
              </div>

              {/* Center Circular Badge (5% Monthly Return) */}
              <div className="returns-circle-badge badge-forest-green w-32 h-32 rounded-full flex flex-col items-center justify-center text-white mb-8 shadow-lg bg-gradient-to-br from-[#065f46] to-[#022c22]">
                <div className="circle-inner-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="6" width="20" height="12" rx="2" />
                    <circle cx="12" cy="12" r="2" />
                    <path d="M6 12h.01M18 12h.01" />
                    <path d="M6 18H2v-6M18 18h4v-6" />
                  </svg>
                </div>
                <strong className="circle-stat text-3xl font-black leading-none">5%</strong>
                <span className="circle-sub text-[0.75rem] font-semibold uppercase tracking-wider mt-1 text-emerald-100 text-center">Monthly<br />Return</span>
              </div>

              {/* Bullet Points */}
              <ul className="returns-bullets-list flex flex-col gap-3 text-left mb-8 w-full max-w-[300px] list-none p-0">
                <li className="flex items-center gap-2.5 text-[0.92rem] text-slate-700 font-medium">
                  <span className="green-bullet w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                  <span>5-year agreement</span>
                </li>
                <li className="flex items-center gap-2.5 text-[0.92rem] text-slate-700 font-medium">
                  <span className="green-bullet w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                  <span>5% Monthly Return on Investment (60% p.a.)</span>
                </li>
                <li className="flex items-center gap-2.5 text-[0.92rem] text-slate-700 font-medium">
                  <span className="green-bullet w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                  <span>Direct monthly cash distribution</span>
                </li>
              </ul>

              {/* CTA Button */}
              <button
                className="btn-returns-select btn-returns-bright w-full max-w-[260px] py-3.5 px-6 rounded-full font-extrabold text-[0.92rem] uppercase tracking-wider cursor-pointer transition-all duration-200 shadow-md bg-[#16a34a] hover:bg-[#15803d] text-white border-0"
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
