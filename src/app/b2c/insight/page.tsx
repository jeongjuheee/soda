'use client';
import { useState } from 'react';

export default function B2CInsight() {
  const [activeTab, setActiveTab] = useState('전체');

  return (
    <main style={{ background: '#F9F9FB', minHeight: '100vh', padding: '20px 24px 100px 24px', display: 'flex', flexDirection: 'column', gap: '16px', overflowX: 'hidden' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '20px', fontWeight: 700, margin: 0, color: '#1C1C1E' }}>인사이트</h1>
        <span style={{ fontSize: '20px', color: '#8E8E93' }}>🔍</span>
      </div>

      {/* Recommended (Horizontal Scroll) */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 600, color: '#1C1C1E', margin: 0 }}>✨ 오늘의 추천</h2>
          <span style={{ fontSize: '11px', color: '#8E8E93' }}>전체보기 →</span>
        </div>
        
        <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '12px', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
          <div style={{ minWidth: '140px', background: '#fff', borderRadius: '16px', padding: '14px', border: '1.5px solid #0071E3', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
            <div style={{ display: 'inline-block', fontSize: '9px', background: '#EAF2FF', color: '#0071E3', borderRadius: '4px', padding: '3px 6px', fontWeight: 600, marginBottom: '8px' }}>맞춤 추천</div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#1C1C1E', lineHeight: 1.4, marginBottom: '8px' }}>공백기를 포트폴리오로 만드는 법</div>
            <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '9px', background: '#F2F2F7', color: '#636366', borderRadius: '4px', padding: '2px 6px' }}>💎 크래프트</span>
              <span style={{ fontSize: '9px', background: '#F2F2F7', color: '#636366', borderRadius: '4px', padding: '2px 6px' }}>포트폴리오</span>
            </div>
          </div>
          <div style={{ minWidth: '140px', background: '#fff', borderRadius: '16px', padding: '14px', border: '1px solid #E5E5EA', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#1C1C1E', lineHeight: 1.4, marginBottom: '8px', marginTop: '4px' }}>스타트업 조직문화 핏 찾기</div>
            <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '9px', background: '#F2F2F7', color: '#636366', borderRadius: '4px', padding: '2px 6px' }}>🚀 시장개척</span>
              <span style={{ fontSize: '9px', background: '#F2F2F7', color: '#636366', borderRadius: '4px', padding: '2px 6px' }}>조직문화</span>
            </div>
          </div>
          <div style={{ minWidth: '140px', background: '#fff', borderRadius: '16px', padding: '14px', border: '1px solid #E5E5EA', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#1C1C1E', lineHeight: 1.4, marginBottom: '8px', marginTop: '4px' }}>루틴이 무너졌을 때 다시 시작하는 법</div>
            <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '9px', background: '#F2F2F7', color: '#636366', borderRadius: '4px', padding: '2px 6px' }}>🧱 시스템</span>
              <span style={{ fontSize: '9px', background: '#F2F2F7', color: '#636366', borderRadius: '4px', padding: '2px 6px' }}>루틴회복</span>
            </div>
          </div>
        </div>
        
        {/* Dot Indicators */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '4px' }}>
          <div style={{ width: '16px', height: '4px', borderRadius: '2px', background: '#1C1C1E' }}></div>
          <div style={{ width: '6px', height: '4px', borderRadius: '2px', background: '#E5E5EA' }}></div>
          <div style={{ width: '6px', height: '4px', borderRadius: '2px', background: '#E5E5EA' }}></div>
          <div style={{ width: '6px', height: '4px', borderRadius: '2px', background: '#E5E5EA' }}></div>
        </div>
      </div>

      <div style={{ height: '1px', background: '#E5E5EA', margin: '8px 0' }}></div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        {['전체', '커리어', '루틴', '직무탐색'].map(t => (
          <button 
            key={t}
            onClick={() => setActiveTab(t)}
            style={{ whiteSpace: 'nowrap', padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, transition: 'all 0.2s',
              background: activeTab === t ? '#1C1C1E' : '#FFF', 
              color: activeTab === t ? '#FFF' : '#8E8E93', 
              border: `1px solid ${activeTab === t ? '#1C1C1E' : '#E5E5EA'}` 
            }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Feed List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ background: '#fff', borderRadius: '16px', padding: '16px', border: '1px solid #E5E5EA', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ flex: 1, minWidth: 0, paddingRight: '12px' }}>
              <div style={{ fontSize: '15px', fontWeight: 600, color: '#1C1C1E', marginBottom: '8px', lineHeight: 1.4 }}>스페셜리스트로 성장하는 커리어 전략</div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '3px 8px' }}>💎 크래프트</span>
                <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '3px 8px' }}>커리어</span>
                <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '3px 8px' }}>성장전략</span>
              </div>
            </div>
            <span style={{ fontSize: '18px', color: '#8E8E93', cursor: 'pointer' }}>🔖</span>
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: '16px', padding: '16px', border: '1px solid #E5E5EA', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ flex: 1, minWidth: 0, paddingRight: '12px' }}>
              <div style={{ fontSize: '15px', fontWeight: 600, color: '#1C1C1E', marginBottom: '8px', lineHeight: 1.4 }}>주니어 디자이너 연봉 협상 가이드</div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '3px 8px' }}>커리어</span>
                <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '3px 8px' }}>연봉협상</span>
                <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '3px 8px' }}>디자인</span>
              </div>
            </div>
            <span style={{ fontSize: '18px', color: '#8E8E93', cursor: 'pointer' }}>🔖</span>
          </div>
        </div>
      </div>

    </main>
  );
}
