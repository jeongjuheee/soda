import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/common/TopBar";
import BottomNav from "@/components/common/BottomNav";

export const metadata: Metadata = {
  title: "SODA | 퍼스널 커리어 네비게이션",
  description: "SODA 3.0",
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
          <TopBar />
          <div style={{ paddingBottom: '100px', flex: 1 }}>
            {children}
          </div>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
