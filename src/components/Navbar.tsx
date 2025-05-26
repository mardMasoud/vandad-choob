// src/components/Navbar.tsx
"use client";

import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold hover:text-slate-300 transition-colors">
              ونداد چوب
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="ml-10 flex items-baseline space-x-4 rtl:space-x-reverse">
              <li>
                <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700 hover:text-slate-100 transition-colors">
                  خانه
                </Link>
              </li>
              <li>
                <Link href="/products" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700 hover:text-slate-100 transition-colors">
                  محصولات
                </Link>
              </li>
              <li>
                <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700 hover:text-slate-100 transition-colors">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-700 hover:text-slate-100 transition-colors">
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;