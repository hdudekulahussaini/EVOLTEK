import React from 'react';
import { FOOTER_QUICK_LINKS } from '../../data/navigationData';

export default function Footer({ onNavigateContact, onNavigateAbout, onNavigateServices, onNavigateFranchise, onNavigateHome }) {
    const handleLinkClick = (event, href, route) => {
        event.preventDefault();
        if (route === 'contact' || href === '#contact') {
            if (onNavigateContact) onNavigateContact();
            window.location.hash = '#contact';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        if (route === 'about' || href === '#about') {
            if (onNavigateAbout) onNavigateAbout();
            window.location.hash = '#about';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        if (route === 'services' || href === '#services') {
            if (onNavigateServices) onNavigateServices();
            window.location.hash = '#services';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        if (route === 'franchise' || href === '#franchise') {
            if (onNavigateFranchise) onNavigateFranchise();
            window.location.hash = '#franchise';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }
        if (onNavigateHome) onNavigateHome();
        window.location.hash = href;
        setTimeout(() => {
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }, 60);
    };

    return (
        <footer className="evoltek-footer-section bg-[#03140e] text-slate-300 pt-16 pb-12 border-t border-emerald-950">
            <div className="footer-inner-container max-w-[1280px] mx-auto px-6">
                {/* Main 4-Column Grid */}
                <div className="footer-main-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* 1. Brand Column */}
                    <div className="footer-col footer-col-brand flex flex-col gap-4">
                        <a href="#home" onClick={(e) => handleLinkClick(e, '#home', 'home')} className="footer-brand-header inline-block">
                            <img src="/evoltek-footer-logo.png" alt="EVOLTEK" className="footer-brand-image h-10 w-auto object-contain" />
                        </a>

                        <p className="footer-tagline-text text-slate-400 text-[0.88rem] leading-relaxed">Eat. Connect. Relax. Recharge. Drive.</p>

                        <div className="footer-social-icons-row flex items-center gap-3 mt-2" aria-label="Social media links">
                            {/* LinkedIn */}
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer-social-circle-btn social-linkedin w-8 h-8 rounded-full bg-emerald-950 border border-emerald-800/40 text-emerald-400 flex items-center justify-center hover:bg-emerald-800 hover:text-white transition-colors duration-200" aria-label="LinkedIn">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.65 1.65 0 0 0-1.66 1.66c0 .92.74 1.66 1.66 1.66.92 0 1.66-.74 1.66-1.66 0-.92-.74-1.66-1.66-1.66Z" />
                                </svg>
                            </a>

                            {/* YouTube */}
                            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="footer-social-circle-btn social-youtube w-8 h-8 rounded-full bg-emerald-950 border border-emerald-800/40 text-emerald-400 flex items-center justify-center hover:bg-emerald-800 hover:text-white transition-colors duration-200" aria-label="YouTube">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>

                            {/* Facebook */}
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-social-circle-btn social-facebook w-8 h-8 rounded-full bg-emerald-950 border border-emerald-800/40 text-emerald-400 flex items-center justify-center hover:bg-emerald-800 hover:text-white transition-colors duration-200" aria-label="Facebook">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </a>

                            {/* Twitter / X */}
                            <a href="https://x.com" target="_blank" rel="noreferrer" className="footer-social-circle-btn social-twitter w-8 h-8 rounded-full bg-emerald-950 border border-emerald-800/40 text-emerald-400 flex items-center justify-center hover:bg-emerald-800 hover:text-white transition-colors duration-200" aria-label="Twitter">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>

                            {/* Instagram */}
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-social-circle-btn social-instagram w-8 h-8 rounded-full bg-emerald-950 border border-emerald-800/40 text-emerald-400 flex items-center justify-center hover:bg-emerald-800 hover:text-white transition-colors duration-200" aria-label="Instagram">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* 2. Quick Links */}
                    <div className="footer-col footer-col-links flex flex-col">
                        <h4 className="footer-heading text-white font-extrabold text-[1rem] tracking-wide mb-5 uppercase">Quick Links</h4>
                        <nav className="footer-vertical-links flex flex-col gap-2.5" aria-label="Quick links">
                            {FOOTER_QUICK_LINKS.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    onClick={(e) => handleLinkClick(e, item.href, item.route)}
                                    className="footer-link-item text-slate-400 hover:text-emerald-400 text-[0.88rem] transition-colors duration-200 no-underline"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* 3. Contact Us */}
                    <div className="footer-col footer-col-contact flex flex-col">
                        <h4 className="footer-heading text-white font-extrabold text-[1rem] tracking-wide mb-5 uppercase">Contact Us</h4>
                        <div className="footer-contact-list flex flex-col gap-3.5">
                            <a href="mailto:evoltek.chargeindia@gmail.com" className="footer-contact-row flex items-center gap-3 text-slate-400 hover:text-emerald-400 text-[0.88rem] no-underline transition-colors duration-200">
                                <span className="footer-icon-wrap footer-icon-color-email w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-800/30 flex items-center justify-center text-emerald-400 shrink-0">
                                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                                        <rect width="20" height="16" x="2" y="4" rx="2" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                </span>
                                <span className="footer-contact-text">evoltek.chargeindia@gmail.com</span>
                            </a>

                            <a href="tel:+919876543210" className="footer-contact-row flex items-center gap-3 text-slate-400 hover:text-emerald-400 text-[0.88rem] no-underline transition-colors duration-200">
                                <span className="footer-icon-wrap footer-icon-color-phone w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-800/30 flex items-center justify-center text-emerald-400 shrink-0">
                                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                </span>
                                <span className="footer-contact-text">+91 98765 43210</span>
                            </a>

                            <div className="footer-contact-row footer-contact-static flex items-center gap-3 text-slate-400 text-[0.88rem]">
                                <span className="footer-icon-wrap footer-icon-color-location w-8 h-8 rounded-lg bg-emerald-950/80 border border-emerald-800/30 flex items-center justify-center text-emerald-400 shrink-0">
                                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </span>
                                <span className="footer-contact-text">NK Towers, Madhapur, Hyderabad - 500081, Telangana</span>
                            </div>
                        </div>
                    </div>

                    {/* 4. Download App */}
                    <div className="footer-col footer-col-download flex flex-col">
                        <h4 className="footer-heading text-white font-extrabold text-[1rem] tracking-wide mb-5 uppercase">Download App</h4>
                        <div className="footer-badges-vertical flex flex-col gap-3 max-w-[200px]">
                            {/* Google Play Button */}
                            <a
                                href="#googleplay"
                                onClick={(e) => {
                                    e.preventDefault();
                                    alert('Opening EVOLTEK on Google Play Store...');
                                }}
                                className="store-badge-btn inline-flex items-center gap-3 bg-black/60 hover:bg-black/90 text-white py-2 px-4 rounded-xl border border-white/10 transition-all duration-200 hover:-translate-y-0.5"
                                aria-label="Get it on Google Play"
                            >
                                <div className="badge-svg-icon shrink-0">
                                    <svg viewBox="0 0 512 512" width="24" height="24">
                                        <path fill="#00E676" d="M30.6 8.5C18.9 14.9 11 27.5 11 42.1v427.8c0 14.6 7.9 27.2 19.6 33.6l239.5-247.5L30.6 8.5z" />
                                        <path fill="#FFD600" d="M449.6 226.7l-66.2-38.2-64.8 67.5 64.8 67.5 66.2-38.2c16.3-9.4 26.4-26.8 26.4-49.3s-10.1-39.9-26.4-49.3z" />
                                        <path fill="#00B0FF" d="M318.6 256l-248.5 256c3.7 2 7.8 3.1 12.1 3.1 8.2 0 16.1-4.2 20.6-11.5l280.6-162-64.8-85.6z" />
                                        <path fill="#FF1744" d="M318.6 256l64.8-85.6L102.8 8.4C98.3 1.1 90.4-3.1 82.2-3.1c-4.3 0-8.4 1.1-12.1 3.1L318.6 256z" />
                                    </svg>
                                </div>
                                <div className="badge-text-block text-left">
                                    <span className="badge-eyebrow block text-[0.62rem] font-bold text-slate-400 tracking-wider">GET IT ON</span>
                                    <span className="badge-store-name block text-[0.92rem] font-bold text-white leading-tight">Google Play</span>
                                </div>
                            </a>

                            {/* Apple App Store Button */}
                            <a
                                href="#appstore"
                                onClick={(e) => {
                                    e.preventDefault();
                                    alert('Opening EVOLTEK on App Store...');
                                }}
                                className="store-badge-btn inline-flex items-center gap-3 bg-black/60 hover:bg-black/90 text-white py-2 px-4 rounded-xl border border-white/10 transition-all duration-200 hover:-translate-y-0.5"
                                aria-label="Download on the App Store"
                            >
                                <div className="badge-svg-icon apple-store-icon shrink-0">
                                    <svg viewBox="0 0 170 170" width="23" height="23" fill="#ffffff">
                                        <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.81-11.96-14.34-6.41-9.78-11.4-20.76-14.98-32.96-3.58-12.19-5.37-23.77-5.37-34.74 0-14.24 3.73-26.06 11.19-35.45 7.46-9.39 16.9-14.15 28.32-14.28 4.8 0 10.06 1.25 15.78 3.76 5.73 2.5 9.47 3.82 11.24 3.96 1.76-.14 5.76-1.55 12-4.22 6.24-2.68 11.75-3.86 16.53-3.54 12.39.82 22.37 5.74 29.94 14.77-10.87 6.6-16.2 15.53-15.98 26.8.22 8.78 3.72 16.08 10.51 21.9 6.78 5.82 14.77 9.17 23.96 10.05-2.07 6.07-4.46 12.08-7.17 18.04zM119.22 31.02c0-7.39 2.66-14.28 7.98-20.67 5.32-6.39 11.83-10.12 19.53-11.19.11 1.09.16 1.95.16 2.59 0 7.28-2.77 14.23-8.32 20.85-5.55 6.62-12.18 10.37-19.89 11.25.11-.87.17-1.46.17-1.77z" />
                                    </svg>
                                </div>
                                <div className="badge-text-block text-left">
                                    <span className="badge-eyebrow badge-eyebrow-apple block text-[0.62rem] font-bold text-slate-400 tracking-wider">Download on the</span>
                                    <span className="badge-store-name block text-[0.92rem] font-bold text-white leading-tight">App Store</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar with Divider */}
                <div className="footer-bottom-row pt-8 border-t border-emerald-950/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <div className="footer-copyright-text">
                        © 2026 Evoltek. All Rights Reserved. <a href="https://sunseaz.com" target="_blank" rel="noopener noreferrer" className="sunseaz-link text-white hover:text-emerald-400 hover:underline transition-colors font-medium">sunseaz.com</a>
                    </div>
                    <nav className="footer-legal-nav flex items-center gap-3" aria-label="Legal navigation">
                        <a href="#privacy" className="hover:text-emerald-400 transition-colors duration-200">Privacy Policy</a>
                        <span className="footer-pipe-divider text-slate-700">|</span>
                        <a href="#terms" className="hover:text-emerald-400 transition-colors duration-200">Terms &amp; Conditions</a>
                        <span className="footer-pipe-divider text-slate-700">|</span>
                        <a href="#sitemap" className="hover:text-emerald-400 transition-colors duration-200">Sitemap</a>
                    </nav>
                </div>
            </div>
        </footer>
    );
}
