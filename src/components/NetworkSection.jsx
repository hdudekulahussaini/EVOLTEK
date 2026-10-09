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
    <section id="network" className="carousel-section relative bg-white py-[85px] pb-[95px] text-[#0b1712] overflow-hidden border-t border-emerald-500/12">
      <div className="carousel-container max-w-[1220px] mx-auto px-6">
        {/* Top Header */}
        <div className="carousel-header text-center mb-[50px]">
          <div className="carousel-pill-badge inline-block py-1.5 px-[22px] border-[1.5px] border-emerald-500 rounded-full bg-white text-emerald-600 text-[0.82rem] font-bold tracking-[0.06em] uppercase mb-[18px] shadow-[0_2px_10px_rgba(16,185,129,0.08)]">
            THE EVOLTEK NETWORK
          </div>
          <h2 className="carousel-main-title text-[clamp(2.4rem,4.4vw,3.6rem)] font-black tracking-[-0.015em] text-[#0b1712] leading-[1.12] mb-3.5 uppercase">
            ONE NETWORK. EVERY JOURNEY.
          </h2>
          <p className="carousel-subtitle text-[1.1rem] font-medium text-slate-600 max-w-[680px] mx-auto leading-[1.55]">
            Connecting cities, highways and destinations through a scalable EV charging network.
          </p>
        </div>

        {/* 3 Modern Cards Display */}
        <div className="carousel-cards-grid grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch mb-0 max-md:max-w-[480px] max-md:mx-auto max-md:mb-[30px]">
          {cards.map((card, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={card.id}
                className={`network-showcase-card group bg-white rounded-[24px] p-[26px_22px_22px_22px] border-[1.5px] border-green-500 shadow-[0_8px_24px_-5px_rgba(0,0,0,0.04)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer flex flex-col justify-between relative hover:-translate-y-1 hover:shadow-[0_18px_38px_-8px_rgba(34,197,94,0.16)] hover:border-green-600 ${isActive ? 'card-active-glow !border-2 !border-green-600 !shadow-[0_16px_36px_-6px_rgba(34,197,94,0.22)]' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                {/* 1. Top Row: Number Badge + Titles */}
                <div className="card-top-row flex items-start gap-4 mb-[18px]">
                  <div className="card-num-badge w-12 h-12 rounded-full bg-green-100 text-green-700 text-[1.3rem] font-extrabold flex items-center justify-center shrink-0 font-sans">
                    {card.id}
                  </div>
                  <div className="card-top-titles flex flex-col">
                    <h3 className="card-main-heading text-[1.55rem] font-extrabold text-[#062318] tracking-[-0.02em] leading-[1.15] mb-1">{card.title}</h3>
                    <p className="card-main-sub text-[0.94rem] font-medium text-slate-600 leading-[1.4]">{card.description}</p>
                  </div>
                </div>

                {/* 2. Middle Section: Photo */}
                <div className="card-image-box rounded-[18px] overflow-hidden h-[215px] w-full mb-5 bg-slate-100 shadow-[inset_0_0_0_1px_rgba(0,0,0,0.05)]">
                  <img
                    src={card.image}
                    alt={card.alt}
                    className="card-center-photo w-full h-full object-cover block transition-transform duration-400 ease-out group-hover:scale-105"
                    onError={(e) => {
                      if (card.id === '01') e.currentTarget.src = '/city-charging.jpg';
                      if (card.id === '02') e.currentTarget.src = '/highway-hub.jpg';
                      if (card.id === '03') e.currentTarget.src = '/destination-lounge.jpg';
                    }}
                  />
                </div>

                {/* 3. Bottom Section: Category Icon + Labels + Arrow Button */}
                <div className="card-bottom-row flex items-center justify-between">
                  <div className="card-bottom-left flex items-center gap-3.5">
                    <div className="card-category-icon-wrap w-11 h-11 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                      {card.icon}
                    </div>
                    <div className="card-bottom-info flex flex-col">
                      <h4 className="card-bottom-title text-[1.05rem] font-extrabold text-[#062318] tracking-[-0.01em] leading-[1.2]">{card.footerTitle}</h4>
                      <p className="card-bottom-sub text-[0.85rem] font-medium text-slate-600 mt-[1px]">{card.footerSub}</p>
                    </div>
                  </div>
                  <button
                    className="card-arrow-circle-btn w-[42px] h-[42px] rounded-full bg-green-100 text-green-700 border-none flex items-center justify-center cursor-pointer transition-all duration-200 ease-out hover:bg-green-600 hover:text-white hover:translate-x-[3px] hover:shadow-[0_4px_12px_rgba(22,163,74,0.3)]"
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
