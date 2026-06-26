'use client';
import { useState } from 'react';
import { mockB2BCompanies, B2BCompany } from '@/lib/mockData';
import CompanyDetailModal from './CompanyDetailModal';
import styles from './JobPostingList.module.css';

export default function JobPostingList() {
  const [selectedCompany, setSelectedCompany] = useState<B2BCompany | null>(null);

  // 진행 중인 공고가 있는 승인된 기업만 필터링
  const companiesWithJobs = mockB2BCompanies.filter(c => c.status === '승인완료' && c.openPositions.length > 0);

  return (
    <div className={styles.card}>
      <h2 className={styles.header}>맞춤 채용 공고</h2>
      
      {companiesWithJobs.map(company => (
        company.openPositions.map(job => (
          <div key={job.id} className={styles.jobItem} onClick={() => setSelectedCompany(company)}>
            <div className={styles.jobTitle}>{job.title}</div>
            <div className={styles.companyName}>
              {company.name} 
              {company.hasCleanBadge && <span className={styles.badge}>🛡️ 클린 기업</span>}
            </div>
          </div>
        ))
      ))}

      {selectedCompany && (
        <CompanyDetailModal company={selectedCompany} onClose={() => setSelectedCompany(null)} />
      )}
    </div>
  );
}
