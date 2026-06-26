'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
      <div className={styles.iconGroup}>
        <span>🔔</span>
        <span>👤</span>
      </div>
    </header>
  );
}
