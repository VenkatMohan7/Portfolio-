'use client';

import React, { useState } from 'react';

interface ProfileAvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'hero' | 'full';
  className?: string;
  priority?: boolean;
}

export default function ProfileAvatar({
  size = 'hero',
  className = '',
}: ProfileAvatarProps) {
  const [imgError, setImgError] = useState(false);

  const displaySrc = !imgError ? '/profile.png' : null;

  // Dimensions based on size prop
  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20 sm:w-24 sm:h-24',
    lg: 'w-52 h-52 sm:w-60 sm:h-60',
    xl: 'w-64 h-64 sm:w-72 sm:h-72',
    hero: 'w-full h-80 sm:h-96 md:h-[400px]',
    full: 'w-full h-full min-h-[320px] sm:min-h-[380px]',
  }[size];

  return (
    <div className={`relative group select-none ${sizeClasses} ${className}`}>
      <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-blue-500/40 shadow-2xl shadow-blue-500/20 group-hover:border-blue-400 transition-all bg-slate-950 flex items-center justify-center relative">
        {displaySrc ? (
          // Real Photo Headshot
          <img
            src={displaySrc}
            alt="Venkat Mohan Atmakuru"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-[center_18%] transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          // Crisp, Standalone Vector Developer Portrait
          <svg
            viewBox="0 0 400 400"
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="avatar-bg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#090d16" />
                <stop offset="50%" stopColor="#1e1b4b" />
                <stop offset="100%" stopColor="#0369a1" />
              </linearGradient>
              <linearGradient id="avatar-suit" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>
              <linearGradient id="avatar-skin" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#eab308" />
                <stop offset="100%" stopColor="#d97706" />
              </linearGradient>
              <linearGradient id="avatar-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Background Canvas */}
            <rect width="400" height="400" fill="url(#avatar-bg)" />

            {/* Glowing Tech Circuit Rings */}
            <circle cx="200" cy="200" r="170" fill="none" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="8 8" opacity="0.3" />
            <circle cx="200" cy="200" r="140" fill="none" stroke="#818cf8" strokeWidth="1" opacity="0.25" />
            <circle cx="200" cy="170" r="110" fill="url(#avatar-glow)" />

            {/* Shoulders & Modern Dark Navy Blazer */}
            <path d="M50 400 C60 290 120 260 200 260 C280 260 340 290 350 400 Z" fill="url(#avatar-suit)" />
            
            {/* Crisp Collared Shirt */}
            <polygon points="200,260 165,330 200,350 235,330" fill="#f8fafc" />
            
            {/* Indigo Blue Tie */}
            <polygon points="194,300 206,300 212,400 188,400" fill="#2563eb" />
            
            {/* Neck */}
            <rect x="175" y="210" width="50" height="60" rx="8" fill="#d97706" />

            {/* Head Contour */}
            <ellipse cx="200" cy="170" rx="68" ry="78" fill="url(#avatar-skin)" />

            {/* Modern Styled Hair */}
            <path
              d="M130 150 C130 85 165 70 200 70 C235 70 270 85 270 150 C270 135 250 100 200 100 C150 100 130 135 130 150 Z"
              fill="#0f172a"
            />
            {/* Sideburns & Texture */}
            <path d="M132 150 L136 180 L145 160 Z" fill="#0f172a" />
            <path d="M268 150 L264 180 L255 160 Z" fill="#0f172a" />

            {/* Eyebrows */}
            <path d="M152 142 Q170 137 186 144" fill="none" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" />
            <path d="M214 144 Q230 137 248 142" fill="none" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" />

            {/* Modern Slim Glasses Frame */}
            <rect x="145" y="148" width="46" height="28" rx="8" fill="#0f172a" fillOpacity="0.05" stroke="#0f172a" strokeWidth="3.5" />
            <rect x="209" y="148" width="46" height="28" rx="8" fill="#0f172a" fillOpacity="0.05" stroke="#0f172a" strokeWidth="3.5" />
            <line x1="191" y1="160" x2="209" y2="160" stroke="#0f172a" strokeWidth="3.5" strokeLinecap="round" />
            
            {/* Eyes */}
            <circle cx="168" cy="162" r="4.5" fill="#0f172a" />
            <circle cx="232" cy="162" r="4.5" fill="#0f172a" />
            <circle cx="170" cy="160" r="1.5" fill="#ffffff" />
            <circle cx="234" cy="160" r="1.5" fill="#ffffff" />

            {/* Nose */}
            <path d="M198 168 L202 188 L195 192" fill="none" stroke="#b45309" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />

            {/* Confident Smile */}
            <path d="M178 208 Q200 224 222 208" fill="none" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />

            {/* Subtle VM Monogram Watermark */}
            <text x="200" y="385" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="sans-serif" fontWeight="700" letterSpacing="2">
              VENKAT MOHAN
            </text>
          </svg>
        )}

        {/* Ambient bottom shadow gradient for smooth text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/20 pointer-events-none" />

        {/* Name tag pill overlay */}
        {size !== 'sm' && (
          <div className="absolute bottom-3 inset-x-3 text-center pointer-events-none z-10">
            <span className="text-xs sm:text-sm font-bold text-white tracking-wide bg-slate-950/80 px-3.5 py-1.5 rounded-xl backdrop-blur-md border border-slate-700/60 shadow-xl">
              Venkat Mohan Atmakuru
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
