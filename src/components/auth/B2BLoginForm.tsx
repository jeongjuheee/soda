'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './B2BLoginForm.module.css';

export default function B2BLoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      router.push('/b2b/dashboard');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleLogin}>
      <div className={styles.inputGroup}>
        <label htmlFor="b2b-email">채용 담당자 이메일</label>
        <input 
          id="b2b-email" 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="회사 이메일을 입력하세요" 
          required 
        />
      </div>
      <button type="submit" className={styles.submitBtn}>담당자 승인 로그인</button>
    </form>
  );
}
