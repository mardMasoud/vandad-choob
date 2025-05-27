// src/components/Navbar.tsx
"use client";

import Link from 'next/link';
import Image from 'next/image'; //  ایمپورت کردن کامپوننت Image
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

// ... (آرایه navLinks بدون تغییر) ...
const navLinks: NavLink[] = [
  { href: '/', label: 'خانه' },
  { href: '/products', label: 'محصولات' },
  { href: '/about', label: 'درباره ما' },
  { href: '/contact', label: 'تماس با ما' },
];


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-white text-slate-700 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* بخش لوگو/نام سایت - به‌روز شده برای نمایش تصویر لوگو */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center"> {/* استفاده از flex برای تراز بهتر اگر متن کنار لوگو بود */}
              <Image
                src="/images/logo.png" //  مسیر لوگوی شما در پوشه public
                alt="لوگو ونداد چوب"
                width={120} //  عرض لوگو به پیکسل - این مقدار رو متناسب با لوگوی خودتون تغییر بدید
                height={32} // ارتفاع لوگو به پیکسل - این مقدار رو متناسب با لوگوی خودتون تغییر بدید
                className="h-16 w-16" //  برای حفظ ارتفاع و تنظیم خودکار عرض با Tailwind (اختیاری)
                priority // اگر لوگو مهمه و باید سریع لود بشه
              />
              {/* اگر می‌خواید نام "ونداد چوب" هنوز کنار لوگو باشه، می‌تونید یک span اینجا اضافه کنید:
              <span className="font-bold text-xl ml-2 rtl:mr-2 rtl:ml-0 text-slate-800">ونداد چوب</span>
              */}
            </Link>
          </div>

          {/* بخش لینک‌های منو برای دسکتاپ (بدون تغییر) */}
          <div className="hidden md:flex items-center space-x-1 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                  ${pathname === link.href
                    ? 'bg-amber-500 text-white shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* دکمه منوی همبرگری برای موبایل (بدون تغییر) */}
          <div className="md:hidden flex items-center">
            {/* ... کد دکمه همبرگری ... */}
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-500 transition-all"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">باز کردن منوی اصلی</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* منوی موبایل، نمایش بر اساس state (بدون تغییر) */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white shadow-lg z-40 border-t border-slate-200" id="mobile-menu">
          {/* ... کد لینک‌های منوی موبایل ... */}
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors
                  ${pathname === link.href
                    ? 'bg-amber-500 text-white'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;