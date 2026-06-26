'use client';
import { B2BCompany } from '@/lib/mockData';
import styles from './CompanyDetailModal.module.css';

interface Props {
  company: B2BCompany;
  onClose: () => void;
}

export default function CompanyDetailModal({ company, onClose }: Props) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.content} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {company.name}
            {company.hasCleanBadge && <span className={styles.badge}>🛡️ SODA 클린</span>}
          </h2>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>투명성 데이터 (SODA 검증)</h3>
          <div className={styles.grid}>
            <div className={styles.dataBox}>
              <span className={styles.dataLabel}>최근 1년 퇴사율</span>
              <span className={`${styles.dataValue} ${company.resignationRate > 20 ? styles.warning : ''}`}>
                {company.resignationRate}%
              </span>
            </div>
            <div className={styles.dataBox}>
              <span className={styles.dataLabel}>임금 체불 이력</span>
              <span className={`${styles.dataValue} ${company.unpaidWageCount > 0 ? styles.warning : ''}`}>
                {company.unpaidWageCount}건
              </span>
            </div>
            <div className={styles.dataBox}>
              <span className={styles.dataLabel}>공고 등록 빈도</span>
              <span className={`${styles.dataValue} ${company.frequentPosting ? styles.warning : ''}`}>
                {company.frequentPosting ? '매우 잦음 (주의)' : '안정적'}
              </span>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>💡 AI 리뷰 요약</h3>
          <div className={styles.aiReview}>
            {company.reviewSummary}
          </div>
        </div>

        <button className={styles.closeBtn} onClick={onClose}>닫기</button>
      </div>
    </div>
  );
}
