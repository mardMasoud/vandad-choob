// src/components/ProductCard.tsx
"use client"; //  اگر از هوک یا ایونت هندلر استفاده می‌کردیم، لازم بود. فعلاً برای سازگاری می‌ذاریم.

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ProductCardProps {
  name: string;
  imageUrl: string;
  slug: string; // برای لینک به صفحه جزئیات محصول در آینده
  description?: string; // توضیحات کوتاه اختیاری
}

const ProductCard: React.FC<ProductCardProps> = ({ name, imageUrl, slug, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-2xl transform hover:-translate-y-1">
      <Link href={`/products/${slug}`} className="block">
        <div className="relative w-full h-56 sm:h-64 md:h-72"> {/* ارتفاع تصویر */}
          <Image
            src={imageUrl}
            alt={name}
            fill
            style={{ objectFit: 'cover' }} // همراه با fill استفاده می‌شود
            className="group-hover:scale-105 transition-transform duration-300 ease-in-out" // افکت زوم روی هاور
            quality={75}
            // priority  // فقط برای تصاویر خیلی مهم در بالای صفحه (LCP) استفاده شود
          />
        </div>
      </Link>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-amber-600 transition-colors">
          <Link href={`/products/${slug}`}>
            {name}
          </Link>
        </h3>
        {description && (
          <p className="text-slate-600 text-sm mb-4 leading-relaxed">{description}</p>
        )}
        <Link
          href={`/products/${slug}`}
          className="inline-block text-sm font-medium text-amber-600 hover:text-amber-700 transition-colors"
        >
          مشاهده جزئیات &rarr;
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;