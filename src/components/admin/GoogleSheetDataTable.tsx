'use client';
import { useState } from 'react';
import { mockB2CUsers, mockB2BCompanies, B2CUser, B2BCompany } from '@/lib/mockData';
import styles from './GoogleSheetDataTable.module.css';

export default function GoogleSheetDataTable() {
  const [b2cUsers, setB2cUsers] = useState<B2CUser[]>(mockB2CUsers);
  const [b2bCompanies, setB2bCompanies] = useState<B2BCompany[]>(mockB2BCompanies);

  const updateB2CStatus = (id: string, newStatus: B2CUser['status']) => {
    setB2cUsers(prev => prev.map(u => u.id === id ? { ...u, status: newStatus } : u));
    alert(`[Google Sheets API] 행이 ${newStatus} 상태로 UPDATE 되었습니다.`);
  };

  const updateB2BStatus = (id: string, newStatus: B2BCompany['status']) => {
    setB2bCompanies(prev => prev.map(c => c.id === id ? { ...c, status: newStatus } : c));
    alert(`[Google Sheets API] 행이 ${newStatus} 상태로 UPDATE 되었습니다.`);
  };

  return (
    <>
      <div className={styles.tableContainer}>
        <div className={styles.tableHeader}>
          <h2 className={styles.tableTitle}>B2C 유저 관리 (B2C_Users 탭 연동 Mock)</h2>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>유저명</th>
              <th>루틴 달성률</th>
              <th>성실도(XP)</th>
              <th>현재 상태</th>
              <th>액션</th>
            </tr>
          </thead>
          <tbody>
            {b2cUsers.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.routineRate}%</td>
                <td>{user.xp} XP</td>
                <td>
                  <span className={`${styles.statusBadge} ${styles['status_' + user.status]}`}>
                    {user.status}
                  </span>
                </td>
                <td>
                  {user.status !== '승인완료' && (
                    <button className={`${styles.actionBtn} ${styles.btnApprove}`} onClick={() => updateB2CStatus(user.id, '승인완료')}>승인</button>
                  )}
                  {user.status !== '블랙리스트' && (
                    <button className={`${styles.actionBtn} ${styles.btnBan}`} onClick={() => updateB2CStatus(user.id, '블랙리스트')}>강제 탈퇴</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.tableContainer}>
        <div className={styles.tableHeader}>
          <h2 className={styles.tableTitle}>B2B 기업 관리 (B2B_Companies 탭 연동 Mock)</h2>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>기업명</th>
              <th>사업자번호</th>
              <th>퇴사율</th>
              <th>체불이력</th>
              <th>현재 상태</th>
              <th>액션</th>
            </tr>
          </thead>
          <tbody>
            {b2bCompanies.map(comp => (
              <tr key={comp.id}>
                <td>{comp.name} {comp.hasCleanBadge ? '🛡️' : ''}</td>
                <td>{comp.businessNumber}</td>
                <td>{comp.resignationRate}%</td>
                <td>{comp.unpaidWageCount}건</td>
                <td>
                  <span className={`${styles.statusBadge} ${styles['status_' + comp.status]}`}>
                    {comp.status}
                  </span>
                </td>
                <td>
                  {comp.status !== '승인완료' && (
                    <button className={`${styles.actionBtn} ${styles.btnApprove}`} onClick={() => updateB2BStatus(comp.id, '승인완료')}>승인</button>
                  )}
                  {comp.status !== '블랙리스트' && (
                    <button className={`${styles.actionBtn} ${styles.btnBan}`} onClick={() => updateB2BStatus(comp.id, '블랙리스트')}>블랙리스트</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
