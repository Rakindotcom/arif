'use client';
import Link from 'next/link';
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

              {!loading && (
                <div className="hidden md:block">
                  {user ? (
                    <div className="relative">
                      <button
                        onClick={() => setShowUserMenu(!showUserMenu)}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:opacity-90 transition-all"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span className="text-sm">{user.email?.split('@')[0]}</span>
                      </button>

                      {showUserMenu && (
                        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2">
                          <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                            <p className="text-xs text-gray-500 dark:text-gray-400">লগইন করা আছে</p>
                            <p className="text-sm font-medium truncate">{user.email}</p>
                          </div>
                          <Link
                            href="/admin"
                            className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            onClick={() => setShowUserMenu(false)}
                          >
                            অ্যাডমিন প্যানেল
                          </Link>
                          <button
                            onClick={handleLogout}
                            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                          >
                            লগআউট
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => setShowLoginModal(true)}
                      className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:opacity-90 transition-all shadow-md text-sm"
                    >
                      লগইন
                    </button>
                  )}
                </div>
              )}
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
