export interface InsightBodyBlock {
  type: 'paragraph' | 'subhead';
  text: string;
}

export interface InsightArticle {
  id: string;
  category: string;
  title: string;
  createdAt: string;
  thumbnailUrl: string | null;
  bodyBlocks: InsightBodyBlock[];
  tags: string[];
  relatedChallengeId?: string;
  personalizedFor?: string[];
  viewCount: number;
  highlight?: boolean;
}

export const INSIGHT_MOCK_DATA: InsightArticle[] = [
  {
    id: "insight_0001",
    category: "크래프트",
    title: "공백기를 포트폴리오로 만드는 법",
    createdAt: "2026-06-20",
    thumbnailUrl: null,
    viewCount: 1204,
    highlight: true,
    bodyBlocks: [
      { type: "paragraph", text: "취업 공백기는 약점이 아니라 **새로운 도약을 위한 준비 기간**으로 활용할 수 있습니다." },
      { type: "subhead", text: "공백기를 자산으로 바꾸는 3단계" },
      { type: "paragraph", text: "먼저 그 기간 동안 진행한 **작은 사이드 프로젝트나 학습 내용**을 기록하세요. 아무리 사소한 것이라도 꾸준함의 증거가 될 수 있습니다." },
      { type: "subhead", text: "실패 경험도 포트폴리오다" },
      { type: "paragraph", text: "성공한 경험만 중요한 것이 아닙니다. 실패를 통해 무엇을 배웠고, 어떻게 개선점을 찾았는지 상세히 서술하는 것이 더 매력적입니다." }
    ],
    tags: ["포트폴리오", "커리어전환", "공백기"],
    relatedChallengeId: "challenge_0042",
    personalizedFor: ["user_segment_craft"]
  },
  {
    id: "insight_0002",
    category: "트렌드",
    title: "스타트업 조직문화 핏 찾기",
    createdAt: "2026-06-21",
    thumbnailUrl: null,
    viewCount: 890,
    bodyBlocks: [
      { type: "paragraph", text: "스타트업 이직 시 가장 중요한 것은 **조직문화 핏(Fit)**입니다. 화려한 연봉보다 내가 몰입할 수 있는 환경인지 파악해야 합니다." },
      { type: "subhead", text: "면접에서 조직문화 파악하기" },
      { type: "paragraph", text: "역으로 질문하는 시간을 잘 활용하세요. '최근 팀에서 가장 크게 축하했던 일은 무엇인가요?' 같은 질문이 도움이 됩니다." }
    ],
    tags: ["스타트업", "조직문화", "이직"],
    relatedChallengeId: "challenge_0023"
  },
  {
    id: "insight_0003",
    category: "크래프트",
    title: "스페셜리스트로 성장하는 커리어 전략",
    createdAt: "2026-06-22",
    thumbnailUrl: null,
    viewCount: 2311,
    bodyBlocks: [
      { type: "paragraph", text: "제너럴리스트와 스페셜리스트 사이에서 고민하시나요? 특정 분야의 **대체 불가능한 전문가**가 되기 위한 전략을 소개합니다." },
      { type: "subhead", text: "T자형 인재를 넘어 I자형으로" },
      { type: "paragraph", text: "넓고 얕게 아는 것보다, 한 분야를 깊게 파고드는 것이 때로는 더 큰 경쟁력이 될 수 있습니다." }
    ],
    tags: ["커리어", "성장전략"]
  },
  {
    id: "insight_0004",
    category: "커리어",
    title: "주니어 디자이너 연봉 협상 가이드",
    createdAt: "2026-06-23",
    thumbnailUrl: null,
    viewCount: 1450,
    bodyBlocks: [
      { type: "paragraph", text: "연봉 협상은 감정 싸움이 아니라 **비즈니스 커뮤니케이션**입니다. 객관적인 데이터와 자신의 성과를 바탕으로 이야기하세요." },
      { type: "subhead", text: "협상 테이블에서 피해야 할 말" },
      { type: "paragraph", text: "'친구가 이만큼 받아서요', '열심히 할 테니까 올려주세요'와 같은 감정적인 호소는 오히려 마이너스 요소가 됩니다." }
    ],
    tags: ["연봉협상", "디자인"]
  },
  {
    id: "insight_0005",
    category: "직무탐색",
    title: "면접관이 진짜 듣고 싶어하는 답변 구조",
    createdAt: "2026-06-24",
    thumbnailUrl: null,
    viewCount: 3400,
    bodyBlocks: [
      { type: "paragraph", text: "면접관은 단순한 사실 나열이 아니라, 당신의 **문제 해결 과정과 사고 방식**을 알고 싶어 합니다." },
      { type: "subhead", text: "STAR 기법 활용하기" },
      { type: "paragraph", text: "Situation(상황), Task(과제), Action(행동), Result(결과) 구조로 답변을 준비하면 훨씬 더 논리적으로 들립니다." }
    ],
    tags: ["면접"]
  }
];
