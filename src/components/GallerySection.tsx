// src/components/GallerySection.tsx
"use client"; // اگر افکت‌های هاور یا لایت‌باکس داره
import React from 'react';
import Image from 'next/image';
// import { Search } from 'lucide-react'; // اگر برای آیکون هاور استفاده می‌کنید

// آرایه‌ای از مسیر تصاویر گالری شما
const galleryImages = Array.from({ length: 9 }, (_, i) => `/images/gallery/${i + 1}.jpg`);

// تابع فرضی برای باز کردن لایت‌باکس (بعداً پیاده‌سازی می‌شود)
// const openLightbox = (imageSrc: string) => {
//   console.log("Open lightbox for:", imageSrc);
// };

const GallerySection = () => {
  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">
            نمونه‌های اجرایی و ایده‌های الهام‌بخش
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">
            کاربردهای خلاقانه صفحات کابینت ونداد چوب در فضاهای مختلف را ببینید.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg group transform transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer"
              // onClick={() => openLightbox(src)}
            >
              <Image
                src={src}
                alt={`نمونه کار ونداد چوب ${index + 1}`}
                fill
                style={{ objectFit: 'cover' }}
                className="group-hover:opacity-90 transition-opacity duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                quality={75}
              />
              {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center transition-all duration-300">
                <Search size={48} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default GallerySection;