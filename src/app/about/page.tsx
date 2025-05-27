// src/app/about/page.tsx
import React from 'react';

// 👇 این خط باید شامل تمام آیکون‌هایی باشه که استفاده کردید 👇
import { Building, Target, Zap, Users, ShieldCheck, Sparkles } from 'lucide-react'; 

// src/app/about/page.tsx


export const metadata = { // اضافه کردن متادیتا برای SEO
  title: "درباره ما | ونداد چوب",
  description: "با داستان، ماموریت و ارزش‌های شرکت ونداد چوب، پیشرو در ارائه صفحات کابینت HPL با کیفیت، بیشتر آشنا شوید.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* بخش Hero کوچک برای صفحه درباره ما */}
      <section className="relative py-20 md:py-28 bg-slate-700 text-white text-center">
        {/* <Image 
          src="/images/about-hero-background.jpg" //  یک تصویر پس زمینه مناسب اگر دارید
          alt="پس زمینه درباره ونداد چوب"
          fill
          style={{ objectFit: 'cover' }}
          className="absolute z-0 opacity-30"
        /> */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl sm:text-5xl font-bold">درباره ونداد چوب</h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
            آشنایی با تیمی که به کیفیت، نوآوری و رضایت شما می‌اندیشد.
          </p>
        </div>
      </section>

      {/* بخش داستان ما */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center">
                <Building size={36} className="text-amber-500 ml-3 rtl:mr-3 rtl:ml-0" />
                داستان ما
              </h2>
              <div className="prose prose-slate max-w-none lg:prose-lg text-justify leading-relaxed"> {/* برای استایل‌دهی بهتر متن‌های طولانی */}
                <p>
                  شرکت ونداد چوب فعالیت خود را با هدف ارائه بهترین و باکیفیت‌ترین صفحات کابینت HPL بر پایه MDF در بازار ایران آغاز کرد. از همان ابتدا، تمرکز ما بر شناسایی نیازهای مشتریان، استفاده از مواد اولیه مرغوب و به‌کارگیری تکنولوژی‌های روز دنیا بوده است.
                </p>
                <p>
                  ما باور داریم که آشپزخانه قلب هر خانه و صفحه کابینت، نمادی از زیبایی و کارایی در آن است. به همین دلیل، با اشتیاق و تعهد، محصولاتی را تولید می‌کنیم که نه تنها دوام و مقاومت بالایی دارند، بلکه با طرح‌ها و رنگ‌های متنوع خود، الهام‌بخش فضاهای زندگی شما هستند.
                </p>
              </div>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg hidden md:block">
              {/* <Image 
                src="/images/factory-or-team.jpg" // تصویر از کارخانه یا تیم
                alt="کارخانه یا تیم ونداد چوب"
                fill
                style={{ objectFit: 'cover' }}
              /> */}
              <div className="bg-slate-200 w-full h-full flex items-center justify-center">
                  <p className="text-slate-500">تصویری از مجموعه ونداد چوب</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* بخش ماموریت و چشم‌انداز */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-slate-700 mb-4 flex items-center">
                <Target size={30} className="text-amber-500 ml-2 rtl:mr-2 rtl:ml-0" />
                ماموریت ما
              </h3>
              <p className="text-slate-600 leading-relaxed text-justify">
                ارائه محصولاتی با بالاترین استاندارد کیفیت که پاسخگوی نیازهای متنوع مشتریان در صنعت دکوراسیون داخلی و ساخت‌وساز باشد، همراه با ارائه خدمات مشاوره‌ای تخصصی و ایجاد تجربه‌ای خوشایند برای همکاران و مصرف‌کنندگان نهایی.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-slate-700 mb-4 flex items-center">
                <Zap size={30} className="text-amber-500 ml-2 rtl:mr-2 rtl:ml-0" /> {/* Zap یا Eye برای چشم‌انداز */}
                چشم‌انداز ما
              </h3>
              <p className="text-slate-600 leading-relaxed text-justify">
                تبدیل شدن به انتخاب اول و برند پیشرو در صنعت صفحات کابینت HPL در ایران، با تاکید بر نوآوری مستمر، کیفیت پایدار، و ایجاد ارزش افزوده برای مشتریان و جامعه.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* بخش ارزش‌های ما (اختیاری) */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-12">ارزش‌های بنیادین ما</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <ShieldCheck size={40} className="text-amber-600 mb-3" />
              <h4 className="text-xl font-semibold text-slate-700 mb-1">کیفیت و دوام</h4>
              <p className="text-sm text-slate-500">تعهد به ارائه محصولاتی با عمر طولانی و عملکرد بی‌نقص.</p>
            </div>
            <div className="flex flex-col items-center">
              <Users size={40} className="text-amber-600 mb-3" />
              <h4 className="text-xl font-semibold text-slate-700 mb-1">مشتری‌مداری</h4>
              <p className="text-sm text-slate-500">اولویت ما رضایت شما و ارائه بهترین تجربه همکاری است.</p>
            </div>
            <div className="flex flex-col items-center">
              <Sparkles size={40} className="text-amber-600 mb-3" /> {/* یا آیکون دیگه مثل Lightbulb */}
              <h4 className="text-xl font-semibold text-slate-700 mb-1">نوآوری و به‌روز بودن</h4>
              <p className="text-sm text-slate-500">همگام با آخرین ترندهای جهانی در طرح، رنگ و تکنولوژی.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}