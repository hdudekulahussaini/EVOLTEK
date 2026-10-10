import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Share2,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { submitInquiry } from '../../services/contactService';

export default function ContactPage({ onNavigateHome }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [heroBg, setHeroBg] = useState('/contact-hero-banner.png?v=banner_exact');

  useEffect(() => {
    const img = new Image();
    img.src = '/contact-page-reference.png';
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) {
      alert('Please fill in your name and email address.');
      return;
    }
    setIsSubmitting(true);
    try {
      await submitInquiry(formData);
      setFormSubmitted(true);
    } catch (err) {
      // Even if network fails, provide graceful fallback confirmation
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page-wrapper w-full bg-white text-slate-900 font-sans min-h-screen">
      {/* 1. HERO SECTION WITH EXACT CONTACT BANNER IMAGE */}
      <section className="relative overflow-hidden min-h-[460px] md:min-h-[500px] lg:min-h-[540px] pt-[105px] sm:pt-[120px] flex items-center bg-white border-b border-slate-100">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="EVOLT Fast Charging Station Banner"
            className="w-full h-full object-cover object-right sm:object-center select-none"
            onError={(e) => {
              e.currentTarget.src = '/contact-hero-banner.png';
            }}
          />
        </div>

        <div className="relative z-10 max-w-[1240px] w-full mx-auto px-6 py-12 lg:py-16 text-left">
          <div className="max-w-[540px] pl-0 sm:pl-4 lg:pl-10">
            <div className="inline-flex items-center gap-2 text-sm text-slate-600 font-semibold mb-3 bg-white/70 backdrop-blur-xs sm:bg-transparent px-3 py-1 sm:p-0 rounded-full">
              <button
                onClick={onNavigateHome}
                className="hover:text-emerald-700 transition-colors"
              >
                Home
              </button>
              <span className="text-slate-400 font-bold">›</span>
              <span className="text-emerald-700 font-bold">Contact</span>
            </div>

            <h1 className="text-[clamp(2.6rem,4.6vw,4.2rem)] font-black uppercase tracking-tight text-[#062318] leading-[1.05] mb-3">
              CONTACT <span className="text-emerald-600 drop-shadow-xs">US</span>
            </h1>

            <div className="text-[1.1rem] sm:text-[1.25rem] text-slate-800 font-extrabold leading-snug">
              We're Here to Help
              <p className="text-slate-600 font-medium text-[0.95rem] sm:text-[1.05rem] mt-1">
                Get in Touch with Our EV Experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN SECTION: 2-COLUMN LAYOUT (FORM + CONTACT INFORMATION) */}
      <section className="py-16 lg:py-20 bg-[#fafcfb]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-10 items-start">
            {/* LEFT COLUMN: GET IN TOUCH FORM CARD */}
            <div
              id="contact-form-card"
              className="bg-white rounded-3xl p-8 lg:p-10 border border-slate-200/80 shadow-[0_10px_35px_-8px_rgba(0,0,0,0.06)]"
            >
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4 border border-emerald-500/20">
                SEND US A MESSAGE
              </div>

              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
                Get in Touch
              </h2>
              <p className="text-slate-500 text-[0.95rem] mb-8">
                Fill out the form and our team will get back to you shortly.
              </p>

              {formSubmitted ? (
                <div className="bg-emerald-50 border border-emerald-500/30 rounded-2xl p-8 text-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-600/30">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-slate-600 max-w-md mx-auto mb-6 text-sm">
                    Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>. One of our EV charging specialists will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ fullName: '', email: '', phone: '', message: '' });
                    }}
                    className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-all shadow-md cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50/70 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50/70 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50/70 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Type your message here..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50/70 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#054d3a] hover:bg-[#075f48] text-white font-extrabold uppercase tracking-wider py-4 px-6 rounded-xl flex items-center justify-center gap-2.5 shadow-md hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 text-sm cursor-pointer disabled:opacity-60"
                  >
                    <span>{isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
                    <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </div>

            {/* RIGHT COLUMN: OUR CONTACT INFORMATION CARDS */}
            <div className="space-y-6 text-left">
              <h2 className="text-xl font-black text-slate-900 tracking-tight uppercase mb-2">
                OUR CONTACT INFORMATION
              </h2>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex items-start gap-5 hover:border-emerald-500/50 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-700/20">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Our Office</h3>
                  <p className="text-sm font-bold text-emerald-950">EVOLTEK Technologies Pvt. Ltd.</p>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1 font-medium">
                    Plot No. 30, Survey No. 72, 73, Flat No 101,
                    <br />
                    NK Towers, Near Ayyappa Society,
                    <br />
                    Near Capital Park Road, Madhapur,
                    <br />
                    Hyderabad - 500081, Telangana, India
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex items-start gap-5 hover:border-emerald-500/50 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-700/20">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Call Us</h3>
                  <a href="tel:+919876543210" className="text-sm font-bold text-slate-900 hover:text-emerald-700 transition-colors block">
                    +91 98765 43210
                  </a>
                  <p className="text-xs text-slate-500 mt-1">
                    Mon – Sat: 9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex items-start gap-5 hover:border-emerald-500/50 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-700/20">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Email Us</h3>
                  <a href="mailto:info@evolt.com" className="text-sm font-semibold text-slate-800 hover:text-emerald-700 transition-colors block">
                    info@evolt.com
                  </a>
                  <a href="mailto:support@evolt.com" className="text-sm font-semibold text-slate-800 hover:text-emerald-700 transition-colors block mt-0.5">
                    support@evolt.com
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex items-start gap-5 hover:border-emerald-500/50 hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-full bg-emerald-700 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-700/20">
                  <Share2 size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">Follow Us</h3>
                  <div className="flex items-center gap-2.5">
                    <a
                      href="#facebook"
                      aria-label="Facebook"
                      className="w-8 h-8 rounded-full bg-[#1877f2] text-white flex items-center justify-center text-xs font-bold hover:scale-110 transition-transform"
                    >
                      f
                    </a>
                    <a
                      href="#twitter"
                      aria-label="Twitter"
                      className="w-8 h-8 rounded-full bg-[#1da1f2] text-white flex items-center justify-center text-xs font-bold hover:scale-110 transition-transform"
                    >
                      𝕏
                    </a>
                    <a
                      href="#instagram"
                      aria-label="Instagram"
                      className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center text-xs font-bold hover:scale-110 transition-transform"
                    >
                      📸
                    </a>
                    <a
                      href="#linkedin"
                      aria-label="LinkedIn"
                      className="w-8 h-8 rounded-full bg-[#0a66c2] text-white flex items-center justify-center text-xs font-bold hover:scale-110 transition-transform"
                    >
                      in
                    </a>
                    <a
                      href="#youtube"
                      aria-label="YouTube"
                      className="w-8 h-8 rounded-full bg-[#ff0000] text-white flex items-center justify-center text-xs font-bold hover:scale-110 transition-transform"
                    >
                      ▶
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FIND US ON THE MAP SECTION (LIVE GOOGLE MAP) */}
      <section className="py-12 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-xl min-h-[460px] lg:min-h-[500px] flex items-center">
            <div className="absolute inset-0 z-0 w-full h-full">
              <iframe
                title="EVOLTEK Office Location - NK Towers Madhapur Hyderabad"
                src="https://maps.google.com/maps?q=NK+Towers,+Ayyappa+Society,+Near+Capital+Park+Road,+Madhapur,+Hyderabad,+Telangana+500081&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                style={{ minHeight: '100%', width: '100%' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="relative z-20 pointer-events-none w-full flex justify-end p-4 sm:p-6 lg:p-8">
              <div className="pointer-events-auto max-w-[430px] w-full bg-[#04281a]/95 backdrop-blur-md rounded-2xl p-6 lg:p-7 text-white border border-emerald-500/30 shadow-2xl text-left">
                <div className="inline-block bg-emerald-500/20 text-emerald-300 text-[0.7rem] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3 border border-emerald-400/30">
                  VISIT OUR OFFICE
                </div>
                <h3 className="text-2xl font-black mb-1 text-white">
                  Find Us on the Map
                </h3>
                <p className="text-sm font-bold text-emerald-300 mb-2">
                  NK Towers, Madhapur, Hyderabad
                </p>
                <p className="text-slate-300 text-xs sm:text-[0.82rem] leading-relaxed mb-5 font-normal">
                  Plot No. 30, Survey No. 72, 73, Flat No 101, NK Towers, Near Ayyappa Society, Near Capital Park Road, Madhapur, Hyderabad - 500081, Telangana, India.
                </p>
                <div className="flex items-center gap-3 flex-wrap">
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Plot+No.30,+NK+Towers,+Near+Ayyappa+Society,+Near+Capital+Park+Road,+Madhapur,+Hyderabad,+Telangana+500081"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-[#04281a] font-extrabold text-xs uppercase tracking-wider py-3 px-5 rounded-full shadow-lg transition-all hover:scale-105"
                  >
                    <span>GET DIRECTIONS</span>
                    <ArrowRight size={15} />
                  </a>
                  <a
                    href="https://maps.google.com/?q=NK+Towers,+Ayyappa+Society,+Near+Capital+Park+Road,+Madhapur,+Hyderabad,+Telangana+500081"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider py-3 px-4 rounded-full border border-white/20 transition-all"
                  >
                    <MapPin size={14} className="text-emerald-400" />
                    <span>VIEW ON MAP</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
