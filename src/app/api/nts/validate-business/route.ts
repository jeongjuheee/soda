import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { b_no } = await request.json();

    if (!b_no || typeof b_no !== 'string') {
      return NextResponse.json({ error: '사업자번호가 필요합니다.' }, { status: 400 });
    }

    // 서버 환경변수에서 국세청 API 서비스 키(Decoding Key)를 가져옵니다.
    const serviceKey = process.env.NTS_SERVICE_KEY;
    
    if (!serviceKey) {
      console.error('NTS_SERVICE_KEY 환경변수가 설정되지 않았습니다.');
      return NextResponse.json({ error: '서버 설정 오류' }, { status: 500 });
    }

    const ntsApiUrl = `https://api.odcloud.kr/api/nts-businessman/v1/status?serviceKey=${serviceKey}`;

    const ntsResponse = await fetch(ntsApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        b_no: [b_no] // 국세청 API는 배열 형태로 사업자번호를 받습니다.
      }),
    });

    if (!ntsResponse.ok) {
      console.error('국세청 API 호출 실패:', ntsResponse.statusText);
      return NextResponse.json({ error: '국세청 서버 통신 오류' }, { status: 502 });
    }

    const data = await ntsResponse.json();

    // 응답 데이터 포맷 예: { match_cnt: 1, data: [ { b_no: "...", b_stt_cd: "01", ... } ] }
    if (data && data.data && data.data.length > 0) {
      const result = data.data[0];
      return NextResponse.json({ 
        success: true, 
        b_stt_cd: result.b_stt_cd,  // '01': 정상, '02': 휴업, '03': 폐업, ''(빈문자열): 미등록
        b_stt: result.b_stt         // 한글 상태 설명 (예: "계속사업자")
      });
    }

    // 조회 결과가 없는 경우
    return NextResponse.json({ success: true, b_stt_cd: '' });

  } catch (error: any) {
    console.error('Business validation error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
