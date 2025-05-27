// src/app/page.tsx
// "use client"; //  حذف شده تا HomePage بتواند async باشد

import Link from "next/link";
import React from "react";

import HeroSlideshow from "@/components/HeroSlideshow";
import AdvantagesSection from "@/components/AdvantagesSection";
import FeaturedProductsSection from "@/components/FeaturedProductsSection";
import GallerySection from "@/components/GallerySection";
import AboutUsSnippet from "@/components/AboutUsSnippet";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";

import { supabase } from "@/lib/supabaseClient";

interface Product {
  id: string;
  name: string;
  slug: string;
  main_image_url: string | null;
  short_description: string | null;
}

async function getFeaturedProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("id, name, slug, main_image_url, short_description")
    .eq("is_featured", true)
    .eq("is_published", true)
    .limit(8);

  if (error) {
    console.error("خطا در خواندن محصولات ویژه از Supabase:", error.message);
    return [];
  }
  return data || [];
}

export default async function HomePage() {
  const featuredProductsData = await getFeaturedProducts();

  return (
    <>
      {/* Hero Section با اسلایدشو */}
      <section 
        className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center text-center text-white overflow-hidden"
      >
        {/* اسلایدشو به عنوان پس‌زمینه - z-0 در داخل کامپوننت خودش تعریف شده */}
        <HeroSlideshow /> 
        
        {/* محتوای متنی که روی اسلایدشو قرار می‌گیره */}
        {/* این div باید position: relative و z-index بالاتر داشته باشه */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-8"> 
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-md">
            ونداد چوب: <span className="block sm:inline">هنر و دوام بر سطح کار شما</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-100 mb-10 max-w-3xl mx-auto drop-shadow-sm">
            تجربه‌ای بی‌نظیر از زیبایی و مقاومت با صفحات کابینت HPL بر پایه MDF. آشپزخانه و فضای کار خود را متحول کنید.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              href="/products"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              مشاهده طرح‌ها و رنگ‌ها
            </Link>
            <Link
              href="/contact"
              className="bg-transparent hover:bg-white hover:text-slate-800 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg text-base sm:text-lg transition-all duration-300 ease-in-out border-2 border-slate-300 hover:border-transparent shadow-md"
            >
              درخواست مشاوره
            </Link>
          </div>
        </div>
      </section>

      <AdvantagesSection />
      <FeaturedProductsSection products={featuredProductsData} />
      <GallerySection />
      <AboutUsSnippet />
      <TestimonialsSection />
      <FinalCTASection />
    </>
  );
}