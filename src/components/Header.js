'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md shadow-md border-b-2 border-primary/20 dark:bg-gray-900/98">
      <div className="bg-gradient-to-r from-primary to-secondary h-1"></div>
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary via-islamic-green to-secondary rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white text-lg font-bold">আই</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-primary leading-tight">আরিফুল ইসলাম</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">মার্কেটিং সাইকোলজি বিশেষজ্ঞ</p>
            </div>
          </Link>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <ul className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 bg-white dark:bg-gray-900 md:bg-transparent gap-5 p-4 md:p-0 shadow-lg md:shadow-none border-t md:border-0 border-primary/10`}>
            <li><Link href="/" className="hover:text-primary transition-colors font-medium text-sm">প্রচ্ছদ</Link></li>
            <li><Link href="/about" className="hover:text-primary transition-colors font-medium text-sm">পরিচিতি</Link></li>
            <li><Link href="/books" className="hover:text-primary transition-colors font-medium text-sm">বই সমূহ</Link></li>
            <li><Link href="/blog" className="hover:text-primary transition-colors font-medium text-sm">ব্লগ</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors font-medium text-sm">যোগাযোগ</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
