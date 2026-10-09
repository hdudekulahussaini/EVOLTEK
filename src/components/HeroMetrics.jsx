import React from 'react';
import { Coins, MapPin, TrendingUp, Zap } from 'lucide-react';

export default function HeroMetrics({ detailGraphics }) {
    const cards = [
        {
            title: 'Charging Power',
            value: '60kW to 480kW',
            icon: <Zap size={14} />,
            graphic: detailGraphics.carWave ? (
                <img src={detailGraphics.carWave} alt="EV Charging Power Car and Wave" className="real-card-graphic-img car-wave-img" />
            ) : (
                <svg viewBox="0 0 100 35" className="wave-svg" fill="none" aria-hidden="true">
                    <path d="M 2 24 Q 25 6, 50 18 T 98 12" stroke="#22c55e" strokeWidth="2.2" strokeDasharray="4 2" />
                    <path d="M 2 28 Q 28 10, 54 22 T 98 16" stroke="#86efac" strokeWidth="1.8" />
                </svg>
            )
        },
        {
            title: 'Network Map',
            subtitle: 'CITY • HIGHWAY • DESTINATION',
            icon: <MapPin size={14} />,
            graphic: detailGraphics.highwayMap ? (
                <img src={detailGraphics.highwayMap} alt="Highway Route Network Map" className="real-card-graphic-img highway-map-img" />
            ) : (
                <svg viewBox="0 0 200 45" className="route-svg" fill="none" aria-hidden="true">
                    <path d="M 10 32 L 45 28 L 80 36 L 115 18 L 150 24 L 190 16" stroke="#16a34a" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="10" cy="32" r="4.5" fill="#ffffff" stroke="#16a34a" strokeWidth="2.5" />
                    <circle cx="80" cy="36" r="4.5" fill="#ffffff" stroke="#16a34a" strokeWidth="2.5" />
                    <circle cx="115" cy="18" r="5" fill="#16a34a" />
                    <circle cx="190" cy="16" r="4.5" fill="#ffffff" stroke="#16a34a" strokeWidth="2.5" />
                </svg>
            )
        },
        {
            title: 'ROI Statistics',
            icon: <TrendingUp size={14} />,
            graphic: detailGraphics.roiGauge ? (
                <img src={detailGraphics.roiGauge} alt="ROI Gauge Dial" className="real-card-graphic-img roi-gauge-img" />
            ) : (
                <svg viewBox="0 0 70 42" className="gauge-svg" fill="none" aria-hidden="true">
                    <path d="M 6 36 A 28 28 0 0 1 64 36" stroke="#e2e8f0" strokeWidth="7" strokeLinecap="round" />
                    <path d="M 6 36 A 28 28 0 0 1 54 18" stroke="#16a34a" strokeWidth="7" strokeLinecap="round" />
                    <circle cx="35" cy="36" r="3.5" fill="#0f172a" />
                    <line x1="35" y1="36" x2="48" y2="18" stroke="#0f172a" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
            ),
            value: 'ROI 567%',
            subtitle: '5-YEAR PROJECTION'
        },
        {
            title: 'Investment Summary',
            value: '50/50',
            subtitle: 'CO-INVESTMENT MODEL',
            icon: <Coins size={14} />
        }
    ];

    return (
        <div className="daylight-cards-2x2 hero-metrics-outside w-full max-w-none grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-1 relative z-20 sm:translate-y-1/2">
            {cards.map((card) => (
                <div
                    className="daylight-mini-card bg-gradient-to-br from-white/[0.78] to-white/[0.52] backdrop-blur-[24px] border-[1.5px] border-white/[0.85] rounded-[20px] p-4 sm:p-5 pt-4 pb-3.5 shadow-[0_16px_36px_-6px_rgba(0,0,0,0.07),0_4px_16px_rgba(16,185,129,0.06),inset_0_1px_2px_rgba(255,255,255,0.95)] hover:-translate-y-1 hover:from-white/[0.88] hover:to-white/[0.65] hover:border-emerald-400/80 hover:shadow-[0_20px_40px_-6px_rgba(16,185,129,0.2),inset_0_1px_2px_rgba(255,255,255,1)] transition-all duration-300 flex flex-col justify-between min-h-[136px]"
                    key={card.title}
                >
                    <div className="mini-card-header flex items-center justify-between mb-1">
                        <span className="mini-card-title text-[0.88rem] font-bold text-slate-900 tracking-tight">{card.title}</span>
                        <div className="mini-card-icon-badge w-7 h-7 rounded-full bg-emerald-50/85 backdrop-blur-sm border border-emerald-500/20 text-green-600 flex items-center justify-center">{card.icon}</div>
                    </div>
                    {card.subtitle && card.title === 'Network Map' && <div className="mini-card-sub-pills text-[0.72rem] font-bold tracking-wider text-green-700 uppercase bg-green-50 px-2 py-0.5 rounded-full inline-block">{card.subtitle}</div>}
                    {card.value && card.title !== 'ROI Statistics' && <div className="mini-card-val-bold text-[1.52rem] font-black text-[#062318] tracking-tight leading-[1.15]">{card.value}</div>}
                    {card.graphic && <div className={card.title === 'Charging Power' ? 'mini-card-graphic wave-car-graphic' : card.title === 'Network Map' ? 'mini-card-graphic route-graphic' : 'roi-stat-wrapper'}>{card.graphic}</div>}
                    {card.title === 'ROI Statistics' && <div><div className="roi-number text-[1.52rem] font-black text-emerald-600 leading-tight">{card.value}</div><div className="roi-sub text-[0.7rem] font-bold text-slate-500 tracking-wider uppercase">{card.subtitle}</div></div>}
                    {card.title === 'Investment Summary' && <div className="mini-card-footer-sub text-[0.75rem] font-bold text-slate-500 uppercase tracking-wide">{card.subtitle}</div>}
                </div>
            ))}
        </div>
    );
}
