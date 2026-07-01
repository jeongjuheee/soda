'use client';
import { useState, useEffect } from 'react';
import MascotCharacter from '@/components/MascotCharacter';
import { Sparkles } from 'lucide-react';

export default function HomeDashboard() {
  const [exp, setExp] = useState(860);
  const [nickname, setNickname] = useState('소다');
  const [currentDate, setCurrentDate] = useState('0월 0일 요일');

  // 모의 루틴 데이터 상태
  const [routines, setRoutines] = useState([
    { id: 1, title: '오전 30분 독서', emoji: '📖', completed: true, exp: 10 },
    { id: 2, title: '포트폴리오 작업', emoji: '💻', completed: false, exp: 10 },
    { id: 3, title: '영어 섀도잉', emoji: '🗣️', completed: false, exp: 10 },
  ]);

  useEffect(() => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const days = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    const dayName = days[today.getDay()];
    setCurrentDate(`${month}월 ${date}일 ${dayName}`);
  }, []);

  const level = 3;
  const currentExp = exp;
  const maxExp = 1200;
  const remainExp = maxExp - currentExp;

  const completedCount = routines.filter(r => r.completed).length + 1; // 기획서 상 총 5개 중 이미 완료된 다른 항목들이 있다고 가정 (보이는 3개 외)
  const totalCount = 5;
  const hasIncomplete = routines.some(r => !r.completed);

  const handleComplete = (id: number, rewardExp: number) => {
    setRoutines(prev => prev.map(r => r.id === id ? { ...r, completed: true } : r));
    setExp(prev => prev + rewardExp);
  };

  return (
    <div style={{ padding: '24px 20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
      
      {/* 1. 상단 인사말 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: '11px', color: '#B0B0B8', fontWeight: 600 }}>{currentDate}</div>
          <h1 className="font-h1" style={{ margin: '2px 0 0', color: '#1A1A1E', fontSize: '18px', letterSpacing: '-0.3px' }}>오늘도 화이팅, {nickname}님</h1>
        </div>
      </div>

      {/* 2. 히어로 카드 */}
      <div style={{ 
        background: 'linear-gradient(160deg, #6E97F5, #3D63D6)', 
        borderRadius: '28px', 
        padding: '22px 18px 18px', 
        position: 'relative', 
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        
        {/* 상단 뱃지 & 이름 수정 */}
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ fontSize: '10.5px', fontWeight: 800, color: '#fff', background: 'rgba(255,255,255,0.2)', padding: '4px 10px', borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Sparkles size={10} fill="#FFF" strokeWidth={0} /> 반짝소다 · Lv.{level}
          </div>
          <button style={{ fontSize: '10px', color: '#E5ECFF', fontWeight: 700, border: 'none', background: 'none' }}>
            ✎ 이름 수정
          </button>
        </div>
        
        {/* 소다 캐릭터 */}
        <div style={{ padding: '8px 0 4px', cursor: 'pointer' }}>
          <MascotCharacter 
            exp={exp} 
            completedRoutines={completedCount} 
            totalRoutines={totalCount} 
            hasIncompleteRoutine={hasIncomplete}
            daysLeft={10}
            streakBroken={false}
          />
          <div style={{ background: 'rgba(255,255,255,0.95)', borderRadius: '14px', padding: '7px 12px', fontSize: '11px', fontWeight: 700, color: '#3661D6', marginTop: '6px', textAlign: 'center' }}>
            오늘 {totalCount - completedCount}개만 더 하면 완료야! 💪
          </div>
        </div>

        {/* 진행 바 */}
        <div style={{ width: '100%', marginTop: '12px' }}>
          <div style={{ width: '100%', height: '9px', background: 'rgba(255,255,255,0.22)', borderRadius: '10px', overflow: 'hidden', marginBottom: '6px' }}>
            <div style={{ width: `${(currentExp/maxExp)*100}%`, height: '100%', background: '#FFF', borderRadius: '10px' }}></div>
          </div>
          <div style={{ color: '#E5ECFF', fontSize: '10.5px', textAlign: 'center', fontWeight: 700 }}>
            {currentExp} / {maxExp} SP · 다음 진화까지 {remainExp} SP
          </div>
        </div>
      </div>

      {/* 쓰다듬기 힌트 */}
      <div style={{ textAlign: 'center', fontSize: '10px', color: '#9B9BA3', fontWeight: 600 }}>
        👆 소다를 탭해서 쓰다듬어 주세요
      </div>

      {/* 3. 오늘의 루틴 카드 */}
      <div style={{ background: '#fff', border: '1px solid #F0EFF5', borderRadius: '22px', padding: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <span style={{ fontSize: '13px', fontWeight: 800 }}>오늘의 루틴</span>
          <span style={{ fontSize: '11px', color: '#9B9BA3', fontWeight: 700 }}>{completedCount} / {totalCount} 완료</span>
        </div>
        
        {/* 진행 바 */}
        <div style={{ width: '100%', height: '7px', background: '#EEF0F5', borderRadius: '8px', marginBottom: '12px', overflow: 'hidden' }}>
          <div style={{ width: `${(completedCount/totalCount)*100}%`, height: '100%', borderRadius: '8px', background: 'linear-gradient(90deg, #7DA0F5, #4A7BF0)', transition: 'width 0.4s ease-out' }}></div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {routines.map((routine, index) => (
            <div key={routine.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 0', borderBottom: index < routines.length - 1 ? '1px solid #F6F6F9' : 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '11px', background: routine.completed ? '#EEF2FE' : '#F4F4F7', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '14px', flexShrink: 0, transition: 'background 0.3s' }}>
                  {routine.emoji}
                </div>
                <div>
                  <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#1A1A1E' }}>{routine.title}</div>
                  <div style={{ fontSize: '10px', color: '#B0B0B8', marginTop: '1px' }}>{routine.completed ? `+${routine.exp} SP 획득` : '미완료'}</div>
                </div>
              </div>
              
              {routine.completed ? (
                <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#4A7BF0' }}>완료 ✓</span>
              ) : (
                <button 
                  onClick={() => handleComplete(routine.id, routine.exp)}
                  style={{ fontSize: '10.5px', fontWeight: 800, color: '#fff', background: '#4A7BF0', padding: '7px 13px', borderRadius: '11px', border: 'none', cursor: 'pointer', transition: 'transform 0.1s' }}
                  onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
                  onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >인증</button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 4. 오늘의 인사이트 티저 카드 */}
      <div style={{ 
        background: 'linear-gradient(135deg, #EEF2FE, #E2EAFE)', 
        borderRadius: '22px', 
        padding: '16px', 
        display: 'flex', 
        alignItems: 'center', 
        gap: '12px' 
      }}>
        <Sparkles size={22} color="#5C78D6" strokeWidth={2} fill="#5C78D6" />
        <div>
          <div style={{ fontSize: '9.5px', fontWeight: 800, color: '#5C78D6', marginBottom: '2px' }}>오늘의 인사이트</div>
          <div style={{ fontSize: '12.5px', fontWeight: 800, color: '#1A1A1E' }}>공백기를 포트폴리오로 만드는 법</div>
        </div>
      </div>
      
    </div>
  );
}
