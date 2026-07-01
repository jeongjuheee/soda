'use client';
import { useState } from 'react';

export default function MiniMascot() {
  const [isTapped, setIsTapped] = useState(false);

  const handleTap = () => {
    if (isTapped) return;
    setIsTapped(true);
    setTimeout(() => setIsTapped(false), 550);
  };

  return (
    <div style={{ display: 'inline-block', cursor: 'pointer' }} onClick={handleTap}>
      <style>{`
        @keyframes miniFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
        @keyframes miniSquash { 0% { transform: scale(1,1); } 30% { transform: scale(1.18, 0.78); } 55% { transform: scale(0.88, 1.16); } 75% { transform: scale(1.05, 0.95); } 100% { transform: scale(1,1); } }
        .mini-float-wrapper { animation: miniFloat 3.2s ease-in-out infinite; transform-origin: center bottom; }
        .mini-squash-wrapper { transform-origin: center bottom; }
        .mini-is-squashing .mini-squash-wrapper { animation: miniSquash 0.55s cubic-bezier(0.36, 1.6, 0.4, 1) !important; }
      `}</style>
      
      <div className={`mini-float-wrapper ${isTapped ? 'mini-is-squashing' : ''}`} style={{ width: '46px', height: '52px' }}>
        <div className="mini-squash-wrapper" style={{ width: '100%', height: '100%' }}>
          <svg width="46" height="52" viewBox="0 0 140 150">
            <defs>
              <radialGradient id="miniM" cx="35%" cy="28%" r="80%">
                <stop offset="0%" stopColor="#fff"/>
                <stop offset="45%" stopColor="#D6E2FF"/>
                <stop offset="100%" stopColor="#fff" stopOpacity="0.85"/>
              </radialGradient>
            </defs>
            <path d="M70 12 C100 10, 126 34, 128 64 C130 90, 116 112, 92 120 C92 128, 78 130, 70 124 C62 130, 48 128, 48 120 C24 112, 10 90, 12 64 C14 34, 40 10, 70 12 Z" fill="url(#miniM)"/>
            {/* Sunglasses */}
            <rect x="50" y="68" width="20" height="14" rx="7" fill="#1A1A2E"/>
            <rect x="80" y="68" width="20" height="14" rx="7" fill="#1A1A2E"/>
            <rect x="70" y="72" width="10" height="3" fill="#1A1A2E"/>
            {/* Ribbon */}
            <path d="M70 20 C70 20, 62 10, 50 13 C44 15, 44 23, 50 25 C58 27, 66 22, 70 20 Z" fill="#FF6B9D"/>
            <path d="M70 20 C70 20, 78 10, 90 13 C96 15, 96 23, 90 25 C82 27, 74 22, 70 20 Z" fill="#FF85AC"/>
            <circle cx="70" cy="20" r="4.5" fill="#E8528A"/>
            {/* Smile / Basic mouth mapping */}
            <path d="M58 92 Q75 102 92 92" stroke="#16234F" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}
