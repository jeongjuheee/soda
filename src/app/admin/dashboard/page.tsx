import AnalyticsSummaryCards from '@/components/admin/AnalyticsSummaryCards';
import GoogleSheetDataTable from '@/components/admin/GoogleSheetDataTable';

export default function AdminDashboard() {
  return (
    <main style={{ paddingTop: '24px' }}>
      <h1 className="font-h1" style={{ marginBottom: '8px' }}>SODA 관리자 대시보드</h1>
      <p style={{ color: '#666', marginBottom: '32px' }}>Google Sheets와 실시간(Mock)으로 연동되는 관리자 전용 페이지입니다.</p>
      
      <AnalyticsSummaryCards />
      <GoogleSheetDataTable />
    </main>
  );
}
