'use client';
import { useState } from 'react';
import { mockB2CUsers, B2CUser } from '@/lib/mockData';
import TalentCard from './TalentCard';
import TalentDetailModal from './TalentDetailModal';
import styles from './TalentSearchGrid.module.css';

export default function TalentSearchGrid() {
  const [filter, setFilter] = useState<'ALL' | 'HIGH_MATCH'>('ALL');
  const [selectedUser, setSelectedUser] = useState<B2CUser | null>(null);

  // 승인된 유저만 노출
  const approvedUsers = mockB2CUsers.filter(u => u.status === '승인완료');
  
  const displayedUsers = filter === 'HIGH_MATCH' 
    ? approvedUsers.filter(u => u.matchRate >= 85)
    : approvedUsers;

  const handleCardClick = (user: B2CUser) => {
    setSelectedUser(user);
  };

  const handlePropose = () => {
    if (selectedUser) {
      alert(`${selectedUser.name}님에게 다이렉트 채용 제안(소다 톡)을 발송했습니다!`);
    }
    setSelectedUser(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.filterSection}>
        <h3 className={styles.filterTitle}>조건에 맞는 인재 서칭</h3>
        <div className={styles.chipGroup}>
          <button 
            className={`${styles.chip} ${filter === 'ALL' ? styles.active : ''}`}
            onClick={() => setFilter('ALL')}
          >
            전체 보기
          </button>
          <button 
            className={`${styles.chip} ${filter === 'HIGH_MATCH' ? styles.active : ''}`}
            onClick={() => setFilter('HIGH_MATCH')}
          >
            AI 매칭률 85% 이상 🎯
          </button>
        </div>
      </div>

      <div className={styles.grid}>
        {displayedUsers.map(user => (
          <TalentCard key={user.id} user={user} onClick={handleCardClick} />
        ))}
      </div>

      {selectedUser && (
        <TalentDetailModal user={selectedUser} onClose={() => setSelectedUser(null)} onPropose={handlePropose} />
      )}
    </div>
  );
}
