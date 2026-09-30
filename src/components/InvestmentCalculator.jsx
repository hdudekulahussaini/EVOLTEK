import React, { useState, useMemo } from 'react';

export default function InvestmentCalculator() {
  // Input states with defaults matching the reference mockup
  const [numChargers, setNumChargers] = useState(1);
  const [chargerCapacity, setChargerCapacity] = useState('60 kW');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [sessionsPerDay, setSessionsPerDay] = useState(35);
  const [energyPerSession, setEnergyPerSession] = useState(28); // kWh
  const [customerRate, setCustomerRate] = useState(19); // ₹/kWh
  const [energyCost, setEnergyCost] = useState(8); // ₹/kWh
  const [operatingCosts, setOperatingCosts] = useState(600000); // ₹6,00,000

  // Cost per charger capacity tier
  const capacityCostMap = {
    '60 kW': 2500000,
    '120 kW': 4500000,
    '180 kW': 6200000,
    '240 kW': 8000000,
  };

  const capacityOptions = ['60 kW', '120 kW', '180 kW', '240 kW'];

  // Total Investment amount calculation
  const totalInvestment = useMemo(() => {
    return numChargers * (capacityCostMap[chargerCapacity] || 2500000);
  }, [numChargers, chargerCapacity]);

  // Live calculation model formulas matching mockup numbers
  const calculations = useMemo(() => {
    const dailyEnergy = numChargers * sessionsPerDay * energyPerSession;
    const annualEnergy = dailyEnergy * 365; // e.g. 1 * 35 * 28 * 365 = 3,57,700 kWh
    const annualRevenue = annualEnergy * customerRate; // e.g. 3,57,700 * 19 = ₹67,96,300
    const annualEnergyCost = annualEnergy * energyCost; // e.g. 3,57,700 * 8 = ₹28,61,600
    const grossProfit = annualRevenue - annualEnergyCost;
    const netAnnualProfit = Math.max(0, grossProfit - operatingCosts); // e.g. 39,34,700 - 6,00,000 = ₹33,34,700
    
    // Payback period in years
    const paybackYears = netAnnualProfit > 0 ? (totalInvestment / netAnnualProfit).toFixed(1) : '—';

    // 5-Year Net ROI percentage: ((5 * Net Profit - Investment) / Investment) * 100
    // e.g. ((33,34,700 * 5 - 25,00,000) / 25,00,000) * 100 = 567%
    const fiveYearROI = totalInvestment > 0 
      ? Math.round(((netAnnualProfit * 5 - totalInvestment) / totalInvestment) * 100) 
      : 0;

    return {
      annualEnergy,
      annualRevenue,
      netAnnualProfit,
      paybackYears,
      fiveYearROI
    };
  }, [numChargers, sessionsPerDay, energyPerSession, customerRate, energyCost, operatingCosts, totalInvestment]);

  // Format currency in Indian Rupees format (₹25,00,000)
  const formatINR = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  // Format integer in Indian numbering (3,57,700)
  const formatIndianNumber = (val) => {
    return new Intl.NumberFormat('en-IN').format(Math.round(val));
  };

  // Monthly breakdown multipliers for the 12-month energy delivered bar chart
  const months = [
    { label: 'Jan', factor: 0.88 },
    { label: 'Feb', factor: 0.92 },
    { label: 'Mar', factor: 1.05 },
    { label: 'Apr', factor: 0.96 },
    { label: 'May', factor: 1.15 },
    { label: 'Jun', factor: 1.08 },
    { label: 'Jul', factor: 1.25 },
    { label: 'Aug', factor: 1.30 },
    { label: 'Sep', factor: 1.10 },
    { label: 'Oct', factor: 1.18 },
    { label: 'Nov', factor: 1.35 },
    { label: 'Dec', factor: 1.40 },
  ];

  const handleDownloadPlan = () => {
    const summary = `
EVOLTEK - EV OPPORTUNITY SUMMARY
=================================
Number of Chargers: ${numChargers} (${chargerCapacity})
Total Investment: ${formatINR(totalInvestment)}
Sessions/Day: ${sessionsPerDay} | Energy/Session: ${energyPerSession} kWh
Annual Energy Delivered: ${formatIndianNumber(calculations.annualEnergy)} kWh
Annual Revenue: ${formatINR(calculations.annualRevenue)}
Net Annual Profit: ${formatINR(calculations.netAnnualProfit)}
Payback Period: ${calculations.paybackYears} Years
5-Year ROI: ${calculations.fiveYearROI}%
=================================
Download timestamp: ${new Date().toLocaleString()}
`;
    const blob = new Blob([summary], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `EVOLTEK_Opportunity_Plan_${chargerCapacity.replace(' ', '')}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="ev-calc-wrapper">
      {/* Title */}
      <div className="ev-calc-header">
        <h2 className="ev-calc-main-title">
          CALCULATE YOUR EV OPPORTUNITY
        </h2>
      </div>

      {/* Main Glassmorphic/Solid Card Container */}
      <div className="ev-calc-card-container">
        {/* Left and Right ambient decorative constellation dots */}
        <div className="calc-side-dots dots-left" aria-hidden="true">
          <svg width="48" height="120" viewBox="0 0 48 120" fill="none">
            <circle cx="8" cy="20" r="3" fill="#10b981" fillOpacity="0.4" />
            <circle cx="24" cy="40" r="4.5" fill="#10b981" fillOpacity="0.7" />
            <circle cx="40" cy="55" r="2.5" fill="#34d399" fillOpacity="0.5" />
            <circle cx="12" cy="75" r="3.5" fill="#10b981" fillOpacity="0.6" />
            <circle cx="28" cy="95" r="2.5" fill="#059669" fillOpacity="0.5" />
            <circle cx="44" cy="110" r="3" fill="#34d399" fillOpacity="0.3" />
          </svg>
        </div>

        <div className="calc-side-dots dots-right" aria-hidden="true">
          <svg width="48" height="120" viewBox="0 0 48 120" fill="none">
            <circle cx="40" cy="20" r="3" fill="#10b981" fillOpacity="0.4" />
            <circle cx="24" cy="40" r="4.5" fill="#10b981" fillOpacity="0.7" />
            <circle cx="8" cy="55" r="2.5" fill="#34d399" fillOpacity="0.5" />
            <circle cx="36" cy="75" r="3.5" fill="#10b981" fillOpacity="0.6" />
            <circle cx="20" cy="95" r="2.5" fill="#059669" fillOpacity="0.5" />
            <circle cx="4" cy="110" r="3" fill="#34d399" fillOpacity="0.3" />
          </svg>
        </div>

        {/* Dashboard 2-Sided Layout */}
        <div className="calc-dashboard-layout">
          {/* ================= LEFT: INPUT PARAMETERS ================= */}
          <div className="calc-inputs-section">
            <h3 className="calc-inputs-heading">INPUT PARAMETERS</h3>

            <div className="calc-inputs-grid">
              {/* Row 1, Col 1: Number of Chargers */}
              <div className="calc-input-block">
                <div className="calc-label-row">
                  <span className="calc-label">Number of Chargers</span>
                  <svg className="calc-label-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="2" width="14" height="20" rx="2" />
                    <circle cx="10" cy="10" r="3" />
                    <path d="M10 13v7" />
                    <path d="M17 7h4v6a2 2 0 0 1-2 2h-2" />
                  </svg>
                </div>
                <div className="calc-slider-wrapper">
                  <div 
                    className="calc-floating-pill" 
                    style={{ left: `${((numChargers - 1) / 19) * 100}%` }}
                  >
                    {numChargers}
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    value={numChargers}
                    onChange={(e) => setNumChargers(Number(e.target.value))}
                    className="calc-range-slider"
                  />
                  <div className="calc-range-labels">
                    <span>1—</span>
                    <span>—20</span>
                  </div>
                </div>
              </div>

              {/* Row 1, Col 2: Charger Capacity */}
              <div className="calc-input-block">
                <div className="calc-label-row">
                  <span className="calc-label">Charger Capacity</span>
                </div>
                <div className="calc-dropdown-container">
                  <button
                    type="button"
                    className="calc-dropdown-trigger"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  >
                    <span>{chargerCapacity}</span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#475569"
                      strokeWidth="2.5"
                      style={{ transform: isDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>

                  {isDropdownOpen && (
                    <div className="calc-dropdown-menu">
                      {capacityOptions.map((opt) => (
                        <div
                          key={opt}
                          className={`calc-dropdown-item ${chargerCapacity === opt ? 'selected' : ''}`}
                          onClick={() => {
                            setChargerCapacity(opt);
                            setIsDropdownOpen(false);
                          }}
                        >
                          <span>{opt}</span>
                          {chargerCapacity === opt && (
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Row 2, Col 1: Investment Amount */}
              <div className="calc-input-block">
                <div className="calc-label-row">
                  <span className="calc-label">Investment Amount</span>
                  <span className="calc-currency-sym">₹</span>
                </div>
                <div className="calc-text-input-wrap">
                  <input
                    type="text"
                    readOnly
                    value={formatINR(totalInvestment)}
                    className="calc-text-input"
                  />
                </div>
              </div>

              {/* Row 2, Col 2: Empty Spacer for matching layout */}
              <div className="calc-input-block-spacer" aria-hidden="true"></div>

              {/* Row 3, Col 1: Sessions per Day */}
              <div className="calc-input-block">
                <div className="calc-label-row">
                  <span className="calc-label">Sessions per Day</span>
                  <svg className="calc-label-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div className="calc-slider-wrapper">
                  <div 
                    className="calc-floating-pill" 
                    style={{ left: `${((sessionsPerDay - 10) / 90) * 100}%` }}
                  >
                    {sessionsPerDay}
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    value={sessionsPerDay}
                    onChange={(e) => setSessionsPerDay(Number(e.target.value))}
                    className="calc-range-slider"
                  />
                  <div className="calc-range-labels">
                    <span>10—</span>
                    <span>—100</span>
                  </div>
                </div>
              </div>

              {/* Row 3, Col 2: Energy per Session (kWh) */}
              <div className="calc-input-block">
                <div className="calc-label-row">
                  <span className="calc-label">Energy per Session (kWh)</span>
                  <svg className="calc-label-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <div className="calc-slider-wrapper">
                  <div 
                    className="calc-floating-pill pill-wide" 
                    style={{ left: `${((energyPerSession - 10) / 70) * 100}%` }}
                  >
                    {energyPerSession} kWh
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="80"
                    value={energyPerSession}
                    onChange={(e) => setEnergyPerSession(Number(e.target.value))}
                    className="calc-range-slider"
                  />
                  <div className="calc-range-labels">
                    <span>10—</span>
                    <span>—80</span>
                  </div>
                </div>
              </div>

              {/* Row 4, Col 1: Customer Rate (₹/kWh) */}
              <div className="calc-input-block">
                <div className="calc-label-row">
                  <span className="calc-label">Customer Rate (₹/kWh)</span>
                  <span className="calc-currency-sym">₹</span>
                </div>
                <div className="calc-text-input-wrap">
                  <input
                    type="text"
                    value={`₹${customerRate} / kWh`}
                    onChange={(e) => {
                      const num = parseInt(e.target.value.replace(/[^0-9]/g, ''), 10);
                      if (!isNaN(num)) setCustomerRate(num);
                    }}
                    className="calc-text-input"
                  />
                </div>
              </div>

              {/* Row 4, Col 2: Energy Purchase Cost (₹/kWh) */}
              <div className="calc-input-block">
                <div className="calc-label-row">
                  <span className="calc-label">Energy Purchase Cost (₹/kWh)</span>
                  <span className="calc-currency-sym">₹</span>
                </div>
                <div className="calc-text-input-wrap">
                  <input
                    type="text"
                    value={`₹${energyCost} / kWh`}
                    onChange={(e) => {
                      const num = parseInt(e.target.value.replace(/[^0-9]/g, ''), 10);
                      if (!isNaN(num)) setEnergyCost(num);
                    }}
                    className="calc-text-input"
                  />
                </div>
              </div>

              {/* Row 5: Annual Operating Costs (Full Col 1 width) */}
              <div className="calc-input-block calc-input-block-full">
                <div className="calc-label-row">
                  <span className="calc-label">Annual Operating Costs</span>
                  <svg className="calc-label-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="5" width="20" height="14" rx="2" />
                    <line x1="2" y1="10" x2="22" y2="10" />
                  </svg>
                </div>
                <div className="calc-text-input-wrap">
                  <input
                    type="text"
                    value={formatINR(operatingCosts)}
                    onChange={(e) => {
                      const num = parseInt(e.target.value.replace(/[^0-9]/g, ''), 10);
                      if (!isNaN(num)) setOperatingCosts(num);
                    }}
                    className="calc-text-input"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ================= MIDDLE: DATA FLOW CIRCUIT ================= */}
          <div className="calc-pipeline-connector" aria-hidden="true">
            <svg viewBox="0 0 100 480" fill="none" className="calc-pipeline-svg">
              <path d="M 0 60 C 50 60, 50 200, 100 200" stroke="#34d399" strokeWidth="1.5" strokeOpacity="0.75" />
              <path d="M 0 160 C 50 160, 50 200, 100 200" stroke="#34d399" strokeWidth="1.5" strokeOpacity="0.75" />
              <path d="M 0 260 C 50 260, 50 200, 100 200" stroke="#34d399" strokeWidth="1.5" strokeOpacity="0.75" />
              <path d="M 0 360 C 50 360, 50 200, 100 200" stroke="#34d399" strokeWidth="1.5" strokeOpacity="0.75" />
              <path d="M 0 440 C 50 440, 50 200, 100 200" stroke="#34d399" strokeWidth="1.5" strokeOpacity="0.75" />

              {/* Data stream labels */}
              <text x="5" y="45" fill="#64748b" fontSize="8" fontFamily="sans-serif">data streams data</text>
              <text x="35" y="145" fill="#64748b" fontSize="8" fontFamily="sans-serif" transform="rotate(30 35,145)">Data driven</text>
              <text x="10" y="270" fill="#64748b" fontSize="8" fontFamily="sans-serif">Data path</text>
              <text x="30" y="380" fill="#64748b" fontSize="8" fontFamily="sans-serif" transform="rotate(-30 30,380)">Data stream</text>

              {/* Pipeline nodes */}
              <circle cx="5" cy="60" r="3.5" fill="#10b981" />
              <circle cx="5" cy="160" r="3.5" fill="#10b981" />
              <circle cx="5" cy="260" r="3.5" fill="#10b981" />
              <circle cx="5" cy="360" r="3.5" fill="#10b981" />
              <circle cx="5" cy="440" r="3.5" fill="#10b981" />

              {/* Central convergence node */}
              <circle cx="100" cy="200" r="6" fill="#10b981" />
              <circle cx="100" cy="200" r="3" fill="#ffffff" />
            </svg>
          </div>

          {/* ================= RIGHT: OUTPUT DASHBOARD CARDS ================= */}
          <div className="calc-outputs-section">
            <div className="calc-outputs-grid">
              {/* Card 1: TOTAL INVESTMENT */}
              <div className="calc-metric-card metric-card-white">
                <div className="metric-header">
                  <span className="metric-title">TOTAL INVESTMENT</span>
                  <span className="metric-currency-icon">₹</span>
                </div>
                <div className="metric-primary-value">
                  {formatINR(totalInvestment)}
                </div>
              </div>

              {/* Card 2: ANNUAL REVENUE */}
              <div className="calc-metric-card metric-card-white">
                <div className="metric-header">
                  <span className="metric-title">ANNUAL REVENUE</span>
                  <span className="metric-currency-icon">₹</span>
                </div>
                <div className="metric-primary-value">
                  {formatINR(calculations.annualRevenue)}
                </div>
              </div>

              {/* Card 3: NET ANNUAL PROFIT (Featured Hero Card) */}
              <div className="calc-metric-card metric-card-profit">
                <div className="metric-header">
                  <span className="metric-title profit-title">NET ANNUAL PROFIT</span>
                  <span className="metric-currency-icon profit-icon">₹</span>
                </div>
                <div className="metric-primary-value profit-value">
                  {formatINR(calculations.netAnnualProfit)}
                </div>
                <div className="profit-card-footer">
                  <span className="profit-subtext">
                    EBITDA, operating margin ~70%
                  </span>
                  {/* Glowing 3D Rupee Coin Graphic */}
                  <div className="rupee-coin-graphic">
                    <div className="coin-ambient-glow"></div>
                    <div className="coin-disc">
                      <span className="coin-symbol">₹</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 4: 5-YEAR ROI (Dark Forest Green Card) */}
              <div className="calc-metric-card metric-card-roi">
                <div className="metric-header">
                  <span className="metric-title roi-title">5-YEAR ROI</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </div>
                <div className="metric-primary-value roi-value">
                  {calculations.fiveYearROI}%
                </div>
                {/* Dynamic Trend Area Chart */}
                <div className="roi-graph-container">
                  <svg viewBox="0 0 200 65" className="roi-graph-svg" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="roiGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#34d399" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#34d399" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 5 50 Q 40 45, 70 35 T 130 30 T 195 10 L 195 65 L 5 65 Z"
                      fill="url(#roiGradient)"
                    />
                    <path
                      d="M 5 50 Q 40 45, 70 35 T 130 30 T 195 10"
                      fill="none"
                      stroke="#34d399"
                      strokeWidth="2.5"
                    />
                    <circle cx="5" cy="50" r="3" fill="#34d399" />
                    <circle cx="70" cy="35" r="3" fill="#34d399" />
                    <circle cx="130" cy="30" r="3" fill="#34d399" />
                    <circle cx="195" cy="10" r="3.5" fill="#ffffff" stroke="#34d399" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              {/* Card 5: PAYBACK PERIOD */}
              <div className="calc-metric-card metric-card-white">
                <div className="metric-header">
                  <span className="metric-title">PAYBACK PERIOD</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                  </svg>
                </div>
                <div className="metric-primary-value">
                  {calculations.paybackYears} <span className="value-unit">YEARS</span>
                </div>
                <div className="payback-visuals-row">
                  {/* Left: Mini Wave Chart */}
                  <div className="payback-wave-wrap">
                    <svg viewBox="0 0 80 40" fill="none" className="payback-wave-svg">
                      <path
                        d="M 0 35 Q 20 10, 40 25 T 80 15 L 80 40 L 0 40 Z"
                        fill="#ecfdf5"
                      />
                      <path
                        d="M 0 35 Q 20 10, 40 25 T 80 15"
                        stroke="#10b981"
                        strokeWidth="1.5"
                        fill="none"
                      />
                    </svg>
                  </div>

                  {/* Right: Donut Chart with "Asset split" label */}
                  <div className="payback-donut-wrap">
                    <svg viewBox="0 0 46 46" className="payback-donut-svg">
                      <circle cx="23" cy="23" r="16" fill="transparent" stroke="#064e3b" strokeWidth="8" strokeDasharray="65 35" strokeDashoffset="25" />
                      <circle cx="23" cy="23" r="16" fill="transparent" stroke="#10b981" strokeWidth="8" strokeDasharray="35 65" strokeDashoffset="-40" />
                    </svg>
                    <span className="donut-label">Asset split</span>
                  </div>
                </div>
              </div>

              {/* Card 6: ANNUAL ENERGY DELIVERED */}
              <div className="calc-metric-card metric-card-white">
                <div className="metric-header">
                  <span className="metric-title">ANNUAL ENERGY DELIVERED</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <div className="metric-primary-value">
                  {formatIndianNumber(calculations.annualEnergy)} <span className="value-unit">kWh</span>
                </div>
                {/* 12-Month Bar Chart */}
                <div className="energy-barchart-container">
                  <div className="barchart-bars-wrap">
                    {months.map((m) => (
                      <div key={m.label} className="barchart-col">
                        <div
                          className="barchart-bar"
                          style={{ height: `${Math.min(100, Math.max(25, m.factor * 55))}%` }}
                        />
                        <span className="barchart-label">{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Button */}
      <div className="calc-bottom-cta">
        <button
          type="button"
          onClick={handleDownloadPlan}
          className="btn-calc-download"
        >
          <span>DOWNLOAD DETAILED BUSINESS PLAN</span>
          <div className="cta-icon-circle">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
