// src/components/TestimonialsSection.tsx
"use client"; // اگر در آینده انیمیشن یا تعاملی اضافه کنیم

import React from 'react';
import TestimonialCard from './TestimonialCard'; // یا @/components/TestimonialCard

const testimonialsData = [
  {
    id: 1,
    quote: "کیفیت صفحات کابینت ونداد چوب بی‌نظیره! آشپزخونه ما با این صفحات جون تازه‌ای گرفته و از دوام و زیباییش خیلی راضی هستیم.",
    authorName: "خانم احمدی",
    authorTitle: "صاحب خانه، تهران",
     avatarUrl: "/images/avatars/1.jpg", // مسیر آواتار نمونه
  },
  {
    id: 2,
    quote: "تنوع طرح و رنگ در ونداد چوب فوق‌العاده‌ست. برای پروژه‌های طراحی داخلی که انجام میدم، همیشه بهترین گزینه‌ها رو اینجا پیدا می‌کنم. پشتیبانی و مشاوره‌شون هم عالیه.",
    authorName: "مهندس رضایی",
    authorTitle: "طراح داخلی",
    avatarUrl: "/images/avatars/2.jpg",
  },
  {
    id: 3,
    quote: "به عنوان یک پیمانکار، سرعت در تامین متریال و کیفیت محصول برام خیلی مهمه. ونداد چوب در هر دو زمینه عالی عمل کرده و همیشه انتخاب اولم برای صفحات کابینته.",
    authorName: "شرکت ساختمانی نمونه",
    authorTitle: "پیمانکار",
     avatarUrl: "/images/avatars/1.jpg",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-slate-100"> {/* رنگ پس‌زمینه متفاوت با بخش قبلی */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">
            آنچه مشتریان ما می‌گویند
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">
            تجربیات و نظرات برخی از مشتریان وفادار ونداد چوب.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              authorName={testimonial.authorName}
              authorTitle={testimonial.authorTitle}
              avatarUrl={testimonial.avatarUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;