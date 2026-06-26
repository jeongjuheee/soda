'use client';

export default function B2BMyPage() {
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
          <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#EAF2FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 700, color: '#0071E3', flexShrink: 0 }}>
            AS
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#1C1C1E' }}>에이전시 스튜디오</div>
              <span style={{ fontSize: '9px', background: '#1C1C1E', color: '#FFF', borderRadius: '4px', padding: '2px 6px', fontWeight: 700 }}>스탠다드</span>
            </div>
            <div style={{ fontSize: '12px', color: '#8E8E93', marginBottom: '2px' }}>사업자번호: 123-45-67890</div>
            <div style={{ fontSize: '12px', color: '#8E8E93' }}>담당자: 김소다 매니저</div>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
        <div style={{ background: '#fff', borderRadius: '14px', padding: '14px 8px', border: '1px solid #E5E5EA', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
          <div style={{ fontSize: '20px', fontWeight: 700, color: '#1C1C1E' }}>12</div>
          <div style={{ fontSize: '11px', color: '#8E8E93', marginTop: '2px', fontWeight: 500 }}>매칭 대기</div>
        </div>
        <div style={{ background: '#fff', borderRadius: '14px', padding: '14px 8px', border: '1px solid #E5E5EA', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
          <div style={{ fontSize: '20px', fontWeight: 700, color: '#0071E3' }}>5</div>
          <div style={{ fontSize: '11px', color: '#8E8E93', marginTop: '2px', fontWeight: 500 }}>스카웃 진행</div>
        </div>
        <div style={{ background: '#fff', borderRadius: '14px', padding: '14px 8px', border: '1px solid #E5E5EA', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
          <div style={{ fontSize: '20px', fontWeight: 700, color: '#28A745' }}>2</div>
          <div style={{ fontSize: '11px', color: '#8E8E93', marginTop: '2px', fontWeight: 500 }}>채용 완료</div>
        </div>
      </div>

      {/* Corporate DNA Chart */}
      <div style={{ background: '#fff', borderRadius: '16px', padding: '16px', border: '1px solid #E5E5EA', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '13px', fontWeight: 600, color: '#1C1C1E', margin: 0 }}>우리 기업 DNA</h2>
          <span style={{ fontSize: '11px', color: '#8E8E93', textDecoration: 'underline' }}>다시 진단하기</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ fontSize: '11px', color: '#8E8E93', width: '76px', flexShrink: 0, fontWeight: 500 }}>시장 개척형</div>
            <div style={{ flex: 1, height: '4px', background: '#E5E5EA', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ width: '95%', height: '100%', background: '#34C759', borderRadius: '2px' }}></div>
            </div>
            <div style={{ fontSize: '11px', color: '#8E8E93', width: '32px', textAlign: 'right', fontWeight: 500 }}>95%</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ fontSize: '11px', color: '#8E8E93', width: '76px', flexShrink: 0, fontWeight: 500 }}>크래프트 장인형</div>
            <div style={{ flex: 1, height: '4px', background: '#E5E5EA', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ width: '70%', height: '100%', background: '#8E8E93', borderRadius: '2px' }}></div>
            </div>
            <div style={{ fontSize: '11px', color: '#8E8E93', width: '32px', textAlign: 'right', fontWeight: 500 }}>70%</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ fontSize: '11px', color: '#8E8E93', width: '76px', flexShrink: 0, fontWeight: 500 }}>프로젝트 주도형</div>
            <div style={{ flex: 1, height: '4px', background: '#E5E5EA', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ width: '55%', height: '100%', background: '#8E8E93', borderRadius: '2px' }}></div>
            </div>
            <div style={{ fontSize: '11px', color: '#8E8E93', width: '32px', textAlign: 'right', fontWeight: 500 }}>55%</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ fontSize: '11px', color: '#8E8E93', width: '76px', flexShrink: 0, fontWeight: 500 }}>하모니 상생형</div>
            <div style={{ flex: 1, height: '4px', background: '#E5E5EA', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ width: '40%', height: '100%', background: '#C7C7CC', borderRadius: '2px' }}></div>
            </div>
            <div style={{ fontSize: '11px', color: '#8E8E93', width: '32px', textAlign: 'right', fontWeight: 500 }}>40%</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ fontSize: '11px', color: '#8E8E93', width: '76px', flexShrink: 0, fontWeight: 500 }}>시스템 안착형</div>
            <div style={{ flex: 1, height: '4px', background: '#E5E5EA', borderRadius: '2px', overflow: 'hidden' }}>
              <div style={{ width: '20%', height: '100%', background: '#C7C7CC', borderRadius: '2px' }}></div>
            </div>
            <div style={{ fontSize: '11px', color: '#8E8E93', width: '32px', textAlign: 'right', fontWeight: 500 }}>20%</div>
          </div>
        </div>
      </div>

      {/* Matching Data Report */}
      <div style={{ background: '#fff', borderRadius: '16px', padding: '20px', border: '1.5px solid #0071E3', boxShadow: '0 8px 24px rgba(0, 113, 227, 0.08)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '14px', fontWeight: 700, color: '#1C1C1E', margin: 0 }}>📊 매칭 데이터 리포트</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr', gap: '16px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '12px', color: '#8E8E93', marginBottom: '4px' }}>우리 기업 매칭률</div>
            <div style={{ fontSize: '28px', fontWeight: 800, color: '#0071E3' }}>89%</div>
          </div>
          <div style={{ width: '1px', height: '40px', background: '#E5E5EA' }}></div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '12px', color: '#8E8E93', marginBottom: '4px' }}>IT 업계 평균</div>
            <div style={{ fontSize: '24px', fontWeight: 700, color: '#1C1C1E' }}>74%</div>
          </div>
        </div>
        <div style={{ fontSize: '12px', color: '#636366', textAlign: 'center', marginTop: '16px', background: '#F2F2F7', padding: '10px', borderRadius: '8px' }}>
          업계 평균 대비 <span style={{ fontWeight: 700, color: '#0071E3' }}>15%p</span> 높습니다.
        </div>
      </div>

    </main>
  );
}
