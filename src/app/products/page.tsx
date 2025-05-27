// src/app/products/page.tsx
import React from 'react';
import ProductCard from '@/components/ProductCard'; // کامپوننت کارت محصول
import { supabase } from '@/lib/supabaseClient';   // کلاینت Supabase
// import Image from 'next/image'; // اگر خواستید بنر تصویری اضافه کنید

// تعریف اینترفیس Product (اگر از فایل مشترک ایمپورت نمی‌کنید)
interface Product {
  id: string;
  name: string;
  slug: string;
  main_image_url: string | null;
  short_description: string | null;
}

async function getAllPublishedProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from('products')
    .select('id, name, slug, main_image_url, short_description')
    .eq('is_published', true)
    .order('created_at', { ascending: false });
    // .limit(100) //  فعلاً محدودیت رو برمی‌داریم یا یک عدد بزرگ میذاریم

  if (error) {
    console.error('خطا در خواندن همه محصولات از Supabase:', error.message);
    return [];
  }
  return data || [];
}

export default async function ProductsPage() {
  const allProducts = await getAllPublishedProducts();

  return (
    <div className="bg-slate-50 min-h-screen"> {/* پس زمینه کلی صفحه */}
      {/* بخش عنوان و معرفی صفحه */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-slate-700 to-slate-900 text-white text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            کاتالوگ محصولات ونداد چوب
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
            جدیدترین و باکیفیت‌ترین طرح‌های صفحات کابینت HPL بر پایه MDF را در اینجا بیابید. برای هر سلیقه و پروژه‌ای، یک انتخاب ایده‌آل منتظر شماست.
          </p>
        </div>
      </section>

      {/* بخش اصلی نمایش محصولات */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {allProducts && allProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"> {/* تغییر به xl:grid-cols-4 برای نمایش بهتر */}
            {allProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                imageUrl={product.main_image_url || '/images/placeholder-product.jpg'}
                slug={product.slug}
                description={product.short_description || undefined}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <h2 className="text-2xl font-semibold text-slate-700 mb-4">محصولی یافت نشد</h2>
            <p className="text-slate-500">
              در حال حاضر محصولی برای نمایش در این بخش وجود ندارد. لطفاً بعداً دوباره سر بزنید یا با ما تماس بگیرید.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}