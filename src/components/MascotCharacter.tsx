'use client';
import { useState, useEffect } from 'react';
import styles from './MascotCharacter.module.css';

interface MascotCharacterProps {
  exp: number;
  hasIncompleteRoutine?: boolean;
  completedRoutines?: number;
  totalRoutines?: number;
  daysLeft?: number; // 챌린지 D-Day
  streakBroken?: boolean;
  onTap?: () => void;
}

export default function MascotCharacter({ 
  exp, 
  hasIncompleteRoutine = true, 
  completedRoutines = 0, 
  totalRoutines = 5,
  daysLeft = 10,
  streakBroken = false,
  onTap
}: MascotCharacterProps) {
  const [isTapped, setIsTapped] = useState(false);
  const [expression, setExpression] = useState<'기본' | '응원' | '축하' | '졸림' | '슬픔'>('기본');
  const [justCompleted, setJustCompleted] = useState(false);

  // Level Logic
  let level = 1;
  if (exp >= 1200) level = 4;
  else if (exp >= 700) level = 3;
  else if (exp >= 300) level = 2;

  // State Machine Logic
  useEffect(() => {
    if (justCompleted) return; // 축하 모드일 땐 상태 고정

    const hour = new Date().getHours();
    
    // Priority: 슬픔 > 응원 > 졸림 > 기본
    if (streakBroken) {
      setExpression('슬픔');
    } else if (daysLeft <= 3) {
      setExpression('응원');
    } else if (hour >= 21 && hasIncompleteRoutine) {
      setExpression('졸림');
    } else {
      setExpression('기본');
    }
  }, [hasIncompleteRoutine, daysLeft, streakBroken, justCompleted]);

  // Handle Routine Complete Trigger
  useEffect(() => {
    // 만약 방금 완료 갯수가 올라갔다면 축하 표정 트리거 (모의 로직)
    if (completedRoutines > 0 && completedRoutines < totalRoutines) {
      setExpression('축하');
      setJustCompleted(true);
      const timer = setTimeout(() => {
        setJustCompleted(false);
      }, 3000);
      return () => clearTimeout(timer);
    } else if (completedRoutines === totalRoutines && totalRoutines > 0) {
      setExpression('축하'); // 100% 완료시 축하 유지
    }
  }, [completedRoutines, totalRoutines]);

  const handleTap = () => {
    if (isTapped) return;
    setIsTapped(true);
    if (onTap) onTap();
    setTimeout(() => setIsTapped(false), 550);
  };

  // Body Gradient Logic
  let gradStops = [
    { offset: '0%', color: '#D6E2FF' },
    { offset: '40%', color: '#88A8F7' },
    { offset: '80%', color: '#4A7BF0' },
    { offset: '100%', color: '#3360D9' }
  ];
  if (level === 4 && expression !== '졸림' && expression !== '슬픔') {
    gradStops = [
      { offset: '0%', color: '#FFE9C5' },
      { offset: '35%', color: '#A8C5FF' },
      { offset: '70%', color: '#4A7BF0' },
      { offset: '100%', color: '#2A4FC9' }
    ];
  } else if (expression === '졸림') {
    gradStops = [
      { offset: '0%', color: '#C8D4F0' },
      { offset: '40%', color: '#7A8FD8' },
      { offset: '80%', color: '#6F8FE8' },
      { offset: '100%', color: '#5A7AD0' } // 원래 가이드엔 100% 없음, 임의 확장
    ];
  } else if (expression === '슬픔') {
    gradStops = [
      { offset: '0%', color: '#B8C8E8' },
      { offset: '40%', color: '#7090C8' },
      { offset: '80%', color: '#7C97E0' },
      { offset: '100%', color: '#6080C8' } // 임의 확장
    ];
  }

  // Wrapper Classes
  let containerClasses = `${styles.sodaContainer} ${styles[`lv${level}`]}`;
  if (isTapped) containerClasses += ` ${styles.isSquashing}`;
  if (expression === '졸림') containerClasses += ` ${styles.isSleepy}`;
  if (expression === '응원') containerClasses += ` ${styles.isCheering}`;

  return (
    <div className={containerClasses} onClick={handleTap}>
      <svg className={`${styles.sodaLayer} ${styles.sodaShadow}`} viewBox="0 0 140 160">
        <ellipse cx="70" cy="148" rx="28" ry="5" fill="#4A7BF0" opacity="0.12" />
      </svg>

      <div className={styles.sodaFloatWrapper}>
        <div className={styles.sodaSquashWrapper}>
          <svg className={`${styles.sodaLayer} ${styles.sodaBody}`} viewBox="0 0 140 160">
        <defs>
          <radialGradient id="mascotGradV2" cx="35%" cy="28%" r="80%">
            {gradStops.map((stop, i) => <stop key={i} offset={stop.offset} stopColor={stop.color} />)}
          </radialGradient>
        </defs>
        <path d={
          expression === '졸림' ? "M70 16 C98 14,122 36,124 64 C126 88,113 108,90 116 C90 124,77 126,70 121 C63 126,50 124,50 116 C27 108,14 88,16 64 C18 36,42 14,70 16Z" :
          expression === '슬픔' ? "M70 20 C94 18,116 38,118 64 C120 86,108 104,88 112 C88 120,76 122,70 117 C64 122,52 120,52 112 C32 104,20 86,22 64 C24 38,46 18,70 20Z" :
          level === 4 ? "M70 20 C100 18,126 42,128 70 C130 94,118 114,96 122 C96 134,84 142,72 136 C64 144,50 142,44 132 C28 126,12 106,12 82 C12 50,38 22,70 20Z" :
          "M70 12 C100 10,126 34,128 64 C130 90,116 112,92 120 C92 128,78 130,70 124 C62 130,48 128,48 120 C24 112,10 90,12 64 C14 34,40 10,70 12Z"
        } fill="url(#mascotGradV2)" />
        
        {/* Highlights */}
        <ellipse cx="48" cy="50" rx="16" ry="12" fill="#fff" opacity="0.4" />
        {level < 4 && <ellipse cx="42" cy="42" rx="6" ry="8" fill="#fff" opacity="0.6" />}
      </svg>

      <svg className={`${styles.sodaLayer} ${styles.sodaFace}`} viewBox="0 0 140 160">
        {expression === '기본' && (
          <g>
            <ellipse cx="58" cy="78" rx="5" ry="7" fill="#16234F" />
            <ellipse cx="86" cy="78" rx="5" ry="7" fill="#16234F" />
            <circle cx="59.5" cy="75" r="1.6" fill="#fff" />
            <circle cx="87.5" cy="75" r="1.6" fill="#fff" />
          </g>
        )}
        {expression === '응원' && (
          <g>
            <path d="M52 70 L55 76 L61 77 L56 81 L58 87 L52 83 L46 87 L48 81 L43 77 L49 76Z" fill="#16234F"/>
            <path d="M84 70 L87 76 L93 77 L88 81 L90 87 L84 83 L78 87 L80 81 L75 77 L81 76Z" fill="#16234F"/>
            <ellipse cx="40" cy="90" rx="7" ry="4" fill="#FF9FB8" opacity="0.55"/>
            <ellipse cx="104" cy="90" rx="7" ry="4" fill="#FF9FB8" opacity="0.55"/>
            <path d="M52 96 Q70 110 92 96" stroke="#16234F" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
          </g>
        )}
        {expression === '축하' && (
          <g>
            <path d="M52 76 Q58 68 64 76" stroke="#16234F" strokeWidth="4" fill="none" strokeLinecap="round"/>
            <path d="M80 76 Q86 68 92 76" stroke="#16234F" strokeWidth="4" fill="none" strokeLinecap="round"/>
            <ellipse cx="40" cy="90" rx="7" ry="4" fill="#FF9FB8" opacity="0.6"/>
            <ellipse cx="104" cy="90" rx="7" ry="4" fill="#FF9FB8" opacity="0.6"/>
            <path d="M50 94 Q70 112 92 94" stroke="#16234F" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
          </g>
        )}
        {expression === '졸림' && (
          <g>
            <path d="M50 76 Q58 80 66 76" stroke="#16234F" strokeWidth="4" fill="none" strokeLinecap="round"/>
            <path d="M78 76 Q86 80 94 76" stroke="#16234F" strokeWidth="4" fill="none" strokeLinecap="round"/>
            <text x="96" y="46" fontSize="13" fontWeight="800" fill="#C5D2FF" fontFamily="sans-serif">Z</text>
            <text x="107" y="34" fontSize="9" fontWeight="800" fill="#C5D2FF" fontFamily="sans-serif">z</text>
          </g>
        )}
        {expression === '슬픔' && (
          <g>
            <path d="M52 80 Q58 74 64 78" stroke="#16234F" strokeWidth="4" fill="none" strokeLinecap="round"/>
            <path d="M76 78 Q82 74 88 80" stroke="#16234F" strokeWidth="4" fill="none" strokeLinecap="round"/>
            <path d="M54 84 C54 84,50 92,54 96 C58 92,54 84,54 84Z" fill="#A9C4FF"/>
            <path d="M58 100 Q70 94 82 100" stroke="#16234F" strokeWidth="3" fill="none" strokeLinecap="round"/>
          </g>
        )}
      </svg>

      <div className={`${styles.sodaLayer} ${styles.sodaAccessories}`}>
        {(level === 1 || level === 2) && (
          <svg className={`${styles.sodaLayer}`} style={{ opacity: 1 }} viewBox="0 0 140 160">
            <line x1="70" y1="12" x2="70" y2="0" stroke="#5FD68A" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M70 6 C70 6,62 -2,54 1 C54 1,58 8,70 6Z" fill="#5FD68A"/>
            <path d="M70 4 C70 4,78 -2,86 1 C86 1,82 8,70 4Z" fill="#7AE39E"/>
          </svg>
        )}

        {level >= 2 && (
          <svg className={`${styles.sodaLayer}`} style={{ opacity: level === 4 ? 0.7 : 1 }} viewBox="0 0 140 160">
            <path d="M70 20 C70 20,62 10,50 13 C44 15,44 23,50 25 C58 27,66 22,70 20Z" fill="#FF6B9D"/>
            <path d="M70 20 C70 20,78 10,90 13 C96 15,96 23,90 25 C82 27,74 22,70 20Z" fill="#FF85AC"/>
            <circle cx="70" cy="20" r="4.5" fill="#E8528A"/>
          </svg>
        )}

        {level >= 3 && expression !== '졸림' && (
          <svg className={`${styles.sodaLayer}`} style={{ opacity: level === 4 ? 0.8 : 1 }} viewBox="0 0 140 160">
            <rect x="50" y="68" width="20" height="14" rx="7" fill="#1A1A2E"/>
            <rect x="80" y="68" width="20" height="14" rx="7" fill="#1A1A2E"/>
            <rect x="70" y="72" width="10" height="3" fill="#1A1A2E"/>
            <ellipse cx="56" cy="72" rx="4" ry="3" fill="#fff" opacity="0.4"/>
            <ellipse cx="86" cy="72" rx="4" ry="3" fill="#fff" opacity="0.4"/>
          </svg>
        )}

        {level === 4 && (
          <svg className={`${styles.sodaLayer}`} viewBox="0 0 140 160">
            <path d="M46 22 L56 34 L70 18 L84 34 L94 22 L90 40 L50 40Z" fill="#FFD25E"/>
            <circle cx="70" cy="20" r="3" fill="#FFA500"/>
            <path d="M18 50 L20 56 L26 58 L20 60 L18 66 L16 60 L10 58 L16 56Z" fill="#fff" opacity="0.9"/>
          </svg>
        )}
      </div>
        </div>
      </div>
    </div>
  );
}
