// src/app/contact/page.tsx
"use client"; // چون از useState برای فرم استفاده می‌کنیم

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react"; // آیکون‌ها
import Link from "next/link"; // اگر لینکی در این صفحه دارید

//  برای SEO، بهتر است metadata در یک فایل layout.tsx یا route segment config تعریف شود
//  اما چون این یک Client Component است، فعلاً از آن صرف نظر می‌کنیم و بعداً می‌توان به آن پرداخت.

interface FormData {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
}

export default function ContactPage() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage(null);

        // TODO: اینجا بعداً منطق ارسال فرم به Supabase Function یا سرویس ایمیل اضافه خواهد شد
        console.log("اطلاعات فرم ارسالی:", formData);

        // شبیه‌سازی یک تاخیر برای ارسال و نمایش پاسخ
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // نمایش پیغام موفقیت (یا خطا اگر در آینده مدیریت بشه)
        setSubmitMessage(
            "پیام شما با موفقیت ارسال شد! کارشناسان ما به زودی با شما تماس خواهند گرفت."
        );
        // خالی کردن فرم بعد از ارسال موفق
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setIsSubmitting(false);
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            {" "}
            {/* پس زمینه کلی صفحه برای کنتراست بهتر */}
            {/* بخش عنوان صفحه */}
            <section className="py-16 md:py-20 bg-gradient-to-r from-slate-700 to-slate-900 text-white text-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl sm:text-5xl font-bold">تماس با ونداد چوب</h1>
                    <p className="mt-4 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
                        برای سوالات، مشاوره، یا ثبت سفارش، از طریق راه‌های زیر با ما در ارتباط باشید
                        یا فرم تماس را تکمیل نمایید.
                    </p>
                </div>
            </section>
            {/* بخش اصلی محتوا: اطلاعات تماس و فرم */}
            <section className="py-12 md:py-16 lg:py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white p-6 sm:p-8 md:p-12 rounded-xl shadow-2xl">
                        <div className="grid md:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-start">
                            {/* ستون اطلاعات تماس و نقشه */}
                            <div className="space-y-10">
                                <div>
                                    <h2 className="text-2xl lg:text-3xl font-semibold text-slate-800 mb-6 border-b-2 border-amber-500 pb-3">
                                        راه‌های ارتباطی مستقیم
                                    </h2>
                                    <div className="flex items-start space-x-4 rtl:space-x-reverse mb-6">
                                        <MapPin
                                            size={28}
                                            className="text-amber-600 mt-1 flex-shrink-0"
                                        />
                                        <div>
                                            <h3 className="font-semibold text-slate-700 text-lg">
                                                آدرس کارخانه
                                            </h3>
                                            <p className="text-slate-600">
                                                گلبهار، شهرک صنعتی، خیابان تلاش ۱۰، پلاک ۲۰
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4 rtl:space-x-reverse mb-6">
                                        <Phone
                                            size={28}
                                            className="text-amber-600 mt-1 flex-shrink-0"
                                        />
                                        <div>
                                            <h3 className="font-semibold text-slate-700 text-lg">
                                                تلفن تماس
                                            </h3>
                                            <p className="text-slate-600" dir="ltr">
                                                ۰۲۱-۵۵۵۵۴۴۴۴
                                            </p>
                                            <p className="text-slate-600" dir="ltr">
                                                ۰۹۱۲-۳۴۵۶۷۸۹ (پشتیبانی واتس‌اپ)
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-4 rtl:space-x-reverse">
                                        <Mail
                                            size={28}
                                            className="text-amber-600 mt-1 flex-shrink-0"
                                        />
                                        <div>
                                            <h3 className="font-semibold text-slate-700 text-lg">
                                                آدرس ایمیل
                                            </h3>
                                            <p className="text-slate-600">info@vandadchoob.com</p>
                                        </div>
                                    </div>
                                </div>

                                {/* بخش نقشه */}
                                <div>
                                    <h3 className="text-xl lg:text-2xl font-semibold text-slate-700 mb-4">
                                        موقعیت ما بر روی نقشه
                                    </h3>
                                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-md border border-slate-200">
                                        {/* اینجا کد IFRAME کامل و صحیح که از گوگل مپ برای "گلبهار خراسان رضوی" 
                      کپی کرده‌اید را قرار دهید. مطمئن شوید که مقدار src آن کامل است.
                    */}
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30408.435612314137!2d59.156579982826266!3d36.5685399729637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f6c4dc0172baa2b%3A0xe8c0967246e1efce!2sGolbahar%2C%20Razavi%20Khorasan%20Province%2C%20Iran!5e1!3m2!1sen!2sca!4v1748357900034!5m2!1sen!2sca"
                                            width="600"
                                            height="450"
                                            // style="border:0;"
                                            // allowfullscreen=""
                                            loading="lazy"
                                            // referrerpolicy="no-referrer-when-downgrade"
                                        ></iframe>
                                    </div>
                                </div>
                            </div>

                            {/* ستون فرم تماس */}
                            <div>
                                <h2 className="text-2xl lg:text-3xl font-semibold text-slate-800 mb-6  border-b-2 border-amber-500 pb-3">
                                    ارسال پیام مستقیم
                                </h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-slate-700 mb-1.5"
                                        >
                                            نام و نام خانوادگی
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="block w-full px-4 py-2.5 border border-slate-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm transition-colors"
                                            placeholder="مثال: علی محمدی"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-slate-700 mb-1.5"
                                        >
                                            آدرس ایمیل
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="block w-full px-4 py-2.5 border border-slate-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm transition-colors"
                                            placeholder="مثال: email@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="block text-sm font-medium text-slate-700 mb-1.5"
                                        >
                                            شماره تلفن (اختیاری)
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="block w-full px-4 py-2.5 border border-slate-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm transition-colors"
                                            placeholder="مثال: ۰۹۱۲۳۴۵۶۷۸۹"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="subject"
                                            className="block text-sm font-medium text-slate-700 mb-1.5"
                                        >
                                            موضوع پیام
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            id="subject"
                                            required
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="block w-full px-4 py-2.5 border border-slate-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm transition-colors"
                                            placeholder="مثال: درخواست مشاوره خرید"
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="message"
                                            className="block text-sm font-medium text-slate-700 mb-1.5"
                                        >
                                            متن پیام شما
                                        </label>
                                        <textarea
                                            name="message"
                                            id="message"
                                            rows={5}
                                            required
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="block w-full px-4 py-2.5 border border-slate-300 rounded-md shadow-sm focus:ring-amber-500 focus:border-amber-500 sm:text-sm transition-colors resize-none"
                                            placeholder="پیام خود را در اینجا بنویسید..."
                                        ></textarea>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 ease-in-out"
                                        >
                                            {isSubmitting ? (
                                                <svg
                                                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <circle
                                                        className="opacity-25"
                                                        cx="12"
                                                        cy="12"
                                                        r="10"
                                                        stroke="currentColor"
                                                        strokeWidth="4"
                                                    ></circle>
                                                    <path
                                                        className="opacity-75"
                                                        fill="currentColor"
                                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                    ></path>
                                                </svg>
                                            ) : (
                                                <Send
                                                    size={20}
                                                    className="ml-2 rtl:mr-2 rtl:ml-0"
                                                />
                                            )}
                                            {isSubmitting
                                                ? "در حال ارسال پیام شما..."
                                                : "ارسال پیام"}
                                        </button>
                                    </div>
                                    {submitMessage && (
                                        <p
                                            className={`mt-4 text-sm font-medium p-3 rounded-md ${
                                                submitMessage.includes("موفقیت")
                                                    ? "bg-green-50 text-green-700"
                                                    : "bg-red-50 text-red-700"
                                            }`}
                                        >
                                            {submitMessage}
                                        </p>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
