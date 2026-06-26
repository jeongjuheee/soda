'use client';
import { B2CUser } from '@/lib/mockData';
import styles from './TalentCard.module.css';

interface Props {
  user: B2CUser;
  onClick: (user: B2CUser) => void;
}

export default function TalentCard({ user, onClick }: Props) {
  const maskedName = user.name.length > 2 
    ? `${user.name[0]}*${user.name[user.name.length - 1]}` 
    : `${user.name[0]}*`;

  // 추천인재 로직 (매칭률 85 이상 & 경력 2년 미만)
  const isRecommended = user.matchRate >= 85 && (user.experience.includes('신입') || user.experience.includes('1년'));

  return (
    <div className={styles.card} onClick={() => onClick(user)}>
      <div className={styles.header}>
        <div className={styles.name}>
          {maskedName}
          {isRecommended && <span style={{ marginLeft: '8px', fontSize: '12px', background: '#FFF3CD', color: '#856404', padding: '2px 8px', borderRadius: '12px' }}>🔥 추천인재</span>}
        </div>
        <div className={styles.matchRate}>매칭률 {user.matchRate}%</div>
      </div>

      <div className={styles.stats}>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>목표 직무</span>
          <span className={styles.statValue}>{user.careerGoal} ({user.experience})</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>루틴 달성률</span>
          <span className={styles.statValue}>{user.routineRate}%</span>
        </div>
      </div>

      <div className={styles.keywords}>
        {user.keywords.map((kw, i) => (
          <span key={i} className={styles.keywordChip}>#{kw}</span>
        ))}
      </div>

      <button className={styles.proposeBtn} onClick={(e) => { e.stopPropagation(); onClick(user); }}>
        상세 이력 보기
      </button>
    </div>
  );
}
