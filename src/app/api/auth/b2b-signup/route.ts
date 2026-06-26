import { NextResponse } from 'next/server';
import { appendRow } from '@/lib/googleSheets';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { biz_number, company_name, manager_name, manager_phone } = body;

    // 간단한 고유 ID 생성
    const company_id = `co_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    const created_at = new Date().toISOString();

    // Company_Account 시트에 기록
    // 컬럼: company_id | biz_number | company_name | manager_name | manager_phone | onboarding_complete | payment_status | subscription_start | created_at
    const row = [
      company_id,
      biz_number || '',
      company_name || '임시 회사명',
      manager_name || '담당자',
      manager_phone || '',
      'FALSE', // onboarding_complete
      'FREE',  // payment_status
      '',      // subscription_start
      created_at
    ];

    await appendRow('B2B_기업회원', [row]);

    return NextResponse.json({ success: true, company_id });
  } catch (error: any) {
    console.error('B2B Signup Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
