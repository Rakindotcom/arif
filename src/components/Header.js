'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { useFirebase } from '@/contexts/FirebaseContext';
import { signOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import LoginModal from './LoginModal';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { user, loading } = useFirebase();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setShowUserMenu(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/98 backdrop-blur-md shadow-md border-b-2 border-primary/20 dark:bg-gray-900/98">
        <div className="bg-linear-to-r from-primary to-secondary h-1"></div>
        <nav className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 relative rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/logo.webp"
                  alt="আরিফুল ইসলাম"
                  fill
                  sizes="40px"
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <h1 className="text-lg font-bold text-primary leading-tight">আরিফুল ইসলাম</h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">মার্কেটিং সাইকোলজি বিশেষজ্ঞ</p>
              </div>
            </Link>

            <div className="flex items-center gap-4">
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
          </div>
        </nav>
      </header>

      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)}
        onLoginSuccess={() => {
          console.log('Login successful');
        }}
      />
    </>
  );
}
