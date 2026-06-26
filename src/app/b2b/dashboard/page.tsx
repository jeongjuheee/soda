'use client';

export default function B2BDashboard() {
  return (
    <main style={{ background: '#F9F9FB', minHeight: '100vh', padding: '20px 24px 100px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '20px', fontWeight: 700, margin: 0, color: '#1C1C1E', marginBottom: '4px' }}>에이전시 스튜디오님</h1>
          <div style={{ fontSize: '13px', color: '#8E8E93' }}>오늘 <span style={{ color: '#0071E3', fontWeight: 700 }}>3명</span>의 새로운 인재가 매칭되었어요.</div>
        </div>
        <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#EAF2FF', color: '#0071E3', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 700 }}>
          AS
        </div>
      </div>

      {/* Metrics Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
        <div style={{ background: '#fff', borderRadius: '14px', padding: '16px', border: '1px solid #E5E5EA', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
          <div style={{ fontSize: '22px', fontWeight: 700, color: '#1C1C1E' }}>12</div>
          <div style={{ fontSize: '11px', color: '#8E8E93', marginTop: '4px', fontWeight: 500 }}>매칭</div>
        </div>
        <div style={{ background: '#fff', borderRadius: '14px', padding: '16px', border: '1px solid #E5E5EA', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
          <div style={{ fontSize: '22px', fontWeight: 700, color: '#1C1C1E' }}>5</div>
          <div style={{ fontSize: '11px', color: '#8E8E93', marginTop: '4px', fontWeight: 500 }}>제안</div>
        </div>
        <div style={{ background: '#fff', borderRadius: '14px', padding: '16px', border: '1px solid #E5E5EA', textAlign: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
          <div style={{ fontSize: '22px', fontWeight: 700, color: '#1C1C1E' }}>1</div>
          <div style={{ fontSize: '11px', color: '#8E8E93', marginTop: '4px', fontWeight: 500 }}>수락</div>
        </div>
      </div>

      <div style={{ height: '1px', background: '#E5E5EA', margin: '8px 0' }}></div>

      {/* New Matched Talent List */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
        <h2 style={{ fontSize: '14px', fontWeight: 700, color: '#1C1C1E', margin: 0 }}>신규 매칭 인재</h2>
        <span style={{ fontSize: '12px', color: '#8E8E93' }}>전체보기 →</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {/* Talent Card 1 */}
        <div style={{ background: '#fff', borderRadius: '16px', padding: '16px', border: '1px solid #E5E5EA', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#F2F2F7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>👤</div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#1C1C1E', marginBottom: '2px' }}>익명 인재 (도약형)</div>
                <div style={{ fontSize: '11px', color: '#8E8E93' }}>브랜드 디자이너 지망</div>
              </div>
            </div>
            <span style={{ fontSize: '11px', background: '#EAF2FF', color: '#0071E3', borderRadius: '6px', padding: '4px 8px', fontWeight: 700 }}>92% 매칭</span>
          </div>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '3px 8px', fontWeight: 500 }}>💎 크래프트 장인형</span>
            <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '3px 8px', fontWeight: 500 }}>루틴 달성률 85%</span>
          </div>
        </div>

        {/* Talent Card 2 */}
        <div style={{ background: '#fff', borderRadius: '16px', padding: '16px', border: '1px solid #E5E5EA', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#F2F2F7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>👤</div>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#1C1C1E', marginBottom: '2px' }}>익명 인재 (탐색형)</div>
                <div style={{ fontSize: '11px', color: '#8E8E93' }}>콘텐츠 마케터 지망</div>
              </div>
            </div>
            <span style={{ fontSize: '11px', background: '#EAF2FF', color: '#0071E3', borderRadius: '6px', padding: '4px 8px', fontWeight: 700 }}>88% 매칭</span>
          </div>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '3px 8px', fontWeight: 500 }}>🎯 프로젝트 주도형</span>
            <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '3px 8px', fontWeight: 500 }}>루틴 달성률 72%</span>
          </div>
        </div>
      </div>

      {/* Scout Response Alert Card */}
      <div style={{ background: '#fff', borderRadius: '16px', padding: '20px', border: '1.5px solid #0071E3', boxShadow: '0 8px 24px rgba(0, 113, 227, 0.08)', marginTop: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '16px' }}>📬</span>
            <span style={{ fontSize: '14px', fontWeight: 700, color: '#0071E3' }}>새 스카웃 응답</span>
          </div>
          <span style={{ fontSize: '11px', background: '#E8F7EE', color: '#28A745', borderRadius: '6px', padding: '4px 8px', fontWeight: 700 }}>수락 1건</span>
        </div>
        <div style={{ fontSize: '15px', fontWeight: 700, color: '#1C1C1E', marginBottom: '8px', lineHeight: 1.4 }}>
          제안하신 브랜드 디자이너 포지션에<br/>익명 인재님이 수락하셨습니다!
        </div>
        <div style={{ fontSize: '12px', color: '#8E8E93', marginBottom: '16px' }}>
          이제 연락처를 확인하고 면접을 제안해보세요.
        </div>
        <button style={{ width: '100%', padding: '14px', background: '#1C1C1E', color: '#fff', borderRadius: '12px', fontSize: '14px', fontWeight: 700, border: 'none' }}>
          응답 확인하기
        </button>
      </div>

    </main>
  );
}
