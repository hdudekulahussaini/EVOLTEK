import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../data/navigationData';

export default function Navbar({
  onNavigateContact,
  onNavigateAbout,
  onNavigateServices,
  onNavigateFranchise,
  onNavigateHome,
  activePage = 'home',
}) {
  const [activeTab, setActiveTab] = useState(
    activePage === 'contact'
      ? 'Contact'
      : activePage === 'about'
      ? 'About'
      : activePage === 'services'
      ? 'Services'
      : activePage === 'franchise'
      ? 'Franchise'
      : 'Home'
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (activePage === 'contact') {
      setActiveTab('Contact');
    } else if (activePage === 'about') {
      setActiveTab('About');
    } else if (activePage === 'services') {
      setActiveTab('Services');
    } else if (activePage === 'franchise') {
      setActiveTab('Franchise');
    } else {
      setActiveTab('Home');
    }
  }, [activePage]);

  const handleNavClick = (link) => {
    setActiveTab(link.name);
    setMobileMenuOpen(false);
    if (link.name === 'Contact') {
      if (onNavigateContact) onNavigateContact();
      return;
    }
    if (link.name === 'About') {
      if (onNavigateAbout) onNavigateAbout();
      return;
    }
    if (link.name === 'Services') {
      if (onNavigateServices) onNavigateServices();
      return;
    }
    if (link.name === 'Franchise') {
      if (onNavigateFranchise) onNavigateFranchise();
      return;
    }
    if (link.name === 'Home') {
      if (onNavigateHome) onNavigateHome();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (onNavigateHome) onNavigateHome();
    setTimeout(() => {
      const target = document.querySelector(link.href) || (link.href === '#services' ? document.querySelector('#franchise') : null);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 60);
  };

  return (
    <header className="daylight-nav-wrapper fixed top-[18px] left-0 right-0 z-[1000] px-6 flex justify-center pointer-events-none">
      <div className="daylight-nav-container pointer-events-auto w-full max-w-[1320px] h-[78px] pl-[26px] pr-3.5 bg-white rounded-full flex items-center justify-between shadow-[0_14px_38px_rgba(0,0,0,0.12),0_2px_8px_rgba(0,0,0,0.04)] border border-white/90 transition-all duration-300">
        {/* Brand Logo with evoltek-logo.png */}
        <a
          href="#home"
          className="daylight-brand flex items-center gap-3 no-underline cursor-pointer py-0.5 px-1 shrink-0"
          onClick={(e) => {
            e.preventDefault();
            if (onNavigateHome) onNavigateHome();
            setActiveTab('Home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          title="EVOLTEK"
        >
          <img
            src="/evoltek-logo.png"
            alt="EVOLTEK"
            className="daylight-logo-img h-12 w-auto max-w-[155px] object-contain mix-blend-multiply transition-transform duration-250 block hover:scale-[1.03]"
          />
        </a>

        {/* Center Navigation Links */}
        <nav
          className={`daylight-nav-links ${
            mobileMenuOpen
              ? 'mobile-open flex flex-col absolute top-[72px] left-5 right-5 bg-white rounded-[18px] p-5 shadow-[0_20px_40px_rgba(0,0,0,0.15)] border border-slate-200 gap-3.5 z-[100]'
              : 'hidden lg:flex items-center gap-2.5 xl:gap-5'
          }`}
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link)}
              className={`daylight-nav-item bg-transparent border-0 text-slate-800 text-[0.88rem] xl:text-[0.92rem] font-[550] whitespace-nowrap cursor-pointer py-2 px-1 relative transition-colors duration-200 hover:text-emerald-700 ${
                activeTab === link.name ? 'active text-emerald-700 font-bold' : ''
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="daylight-nav-actions flex items-center gap-2.5 sm:gap-3 shrink-0">
          <button
            className="btn-invest-green bg-[#0f764a] text-white text-[0.84rem] sm:text-[0.88rem] font-extrabold tracking-[0.04em] py-3 px-5 sm:px-[26px] rounded-full border-0 cursor-pointer shadow-[0_4px_14px_rgba(15,118,74,0.32)] hover:bg-[#0b5e3a] hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(15,118,74,0.44)] transition-all duration-200 whitespace-nowrap"
            onClick={() => {
              if (onNavigateFranchise) onNavigateFranchise();
              else window.location.hash = '#franchise';
            }}
          >
            INVEST NOW
          </button>
          <button
            className="btn-get-app hidden md:inline-flex bg-white text-slate-900 text-[0.84rem] sm:text-[0.88rem] font-extrabold tracking-[0.04em] py-[11px] px-4 sm:px-[22px] rounded-full border-[1.5px] border-slate-200 cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-slate-300 hover:bg-slate-50 hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
            onClick={() => {
              if (onNavigateHome) onNavigateHome();
              setTimeout(() => {
                const el = document.querySelector('#app');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }, 60);
            }}
          >
            GET APP
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            className="daylight-mobile-toggle lg:hidden flex items-center justify-center bg-slate-100 border-0 text-slate-900 p-2 rounded-lg cursor-pointer"
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
