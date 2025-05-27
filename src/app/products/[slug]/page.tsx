// src/app/products/[slug]/page.tsx
import React from 'react';
import { supabase } from '@/lib/supabaseClient';
import Image from 'next/image';
import { notFound } from 'next/navigation'; // برای نمایش صفحه 404 اگر محصول پیدا نشد
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react'; // برای دکمه بازگشت

// تعریف یک اینترفیس کامل‌تر برای محصول، شامل تمام فیلدهایی که ممکنه لازم داشته باشیم
interface Product {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  short_description: string | null;
  main_image_url: string | null;
  gallery_image_urls: string[] | null;
  hpl_finish: string | null;
  thickness_mm: number | null;
  dimensions_info: Record<string, unknown>; //  jsonb هست، می‌تونه هر ساختاری داشته باشه
  color_palette: string[] | null;
  categories: string[] | null;
  // ...  می‌تونید بقیه فیلدهای جدول products رو هم در صورت نیاز اینجا اضافه کنید
}

// تابع async برای گرفتن اطلاعات یک محصول خاص از Supabase بر اساس slug
async function getProductBySlug(slug: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from('products')
    .select('*') //  فعلاً همه ستون‌ها رو می‌گیریم، بعداً می‌تونیم بهینه‌تر کنیم
    .eq('slug', slug)
    .eq('is_published', true) //  فقط محصولات منتشر شده
    .single(); //  برای گرفتن فقط یک ردیف، اگر چندتا یا هیچکدام پیدا نشه خطا میده (که ما هندل می‌کنیم)

  if (error) {
    console.error(`خطا در خواندن محصول با اسلاگ "${slug}":`, error.message);
    return null; // یا می‌تونید خطا رو throw کنید تا توسط Error Boundary مدیریت بشه
  }
  return data;
}

// تعریف پراپ‌های صفحه داینامیک
interface ProductPageProps {
  params: {
    slug: string; // این slug از URL میاد
  };
}

// این یک Server Component از نوع async هست
export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = params;
  const product = await getProductBySlug(slug);

  // اگر محصول پیدا نشد، صفحه 404 نمایش داده می‌شه
  if (!product) {
    notFound();
  }

  //  نمایش ساده اطلاعات محصول - بعداً این بخش رو خیلی زیباتر می‌کنیم
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="mb-8">
        <Link href="/products" className="inline-flex items-center text-amber-600 hover:text-amber-700 transition-colors">
          <ArrowLeft size={20} className="ml-2 rtl:mr-2 rtl:ml-0" />
          بازگشت به لیست محصولات
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* بخش تصویر اصلی و گالری (اگر وجود داشت) */}
        <div>
          {product.main_image_url && (
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg mb-4">
              <Image
                src={product.main_image_url}
                alt={product.name}
                fill
                style={{ objectFit: 'cover' }}
                quality={85}
                priority // تصویر اصلی معمولاً مهمه
              />
            </div>
          )}
          {/* TODO: نمایش گالری تصاویر (product.gallery_image_urls) اگر وجود داشت */}
          {product.gallery_image_urls && product.gallery_image_urls.length > 0 && (
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mt-4">
              {product.gallery_image_urls.map((imgUrl, index) => (
                <div key={index} className="relative aspect-square rounded overflow-hidden border border-slate-200">
                  <Image src={imgUrl} alt={`${product.name} - تصویر گالری ${index + 1}`} fill style={{ objectFit: 'cover' }} quality={70} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* بخش اطلاعات محصول */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4">{product.name}</h1>
          {product.short_description && (
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">{product.short_description}</p>
          )}
          {product.description && (
            <div className="prose prose-sm sm:prose-base max-w-none text-slate-700 mb-6 leading-loose">
              {/* برای نمایش بهتر متن طولانی، بعداً می‌تونیم از @tailwindcss/typography استفاده کنیم */}
              <p>{product.description.split('\n').map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}</p>
            </div>
          )}

          {/* نمایش برخی مشخصات */}
          <div className="space-y-3 border-t border-slate-200 pt-6 mt-6">
            {product.hpl_finish && (
              <p className="text-sm"><strong className="font-semibold text-slate-700">نوع پرداخت HPL:</strong> {product.hpl_finish}</p>
            )}
            {product.thickness_mm && (
              <p className="text-sm"><strong className="font-semibold text-slate-700">ضخامت:</strong> {product.thickness_mm} میلی‌متر</p>
            )}
            {product.categories && product.categories.length > 0 && (
              <p className="text-sm"><strong className="font-semibold text-slate-700">دسته‌بندی‌ها:</strong> {product.categories.join('، ')}</p>
            )}
            {product.color_palette && product.color_palette.length > 0 && (
               <p className="text-sm"><strong className="font-semibold text-slate-700">پالت رنگی:</strong> {product.color_palette.join('، ')}</p>
            )}
            {/* TODO: نمایش dimensions_info به شکل خوانا */}
            {/* TODO: نمایش SKU، وضعیت موجودی، قیمت (اگر وجود داشت) */}
          </div>
          
          <div className="mt-8">
            <Link 
              href="/contact" // یا یک لینک تماس مستقیم یا فرم درخواست قیمت
              className="inline-block bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold py-3 px-8 rounded-lg text-lg transition-colors"
            >
              استعلام قیمت و سفارش
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}