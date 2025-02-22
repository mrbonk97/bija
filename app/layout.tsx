import "./globals.css";
import "./tw.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { pretendard } from "@/lib/font";

export const metadata: Metadata = {
  title: "비자",
  description: "보안팀 직원의 개발 블로그",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${pretendard.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
