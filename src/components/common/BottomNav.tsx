'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, MessageSquare, Briefcase, Building, Zap, Lightbulb, User, Users, Inbox, Compass } from 'lucide-react';
import styles from './BottomNav.module.css';

export default function BottomNav() {
  const pathname = usePathname();

  // 루트나 어드민은 네비게이션을 숨김
  if (pathname === '/' || pathname.includes('/admin')) return null;

  const isB2B = pathname.includes('/b2b');
  const iconSize = 22;
  const strokeW = 1.5;

  if (isB2B) {
    return (
      <div className={styles.navWrapper}>
        <nav className={styles.nav}>
          <Link href="/b2b/dashboard" className={`${styles.navItem} ${pathname === '/b2b/dashboard' ? styles.active : ''}`}>
            <Home size={iconSize} strokeWidth={strokeW} className={styles.icon} />
            <div className={styles.navDot} />
          </Link>
          <Link href="/b2b/search" className={`${styles.navItem} ${pathname.includes('/b2b/search') ? styles.active : ''}`}>
            <Compass size={iconSize} strokeWidth={strokeW} className={styles.icon} />
            <div className={styles.navDot} />
          </Link>
          <Link href="/b2b/talk" className={`${styles.navItem} ${pathname.includes('/b2b/talk') ? styles.active : ''}`}>
            <Inbox size={iconSize} strokeWidth={strokeW} className={styles.icon} />
            <div className={styles.navDot} />
          </Link>
          <Link href="/b2b/insight" className={`${styles.navItem} ${pathname.includes('/b2b/insight') ? styles.active : ''}`}>
            <Lightbulb size={iconSize} strokeWidth={strokeW} className={styles.icon} />
            <div className={styles.navDot} />
          </Link>
          <Link href="/b2b/mypage" className={`${styles.navItem} ${pathname.includes('/b2b/mypage') ? styles.active : ''}`}>
            <User size={iconSize} strokeWidth={strokeW} className={styles.icon} />
            <div className={styles.navDot} />
          </Link>
        </nav>
      </div>
    );
  }

  // B2C 개인용 5개 탭 매핑
  return (
    <div className={styles.navWrapper}>
      <nav className={styles.nav}>
        <Link href="/b2c/dashboard" className={`${styles.navItem} ${pathname === '/b2c/dashboard' ? styles.active : ''}`}>
          <Home size={iconSize} strokeWidth={strokeW} className={styles.icon} />
          <div className={styles.navDot} />
        </Link>
        <Link href="/b2c/challenge" className={`${styles.navItem} ${pathname.includes('/b2c/challenge') ? styles.active : ''}`}>
          <Zap size={iconSize} strokeWidth={strokeW} className={styles.icon} />
          <div className={styles.navDot} />
        </Link>
        <Link href="/b2c/insight" className={`${styles.navItem} ${pathname.includes('/b2c/insight') ? styles.active : ''}`}>
          <Lightbulb size={iconSize} strokeWidth={strokeW} className={styles.icon} />
          <div className={styles.navDot} />
        </Link>
        <Link href="/b2c/jobs" className={`${styles.navItem} ${pathname.includes('/b2c/jobs') ? styles.active : ''}`}>
          <Briefcase size={iconSize} strokeWidth={strokeW} className={styles.icon} />
          <div className={styles.navDot} />
        </Link>
        <Link href="/b2c/mypage" className={`${styles.navItem} ${pathname.includes('/b2c/mypage') ? styles.active : ''}`}>
          <User size={iconSize} strokeWidth={strokeW} className={styles.icon} />
          <div className={styles.navDot} />
        </Link>
      </nav>
    </div>
  );
}
