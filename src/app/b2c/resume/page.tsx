import CareerNavMap from '@/components/b2c/CareerNavMap';

export default function ResumePage() {
  return (
    <main style={{ paddingTop: '24px' }}>
      <h1 className="font-h1" style={{ marginBottom: '24px' }}>내 이력서 및 커리어 맵</h1>
      
      <CareerNavMap />

      <div style={{ backgroundColor: '#fff', padding: '24px', borderRadius: '24px', boxShadow: '0 8px 12px rgba(0,0,0,0.02)' }}>
        <h2 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '16px' }}>내 이력서 관리</h2>
        
        <div style={{ marginBottom: '20px' }}>
          <h3 style={{ fontSize: '15px', color: '#666', marginBottom: '8px' }}>자기소개서 / 경력 기술서 요약</h3>
          <p style={{ fontSize: '15px', lineHeight: 1.6, backgroundColor: '#F8F9FA', padding: '16px', borderRadius: '12px' }}>
            이전 직장에서 B2B SaaS 프로덕트의 초기 기획부터 디자인 시스템 구축까지 성공적으로 리딩했습니다...
          </p>
          <button style={{ marginTop: '8px', padding: '8px 16px', backgroundColor: '#EBF1FF', color: '#1A5BFF', borderRadius: '12px', border: 'none', cursor: 'pointer', fontWeight: 600 }}>AI 피드백 받기</button>
        </div>

        <div>
          <h3 style={{ fontSize: '15px', color: '#666', marginBottom: '8px' }}>포트폴리오 링크</h3>
          <a href="#" style={{ color: '#1A5BFF', textDecoration: 'underline' }}>https://portfolio.soda.io/jhd_design</a>
        </div>
      </div>
    </main>
  );
}
