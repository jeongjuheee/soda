const { google } = require('googleapis');
const path = require('path');

const KEY_FILE_PATH = path.join(__dirname, '..', 'soda-500603-0fbad1fd7a78.json');
const SPREADSHEET_ID = '1k0yqonj59grSl4tf0nvMSiE54xkVTU6LW9w8M7CqyKs';

const auth = new google.auth.GoogleAuth({
  keyFile: KEY_FILE_PATH,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

const SHEETS_INFO = [
  {
    title: 'User_Account',
    headers: ['user_id', 'email', 'password_hash', 'name', 'signup_method', 'onboarding_type', 'job_target', 'created_at']
  },
  {
    title: 'Company_Account',
    headers: ['company_id', 'biz_number', 'company_name', 'manager_name', 'manager_phone', 'onboarding_complete', 'payment_status', 'subscription_start', 'created_at']
  },
  {
    title: 'User_Master',
    headers: ['user_id', 'user_name', 'onboarding_type', 'total_achieve_days', 'continuous_achieve_days', 'job_status']
  },
  {
    title: 'User_Daily_Logs',
    headers: ['log_id', 'user_id', 'routine_name', 'auth_time', 'is_achieved', 'routine_tag']
  },
  {
    title: 'Vibe_Scores',
    headers: ['target_id', 'target_type', 'score_pioneer', 'score_infrastructure', 'score_project', 'score_craft', 'score_harmony', 'last_update_date']
  },
  {
    title: 'Career_Actions',
    headers: ['scout_id', 'company_id', 'user_id', 'position_name', 'propose_date', 'status_badge', 'match_percentage']
  },
  {
    title: 'User_Interactions',
    headers: ['interact_id', 'user_id', 'article_id', 'stay_seconds', 'is_bookmarked']
  }
];

async function initializeSheets() {
  try {
    const doc = await sheets.spreadsheets.get({ spreadsheetId: SPREADSHEET_ID });
    const existingSheets = doc.data.sheets.map(s => s.properties.title);
    
    // 1. 시트가 없으면 생성하기 위한 배치 작업 구성
    const requests = [];
    
    for (const info of SHEETS_INFO) {
      if (!existingSheets.includes(info.title)) {
        requests.push({
          addSheet: {
            properties: {
              title: info.title
            }
          }
        });
      }
    }

    if (requests.length > 0) {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: SPREADSHEET_ID,
        requestBody: { requests }
      });
      console.log('Created missing sheets.');
    } else {
      console.log('All sheets already exist.');
    }

    // 2. 헤더 채우기
    for (const info of SHEETS_INFO) {
      await sheets.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: `${info.title}!A1:Z1`,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [info.headers]
        }
      });
      console.log(`Updated headers for ${info.title}`);
    }

    console.log('Done!');
  } catch (error) {
    console.error('Error:', error.message);
  }
}

initializeSheets();
