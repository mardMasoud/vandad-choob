// src/components/FeaturedProductsSection.tsx
"use client"; // چون ProductCard ممکنه تعاملی باشه
import React from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard'; // اگر مسیر درسته

// داده‌های موقت برای محصولات ویژه - این رو هم از page.tsx به اینجا منتقل کردیم
const featuredProducts = [
  { id: '1', name: 'صفحه کابینت طرح سنگ کالاکاتا گلد', imageUrl: '/images/products/calacatta-gold.jpg', slug: 'calacatta-gold-marble', description: 'زیبایی خیره‌کننده سنگ مرمر با دوام و کارایی HPL.'},
  { id: '2', name: 'صفحه کابینت طرح چوب بلوط روشن', imageUrl: '/images/products/light-oak-wood.jpg', slug: 'light-oak-wood-finish', description: 'گرما و طبیعت چوب، با مقاومت بالا در برابر رطوبت و خش.'},
  { id: '3', name: 'صفحه کابینت طوسی بتن اکسپوز مات', imageUrl: '/images/products/concrete-grey-matte.jpg', slug: 'concrete-grey-matte', description: 'طراحی مدرن و صنعتی، ایده‌آل برای فضاهای مینیمال.'},
  { id: '4', name: 'صفحه کابینت مشکی کهکشانی براق', imageUrl: '/images/products/galaxy-black-gloss.jpg', slug: 'galaxy-black-gloss', description: 'درخشش و عمق رنگ مشکی با دانه‌های براق، لوکس و متفاوت.'},
];

const FeaturedProductsSection = () => {
  return (
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
          <Link href="/products" className="bg-slate-700 hover:bg-slate-800 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors duration-300 shadow-md hover:shadow-lg">
            مشاهده همه محصولات
          </Link>
        </div>
      </div>
    </section>
  );
};
export default FeaturedProductsSection;