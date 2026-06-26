'use client';

export default function B2CMyPage() {
  return (
    <main style={{ background: '#F9F9FB', minHeight: '100vh', padding: '20px 24px 100px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '20px', fontWeight: 700, margin: 0, color: '#1C1C1E' }}>마이페이지</h1>
        <span style={{ fontSize: '20px', color: '#8E8E93' }}>⚙️</span>
      </div>

      {/* Profile Card */}
      <div style={{ background: '#fff', borderRadius: '16px', padding: '16px', border: '1px solid #E5E5EA', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#EAF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 600, color: '#0071E3', flexShrink: 0 }}>
            주
          </div>
          <div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#1C1C1E', marginBottom: '2px' }}>주리님</div>
            <div style={{ fontSize: '12px', color: '#8E8E93', marginBottom: '6px' }}>방전형 · 브랜드 마케터 지망</div>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '10px', background: '#EAF2FF', color: '#0071E3', borderRadius: '6px', padding: '3px 8px', fontWeight: 600 }}>💎 크래프트장인형</span>
              <span style={{ fontSize: '10px', background: '#E8F7EE', color: '#28A745', borderRadius: '6px', padding: '3px 8px', fontWeight: 600 }}>구직중</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div style={{ background: '#fff', borderRadius: '14px', padding: '14px', border: '1px solid #E5E5EA', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
          <div style={{ fontSize: '22px', fontWeight: 700, color: '#1C1C1E' }}>23일</div>
          <div style={{ fontSize: '11px', color: '#8E8E93', marginTop: '2px', fontWeight: 500 }}>총 루틴 달성</div>
        </div>
        <div style={{ background: '#fff', borderRadius: '14px', padding: '14px', border: '1px solid #E5E5EA', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
          <div style={{ fontSize: '22px', fontWeight: 700, color: '#1C1C1E' }}>7일 🔥</div>
          <div style={{ fontSize: '11px', color: '#8E8E93', marginTop: '2px', fontWeight: 500 }}>연속 달성</div>
        </div>
      </div>

      {/* Career DNA */}
      <div style={{ background: '#fff', borderRadius: '16px', padding: '16px', border: '1px solid #E5E5EA', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 600, color: '#1C1C1E', margin: 0 }}>커리어 DNA</h2>
          <span style={{ fontSize: '11px', color: '#8E8E93' }}>3일 전 업데이트</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ fontSize: '11px', color: '#8E8E93', width: '76px', flexShrink: 0, fontWeight: 500 }}>크래프트 장인형</div>
            <div style={{ flex: 1, height: '4px', background: '#E5E5EA', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ width: '82%', height: '100%', background: '#34C759', borderRadius: '2px' }}></div>
            </div>
            <div style={{ fontSize: '11px', color: '#8E8E93', width: '32px', textAlign: 'right', fontWeight: 500 }}>82%</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ fontSize: '11px', color: '#8E8E93', width: '76px', flexShrink: 0, fontWeight: 500 }}>프로젝트 주도형</div>
            <div style={{ flex: 1, height: '4px', background: '#E5E5EA', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ width: '65%', height: '100%', background: '#8E8E93', borderRadius: '2px' }}></div>
            </div>
            <div style={{ fontSize: '11px', color: '#8E8E93', width: '32px', textAlign: 'right', fontWeight: 500 }}>65%</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ fontSize: '11px', color: '#8E8E93', width: '76px', flexShrink: 0, fontWeight: 500 }}>하모니 상생형</div>
            <div style={{ flex: 1, height: '4px', background: '#E5E5EA', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ width: '48%', height: '100%', background: '#8E8E93', borderRadius: '2px' }}></div>
            </div>
            <div style={{ fontSize: '11px', color: '#8E8E93', width: '32px', textAlign: 'right', fontWeight: 500 }}>48%</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ fontSize: '11px', color: '#8E8E93', width: '76px', flexShrink: 0, fontWeight: 500 }}>시장 개척형</div>
            <div style={{ flex: 1, height: '4px', background: '#E5E5EA', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ width: '35%', height: '100%', background: '#C7C7CC', borderRadius: '2px' }}></div>
            </div>
            <div style={{ fontSize: '11px', color: '#8E8E93', width: '32px', textAlign: 'right', fontWeight: 500 }}>35%</div>
          </div>
          {/* 시스템 (Dimmed) */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.3 }}>
            <div style={{ fontSize: '11px', color: '#8E8E93', width: '76px', flexShrink: 0, fontWeight: 500 }}>시스템 안착형</div>
            <div style={{ flex: 1, height: '4px', background: '#E5E5EA', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ width: '10%', height: '100%', background: '#E5E5EA', borderRadius: '2px' }}></div>
            </div>
            <div style={{ fontSize: '11px', color: '#C7C7CC', width: '40px', textAlign: 'right', fontWeight: 600 }}>분석중</div>
          </div>
        </div>
      </div>

      {/* Routine History */}
      <div style={{ background: '#fff', borderRadius: '16px', padding: '16px', border: '1px solid #E5E5EA', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 600, color: '#1C1C1E', margin: 0 }}>루틴 히스토리</h2>
          <span style={{ fontSize: '11px', color: '#8E8E93' }}>전체보기 →</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#1C1C1E' }}>오전 30분 독서</div>
            <div style={{ fontSize: '11px', color: '#8E8E93' }}>4/7일 · 57%</div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#1C1C1E' }}>포트폴리오 작업</div>
            <div style={{ fontSize: '11px', color: '#8E8E93' }}>6/30일 · 20%</div>
          </div>
        </div>
      </div>

      {/* Saved Insights */}
      <div style={{ background: '#fff', borderRadius: '16px', padding: '16px', border: '1px solid #E5E5EA', boxShadow: '0 4px 12px rgba(0,0,0,0.02)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontSize: '13px', fontWeight: 600, color: '#1C1C1E', margin: 0 }}>저장한 인사이트</h2>
        <span style={{ fontSize: '11px', color: '#8E8E93' }}>3개 →</span>
      </div>

    </main>
  );
}
