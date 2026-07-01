'use client';
import { useState } from 'react';
import MiniMascot from '@/components/MiniMascot';
import BottomSheet, { ChallengeData } from '@/components/BottomSheet';

export default function ChallengePage() {
  const [activeTab, setActiveTab] = useState('진행중');
  
  const [joinedList, setJoinedList] = useState<ChallengeData[]>([
    { 
      id: 1, category: '자기계발', title: '매일 30분 독서 챌린지', joinedCount: 1204, 
      targetDays: 30, joinedDays: 18, reward: 50, streak: 6, 
      history: ['done','done','done','done','done','done','today','future','future','future'], isDoneToday: false 
    }
  ]);

  const [recoList, setRecoList] = useState<ChallengeData[]>([
    { 
      id: 2, category: '운동', title: '주 3회 러닝 챌린지', joinedCount: 890, 
      targetDays: 21, joinedDays: 0, reward: 30, streak: 0, 
      history: ['today','future','future','future','future','future','future','future','future','future'], isDoneToday: false 
    },
    { 
      id: 3, category: '커리어', title: '매일 1커밋 챌린지', joinedCount: 2310, 
      targetDays: 100, joinedDays: 0, reward: 150, streak: 0, 
      history: ['today','future','future','future','future','future','future','future','future','future'], isDoneToday: false 
    }
  ]);

  const [selectedChallenge, setSelectedChallenge] = useState<ChallengeData | null>(null);
  const [toastMsg, setToastMsg] = useState('');

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(''), 3000);
  };

  const handleJoin = (challenge: ChallengeData) => {
    // 1. 추천 리스트에서 삭제
    setRecoList(prev => prev.filter(c => c.id !== challenge.id));
    // 2. 참여중 리스트 최상단에 추가
    setJoinedList(prev => [challenge, ...prev]);
    // 3. 스크롤 맨 위로 (Smooth scroll)
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast('챌린지에 참여했습니다!');
  };

  const handleCertify = (id: number) => {
    setJoinedList(prev => prev.map(c => {
      if (c.id === id) {
        const newHistory = [...c.history];
        const todayIdx = newHistory.indexOf('today');
        if (todayIdx !== -1) {
          newHistory[todayIdx] = 'done';
          if (todayIdx + 1 < newHistory.length) newHistory[todayIdx + 1] = 'today';
        }
        return { ...c, joinedDays: c.joinedDays + 1, streak: c.streak + 1, isDoneToday: true, history: newHistory as ChallengeData['history'] };
      }
      return c;
    }));
    
    // 선택된 데이터도 업데이트
    setSelectedChallenge(prev => {
      if (!prev) return null;
      const newHistory = [...prev.history];
      const todayIdx = newHistory.indexOf('today');
      if (todayIdx !== -1) {
        newHistory[todayIdx] = 'done';
        if (todayIdx + 1 < newHistory.length) newHistory[todayIdx + 1] = 'today';
      }
      return { ...prev, joinedDays: prev.joinedDays + 1, streak: prev.streak + 1, isDoneToday: true, history: newHistory as ChallengeData['history'] };
    });

    showToast('오늘 루틴 인증을 완료했습니다! 🎉');
    setSelectedChallenge(null); // 바텀시트 닫기
  };

  const handleLeave = (id: number) => {
    setJoinedList(prev => prev.filter(c => c.id !== id));
    showToast('챌린지를 그만두었습니다.');
  };

  const getCatColor = (cat: string) => {
    if (cat === '커리어') return { bg: '#FFF6DE', text: '#F2A900' };
    if (cat === '운동') return { bg: '#EAF8F1', text: '#219653' };
    return { bg: '#EEF2FE', text: '#4A7BF0' };
  };

  return (
    <div style={{ padding: '24px 20px', minHeight: '100vh', background: 'var(--color-bg-app)', paddingBottom: '100px' }}>
      {/* 토스트 메시지 */}
      <div style={{
        position: 'fixed', top: '20px', left: '50%', transform: `translate(-50%, ${toastMsg ? '0' : '-50px'})`,
        opacity: toastMsg ? 1 : 0, transition: 'all 0.3s ease',
        background: '#1A1A1E', color: '#fff', padding: '12px 20px', borderRadius: '12px', fontSize: '12px', fontWeight: 700, zIndex: 1000, pointerEvents: 'none', boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
      }}>
        {toastMsg}
      </div>

      <div style={{ fontSize: '18px', fontWeight: 800, marginBottom: '20px' }}>챌린지</div>

      {/* 미니 펫 위젯 */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'linear-gradient(135deg, #EEF2FE, #E2EAFE)', borderRadius: '20px', padding: '13px 15px', marginBottom: '20px' }}>
        <MiniMascot />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '12.5px', fontWeight: 800 }}>반짝소다 Lv.3 · 860 SP</div>
          <div style={{ background: '#D7E0FB', borderRadius: '8px', height: '6px', marginTop: '7px', overflow: 'hidden' }}>
            <div style={{ height: '100%', background: '#4A7BF0', borderRadius: '8px', width: '72%' }} />
          </div>
          <div style={{ fontSize: '9.5px', color: '#7A8BB5', marginTop: '4px', fontWeight: 600 }}>다음 진화까지 340 SP 남음</div>
        </div>
      </div>

      {/* 탭 필 */}
      <div style={{ display: 'flex', gap: '7px', marginBottom: '24px' }}>
        {['진행중', '완료', '전체'].map(tab => (
          <button 
            key={tab} onClick={() => setActiveTab(tab)}
            style={{ 
              fontSize: '11px', fontWeight: 700, padding: '8px 14px', borderRadius: '13px', border: 'none', cursor: 'pointer', transition: 'all 0.2s',
              background: activeTab === tab ? '#4A7BF0' : '#F4F4F7', color: activeTab === tab ? '#fff' : '#9B9BA3'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div style={{ fontSize: '12.5px', fontWeight: 800, color: '#3A3A42', marginBottom: '14px' }}>참여중인 챌린지</div>

      {/* 참여중 리스트 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
        {joinedList.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '24px 16px', color: '#B0B0B8', fontSize: '11.5px', background: '#FAFAFC', borderRadius: '18px', border: '1.5px dashed #E5E5EA' }}>
            아직 참여중인 챌린지가 없어요.<br/>아래에서 새로운 챌린지를 찾아보세요!
          </div>
        ) : (
          joinedList.map(item => {
            const pct = Math.round((item.joinedDays / item.targetDays) * 100);
            return (
              <div key={item.id} onClick={() => setSelectedChallenge(item)} style={{ background: '#fff', border: '1px solid #F0EFF5', borderRadius: '20px', padding: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}>
                <div>
                  <div style={{ fontSize: '9.5px', fontWeight: 800, color: getCatColor(item.category).text, background: getCatColor(item.category).bg, padding: '3px 9px', borderRadius: '8px', display: 'inline-block', marginBottom: '6px' }}>
                    {item.category}
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 800 }}>{item.title}</div>
                  <div style={{ fontSize: '10.5px', color: '#9B9BA3', marginTop: '3px' }}>D-{item.targetDays - item.joinedDays} 남음 · {item.joinedCount.toLocaleString()}명 참여중</div>
                </div>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: `conic-gradient(#4A7BF0 ${pct}%, #F0F0F4 0)` }}>
                  <div style={{ width: '34px', height: '34px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '9.5px', fontWeight: 800, color: '#4A7BF0' }}>
                    {pct}%
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
        <div style={{ fontSize: '12.5px', fontWeight: 800, color: '#3A3A42' }}>이런 챌린지는 어때요?</div>
        <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#9B9BA3' }}>전체보기 →</div>
      </div>

      {/* 추천 리스트 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {recoList.map(item => (
          <div key={item.id} style={{ background: '#fff', border: '2px solid #EEF2FE', borderRadius: '20px', padding: '16px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '10.5px', fontWeight: 800, color: getCatColor(item.category).text, background: getCatColor(item.category).bg, padding: '5px 11px', borderRadius: '10px', marginBottom: '10px' }}>
              {item.category}
            </div>
            <div style={{ fontSize: '14px', fontWeight: 800, marginBottom: '10px' }}>{item.title}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '6px' }}>
                <span style={{ fontSize: '10px', fontWeight: 700, color: '#6B6B73', background: '#F4F4F7', padding: '5px 10px', borderRadius: '9px' }}>+{item.reward} SP</span>
                <span style={{ fontSize: '10px', fontWeight: 700, color: '#6B6B73', background: '#F4F4F7', padding: '5px 10px', borderRadius: '9px' }}>{item.targetDays}일 완주</span>
              </div>
              <button 
                onClick={() => handleJoin(item)}
                style={{ fontSize: '11px', fontWeight: 800, color: '#fff', background: '#4A7BF0', padding: '9px 18px', borderRadius: '12px', border: 'none', cursor: 'pointer' }}
              >
                참여
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 바텀시트 모달 */}
      <BottomSheet 
        isOpen={!!selectedChallenge} 
        onClose={() => setSelectedChallenge(null)} 
        challenge={selectedChallenge} 
        onCertify={handleCertify}
        onLeave={handleLeave}
      />
    </div>
  );
}
