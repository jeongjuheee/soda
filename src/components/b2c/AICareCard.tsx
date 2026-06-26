'use client';
import styles from './AICareCard.module.css';
import { mockB2CUsers } from '@/lib/mockData';

export default function AICareCard() {
  const user = mockB2CUsers[0]; // 데모용 첫번째 유저 고정

  return (
    <div className={`${styles.card} glass`}>
      <h2 className={styles.header}>오늘의 AI 감정 케어 💙</h2>
      <p className={styles.aiMessage}>"{user.aiReport}"</p>
    </div>
  );
}
