// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Vazirmatn } from 'next/font/google';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; //  ایمپورت کردن Footer

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
      {/* تغییرات در body برای چسبیدن فوتر به پایین */}
      <body className={`${vazirmatnFont.variable} antialiased flex flex-col min-h-screen`}>
        <Navbar />
        {/* تغییرات در main برای پر کردن فضای موجود */}
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <Footer /> {/* Footer اینجا اضافه شده */}
      </body>
    </html>
  );
}