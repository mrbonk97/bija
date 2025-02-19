import "./globals.css";
import "./tw.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { pretendard } from "@/lib/font";
import { Topnav } from "@/components/nav/top-nav";

export const metadata: Metadata = {
  title: "asd",
  description: "asd",
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
          defaultTheme="light"
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
