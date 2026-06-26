import { NextResponse } from 'next/server';
import { appendRow, updateRowByPrimaryKey } from '@/lib/googleSheets';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { company_id, scores } = body;

    // 1. B2B_기업회원 시트의 onboarding_complete를 TRUE로 업데이트
    // 컬럼: company_id(0) | biz_number(1) | company_name(2) | manager_name(3) | manager_phone(4) | onboarding_complete(5) | ...
    await updateRowByPrimaryKey('B2B_기업회원', 0, company_id, {
      5: 'TRUE'
    });

    // 2. Vibe_Scores 시트에 진단 결과 기록
    // 컬럼: target_id | target_type | score_pioneer | score_infrastructure | score_project | score_craft | score_harmony | last_update_date
    const row = [
      company_id,
      'B2B',
      scores['시장개척형'] || 0,
      scores['시스템안착형'] || 0,
      scores['프로젝트주도형'] || 0,
      scores['크래프트장인형'] || 0,
      scores['하모니상생형'] || 0,
      new Date().toISOString()
    ];

    await appendRow('기업개인_DNA스코어', [row]);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('B2B Onboarding Complete Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
