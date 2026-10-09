import React, { useState, useEffect } from 'react';
import HeroMetrics from './HeroMetrics';

export default function Hero() {
  const [detailGraphics, setDetailGraphics] = useState({
    carWave: null,
    highwayMap: null,
    roiGauge: null
  });

  // Extract pixel-perfect car wave, highway map, and gauge from user's uploaded detail image
  useEffect(() => {
    const img = new Image();
    img.src = '/hero-cards-detail.png';
    img.onload = () => {
      try {
        const crop = (sxRatio, syRatio, swRatio, shRatio) => {
          const canvas = document.createElement('canvas');
          const sx = img.naturalWidth * sxRatio;
          const sy = img.naturalHeight * syRatio;
          const sw = img.naturalWidth * swRatio;
          const sh = img.naturalHeight * shRatio;
          canvas.width = sw;
          canvas.height = sh;
          const ctx = canvas.getContext('2d');
          if (!ctx) return null;
          ctx.drawImage(img, sx, sy, sw, sh, 0, 0, sw, sh);

          // Strip white background to generate transparent PNG
          try {
            const imgData = ctx.getImageData(0, 0, sw, sh);
            const d = imgData.data;
            for (let i = 0; i < d.length; i += 4) {
              const r = d[i];
              const g = d[i + 1];
              const b = d[i + 2];
              if (r > 225 && g > 225 && b > 225) {
                d[i + 3] = 0;
              } else if (r > 195 && g > 195 && b > 195) {
                const avg = (r + g + b) / 3;
                d[i + 3] = Math.max(0, Math.min(255, Math.floor((255 - avg) * 4.2)));
              }
            }
            ctx.putImageData(imgData, 0, 0);
          } catch (e) {
            console.error('Transparency processing error:', e);
          }

          return canvas.toDataURL('image/png');
        };

        const carWave = crop(0.040, 0.280, 0.440, 0.210);
        const highwayMap = crop(0.520, 0.235, 0.440, 0.255);
        const roiGauge = crop(0.055, 0.670, 0.185, 0.260);

        if (carWave && highwayMap) {
          setDetailGraphics({
            carWave,
            highwayMap,
            roiGauge
          });
        }
      } catch (err) {
        console.error('Error cropping card details:', err);
      }
    };
  }, []);

  const scrollToNetwork = () => {
    const el = document.querySelector('#network');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="daylight-hero-section relative min-h-[clamp(800px,94vh,980px)] w-full flex flex-col justify-between bg-[#080f0c] bg-[url('/image.png')] bg-cover bg-[center_right] bg-no-repeat pt-[130px] pb-[30px] overflow-visible">
      {/* Dual Gradient Overlay: Dark charcoal/black on left fading to center, soft light/gray on right */}
      <div className="daylight-hero-overlay absolute inset-0 pointer-events-none z-[2] block" aria-hidden="true" />

      {/* Top Banner Visual */}
      <div className="daylight-hero-banner relative w-full flex-grow flex flex-col justify-center z-[5]">
        <div className="container daylight-hero-content relative z-10 w-full max-w-[1320px] mx-auto px-7 flex flex-col justify-between flex-grow">
          <div className="daylight-hero-grid grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-9 items-center mt-[clamp(64px,10vh,120px)] mb-3">
            {/* Left Column: Heading, Copy, Buttons, 4 Feature Cards */}
            <div className="daylight-hero-left max-w-[740px] w-full m-0 pt-[clamp(14px,2.5vh,28px)] text-left">
              {/* Eyebrow Badge */}
              <div className="daylight-eyebrow-badge inline-flex items-center gap-2.5 bg-white/[0.08] backdrop-blur-[14px] py-[7px] px-[18px] border border-emerald-400/35 rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.25)] text-slate-200 text-[0.8rem] font-bold tracking-[0.12em] uppercase mb-[22px]">
                <span className="live-pulsing-dot w-2 h-2 rounded-full bg-green-500 shadow-[0_0_12px_#22c55e] inline-block animate-pulse"></span>
                <span>CLEAN ENERGY</span>
                <span className="eyebrow-bullet text-emerald-400 text-[0.9rem]">•</span>
                <span className="eyebrow-accent-green text-green-400 font-extrabold">SMART NETWORK</span>
                <span className="eyebrow-bullet text-emerald-400 text-[0.9rem]">•</span>
                <span>GREENER TOMORROW</span>
              </div>

              {/* Headline */}
              <h1 className="daylight-title text-[clamp(2.9rem,4.8vw,4.5rem)] font-black leading-[1.04] tracking-[-0.03em] text-white mb-[22px]">
                <span className="title-line-1 text-white inline-block drop-shadow-[0_2px_14px_rgba(0,0,0,0.75)]">POWERING</span><br />
                <span className="title-line-2 title-gradient-green inline-block text-green-500 font-black drop-shadow-[0_2px_16px_rgba(0,0,0,0.85)] sm:whitespace-nowrap">EVERY JOURNEY.</span>
              </h1>

              {/* Subtitle / Paragraph */}
              <p className="daylight-description text-[1.18rem] text-slate-100 font-medium leading-[1.68] max-w-[560px] mb-[34px] drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                “A convenient, reliable and scalable EV charging network connecting cities, highways and destinations.”
              </p>

              {/* CTA Buttons */}
              <div className="daylight-cta-row flex items-center justify-start gap-4 mb-4 flex-wrap">
                <button
                  className="btn-daylight-primary inline-flex items-center gap-2.5 bg-gradient-to-br from-green-600 to-[#0f764a] text-white text-[0.94rem] font-extrabold tracking-[0.05em] py-3.5 px-7 rounded-full border border-white/20 cursor-pointer shadow-[0_6px_22px_rgba(22,163,74,0.42)] hover:from-green-500 hover:to-green-700 hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(22,163,74,0.58)] transition-all duration-200"
                  onClick={() => alert('Opening Partner Program...')}
                >
                  <span>BECOME A PARTNER</span>
                  <span className="arrow">→</span>
                </button>
                <button
                  className="btn-daylight-secondary inline-flex items-center gap-2.5 bg-white text-slate-900 text-[0.94rem] font-extrabold tracking-[0.05em] py-3 px-7 rounded-full border-[1.5px] border-white shadow-[0_6px_22px_rgba(0,0,0,0.24)] cursor-pointer hover:bg-slate-50 hover:-translate-y-0.5 hover:text-[#0f764a] transition-all duration-200"
                  onClick={scrollToNetwork}
                >
                  <span>EXPLORE NETWORK</span>
                  <span className="arrow">→</span>
                </button>
              </div>

            </div>

            {/* Right Column: Kept open so the background solar canopy, car & landscape show brilliantly */}
            <div className="daylight-hero-right"></div>
          </div>
        </div>
      </div>

      {/* Cards Area (Clean background on mobile without image bleed) */}
      <div className="daylight-hero-cards-section relative w-full z-20">
        <div className="container">
          <HeroMetrics detailGraphics={detailGraphics} />
        </div>
      </div>
    </section>
  );
}
