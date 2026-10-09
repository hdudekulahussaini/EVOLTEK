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
    <section
      id="ready-to-power"
      className="ready-power-cinematic-section relative w-full min-h-[680px] overflow-hidden flex items-center justify-center bg-[#051610] m-0 p-0"
      aria-label="Ready to Power the Future"
    >
      {/* Background Image Layer */}
      <div className="ready-power-bg-container absolute inset-0 z-[1] overflow-hidden">
        <img
          src="/suitable-charging-bg.jpg"
          alt="EVOLTEK Clean Energy EV Charging Hub"
          className="ready-power-bg-photo w-full h-full object-cover object-[center_40%] block"
          loading="eager"
        />
        {/* Subtle cinematic gradient vignette for crisp text contrast */}
        <div className="ready-power-vignette-overlay absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_50%_45%,rgba(4,20,14,0.42)_0%,rgba(3,14,10,0.65)_60%,rgba(2,10,7,0.88)_100%),linear-gradient(180deg,rgba(3,15,10,0.25)_0%,transparent_30%,transparent_65%,rgba(2,12,8,0.95)_100%)]" />
      </div>

      {/* Main Foreground Content (True HTML Typography & Interactive UI) */}
      <div className="container ready-power-main-content relative z-10 flex flex-col items-center text-center py-[85px] pb-[60px] px-6 max-w-[1080px] mx-auto">
        {/* Central Headline */}
        <h2 className="ready-cinematic-headline text-[clamp(2.6rem,5.4vw,4.5rem)] font-black leading-[1.08] tracking-[-0.015em] uppercase mb-4.5">
          <span className="headline-white text-white drop-shadow-[0_4px_25px_rgba(0,0,0,0.65)]">READY TO</span>
          <br />
          <span className="headline-green-glow bg-gradient-to-br from-[#bbf7d0] via-[#4ade80] to-[#10b981] bg-clip-text text-transparent filter drop-shadow-[0_0_35px_rgba(74,222,128,0.55)]">POWER THE FUTURE?</span>
        </h2>

        {/* Subtitle */}
        <p className="ready-cinematic-desc text-[clamp(1.02rem,1.6vw,1.25rem)] text-slate-100 leading-[1.55] max-w-[660px] mx-auto mb-9 font-normal drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
          Partner with Evoltek and build the next generation
          <br className="desktop-break hidden sm:block" />
          of EV charging infrastructure.
        </p>

        {/* Action Buttons */}
        <div className="ready-cinematic-actions flex items-center justify-center gap-5 flex-wrap mb-[58px]">
          {/* Primary Lime Button: BECOME AN INVESTOR */}
          <a
            href="#investment"
            onClick={handleInvestorClick}
            className="btn-cinematic-invest group bg-[#82e057] text-[#052210] py-[15px] px-9 rounded-full text-[0.94rem] font-black tracking-[0.04em] inline-flex items-center gap-3 shadow-[0_0_32px_rgba(130,224,87,0.55),0_8px_24px_rgba(0,0,0,0.35)] border border-white/55 hover:-translate-y-0.5 hover:scale-[1.03] hover:bg-[#94f068] hover:shadow-[0_0_45px_rgba(130,224,87,0.8),0_12px_30px_rgba(0,0,0,0.45)] transition-all duration-300 cursor-pointer"
            aria-label="Become an Investor"
          >
            <span>BECOME AN INVESTOR</span>
            <span className="btn-arrow-sym text-[1.15rem] transition-transform duration-200 group-hover:translate-x-1">→</span>
          </a>

          {/* Secondary Frosted Glass Button: TALK TO EVOLTEK */}
          <a
            href="#contact"
            onClick={handleContactClick}
            className="btn-cinematic-talk bg-white/[0.08] text-white backdrop-blur-[14px] border-[1.5px] border-white/45 py-[15px] px-9 rounded-full text-[0.94rem] font-bold tracking-[0.05em] inline-flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:bg-white/[0.18] hover:border-emerald-400 hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-[0_0_35px_rgba(52,211,153,0.45)] transition-all duration-300 cursor-pointer"
            aria-label="Talk to Evoltek"
          >
            <span>TALK TO EVOLTEK</span>
          </a>
        </div>

        {/* Bottom Feature Badges */}
        <div className="ready-cinematic-badges-row inline-flex items-center justify-center gap-5.5 bg-[#03140e]/55 backdrop-blur-[16px] border border-emerald-500/30 py-3 px-8 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.3)] flex-wrap">
          <div className="cinematic-badge-card flex items-center gap-2.5 text-slate-100 text-[0.82rem] font-bold tracking-[0.08em] uppercase transition-all duration-200 hover:text-emerald-400 hover:-translate-y-0.5 cursor-default" title="100% Renewable clean energy">
            <span className="badge-glyph-wrap flex items-center text-emerald-400">
              <Leaf size={16} className="badge-svg-icon" />
            </span>
            <span className="badge-text-label">CLEAN ENERGY</span>
          </div>

          <div className="badge-pipe-separator w-[1px] h-3.5 bg-emerald-500/30 hidden sm:block" aria-hidden="true" />

          <div className="cinematic-badge-card flex items-center gap-2.5 text-slate-100 text-[0.82rem] font-bold tracking-[0.08em] uppercase transition-all duration-200 hover:text-emerald-400 hover:-translate-y-0.5 cursor-default" title="High-yield sustainable infrastructure investment">
            <span className="badge-glyph-wrap flex items-center text-emerald-400">
              <Zap size={16} className="badge-svg-icon" />
            </span>
            <span className="badge-text-label">SUSTAINABLE GROWTH</span>
          </div>

          <div className="badge-pipe-separator w-[1px] h-3.5 bg-emerald-500/30 hidden sm:block" aria-hidden="true" />

          <div className="cinematic-badge-card flex items-center gap-2.5 text-slate-100 text-[0.82rem] font-bold tracking-[0.08em] uppercase transition-all duration-200 hover:text-emerald-400 hover:-translate-y-0.5 cursor-default" title="Connecting urban and highway EV communities">
            <span className="badge-glyph-wrap flex items-center text-emerald-400">
              <Users size={16} className="badge-svg-icon" />
            </span>
            <span className="badge-text-label">STRONGER COMMUNITIES</span>
          </div>
        </div>
      </div>
    </section>
  );
}
