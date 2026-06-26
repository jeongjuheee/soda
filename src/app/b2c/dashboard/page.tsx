'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function B2CHome() {
  const [showPopup, setShowPopup] = useState(true);
  const [routines, setRoutines] = useState([
    { id: 1, time: '08:00', title: '오전 30분 독서', completed: true },
    { id: 2, time: '10:00', title: '포트폴리오 작업', completed: false },
    { id: 3, time: '14:00', title: '영어 섀도잉', completed: false }
  ]);

  const completedCount = routines.filter(r => r.completed).length + 1; // +1 to match wireframe 2/5 initially if we only show 3

  const handleToggle = (id: number) => {
    setRoutines(routines.map(r => r.id === id ? { ...r, completed: !r.completed } : r));
  };

  return (
    <main style={{ background: '#F9F9FB', minHeight: '100vh', padding: '20px 24px 100px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '20px', fontWeight: 700, margin: 0, color: '#1C1C1E' }}>6월 25일 수요일</h1>
          <div style={{ fontSize: '12px', color: '#8E8E93', marginTop: '2px' }}>달성 {completedCount}/5</div>
        </div>
        <Link href="/b2c/mypage" style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#EAF2FF', color: '#0071E3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
          주
        </Link>
      </div>

      {/* Main Progress Bar */}
      <div style={{ height: '4px', background: '#E5E5EA', borderRadius: '2px', overflow: 'hidden' }}>
        <div style={{ width: `${(completedCount/5)*100}%`, height: '100%', background: '#34C759', borderRadius: '2px', transition: 'width 0.3s ease' }}></div>
      </div>

      {/* Routine Card */}
      <div style={{ background: '#fff', borderRadius: '16px', padding: '16px', border: '1px solid #E5E5EA', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
        <div style={{ fontSize: '12px', color: '#8E8E93', marginBottom: '12px', fontWeight: 600 }}>오늘의 루틴</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {routines.map(r => (
            <div key={r.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <div style={{ width: '4px', height: '36px', background: r.completed ? '#34C759' : '#E5E5EA', borderRadius: '2px', transition: 'background 0.3s' }}></div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#1C1C1E', marginBottom: '2px', textDecoration: r.completed ? 'line-through' : 'none' }}>
                    {r.time} {r.title}
                  </div>
                  <div style={{ fontSize: '11px', color: '#8E8E93' }}>
                    {r.completed ? '완료 ✓' : '미완료'}
                  </div>
                </div>
              </div>
              {!r.completed && (
                <button 
                  onClick={() => handleToggle(r.id)}
                  style={{ background: '#EAF2FF', color: '#0071E3', border: 'none', borderRadius: '8px', padding: '4px 10px', fontSize: '11px', fontWeight: 600 }}
                >
                  인증
                </button>
              )}
            </div>
          ))}
          <div style={{ textAlign: 'center', fontSize: '11px', color: '#8E8E93', marginTop: '4px', fontWeight: 500 }}>+ 2개 더 ↓</div>
        </div>
      </div>

      {/* Insight Card */}
      <div style={{ background: '#fff', borderRadius: '16px', padding: '16px', border: '1.5px solid #0071E3', boxShadow: '0 8px 16px rgba(0, 113, 227, 0.08)' }}>
        <div style={{ fontSize: '12px', color: '#8E8E93', marginBottom: '6px', fontWeight: 600 }}>✨ 오늘의 인사이트</div>
        <div style={{ fontSize: '15px', fontWeight: 700, color: '#1C1C1E', marginBottom: '10px' }}>공백기를 포트폴리오로 만드는 3가지 방법</div>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '10px', background: '#EAF2FF', color: '#0071E3', borderRadius: '6px', padding: '3px 8px', fontWeight: 600 }}>💎 크래프트</span>
          <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '3px 8px', fontWeight: 500 }}>포트폴리오</span>
          <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '3px 8px', fontWeight: 500 }}>커리어</span>
        </div>
      </div>

      {/* Interrupt Modal (기습 팝업) */}
      {showPopup && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
          <div style={{ background: '#fff', borderRadius: '24px', padding: '32px 24px', width: '100%', maxWidth: '360px', textAlign: 'center', boxShadow: '0 24px 48px rgba(0,0,0,0.2)' }}>
            <div style={{ fontSize: '40px', marginBottom: '16px' }}>🤔</div>
            <h2 style={{ fontSize: '18px', fontWeight: 800, color: '#1C1C1E', marginBottom: '8px' }}>나의 진짜 성향 찾기</h2>
            <p style={{ fontSize: '14px', color: '#8E8E93', marginBottom: '32px', lineHeight: 1.5 }}>데이터 정교화를 위해 딱 하나만 여쭤볼게요.<br/>이번 주말, 당신의 선택은?</p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button onClick={() => setShowPopup(false)} style={{ width: '100%', padding: '16px', background: '#F2F2F7', color: '#1C1C1E', borderRadius: '16px', fontSize: '15px', fontWeight: 600, border: '1px solid #E5E5EA' }}>
                무조건 밖으로! 약속을 잡는다
              </button>
              <button onClick={() => setShowPopup(false)} style={{ width: '100%', padding: '16px', background: '#F2F2F7', color: '#1C1C1E', borderRadius: '16px', fontSize: '15px', fontWeight: 600, border: '1px solid #E5E5EA' }}>
                이불 밖은 위험해. 집에서 쉰다
              </button>
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
