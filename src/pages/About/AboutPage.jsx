import React, { useState, useEffect } from 'react';
import {
  Users,
  ShieldCheck,
  TrendingUp,
  Target,
  Eye,
  Leaf,
  Check,
  ArrowRight
} from 'lucide-react';

export default function AboutPage({ onNavigateHome, onNavigateContact }) {
  const [stationImg, setStationImg] = useState('/about-connecting-station.jpg?v=full_image_v3');

  useEffect(() => {
    const img = new Image();
    img.src = '/about-page-reference.jpg';
    img.onload = () => {
      // Pre-load reference
    };
  }, []);

  return (
    <div className="about-page-wrapper w-full bg-white text-slate-900 font-sans min-h-screen">
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden min-h-[460px] md:min-h-[500px] lg:min-h-[540px] pt-[105px] sm:pt-[120px] pb-10 sm:pb-12 lg:pb-14 flex items-center bg-[#02130b] text-white border-b border-emerald-950/60">
        <div className="absolute inset-0 z-0">
          <img
            src="/about-hero-banner.jpg"
            alt="EVOLTEK - The Future of EV Charging Starts Here"
            className="w-full h-full object-cover object-right sm:object-center select-none"
            onError={(e) => {
              e.currentTarget.src = '/about-page-reference.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#01140b]/95 via-[#01140b]/75 to-transparent sm:w-3/5 lg:w-1/2 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#01140b]/60 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="max-w-[1240px] w-full mx-auto px-6 relative z-10">
          <div className="max-w-xl text-left py-4 sm:py-6">
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium mb-4">
              <button
                onClick={onNavigateHome}
                className="hover:text-emerald-400 transition-colors cursor-pointer"
              >
                Home
              </button>
              <span className="text-slate-400 font-bold">›</span>
              <span className="text-emerald-400 font-semibold">About</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.8rem] font-black tracking-tight text-white leading-[1.08] mb-5 drop-shadow-md">
              The Future of <br />
              EV Charging <br />
              <span className="text-emerald-400 drop-shadow-xs">Starts Here</span>
            </h1>

            <p className="text-slate-200 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg mb-2 drop-shadow-xs">
              A convenient, reliable, and scalable charging network across cities and highways.
            </p>
          </div>
        </div>
      </section>

      {/* 2. ABOUT EVOLTEK: CONNECTING EVERY JOURNEY */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/70">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 flex items-center justify-center">
              <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden shadow-[0_18px_45px_rgba(0,0,0,0.1)] border border-slate-200/90 w-full max-w-[560px] group">
                <img
                  src={stationImg}
                  alt="EVOLTEK DC Fast Charger - Connecting Every Journey"
                  className="w-full h-auto block object-cover group-hover:scale-[1.02] transition-transform duration-500 select-none"
                  onError={() => setStationImg('/city-charging.jpg')}
                />
              </div>
            </div>

            <div className="lg:col-span-6 text-left space-y-6">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#087747] block mb-2.5">
                  ABOUT EVOLTEK
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-slate-900 leading-[1.12] tracking-tight">
                  Connecting <br />
                  <span className="text-[#087747]">Every Journey</span>
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-[0.96rem] leading-[1.65]">
                Evoltek is a new-generation EV charging station concept designed to build a convenient,
                reliable, and scalable charging network across cities and highways. With the vision of
                &ldquo;Powering Every Journey,&rdquo; Evoltek aims to make EV charging easily accessible for
                daily city commuters and long-distance highway travellers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 pt-2">
                <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-emerald-500/50 hover:shadow-md transition-all">
                  <div className="w-11 h-11 rounded-full bg-[#087747] text-white flex items-center justify-center mb-3.5 shadow-sm shadow-[#087747]/20">
                    <Users size={20} />
                  </div>
                  <h3 className="font-black text-slate-900 text-base mb-1">Convenient</h3>
                  <p className="text-slate-500 text-xs sm:text-[0.82rem] leading-relaxed">
                    Easily accessible for everyone.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-emerald-500/50 hover:shadow-md transition-all">
                  <div className="w-11 h-11 rounded-full bg-[#087747] text-white flex items-center justify-center mb-3.5 shadow-sm shadow-[#087747]/20">
                    <ShieldCheck size={20} />
                  </div>
                  <h3 className="font-black text-slate-900 text-base mb-1">Reliable</h3>
                  <p className="text-slate-500 text-xs sm:text-[0.82rem] leading-relaxed">
                    Consistent and high-performance charging.
                  </p>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:border-emerald-500/50 hover:shadow-md transition-all">
                  <div className="w-11 h-11 rounded-full bg-[#087747] text-white flex items-center justify-center mb-3.5 shadow-sm shadow-[#087747]/20">
                    <TrendingUp size={20} />
                  </div>
                  <h3 className="font-black text-slate-900 text-base mb-1">Scalable</h3>
                  <p className="text-slate-500 text-xs sm:text-[0.82rem] leading-relaxed">
                    Built for today and tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR MISSION, VISION & VALUES */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200/70">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-black text-slate-900 tracking-tight uppercase mb-12 sm:mb-14">
            OUR MISSION, VISION &amp; VALUES
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-left">
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-emerald-500/50 transition-all flex flex-col justify-start">
              <div className="w-14 h-14 rounded-full bg-[#087747] text-white flex items-center justify-center shrink-0 mb-6 shadow-sm shadow-[#087747]/20">
                <Target size={26} />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
                Our Mission
              </h3>
              <p className="text-slate-600 text-sm sm:text-[0.95rem] leading-relaxed">
                To accelerate the adoption of electric vehicles by providing reliable, smart
                and sustainable charging solutions.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-emerald-500/50 transition-all flex flex-col justify-start">
              <div className="w-14 h-14 rounded-full bg-[#087747] text-white flex items-center justify-center shrink-0 mb-6 shadow-sm shadow-[#087747]/20">
                <Eye size={26} />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
                Our Vision
              </h3>
              <p className="text-slate-600 text-sm sm:text-[0.95rem] leading-relaxed">
                To be the most trusted and innovative EV charging network, enabling a
                zero-emission future worldwide.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-xl hover:border-emerald-500/50 transition-all flex flex-col justify-start">
              <div className="w-14 h-14 rounded-full bg-[#087747] text-white flex items-center justify-center shrink-0 mb-6 shadow-sm shadow-[#087747]/20">
                <Leaf size={26} />
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-3">
                Our Values
              </h3>
              <ul className="space-y-2.5 text-slate-700 text-sm sm:text-[0.95rem] font-semibold">
                <li className="flex items-center gap-2.5">
                  <Check size={16} className="text-[#087747] shrink-0 stroke-[3]" />
                  <span>Sustainability</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check size={16} className="text-[#087747] shrink-0 stroke-[3]" />
                  <span>Customer First</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check size={16} className="text-[#087747] shrink-0 stroke-[3]" />
                  <span>Innovation</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check size={16} className="text-[#087747] shrink-0 stroke-[3]" />
                  <span>Reliability</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check size={16} className="text-[#087747] shrink-0 stroke-[3]" />
                  <span>Community Impact</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION BANNER */}
      <section className="relative overflow-hidden bg-[#041c12] text-white py-14 sm:py-16 lg:py-20 flex items-center min-h-[290px] sm:min-h-[330px] lg:min-h-[360px]">
        <div className="absolute inset-0 z-0">
          <img
            src="/about-powering-journey-bg.png"
            alt="Powering Every Journey - EV on Mountain Highway"
            className="w-full h-full object-cover object-[center_right] sm:object-center select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#031c12]/90 via-[#031c12]/50 to-transparent max-w-2xl pointer-events-none" />
        </div>

        <div className="max-w-[1280px] w-full mx-auto px-6 sm:px-10 lg:px-12 relative z-10 text-left">
          <div className="max-w-xl lg:max-w-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black tracking-tight text-white leading-tight mb-3">
              Powering <span className="text-[#2ee585]">Every Journey.</span>
            </h2>

            <p className="text-slate-200 text-sm sm:text-base lg:text-[1.05rem] leading-relaxed mb-7 sm:mb-8 max-w-[520px]">
              Explore investment, franchise and charging opportunities with Evoltek.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 sm:gap-4">
              <button
                onClick={() => {
                  if (onNavigateContact) {
                    onNavigateContact();
                  } else {
                    window.location.hash = '#contact';
                  }
                }}
                className="group inline-flex items-center gap-2.5 bg-[#2ee585] hover:bg-[#3bf093] text-[#031e13] font-bold text-xs sm:text-sm tracking-wide py-3.5 px-6 sm:px-7 rounded-full shadow-[0_4px_20px_rgba(46,229,133,0.35)] hover:shadow-[0_6px_25px_rgba(46,229,133,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                aria-label="Invest With Evoltek"
              >
                <span>Invest With Evoltek</span>
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 stroke-[2.5]" />
              </button>

              <button
                onClick={onNavigateHome}
                className="group inline-flex items-center gap-2.5 bg-[#031d14]/70 hover:bg-[#062c1e]/90 text-white font-semibold text-xs sm:text-sm tracking-wide py-3.5 px-6 sm:px-7 rounded-full border border-white/40 hover:border-[#2ee585] backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
                aria-label="Explore Charging Network"
              >
                <span>Explore Charging Network</span>
                <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
