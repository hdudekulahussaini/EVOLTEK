import React, { useState, useEffect } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

export default function NetworkSection() {
  const [activeIndex, setActiveIndex] = useState(1); // Default to center card (02 HIGHWAY)
  const [cardImages, setCardImages] = useState({
    city: '/city-charging.jpg',
    highway: '/highway-hub.jpg',
    destination: '/destination-lounge.jpg'
  });

  // Extract pixel-perfect card photos from the uploaded reference image
  useEffect(() => {
    const img = new Image();
    img.src = '/cards-reference.png';
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
          return canvas.toDataURL('image/jpeg', 0.95);
        };

        // Precision crop coordinates from media_1790750686533.png
        const cityImg = crop(0.057, 0.340, 0.269, 0.380);
        const highwayImg = crop(0.365, 0.340, 0.269, 0.380);
        const destImg = crop(0.673, 0.340, 0.269, 0.380);

        if (cityImg && highwayImg && destImg) {
          setCardImages({
            city: cityImg,
            highway: highwayImg,
            destination: destImg
          });
        }
      } catch (err) {
        // Fallback already active
      }
    };
  }, []);

  const cards = [
    {
      id: '01',
      title: 'CITY',
      description: 'Fast charging for everyday EV commuters.',
      image: cardImages.city,
      alt: 'EV fast charging for city commuters',
      footerTitle: 'CITY',
      footerSub: 'Urban Charging Network',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#16a34a">
          <path d="M15 11V5l-5-2v4L4 9v12h16V11h-5zm-8 8H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9.7l3-.9V11H7v2zm4 8H9v-2h2v2zm0-4H9v-2h2v2zm0-4H9v-2h2v2zm0-4H9V5.5l2 .8V7zm6 12h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2z" />
        </svg>
      )
    },
    {
      id: '02',
      title: 'HIGHWAY',
      description: 'High-capacity charging for long-distance travellers.',
      image: cardImages.highway,
      alt: 'Highway solar canopy EV charging station',
      footerTitle: 'HIGHWAY',
      footerSub: 'On-the-Go Charging',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.4" strokeLinecap="round">
          <path d="M4 22L8.5 2" />
          <path d="M20 22L15.5 2" />
          <line x1="12" y1="5" x2="12" y2="8" strokeDasharray="1.5 2" />
          <line x1="12" y1="11" x2="12" y2="14" strokeDasharray="1.5 2" />
          <line x1="12" y1="17" x2="12" y2="20" strokeDasharray="1.5 2" />
        </svg>
      )
    },
    {
      id: '03',
      title: 'DESTINATION',
      description: 'Charging combined with comfort and convenience.',
      image: cardImages.destination,
      alt: 'EV destination charging cafe and lounge',
      footerTitle: 'DESTINATION',
      footerSub: 'Charge. Relax. Explore.',
      icon: <MapPin size={22} color="#16a34a" strokeWidth={2.4} />
    }
  ];

  return (
    <section id="network" className="carousel-section">
      <div className="carousel-container">
        {/* Top Header */}
        <div className="carousel-header">
          <div className="carousel-pill-badge">
            THE EVOLTEK NETWORK
          </div>
          <h2 className="carousel-main-title">
            ONE NETWORK. EVERY JOURNEY.
          </h2>
          <p className="carousel-subtitle">
            Connecting cities, highways and destinations through a scalable EV charging network.
          </p>
        </div>

        {/* 3 Modern Cards Display */}
        <div className="carousel-cards-grid">
          {cards.map((card, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={card.id}
                className={`network-showcase-card ${isActive ? 'card-active-glow' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                {/* 1. Top Row: Number Badge + Titles */}
                <div className="card-top-row">
                  <div className="card-num-badge">
                    {card.id}
                  </div>
                  <div className="card-top-titles">
                    <h3 className="card-main-heading">{card.title}</h3>
                    <p className="card-main-sub">{card.description}</p>
                  </div>
                </div>

                {/* 2. Middle Section: Photo */}
                <div className="card-image-box">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="card-center-photo"
                    onError={(e) => {
                      if (card.id === '01') e.currentTarget.src = '/city-charging.jpg';
                      if (card.id === '02') e.currentTarget.src = '/highway-hub.jpg';
                      if (card.id === '03') e.currentTarget.src = '/destination-lounge.jpg';
                    }}
                  />
                </div>

                {/* 3. Bottom Section: Category Icon + Labels + Arrow Button */}
                <div className="card-bottom-row">
                  <div className="card-bottom-left">
                    <div className="card-category-icon-wrap">
                      {card.icon}
                    </div>
                    <div className="card-bottom-info">
                      <h4 className="card-bottom-title">{card.footerTitle}</h4>
                      <p className="card-bottom-sub">{card.footerSub}</p>
                    </div>
                  </div>
                  <button
                    className="card-arrow-circle-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      alert(`Exploring EVOLTEK ${card.title} Network...`);
                    }}
                    aria-label={`Explore ${card.title}`}
                  >
                    <ArrowRight size={18} strokeWidth={2.4} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
