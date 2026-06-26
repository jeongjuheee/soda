'use client';
import styles from './CompanyVerifyBanner.module.css';
import { mockB2BCompanies } from '@/lib/mockData';

export default function CompanyVerifyBanner() {
  const company = mockB2BCompanies[0]; // (주)루메나 모의 데이터

  return (
    <div className={styles.banner}>
      <div className={styles.infoArea}>
        <h2 className={styles.welcomeText}>{company.name} 담당자님, 환영합니다</h2>
        <span className={styles.subText}>SODA 클린 기업 인증이 완료되었습니다.</span>
      </div>
      {company.hasCleanBadge && (
        <div className={styles.badge}>
          ✓ SODA 클린 뱃지
        </div>
      )}
    </div>
  );
}
