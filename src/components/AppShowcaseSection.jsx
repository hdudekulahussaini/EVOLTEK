import React, { useEffect, useState } from 'react';

export default function AppShowcaseSection() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [phoneImage, setPhoneImage] = useState('/phone-app-mockup.png');

  useEffect(() => {
    const image = new Image();
    image.src = '/phone-app-mockup.png';
    image.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      const context = canvas.getContext('2d');
      if (!context) return;

      context.drawImage(image, 0, 0);
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imageData.data;
      const visited = new Uint8Array(canvas.width * canvas.height);
      const queue = [];

      for (let x = 0; x < canvas.width; x += 1) {
        queue.push([x, 0], [x, canvas.height - 1]);
      }
      for (let y = 0; y < canvas.height; y += 1) {
        queue.push([0, y], [canvas.width - 1, y]);
      }

      let head = 0;
      while (head < queue.length) {
        const [x, y] = queue[head++];
        const position = y * canvas.width + x;
        if (visited[position]) continue;
        visited[position] = 1;

        const pixel = position * 4;
        const red = pixels[pixel];
        const green = pixels[pixel + 1];
        const blue = pixels[pixel + 2];
        const nearWhite = red > 225 && green > 225 && blue > 225 && Math.max(red, green, blue) - Math.min(red, green, blue) < 24;
        if (!nearWhite) continue;

        pixels[pixel + 3] = 0;
        if (x > 0) queue.push([x - 1, y]);
        if (x < canvas.width - 1) queue.push([x + 1, y]);
        if (y > 0) queue.push([x, y - 1]);
        if (y < canvas.height - 1) queue.push([x, y + 1]);
      }

      context.putImageData(imageData, 0, 0);
      setPhoneImage(canvas.toDataURL('image/png'));
    };
  }, []);

  const features = [
    {
      id: 'status',
      title: 'Station Status',
      desc: 'Check live status of your charging station.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="3" />
          <line x1="9" y1="7" x2="15" y2="7" />
          <polyline points="10 13 12 11 14 13" />
          <line x1="12" y1="11" x2="12" y2="17" />
        </svg>
      )
    },
    {
      id: 'availability',
      title: 'Charger Availability',
      desc: 'See available & occupied chargers in real-time.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6v4a6 6 0 0 1-12 0V6" />
          <line x1="9" y1="2" x2="9" y2="6" />
          <line x1="15" y1="2" x2="15" y2="6" />
          <path d="M12 16v5a1 1 0 0 1-1 1H9" />
        </svg>
      )
    },
    {
      id: 'usage',
      title: 'Usage',
      desc: 'Track energy consumption and usage trends.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
          <path d="M3 20h18" />
          <circle cx="12" cy="4" r="1.5" fill="#ffffff" />
        </svg>
      )
    },
    {
      id: 'sessions',
      title: 'Sessions',
      desc: 'View all charging sessions and details.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )
    },
    {
      id: 'earnings',
      title: 'Earnings',
      desc: 'Monitor your earnings and revenue reports.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3h12M6 8h12M6 13h5a4 4 0 0 0 4-4M6 13l9 8" />
        </svg>
      )
    },
    {
      id: 'performance',
      title: 'Performance',
      desc: 'Get insights to grow your business.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 17l6-6 4 4 8-8" />
          <polyline points="17 7 21 7 21 11" />
        </svg>
      )
    }
  ];

  return (
    <section id="app" className="app-showcase-section">
      <div className="container app-showcase-container">
        {/* 3-Column Layout: Left Intro + Center Phone Mockup + Right 6 Glowing Feature Pills */}
        <div className="app-showcase-grid">
          {/* Left Column */}
          <div className="app-col-intro">
            {/* Main Headline */}
            <h2 className="app-main-heading">
              <span className="head-dark-green">YOUR STATION.</span>
              <br />
              <span className="head-glow-green">YOUR NUMBERS.</span>
              <br />
              <span className="head-dark-green">YOUR CONTROL.</span>
            </h2>

            {/* Subtitle */}
            <p className="app-lead-desc">
              Manage your station, track performance,
              <br className="desktop-break" />
              and view earnings—all in one app.
            </p>

            {/* App Store Download Badges */}
            <div className="app-showcase-store-badges">
              {/* Google Play */}
              <a
                href="#googleplay"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Opening EVOLTEK Franchise App on Google Play Store...');
                }}
                className="store-badge-btn app-store-btn-custom"
                aria-label="Get it on Google Play"
              >
                <div className="badge-svg-icon">
                  <svg viewBox="0 0 512 512" width="24" height="24">
                    <path fill="#00E676" d="M30.6 8.5C18.9 14.9 11 27.5 11 42.1v427.8c0 14.6 7.9 27.2 19.6 33.6l239.5-247.5L30.6 8.5z" />
                    <path fill="#FFD600" d="M449.6 226.7l-66.2-38.2-64.8 67.5 64.8 67.5 66.2-38.2c16.3-9.4 26.4-26.8 26.4-49.3s-10.1-39.9-26.4-49.3z" />
                    <path fill="#00B0FF" d="M318.6 256l-248.5 256c3.7 2 7.8 3.1 12.1 3.1 8.2 0 16.1-4.2 20.6-11.5l280.6-162-64.8-85.6z" />
                    <path fill="#FF1744" d="M318.6 256l64.8-85.6L102.8 8.4C98.3 1.1 90.4-3.1 82.2-3.1c-4.3 0-8.4 1.1-12.1 3.1L318.6 256z" />
                  </svg>
                </div>
                <div className="badge-text-block">
                  <span className="badge-eyebrow">GET IT ON</span>
                  <span className="badge-store-name">Google Play</span>
                </div>
              </a>

              {/* Apple App Store */}
              <a
                href="#appstore"
                onClick={(e) => {
                  e.preventDefault();
                  alert('Opening EVOLTEK Franchise App on Apple App Store...');
                }}
                className="store-badge-btn app-store-btn-custom"
                aria-label="Download on the App Store"
              >
                <div className="badge-svg-icon apple-store-icon">
                  <svg viewBox="0 0 170 170" width="23" height="23" fill="#ffffff">
                    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.34-6.41-9.78-11.4-20.76-14.98-32.96-3.58-12.19-5.37-23.77-5.37-34.74 0-14.24 3.73-26.06 11.19-35.45 7.46-9.39 16.9-14.15 28.32-14.28 4.8 0 10.06 1.25 15.78 3.76 5.73 2.5 9.47 3.82 11.24 3.96 1.76-.14 5.76-1.55 12-4.22 6.24-2.68 11.75-3.86 16.53-3.54 12.39.82 22.37 5.74 29.94 14.77-10.87 6.6-16.2 15.53-15.98 26.8.22 8.78 3.72 16.08 10.51 21.9 6.78 5.82 14.77 9.17 23.96 10.05-2.07 6.07-4.46 12.08-7.17 18.04zM119.22 31.02c0-7.39 2.66-14.28 7.98-20.67 5.32-6.39 11.83-10.12 19.53-11.19.11 1.09.16 1.95.16 2.59 0 7.28-2.77 14.23-8.32 20.85-5.55 6.62-12.18 10.37-19.89 11.25.11-.87.17-1.46.17-1.77z" />
                  </svg>
                </div>
                <div className="badge-text-block">
                  <span className="badge-eyebrow badge-eyebrow-apple">Download on the</span>
                  <span className="badge-store-name">App Store</span>
                </div>
              </a>
            </div>
          </div>

          {/* Center Column: Phone Mockup */}
          <div className="app-col-mockup">
            <div className="phone-mockup-wrapper">
              <img
                src={phoneImage}
                alt="EVOLTEK Franchise Mobile App Dashboard — Station Status, Charger Availability, Total Usage, Earnings"
                className="phone-mockup-img"
              />
            </div>
          </div>

          {/* Right Column: 6 Glowing Feature Pills */}
          <div className="app-col-features">
            <div className="features-pill-stack">
              {features.map((feat, idx) => (
                <div
                  key={feat.id}
                  className={`app-feature-pill ${activeFeature === idx ? 'pill-active' : ''}`}
                  onMouseEnter={() => setActiveFeature(idx)}
                >
                  {/* Left Circular Emerald Icon Badge */}
                  <div className="pill-icon-bubble">
                    {feat.icon}
                  </div>

                  {/* Text Content */}
                  <div className="pill-text-content">
                    <h3 className="pill-title">{feat.title}</h3>
                    <p className="pill-desc">{feat.desc}</p>
                  </div>

                  {/* Right Arrow */}
                  <div className="pill-arrow-wrap">
                    <span className="pill-arrow">›</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
