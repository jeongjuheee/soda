'use client';
import { useEffect, useState, useMemo } from 'react';
import { InsightArticle } from '@/data/insightMockData';
import { useRouter } from 'next/navigation';

interface InsightDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: InsightArticle | null;
}

export default function InsightDetailModal({ isOpen, onClose, article }: InsightDetailModalProps) {
  const router = useRouter();
  const [isBookmarked, setIsBookmarked] = useState(false);

  // 리셋 북마크 상태 (실제 앱에서는 전역 상태 관리 필요)
  useEffect(() => {
    setIsBookmarked(false);
  }, [article?.id]);

  // 읽는 시간 계산 (400자 = 1분)
  const readingTimeMin = useMemo(() => {
    if (!article) return 0;
    const totalChars = article.bodyBlocks.reduce((acc, block) => acc + block.text.length, 0);
    return Math.max(1, Math.ceil(totalChars / 400));
  }, [article]);

  // 카테고리 컬러 프리셋
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

  // 경량 마크다운 파서 (**텍스트** -> <strong>텍스트</strong>)
  const renderMarkdown = (text: string) => {
    // split by **
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return (
      <>
        {parts.map((part, index) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={index} style={{ color: '#1A1A1E' }}>{part.slice(2, -2)}</strong>;
          }
          return part;
        })}
      </>
    );
  };

  const handleCtaClick = () => {
    if (article?.relatedChallengeId) {
      // 챌린지 탭으로 이동 (실무에선 ?challengeId=xxx 형태로 라우팅 가능)
      router.push('/b2c/challenge');
      onClose(); // 이동 후 모달 닫기
    } else {
      router.push('/b2c/challenge');
      onClose();
    }
  };

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: '0 auto',
        width: '100%',
        maxWidth: '430px',
        background: '#fff',
        zIndex: 100, // 하단 바를 완벽하게 덮기 위해 20 이상
        display: 'flex',
        flexDirection: 'column',
        transform: isOpen ? 'translateX(0)' : 'translateX(100vw)',
        transition: 'transform 0.32s cubic-bezier(0.32, 0.72, 0, 1)',
        visibility: isOpen ? 'visible' : 'hidden', // 안 보일 때 터치 방지
        overflowY: 'auto'
      }}
    >
      {article && (
        <>
          {/* Header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 18px 4px', position: 'sticky', top: 0, background: '#fff', zIndex: 10 }}>
            <button 
              onClick={onClose}
              style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#F4F4F7', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M15 19L8 12L15 5" stroke="#1A1A1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button 
                onClick={() => setIsBookmarked(!isBookmarked)}
                style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#F4F4F7', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill={isBookmarked ? "#4A7BF0" : "none"}><path d="M6 4C6 3.4 6.4 3 7 3H17C17.6 3 18 3.4 18 4V21L12 17L6 21V4Z" stroke={isBookmarked ? "#4A7BF0" : "#C5C5CC"} strokeWidth="1.8" strokeLinejoin="round"/></svg>
              </button>
              <button style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#F4F4F7', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M4 12V20C4 20.6 4.4 21 5 21H19C19.6 21 20 20.6 20 20V12M12 3L12 16M12 3L8.5 6.5M12 3L15.5 6.5" stroke="#C5C5CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </div>
          </div>

          {/* Body */}
          <div style={{ padding: '8px 22px 32px' }}>
            {/* Category */}
            <div style={{ 
              fontSize: '10.5px', fontWeight: 800, padding: '4px 11px', borderRadius: '9px', display: 'inline-block', marginBottom: '12px',
              background: getCategoryStyles(article.category).bg, color: getCategoryStyles(article.category).color
            }}>
              {article.category}
            </div>
            
            {/* Title */}
            <h1 style={{ fontSize: '19px', fontWeight: 800, lineHeight: 1.4, marginBottom: '12px', color: '#1A1A1E' }}>
              {article.title}
            </h1>
            
            {/* Meta */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '11px', color: '#9B9BA3', marginBottom: '20px', paddingBottom: '18px', borderBottom: '1px solid #F0F0F4' }}>
              <span>{article.createdAt}</span>
              <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#D5D5DC' }}></div>
              <span>읽는 시간 {readingTimeMin}분</span>
              <div style={{ width: '3px', height: '3px', borderRadius: '50%', background: '#D5D5DC' }}></div>
              <span>조회 {article.viewCount.toLocaleString()}</span>
            </div>

            {/* Thumbnail */}
            {article.thumbnailUrl ? (
              <img src={article.thumbnailUrl} alt="thumbnail" style={{ width: '100%', height: '160px', borderRadius: '18px', objectFit: 'cover', marginBottom: '20px' }} />
            ) : (
              <div style={{ width: '100%', height: '160px', borderRadius: '18px', background: 'linear-gradient(135deg, #A8C5FF, #4A7BF0)', marginBottom: '20px' }}></div>
            )}

            {/* Body Blocks */}
            <div style={{ paddingBottom: '10px' }}>
              {article.bodyBlocks.map((block, i) => {
                if (block.type === 'subhead') {
                  return (
                    <h2 key={i} style={{ fontSize: '15px', fontWeight: 800, margin: '24px 0 10px', color: '#1A1A1E' }}>
                      {block.text}
                    </h2>
                  );
                }
                return (
                  <p key={i} style={{ fontSize: '14px', lineHeight: 1.85, color: '#3A3A42', marginBottom: '18px' }}>
                    {renderMarkdown(block.text)}
                  </p>
                );
              })}
            </div>

            {/* Tags */}
            <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap', marginTop: '14px', paddingTop: '18px', borderTop: '1px solid #F0F0F4' }}>
              {article.tags.map((tag, i) => (
                <div key={i} style={{ fontSize: '11px', fontWeight: 700, color: '#4A7BF0', background: '#EEF2FE', padding: '6px 13px', borderRadius: '11px' }}>
                  #{tag}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Footer */}
          <div style={{ marginTop: 'auto', padding: '20px 22px 40px', display: 'flex', gap: '8px', borderTop: '1px solid #F0F0F4', background: '#fff' }}>
            <button 
              onClick={handleCtaClick}
              style={{ flex: 1, background: '#4A7BF0', color: '#fff', border: 'none', borderRadius: '15px', padding: '14px', fontSize: '13px', fontWeight: 800, cursor: 'pointer' }}
            >
              관련 챌린지 보러가기
            </button>
            <button 
              style={{ width: '45px', height: '45px', borderRadius: '15px', background: '#F4F4F7', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', cursor: 'pointer', flexShrink: 0 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13M22 2L15 22L11 13M11 13L2 9L22 2" stroke="#1A1A1E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
