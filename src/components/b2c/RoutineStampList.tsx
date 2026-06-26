'use client';
import { useState } from 'react';
import styles from './RoutineStampList.module.css';

export default function RoutineStampList() {
  const [stamps, setStamps] = useState([true, true, false, false, false]);

  const handleCheckRoutine = () => {
    const nextIndex = stamps.findIndex(s => !s);
    if (nextIndex !== -1) {
      const newStamps = [...stamps];
      newStamps[nextIndex] = true;
      setStamps(newStamps);
      alert('스탬프가 적립되었습니다! (+50 XP)');
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2 className={styles.title}>일일 루틴 달성</h2>
        <span className={styles.xpBadge}>4,500 XP</span>
      </div>
      
      <div className={styles.stampGrid}>
        {stamps.map((isDone, idx) => (
          <div key={idx} className={`${styles.stamp} ${isDone ? styles.active : ''}`}>
            {isDone ? '✓' : ''}
          </div>
        ))}
      </div>

      <button className={styles.actionBtn} onClick={handleCheckRoutine}>
        오늘의 루틴 완료하기
      </button>
    </div>
  );
}
