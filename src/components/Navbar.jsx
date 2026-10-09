import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('Charging Network');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Charging Network', href: '#charging-stations' },
    { name: 'Locations', href: '#highway-experience' },
    { name: 'Investment', href: '#investment' },
    { name: 'Franchise', href: '#franchise' },
    { name: 'About', href: '#charging-stations' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (link) => {
    setActiveTab(link.name);
    setMobileMenuOpen(false);
    const target = document.querySelector(link.href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="daylight-nav-wrapper fixed top-[18px] left-0 right-0 z-[1000] px-6 flex justify-center pointer-events-none">
      <div className="daylight-nav-container pointer-events-auto w-full max-w-[1280px] h-[78px] pl-[26px] pr-3.5 bg-white rounded-full flex items-center justify-between shadow-[0_14px_38px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.04)] border border-white/90 transition-all duration-300">
        {/* Brand Logo with evoltek-logo.png */}
        <a
          href="#home"
          className="daylight-brand flex items-center gap-3 no-underline cursor-pointer py-0.5 px-1"
          onClick={() => setActiveTab('Charging Network')}
          title="EVOLTEK"
        >
          <img
            src="/evoltek-logo.png"
            alt="EVOLTEK"
            className="daylight-logo-img h-12 w-auto max-w-[165px] object-contain mix-blend-multiply transition-transform duration-250 block hover:scale-[1.03]"
          />
        </a>

        {/* Center Navigation Links */}
        <nav
          className={`daylight-nav-links ${mobileMenuOpen ? 'mobile-open flex flex-col absolute top-[72px] left-5 right-5 bg-white rounded-[18px] p-5 shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-slate-200 gap-3.5 z-[100]' : 'hidden md:flex items-center gap-[30px]'}`}
        >
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link)}
              className={`daylight-nav-item bg-transparent border-0 text-slate-800 text-[0.94rem] font-[550] cursor-pointer py-2 px-1 relative transition-colors duration-200 hover:text-green-600 ${activeTab === link.name ? 'active text-slate-900 font-bold' : ''}`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Right Action Buttons: INVEST NOW (Green) & GET APP (White) */}
        <div className="daylight-nav-actions flex items-center gap-3">
          <button
            className="btn-invest-green bg-[#0f764a] text-white text-[0.88rem] font-extrabold tracking-[0.04em] py-3 px-[26px] rounded-full border-0 cursor-pointer shadow-[0_4px_14px_rgba(15,118,74,0.32)] hover:bg-[#0b5e3a] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(15,118,74,0.44)] transition-all duration-200"
            onClick={() => alert('Opening Investment Portal...')}
          >
            INVEST NOW
          </button>
          <button
            className="btn-get-app hidden md:inline-flex bg-white text-slate-900 text-[0.88rem] font-extrabold tracking-[0.04em] py-[11px] px-[22px] rounded-full border-[1.5px] border-slate-200 cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200"
            onClick={() => {
              const el = document.querySelector('#app');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            GET APP
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            className="daylight-mobile-toggle md:hidden flex items-center justify-center bg-slate-100 border-0 text-slate-900 p-2 rounded-lg cursor-pointer"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
}
