import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/common/TopBar";
import BottomNav from "@/components/common/BottomNav";

export const metadata: Metadata = {
  title: "SODA | 공백기를 채우는 청량한 일상 회복",
  description: "도파민 유도형 알고리즘에서 벗어나, 정제된 인사이트와 AI 감정 케어로 일머리를 깨우는 안전한 커리어 매칭 플랫폼",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className="app-wrapper">
          <div className="bg-blob-1"></div>
          <div className="bg-blob-2"></div>
          
          <TopBar />
          <div style={{ padding: '0 20px', paddingBottom: '100px', zIndex: 1, position: 'relative', flex: 1 }}>
            {children}
          </div>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
