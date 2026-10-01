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
    <section id="home" className="daylight-hero-section">
      {/* Top Banner Visual */}
      <div className="daylight-hero-banner">
        <div className="container daylight-hero-content">
          <div className="daylight-hero-grid">
            {/* Left Column: Heading, Copy, Buttons, 4 Feature Cards */}
            <div className="daylight-hero-left">
              {/* Eyebrow Badge */}
              <div className="daylight-eyebrow-badge">
                <span className="live-pulsing-dot"></span>
                <span>CLEAN ENERGY</span>
                <span className="eyebrow-bullet">•</span>
                <span className="eyebrow-accent-green">SMART NETWORK</span>
                <span className="eyebrow-bullet">•</span>
                <span>GREENER TOMORROW</span>
              </div>

              {/* Headline */}
              <h1 className="daylight-title">
                <span className="title-line-1">POWERING</span><br />
                <span className="title-line-2 title-gradient-green">EVERY JOURNEY.</span>
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

            </div>

            {/* Right Column: Kept open so the background solar canopy, car & landscape show brilliantly */}
            <div className="daylight-hero-right"></div>
          </div>
        </div>
      </div>

      {/* Cards Area (Clean background on mobile without image bleed) */}
      <div className="daylight-hero-cards-section">
        <div className="container">
          <HeroMetrics detailGraphics={detailGraphics} />
        </div>
      </div>
    </section>
  );
}
