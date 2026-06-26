'use client';
import { useRouter } from 'next/navigation';
import styles from './B2CLoginButton.module.css';

interface Props {
  provider: 'kakao' | 'naver' | 'google';
}

const providerConfig = {
  kakao: { label: '카카오로 시작하기', className: styles.kakao },
  naver: { label: '네이버로 시작하기', className: styles.naver },
  google: { label: 'Google로 시작하기', className: styles.google },
};

export default function B2CLoginButton({ provider }: Props) {
  const router = useRouter();
  const config = providerConfig[provider];

  const handleLogin = () => {
    // 목업 환경이므로 즉시 라우팅
    router.push('/b2c/dashboard');
  };

  return (
    <button className={`${styles.button} ${config.className}`} onClick={handleLogin}>
      <span className={styles.buttonText}>{config.label}</span>
    </button>
  );
}
