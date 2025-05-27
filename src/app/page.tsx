// src/app/page.tsx
"use client";

import Link from "next/link";
import React from "react";
// import Image from "next/image"; // ایمپورت Image برای گالری (و اگر در ProductCard یا HeroSlideshow هم استفاده مستقیم شده)

import HeroSlideshow from "@/components/HeroSlideshow"; // آیکون‌ها برای بخش مزایا
// import ProductCard from '@/components/ProductCard';
import AdvantagesSection from "@/components/AdvantagesSection";
import FeaturedProductsSection from "@/components/FeaturedProductsSection";
import GallerySection from "@/components/GallerySection";
import AboutUsSnippet from "@/components/AboutUsSnippet";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";


export default function HomePage() {
   
   

    return (
        <>
            {/* Hero Section با اسلایدشو */}
            <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center text-center text-white overflow-hidden">
                <HeroSlideshow />
                <div className="relative z-10 p-4 sm:p-6">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-md">
                        ونداد چوب:{" "}
                        <span className="block sm:inline">هنر و دوام بر سطح کار شما</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-slate-100 mb-10 max-w-3xl mx-auto drop-shadow-sm">
                        تجربه‌ای بی‌نظیر از زیبایی و مقاومت با صفحات کابینت HPL بر پایه MDF.
                        آشپزخانه و فضای کار خود را متحول کنید.
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
            <AdvantagesSection />

            {/* بخش محصولات ویژه/طرح‌های محبوب */}
            <FeaturedProductsSection />

            {/* بخش گالری الهام‌بخش */}
            <GallerySection />

            {/* TODO: معرفی کوتاه "درباره ونداد چوب" */}
            <AboutUsSnippet/>
            {/* TODO: نظرات مشتریان */}
            <TestimonialsSection/>
            {/* TODO: فراخوان به اقدام نهایی */}
            <FinalCTASection/>
            {/* TODO: (اختیاری) آخرین مقالات یا اخبار */}
        </>
    );
}
