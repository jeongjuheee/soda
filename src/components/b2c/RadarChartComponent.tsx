'use client';

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
  { subject: '성실도 (XP)', A: 95, fullMark: 100 },
  { subject: '회복탄력성', A: 88, fullMark: 100 },
  { subject: '학습력', A: 75, fullMark: 100 },
  { subject: '루틴 달성률', A: 96, fullMark: 100 },
  { subject: '인사이트 구독', A: 85, fullMark: 100 },
];

export default function RadarChartComponent() {
  return (
    <div style={{ width: '100%', height: 300, backgroundColor: '#fff', borderRadius: '24px', boxShadow: '0 8px 12px rgba(0,0,0,0.02)', padding: '16px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#666', fontSize: 11 }} />
          <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
          <Radar name="My Stats" dataKey="A" stroke="#1A5BFF" fill="#1A5BFF" fillOpacity={0.3} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
