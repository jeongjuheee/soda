'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Zap, Star, Briefcase, User, Users, Inbox, Building2 } from 'lucide-react';

export default function BottomNav() {
  const pathname = usePathname();

  if (pathname === '/' || pathname.includes('/admin')) return null;

  const isB2B = pathname.includes('/b2b');
  const iconSize = 24;
  const strokeW = 1.8;

  const navItems = isB2B ? [
    { name: '홈', path: '/b2b/dashboard', icon: Home },
    { name: '인재풀', path: '/b2b/search', icon: Users },
    { name: '메시지', path: '/b2b/talk', icon: Inbox },
    { name: '인사이트', path: '/b2b/insight', icon: Star },
    { name: '마이', path: '/b2b/mypage', icon: Building2 }
  ] : [
    { name: '홈', path: '/b2c/dashboard', icon: Home },
    { name: '챌린지', path: '/b2c/challenge', icon: Zap },
    { name: '인사이트', path: '/b2c/insight', icon: Star },
    { name: '채용', path: '/b2c/job', icon: Briefcase },
    { name: '마이', path: '/b2c/mypage', icon: User }
  ];

  return (
    <div style={{
      position: 'fixed',
      bottom: '30px', // 플로팅 효과
      left: '50%',
      transform: 'translateX(-50%)',
      width: 'calc(100% - 48px)',
      maxWidth: '382px',
      background: '#FFF',
      borderRadius: '40px', // 알약 형태
      boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
      padding: '8px 16px',
      zIndex: 50
    }}>
      <nav style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: '64px' }}>
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.path);
          const Icon = item.icon;
          
          return (
            <Link 
              key={item.name} 
              href={item.path} 
              style={{
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                gap: '6px',
                width: '60px',
                color: isActive ? 'var(--color-primary)' : '#9B9BA3',
                transition: 'all 0.2s'
              }}
            >
              <Icon size={iconSize} strokeWidth={isActive ? 2.5 : strokeW} />
              <span style={{ fontSize: '10px', fontWeight: 700 }}>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
