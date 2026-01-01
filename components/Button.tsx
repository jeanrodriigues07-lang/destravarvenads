
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  glow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', glow = true }) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative group overflow-hidden px-8 py-5 rounded-full font-extrabold text-white text-lg transition-all duration-300 transform hover:scale-105 active:scale-95
        bg-[#00E676] hover:bg-[#00c864]
        ${glow ? 'glow-green' : ''}
        ${className}
      `}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      <div className="absolute inset-0 w-1/4 h-full bg-white opacity-20 skew-x-[-20deg] translate-x-[-100%] group-hover:translate-x-[400%] transition-transform duration-700 ease-in-out"></div>
    </button>
  );
};
