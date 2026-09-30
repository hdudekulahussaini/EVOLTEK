import React, { useState, useEffect } from 'react';
import {
  Zap,
  MapPin,
  TrendingUp,
  Coins,
  Leaf,
  Network,
  ShieldCheck,
  BarChart3
} from 'lucide-react';

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
    <section id="home" className="daylight-hero-section">
      {/* Light gradient overlay on left for text readability */}
      <div className="daylight-hero-overlay"></div>

      <div className="container daylight-hero-content">
        <div className="daylight-hero-grid">
          {/* Left Column: Heading, Copy, Buttons, 4 Feature Cards */}
          <div className="daylight-hero-left">
            {/* Eyebrow */}
            <div className="daylight-eyebrow">
              CLEAN ENERGY &bull; SMART NETWORK &bull; GREENER TOMORROW
            </div>

            {/* Headline */}
            <h1 className="daylight-title">
              EVOLTEK:<br />
              <span className="title-line-2">Powering Every Journey.</span>
            </h1>

            {/* Subtitle / Paragraph */}
            <p className="daylight-description">
              A convenient, reliable and scalable EV charging network connecting cities, highways and destinations.
            </p>

            {/* CTA Buttons */}
            <div className="daylight-cta-row">
              <button
                className="btn-daylight-primary"
                onClick={() => alert('Opening Partner Program...')}
              >
                <span>BECOME A PARTNER</span>
                <span className="arrow">→</span>
              </button>
              <button
                className="btn-daylight-secondary"
                onClick={scrollToNetwork}
              >
                <span>EXPLORE NETWORK</span>
                <span className="arrow">→</span>
              </button>
            </div>

            {/* 4 Feature Cards (2x2 Grid) matching screenshot */}
            <div className="daylight-cards-2x2">
              {/* Card 1: Charging Power with Real White EV Car & Electric Waves */}
              <div className="daylight-mini-card">
                <div className="mini-card-header">
                  <span className="mini-card-title">Charging Power</span>
                  <div className="mini-card-icon-badge">
                    <Zap size={14} className="badge-icon" />
                  </div>
                </div>
                <div className="mini-card-val-bold">60kW to 480kW</div>
                <div className="mini-card-graphic wave-car-graphic">
                  {detailGraphics.carWave ? (
                    <img
                      src={detailGraphics.carWave}
                      alt="EV Charging Power Car and Wave"
                      className="real-card-graphic-img car-wave-img"
                    />
                  ) : (
                    <svg viewBox="0 0 100 35" className="wave-svg" fill="none">
                      <path
                        d="M 2 24 Q 25 6, 50 18 T 98 12"
                        stroke="#22c55e"
                        strokeWidth="2.2"
                        strokeDasharray="4 2"
                      />
                      <path
                        d="M 2 28 Q 28 10, 54 22 T 98 16"
                        stroke="#86efac"
                        strokeWidth="1.8"
                      />
                    </svg>
                  )}
                </div>
              </div>

              {/* Card 2: Network Map with Real Highway Route Map & Node Circles */}
              <div className="daylight-mini-card">
                <div className="mini-card-header">
                  <span className="mini-card-title">Network Map</span>
                  <div className="mini-card-icon-badge">
                    <MapPin size={14} className="badge-icon" />
                  </div>
                </div>
                <div className="mini-card-sub-pills">
                  <span className="green-bullet">&bull; CITY</span> &bull; HIGHWAY &bull; DESTINATION
                </div>
                <div className="mini-card-graphic route-graphic">
                  {detailGraphics.highwayMap ? (
                    <img
                      src={detailGraphics.highwayMap}
                      alt="Highway Route Network Map"
                      className="real-card-graphic-img highway-map-img"
                    />
                  ) : (
                    <svg viewBox="0 0 200 45" className="route-svg" fill="none">
                      <path
                        d="M 10 32 L 45 28 L 80 36 L 115 18 L 150 24 L 190 16"
                        stroke="#16a34a"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="10" cy="32" r="4.5" fill="#ffffff" stroke="#16a34a" strokeWidth="2.5" />
                      <circle cx="80" cy="36" r="4.5" fill="#ffffff" stroke="#16a34a" strokeWidth="2.5" />
                      <circle cx="115" cy="18" r="5" fill="#16a34a" />
                      <circle cx="190" cy="16" r="4.5" fill="#ffffff" stroke="#16a34a" strokeWidth="2.5" />
                    </svg>
                  )}
                </div>
              </div>

              {/* Card 3: ROI Statistics with Gauge Dial */}
              <div className="daylight-mini-card">
                <div className="mini-card-header">
                  <span className="mini-card-title">ROI Statistics</span>
                  <div className="mini-card-icon-badge">
                    <TrendingUp size={14} className="badge-icon" />
                  </div>
                </div>
                <div className="roi-stat-wrapper">
                  <div className="gauge-graphic">
                    {detailGraphics.roiGauge ? (
                      <img
                        src={detailGraphics.roiGauge}
                        alt="ROI Gauge Dial"
                        className="real-card-graphic-img roi-gauge-img"
                      />
                    ) : (
                      <svg viewBox="0 0 70 42" className="gauge-svg">
                        <path
                          d="M 6 36 A 28 28 0 0 1 64 36"
                          fill="none"
                          stroke="#e2e8f0"
                          strokeWidth="7"
                          strokeLinecap="round"
                        />
                        <path
                          d="M 6 36 A 28 28 0 0 1 54 18"
                          fill="none"
                          stroke="#16a34a"
                          strokeWidth="7"
                          strokeLinecap="round"
                        />
                        <circle cx="35" cy="36" r="3.5" fill="#0f172a" />
                        <line x1="35" y1="36" x2="48" y2="18" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <div className="roi-number">
                      <span className="roi-label">ROI </span>
                      567%
                    </div>
                    <div className="roi-sub">5-YEAR PROJECTION</div>
                  </div>
                </div>
              </div>

              {/* Card 4: Investment Summary */}
              <div className="daylight-mini-card">
                <div className="mini-card-header">
                  <span className="mini-card-title">Investment Summary</span>
                  <div className="mini-card-icon-badge">
                    <Coins size={14} className="badge-icon" />
                  </div>
                </div>
                <div className="mini-card-val-bold">50/50</div>
                <div className="mini-card-footer-sub">
                  CO-INVESTMENT MODEL
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Kept open so the background solar canopy, car & landscape show brilliantly */}
          <div className="daylight-hero-right"></div>
        </div>

        {/* Bottom Horizontal Features Bar (4 Items with icons) */}
        <div className="daylight-bottom-bar">
          {/* Item 1 */}
          <div className="bottom-bar-item">
            <div className="bottom-icon-wrap">
              <Leaf size={20} className="bottom-green-icon" />
            </div>
            <div>
              <div className="bottom-item-title">Clean Energy</div>
              <div className="bottom-item-sub">A Greener Tomorrow</div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="bottom-bar-item">
            <div className="bottom-icon-wrap">
              <Network size={20} className="bottom-green-icon" />
            </div>
            <div>
              <div className="bottom-item-title">Wide Network</div>
              <div className="bottom-item-sub">Cities &bull; Highways &bull; Destinations</div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="bottom-bar-item">
            <div className="bottom-icon-wrap">
              <BarChart3 size={20} className="bottom-green-icon" />
            </div>
            <div>
              <div className="bottom-item-title">High Returns</div>
              <div className="bottom-item-sub">Sustainable Investment</div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="bottom-bar-item">
            <div className="bottom-icon-wrap">
              <ShieldCheck size={20} className="bottom-green-icon" />
            </div>
            <div>
              <div className="bottom-item-title">Reliable Infrastructure</div>
              <div className="bottom-item-sub">Built for the Future</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
