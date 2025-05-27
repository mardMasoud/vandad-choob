// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Vazirmatn } from 'next/font/google';
import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer"; // اگر ساختید، از کامنت خارج کنید

const vazirmatnFont = Vazirmatn({
  subsets: ['arabic', 'latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-vazirmatn',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "فروشگاه ونداد چوب",
  description: "فروش انواع صفحات ام دی اف با بهترین کیفیت",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatnFont.variable} antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow"> {/* container و padding رو به خود page یا section ها منتقل می‌کنیم */}
          {children}
        </main>
        {/* <Footer /> */} {/* اگر ساختید، از کامنت خارج کنید */}
      </body>
    </html>
  );
}