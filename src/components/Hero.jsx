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

          </div>

          {/* Right Column: Kept open so the background solar canopy, car & landscape show brilliantly */}
          <div className="daylight-hero-right"></div>
        </div>

        <HeroMetrics detailGraphics={detailGraphics} />

      </div>
    </section>
  );
}
