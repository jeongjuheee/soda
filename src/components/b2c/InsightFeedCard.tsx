'use client';
import { useState } from 'react';
import styles from './InsightFeedCard.module.css';

export default function InsightFeedCard() {
  const [isRead, setIsRead] = useState(false);

  const handleRead = () => {
    setIsRead(true);
    alert('읽기 완료! 스탬프가 지급되었습니다.');
  };

  return (
    <div className={styles.card}>
      <h2 className={styles.header}>알고리즘 탈출 인사이트</h2>
      
      <div className={styles.feedImage}>
        <span>UI/UX 주니어 디자이너의 포트폴리오 전략</span>
      </div>

      <h3 className={styles.title}>서류 합격률을 3배 높이는 포트폴리오 구조화 기법</h3>
      <p className={styles.excerpt}>
        단순히 예쁜 디자인을 넘어, 문제 정의와 해결 과정을 논리적으로 풀어내는 방식에 대해 알아봅니다...
      </p>

      <button 
        className={`${styles.readBtn} ${isRead ? styles.done : ''}`} 
        onClick={handleRead}
        disabled={isRead}
      >
        {isRead ? '읽기 완료' : '본문 읽고 스탬프 받기'}
      </button>
    </div>
  );
}
