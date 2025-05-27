// src/components/HeroSlideshow.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

// ایمپورت کردن استایل‌های Swiper
import 'swiper/css';
import 'swiper/css/effect-fade'; // برای افکت محو شدن
import 'swiper/css/pagination';  // اگر از نقاط ناوبری استفاده می‌کنید
import 'swiper/css/navigation';  // اگر از دکمه‌های قبلی/بعدی استفاده می‌کنید

// لیستی از تصاویر شما - این بخش رو با نام تصاویر خودتون جایگزین کنید!
const slideImages = [
  '/images/hero/hero-image-1.jpg', //  تصویر اول
  '/images/hero/hero-image-2.jpg', //  تصویر دوم
  '/images/hero/hero-image-3.jpg', //  تصویر سوم
  '/images/hero/hero-image-4.jpg', //  تصویر چهارم
  '/images/hero/hero-image-5.jpg', //  تصویر پنجم
];

const HeroSlideshow = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-0"> {/* این div تمام فضای والد رو میگیره و در لایه پشتی قرار میگیره */}
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade" // افکت محو شدن بین اسلایدها
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 5000, // هر 5 ثانیه یک بار تصویر عوض بشه
          disableOnInteraction: false, // حتی اگر کاربر با اسلایدها کار کرد، اتوپلی ادامه پیدا کنه
        }}
        loop={true}       // برای تکرار اسلایدها
        slidesPerView={1} // در هر لحظه فقط یک اسلاید نمایش داده بشه
        pagination={{ clickable: true }} // فعال کردن نقاط ناوبری (اختیاری)
        navigation={true}             // فعال کردن دکمه‌های قبلی/بعدی (اختیاری)
        className="w-full h-full"
      >
        {slideImages.map((src, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <Image
              src={src}
              alt={`اسلاید نمایش قهرمان ${index + 1}`}
              layout="fill"
              objectFit="cover"
              quality={80} // کیفیت تصویر رو می‌تونید تنظیم کنید
              priority={index === 0} // تصویر اول با اولویت بالاتر لود بشه
              unoptimized={src.endsWith('.gif')} // اگر گیف دارید، این رو اضافه کنید
            />
            {/* یک لایه تیره روی هر تصویر برای خوانایی بهتر متن رویی (اختیاری) */}
            <div className="absolute inset-0 bg-black opacity-30"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlideshow;