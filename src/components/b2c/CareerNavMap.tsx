'use client';
import { mockB2CUsers } from '@/lib/mockData';
import styles from './CareerNavMap.module.css';

export default function CareerNavMap() {
  const user = mockB2CUsers[0];

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>내 커리어 목표: {user.careerGoal}</h2>
      
      <div className={styles.map}>
        <div className={styles.line}></div>
        <div className={`${styles.step} ${styles.active}`}>
          <div className={styles.dot}>1</div>
          <span className={styles.label}>이력서/포폴 등록</span>
        </div>
        <div className={`${styles.step} ${styles.active}`}>
          <div className={styles.dot}>2</div>
          <span className={styles.label}>루틴/역량 챌린지</span>
        </div>
        <div className={styles.step}>
          <div className={styles.dot}>3</div>
          <span className={styles.label}>클린 기업 매칭</span>
        </div>
      </div>

      <div className={styles.aiCoach}>
        💡 AI 코치: 현재 {user.careerGoal} 달성을 위해 포트폴리오를 작성하셨습니다! 부족한 "프로젝트 리딩" 역량을 키우기 위한 맞춤형 루틴을 매일 달성해보세요.
      </div>
    </div>
  );
}
