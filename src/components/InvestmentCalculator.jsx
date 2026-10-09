import React, { useState, useMemo } from 'react';

export default function InvestmentCalculator() {
  // Input states initialized to the exact values in the reference image
  const [numChargers, setNumChargers] = useState(4);
  const [chargerCapacity, setChargerCapacity] = useState('120 kW');
  const [investmentAmount, setInvestmentAmount] = useState(2500000);
  const [sessionsPerDay, setSessionsPerDay] = useState(40);
  const [energyPerSession, setEnergyPerSession] = useState(30); // kWh
  const [customerRate, setCustomerRate] = useState(18); // ₹/kWh
  const [energyCost, setEnergyCost] = useState(8); // ₹/kWh
  const [operatingCosts, setOperatingCosts] = useState(800000); // ₹

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const capacityOptions = ['60 kW', '120 kW', '180 kW', '240 kW'];

  // Calculations
  const calculations = useMemo(() => {
    // Dynamic formula with realistic outputs
    const dailyEnergy = numChargers * sessionsPerDay * energyPerSession;
    // Annual energy (kWh)
    const annualEnergy = dailyEnergy * 365;
    // Annual revenue (₹)
    const annualRevenue = annualEnergy * customerRate;
    // Annual energy purchase cost (₹)
    const annualEnergyCost = annualEnergy * energyCost;
    // Net annual profit (₹)
    const grossProfit = annualRevenue - annualEnergyCost;
    const netAnnualProfit = Math.max(0, grossProfit - operatingCosts);

    // Payback period (Years)
    const paybackYears = netAnnualProfit > 0 ? (investmentAmount / netAnnualProfit).toFixed(1) : '—';

    // 5-Year ROI (%)
    const fiveYearROI = investmentAmount > 0
      ? Math.round(((netAnnualProfit * 5 - investmentAmount) / investmentAmount) * 100)
      : 0;

    return {
      annualEnergy,
      annualRevenue,
      netAnnualProfit,
      paybackYears,
      fiveYearROI
    };
  }, [numChargers, sessionsPerDay, energyPerSession, customerRate, energyCost, operatingCosts, investmentAmount]);

  // Number formatters
  const formatINR = (num) => '₹' + Math.round(num).toLocaleString('en-IN');
  const formatIndianNumber = (num) => Math.round(num).toLocaleString('en-IN');

  // Slider background progress fill calculation
  const getSliderFill = (val, min, max) => {
    const pct = ((val - min) / (max - min)) * 100;
    return `linear-gradient(to right, #10b981 0%, #10b981 ${pct}%, #e2e8f0 ${pct}%, #e2e8f0 100%)`;
  };

  return (
    <div className="roi-calculator-container w-full max-w-[1240px] mx-auto">
      {/* Top Header */}
      <div className="roi-calculator-header text-center mb-12">
        <h2 className="roi-title-exact text-[clamp(1.9rem,3.4vw,2.8rem)] font-black tracking-tight text-slate-900 uppercase">CALCULATE YOUR EV OPPORTUNITY</h2>
        <p className="roi-subtitle-exact text-slate-600 text-[1.05rem] mt-3 max-w-[700px] mx-auto">
          Customize your parameters to estimate real-time revenue, profit margins, and payback timeline.
        </p>
      </div>

      {/* Main 2-Column Dashboard Grid */}
      <div className="roi-calculator-grid grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
        {/* ================= LEFT COLUMN: INPUT SLIDERS ================= */}
        <div className="roi-inputs-card bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md flex flex-col gap-5">
          {/* Row 1: Number of Chargers */}
          <div className="roi-input-row flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
            <span className="roi-input-label">Number of Chargers (Units)</span>
            <span className="roi-input-chevron">›</span>
            <div className="roi-slider-track-wrap">
              <input
                type="range"
                min="1"
                max="20"
                value={numChargers}
                onChange={(e) => setNumChargers(Number(e.target.value))}
                style={{ background: getSliderFill(numChargers, 1, 20) }}
                className="roi-native-slider"
              />
            </div>
            <div className="roi-value-pill">{numChargers}</div>
          </div>

          {/* Row 2: Charger Capacity Dropdown */}
          <div className="roi-input-row">
            <span className="roi-input-label">Charger Capacity</span>
            <span className="roi-input-chevron">›</span>
            <div className="roi-dropdown-wrapper">
              <button
                type="button"
                className="roi-dropdown-button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>{chargerCapacity}</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="roi-dropdown-options-menu">
                  {capacityOptions.map((opt) => (
                    <div
                      key={opt}
                      className={`roi-dropdown-option ${chargerCapacity === opt ? 'active-option' : ''}`}
                      onClick={() => {
                        setChargerCapacity(opt);
                        setIsDropdownOpen(false);
                      }}
                    >
                      <span>{opt}</span>
                      {chargerCapacity === opt && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Row 3: Investment Amount */}
          <div className="roi-input-row">
            <span className="roi-input-label">Investment Amount (₹)</span>
            <span className="roi-input-chevron">›</span>
            <div className="roi-slider-track-wrap">
              <input
                type="range"
                min="500000"
                max="10000000"
                step="100000"
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                style={{ background: getSliderFill(investmentAmount, 500000, 10000000) }}
                className="roi-native-slider"
              />
            </div>
            <div className="roi-value-pill">{formatIndianNumber(investmentAmount)}</div>
          </div>

          {/* Row 4: Sessions per day */}
          <div className="roi-input-row">
            <span className="roi-input-label">Sessions per day</span>
            <span className="roi-input-chevron">›</span>
            <div className="roi-slider-track-wrap">
              <input
                type="range"
                min="10"
                max="100"
                value={sessionsPerDay}
                onChange={(e) => setSessionsPerDay(Number(e.target.value))}
                style={{ background: getSliderFill(sessionsPerDay, 10, 100) }}
                className="roi-native-slider"
              />
            </div>
            <div className="roi-value-pill">{sessionsPerDay}</div>
          </div>

          {/* Row 5: Energy per session (kWh) */}
          <div className="roi-input-row">
            <span className="roi-input-label">Energy per session (kWh)</span>
            <span className="roi-input-chevron">›</span>
            <div className="roi-slider-track-wrap">
              <input
                type="range"
                min="10"
                max="80"
                value={energyPerSession}
                onChange={(e) => setEnergyPerSession(Number(e.target.value))}
                style={{ background: getSliderFill(energyPerSession, 10, 80) }}
                className="roi-native-slider"
              />
            </div>
            <div className="roi-value-pill">{energyPerSession}</div>
          </div>

          {/* Row 6: Customer Rate (₹/kWh) */}
          <div className="roi-input-row">
            <span className="roi-input-label">Customer Rate (₹/kWh)</span>
            <span className="roi-input-chevron">›</span>
            <div className="roi-slider-track-wrap">
              <input
                type="range"
                min="10"
                max="35"
                value={customerRate}
                onChange={(e) => setCustomerRate(Number(e.target.value))}
                style={{ background: getSliderFill(customerRate, 10, 35) }}
                className="roi-native-slider"
              />
            </div>
            <div className="roi-value-pill">{customerRate}</div>
          </div>

          {/* Row 7: Energy Purchase Cost (₹/kWh) */}
          <div className="roi-input-row">
            <span className="roi-input-label">Energy Purchase Cost (₹/kWh)</span>
            <span className="roi-input-chevron">›</span>
            <div className="roi-slider-track-wrap">
              <input
                type="range"
                min="4"
                max="16"
                value={energyCost}
                onChange={(e) => setEnergyCost(Number(e.target.value))}
                style={{ background: getSliderFill(energyCost, 4, 16) }}
                className="roi-native-slider"
              />
            </div>
            <div className="roi-value-pill">{energyCost}</div>
          </div>

          {/* Row 8: Annual Operating Costs (₹) */}
          <div className="roi-input-row">
            <span className="roi-input-label">Annual Operating Costs (₹)</span>
            <span className="roi-input-chevron">›</span>
            <div className="roi-slider-track-wrap">
              <input
                type="range"
                min="100000"
                max="3000000"
                step="50000"
                value={operatingCosts}
                onChange={(e) => setOperatingCosts(Number(e.target.value))}
                style={{ background: getSliderFill(operatingCosts, 100000, 3000000) }}
                className="roi-native-slider"
              />
            </div>
            <div className="roi-value-pill">{formatIndianNumber(operatingCosts)}</div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: 6 METRIC CARDS ================= */}
        <div className="roi-outputs-cards-grid grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Card 1: Total Investment */}
          <div className="roi-stat-card bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-500 transition-all duration-300 flex items-center gap-4">
            <div className="roi-stat-icon-wrap w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-500/20 flex items-center justify-center shrink-0">
              {/* 3D Stack of Coins SVG */}
              <svg width="34" height="34" viewBox="0 0 36 36" fill="none">
                <ellipse cx="18" cy="10" rx="11" ry="4.5" fill="#10b981" />
                <path d="M7 10v5c0 2.5 4.9 4.5 11 4.5s11-2 11-4.5v-5" stroke="#059669" strokeWidth="2" fill="#34d399" />
                <path d="M7 15v5c0 2.5 4.9 4.5 11 4.5s11-2 11-4.5v-5" stroke="#047857" strokeWidth="2" fill="#10b981" />
                <path d="M7 20v5c0 2.5 4.9 4.5 11 4.5s11-2 11-4.5v-5" stroke="#064e3b" strokeWidth="2" fill="#059669" />
              </svg>
            </div>
            <div className="roi-stat-text-wrap flex flex-col text-left">
              <span className="roi-stat-label text-[0.82rem] font-semibold text-slate-500">Total Investment</span>
              <strong className="roi-stat-value text-[1.3rem] font-black text-slate-900 tracking-tight leading-tight">{formatINR(investmentAmount)}</strong>
            </div>
          </div>

          {/* Card 2: Annual Revenue */}
          <div className="roi-stat-card bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-500 transition-all duration-300 flex items-center gap-4">
            <div className="roi-stat-icon-wrap w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-500/20 flex items-center justify-center shrink-0">
              {/* Bar Chart with Upward Trend Arrow */}
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
                <polyline points="4 8 10 3 14 6 20 2" stroke="#059669" strokeWidth="2.4" />
                <polyline points="16 2 20 2 20 6" stroke="#059669" strokeWidth="2.4" />
              </svg>
            </div>
            <div className="roi-stat-text-wrap flex flex-col text-left">
              <span className="roi-stat-label text-[0.82rem] font-semibold text-slate-500">Annual Revenue</span>
              <strong className="roi-stat-value text-[1.3rem] font-black text-slate-900 tracking-tight leading-tight">{formatINR(calculations.annualRevenue)}</strong>
            </div>
          </div>

          {/* Card 3: Net Annual Profit */}
          <div className="roi-stat-card bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-500 transition-all duration-300 flex items-center gap-4">
            <div className="roi-stat-icon-wrap w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-500/20 flex items-center justify-center shrink-0">
              {/* 3D Green Coins Stack */}
              <svg width="34" height="34" viewBox="0 0 36 36" fill="none">
                <ellipse cx="14" cy="9" rx="9" ry="4" fill="#34d399" />
                <path d="M5 9v4c0 2.2 4 4 9 4s9-1.8 9-4V9" stroke="#059669" strokeWidth="1.8" fill="#10b981" />
                <path d="M5 13v4c0 2.2 4 4 9 4s9-1.8 9-4v-4" stroke="#047857" strokeWidth="1.8" fill="#059669" />
                <ellipse cx="23" cy="18" rx="8" ry="3.5" fill="#34d399" />
                <path d="M15 18v4c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5v-4" stroke="#059669" strokeWidth="1.8" fill="#10b981" />
                <path d="M15 22v4c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5v-4" stroke="#047857" strokeWidth="1.8" fill="#059669" />
              </svg>
            </div>
            <div className="roi-stat-text-wrap flex flex-col text-left">
              <span className="roi-stat-label text-[0.82rem] font-semibold text-slate-500">Net Annual Profit</span>
              <strong className="roi-stat-value text-[1.3rem] font-black text-slate-900 tracking-tight leading-tight">{formatINR(calculations.netAnnualProfit)}</strong>
            </div>
          </div>

          {/* Card 4: Payback Period */}
          <div className="roi-stat-card bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-500 transition-all duration-300 flex items-center gap-4">
            <div className="roi-stat-icon-wrap w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-500/20 flex items-center justify-center shrink-0">
              {/* Clock with Arrow SVG */}
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <polyline points="12 6 12 12 15 15" />
              </svg>
            </div>
            <div className="roi-stat-text-wrap flex flex-col text-left">
              <span className="roi-stat-label text-[0.82rem] font-semibold text-slate-500">Payback Period</span>
              <strong className="roi-stat-value text-[1.3rem] font-black text-slate-900 tracking-tight leading-tight">{calculations.paybackYears} years</strong>
            </div>
          </div>

          {/* Card 5: 5-Year ROI */}
          <div className="roi-stat-card bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-500 transition-all duration-300 flex items-center gap-4">
            <div className="roi-stat-icon-wrap w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-500/20 flex items-center justify-center shrink-0">
              {/* Green Graph Upward Bars */}
              <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3v18h18" />
                <path d="M18 9l-5 5-4-4-3 3" stroke="#059669" strokeWidth="2.4" />
                <polyline points="14 9 18 9 18 13" stroke="#059669" strokeWidth="2.4" />
              </svg>
            </div>
            <div className="roi-stat-text-wrap flex flex-col text-left">
              <span className="roi-stat-label text-[0.82rem] font-semibold text-slate-500">5-Year ROI</span>
              <strong className="roi-stat-value text-[1.3rem] font-black text-slate-900 tracking-tight leading-tight">{calculations.fiveYearROI}%</strong>
            </div>
          </div>

          {/* Card 6: Annual Energy Delivered */}
          <div className="roi-stat-card bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-500 transition-all duration-300 flex items-center gap-4">
            <div className="roi-stat-icon-wrap w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-500/20 flex items-center justify-center shrink-0">
              {/* Solid Green Energy Bolt SVG */}
              <svg width="34" height="34" viewBox="0 0 24 24" fill="#10b981">
                <path d="M13 2L3 14h7v8l10-12h-7l3-8z" />
              </svg>
            </div>
            <div className="roi-stat-text-wrap flex flex-col text-left">
              <span className="roi-stat-label text-[0.82rem] font-semibold text-slate-500">Annual Energy Delivered</span>
              <strong className="roi-stat-value text-[1.3rem] font-black text-slate-900 tracking-tight leading-tight">{formatIndianNumber(calculations.annualEnergy)} kWh</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

