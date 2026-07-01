'use client';
import { useState } from 'react';

type JobStatus = '구직중 OFF' | '관심있어요' | '구직중 ON';

export default function JobTab() {
  const [jobStatus, setJobStatus] = useState<JobStatus>('구직중 OFF');

  const scoutList = [
    { id: 1, company: 'Toss', role: 'Product Manager', match: 92, message: '주리님의 꼼꼼한 루틴 기록과 크래프트 성향이 저희 프로덕트 조직과 잘 맞을 것 같아 제안드립니다.' },
    { id: 2, company: '당근마켓', role: 'UX Researcher', match: 88, message: '유저 데이터를 집요하게 분석하시는 성향을 인상 깊게 보았습니다.' },
  ];

  const matchingCompanies = [
    { id: 3, company: '배달의민족', role: '서비스 기획자', tags: ['IT플랫폼', '정규직'], match: 95 },
    { id: 4, company: '야놀자', role: 'Product Owner', tags: ['여가/여행', '정규직'], match: 89 },
  ];

  const getStatusDesc = () => {
    switch(jobStatus) {
      case '구직중 OFF': return '현재는 지금의 루틴에 집중하고 있어요.';
      case '관심있어요': return '좋은 기회가 있다면 언제든 열려있어요.';
      case '구직중 ON': return '적극적으로 새로운 도전을 찾고 있어요!';
    }
  };

  return (
    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* 1. 상단 타이틀 */}
      <div>
        <h1 className="font-h1" style={{ margin: 0 }}>채용</h1>
        <div style={{ fontSize: '13px', color: 'var(--color-sub-text)' }}>크래프트 성향 맞춤 커리어 제안</div>
      </div>

      {/* 2. 구직 상태 토글 카드 (히어로) */}
      <div className="soda-card-hero" style={{ padding: '24px' }}>
        <div style={{ fontSize: '15px', fontWeight: 800, marginBottom: '20px' }}>나의 구직 상태</div>
        
        {/* 토글 UI */}
        <div style={{ display: 'flex', background: 'rgba(0,0,0,0.15)', borderRadius: '12px', padding: '4px', marginBottom: '16px' }}>
          {(['구직중 OFF', '관심있어요', '구직중 ON'] as JobStatus[]).map(status => (
            <button 
              key={status}
              onClick={() => setJobStatus(status)}
              style={{ 
                flex: 1, 
                padding: '10px 0', 
                borderRadius: '8px', 
                fontSize: '12px', 
                fontWeight: 800,
                color: jobStatus === status ? 'var(--color-primary)' : '#FFF',
                background: jobStatus === status ? '#FFF' : 'transparent',
                boxShadow: jobStatus === status ? '0 2px 8px rgba(0,0,0,0.1)' : 'none',
                transition: 'all 0.2s'
              }}
            >
              {status}
            </button>
          ))}
        </div>

        <div style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.9)', textAlign: 'center' }}>
          "{getStatusDesc()}"
        </div>
      </div>

      {/* 3. 스카웃 제안 섹션 */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 className="font-h2" style={{ margin: 0 }}>스카웃 제안 <span style={{ color: 'var(--color-primary)' }}>2</span></h2>
          <span style={{ fontSize: '12px', color: 'var(--color-sub-text)', fontWeight: 700 }}>전체보기 →</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {scoutList.map(item => (
            <div key={item.id} className="soda-card" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--color-bg-app)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px' }}>🏢</div>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--color-point)' }}>{item.company}</div>
                    <div style={{ fontSize: '13px', color: 'var(--color-sub-text)', fontWeight: 600 }}>{item.role}</div>
                  </div>
                </div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--color-primary)' }}>{item.match}% 매칭</div>
              </div>
              <div style={{ background: 'var(--color-bg-app)', padding: '12px', borderRadius: '12px', fontSize: '12.5px', color: 'var(--color-text-main)', lineHeight: '150%', marginBottom: '16px' }}>
                "{item.message}"
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button style={{ flex: 1, padding: '12px', borderRadius: '10px', background: 'var(--color-bg-card)', color: 'var(--color-sub-text)', fontWeight: 800, fontSize: '13px' }}>나중에</button>
                <button style={{ flex: 1, padding: '12px', borderRadius: '10px', background: 'var(--color-primary)', color: '#FFF', fontWeight: 800, fontSize: '13px' }}>수락하기</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. 나에게 맞는 기업 섹션 */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 className="font-h2" style={{ margin: 0 }}>나에게 맞는 기업</h2>
          <span style={{ fontSize: '12px', color: 'var(--color-sub-text)', fontWeight: 700 }}>전체보기 →</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {matchingCompanies.map(item => (
            <div key={item.id} className="soda-card" style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--color-bg-app)', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px' }}>🏢</div>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--color-point)', marginBottom: '4px' }}>{item.company}</div>
                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                    <span style={{ fontSize: '13px', color: 'var(--color-sub-text)', fontWeight: 600 }}>{item.role}</span>
                    <span style={{ color: 'var(--color-border)' }}>|</span>
                    {item.tags.map(t => (
                      <span key={t} style={{ fontSize: '11px', color: 'var(--color-sub-text)' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div style={{ fontSize: '14px', fontWeight: 800, color: 'var(--color-primary)' }}>{item.match}%</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
