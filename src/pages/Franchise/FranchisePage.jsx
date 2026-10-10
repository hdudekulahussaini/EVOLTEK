import React, { useState } from 'react';
import {
  ArrowRight,
  TrendingUp,
  Settings,
  Smartphone,
  CheckCircle2,
  Building2,
  Navigation,
  MapPin,
  ShieldCheck,
  Zap,
  PhoneCall,
  Clock,
  Sparkles,
  DollarSign
} from 'lucide-react';

export default function FranchisePage({ onNavigateHome, onNavigateContact }) {
  const [selectedModel, setSelectedModel] = useState('fixed'); // 'percentage' | 'fixed'

  return (
    <div className="franchise-page-wrapper min-h-screen bg-slate-50/50 text-slate-900 font-sans antialiased">
      {/* 1. HERO BANNER SECTION (Exact Match with Reference Mockup) */}
      <section className="relative pt-32 pb-16 lg:pb-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Column: Headlines & CTA */}
          <div className="flex flex-col items-start text-left z-10">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-500 mb-5">
              <button
                onClick={() => {
                  if (onNavigateHome) onNavigateHome();
                  else window.location.hash = '#home';
                }}
                className="text-emerald-700 hover:text-emerald-800 transition-colors cursor-pointer"
              >
                Home
              </button>
              <span className="text-slate-400">›</span>
              <span className="text-slate-700 font-bold">Franchise</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-slate-950 tracking-tight leading-[1.1] mb-5">
              You Own the Station. <br />
              We'll Run <span className="text-emerald-600">It for You.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Partner with EVOLTEK and be a part of India's growing EV charging network.
              Shared investment, hassle-free operations and attractive returns.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <button
                onClick={() => {
                  if (onNavigateContact) onNavigateContact();
                  else window.location.hash = '#contact';
                }}
                className="px-7 py-3.5 rounded-full bg-[#0f764a] hover:bg-[#0b5e3a] text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-700/25 transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2.5 cursor-pointer"
              >
                <span>Explore Franchise</span>
                <ArrowRight size={18} className="stroke-[2.5]" />
              </button>

              <a
                href="#investment-models"
                className="px-7 py-3.5 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-sm sm:text-base border border-emerald-300 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View Return Options</span>
              </a>
            </div>

            {/* Segment Tags */}
            <div className="flex items-center gap-4 sm:gap-6 text-xs sm:text-sm font-semibold text-slate-600 pt-2 border-t border-slate-200/80 w-full">
              <span className="flex items-center gap-1.5">
                <Building2 size={16} className="text-emerald-600" />
                <span>City</span>
              </span>
              <span className="text-slate-300">|</span>
              <span className="flex items-center gap-1.5">
                <Navigation size={16} className="text-emerald-600" />
                <span>Highway</span>
              </span>
              <span className="text-slate-300">|</span>
              <span className="flex items-center gap-1.5">
                <MapPin size={16} className="text-emerald-600" />
                <span>Destination</span>
              </span>
            </div>
          </div>

          {/* Right Column: Visual Canopy Station Showcase */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 group">
            <img
              src="/services-hero-clean.png"
              alt="EVOLTEK Modern Solar Canopy EV Charging Hub"
              className="w-full h-[320px] sm:h-[400px] lg:h-[460px] object-cover object-[70%_center] group-hover:scale-102 transition-transform duration-700 block"
            />
            {/* Soft Daylight Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />

            {/* Station Status Badge */}
            <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-white/60 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
              <div>
                <div className="text-xs font-bold text-slate-900">EVOLTEK Hub Network</div>
                <div className="text-[10px] text-slate-500 font-medium">100% Turnkey Operations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUR VALUE PROPOSITION CARDS (Exact Match with Reference Mockup) */}
      <section className="px-6 max-w-7xl mx-auto mb-20">
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {/* Card 1: Shared Investment */}
            <div className="flex flex-col items-center text-center p-5 sm:p-6 first:pt-0 sm:first:pt-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 shadow-xs">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 17l-1.5 1.5a2.12 2.12 0 0 1-3-3L8 14" />
                  <path d="M13 7l1.5-1.5a2.12 2.12 0 0 1 3 3L16 10" />
                  <path d="M8 14l2.5-2.5a1.5 1.5 0 0 1 2.12 0l.88.88a1.5 1.5 0 0 0 2.12 0L17 11" />
                  <path d="M2 13l4-4 3 3-4 4a2 2 0 0 1-3-3z" />
                  <path d="M22 11l-4 4-3-3 4-4a2 2 0 0 1 3 3z" />
                </svg>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                Shared Investment
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
                50% EVOLTEK,{"\n"}50% Investor
              </p>
            </div>

            {/* Card 2: Hassle-Free Maintenance */}
            <div className="flex flex-col items-center text-center p-5 sm:p-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 shadow-xs">
                <Settings size={28} className="stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                Hassle-Free Maintenance
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                We handle setup, operations and maintenance
              </p>
            </div>

            {/* Card 3: Two Return Options */}
            <div className="flex flex-col items-center text-center p-5 sm:p-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 shadow-xs">
                <TrendingUp size={28} className="stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                Two Return Options
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Percentage return or fixed return
              </p>
            </div>

            {/* Card 4: Mobile App Tracking */}
            <div className="flex flex-col items-center text-center p-5 sm:p-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 shadow-xs">
                <Smartphone size={28} className="stroke-[2]" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5">
                Mobile App Tracking
              </h3>
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                Track your station's performance anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW THE EVOLTEK PARTNERSHIP WORKS (Exact Match with Reference Mockup) */}
      <section className="py-12 sm:py-16 px-6 max-w-7xl mx-auto mb-16">
        <div className="text-left mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            How the <span className="text-emerald-600">EVOLTEK</span> Partnership Works
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            A simple and transparent 50/50 investment model with long-term growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">
          {/* Left Diagram: 50/50 Split Showcase */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-8 flex items-center justify-center">
            <div className="w-full flex flex-col sm:flex-row items-center gap-4 sm:gap-0 relative">
              {/* Left Half: 50% EVOLTEK */}
              <div className="w-full sm:flex-1 bg-gradient-to-br from-[#16a34a] to-[#0f764a] rounded-2xl sm:rounded-l-2xl sm:rounded-r-none p-8 sm:p-10 text-white flex flex-col items-center justify-center text-center shadow-md">
                <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white/60 flex items-center justify-center mb-4">
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="rgba(255, 255, 255, 0.4)" />
                  </svg>
                </div>
                <div className="text-4xl sm:text-5xl font-black tracking-tight mb-1">
                  50%
                </div>
                <div className="text-sm sm:text-base font-extrabold tracking-widest uppercase text-emerald-100">
                  EVOLTEK
                </div>
              </div>

              {/* Center Intersect Badge */}
              <div className="sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 z-10 w-16 h-16 rounded-full bg-white border-4 border-slate-100 shadow-xl flex items-center justify-center text-emerald-600 shrink-0">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 17l-1.5 1.5a2.12 2.12 0 0 1-3-3L8 14" />
                  <path d="M13 7l1.5-1.5a2.12 2.12 0 0 1 3 3L16 10" />
                  <path d="M8 14l2.5-2.5a1.5 1.5 0 0 1 2.12 0l.88.88a1.5 1.5 0 0 0 2.12 0L17 11" />
                  <path d="M2 13l4-4 3 3-4 4a2 2 0 0 1-3-3z" />
                  <path d="M22 11l-4 4-3-3 4-4a2 2 0 0 1 3 3z" />
                </svg>
              </div>

              {/* Right Half: 50% Investor */}
              <div className="w-full sm:flex-1 bg-slate-50 border border-slate-200/80 rounded-2xl sm:rounded-r-2xl sm:rounded-l-none p-8 sm:p-10 flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </div>
                <div className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 mb-1">
                  50%
                </div>
                <div className="text-sm sm:text-base font-extrabold tracking-widest uppercase text-emerald-700">
                  Investor
                </div>
              </div>
            </div>
          </div>

          {/* Right Card: Key Benefits */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-7 sm:p-9 flex flex-col justify-center">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2.5">
              <span>Key Benefits</span>
            </h3>

            <ul className="space-y-4 sm:space-y-4.5 text-left text-sm sm:text-[0.95rem] text-slate-700">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <CheckCircle2 size={15} className="stroke-[3]" />
                </span>
                <div>
                  <strong className="text-slate-900">Shared investment</strong> — You invest only half the cost
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <CheckCircle2 size={15} className="stroke-[3]" />
                </span>
                <div>
                  <strong className="text-slate-900">Hassle-free maintenance</strong> — Evoltek manages operations
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <CheckCircle2 size={15} className="stroke-[3]" />
                </span>
                <div>
                  <strong className="text-slate-900">Two return options</strong> — Percentage or fixed return
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <CheckCircle2 size={15} className="stroke-[3]" />
                </span>
                <div>
                  <strong className="text-slate-900">Secure agreements</strong> — 5 or 10 years, renewable
                </div>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <CheckCircle2 size={15} className="stroke-[3]" />
                </span>
                <div>
                  <strong className="text-slate-900">Transparency</strong> — Track performance via mobile app
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. INVESTMENT MODELS (Interactive Financial Architecture) */}
      <section id="investment-models" className="py-20 px-6 bg-white border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto">
          {/* Eyebrow & Title */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="flex items-center justify-center gap-2.5 text-emerald-600 font-extrabold text-xs tracking-wider uppercase mb-3">
              <span className="w-6 h-[2px] bg-emerald-500 rounded-full" />
              <span>FINANCIAL ARCHITECTURE</span>
              <span className="w-6 h-[2px] bg-emerald-500 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Our Investment Models
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Tailored co-investment structures for long-term equity or accelerated monthly yield.
            </p>
          </div>

          {/* Two Model Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Model A: Percentage Return */}
            <div
              onClick={() => setSelectedModel('percentage')}
              className={`rounded-3xl p-8 sm:p-9 border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between ${selectedModel === 'percentage'
                ? 'border-emerald-500 bg-emerald-50/20 shadow-xl ring-4 ring-emerald-500/10'
                : 'border-slate-200 bg-white hover:border-slate-300 shadow-sm'
                }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                    Option A
                  </span>
                  <div className="text-3xl font-black text-emerald-600">
                    28% <span className="text-sm font-semibold text-slate-500">p.a.</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Percentage Return Model
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Decade-scale partnership, anchored by high infrastructure security and asset ownership.
                </p>

                <div className="space-y-3 pt-6 border-t border-slate-100 text-sm text-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Target Annual Return</span>
                    <span className="font-bold text-slate-900">Up to 28%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Contract Tenure</span>
                    <span className="font-bold text-slate-900">10-Year Master Agreement</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Renewal Clause</span>
                    <span className="font-bold text-slate-900">Renewal option after 10 years</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onNavigateContact) onNavigateContact();
                    else window.location.hash = '#contact';
                  }}
                  className="w-full py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Select Option A Model</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Model B: Fixed Return (Most Popular) */}
            <div
              onClick={() => setSelectedModel('fixed')}
              className={`rounded-3xl p-8 sm:p-9 border-2 transition-all duration-300 cursor-pointer flex flex-col justify-between relative ${selectedModel === 'fixed'
                ? 'border-emerald-500 bg-emerald-50/20 shadow-xl ring-4 ring-emerald-500/10'
                : 'border-slate-200 bg-white hover:border-slate-300 shadow-sm'
                }`}
            >
              {/* Popular Badge */}
              <div className="absolute -top-3.5 right-8 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                Most Popular Cash-Flow
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                    Option B
                  </span>
                  <div className="text-3xl font-black text-emerald-600">
                    5% <span className="text-sm font-semibold text-slate-500">/ month</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Fixed Return Model
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Immediate predictability, optimized for high-velocity monthly passive cash flows.
                </p>

                <div className="space-y-3 pt-6 border-t border-slate-100 text-sm text-slate-700">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Monthly Payout</span>
                    <span className="font-bold text-slate-900">5% Fixed Monthly Return</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Agreement Tenure</span>
                    <span className="font-bold text-slate-900">5-Year Master Agreement</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500">Disbursement Method</span>
                    <span className="font-bold text-slate-900">Direct monthly bank transfer</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onNavigateContact) onNavigateContact();
                    else window.location.hash = '#contact';
                  }}
                  className="w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Select Option B Model</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION SECTION (Scenic Mountain EV Banner) */}
      <section className="py-16 sm:py-20 px-6 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-emerald-900/30 bg-[#041c12] min-h-[340px] sm:min-h-[380px] flex items-center">
          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0">
            <img
              src="/about-powering-journey-bg.png"
              alt="Ready to Partner with EVOLTEK"
              className="w-full h-full object-cover object-[center_right] sm:object-center select-none"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#031c12]/95 via-[#031c12]/80 sm:via-[#031c12]/50 to-transparent max-w-2xl pointer-events-none" />
          </div>

          {/* Foreground CTA Content */}
          <div className="relative z-10 max-w-xl lg:max-w-2xl px-7 sm:px-12 lg:px-16 py-10 sm:py-14 text-left">
            <div className="w-10 h-1 bg-emerald-400 rounded-full mb-4" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-3">
              Ready to Own <br />
              <span className="text-[#34d399]">An EV Station?</span>
            </h2>
            <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
              Speak with our franchise expansion directors today and get a tailored site analysis for your property.
            </p>

            <button
              onClick={() => {
                if (onNavigateContact) onNavigateContact();
                else window.location.hash = '#contact';
              }}
              className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#34d399] hover:bg-[#4ade80] text-[#022318] font-bold text-sm sm:text-base tracking-wide shadow-xl shadow-emerald-950/40 hover:shadow-emerald-400/30 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Apply for Franchise</span>
              <ArrowRight size={18} className="stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

