import React, { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

export default function ChargingHubsSection() {
  const [chargerImage, setChargerImage] = useState('/dc-fast-charger.jpg');

  // Flood fill transparent mask to cleanly remove the outer white background and artifacts
  useEffect(() => {
    const img = new Image();
    img.src = '/dc-fast-charger.jpg';
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.drawImage(img, 0, 0);
        const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imgData.data;
        const w = canvas.width;
        const h = canvas.height;

        // BFS queue to remove outer white/off-white background starting from borders
        const visited = new Uint8Array(w * h);
        const queue = [];

        // Seed with all boundary edge pixels
        for (let x = 0; x < w; x++) {
          queue.push(x, 0);
          queue.push(x, h - 1);
          visited[x] = 1;
          visited[(h - 1) * w + x] = 1;
        }
        for (let y = 0; y < h; y++) {
          queue.push(0, y);
          queue.push(w - 1, y);
          visited[y * w] = 1;
          visited[y * w + (w - 1)] = 1;
        }

        let head = 0;
        while (head < queue.length) {
          const x = queue[head++];
          const y = queue[head++];
          const idx = (y * w + x) * 4;
          const r = data[idx];
          const g = data[idx + 1];
          const b = data[idx + 2];

          // Treat near-white and light-gray compression artifacts as background
          const isWhiteBg = (r > 218 && g > 218 && b > 218) && (Math.abs(r - g) < 28 && Math.abs(r - b) < 28);

          if (isWhiteBg) {
            data[idx + 3] = 0; // Make 100% transparent

            const neighbors = [
              [x + 1, y],
              [x - 1, y],
              [x, y + 1],
              [x, y - 1]
            ];
            for (let i = 0; i < 4; i++) {
              const nx = neighbors[i][0];
              const ny = neighbors[i][1];
              if (nx >= 0 && nx < w && ny >= 0 && ny < h) {
                const nPos = ny * w + nx;
                if (!visited[nPos]) {
                  visited[nPos] = 1;
                  queue.push(nx, ny);
                }
              }
            }
          }
        }

        ctx.putImageData(imgData, 0, 0);
        setChargerImage(canvas.toDataURL('image/png'));
      } catch (err) {
        console.error('Error removing background from charger:', err);
      }
    };
  }, []);

  return (
    <section id="charging-stations" className="hubs-section">
      {/* Background network constellation mesh matching reference */}
      <div className="hubs-bg-mesh" aria-hidden="true">
        <svg className="hubs-mesh-svg" viewBox="0 0 1440 760" fill="none" preserveAspectRatio="none">
          {/* Left constellation web */}
          <line x1="0" y1="260" x2="160" y2="350" stroke="#34d399" strokeWidth="1.2" strokeOpacity="0.35" />
          <line x1="160" y1="350" x2="40" y2="480" stroke="#34d399" strokeWidth="1.2" strokeOpacity="0.3" />
          <line x1="40" y1="480" x2="220" y2="560" stroke="#34d399" strokeWidth="1.2" strokeOpacity="0.3" />
          <line x1="160" y1="350" x2="320" y2="280" stroke="#34d399" strokeWidth="1" strokeOpacity="0.25" />
          <line x1="40" y1="480" x2="120" y2="680" stroke="#34d399" strokeWidth="1" strokeOpacity="0.25" />
          <line x1="120" y1="680" x2="340" y2="640" stroke="#34d399" strokeWidth="1" strokeOpacity="0.25" />
          <line x1="220" y1="560" x2="340" y2="640" stroke="#34d399" strokeWidth="1" strokeOpacity="0.25" />
          <line x1="0" y1="260" x2="80" y2="140" stroke="#34d399" strokeWidth="1" strokeOpacity="0.25" />
          <line x1="80" y1="140" x2="240" y2="180" stroke="#34d399" strokeWidth="1" strokeOpacity="0.2" />

          <circle cx="160" cy="350" r="4.5" fill="#10b981" fillOpacity="0.6" />
          <circle cx="40" cy="480" r="4" fill="#10b981" fillOpacity="0.5" />
          <circle cx="220" cy="560" r="4" fill="#10b981" fillOpacity="0.5" />
          <circle cx="120" cy="680" r="3.5" fill="#10b981" fillOpacity="0.4" />
          <circle cx="340" cy="640" r="3" fill="#10b981" fillOpacity="0.4" />
          <circle cx="80" cy="140" r="3" fill="#10b981" fillOpacity="0.4" />

          {/* Right constellation web */}
          <line x1="1440" y1="240" x2="1320" y2="330" stroke="#34d399" strokeWidth="1.2" strokeOpacity="0.35" />
          <line x1="1320" y1="330" x2="1400" y2="460" stroke="#34d399" strokeWidth="1.2" strokeOpacity="0.3" />
          <line x1="1320" y1="330" x2="1180" y2="280" stroke="#34d399" strokeWidth="1" strokeOpacity="0.25" />
          <line x1="1400" y1="460" x2="1280" y2="580" stroke="#34d399" strokeWidth="1" strokeOpacity="0.3" />
          <line x1="1280" y1="580" x2="1380" y2="690" stroke="#34d399" strokeWidth="1" strokeOpacity="0.25" />
          <line x1="1180" y1="280" x2="1100" y2="400" stroke="#34d399" strokeWidth="1" strokeOpacity="0.2" />
          <line x1="1280" y1="580" x2="1140" y2="640" stroke="#34d399" strokeWidth="1" strokeOpacity="0.25" />

          <circle cx="1320" cy="330" r="4.5" fill="#10b981" fillOpacity="0.6" />
          <circle cx="1400" cy="460" r="4" fill="#10b981" fillOpacity="0.5" />
          <circle cx="1280" cy="580" r="4" fill="#10b981" fillOpacity="0.5" />
          <circle cx="1180" cy="280" r="3" fill="#10b981" fillOpacity="0.4" />
          <circle cx="1140" cy="640" r="3.5" fill="#10b981" fillOpacity="0.4" />
        </svg>
      </div>

      <div className="container hubs-container">
        {/* Section Heading matching screenshot */}
        <div className="hubs-header">
          <h2 className="hubs-main-title">
            OUR CHARGING STATIONS &amp; EV HUBS
          </h2>
        </div>

        {/* 3-Column Showcase: Highway Card | DC Fast Charger | City Card & Addons */}
        <div className="hubs-showcase-grid">
          {/* Column 1: Highway Charging Station Card */}
          <div className="hubs-col hubs-col-left">
            <div className="hub-info-card highway-card">
              <h3 className="hub-card-title">HIGHWAY CHARGING STATION</h3>

              <div className="hub-features-list">
                {/* Feature 1: Space Required */}
                <div className="hub-feature-item">
                  <div className="hub-feature-icon-badge">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 14V4h10" />
                      <path d="M4 20h16" />
                      <path d="M20 4v16" />
                      <path d="M14 4l-6 6" />
                      <circle cx="8" cy="10" r="1.5" fill="#16a34a" />
                    </svg>
                  </div>
                  <div>
                    <span className="hub-feature-label">Space Required:</span>
                    <strong className="hub-feature-val">Minimum 1 Acre</strong>
                  </div>
                </div>

                {/* Feature 2: Power */}
                <div className="hub-feature-item">
                  <div className="hub-feature-icon-badge">
                    <Zap size={20} color="#16a34a" strokeWidth={2.4} />
                  </div>
                  <div>
                    <span className="hub-feature-label">Power:</span>
                    <strong className="hub-feature-val">60 kW to 480 kW</strong>
                  </div>
                </div>

                {/* Feature 3: Connectors */}
                <div className="hub-feature-item">
                  <div className="hub-feature-icon-badge">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="6" y="4" width="12" height="12" rx="3" />
                      <circle cx="9" cy="9" r="1.2" fill="#16a34a" />
                      <circle cx="15" cy="9" r="1.2" fill="#16a34a" />
                      <circle cx="12" cy="13" r="1.2" fill="#16a34a" />
                      <path d="M12 16v5" />
                    </svg>
                  </div>
                  <div>
                    <span className="hub-feature-label">Connectors:</span>
                    <strong className="hub-feature-val">DC Fast Charging</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Circuit Branch from card to charger */}
            <div className="hub-connector-branch-left" aria-hidden="true">
              <svg viewBox="0 0 140 160" className="connector-branch-svg" fill="none">
                <path d="M 0 40 C 60 40, 90 70, 140 70" stroke="#86efac" strokeWidth="2" />
                <path d="M 0 90 C 60 90, 80 80, 140 80" stroke="#86efac" strokeWidth="2" />
                <path d="M 0 135 C 70 135, 90 90, 140 90" stroke="#86efac" strokeWidth="2" />
                <circle cx="0" cy="40" r="3.5" fill="#16a34a" />
                <circle cx="0" cy="90" r="3.5" fill="#16a34a" />
                <circle cx="0" cy="135" r="3.5" fill="#16a34a" />
                <circle cx="70" cy="55" r="3" fill="#16a34a" />
                <circle cx="75" cy="110" r="3" fill="#16a34a" />
              </svg>
            </div>
          </div>

          {/* Column 2: Centerpiece EVOLTEK DC Fast Charger Machine */}
          <div className="hubs-col hubs-col-center">
            <div className="charger-unit-wrapper">
              <img
                src={chargerImage}
                alt="EVOLTEK DC Fast Charger Unit"
                className="charger-unit-image"
              />
            </div>
          </div>

          {/* Column 3: City Charging Station Card & EV Hub Lifestyle Add-ons */}
          <div className="hubs-col hubs-col-right">
            {/* Top: City Charging Station Card */}
            <div className="hub-info-card city-card">
              <h3 className="hub-card-title">CITY CHARGING STATION</h3>

              <div className="hub-features-list">
                {/* Feature 1: Space Required */}
                <div className="hub-feature-item">
                  <div className="hub-feature-icon-badge">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                      <path d="M3 9h18" />
                      <path d="M9 21V9" />
                    </svg>
                  </div>
                  <div>
                    <span className="hub-feature-label">Space Required:</span>
                    <strong className="hub-feature-val">Minimum 2000 sq ft</strong>
                  </div>
                </div>

                {/* Feature 2: Power */}
                <div className="hub-feature-item">
                  <div className="hub-feature-icon-badge">
                    <Zap size={20} color="#16a34a" strokeWidth={2.4} />
                  </div>
                  <div>
                    <span className="hub-feature-label">Power:</span>
                    <strong className="hub-feature-val">60 kW to 480 kW</strong>
                  </div>
                </div>

                {/* Feature 3: Connectors */}
                <div className="hub-feature-item">
                  <div className="hub-feature-icon-badge">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="6" y="4" width="12" height="12" rx="3" />
                      <circle cx="9" cy="9" r="1.2" fill="#16a34a" />
                      <circle cx="15" cy="9" r="1.2" fill="#16a34a" />
                      <circle cx="12" cy="13" r="1.2" fill="#16a34a" />
                      <path d="M12 16v5" />
                    </svg>
                  </div>
                  <div>
                    <span className="hub-feature-label">Connectors:</span>
                    <strong className="hub-feature-val">DC Fast Charging</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Circuit Branch from charger to City card */}
            <div className="hub-connector-branch-right" aria-hidden="true">
              <svg viewBox="0 0 140 120" className="connector-branch-svg" fill="none">
                <path d="M 0 60 C 50 60, 80 30, 140 30" stroke="#86efac" strokeWidth="2" />
                <path d="M 0 60 C 50 60, 80 85, 140 85" stroke="#86efac" strokeWidth="2" />
                <circle cx="140" cy="30" r="3.5" fill="#16a34a" />
                <circle cx="140" cy="85" r="3.5" fill="#16a34a" />
                <circle cx="65" cy="45" r="3" fill="#16a34a" />
              </svg>
            </div>

            {/* Bottom: EV Hub Lifestyle Add-ons (Green Card) */}
            <div className="lifestyle-addons-card">
              <h4 className="addons-title">EV Hub Lifestyle Add-ons</h4>

              <div className="addons-pipeline-row">
                {/* Cafeteria */}
                <div className="addon-node">
                  <div className="addon-icon-circle">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                      <line x1="6" y1="1" x2="6" y2="4" />
                      <line x1="10" y1="1" x2="10" y2="4" />
                      <line x1="14" y1="1" x2="14" y2="4" />
                    </svg>
                  </div>
                  <span className="addon-label">Cafeteria</span>
                </div>

                <div className="addon-connector-line">
                  <div className="line-dot"></div>
                </div>

                {/* Restaurant */}
                <div className="addon-node">
                  <div className="addon-icon-circle">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2v20M18 2a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3M6 2v20M3 2v6a3 3 0 0 0 6 0V2" />
                    </svg>
                  </div>
                  <span className="addon-label">Restaurant</span>
                </div>

                <div className="addon-connector-line">
                  <div className="line-dot"></div>
                </div>

                {/* Gaming Playzone */}
                <div className="addon-node">
                  <div className="addon-icon-circle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="6" y1="12" x2="10" y2="12" />
                      <line x1="8" y1="10" x2="8" y2="14" />
                      <circle cx="15.5" cy="13" r="0.8" fill="#ffffff" />
                      <circle cx="18" cy="11" r="0.8" fill="#ffffff" />
                      <rect x="2" y="6" width="20" height="12" rx="6" />
                    </svg>
                  </div>
                  <span className="addon-label">Gaming<br />Playzone</span>
                </div>
              </div>
            </div>

            {/* Lifestyle add-on horizontal connector */}
            <div className="hub-connector-branch-lifestyle" aria-hidden="true">
              <svg viewBox="0 0 120 40" className="connector-branch-svg" fill="none">
                <path d="M 0 20 L 120 20" stroke="#86efac" strokeWidth="2" />
                <circle cx="0" cy="20" r="3.5" fill="#16a34a" />
                <circle cx="60" cy="20" r="3" fill="#16a34a" />
                <circle cx="120" cy="20" r="3.5" fill="#16a34a" />
              </svg>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
