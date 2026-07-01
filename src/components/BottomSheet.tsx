'use client';
import { useState, useRef, useEffect } from 'react';

export interface ChallengeData {
  id: number;
  category: string;
  title: string;
  joinedCount: number;
  targetDays: number;
  joinedDays: number;
  reward: number;
  streak: number;
  history: ('done' | 'today' | 'future')[];
  isDoneToday: boolean;
}

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  challenge: ChallengeData | null;
  onCertify: (id: number) => void;
  onLeave: (id: number) => void;
}

export default function BottomSheet({ isOpen, onClose, challenge, onCertify, onLeave }: BottomSheetProps) {
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sheetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentY(0);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartY(e.touches[0].clientY);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const deltaY = e.touches[0].clientY - startY;
    if (deltaY > 0) {
      setCurrentY(deltaY);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (currentY > 120) {
      onClose(); // Swipe down enough to close
    } else {
      setCurrentY(0); // Snap back
    }
  };

  if (!isOpen && currentY === 0) return null; // Avoid rendering when fully closed

  const getCategoryColor = (cat: string) => {
    if (cat === '커리어') return { bg: '#FFF6DE', text: '#F2A900' };
    if (cat === '운동') return { bg: '#EAF8F1', text: '#219653' };
    return { bg: '#EEF2FE', text: '#4A7BF0' }; // 기본 자기계발 등
  };

  const catStyle = challenge ? getCategoryColor(challenge.category) : getCategoryColor('');
  const progressPct = challenge ? Math.round((challenge.joinedDays / challenge.targetDays) * 100) : 0;

  return (
    <>
      <div 
        style={{
          position: 'fixed', inset: 0, backgroundColor: 'rgba(20,24,40,0.4)',
          opacity: isOpen ? 1 : 0, transition: 'opacity 0.25s', zIndex: 9998, pointerEvents: isOpen ? 'auto' : 'none',
          maxWidth: '480px', margin: '0 auto'
        }}
        onClick={onClose}
      />
      
      <div 
        ref={sheetRef}
        style={{
          position: 'fixed', left: 0, right: 0, bottom: 0, background: '#fff',
          borderRadius: '28px 28px 0 0', padding: '10px 20px 24px',
          transform: `translateY(${isOpen ? currentY : 100}%)`,
          transition: isDragging ? 'none' : 'transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)',
          zIndex: 9999, maxHeight: '88%', overflowY: 'auto',
          maxWidth: '480px', margin: '0 auto'
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div style={{ width: '36px', height: '4px', background: '#E5E5EA', borderRadius: '4px', margin: '6px auto 14px' }} />
        <div 
          onClick={onClose}
          style={{ position: 'absolute', top: '14px', right: '18px', width: '28px', height: '28px', borderRadius: '50%', background: '#F4F4F7', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', fontSize: '12px', color: '#8E8E96' }}
        >✕</div>
        
        {challenge && (
          <>
            <div style={{ fontSize: '10px', fontWeight: 800, color: catStyle.text, background: catStyle.bg, padding: '4px 10px', borderRadius: '9px', display: 'inline-block', marginBottom: '8px' }}>
              {challenge.category}
            </div>
            <div style={{ fontSize: '17px', fontWeight: 800, marginBottom: '4px' }}>{challenge.title}</div>
            <div style={{ fontSize: '11px', color: '#9B9BA3', marginBottom: '16px' }}>
              D-{challenge.targetDays - challenge.joinedDays} 남음 · {challenge.joinedCount.toLocaleString()}명 참여중
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', padding: '6px 0 16px' }}>
              <div style={{ 
                width: '96px', height: '96px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: `conic-gradient(#4A7BF0 ${progressPct}%, #F0F0F4 0)`
              }}>
                <div style={{ width: '78px', height: '78px', borderRadius: '50%', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ fontSize: '18px', fontWeight: 800, color: '#4A7BF0' }}>{progressPct}%</div>
                  <div style={{ fontSize: '9px', color: '#B0B0B8', fontWeight: 700 }}>달성률</div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', background: '#F8F9FC', borderRadius: '16px', padding: '14px', marginBottom: '14px' }}>
              <div style={{ textAlign: 'center', flex: 1 }}>
                <div style={{ fontSize: '13px', fontWeight: 800 }}>{challenge.joinedDays} / {challenge.targetDays}일</div>
                <div style={{ fontSize: '9.5px', color: '#9B9BA3', marginTop: '3px' }}>진행 일수</div>
              </div>
              <div style={{ textAlign: 'center', flex: 1 }}>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#4A7BF0' }}>+{challenge.reward} SP</div>
                <div style={{ fontSize: '9.5px', color: '#9B9BA3', marginTop: '3px' }}>완주 보상</div>
              </div>
              <div style={{ textAlign: 'center', flex: 1 }}>
                <div style={{ fontSize: '13px', fontWeight: 800 }}>🔥 {challenge.streak}일</div>
                <div style={{ fontSize: '9.5px', color: '#9B9BA3', marginTop: '3px' }}>연속 인증</div>
              </div>
            </div>

            <div style={{ fontSize: '12.5px', fontWeight: 800, margin: '14px 0 8px' }}>최근 인증 기록</div>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
              {challenge.history.map((status, idx) => {
                const isDone = status === 'done';
                const isToday = status === 'today';
                const bg = isDone ? '#4A7BF0' : isToday ? '#fff' : '#F4F4F7';
                const color = isDone ? '#fff' : isToday ? '#4A7BF0' : '#C5C5CC';
                const border = isToday ? '2px solid #4A7BF0' : 'none';
                return (
                  <div key={idx} style={{ width: '30px', height: '30px', borderRadius: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 700, background: bg, color, border }}>
                    {isDone ? '✓' : (idx + 1)}
                  </div>
                );
              })}
            </div>

            <button 
              onClick={() => onCertify(challenge.id)}
              disabled={challenge.isDoneToday}
              style={{ 
                width: '100%', padding: '15px', borderRadius: '16px', fontSize: '13px', fontWeight: 800, cursor: challenge.isDoneToday ? 'default' : 'pointer', border: 'none',
                background: challenge.isDoneToday ? '#E5E5EA' : '#4A7BF0', color: challenge.isDoneToday ? '#9B9BA3' : '#fff', transition: 'background 0.2s', marginTop: '8px'
              }}
            >
              {challenge.isDoneToday ? '오늘 인증 완료 ✓' : '오늘 루틴 인증하기'}
            </button>
            <button 
              onClick={() => {
                if (confirm('정말로 이 챌린지를 그만두시겠습니까? 진행 기록이 사라집니다.')) {
                  onLeave(challenge.id);
                  onClose();
                }
              }}
              style={{ width: '100%', padding: '15px', borderRadius: '16px', fontSize: '13px', fontWeight: 800, cursor: 'pointer', border: 'none', background: '#FFF1F1', color: '#E0455A', marginTop: '8px' }}
            >
              챌린지 그만하기
            </button>
          </>
        )}
      </div>
    </>
  );
}
