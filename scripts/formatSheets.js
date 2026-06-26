const { google } = require('googleapis');
const path = require('path');

const KEY_FILE_PATH = path.join(__dirname, '..', 'soda-500603-0fbad1fd7a78.json');
const SPREADSHEET_ID = '1k0yqonj59grSl4tf0nvMSiE54xkVTU6LW9w8M7CqyKs';

const auth = new google.auth.GoogleAuth({
  keyFile: KEY_FILE_PATH,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

async function formatSheets() {
  try {
    const doc = await sheets.spreadsheets.get({ spreadsheetId: SPREADSHEET_ID });
    const existingSheets = doc.data.sheets;
    
    const requests = [];

    existingSheets.forEach(sheet => {
      const sheetId = sheet.properties.sheetId;

      // 1. 첫 번째 행 고정 (스크롤 시 헤더가 따라오도록)
      requests.push({
        updateSheetProperties: {
          properties: {
            sheetId: sheetId,
            gridProperties: {
              frozenRowCount: 1
            }
          },
          fields: 'gridProperties.frozenRowCount'
        }
      });

      // 2. 헤더(1행) 스타일 지정: 배경색(브랜드 블루), 글자색(흰색), 볼드체, 가운데 정렬
      requests.push({
        repeatCell: {
          range: {
            sheetId: sheetId,
            startRowIndex: 0,
            endRowIndex: 1
          },
          cell: {
            userEnteredFormat: {
              backgroundColor: { red: 0.0, green: 0.443, blue: 0.890 }, // #0071E3 (SODA 블루)
              textFormat: {
                foregroundColor: { red: 1.0, green: 1.0, blue: 1.0 }, // 흰색
                bold: true,
                fontSize: 11
              },
              horizontalAlignment: 'CENTER',
              verticalAlignment: 'MIDDLE'
            }
          },
          fields: 'userEnteredFormat(backgroundColor,textFormat,horizontalAlignment,verticalAlignment)'
        }
      });

      // 3. 전체 데이터 영역(헤더 제외) 가운데 정렬 및 글자 크기 조정
      requests.push({
        repeatCell: {
          range: {
            sheetId: sheetId,
            startRowIndex: 1
          },
          cell: {
            userEnteredFormat: {
              horizontalAlignment: 'CENTER',
              verticalAlignment: 'MIDDLE',
              textFormat: {
                fontSize: 10
              }
            }
          },
          fields: 'userEnteredFormat(horizontalAlignment,verticalAlignment,textFormat)'
        }
      });

      // 4. 모든 컬럼 너비 자동 맞춤 (Auto Resize)
      requests.push({
        autoResizeDimensions: {
          dimensions: {
            sheetId: sheetId,
            dimension: 'COLUMNS',
            startIndex: 0,
            endIndex: 20 // 대략 20개 컬럼까지 넉넉하게 지정
          }
        }
      });
      
      // 약간의 패딩을 위해 컬럼 너비에 20픽셀 정도 추가하는 건 API 한계가 있지만
      // 기본 autoResize 후 눈에 띄게 깔끔해집니다.
    });

    if (requests.length > 0) {
      await sheets.spreadsheets.batchUpdate({
        spreadsheetId: SPREADSHEET_ID,
        requestBody: { requests }
      });
      console.log('Successfully formatted all sheets!');
    }

  } catch (error) {
    console.error('Error formatting sheets:', error.message);
  }
}

formatSheets();
