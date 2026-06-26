const { google } = require('googleapis');
const path = require('path');

const KEY_FILE_PATH = path.join(__dirname, '..', 'soda-500603-0fbad1fd7a78.json');
const SPREADSHEET_ID = '1k0yqonj59grSl4tf0nvMSiE54xkVTU6LW9w8M7CqyKs';

const auth = new google.auth.GoogleAuth({
  keyFile: KEY_FILE_PATH,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

const SHEETS_MAPPING = [
  {
    oldTitle: 'User_Account',
    newTitle: 'B2C_개인회원',
    headers: ['유저ID', '이메일', '비밀번호', '이름', '가입경로', '온보딩유형', '희망직무', '가입일시']
  },
  {
    oldTitle: 'Company_Account',
    newTitle: 'B2B_기업회원',
    headers: ['기업ID', '사업자번호', '기업명', '담당자명', '담당자연락처', '온보딩완료여부', '결제상태', '구독시작일', '가입일시']
  },
  {
    oldTitle: 'User_Master',
    newTitle: '개인_프로필마스터',
    headers: ['유저ID', '이름', '온보딩유형', '총달성일수', '연속달성일수', '구직상태']
  },
  {
    oldTitle: 'User_Daily_Logs',
    newTitle: '개인_루틴인증로그',
    headers: ['로그ID', '유저ID', '루틴명', '인증시간', '달성여부', '루틴태그']
  },
  {
    oldTitle: 'Vibe_Scores',
    newTitle: '기업개인_DNA스코어',
    headers: ['타겟ID', '타겟유형', '시장개척형점수', '시스템안착형점수', '프로젝트주도형점수', '크래프트장인형점수', '하모니상생형점수', '최근업데이트일']
  },
  {
    oldTitle: 'Career_Actions',
    newTitle: 'B2B_스카웃제안내역',
    headers: ['제안ID', '기업ID', '유저ID', '포지션명', '제안일자', '상태배지', '매칭률']
  },
  {
    oldTitle: 'User_Interactions',
    newTitle: '개인_행동로그',
    headers: ['인터랙션ID', '유저ID', '아티클ID', '체류시간', '북마크여부']
  }
];

async function renameAndUpdateHeaders() {
  try {
    const doc = await sheets.spreadsheets.get({ spreadsheetId: SPREADSHEET_ID });
    
    // 1. 이름 변경 (기존 영어 탭이 있을 경우 한글로 변경)
    const requests = [];
    for (const mapping of SHEETS_MAPPING) {
      const existingSheet = doc.data.sheets.find(s => s.properties.title === mapping.oldTitle);
      if (existingSheet) {
        requests.push({
          updateSheetProperties: {
            properties: {
              sheetId: existingSheet.properties.sheetId,
              title: mapping.newTitle
            },
            fields: 'title'
          }
        });
      } else {
        // 혹시 영어 탭이 없고 처음부터 실행된다면 생성
        const alreadyHasNew = doc.data.sheets.find(s => s.properties.title === mapping.newTitle);
        if (!alreadyHasNew) {
           requests.push({
             addSheet: {
               properties: { title: mapping.newTitle }
             }
           });
        }
      }
    }

    if (requests.length > 0) {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: SPREADSHEET_ID,
        requestBody: { requests }
      });
      console.log('Renamed sheets to Korean.');
    } else {
      console.log('Sheets are already in Korean or not found.');
    }

    // 2. 한글 헤더로 덮어쓰기
    for (const mapping of SHEETS_MAPPING) {
      await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: `${mapping.newTitle}!A1:Z1`,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [mapping.headers]
        }
      });
      console.log(`Updated headers to Korean for ${mapping.newTitle}`);
    }

    console.log('Done renaming and updating headers!');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

renameAndUpdateHeaders();
