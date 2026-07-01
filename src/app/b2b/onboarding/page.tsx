'use client';
import { useState, useRef, useEffect } from 'react';

const QUESTIONS = [
  { id: 1, type: '시장개척형', q: '신규 프로젝트 기획안을 실행에 옮기는 속도와 방식은?', a: '완성도 60%라도 일단 시장에 던짐', b: '리스크 검증 및 부서 조율을 신중히 거침' },
  { id: 2, type: '시장개척형', q: '뛰어난 성과를 낸 주니어에게 보상하는 주된 방식은?', a: '연차 무관 파격적 인센티브 및 권한 부여', b: '사내 기준에 따른 안정적 연봉 인상 및 복지' },
  { id: 3, type: '시장개척형', q: '우리 회사의 주요 비즈니스 모델(BM) 포지션은?', a: '변화가 빠르고 혁신과 속도로 승부하는 시장', b: '수요가 안정적이고 점진적 확장을 목표로 하는 시장' },
  { id: 4, type: '시스템안착형', q: '신입 주니어가 합류했을 때 온보딩하는 방식은?', a: '잘 정리된 직무 매뉴얼(SOP)을 인계하고 준수하게 함', b: '주니어가 직접 실행 방식을 제안하게 함' },
  { id: 5, type: '시스템안착형', q: '구성원을 평가할 때 가장 중요하게 보는 KPI 성격은?', a: '정해진 규율을 기복 없이 준수했는가', b: '기존에 없던 변칙적 성과나 혁신을 냈는가' },
  { id: 6, type: '시스템안착형', q: '우리 회사의 전반적인 결재 프로세스 및 구조는?', a: '리스크 관리를 위해 꼼꼼한 승인 단계를 거침', b: '실무자가 판단하도록 결재 라인이 극도로 단순함' },
  { id: 7, type: '프로젝트주도형', q: '우리 회사가 일감을 배분하고 조직을 운영하는 구조는?', a: '프로젝트 중심의 목적 조직(TF, Cell)', b: '위계에 따라 움직이는 기능 조직(디자인팀 등)' },
  { id: 8, type: '프로젝트주도형', q: '우리 팀 리더가 매니징할 때 가장 지양하는(꺼리는) 행동은?', a: '하나부터 열까지 간섭하는 마이크로 매니징', b: '가이드 없이 방임하여 방향을 잃게 하는 것' },
  { id: 9, type: '프로젝트주도형', q: '사내에서 일 잘한다고 소문난 인재들의 공통적 특징은?', a: '필요하다면 스스로 주도적으로 판을 짜서 해결함', b: '자신에게 주어진 R&R을 실수 없이 깔끔히 쳐냄' },
  { id: 10, type: '크래프트장인형', q: '채용하려는 주니어 포지션에게 조직이 기대하는 가장 궁극적 역할은?', a: '미팅을 줄이고 맡은 실무를 장인급 퀄리티로 뽑는 것', b: '타 부서와 매끄럽게 소통하며 일정 전반을 조율하는 것' },
  { id: 11, type: '크래프트장인형', q: '우리 회사가 시장에서 경쟁력을 유지하는 핵심 무기는?', a: '타협 없는 압도적 퀄리티나 디자인 헤리티지', b: '대중적 니즈 포착과 대량 생산 유통 인프라' },
  { id: 12, type: '크래프트장인형', q: '팀 리더가 팀원의 업무 능률을 위해 가장 신경 쓰는 부분은?', a: '한 우물만 깊게 파도록 불필요한 행정 절차나 잔업 차단', b: '수시로 진행 상황을 체크하며 함께 발맞춤' },
  { id: 13, type: '하모니상생형', q: '팀원이 치명적 실수를 했을 때 리더가 반응하는 실제 무드는?', a: '사기가 꺾이지 않게 수평적 분위기에서 대안 고민', b: '발생한 타격을 팩트 기반으로 직설적으로 짚고 수정 요구' },
  { id: 14, type: '하모니상생형', q: '사내 복지 제도를 기획할 때 가장 최우선으로 고려하는 가치는?', a: '구성원의 심리적 안정감과 워라밸 보장', b: '역량 개발비 지원 및 성과 연동 금전 보상' },
  { id: 15, type: '하모니상생형', q: '사내 구성원 간의 인간관계와 소통 분위기의 특징은?', a: '님 호칭, 서로의 리듬을 존중하는 끈끈한 유대감', b: '공과 사가 분리된 프로페셔널한 성과 중심 협력' }
];

const TYPE_META: Record<string, { emoji: string; sub: string; desc: string }> = {
  '시장개척형': { emoji: '🚀', sub: 'Pioneer', desc: '변화가 빠르고 혁신과 속도로 시장을 선도하는 조직이에요.' },
  '시스템안착형': { emoji: '🧱', sub: 'Systematic', desc: '체계적인 매뉴얼과 꼼꼼한 리스크 관리로 안정성을 추구하는 조직이에요.' },
  '프로젝트주도형': { emoji: '🎯', sub: 'Project-driven', desc: '목적 조직 중심으로 주도적인 문제 해결을 최우선으로 하는 조직이에요.' },
  '크래프트장인형': { emoji: '💎', sub: 'Premium Craft', desc: '하나를 만들더라도 타협 없는 압도적인 퀄리티와 전문 기술력을 중시하는 조직이에요.' },
  '하모니상생형': { emoji: '🤝', sub: 'Harmony', desc: '구성원의 심리적 안정감과 끈끈한 유대감을 중시하는 조직이에요.' }
};

export default function B2BOnboarding() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<(string | null)[]>(Array(15).fill(null));
  
  // B2B Signup States
  const [bizNumber, setBizNumber] = useState('');
  const [companyId, setCompanyId] = useState('');

  // NTS Validation States
  const [ntsMsg, setNtsMsg] = useState<{ text: string; type: 'error' | 'success' | '' }>({ text: '', type: '' });
  const [isNtsLoading, setIsNtsLoading] = useState(false);

  // 계산된 결과
  const [primaryType, setPrimaryType] = useState('크래프트장인형');
  const [secondaryType, setSecondaryType] = useState('시스템안착형');

  // 현재 활성화된 질문 인덱스 (0~14)
  const currentActiveIndex = answers.findIndex(ans => ans === null);
  const displayIndex = currentActiveIndex === -1 ? 14 : currentActiveIndex;

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (step === 2 && containerRef.current) {
      const activeEl = document.getElementById(`q-card-${displayIndex}`);
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [displayIndex, step]);

  const handleSelect = (qIndex: number, choice: 'A' | 'B') => {
    const newAnswers = [...answers];
    newAnswers[qIndex] = choice;
    setAnswers(newAnswers);
  };

  const calculateResult = async () => {
    const scores: Record<string, number> = {
      '시장개척형': 0,
      '시스템안착형': 0,
      '프로젝트주도형': 0,
      '크래프트장인형': 0,
      '하모니상생형': 0
    };

    answers.forEach((ans, idx) => {
      if (ans === 'A') {
        const type = QUESTIONS[idx].type;
        scores[type] += 1;
      }
    });

    const sortedTypes = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    setPrimaryType(sortedTypes[0][0]);
    setSecondaryType(sortedTypes[1][0]);

    try {
      await fetch('/api/onboarding/b2b-complete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ company_id: companyId, scores })
      });
    } catch (e) {
      console.error(e);
    }
    
    setStep(3);
  };

  const handleSignupAndStart = async () => {
    if (!bizNumber) return setNtsMsg({ text: '사업자 등록번호 10자리를 입력해주세요.', type: 'error' });
    if (bizNumber.replace(/-/g, '').length !== 10) return setNtsMsg({ text: '사업자 등록번호는 10자리여야 합니다.', type: 'error' });

    setIsNtsLoading(true);
    setNtsMsg({ text: '', type: '' });

    try {
      // 1. 국세청 상태조회 API 호출
      const ntsRes = await fetch('/api/nts/validate-business', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ biz_number: bizNumber.replace(/-/g, '') })
      });
      const ntsData = await ntsRes.json();

      if (ntsData.b_stt_cd === '01') {
        setNtsMsg({ text: '✓ 인증 완료', type: 'success' });
        
        // 2. 정상 사업자인 경우 구글 시트 가입 진행
        const res = await fetch('/api/auth/b2b-signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            biz_number: bizNumber.replace(/-/g, ''),
            company_name: '루메나 (임시)',
            manager_name: '김소다',
            manager_phone: '010-0000-0000'
          })
        });
        const data = await res.json();
        if (data.success && data.company_id) {
          setCompanyId(data.company_id);
        }
        
        // 약간의 딜레이 후 다음 스텝으로 이동 (성공 메시지 보여주기 위함)
        setTimeout(() => setStep(2), 800);

      } else if (ntsData.b_stt_cd === '02') {
        setNtsMsg({ text: '❌ 현재 휴업 중인 사업자등록번호입니다.', type: 'error' });
      } else if (ntsData.b_stt_cd === '03') {
        setNtsMsg({ text: '❌ 폐업된 사업자등록번호로는 가입할 수 없습니다.', type: 'error' });
      } else {
        setNtsMsg({ text: '❌ 국세청에 등록되지 않은 국세청 유효성 오류 번호입니다.', type: 'error' });
      }

    } catch (e) {
      console.error(e);
      setNtsMsg({ text: '❌ 국세청 서버 통신 오류가 발생했습니다.', type: 'error' });
    } finally {
      setIsNtsLoading(false);
    }
  };

  const answeredCount = answers.filter(a => a !== null).length;
  const isComplete = answeredCount === 15;
  const progressPercent = Math.round((answeredCount / 15) * 100);

  return (
    <main style={{ background: '#F2F2F7', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: '100%', maxWidth: '430px', background: '#F9F9FB', minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
        
        {/* Step 1: 사업자 인증 */}
        {step === 1 && (
          <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <div style={{ fontSize: '13px', color: '#8E8E93', fontWeight: 600 }}>조직문화 진단 (약 3분 소요)</div>
              <div style={{ fontSize: '13px', color: '#0071E3', fontWeight: 700 }}>1/3 단계</div>
            </div>
            <div style={{ height: '4px', background: '#E5E5EA', borderRadius: '2px', overflow: 'hidden', marginBottom: '32px' }}>
              <div style={{ width: '33%', height: '100%', background: '#0071E3', borderRadius: '2px', transition: 'width 0.3s ease' }}></div>
            </div>

            <div style={{ flex: 1 }}>
              <h1 style={{ fontSize: '24px', fontWeight: 800, color: '#1C1C1E', marginBottom: '8px', lineHeight: 1.4 }}>환영합니다!<br/>사업자 인증을 진행해주세요.</h1>
              <p style={{ fontSize: '14px', color: '#8E8E93', marginBottom: '32px' }}>기업 회원은 사업자 인증이 필수입니다.</p>
              
              <label style={{ fontSize: '13px', fontWeight: 600, color: '#1C1C1E', display: 'block', marginBottom: '8px' }}>사업자 등록번호</label>
              <input type="text" placeholder="'-' 없이 10자리 입력" value={bizNumber} onChange={e => setBizNumber(e.target.value)} style={{ width: '100%', padding: '16px', borderRadius: '12px', border: ntsMsg.type === 'error' ? '1px solid #FF3B30' : ntsMsg.type === 'success' ? '1px solid #34C759' : '1px solid #E5E5EA', fontSize: '15px', marginBottom: '8px', transition: 'border-color 0.2s' }} />
              
              {/* NTS Error / Success Message */}
              <div style={{ minHeight: '20px', marginBottom: '16px', fontSize: '13px', fontWeight: 500, color: ntsMsg.type === 'error' ? '#FF3B30' : '#34C759', transition: 'opacity 0.2s', opacity: ntsMsg.text ? 1 : 0 }}>
                {ntsMsg.text}
              </div>

              <button 
                onClick={handleSignupAndStart}
                disabled={isNtsLoading || ntsMsg.type === 'success'}
                style={{ width: '100%', padding: '16px', background: isNtsLoading ? '#E5E5EA' : ntsMsg.type === 'success' ? '#34C759' : '#1C1C1E', color: isNtsLoading ? '#8E8E93' : '#fff', borderRadius: '12px', fontSize: '15px', fontWeight: 600, border: 'none', cursor: isNtsLoading || ntsMsg.type === 'success' ? 'not-allowed' : 'pointer', transition: 'background-color 0.2s' }}
              >
                {isNtsLoading ? '국세청 조회 중...' : ntsMsg.type === 'success' ? '인증 완료' : '인증 완료 및 진단 시작'}
              </button>
            </div>
          </div>
        )}

        {/* Step 2: 15문항 리스트형 진단 */}
        {step === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            {/* Header Sticky */}
            <div style={{ padding: '24px 24px 16px 24px', background: '#F9F9FB', position: 'sticky', top: 0, zIndex: 10, borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
              <h1 style={{ fontSize: '22px', fontWeight: 800, color: '#1C1C1E', marginBottom: '6px' }}>우리 조직의 DNA를 분석합니다</h1>
              <div style={{ fontSize: '13px', color: '#8E8E93', marginBottom: '16px' }}>15문항 · 약 3분 소요</div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ flex: 1, height: '4px', background: '#E5E5EA', borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ width: `${progressPercent}%`, height: '100%', background: '#34C759', borderRadius: '2px', transition: 'width 0.3s' }}></div>
                </div>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#34C759' }}>{answeredCount}/15 완료</div>
              </div>
            </div>

            <div ref={containerRef} style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', paddingBottom: '40px' }}>
              {QUESTIONS.map((item, index) => {
                const isDone = answers[index] !== null;
                const isActive = index === displayIndex;
                const isLocked = index > displayIndex;

                if (isLocked) {
                  return (
                    <div key={item.id} id={`q-card-${index}`} style={{ background: '#fff', borderRadius: '12px', padding: '20px', border: '1px solid #E5E5EA', opacity: 0.4, transition: 'all 0.3s' }}>
                      <div style={{ fontSize: '15px', fontWeight: 600, color: '#C7C7CC', lineHeight: 1.4 }}>
                        <span style={{ marginRight: '6px' }}>Q{item.id}.</span>{item.q}
                      </div>
                    </div>
                  );
                }

                if (isDone && !isActive) {
                  return (
                    <div key={item.id} id={`q-card-${index}`} style={{ background: '#fff', borderRadius: '12px', padding: '20px', border: '1px solid #E5E5EA', transition: 'all 0.3s' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div style={{ fontSize: '15px', fontWeight: 600, color: '#1C1C1E', lineHeight: 1.4, flex: 1 }}>
                          <span style={{ color: '#8E8E93', marginRight: '6px' }}>Q{item.id}.</span>{item.q}
                        </div>
                        <span style={{ color: '#34C759', fontSize: '18px', fontWeight: 800, marginLeft: '8px' }}>✓</span>
                      </div>
                    </div>
                  );
                }

                // Active
                return (
                  <div key={item.id} id={`q-card-${index}`} style={{ background: '#fff', borderRadius: '16px', padding: '24px', border: '1.5px solid #1C1C1E', boxShadow: '0 8px 24px rgba(0,0,0,0.06)', transition: 'all 0.3s' }}>
                    <div style={{ display: 'inline-block', fontSize: '11px', background: '#1C1C1E', color: '#fff', borderRadius: '6px', padding: '4px 8px', fontWeight: 700, marginBottom: '12px' }}>
                      Q{item.id} · 진행중
                    </div>
                    <div style={{ fontSize: '17px', fontWeight: 700, color: '#1C1C1E', lineHeight: 1.4, marginBottom: '20px' }}>
                      {item.q}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <button 
                        onClick={() => handleSelect(index, 'A')}
                        style={{ 
                          textAlign: 'left', padding: '16px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, lineHeight: 1.4, transition: 'all 0.2s',
                          background: answers[index] === 'A' ? '#1C1C1E' : '#F2F2F7', 
                          color: answers[index] === 'A' ? '#fff' : '#1C1C1E',
                          border: '1px solid transparent'
                        }}
                      >
                        <span style={{ fontWeight: 700, marginRight: '6px' }}>Ⓐ</span>{item.a}
                      </button>
                      <button 
                        onClick={() => handleSelect(index, 'B')}
                        style={{ 
                          textAlign: 'left', padding: '16px', borderRadius: '8px', fontSize: '14px', fontWeight: 500, lineHeight: 1.4, transition: 'all 0.2s',
                          background: answers[index] === 'B' ? '#1C1C1E' : '#F2F2F7', 
                          color: answers[index] === 'B' ? '#fff' : '#1C1C1E',
                          border: '1px solid transparent'
                        }}
                      >
                        <span style={{ fontWeight: 700, marginRight: '6px' }}>Ⓑ</span>{item.b}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Button */}
            <div style={{ padding: '16px 24px', background: '#F9F9FB', position: 'sticky', bottom: 0, zIndex: 10, borderTop: '1px solid rgba(0,0,0,0.05)' }}>
              {isComplete ? (
                <button 
                  onClick={calculateResult}
                  style={{ width: '100%', padding: '18px', background: '#1C1C1E', color: '#fff', borderRadius: '16px', fontSize: '15px', fontWeight: 700, border: 'none' }}
                >
                  결과 확인하기
                </button>
              ) : (
                <button style={{ width: '100%', padding: '18px', background: '#E5E5EA', color: '#8E8E93', borderRadius: '16px', fontSize: '15px', fontWeight: 700, border: 'none', cursor: 'not-allowed' }}>
                  15문항 완료 후 활성화
                </button>
              )}
            </div>
          </div>
        )}

        {/* Step 3: 진단 결과 화면 C안 */}
        {step === 3 && (
          <div style={{ flex: 1, padding: '40px 24px 24px 24px', display: 'flex', flexDirection: 'column' }}>
            
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div style={{ fontSize: '14px', color: '#8E8E93', fontWeight: 600, marginBottom: '12px' }}>분석 완료 🎉</div>
              <div style={{ fontSize: '64px', marginBottom: '16px' }}>{TYPE_META[primaryType].emoji}</div>
              <h1 style={{ fontSize: '28px', fontWeight: 800, color: '#1C1C1E', marginBottom: '4px' }}>{primaryType}</h1>
              <div style={{ fontSize: '16px', color: '#8E8E93', fontWeight: 600, marginBottom: '12px' }}>{TYPE_META[primaryType].sub}</div>
              <div style={{ display: 'inline-block', fontSize: '12px', background: '#F2F2F7', color: '#636366', borderRadius: '8px', padding: '6px 12px', fontWeight: 600 }}>
                2순위 · {TYPE_META[secondaryType].emoji} {secondaryType}
              </div>
            </div>

            {/* Summary */}
            <div style={{ background: '#fff', borderRadius: '16px', padding: '20px', border: '1px solid #E5E5EA', marginBottom: '24px', textAlign: 'center' }}>
              <div style={{ fontSize: '13px', color: '#0071E3', fontWeight: 700, marginBottom: '8px' }}>우리 조직은 이런 곳이에요</div>
              <p style={{ fontSize: '15px', color: '#1C1C1E', fontWeight: 500, lineHeight: 1.5, margin: 0 }}>
                "{TYPE_META[primaryType].desc}"
              </p>
            </div>

            {/* Core Preview Card */}
            <div style={{ background: '#fff', borderRadius: '16px', padding: '20px', border: '1.5px solid #0071E3', boxShadow: '0 8px 32px rgba(0, 113, 227, 0.08)', marginBottom: '32px' }}>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#1C1C1E', marginBottom: '16px' }}>✨ 지금 바로 매칭되는 인재 3명</div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {/* Person 1 */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid #F2F2F7' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#F2F2F7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>👤</div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ fontSize: '14px', fontWeight: 600, color: '#1C1C1E' }}>익명 인재</span>
                        <span style={{ fontSize: '10px', background: '#EAF2FF', color: '#0071E3', borderRadius: '4px', padding: '2px 6px', fontWeight: 600 }}>
                          {TYPE_META[primaryType].emoji} {primaryType.replace('형', '')}
                        </span>
                      </div>
                      <div style={{ fontSize: '11px', color: '#8E8E93', marginTop: '2px' }}>브랜드 디자이너</div>
                    </div>
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 800, color: '#0071E3' }}>92%</div>
                </div>

                {/* Person 2 */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '12px', borderBottom: '1px solid #F2F2F7' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#F2F2F7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>👤</div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ fontSize: '14px', fontWeight: 600, color: '#1C1C1E' }}>익명 인재</span>
                        <span style={{ fontSize: '10px', background: '#EAF2FF', color: '#0071E3', borderRadius: '4px', padding: '2px 6px', fontWeight: 600 }}>
                          {TYPE_META[primaryType].emoji} {primaryType.replace('형', '')}
                        </span>
                      </div>
                      <div style={{ fontSize: '11px', color: '#8E8E93', marginTop: '2px' }}>UI/UX 디자이너</div>
                    </div>
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 800, color: '#0071E3' }}>78%</div>
                </div>

                {/* Person 3 */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#F2F2F7', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>👤</div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{ fontSize: '14px', fontWeight: 600, color: '#1C1C1E' }}>익명 인재</span>
                        <span style={{ fontSize: '10px', background: '#F2F2F7', color: '#8E8E93', borderRadius: '4px', padding: '2px 6px', fontWeight: 600 }}>
                          {TYPE_META[secondaryType].emoji} {secondaryType.replace('형', '')}
                        </span>
                      </div>
                      <div style={{ fontSize: '11px', color: '#8E8E93', marginTop: '2px' }}>프론트엔드 개발자</div>
                    </div>
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 800, color: '#0071E3' }}>71%</div>
                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: '16px', fontSize: '12px', color: '#8E8E93', fontWeight: 500 }}>
                +9명 더 있어요
              </div>
            </div>

            <div style={{ flex: 1 }}></div>

            {/* Bottom Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <button 
                onClick={() => window.location.href = '/b2b/search'}
                style={{ width: '100%', padding: '18px', background: '#1C1C1E', color: '#fff', borderRadius: '16px', fontSize: '16px', fontWeight: 700, border: 'none' }}
              >
                전체 인재풀 보기 →
              </button>
              <button 
                onClick={() => window.location.href = '/b2b/dashboard'}
                style={{ width: '100%', padding: '18px', background: '#fff', color: '#1C1C1E', borderRadius: '16px', fontSize: '15px', fontWeight: 600, border: '1px solid #E5E5EA' }}
              >
                홈으로 이동
              </button>
            </div>

          </div>
        )}

      </div>
    </main>
  );
}
