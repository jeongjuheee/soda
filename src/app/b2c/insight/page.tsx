'use client';
import { useState, useMemo } from 'react';
import InsightDetailModal from '@/components/b2c/InsightDetailModal';
import { INSIGHT_MOCK_DATA, InsightArticle } from '@/data/insightMockData';

export default function InsightTab() {
  const [filter, setFilter] = useState('전체');
  const filters = ['전체', '커리어', '루틴', '트렌드'];
  
  // 북마크 상태 (ID 기준 매핑)
  const [bookmarks, setBookmarks] = useState<Record<string, boolean>>({});
  
  // 상세 모달 상태
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // 상단 맞춤 추천 데이터 (우선순위: highlight=true 인 것들)
  const recommendedInsights = INSIGHT_MOCK_DATA.slice(0, 2);

  // 하단 아티클 필터링 적용 (추천에 들어간 것 제외 여부는 기획에 따라 다르지만, 여기선 전부 노출)
  const articleList = useMemo(() => {
    let list = INSIGHT_MOCK_DATA.filter(item => !item.highlight);
    if (filter !== '전체') {
      list = list.filter(item => item.category === filter);
    }
    return list;
  }, [filter]);

  const toggleBookmark = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    setBookmarks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const openDetail = (article: InsightArticle) => {
    setSelectedArticle(article);
    setIsDetailOpen(true);
  };

  // 카테고리별 스타일 헬퍼
  const getCategoryStyles = (cat: string) => {
    switch (cat) {
      case '크래프트': return { bg: '#EEF2FE', color: '#4A7BF0' };
      case '트렌드': return { bg: '#FFF6DE', color: '#C99100' };
      case '직무탐색': return { bg: '#F4F4F7', color: '#6B6B73' };
      case '커리어': return { bg: '#FFF6DE', color: '#C99100' };
      case '루틴': return { bg: '#E8F7EE', color: '#28A745' };
      default: return { bg: '#EEF2FE', color: '#4A7BF0' };
    }
  };

  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
        
        {/* 1. 상단 타이틀 */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h1 style={{ fontSize: '22px', fontWeight: 700, margin: 0, color: '#1A1A1E' }}>인사이트</h1>
          <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#F4F4F7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="7" stroke="#57575F" strokeWidth="1.8"/>
              <path d="M16.5 16.5L21 21" stroke="#57575F" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </div>
        </div>

        {/* 2. 오늘의 추천 섹션 (가로 스크롤) */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <div style={{ fontSize: '13px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '5px' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 3L14.5 9.2L21 9.8L16 14.1L17.5 20.5L12 17L6.5 20.5L8 14.1L3 9.8L9.5 9.2L12 3Z" stroke="#4A7BF0" strokeWidth="1.8" strokeLinejoin="round"/></svg>
              오늘의 추천
            </div>
            <span style={{ fontSize: '10.5px', color: '#9B9BA3', fontWeight: 700 }}>전체보기 →</span>
          </div>
          
          <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '4px', margin: '0 -24px', paddingLeft: '24px', paddingRight: '24px', scrollbarWidth: 'none' }}>
            {recommendedInsights.map(item => (
              <div 
                key={item.id} 
                onClick={() => openDetail(item)}
                style={{ 
                  minWidth: '168px', maxWidth: '168px', background: '#fff', border: item.highlight ? '2px solid #4A7BF0' : '1px solid #F0EFF5', 
                  borderRadius: '18px', padding: '13px', flexShrink: 0, cursor: 'pointer' 
                }}
              >
                {item.highlight ? (
                  <div style={{ display: 'inline-block', fontSize: '9px', fontWeight: 800, color: '#4A7BF0', background: '#EEF2FE', padding: '3px 8px', borderRadius: '7px', marginBottom: '7px' }}>
                    맞춤 추천
                  </div>
                ) : (
                  <div style={{ display: 'inline-block', fontSize: '9px', fontWeight: 800, color: getCategoryStyles(item.category).color, background: getCategoryStyles(item.category).bg, padding: '3px 8px', borderRadius: '7px', marginBottom: '7px' }}>
                    {item.category}
                  </div>
                )}
                <div style={{ fontSize: '12px', fontWeight: 800, lineHeight: 1.4, marginBottom: '8px', minHeight: '34px', color: '#1A1A1E' }}>
                  {item.title}
                </div>
                <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap' }}>
                  {item.tags.slice(0, 2).map(tag => (
                    <span key={tag} style={{ fontSize: '9px', fontWeight: 700, color: '#6B6B73', background: '#F4F4F7', padding: '3px 8px', borderRadius: '7px' }}>
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. 카테고리 필터 (가로 스크롤) */}
        <div style={{ display: 'flex', gap: '7px', overflowX: 'auto', scrollbarWidth: 'none', margin: '0 -24px', paddingLeft: '24px', paddingRight: '24px' }}>
          {filters.map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              style={{ 
                padding: '8px 15px', 
                borderRadius: '13px',
                fontSize: '11px',
                fontWeight: 700,
                background: filter === f ? '#4A7BF0' : '#F4F4F7',
                color: filter === f ? '#FFF' : '#9B9BA3',
                border: 'none',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                cursor: 'pointer'
              }}
            >
              {f}
            </button>
          ))}
        </div>

        {/* 4. 아티클 리스트 (세로 카드) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {articleList.map(item => {
            const catStyle = getCategoryStyles(item.category);
            const isSaved = bookmarks[item.id] || false;
            return (
              <div 
                key={item.id} 
                onClick={() => openDetail(item)}
                style={{ background: '#fff', border: '1px solid #F0EFF5', borderRadius: '20px', padding: '15px', display: 'flex', flexDirection: 'column', gap: '10px', cursor: 'pointer' }}
              >
                <div>
                  <div style={{ fontSize: '9.5px', fontWeight: 800, color: catStyle.color, background: catStyle.bg, padding: '3px 9px', borderRadius: '8px', display: 'inline-block', marginBottom: '6px' }}>
                    {item.category}
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 800, lineHeight: 1.4, color: '#1A1A1E', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {item.title}
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '5px' }}>
                    {item.tags.slice(0, 2).map(tag => (
                      <span key={tag} style={{ fontSize: '9.5px', fontWeight: 700, color: '#6B6B73', background: '#F4F4F7', padding: '4px 9px', borderRadius: '8px' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button 
                    onClick={(e) => toggleBookmark(e, item.id)}
                    style={{ background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', padding: 0 }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill={isSaved ? "#4A7BF0" : "none"}>
                      <path d="M6 4C6 3.4 6.4 3 7 3H17C17.6 3 18 3.4 18 4V21L12 17L6 21V4Z" stroke={isSaved ? "#4A7BF0" : "#C5C5CC"} strokeWidth="1.8" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
          {articleList.length === 0 && (
            <div style={{ textAlign: 'center', padding: '40px 0', color: '#9B9BA3', fontSize: '12px' }}>해당 카테고리의 아티클이 없습니다.</div>
          )}
        </div>

      </div>

      {/* 모달 렌더링 */}
      <InsightDetailModal 
        isOpen={isDetailOpen} 
        onClose={() => setIsDetailOpen(false)} 
        article={selectedArticle}
      />
    </div>
  );
}
