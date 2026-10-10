import React from 'react';

/**
 * Reusable primary & secondary button component matching EVOLTEK design system.
 */
export default function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline'
  onClick,
  className = '',
  type = 'button',
  icon: Icon,
  disabled = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 rounded-full font-bold transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-[#0f764a] hover:bg-[#0b5e3a] text-white text-xs sm:text-sm tracking-wide py-3.5 px-6 sm:px-7 border-0 shadow-[0_4px_18px_rgba(15,118,74,0.32)] hover:shadow-[0_6px_25px_rgba(15,118,74,0.45)] hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'bg-[#2ee585] hover:bg-[#3bf093] text-[#031e13] text-xs sm:text-sm tracking-wide py-3.5 px-6 sm:px-7 border-0 shadow-[0_4px_20px_rgba(46,229,133,0.35)] hover:shadow-[0_6px_25px_rgba(46,229,133,0.5)] hover:-translate-y-0.5 active:translate-y-0',
    outline: 'bg-white hover:bg-[#16a34a] text-[#16a34a] hover:text-white text-xs sm:text-sm py-2.5 px-5 border border-[#16a34a] hover:-translate-y-0.5 active:translate-y-0 shadow-xs',
    frosted: 'bg-white/95 hover:bg-white text-slate-800 text-xs sm:text-sm font-bold tracking-wide py-3.5 px-6 sm:px-7 border border-slate-300 hover:border-[#0f764a] shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {Icon && <Icon size={16} className="transition-transform duration-200" />}
    </button>
  );
}
