'use client';
import { useState } from 'react';

export default function B2BSearch() {
  const [tab, setTab] = useState<'전체' | '구직중' | '관심있어요'>('전체');
  const [sort, setSort] = useState<'매칭률순' | '루틴달성순' | '최신순'>('매칭률순');

  return (
    <main style={{ background: '#F9F9FB', minHeight: '100vh', padding: '20px 24px 100px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      
      {/* Header & Segment Tabs */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ fontSize: '20px', fontWeight: 700, margin: 0, color: '#1C1C1E' }}>매칭 인재 <span style={{ color: '#0071E3' }}>12</span></h1>
      </div>

      <div style={{ display: 'flex', background: '#F2F2F7', borderRadius: '12px', padding: '4px' }}>
        {['전체', '구직중', '관심있어요'].map(t => (
          <button 
            key={t}
            onClick={() => setTab(t as any)}
            style={{ flex: 1, background: tab === t ? '#FFF' : 'transparent', color: tab === t ? '#1C1C1E' : '#8E8E93', borderRadius: '8px', padding: '8px 0', fontSize: '13px', fontWeight: tab === t ? 700 : 500, border: 'none', transition: 'all 0.2s', boxShadow: tab === t ? '0 2px 8px rgba(0,0,0,0.04)' : 'none' }}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Sort Chips */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', msOverflowStyle: 'none', scrollbarWidth: 'none', paddingBottom: '4px' }}>
        {['매칭률순', '루틴달성순', '최신순'].map(s => (
          <button 
            key={s}
            onClick={() => setSort(s as any)}
            style={{ padding: '6px 14px', borderRadius: '20px', fontSize: '12px', fontWeight: 600, transition: 'all 0.2s',
              background: sort === s ? '#1C1C1E' : '#FFF', 
              color: sort === s ? '#FFF' : '#8E8E93', 
              border: `1px solid ${sort === s ? '#1C1C1E' : '#E5E5EA'}` 
            }}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Talent List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        
        {/* Active: 구직중 */}
        <div style={{ background: '#fff', borderRadius: '16px', padding: '16px', border: '1px solid #E5E5EA', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#F2F2F7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>👤</div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#1C1C1E' }}>익명 인재 (도약형)</div>
                  <span style={{ fontSize: '9px', background: '#E8F7EE', color: '#28A745', borderRadius: '4px', padding: '2px 6px', fontWeight: 700 }}>구직중</span>
                </div>
                <div style={{ fontSize: '12px', color: '#8E8E93' }}>브랜드 디자이너 지망</div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '15px', fontWeight: 800, color: '#0071E3' }}>92%</div>
              <div style={{ fontSize: '10px', color: '#8E8E93' }}>매칭률</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
            <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '4px 8px', fontWeight: 500 }}>💎 크래프트 장인형</span>
            <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '4px 8px', fontWeight: 500 }}>루틴 달성률 85%</span>
          </div>
          <button style={{ width: '100%', padding: '12px', background: '#1C1C1E', color: '#FFF', borderRadius: '10px', fontSize: '13px', fontWeight: 700, border: 'none' }}>
            스카웃 제안하기
          </button>
        </div>

        {/* Interested: 관심있어요 */}
        <div style={{ background: '#fff', borderRadius: '16px', padding: '16px', border: '1px solid #E5E5EA', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#F2F2F7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>👤</div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#1C1C1E' }}>익명 인재 (탐색형)</div>
                  <span style={{ fontSize: '9px', background: '#FFF8E1', color: '#F59E0B', borderRadius: '4px', padding: '2px 6px', fontWeight: 700 }}>관심있어요</span>
                </div>
                <div style={{ fontSize: '12px', color: '#8E8E93' }}>콘텐츠 마케터 지망</div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '15px', fontWeight: 800, color: '#0071E3' }}>88%</div>
              <div style={{ fontSize: '10px', color: '#8E8E93' }}>매칭률</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
            <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '4px 8px', fontWeight: 500 }}>🎯 프로젝트 주도형</span>
            <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '4px 8px', fontWeight: 500 }}>루틴 달성률 72%</span>
          </div>
          <button style={{ width: '100%', padding: '12px', background: '#F2F2F7', color: '#1C1C1E', borderRadius: '10px', fontSize: '13px', fontWeight: 700, border: 'none' }}>
            스카웃 제안하기
          </button>
        </div>

        {/* Disabled: 구직중 아님 */}
        <div style={{ background: '#fff', borderRadius: '16px', padding: '16px', border: '1px solid #E5E5EA', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px', opacity: 0.6 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#F2F2F7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>👤</div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#1C1C1E' }}>익명 인재 (재시동형)</div>
                  <span style={{ fontSize: '9px', background: '#F2F2F7', color: '#8E8E93', borderRadius: '4px', padding: '2px 6px', fontWeight: 700 }}>OFF</span>
                </div>
                <div style={{ fontSize: '12px', color: '#8E8E93' }}>프로덕트 매니저 지망</div>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '15px', fontWeight: 800, color: '#0071E3' }}>81%</div>
              <div style={{ fontSize: '10px', color: '#8E8E93' }}>매칭률</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px', opacity: 0.6 }}>
            <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '4px 8px', fontWeight: 500 }}>🚀 시장 개척형</span>
            <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '4px 8px', fontWeight: 500 }}>루틴 달성률 60%</span>
          </div>
          <button style={{ width: '100%', padding: '12px', background: '#F2F2F7', color: '#C7C7CC', borderRadius: '10px', fontSize: '13px', fontWeight: 700, border: 'none', cursor: 'not-allowed' }}>
            구직중 아님 · 제안 불가
          </button>
        </div>

      </div>

      {/* Subscription Banner */}
      <div style={{ border: '1.5px dashed #E5E5EA', borderRadius: '16px', padding: '24px 16px', textAlign: 'center', marginTop: '8px', background: '#FFF' }}>
        <div style={{ fontSize: '24px', marginBottom: '8px' }}>🔓</div>
        <div style={{ fontSize: '14px', fontWeight: 700, color: '#1C1C1E', marginBottom: '4px' }}>더 많은 매칭 인재를 확인하고 싶으신가요?</div>
        <div style={{ fontSize: '12px', color: '#8E8E93', marginBottom: '16px' }}>구독 회원이 되면 전체 인재 풀을 무제한으로 열람할 수 있습니다.</div>
        <button style={{ background: '#1C1C1E', color: '#FFF', borderRadius: '8px', padding: '10px 16px', fontSize: '12px', fontWeight: 700, border: 'none' }}>
          구독 플랜 알아보기
        </button>
      </div>

    </main>
  );
}
