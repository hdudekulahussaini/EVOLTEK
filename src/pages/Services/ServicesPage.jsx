import React, { useState } from 'react';
import {
  Building2,
  Navigation,
  Coffee,
  MapPin,
  ArrowRight,
  Zap,
  Clock,
  Sparkles,
  ChevronRight,
  PhoneCall,
  BatteryCharging
} from 'lucide-react';
import {
  CHARGING_SOLUTIONS,
  POWER_SPECIFICATIONS,
  EV_SERVICES_LIST,
  PROCESS_STEPS
} from '../../data/servicesData';

export default function ServicesPage({ onNavigateHome, onNavigateContact }) {
  const [selectedPower, setSelectedPower] = useState('180 kW');
  const [solutionImages, setSolutionImages] = useState({
    city: CHARGING_SOLUTIONS[0].defaultImage,
    highway: CHARGING_SOLUTIONS[1].defaultImage,
    hub: '/destination-lounge.jpg',
  });

  const handleImageError = (id, fallback) => {
    setSolutionImages(prev => ({
      ...prev,
      [id]: fallback
    }));
  };

  const getSolutionIcon = (iconType) => {
    switch (iconType) {
      case 'building':
        return <Building2 size={22} className="text-emerald-950" />;
      case 'highway':
        return <Navigation size={22} className="text-emerald-950" />;
      case 'hub':
      default:
        return <Coffee size={22} className="text-emerald-950" />;
    }
  };

  const FlatIconInstallation = () => (
    <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#0da655]" fill="currentColor">
      <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
      <path d="M19.5 3c-.4-.4-1.1-.4-1.4 0l-2.3 2.3 3.8 3.8 2.3-2.3c.4-.4.4-1.1 0-1.4L19.5 3z" />
    </svg>
  );

  const FlatIconNetwork = () => (
    <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#0da655]">
      <path d="M12 5.5v5M17.5 9l-4.5 2.5M15.5 16.5l-3.2-3.8M8.5 16.5l3.2-3.8M6.5 9l4.5 2.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="12" cy="12" r="2.8" fill="currentColor" />
      <circle cx="12" cy="3.5" r="2.2" fill="currentColor" />
      <circle cx="19.5" cy="8" r="2.2" fill="currentColor" />
      <circle cx="17" cy="18" r="2.2" fill="currentColor" />
      <circle cx="7" cy="18" r="2.2" fill="currentColor" />
      <circle cx="4.5" cy="8" r="2.2" fill="currentColor" />
    </svg>
  );

  const FlatIconMaintenance = () => (
    <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#0da655]">
      <path
        d="M12 2L4 5.5v6.2c0 5.4 3.4 10.4 8 11.8 4.6-1.4 8-6.4 8-11.8V5.5L12 2z"
        fill="currentColor"
      />
      <path
        d="M10 15.5l-3.5-3.5 1.4-1.4 2.1 2.1 5.6-5.6 1.4 1.4L10 15.5z"
        fill="white"
      />
    </svg>
  );

  const FlatIconSoftware = () => (
    <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#0da655]">
      <rect x="5.5" y="2" width="13" height="20" rx="3" fill="currentColor" />
      <rect x="7.5" y="4.5" width="9" height="12.5" rx="1" fill="#dcfce7" />
      <circle cx="12" cy="19.5" r="0.8" fill="white" />
      <path
        d="M12.5 7l-3 4.2h2.2l-.7 3.8 3.5-4.5H12l.5-3.5z"
        fill="currentColor"
      />
    </svg>
  );

  const FlatIconCustomSolutions = () => (
    <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#0da655]" fill="currentColor">
      <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.48.48 0 0 0-.48-.41h-3.84c-.24 0-.44.17-.48.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87a.47.47 0 0 0 .12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z" />
    </svg>
  );

  const FlatIconConsulting = () => (
    <svg viewBox="0 0 24 24" className="w-7 h-7 text-[#0da655]" fill="currentColor">
      <path d="M12 3.2c-3.2 0-5.8 2-6.5 4.8h13c-.7-2.8-3.3-4.8-6.5-4.8z" />
      <rect x="4.5" y="8.5" width="15" height="1.8" rx="0.9" />
      <circle cx="12" cy="13.2" r="2.6" />
      <path d="M6 21c0-2.8 2.7-4.6 6-4.6s6 1.8 6 4.6v0.5H6V21z" />
    </svg>
  );

  const FlatIconChatDots = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#0da655]">
      <path
        d="M20 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h3v3.5l4.5-3.5H20c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"
        fill="currentColor"
      />
      <circle cx="8" cy="10.5" r="1.3" fill="white" />
      <circle cx="12" cy="10.5" r="1.3" fill="white" />
      <circle cx="16" cy="10.5" r="1.3" fill="white" />
    </svg>
  );

  const FlatIconSiteAssessment = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#0da655]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
      <line x1="9" y1="3" x2="9" y2="18" />
      <line x1="15" y1="6" x2="15" y2="21" />
      <path d="M12 6.5c-1.6 0-2.8 1.2-2.8 2.8 0 2 2.8 4.7 2.8 4.7s2.8-2.7 2.8-4.7c0-1.6-1.2-2.8-2.8-2.8z" fill="currentColor" stroke="none" />
      <circle cx="12" cy="9.3" r="1" fill="white" stroke="none" />
    </svg>
  );

  const FlatIconDesignPlan = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#0da655]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="3.5" />
      <line x1="7" y1="17" x2="17" y2="7" />
      <path d="M14 6l4 4" />
      <polygon points="7 17 9.5 16 8 14.5" fill="currentColor" />
      <line x1="7" y1="7" x2="9.5" y2="7" />
      <line x1="14.5" y1="17" x2="17" y2="17" />
    </svg>
  );

  const FlatIconCrossedTools = () => (
    <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#0da655]" fill="currentColor">
      <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
      <path d="M19.5 3c-.4-.4-1.1-.4-1.4 0l-2.3 2.3 3.8 3.8 2.3-2.3c.4-.4.4-1.1 0-1.4L19.5 3z" />
    </svg>
  );

  const getServiceIcon = (iconKey) => {
    switch (iconKey) {
      case 'wrench':
        return <FlatIconInstallation />;
      case 'network':
        return <FlatIconNetwork />;
      case 'shield':
        return <FlatIconMaintenance />;
      case 'smartphone':
        return <FlatIconSoftware />;
      case 'settings':
        return <FlatIconCustomSolutions />;
      case 'consulting':
      default:
        return <FlatIconConsulting />;
    }
  };

  const getProcessIcon = (iconKey) => {
    switch (iconKey) {
      case 'message':
        return <FlatIconChatDots />;
      case 'map':
        return <FlatIconSiteAssessment />;
      case 'fileEdit':
        return <FlatIconDesignPlan />;
      case 'wrench':
      default:
        return <FlatIconCrossedTools />;
    }
  };

  const activeSpecs = POWER_SPECIFICATIONS[selectedPower] || POWER_SPECIFICATIONS['180 kW'];

  return (
    <div className="services-page-root min-h-screen bg-white text-slate-900 font-sans antialiased">
      {/* 1. HERO BANNER SECTION */}
      <section
        className="relative min-h-[500px] md:min-h-[560px] lg:min-h-[600px] flex items-center pt-32 pb-20 px-6 sm:px-10 lg:px-16 overflow-hidden bg-slate-950"
        style={{
          backgroundImage: "url('/services-hero-clean.png')",
          backgroundPosition: 'right center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Cinematic gradient overlay: deeper on the left for crisp typography, fading to transparent on the right to reveal the charging station & EV */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 md:via-slate-950/60 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-950/30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-start text-left">
          <div className="max-w-xl lg:max-w-2xl">
            {/* Top accent badge */}
            <div className="inline-flex items-center gap-2.5 mb-3.5">
              <span className="w-8 h-[3px] bg-emerald-400 rounded-full" />
              <span className="text-emerald-400 text-xs sm:text-sm font-bold tracking-widest uppercase">
                EV CHARGING SERVICES
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] mb-4">
              Powering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] via-emerald-300 to-teal-200">
                Every Journey
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-200 text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-lg font-normal drop-shadow-sm">
              Reliable and high-performance DC fast charging for both city and highway journeys.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#solutions"
                className="px-7 py-3.5 rounded-full bg-[#34d399] hover:bg-[#4ade80] text-[#022318] font-bold text-sm sm:text-base shadow-lg shadow-emerald-500/25 transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Services</span>
                <ArrowRight size={18} className="stroke-[2.5]" />
              </a>
              <button
                onClick={() => {
                  if (onNavigateContact) onNavigateContact();
                  else window.location.hash = '#contact';
                }}
                className="px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm sm:text-base border border-white/25 backdrop-blur-md transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <span>Partner With Us</span>
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CHARGING SOLUTIONS SECTION */}
      <section id="solutions" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2.5 text-emerald-600 font-extrabold text-xs sm:text-sm tracking-wider uppercase mb-3">
            <span className="w-6 sm:w-8 h-[2px] bg-emerald-500 rounded-full" />
            <span>OUR CHARGING SOLUTIONS</span>
            <span className="w-6 sm:w-8 h-[2px] bg-emerald-500 rounded-full" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Smart Charging for Every Need
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Scalable, high-efficiency DC fast charging stations designed for diverse environments and high vehicle throughput.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CHARGING_SOLUTIONS.map((solution) => (
            <div
              key={solution.id}
              className="group bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden hover:-translate-y-1"
            >
              {/* Full Bleed Image */}
              <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-slate-900">
                <img
                  src={solutionImages[solution.id] || solution.defaultImage}
                  alt={solution.title}
                  onError={() => handleImageError(solution.id, solution.fallbackImage)}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 block"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-80" />

                {/* Floating Mint Circle Icon */}
                <div className="absolute bottom-3 right-3 w-12 h-12 rounded-full bg-emerald-300 border-2 border-white shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  {getSolutionIcon(solution.iconType)}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2.5">
                  {solution.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                  {solution.description}
                </p>

                {/* Meta details */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-slate-500">
                  <span className="flex items-center gap-1.5 text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md">
                    <MapPin size={13} className="text-emerald-600" />
                    {solution.metaFootprint}
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100">
                    <Zap size={13} className="text-emerald-600" />
                    {solution.metaType}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. POWER OPTIONS SECTION */}
      <section className="py-20 px-6 bg-slate-50 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-2.5 text-emerald-600 font-extrabold text-xs sm:text-sm tracking-wider uppercase mb-3">
              <span className="w-6 sm:w-8 h-[2px] bg-emerald-500 rounded-full" />
              <span>POWER OPTIONS</span>
              <span className="w-6 sm:w-8 h-[2px] bg-emerald-500 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Multiple Power Levels for Every Journey
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Tailored charging speed outputs to optimize electrical load, vehicle throughput, and site investment return.
            </p>
          </div>

          {/* 6 Pill Selection Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12">
            {Object.keys(POWER_SPECIFICATIONS).map((kw) => {
              const isSelected = selectedPower === kw;
              return (
                <button
                  key={kw}
                  onClick={() => setSelectedPower(kw)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm sm:text-base font-bold transition-all duration-200 cursor-pointer shadow-sm ${isSelected
                    ? 'bg-emerald-600 text-white shadow-emerald-600/30 ring-2 ring-emerald-500 ring-offset-2'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                >
                  <Zap
                    size={16}
                    className={isSelected ? 'text-emerald-200 fill-emerald-200' : 'text-emerald-500 fill-emerald-500'}
                  />
                  <span>{kw}</span>
                </button>
              );
            })}
          </div>

          {/* Detailed Specs Card */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="text-xs font-bold tracking-widest uppercase text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block mb-3">
                  Specification Profile
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
                  {activeSpecs.label}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {activeSpecs.idealFor}
                </p>

                <div className="space-y-3.5">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock size={14} className="text-emerald-700" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-semibold uppercase">Typical Charge Time</div>
                      <div className="text-sm font-bold text-slate-800">{activeSpecs.time}</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <BatteryCharging size={14} className="text-emerald-700" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-semibold uppercase">Recommended Target Vehicles</div>
                      <div className="text-sm font-bold text-slate-800">{activeSpecs.vehicles}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Graphic Spec Representation */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl p-7 text-white flex flex-col justify-between border border-slate-800 shadow-inner">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-semibold text-slate-400 tracking-wider uppercase">Active Rating</span>
                  <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                </div>

                <div className="mb-6">
                  <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                    {selectedPower}
                  </div>
                  <div className="text-xs text-slate-400 mt-1">High-Speed Liquid Cooled / Air Cooled Architecture</div>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
                  <span>99.8% Uptime SLA</span>
                  <span className="text-emerald-400 font-bold">CCS2 Dual Guns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPLETE SERVICES SECTION (Exact Match with Mockup) */}
      <section className="py-20 px-6 bg-[#f6faf8] border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto">
          {/* Eyebrow & Titles */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <div className="flex items-center justify-center gap-2.5 text-emerald-600 font-extrabold text-xs tracking-wider uppercase mb-2.5">
              <span className="w-6 h-[2px] bg-emerald-500 rounded-full" />
              <span>COMPLETE EV CHARGING SERVICES</span>
              <span className="w-6 h-[2px] bg-emerald-500 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2.5">
              End-to-End <span className="text-emerald-500">Charging Solutions</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              We handle everything — from setup to support.
            </p>
          </div>

          {/* 6 Horizontal Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-4.5">
            {EV_SERVICES_LIST.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-5 rounded-2xl border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-lg hover:border-emerald-300 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-14 h-14 rounded-full bg-[#dcfce7] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200">
                  {getServiceIcon(service.iconKey)}
                </div>
                <h3 className="text-[0.95rem] font-bold text-slate-900 mb-2 leading-snug">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-xs sm:text-[0.82rem] leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION (Exact Match with Mockup: Light Background + Horizontal Connected Pipeline) */}
      <section className="py-20 px-6 bg-[#f6faf8]">
        <div className="max-w-7xl mx-auto">
          {/* Eyebrow & Titles */}
          <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
            <div className="flex items-center justify-center gap-2.5 text-emerald-600 font-extrabold text-xs tracking-wider uppercase mb-2.5">
              <span className="w-6 h-[2px] bg-emerald-500 rounded-full" />
              <span>OUR PROCESS</span>
              <span className="w-6 h-[2px] bg-emerald-500 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2.5">
              From Vision to <span className="text-emerald-500">Operation</span>
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              A simple and seamless process to get your charging station live.
            </p>
          </div>

          {/* 4-Step Pipeline with Connected Line */}
          <div className="relative max-w-6xl mx-auto">
            {/* Horizontal connecting line across nodes on large screens */}
            <div className="hidden lg:block absolute top-[24px] left-[12%] right-[12%] h-[1.5px] bg-emerald-300/80 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
              {PROCESS_STEPS.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  {/* Node Badge: Dark green circle + mint rounded box */}
                  <div className="inline-flex items-center gap-2.5 bg-[#f6faf8] px-3 py-1 rounded-full mb-4 relative z-10">
                    <div className="w-9 h-9 rounded-full bg-[#059669] text-white font-extrabold text-xs sm:text-sm flex items-center justify-center shadow-xs">
                      {step.num}
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-[#dcfce7] border border-[#bbf7d0] flex items-center justify-center text-emerald-600 shadow-xs">
                      {getProcessIcon(step.iconKey)}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-[1.05rem] font-bold text-slate-900 mb-1.5 leading-snug">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-500 text-xs sm:text-[0.84rem] leading-relaxed max-w-[210px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION SECTION */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-emerald-900/30 bg-[#041c12] min-h-[320px] sm:min-h-[360px] lg:min-h-[400px] flex items-center">
          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0">
            <img
              src="/about-powering-journey-bg.png"
              alt="Ready to Power Your Space - EV on Mountain Highway"
              className="w-full h-full object-cover object-[center_right] sm:object-center select-none"
            />
            {/* Smooth gradient on left to guarantee contrast across all viewports */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#031c12]/95 via-[#031c12]/80 sm:via-[#031c12]/50 to-transparent max-w-2xl pointer-events-none" />
          </div>

          {/* Foreground Interactive Content */}
          <div className="relative z-10 max-w-xl lg:max-w-2xl px-7 sm:px-12 lg:px-16 py-10 sm:py-14 text-left">
            {/* Green Accent Line */}
            <div className="w-10 h-1 bg-emerald-400 rounded-full mb-4" />

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-3">
              Ready to Power <br />
              <span className="text-[#34d399]">Your Space?</span>
            </h2>

            {/* Subtitle */}
            <p className="text-emerald-100/90 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-md font-normal drop-shadow-sm">
              Let's build a cleaner, smarter and more sustainable future — together.
            </p>

            {/* Mint Pill Button */}
            <button
              onClick={() => {
                if (onNavigateContact) onNavigateContact();
                else window.location.hash = '#contact';
              }}
              className="group inline-flex items-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#34d399] hover:bg-[#4ade80] text-[#022318] font-bold text-sm sm:text-base tracking-wide shadow-xl shadow-emerald-950/40 hover:shadow-emerald-400/30 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Get a Free Consultation</span>
              <ArrowRight size={18} className="stroke-[2.5] transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
