'use client';
import { mockB2CUsers, mockB2BCompanies } from '@/lib/mockData';
import styles from './AnalyticsSummaryCards.module.css';

export default function AnalyticsSummaryCards() {
  const totalB2C = mockB2CUsers.length;
  const activeB2B = mockB2BCompanies.filter(c => c.status === '승인완료').length;
  
  // 모의 루틴 달성률 평균 계산
  const avgRoutine = Math.round(
    mockB2CUsers.reduce((acc, user) => acc + user.routineRate, 0) / (totalB2C || 1)
  );

  return (
    <div className={styles.cardGrid}>
      <div className={styles.card}>
        <span className={styles.cardTitle}>전체 B2C 유저 수</span>
        <span className={styles.cardValue}>{totalB2C}명</span>
      </div>
      <div className={styles.card}>
        <span className={styles.cardTitle}>오늘 활성화된 B2B 기업</span>
        <span className={styles.cardValue}>{activeB2B}개사</span>
      </div>
      <div className={styles.card}>
        <span className={styles.cardTitle}>일일 총 스탬프 달성률</span>
        <span className={styles.cardValue}>{avgRoutine}%</span>
      </div>
    </div>
  );
}
