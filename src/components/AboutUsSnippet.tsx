// src/components/AboutUsSnippet.tsx
import Link from 'next/link';
import React from 'react';

import Image from 'next/image';
const AboutUsSnippet = () => {
  return (
    <section className="py-16 lg:py-24 bg-white"> {/* یا هر رنگ پس‌زمینه دیگر */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* بخش متن */}
          <div className="text-center lg:text-right rtl:lg:text-right"> {/* در حالت دسکتاپ و فارسی، متن راست‌چین */}
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
              آشنایی با ونداد چوب
            </h2>
            <p className="text-slate-600 mb-8 text-base lg:text-lg leading-relaxed">
              {/* اینجا متن معرفی شما قرار می‌گیرد. لطفاً متن خودتون رو جایگزین کنید. */}
              شرکت ونداد چوب با سال‌ها تجربه در زمینه تولید و عرضه صفحات کابینت با کیفیت HPL بر پایه MDF، همواره در تلاش است تا با ارائه محصولاتی متنوع، مدرن و با دوام، زیبایی و کارایی را به فضاهای شما هدیه دهد. ما به نوآوری، کیفیت پایدار و رضایت مشتریان خود متعهد هستیم.
            </p>
            <Link
              href="/about"
              className="inline-block bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              درباره ما بیشتر بدانید
            </Link>
          </div>

          {/* بخش تصویر (اختیاری) */}
          <div className="hidden lg:block relative aspect-video rounded-lg overflow-hidden shadow-xl">
            {/* اگر تصویری دارید، اینجا قرار بدید. مثال: */}
            <Image 
                src="/images/factory/1.jpg" // مسیر تصویر در public/images
                alt="درباره ونداد چوب"
                fill
                style={{ objectFit: 'cover' }}
                quality={75}
            />
            {/* اگر تصویری ندارید، می‌توانید این div را حذف کنید یا یک المان گرافیکی ساده بگذارید */}
            <div className="bg-slate-200 w-full h-full flex items-center justify-center">
              <p className="text-slate-500">تصویر مرتبط با شرکت</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSnippet;