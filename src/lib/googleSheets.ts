import { google } from 'googleapis';
import path from 'path';

import fs from 'fs';

// 프로젝트 루트에 있는 JSON 키 파일 경로 (로컬용)
const KEY_FILE_PATH = path.join(process.cwd(), 'soda-500603-0fbad1fd7a78.json');
// 구글 시트 ID
const SPREADSHEET_ID = '1k0yqonj59grSl4tf0nvMSiE54xkVTU6LW9w8M7CqyKs';

// Vercel 배포 환경에서는 환경변수를 사용하고, 로컬에서는 json 파일을 사용하도록 분기처리
let auth: any;

if (process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
  auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
} else {
  auth = new google.auth.GoogleAuth({
    keyFile: KEY_FILE_PATH,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
}

const sheets = google.sheets({ version: 'v4', auth });

/**
 * 지정된 시트에 새로운 행(Row) 데이터를 추가합니다.
 * @param sheetName 탭 이름 (예: 'User_Account')
 * @param values 추가할 데이터 배열의 배열 (예: [['value1', 'value2']])
 */
export async function appendRow(sheetName: string, values: any[][]) {
  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${sheetName}!A:Z`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error appending row to ${sheetName}:`, error);
    throw error;
  }
}

/**
 * 특정 조건의 행을 업데이트합니다. (예: company_id로 찾아서 업데이트)
 * 구글 시트 API 특성상 검색 후 업데이트가 번거로우므로, 여기서는 모든 데이터를 읽어서
 * 매칭되는 행의 인덱스를 찾은 뒤 업데이트를 수행합니다.
 */
export async function updateRowByPrimaryKey(sheetName: string, pkColumnIndex: number, pkValue: string, updates: Record<number, any>) {
  try {
    // 1. 시트 전체 데이터 읽기
    const readRes = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: `${sheetName}!A:Z`,
    });
    
    const rows = readRes.data.values || [];
    if (rows.length === 0) return null;

    // 2. 일치하는 행 찾기 (헤더 제외하고 1번 인덱스부터 검색)
    let targetRowIndex = -1;
    for (let i = 1; i < rows.length; i++) {
      if (rows[i][pkColumnIndex] === pkValue) {
        targetRowIndex = i;
        break;
      }
    }

    if (targetRowIndex === -1) {
      throw new Error(`Row with PK ${pkValue} not found in ${sheetName}`);
    }

    // 3. 기존 데이터 복사 후 업데이트 적용
    const rowData = [...rows[targetRowIndex]];
    Object.keys(updates).forEach(key => {
      rowData[Number(key)] = updates[Number(key)];
    });

    // 4. 해당 행만 업데이트 (구글 시트는 1-indexed)
    const range = `${sheetName}!A${targetRowIndex + 1}:Z${targetRowIndex + 1}`;
    await sheets.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [rowData],
      },
    });

    return true;
  } catch (error) {
    console.error(`Error updating row in ${sheetName}:`, error);
    throw error;
  }
}
