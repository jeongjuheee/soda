'use client';
import { useState } from 'react';

export default function B2BInsight() {
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
          <h2 style={{ fontSize: '13px', fontWeight: 600, color: '#1C1C1E', margin: 0 }}>✨ 이번 주 추천</h2>
          <span style={{ fontSize: '11px', color: '#8E8E93' }}>전체보기 →</span>
        </div>
        
        <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '12px', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
          {/* Card 1 */}
          <div style={{ minWidth: '150px', background: '#fff', borderRadius: '16px', padding: '14px', border: '1.5px solid #0071E3', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
            <div style={{ display: 'inline-block', fontSize: '9px', background: '#EAF2FF', color: '#0071E3', borderRadius: '4px', padding: '3px 6px', fontWeight: 600, marginBottom: '8px' }}>맞춤 추천</div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#1C1C1E', lineHeight: 1.4, marginBottom: '8px' }}>요즘 주니어들이<br/>원하는 진짜 복지</div>
            <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '9px', background: '#F2F2F7', color: '#636366', borderRadius: '4px', padding: '2px 6px' }}>#조직문화</span>
              <span style={{ fontSize: '9px', background: '#F2F2F7', color: '#636366', borderRadius: '4px', padding: '2px 6px' }}>#리텐션</span>
            </div>
          </div>
          {/* Card 2 */}
          <div style={{ minWidth: '150px', background: '#fff', borderRadius: '16px', padding: '14px', border: '1px solid #E5E5EA', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
            <div style={{ display: 'inline-block', fontSize: '9px', background: '#F2F2F7', color: '#8E8E93', borderRadius: '4px', padding: '3px 6px', fontWeight: 600, marginBottom: '8px' }}>인기</div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#1C1C1E', lineHeight: 1.4, marginBottom: '8px' }}>컬쳐핏 면접에서<br/>반드시 물어볼 3가지</div>
            <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '9px', background: '#F2F2F7', color: '#636366', borderRadius: '4px', padding: '2px 6px' }}>#채용전략</span>
              <span style={{ fontSize: '9px', background: '#F2F2F7', color: '#636366', borderRadius: '4px', padding: '2px 6px' }}>#컬쳐핏</span>
            </div>
          </div>
          {/* Card 3 */}
          <div style={{ minWidth: '150px', background: '#fff', borderRadius: '16px', padding: '14px', border: '1px solid #E5E5EA', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
            <div style={{ display: 'inline-block', fontSize: '9px', background: '#F2F2F7', color: '#8E8E93', borderRadius: '4px', padding: '3px 6px', fontWeight: 600, marginBottom: '8px' }}>최신</div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#1C1C1E', lineHeight: 1.4, marginBottom: '8px' }}>2026 하반기<br/>HR 트렌드 리포트</div>
            <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '9px', background: '#F2F2F7', color: '#636366', borderRadius: '4px', padding: '2px 6px' }}>#HR트렌드</span>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: '1px', background: '#E5E5EA', margin: '8px 0' }}></div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
        {['전체', 'HR트렌드', '채용전략', '조직문화'].map(t => (
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
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#1C1C1E', marginBottom: '8px', lineHeight: 1.4 }}>온보딩 성공률을 200% 높이는 마이크로 매니지먼트의 비밀</div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '3px 8px' }}>#조직문화</span>
                <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '3px 8px' }}>#온보딩</span>
              </div>
            </div>
            <span style={{ fontSize: '18px', color: '#8E8E93', cursor: 'pointer' }}>🔖</span>
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: '16px', padding: '16px', border: '1px solid #E5E5EA', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ flex: 1, minWidth: 0, paddingRight: '12px' }}>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#1C1C1E', marginBottom: '8px', lineHeight: 1.4 }}>채용 브랜딩, 어디서부터 시작해야 할까? (스타트업 편)</div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '3px 8px' }}>#채용전략</span>
                <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '3px 8px' }}>#브랜딩</span>
              </div>
            </div>
            <span style={{ fontSize: '18px', color: '#0071E3', cursor: 'pointer' }}>🔖</span>
          </div>
        </div>
      </div>

    </main>
  );
}
