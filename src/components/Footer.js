export default function Footer() {
  return (
    <footer className="bg-linear-to-b from-gray-900 to-black text-gray-300 mt-12 border-t-4 border-primary">
      <div className="bg-linear-to-r from-primary to-secondary h-1"></div>
      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Mobile: Compact Single Column */}
        <div className="md:hidden space-y-4 mb-4">
          <div className="text-center">
            <h3 className="text-base font-bold text-white mb-2">আরিফুল ইসলাম</h3>
            <p className="text-xs text-gray-400">মার্কেটিং সাইকোলজি বিশেষজ্ঞ ও লেখক</p>
          </div>
          
          <div className="flex justify-center gap-4 text-xs">
            <a href="/about" className="hover:text-secondary transition-colors">পরিচিতি</a>
            <a href="/books" className="hover:text-secondary transition-colors">বই</a>
            <a href="/blog" className="hover:text-secondary transition-colors">ব্লগ</a>
            <a href="/contact" className="hover:text-secondary transition-colors">যোগাযোগ</a>
          </div>
          
          <div className="flex justify-center gap-4">
            <a href="https://www.facebook.com/Ariful.islamDUBD" target="_blank" rel="noopener noreferrer" 
               className="flex flex-col items-center gap-1 group">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-secondary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <span className="text-xs text-gray-400">ব্যক্তিগত</span>
            </a>
            <a href="https://www.facebook.com/Needconnectivity" target="_blank" rel="noopener noreferrer" 
               className="flex flex-col items-center gap-1 group">
              <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-secondary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <span className="text-xs text-gray-400">নিড</span>
            </a>
          </div>
        </div>

        {/* Desktop: Three Columns */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-bold text-white mb-3">আরিফুল ইসলাম</h3>
            <p className="text-sm leading-relaxed">
              মার্কেটিং সাইকোলজি বিশেষজ্ঞ, লেখক ও নিড (Need) এর সহ-প্রতিষ্ঠাতা। 
              ইসলামিক জ্ঞান ও ব্যক্তিগত উন্নয়নে নিবেদিত।
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">দ্রুত লিংক</h4>
            <ul className="space-y-1.5 text-sm">
              <li><a href="/about" className="hover:text-secondary transition-colors">পরিচিতি</a></li>
              <li><a href="/books" className="hover:text-secondary transition-colors">বই সমূহ</a></li>
              <li><a href="/blog" className="hover:text-secondary transition-colors">ব্লগ</a></li>
              <li><a href="/contact" className="hover:text-secondary transition-colors">যোগাযোগ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-3 text-sm">সোশ্যাল মিডিয়া</h4>
            <div className="space-y-2">
              <a href="https://www.facebook.com/Ariful.islamDUBD" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-2 hover:text-secondary transition-colors text-sm">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-medium">ব্যক্তিগত</div>
                  <div className="text-xs text-gray-400">১ লক্ষ+</div>
                </div>
              </a>
              <a href="https://www.facebook.com/Needconnectivity" target="_blank" rel="noopener noreferrer" 
                 className="flex items-center gap-2 hover:text-secondary transition-colors text-sm">
                <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-secondary transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-medium">নিড (Need)</div>
                  <div className="text-xs text-gray-400">৯৩K+</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-3 text-center text-xs">
          <p className="text-gray-400">© {new Date().getFullYear()} আরিফুল ইসলাম। সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </div>
    </footer>
  );
}
