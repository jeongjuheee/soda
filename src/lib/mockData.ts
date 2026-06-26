export interface B2CUser {
  id: string;
  name: string;
  xp: number;
  routineRate: number;
  aiReport: string;
  status: '승인완료' | '대기중' | '블랙리스트';
  
  // 3차 추가 필드
  careerGoal: string;
  experience: string; // "3년차", "신입" 등
  resume: string; // 자소서/경력 요약
  portfolio: string; // 포트폴리오 요약/링크
  keywords: string[]; // AI 도출 키워드
  matchRate: number; // 기업 맞춤 매칭률

  // 6차 추가 필드 (로그인/계정 연동용)
  email: string;
  password?: string; // 해시 암호화
  loginType: 'GENERAL' | 'KAKAO' | 'NAVER' | 'GOOGLE';
  accountStatus: 'ACTIVE' | 'INACTIVE';
}

export interface JobPosting {
  id: string;
  title: string;
  department: string;
}

export interface B2BCompany {
  id: string;
  name: string;
  businessNumber: string;
  resignationRate: number;
  unpaidWageCount: number;
  hasCleanBadge: boolean;
  status: '승인완료' | '대기중' | '블랙리스트';

  // 3차 추가 필드
  openPositions: JobPosting[];
  frequentPosting: boolean; // 공고 자주 올리는 곳인지 여부 (구직자 필터링)
  reviewSummary: string; // AI 기업 리뷰 요약
}

export interface UserDailyLog {
  logId: string;
  userId: string;
  date: string;
  routineProgress: string; // e.g., "66.6% (2/3 완료)"
  emotionStatus: string; // e.g., "ANXIETY"
  dailyDiaryText: string;
}

export const mockUserDailyLogs: UserDailyLog[] = [
  {
    logId: 'log_2026001',
    userId: 'soda_junior_01',
    date: '2026-06-24',
    routineProgress: '66.6% (2/3 완료)',
    emotionStatus: 'ANXIETY',
    dailyDiaryText: '토익 공부 진도가 생각보다 안 나가서 조급하다.'
  }
];

export const mockB2CUsers: B2CUser[] = [
  {
    id: 'soda_junior_01',
    name: '정*희',
    xp: 4500,
    routineRate: 96.4,
    aiReport: '해당 주니어는 공백기 동안 매일 오전 9시 이전 일정 관리를 완수하며 높은 회복탄력성과 성실도를 증명했습니다.',
    status: '승인완료',
    careerGoal: '3년차 프로덕트 디자이너',
    experience: '3년 2개월',
    resume: '이전 직장에서 B2B SaaS 프로덕트의 초기 기획부터 디자인 시스템 구축까지 성공적으로 리딩했습니다. 무기력증을 딛고 꾸준한 루틴 관리로 일상 회복 중입니다.',
    portfolio: 'https://portfolio.soda.io/jhd_design',
    keywords: ['프로젝트 리딩', '3년차', '디자인 시스템', '회복탄력성 우수'],
    matchRate: 95,
    email: 'juhee@gmail.com',
    password: '$2b$12$K3...', // 일반 가입자 암호화
    loginType: 'GENERAL',
    accountStatus: 'ACTIVE'
  },
  {
    id: 'soda_junior_02',
    name: '김*민',
    xp: 3200,
    routineRate: 88.5,
    aiReport: '최근 일주일 동안 꾸준히 알고리즘 탈출 피드를 정독하며 업무 집중도를 회복하고 있습니다.',
    status: '승인완료',
    careerGoal: 'UX/UI 리더',
    experience: '신입',
    resume: '시각 디자인 전공 후 다양한 부트캠프를 통해 실무 역량을 키웠습니다. 경력은 부족하지만 빠른 학습 능력으로 팀에 기여할 준비가 되어 있습니다.',
    portfolio: 'https://portfolio.soda.io/kmm_uxui',
    keywords: ['빠른 학습력', '부트캠프 수료', '협업 우수'],
    matchRate: 88, // 경력은 부족해도 역량이 높아 추천
    email: 'kakao_user1@kakao.com',
    loginType: 'KAKAO',
    accountStatus: 'ACTIVE'
  },
  {
    id: 'soda_junior_03',
    name: '이*준',
    xp: 1500,
    routineRate: 72.0,
    aiReport: '점진적으로 아침 루틴을 형성하고 있으며, 긍정적인 감정 상태를 유지 중입니다.',
    status: '대기중',
    careerGoal: '프론트엔드 개발자',
    experience: '1년',
    resume: 'React와 Next.js를 다룰 줄 알며, 사용자 경험 개선에 관심이 많습니다.',
    portfolio: 'https://github.com/leejun',
    keywords: ['React', 'Next.js', '성실함'],
    matchRate: 65,
    email: 'naver_user2@naver.com',
    loginType: 'NAVER',
    accountStatus: 'ACTIVE'
  }
];

export const mockB2BCompanies: B2BCompany[] = [
  {
    id: 'comp_01',
    name: '(주)홍길동',
    businessNumber: '123-45-67890',
    resignationRate: 3.2,
    unpaidWageCount: 0,
    hasCleanBadge: true,
    status: '승인완료',
    openPositions: [
      { id: 'job_01', title: '프로덕트 디자이너 (3년 이상)', department: '디자인팀' },
      { id: 'job_02', title: '프론트엔드 개발자', department: '개발팀' }
    ],
    frequentPosting: false,
    reviewSummary: '퇴사율이 매우 낮고 임금 체불이 한 번도 없는 안정적이고 성장을 돕는 기업입니다.'
  },
  {
    id: 'comp_02',
    name: '(주)허그본',
    businessNumber: '987-65-43210',
    resignationRate: 4.1,
    unpaidWageCount: 0,
    hasCleanBadge: true,
    status: '승인완료',
    openPositions: [
      { id: 'job_03', title: 'UX/UI 주니어 디자이너', department: 'CX팀' }
    ],
    frequentPosting: false,
    reviewSummary: '사내 문화가 수평적이고 멘토링이 잘 되어 있어 주니어 성장에 매우 유리합니다.'
  },
  {
    id: 'comp_03',
    name: '(주)블랙기업',
    businessNumber: '111-22-33333',
    resignationRate: 35.5,
    unpaidWageCount: 3,
    hasCleanBadge: false,
    status: '블랙리스트',
    openPositions: [
      { id: 'job_04', title: '웹 디자이너 (야근 가능자)', department: '디자인팀' }
    ],
    frequentPosting: true,
    reviewSummary: '지속적인 야근과 임금 체불 이슈로 인해 3개월 내 퇴사율이 비정상적으로 높습니다.'
  }
];
