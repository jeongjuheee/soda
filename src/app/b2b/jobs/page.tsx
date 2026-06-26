'use client';
import { useState } from 'react';

export default function JobsPage() {
  const [jobType, setJobType] = useState('b2b');

  return (
    <main style={{ paddingTop: '24px', paddingBottom: '40px' }}>
      <h1 className="font-h1" style={{ marginBottom: '8px' }}>공고/공모 매니저</h1>
      <p style={{ color: '#666', marginBottom: '24px', fontSize: '14px' }}>기업의 채용 공고나 공공기관의 청년 지원 미션을 등록합니다.</p>
      
      <div style={{ background: '#fff', borderRadius: '24px', padding: '24px', boxShadow: '0 8px 12px rgba(0,0,0,0.02)' }}>
        <h2 style={{ fontSize: '16px', fontWeight: 800, marginBottom: '16px' }}>새 공고 등록</h2>
        
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '8px', color: '#666' }}>채용 유형 (일반/B2G)</label>
          <select 
            value={jobType} 
            onChange={(e) => setJobType(e.target.value)}
            style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #ddd', fontSize: '14px', outline: 'none' }}
          >
            <option value="b2b">일반 채용 (정규직/계약직)</option>
            <option value="b2g">정부/공공 미션 (B2G 챌린지)</option>
          </select>
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 700, marginBottom: '8px', color: '#666' }}>공고 제목</label>
          <input type="text" placeholder={jobType === 'b2b' ? "예: 3년차 프론트엔드 개발자" : "예: 2026 청년 도약 디지털 챌린지"} style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #ddd', fontSize: '14px', outline: 'none' }} />
        </div>

        <button style={{ width: '100%', padding: '16px', background: '#0D2E80', color: '#fff', borderRadius: '16px', fontWeight: 700, marginTop: '8px', cursor: 'pointer' }}>
          {jobType === 'b2b' ? '채용 공고 등록하기' : '정부 미션 배포하기'}
        </button>
      </div>
    </main>
  );
}
