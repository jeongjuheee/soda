import { NextResponse } from 'next/server';
import { appendRow } from '@/lib/googleSheets';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password_hash, name, signup_method, onboarding_type, job_target } = body;

    // 간단한 고유 ID 생성
    const user_id = `sd_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
    const created_at = new Date().toISOString();

    // 1. User_Account 시트에 기록
    // 컬럼: user_id | email | password_hash | name | signup_method | onboarding_type | job_target | created_at
    const row = [
      user_id,
      email || '',
      password_hash || '',
      name || '',
      signup_method || 'EMAIL',
      onboarding_type || '',
      job_target || '',
      created_at
    ];

    await appendRow('B2C_개인회원', [row]);

    // 2. User_Master 시트에도 기본 프로필 등록
    // 컬럼: user_id | user_name | onboarding_type | total_achieve_days | continuous_achieve_days | job_status
    const masterRow = [
      user_id,
      name || '',
      onboarding_type || '',
      '0',
      '0',
      'ON'
    ];

    await appendRow('개인_프로필마스터', [masterRow]);

    return NextResponse.json({ success: true, user_id });
  } catch (error: any) {
    console.error('B2C Signup Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
