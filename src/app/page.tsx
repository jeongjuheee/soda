'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';
import styles from './page.module.css';

type AuthView = 'LOGIN' | 'SIGNUP_STEP1' | 'SIGNUP_STEP2' | 'SIGNUP_STEP3' | 'FIND_ID' | 'FIND_PW' | 'SOCIAL_SIGNUP';

export default function Home() {
  const [view, setView] = useState<AuthView>('LOGIN');
  const [showPassword, setShowPassword] = useState(false);
  const [signupAgreed, setSignupAgreed] = useState(false);
  const [foundEmail, setFoundEmail] = useState<string | null>(null);

  // B2C Signup States
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [onboardingType, setOnboardingType] = useState('');

  const handleGeneralLogin = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = '/b2c/dashboard';
  };

  const handleSocialClick = () => {
    setView('SOCIAL_SIGNUP');
  };

  const submitSignup = async (method: 'EMAIL' | 'SOCIAL') => {
    try {
      const response = await fetch('/api/auth/b2c-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: method === 'EMAIL' ? email : 'social_user@example.com',
          password_hash: method === 'EMAIL' ? password : '',
          name: method === 'EMAIL' ? name : '소셜유저',
          signup_method: method,
          onboarding_type: onboardingType,
          job_target: ''
        })
      });

      if (!response.ok) throw new Error('가입에 실패했습니다.');
      
      alert('가입이 완료되었습니다!');
      window.location.href = '/b2c/dashboard';
    } catch (error) {
      console.error(error);
      alert('가입 처리 중 오류가 발생했습니다.');
    }
  };

  const renderLoginView = () => (
    <>
      <div className={styles.logoArea}>
        <h1 className={styles.logoTitle}>soda</h1>
      </div>

      <div className={styles.authSection}>
        <form onSubmit={handleGeneralLogin}>
          <div style={{ marginBottom: '12px' }}>
            <input type="email" placeholder="이메일 주소를 입력하세요" required className={styles.inputField} />
          </div>
          <div style={{ position: 'relative', marginBottom: '24px' }}>
            <input type={showPassword ? "text" : "password"} placeholder="비밀번호를 입력하세요" required className={styles.inputField} />
            <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', color: '#999' }}>
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <button type="submit" className={styles.primaryButton}>로그인</button>
        </form>

        <div className={styles.authLinks}>
          <button onClick={() => setView('FIND_ID')}>아이디 찾기</button>
          <span>|</span>
          <button onClick={() => setView('FIND_PW')}>비밀번호 찾기</button>
          <span>|</span>
          <button onClick={() => setView('SIGNUP_STEP1')}>일반 회원가입</button>
        </div>

        <div className={styles.divider}>또는 간편하게 로그인</div>

        <div className={styles.socialGroup}>
          <button onClick={handleSocialClick} className={`${styles.socialIcon} ${styles.kakao}`}>K</button>
          <button onClick={handleSocialClick} className={`${styles.socialIcon} ${styles.naver}`}>N</button>
          <button onClick={handleSocialClick} className={`${styles.socialIcon} ${styles.google}`}>G</button>
        </div>
      </div>
      
      <Link href="/b2b/onboarding" className={styles.adminLink}>기업 회원 시작하기</Link>
    </>
  );

  const renderSignupStep1 = () => (
    <div className={styles.authSection}>
      <h2 className="font-h1" style={{ fontSize: '20px', marginBottom: '24px' }}>약관 동의</h2>
      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginBottom: '24px' }}>
        <input type="checkbox" checked={signupAgreed} onChange={(e) => setSignupAgreed(e.target.checked)} style={{ width: '20px', height: '20px' }} />
        <span style={{ fontSize: '15px' }}>(필수) SODA 이용약관 및 개인정보처리방침 동의</span>
      </label>
      <button onClick={() => setView('SIGNUP_STEP2')} disabled={!signupAgreed} className={styles.primaryButton} style={{ opacity: signupAgreed ? 1 : 0.5 }}>다음 단계</button>
      <button onClick={() => setView('LOGIN')} className={styles.textButton}>돌아가기</button>
    </div>
  );

  const renderSignupStep2 = () => (
    <div className={styles.authSection}>
      <h2 className="font-h1" style={{ fontSize: '20px', marginBottom: '24px' }}>정보 입력</h2>
      <input type="email" placeholder="이메일 (ID)" value={email} onChange={e => setEmail(e.target.value)} className={styles.inputField} style={{ marginBottom: '12px' }} />
      <input type="password" placeholder="비밀번호" value={password} onChange={e => setPassword(e.target.value)} className={styles.inputField} style={{ marginBottom: '12px' }} />
      <input type="password" placeholder="비밀번호 확인" className={styles.inputField} style={{ marginBottom: '12px' }} />
      <input type="text" placeholder="이름 (실명)" value={name} onChange={e => setName(e.target.value)} className={styles.inputField} style={{ marginBottom: '12px' }} />
      <input type="tel" placeholder="휴대폰 번호 (- 없이 입력)" value={phone} onChange={e => setPhone(e.target.value)} className={styles.inputField} style={{ marginBottom: '24px' }} />
      
      <button onClick={() => setView('SIGNUP_STEP3')} className={styles.primaryButton}>다음 단계</button>
      <button onClick={() => setView('SIGNUP_STEP1')} className={styles.textButton}>이전</button>
    </div>
  );

  const renderSignupStep3 = () => (
    <div className={styles.authSection}>
      <h2 className="font-h1" style={{ fontSize: '20px', marginBottom: '8px' }}>나의 상황 선택</h2>
      <p style={{ fontSize: '13px', color: '#666', marginBottom: '24px' }}>맞춤형 루틴과 아티클 추천을 위해 하나를 선택해주세요.</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
        <button onClick={() => setOnboardingType('A')} className={styles.selectionCard} style={{ border: onboardingType === 'A' ? '2px solid #0071E3' : '1px solid #E5E5EA' }}>
          <div style={{ fontWeight: 700, marginBottom: '4px' }}>방전형</div>
          <div style={{ fontSize: '12px', color: '#666' }}>취준에 지쳐서 아무것도 하기 싫어요.</div>
        </button>
        <button onClick={() => setOnboardingType('B')} className={styles.selectionCard} style={{ border: onboardingType === 'B' ? '2px solid #0071E3' : '1px solid #E5E5EA' }}>
          <div style={{ fontWeight: 700, marginBottom: '4px' }}>도약형</div>
          <div style={{ fontSize: '12px', color: '#666' }}>졸업 앞두고 취업 준비 시작하고 싶어요.</div>
        </button>
        <button onClick={() => setOnboardingType('C')} className={styles.selectionCard} style={{ border: onboardingType === 'C' ? '2px solid #0071E3' : '1px solid #E5E5EA' }}>
          <div style={{ fontWeight: 700, marginBottom: '4px' }}>탐색형</div>
          <div style={{ fontSize: '12px', color: '#666' }}>내가 뭘 하고 싶은지 아직 모르겠어요.</div>
        </button>
        <button onClick={() => setOnboardingType('D')} className={styles.selectionCard} style={{ border: onboardingType === 'D' ? '2px solid #0071E3' : '1px solid #E5E5EA' }}>
          <div style={{ fontWeight: 700, marginBottom: '4px' }}>재시동형</div>
          <div style={{ fontSize: '12px', color: '#666' }}>퇴사하고 다음 스텝을 찾고 있어요.</div>
        </button>
      </div>
      
      <button onClick={() => submitSignup('EMAIL')} disabled={!onboardingType} className={styles.primaryButton} style={{ opacity: onboardingType ? 1 : 0.5 }}>가입 완료하기</button>
    </div>
  );

  const renderSocialSignup = () => (
    <div className={styles.authSection}>
      <h2 className="font-h1" style={{ fontSize: '20px', marginBottom: '8px', color: '#0D2E80' }}>나의 상황 선택</h2>
      <p style={{ fontSize: '13px', color: '#666', marginBottom: '24px' }}>맞춤형 루틴과 아티클 추천을 위해 하나를 선택해주세요.</p>
      
      <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', marginBottom: '24px', background: '#F8F9FA', padding: '16px', borderRadius: '12px' }}>
        <input type="checkbox" checked={signupAgreed} onChange={(e) => setSignupAgreed(e.target.checked)} style={{ width: '20px', height: '20px' }} />
        <span style={{ fontSize: '14px', fontWeight: 600 }}>(필수) 제3자 정보제공 동의</span>
      </label>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
        <button onClick={() => setOnboardingType('A')} className={styles.selectionCard} style={{ border: onboardingType === 'A' ? '2px solid #0071E3' : '1px solid #E5E5EA' }}>
          <div style={{ fontWeight: 700, marginBottom: '4px' }}>방전형</div>
          <div style={{ fontSize: '12px', color: '#666' }}>취준에 지쳐서 아무것도 하기 싫어요.</div>
        </button>
        <button onClick={() => setOnboardingType('B')} className={styles.selectionCard} style={{ border: onboardingType === 'B' ? '2px solid #0071E3' : '1px solid #E5E5EA' }}>
          <div style={{ fontWeight: 700, marginBottom: '4px' }}>도약형</div>
          <div style={{ fontSize: '12px', color: '#666' }}>졸업 앞두고 취업 준비 시작하고 싶어요.</div>
        </button>
        <button onClick={() => setOnboardingType('C')} className={styles.selectionCard} style={{ border: onboardingType === 'C' ? '2px solid #0071E3' : '1px solid #E5E5EA' }}>
          <div style={{ fontWeight: 700, marginBottom: '4px' }}>탐색형</div>
          <div style={{ fontSize: '12px', color: '#666' }}>내가 뭘 하고 싶은지 아직 모르겠어요.</div>
        </button>
        <button onClick={() => setOnboardingType('D')} className={styles.selectionCard} style={{ border: onboardingType === 'D' ? '2px solid #0071E3' : '1px solid #E5E5EA' }}>
          <div style={{ fontWeight: 700, marginBottom: '4px' }}>재시동형</div>
          <div style={{ fontSize: '12px', color: '#666' }}>퇴사하고 다음 스텝을 찾고 있어요.</div>
        </button>
      </div>
      
      <button onClick={() => { 
        if(!signupAgreed) return alert('필수 약관에 동의해주세요.');
        if(!onboardingType) return alert('나의 상황을 선택해주세요.');
        submitSignup('SOCIAL');
      }} className={styles.primaryButton} style={{ opacity: (signupAgreed && onboardingType) ? 1 : 0.5 }}>가입 완료하기</button>
      <button onClick={() => setView('LOGIN')} className={styles.textButton}>취소</button>
    </div>
  );

  const renderFindId = () => (
    <div className={styles.authSection}>
      <h2 className="font-h1" style={{ fontSize: '20px', marginBottom: '24px' }}>아이디 찾기</h2>
      {!foundEmail ? (
        <>
          <input type="text" placeholder="이름" className={styles.inputField} style={{ marginBottom: '12px' }} />
          <input type="tel" placeholder="휴대폰 번호" className={styles.inputField} style={{ marginBottom: '24px' }} />
          <button onClick={() => setFoundEmail('ju***@gmail.com')} className={styles.primaryButton}>아이디 찾기</button>
        </>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <div style={{ padding: '24px', background: '#F8F9FA', borderRadius: '12px', marginBottom: '24px', fontWeight: 700, fontSize: '18px', color: '#1A5BFF' }}>
            {foundEmail}
          </div>
          <button onClick={() => { setFoundEmail(null); setView('LOGIN'); }} className={styles.primaryButton}>로그인 하러가기</button>
        </div>
      )}
      <button onClick={() => { setFoundEmail(null); setView('LOGIN'); }} className={styles.textButton}>돌아가기</button>
    </div>
  );

  const renderFindPw = () => (
    <div className={styles.authSection}>
      <h2 className="font-h1" style={{ fontSize: '20px', marginBottom: '24px' }}>비밀번호 찾기</h2>
      <input type="email" placeholder="가입한 이메일 주소" className={styles.inputField} style={{ marginBottom: '24px' }} />
      <button onClick={() => alert('입력하신 이메일로 비밀번호 재설정 링크가 발송되었습니다.')} className={styles.primaryButton}>임시 비밀번호 발송</button>
      <button onClick={() => setView('LOGIN')} className={styles.textButton}>돌아가기</button>
    </div>
  );

  return (
    <main className={styles.container}>
      {view === 'LOGIN' && renderLoginView()}
      {view === 'SIGNUP_STEP1' && renderSignupStep1()}
      {view === 'SIGNUP_STEP2' && renderSignupStep2()}
      {view === 'SIGNUP_STEP3' && renderSignupStep3()}
      {view === 'SOCIAL_SIGNUP' && renderSocialSignup()}
      {view === 'FIND_ID' && renderFindId()}
      {view === 'FIND_PW' && renderFindPw()}
    </main>
  );
}
