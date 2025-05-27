// src/components/ProductCard.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ArrowLeft } from 'lucide-react'; //  آیکون برای دکمه

interface ProductCardProps {
  name: string;
  imageUrl: string | null;
  slug: string;
  description?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, imageUrl, slug, description }) => {
  return (
    <div className="group flex flex-col bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl transform hover:-translate-y-1 h-full"> {/* h-full برای هم ارتفاع شدن در گرید */}
      <Link href={`/products/${slug}`} className="block">
        {/* ناحیه تصویر با ارتفاع ثابت بیشتر */}
        <div className="relative w-full h-64 sm:h-72 md:h-80 bg-slate-100"> {/* ارتفاع ثابت */}
          <Image
            src={imageUrl || '/images/placeholder-product.jpg'}
            alt={name}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-300 group-hover:scale-105" //  افکت زوم روی هاور روی کل کارت
            quality={75}
            // priority  // فقط برای تصاویر خیلی مهم در بالای صفحه (LCP) استفاده شود
          />
        </div>
      </Link>

      {/* ناحیه متن - با flex-grow تا فضای موجود رو پر کنه */}
      <div className="p-5 flex flex-col flex-grow"> {/* flex-grow اضافه شد */}
        <h3 className="text-lg md:text-xl font-semibold text-slate-800 mb-2">
          <Link href={`/products/${slug}`} className="hover:text-amber-600 transition-colors">
            {name}
          </Link>
        </h3>
        {description && (
          <p className="text-sm text-slate-600 mb-4 leading-relaxed line-clamp-3 flex-grow"> {/* flex-grow و line-clamp بیشتر */}
            {description}
          </p>
        )}
        
        {/* دکمه مشاهده جزئیات - همیشه قابل مشاهده */}
        <div className="mt-auto pt-4"> {/* mt-auto برای چسباندن به پایین */}
          <Link
            href={`/products/${slug}`}
            className="w-full flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold py-2.5 px-4 rounded-md transition-colors duration-300 text-sm"
          >
            مشاهده جزئیات
            <ArrowLeft size={18} className="mr-2 rtl:ml-2 rtl:mr-0" /> {/* آیکون کنار متن دکمه */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;