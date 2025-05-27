// src/components/TestimonialCard.tsx
import Image from 'next/image'; // اگر از آواتار استفاده می‌کنیم
import React from 'react';
import { Quote } from 'lucide-react'; // آیکون نقل قول

interface TestimonialCardProps {
  quote: string;
  authorName: string;
  authorTitle?: string;
  avatarUrl?: string; // مسیر آواتار در پوشه public
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, authorName, authorTitle, avatarUrl }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg text-center h-full flex flex-col"> {/* h-full و flex برای هم‌اندازه شدن کارت‌ها در گرید */}
      <Quote className="text-amber-500 w-10 h-10 md:w-12 md:h-12 mx-auto mb-4" strokeWidth={1.5} />
      <p className="text-slate-600 text-base leading-relaxed mb-6 flex-grow">
        {quote}
      </p>
      <div className="mt-auto"> {/* برای چسباندن اطلاعات نویسنده به پایین کارت */}
        {avatarUrl && (
          <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-3 border-2 border-slate-200">
            <Image src={avatarUrl} alt={authorName} width={64} height={64} style={{ objectFit: 'cover' }} />
          </div>
        )}
        <p className="font-semibold text-slate-800 text-md">{authorName}</p>
        {authorTitle && <p className="text-slate-500 text-xs">{authorTitle}</p>}
      </div>
    </div>
  );
};

export default TestimonialCard;