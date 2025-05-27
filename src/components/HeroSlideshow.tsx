// src/components/HeroSlideshow.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'; // Navigation و Pagination رو هم اضافه می‌کنیم

// ایمپورت کردن استایل‌های Swiper
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// مسیر تصاویر شما - مطمئن بشید اینها با فایل‌های واقعی شما در public/images/hero/ مطابقت دارن
const slideImages = [
  '/images/hero/hero-slide-1.jpg',
  '/images/hero/hero-slide-2.jpg',
  '/images/hero/hero-slide-3.jpg',
  '/images/hero/hero-slide-4.jpg',
  '/images/hero/hero-slide-5.jpg',
];

const HeroSlideshow = () => {
  return (
    // این div کل فضای والد (section در page.tsx) رو میگیره و در لایه پشتی (z-0) قرار می‌گیره
    <div className="absolute inset-0 w-full h-full z-0">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={1}
        pagination={{ clickable: true }} // نقاط ناوبری
        navigation={true}             // دکمه‌های قبلی/بعدی پیش‌فرض Swiper
        className="w-full h-full"
      >
        {slideImages.map((src, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <Image
              src={src}
              alt={`اسلاید ونداد چوب ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              quality={80}
              priority={index === 0}
            />
            {/* لایه تیره روی هر تصویر برای خوانایی بهتر متن رویی */}
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlideshow;