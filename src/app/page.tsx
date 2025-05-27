// src/app/page.tsx
"use client"; //  اگر HeroSlideshow یا ProductCard نیاز به کلاینت ساید دارند

import Link from 'next/link';
import React from 'react';
// Image برای HeroSlideshow و ProductCard نیازه، پس اگر اینها کامپوننت‌های جدایی هستند، Image اونجا ایمپورت میشه.

import HeroSlideshow from '@/components/HeroSlideshow'; // ایمپورت کامپوننت اسلایدشو
import ProductCard from '@/components/ProductCard';   // ایمپورت کامپوننت کارت محصول
import { ShieldCheck, Palette, Sparkles, CheckSquare } from 'lucide-react'; // ایمپورت آیکون‌ها

// داده‌های موقت برای محصولات ویژه - نام تصاویر رو با نام فایل‌های خودتون جایگزین کنید!
const featuredProducts = [
  {
    id: '1',
    name: 'صفحه کابینت طرح سنگ کالاکاتا گلد',
    imageUrl: '/images/products/calacatta-gold.jpg',
    slug: 'calacatta-gold-marble',
    description: 'زیبایی خیره‌کننده سنگ مرمر با دوام و کارایی HPL.'
  },
  {
    id: '2',
    name: 'صفحه کابینت طرح چوب بلوط روشن',
    imageUrl: '/images/products/light-oak-wood.jpg',
    slug: 'light-oak-wood-finish',
    description: 'گرما و طبیعت چوب، با مقاومت بالا در برابر رطوبت و خش.'
  },
  {
    id: '3',
    name: 'صفحه کابینت طوسی بتن اکسپوز مات',
    imageUrl: '/images/products/concrete-grey-matte.jpg',
    slug: 'concrete-grey-matte',
    description: 'طراحی مدرن و صنعتی، ایده‌آل برای فضاهای مینیمال.'
  },
  {
    id: '4',
    name: 'صفحه کابینت مشکی کهکشانی براق',
    imageUrl: '/images/products/galaxy-black-gloss.jpg',
    slug: 'galaxy-black-gloss',
    description: 'درخشش و عمق رنگ مشکی با دانه‌های براق، لوکس و متفاوت.'
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section با اسلایدشو */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center text-center text-white overflow-hidden">
        <HeroSlideshow /> 
        <div className="relative z-10 p-4 sm:p-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-md">
            ونداد چوب: <span className="block sm:inline">هنر و دوام بر سطح کار شما</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-100 mb-10 max-w-3xl mx-auto drop-shadow-sm">
            تجربه‌ای بی‌نظیر از زیبایی و مقاومت با صفحات کابینت HPL بر پایه MDF. آشپزخانه و فضای کار خود را متحول کنید.
          </p>
          <div>
            <Link
              href="/products"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              مشاهده طرح‌ها و رنگ‌ها
            </Link>
            <Link
              href="/contact"
              className="ml-3 sm:ml-4 rtl:mr-3 rtl:sm:mr-4 rtl:ml-0 bg-transparent hover:bg-white hover:text-slate-800 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-all duration-300 ease-in-out border border-slate-300 hover:border-transparent shadow-md"
            >
              درخواست مشاوره
            </Link>
          </div>
        </div>
      </section>

      {/* بخش مزایا - با آیکون */}
      <section className="py-16 lg:py-24 bg-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            ویژگی‌های برجسته صفحات کابینت ونداد چوب
          </h2>
          <p className="text-slate-600 mb-12 lg:mb-16 max-w-xl mx-auto">
            کیفیت، دوام و زیبایی را با نسل جدید صفحات HPL تجربه کنید.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <ShieldCheck size={48} className="text-amber-500 mx-auto mb-6" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-slate-700 mb-3">مقاومت بی‌نظیر</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                ضد خش، مقاوم در برابر حرارت و رطوبت. ایده‌آل برای استفاده طولانی‌مدت در آشپزخانه.
              </p>
            </div>
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

      {/* بخش محصولات ویژه/طرح‌های محبوب */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">
              جدیدترین طرح‌ها و کالکشن‌ها
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">
              نگاهی به محبوب‌ترین و به‌روزترین طرح‌های صفحات کابینت ونداد چوب بیندازید.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                imageUrl={product.imageUrl}
                slug={product.slug}
                description={product.description}
              />
            ))}
          </div>

          <div className="text-center mt-12 lg:mt-16">
            <Link
              href="/products"
              className="bg-slate-700 hover:bg-slate-800 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              مشاهده همه محصولات
            </Link>
          </div>
        </div>
      </section>

      {/* TODO: بخش گالری یا پروژه‌های الهام‌بخش */}
      {/* TODO: معرفی کوتاه "درباره ونداد چوب" */}
      {/* TODO: نظرات مشتریان */}
      {/* TODO: فراخوان به اقدام نهایی */}
      {/* TODO: (اختیاری) آخرین مقالات یا اخبار */}
    </>
  );
}