'use client';
import { useState } from 'react';

export default function B2CJobs() {
  const [isLookingForJob, setIsLookingForJob] = useState(true);

  return (
    <main style={{ background: '#F9F9FB', minHeight: '100vh', padding: '20px 24px 100px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '20px', fontWeight: 700, margin: 0, color: '#1C1C1E' }}>채용</h1>
        <button 
          onClick={() => setIsLookingForJob(!isLookingForJob)}
          style={{ background: isLookingForJob ? '#F2F2F7' : '#FFF', color: '#636366', border: '1px solid #E5E5EA', borderRadius: '20px', padding: '6px 12px', fontSize: '11px', fontWeight: 600, transition: 'all 0.2s' }}
        >
          구직중 {isLookingForJob ? 'ON' : 'OFF'}
        </button>
      </div>

      {/* Scout Section */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 600, color: '#1C1C1E', margin: 0 }}>📬 스카웃 제안</h2>
          <span style={{ fontSize: '10px', background: '#FFECEC', color: '#FF3B30', borderRadius: '6px', padding: '3px 8px', fontWeight: 600 }}>새 제안 1</span>
        </div>
        
        <div style={{ background: '#fff', borderRadius: '16px', padding: '16px', border: '1.5px solid #0071E3', boxShadow: '0 4px 12px rgba(0, 113, 227, 0.04)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
            <div>
              <div style={{ fontSize: '15px', fontWeight: 700, color: '#1C1C1E', marginBottom: '4px' }}>에이전시 스튜디오</div>
              <div style={{ fontSize: '12px', color: '#8E8E93' }}>브랜드 디자이너 포지션 제안</div>
            </div>
            <span style={{ fontSize: '10px', background: '#EAF2FF', color: '#0071E3', borderRadius: '6px', padding: '4px 8px', fontWeight: 600 }}>92% 매칭</span>
          </div>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
            <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '3px 8px' }}>💎 크래프트장인형</span>
            <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '3px 8px' }}>서울</span>
            <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '3px 8px' }}>10~15인</span>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={{ flex: 1, background: '#F2F2F7', color: '#636366', border: 'none', borderRadius: '10px', padding: '10px', fontSize: '12px', fontWeight: 600 }}>
              나중에
            </button>
            <button style={{ flex: 1, background: '#1C1C1E', color: '#FFF', border: 'none', borderRadius: '10px', padding: '10px', fontSize: '12px', fontWeight: 600 }}>
              수락하기
            </button>
          </div>
        </div>
      </div>

      <div style={{ height: '1px', background: '#E5E5EA', margin: '8px 0' }}></div>

      {/* Matching Companies Section */}
      <h2 style={{ fontSize: '13px', fontWeight: 600, color: '#1C1C1E', margin: 0, marginBottom: '4px' }}>매칭 기업 · 3곳</h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ background: '#fff', borderRadius: '16px', padding: '14px', border: '1px solid #E5E5EA', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#1C1C1E' }}>커머스 스타트업</div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#1C1C1E' }}>78%</div>
          </div>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '3px 8px' }}>🚀 시장개척</span>
            <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '3px 8px' }}>브랜드 마케터</span>
            <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '3px 8px' }}>서울</span>
          </div>
        </div>

        <div style={{ background: '#fff', borderRadius: '16px', padding: '14px', border: '1px solid #E5E5EA', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#1C1C1E' }}>패션 플랫폼</div>
            <div style={{ fontSize: '14px', fontWeight: 700, color: '#1C1C1E' }}>71%</div>
          </div>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '3px 8px' }}>🎯 프로젝트</span>
            <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '3px 8px' }}>콘텐츠 디자이너</span>
            <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '3px 8px' }}>성수</span>
          </div>
        </div>
      </div>

      <div style={{ border: '1.5px dashed #E5E5EA', borderRadius: '16px', padding: '20px 16px', textAlign: 'center', marginTop: '8px' }}>
        <div style={{ fontSize: '12px', color: '#8E8E93', fontWeight: 500 }}>매칭률을 높이려면 루틴을 꾸준히 인증해보세요 →</div>
      </div>

    </main>
  );
}
