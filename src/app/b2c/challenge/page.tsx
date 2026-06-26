'use client';
import { useState } from 'react';

export default function B2CChallenge() {
  const [tab, setTab] = useState<'진행중' | '완료'>('진행중');

  return (
    <main style={{ background: '#F9F9FB', minHeight: '100vh', padding: '20px 24px 100px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '20px', fontWeight: 700, margin: 0, color: '#1C1C1E' }}>챌린지</h1>
          <div style={{ fontSize: '12px', color: '#8E8E93', marginTop: '2px' }}>진행 중 2개 · 완료 4개</div>
        </div>
        <button style={{ background: '#EAF2FF', color: '#0071E3', border: 'none', borderRadius: '8px', padding: '6px 12px', fontSize: '12px', fontWeight: 600 }}>
          + 직접등록
        </button>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '8px' }}>
        <button 
          onClick={() => setTab('진행중')}
          style={{ flex: 1, background: tab === '진행중' ? '#1C1C1E' : '#FFF', color: tab === '진행중' ? '#FFF' : '#8E8E93', border: `1px solid ${tab === '진행중' ? '#1C1C1E' : '#E5E5EA'}`, borderRadius: '24px', padding: '8px 0', fontSize: '12px', fontWeight: 600, transition: 'all 0.2s' }}
        >
          진행중
        </button>
        <button 
          onClick={() => setTab('완료')}
          style={{ flex: 1, background: tab === '완료' ? '#1C1C1E' : '#FFF', color: tab === '완료' ? '#FFF' : '#8E8E93', border: `1px solid ${tab === '완료' ? '#1C1C1E' : '#E5E5EA'}`, borderRadius: '24px', padding: '8px 0', fontSize: '12px', fontWeight: 600, transition: 'all 0.2s' }}
        >
          완료
        </button>
      </div>

      {/* Challenge Cards */}
      <div style={{ background: '#fff', borderRadius: '16px', padding: '16px', border: '1px solid #E5E5EA', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '18px' }}>📖</span>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#1C1C1E' }}>오전 30분 독서</div>
              <div style={{ fontSize: '11px', color: '#8E8E93' }}>매일 반복</div>
            </div>
          </div>
          <span style={{ fontSize: '10px', background: '#E8F7EE', color: '#28A745', borderRadius: '6px', padding: '3px 8px', fontWeight: 600, height: 'fit-content' }}>활성</span>
        </div>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
          <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '3px 8px' }}>💎 크래프트</span>
          <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '3px 8px' }}>08:00</span>
          <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '3px 8px' }}>7일</span>
          <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '3px 8px' }}>🔒 프라이빗</span>
        </div>
        <div style={{ height: '4px', background: '#E5E5EA', borderRadius: '2px', overflow: 'hidden', marginBottom: '6px' }}>
          <div style={{ width: '57%', height: '100%', background: '#34C759', borderRadius: '2px' }}></div>
        </div>
        <div style={{ fontSize: '11px', color: '#8E8E93' }}>4/7일 완료</div>
      </div>

      <div style={{ background: '#fff', borderRadius: '16px', padding: '16px', border: '1px solid #E5E5EA', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span style={{ fontSize: '18px' }}>✏️</span>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#1C1C1E' }}>포트폴리오 1페이지</div>
              <div style={{ fontSize: '11px', color: '#8E8E93' }}>매일 반복</div>
            </div>
          </div>
          <span style={{ fontSize: '10px', background: '#E8F7EE', color: '#28A745', borderRadius: '6px', padding: '3px 8px', fontWeight: 600, height: 'fit-content' }}>활성</span>
        </div>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
          <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '3px 8px' }}>🎯 프로젝트</span>
          <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '3px 8px' }}>10:00</span>
          <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '3px 8px' }}>30일</span>
          <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '3px 8px' }}>👥 소셜</span>
        </div>
        <div style={{ height: '4px', background: '#E5E5EA', borderRadius: '2px', overflow: 'hidden', marginBottom: '6px' }}>
          <div style={{ width: '20%', height: '100%', background: '#34C759', borderRadius: '2px' }}></div>
        </div>
        <div style={{ fontSize: '11px', color: '#8E8E93' }}>6/30일 완료</div>
      </div>

      <div style={{ height: '1px', background: '#E5E5EA', margin: '8px 0' }}></div>

      {/* Explore Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
        <h2 style={{ fontSize: '13px', fontWeight: 600, color: '#1C1C1E', margin: 0 }}>챌린지팩 탐색</h2>
        <span style={{ fontSize: '11px', color: '#8E8E93' }}>전체보기 →</span>
      </div>

      <div style={{ background: '#fff', borderRadius: '16px', padding: '16px', border: '1.5px solid #0071E3', boxShadow: '0 4px 12px rgba(0, 113, 227, 0.04)' }}>
        <div style={{ display: 'inline-block', fontSize: '10px', background: '#EAF2FF', color: '#0071E3', borderRadius: '6px', padding: '4px 8px', fontWeight: 600, marginBottom: '8px' }}>
          ✨ 내 성향 맞춤 추천
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 600, color: '#1C1C1E', marginBottom: '6px' }}>브랜드 마케터 루틴팩</div>
            <div style={{ display: 'flex', gap: '6px' }}>
              <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '3px 8px' }}>🚀 시장개척</span>
              <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#636366', borderRadius: '6px', padding: '3px 8px' }}>34명 참여</span>
            </div>
          </div>
          <button style={{ background: '#1C1C1E', color: '#FFF', border: 'none', borderRadius: '8px', padding: '8px 14px', fontSize: '11px', fontWeight: 600 }}>
            구독
          </button>
        </div>
      </div>

    </main>
  );
}
