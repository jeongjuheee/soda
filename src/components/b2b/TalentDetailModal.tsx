'use client';
import { B2CUser } from '@/lib/mockData';
import styles from './TalentDetailModal.module.css';

interface Props {
  user: B2CUser;
  onClose: () => void;
  onPropose: () => void;
}

export default function TalentDetailModal({ user, onClose, onPropose }: Props) {
  const maskedName = user.name.length > 2 
    ? `${user.name[0]}*${user.name[user.name.length - 1]}` 
    : `${user.name[0]}*`;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.name}>{maskedName}</h2>
          <div className={styles.careerInfo}>
            {user.careerGoal} ({user.experience}) • 매칭률 {user.matchRate}%
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>📝 자소서 및 경력 요약</h3>
          <div className={styles.textBox}>{user.resume}</div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>💡 AI 면접관 역량 분석 코멘트</h3>
          <div className={styles.aiBox}>{user.aiReport}</div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>🔗 포트폴리오 (제안 수락 시 열람 가능)</h3>
          <div className={styles.textBox} style={{ filter: 'blur(4px)', userSelect: 'none' }}>
            https://portfolio.soda.io/hidden_link
          </div>
        </div>

        <div className={styles.actionGroup}>
          <button className={`${styles.btn} ${styles.cancelBtn}`} onClick={onClose}>닫기</button>
          <button className={`${styles.btn} ${styles.proposeBtn}`} onClick={onPropose}>소다 톡 채용 제안</button>
        </div>
      </div>
    </div>
  );
}
