// src/components/FinalCTASection.tsx
import Link from 'next/link';
import React from 'react';

const FinalCTASection = () => {
  return (
    <section className="bg-slate-800 text-white py-16 lg:py-20"> {/* پس‌زمینه تیره برای جلب توجه */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          آماده‌اید فضای خود را با ونداد چوب متحول کنید؟
        </h2>
        <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto">
          همین امروز با کارشناسان ما تماس بگیرید، کاتالوگ محصولات ما را بررسی کنید، یا برای پروژه بعدی خود مشاوره رایگان دریافت نمایید.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold py-3 px-10 rounded-lg text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            تماس با ما
          </Link>
          <Link
            href="/products"
            className="w-full sm:w-auto bg-transparent hover:bg-slate-700 text-white font-semibold py-3 px-10 rounded-lg text-lg transition-all duration-300 ease-in-out border-2 border-amber-500 hover:border-amber-600"
          >
            مشاهده محصولات
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;