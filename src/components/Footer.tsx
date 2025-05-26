// src/components/Footer.tsx
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear(); // برای گرفتن سال جاری به صورت داینامیک

  return (
    <footer className="bg-slate-700 text-slate-300 text-center p-6 mt-auto"> {/* mt-auto برای چسباندن به پایین در صورت کم بودن محتوا */}
      <div className="container mx-auto">
        <p className="text-sm">
          &copy; {currentYear} فروشگاه ونداد چوب. تمامی حقوق محفوظ است.
        </p>
        {/* اینجا می‌تونید لینک‌های دیگه یا اطلاعات بیشتری اضافه کنید */}
        {/* مثال:
        <div className="mt-2">
          <Link href="/privacy-policy" className="text-xs hover:text-white transition-colors mx-2">
            سیاست حفظ حریم خصوصی
          </Link>
          <span className="text-xs">|</span>
          <Link href="/terms-of-service" className="text-xs hover:text-white transition-colors mx-2">
            شرایط استفاده از خدمات
          </Link>
        </div>
        */}
      </div>
    </footer>
  );
};

export default Footer;