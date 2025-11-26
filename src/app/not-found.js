import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex items-center justify-center bg-linear-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="text-8xl md:text-9xl font-bold text-primary/20 mb-4">৪০৪</div>
              <div className="w-32 h-1 bg-linear-to-r from-primary to-secondary mx-auto mb-6"></div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              পেজ খুঁজে পাওয়া যায়নি
            </h1>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যাচ্ছে না। 
              পেজটি সরানো, মুছে ফেলা বা কখনো ছিল না হতে পারে।
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/"
                className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all shadow-lg"
              >
                প্রচ্ছদে ফিরে যান
              </Link>
              <Link 
                href="/books"
                className="px-8 py-3 bg-white dark:bg-gray-800 text-primary border-2 border-primary rounded-lg font-medium hover:bg-primary/5 transition-all"
              >
                বই সমূহ দেখুন
              </Link>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                দ্রুত লিংক:
              </p>
              <div className="flex flex-wrap gap-4 justify-center text-sm">
                <Link href="/about" className="text-primary hover:text-secondary transition-colors">
                  পরিচিতি
                </Link>
                <span className="text-gray-400">•</span>
                <Link href="/blog" className="text-primary hover:text-secondary transition-colors">
                  ব্লগ
                </Link>
                <span className="text-gray-400">•</span>
                <Link href="/contact" className="text-primary hover:text-secondary transition-colors">
                  যোগাযোগ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
