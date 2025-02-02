import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { pretendard } from "@/lib/font";
import { Topnav } from "@/components/nav/top-nav";

export const metadata: Metadata = {
  title: "개발 블로그[비자]",
  description: "개발도 하고 피자도 먹고",
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
          <Topnav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
