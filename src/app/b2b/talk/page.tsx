'use client';
import { useState } from 'react';

export default function B2BTalk() {
  const [tab, setTab] = useState<'진행중' | '수락' | '거절'>('수락');

  return (
    <main style={{ background: '#F9F9FB', minHeight: '100vh', padding: '20px 24px 100px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '20px', fontWeight: 700, margin: 0, color: '#1C1C1E' }}>스카웃 제안함</h1>
        <span style={{ fontSize: '20px', color: '#8E8E93' }}>📬</span>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '8px' }}>
        {['진행중', '수락', '거절'].map(t => (
          <button 
            key={t}
            onClick={() => setTab(t as any)}
            style={{ flex: 1, background: tab === t ? '#1C1C1E' : '#FFF', color: tab === t ? '#FFF' : '#8E8E93', border: `1px solid ${tab === t ? '#1C1C1E' : '#E5E5EA'}`, borderRadius: '24px', padding: '8px 0', fontSize: '13px', fontWeight: 600, transition: 'all 0.2s' }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Talent Card List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        
        {/* Accepted Card */}
        {tab === '수락' && (
          <div style={{ background: '#fff', borderRadius: '16px', padding: '16px', border: '1.5px solid #34C759', boxShadow: '0 4px 16px rgba(52, 199, 89, 0.08)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#F2F2F7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>👤</div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: '#1C1C1E' }}>익명 인재 (도약형)</div>
                    <span style={{ fontSize: '9px', background: '#E8F7EE', color: '#28A745', borderRadius: '4px', padding: '2px 6px', fontWeight: 700 }}>수락</span>
                  </div>
                  <div style={{ fontSize: '12px', color: '#8E8E93' }}>제안일: 2026.06.25</div>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '15px', fontWeight: 800, color: '#0071E3' }}>92%</div>
                <div style={{ fontSize: '10px', color: '#8E8E93' }}>매칭률</div>
              </div>
            </div>

            <div style={{ fontSize: '13px', color: '#1C1C1E', marginBottom: '16px', lineHeight: 1.4, padding: '12px', background: '#F9F9FB', borderRadius: '8px' }}>
              "제안해주신 브랜드 디자이너 포지션에 관심이 있습니다. 커피챗을 통해 더 자세한 이야기를 나누고 싶습니다!"
            </div>

            {/* Contact Info (Emphasized) */}
            <div style={{ background: '#EAF2FF', borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ fontSize: '12px', color: '#0071E3', fontWeight: 700, marginBottom: '4px' }}>연락처가 공개되었습니다</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', color: '#636366', fontWeight: 500 }}>이름</span>
                <span style={{ fontSize: '14px', color: '#1C1C1E', fontWeight: 700 }}>김주리</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', color: '#636366', fontWeight: 500 }}>이메일</span>
                <span style={{ fontSize: '14px', color: '#1C1C1E', fontWeight: 700 }}>juri.kim@example.com</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '13px', color: '#636366', fontWeight: 500 }}>전화번호</span>
                <span style={{ fontSize: '14px', color: '#1C1C1E', fontWeight: 700 }}>010-1234-5678</span>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
              <button style={{ flex: 1, padding: '12px', background: '#F2F2F7', color: '#1C1C1E', borderRadius: '10px', fontSize: '13px', fontWeight: 700, border: 'none' }}>
                이력서 열람
              </button>
              <button style={{ flex: 1, padding: '12px', background: '#0071E3', color: '#FFF', borderRadius: '10px', fontSize: '13px', fontWeight: 700, border: 'none' }}>
                이메일 보내기
              </button>
            </div>
          </div>
        )}

        {/* Not Accepted Card (Placeholder for visual) */}
        {tab === '진행중' && (
          <div style={{ textAlign: 'center', padding: '40px 0', color: '#8E8E93', fontSize: '13px' }}>
            진행중인 제안이 없습니다.
          </div>
        )}
        {tab === '거절' && (
          <div style={{ textAlign: 'center', padding: '40px 0', color: '#8E8E93', fontSize: '13px' }}>
            거절된 제안이 없습니다.
          </div>
        )}

      </div>

    </main>
  );
}
