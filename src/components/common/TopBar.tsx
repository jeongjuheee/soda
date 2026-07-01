'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Bell, User } from 'lucide-react';
import styles from './TopBar.module.css';

export default function TopBar() {
  const pathname = usePathname();

  // 루트 페이지나 어드민은 탑바 제외
  if (pathname === '/' || pathname.startsWith('/admin')) return null;

  return (
    <header className={styles.topBar}>
      <Link href={pathname.includes('/b2b') ? '/b2b/dashboard' : '/b2c/dashboard'} className={styles.logo}>
        soda
      </Link>
      <div className={styles.iconGroup} style={{ display: 'flex', gap: '12px' }}>
        <button style={{ 
          width: '36px', height: '36px', borderRadius: '50%', 
          border: '1.5px solid #E5E5EA', background: '#FFF',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          color: '#3A3A42'
        }}>
          <Bell size={18} strokeWidth={2} />
        </button>
        <button style={{ 
          width: '36px', height: '36px', borderRadius: '50%', 
          border: '1.5px solid #E5E5EA', background: '#FFF',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          color: '#3A3A42'
        }}>
          <User size={18} strokeWidth={2} />
        </button>
      </div>
    </header>
  );
}
