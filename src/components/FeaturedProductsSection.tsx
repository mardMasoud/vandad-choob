// src/components/FeaturedProductsSection.tsx
// "use client"; //  اگر در آینده نیاز به تعاملات کلاینت‌ساید داشت، اضافه کنید. فعلاً حذف می‌کنیم.
import React from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';

// تعریف تایپ Product اینجا هم لازمه یا از یک فایل مشترک ایمپورت بشه
interface Product {
  id: string;
  name: string;
  slug: string;
  main_image_url: string | null;
  short_description: string | null;
}

interface FeaturedProductsSectionProps {
  products: Product[]; //  دریافت محصولات به عنوان props
}

const FeaturedProductsSection: React.FC<FeaturedProductsSectionProps> = ({ products }) => {
  if (!products || products.length === 0) {
    return (
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800">
            جدیدترین طرح‌ها و کالکشن‌ها
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            در حال حاضر محصول ویژه‌ای برای نمایش وجود ندارد.
          </p>
        </div>
      </section>
    );
  }

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
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              imageUrl={product.main_image_url || '/images/placeholder-product.jpg'}
              slug={product.slug}
              description={product.short_description || undefined}
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
  );
};

export default FeaturedProductsSection;