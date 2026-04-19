import React from "react"

export function LogoB({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="logo-hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>
        <linearGradient id="logo-innerGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1E3A8A" />
          <stop offset="100%" stopColor="#60A5FA" />
        </linearGradient>
        <filter id="logo-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>
      
      {/* Base shadow */}
      <path 
        d="M50 5 L89 27.5 L89 72.5 L50 95 L11 72.5 L11 27.5 Z" 
        fill="#000000" 
        opacity="0.25" 
        filter="url(#logo-glow)" 
        transform="translate(0, 4)" 
      />
      
      {/* Main Base Hexagon */}
      <path 
        d="M50 5 L89 27.5 L89 72.5 L50 95 L11 72.5 L11 27.5 Z" 
        fill="url(#logo-hexGrad)" 
      />
      
      {/* 3D Inner Top Highlight to match original image design */}
      <path 
        d="M50 7 L87.5 28.5 L50 50 L12.5 28.5 Z" 
        fill="url(#logo-innerGrad)" 
        opacity="0.8" 
      />
      
      {/* Bezel inner stroke */}
      <path 
        d="M50 10 L84 29.5 L84 70.5 L50 90 L16 70.5 L16 29.5 Z" 
        fill="none" 
        stroke="rgba(255,255,255,0.4)" 
        strokeWidth="1.5" 
      />
      
      {/* Letter B */}
      <text 
        x="50" 
        y="68" 
        fontSize="52" 
        fontWeight="900" 
        fill="white" 
        textAnchor="middle" 
        fontFamily="sans-serif, Arial" 
        style={{ filter: 'drop-shadow(0px 2px 2px rgba(0,0,0,0.5))' }}
      >
        B
      </text>
    </svg>
  )
}

