// src/components/AdvantagesSection.tsx
"use client"; // اگر انیمیشن یا تعاملی داره که نیاز به کلاینت ساید داره
import React from 'react';
import { ShieldCheck, Palette, Sparkles, CheckSquare } from 'lucide-react';

const AdvantagesSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
          ویژگی‌های برجسته صفحات کابینت ونداد چوب
        </h2>
        <p className="text-slate-600 mb-12 lg:mb-16 max-w-xl mx-auto">
          کیفیت، دوام و زیبایی را با نسل جدید صفحات HPL تجربه کنید.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* کارت‌های مزیت اینجا میان ... (همون کدی که قبلاً داشتیم) */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <ShieldCheck size={48} className="text-amber-500 mx-auto mb-6" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-slate-700 mb-3">مقاومت بی‌نظیر</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              ضد خش، مقاوم در برابر حرارت و رطوبت. ایده‌آل برای استفاده طولانی‌مدت در آشپزخانه.
            </p>
          </div>
          {/* بقیه کارت‌ها ... */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <Palette size={48} className="text-amber-500 mx-auto mb-6" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-slate-700 mb-3">تنوع چشم‌نواز</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              کلکسیونی از به‌روزترین طرح‌های چوب، سنگ و رنگ‌های مدرن برای هر سبک و سلیقه‌ای.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <Sparkles size={48} className="text-amber-500 mx-auto mb-6" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-slate-700 mb-3">نگهداری آسان</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              سطوح کاملاً نچسب و ضدلک، نظافت سریع و آسان تنها با یک دستمال مرطوب.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
            <CheckSquare size={48} className="text-amber-500 mx-auto mb-6" strokeWidth={1.5} />
            <h3 className="text-xl font-semibold text-slate-700 mb-3">گارانتی و اطمینان</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              تضمین کیفیت مواد اولیه و ساخت، برای آرامش خاطر و رضایت کامل شما.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AdvantagesSection;