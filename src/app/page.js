import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookCarousel from '@/components/BookCarousel';
import { getFeaturedBooks } from '@/data/books';

export default function Home() {
  const featuredPosts = [
    { id: 1, title: 'নাসর ইবনে হাজ্জাজের মদিনা থেকে বসরা অভিযান', category: 'ইসলামিক ইতিহাস' },
    { id: 2, title: 'ইহুদি চিকিৎসক যিনি সালাহউদ্দিন আইয়ুবীর চিকিৎসা করেছিলেন', category: 'ইসলামিক ইতিহাস' },
    { id: 3, title: 'উসমান ইবনে আফফান: কষ্টের মধ্যে উদারতা', category: 'সাহাবীদের জীবনী' }
  ];

  const featuredBooks = getFeaturedBooks();

  return (
    <>
      <Header />
      <main>
        {/* Hero Section - Compact */}
        <section className="relative overflow-hidden islamic-pattern compact-section">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
          <div className="container mx-auto px-4 py-12 md:py-16 relative">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-4">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-3 leading-tight">
                <span className="gradient-text">আরিফুল ইসলাম</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-2">
                মার্কেটিং সাইকোলজি বিশেষজ্ঞ • লেখক • উদ্যোক্তা
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                নিড (Need) কোর্স প্ল্যাটফর্মের সহ-প্রতিষ্ঠাতা
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/books" className="px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all shadow-md text-sm">
                  বই সমূহ
                </Link>
                <Link href="/blog" className="px-6 py-2.5 bg-white dark:bg-gray-800 text-primary border border-primary rounded-lg font-medium hover:bg-primary/5 transition-all text-sm">
                  ব্লগ
                </Link>
                <Link href="/contact" className="px-6 py-2.5 bg-secondary text-white rounded-lg font-medium hover:bg-secondary/90 transition-all shadow-md text-sm">
                  যোগাযোগ
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats - Compact */}
        <section className="py-6 bg-gradient-to-r from-primary to-islamic-green text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-4 gap-4 text-center max-w-3xl mx-auto">
              <div>
                <div className="text-2xl md:text-3xl font-bold mb-1">৯২K+</div>
                <div className="text-xs opacity-90">ফলোয়ার</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold mb-1">১১+</div>
                <div className="text-xs opacity-90">বই</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold mb-1">৫০০+</div>
                <div className="text-xs opacity-90">পোস্ট</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold mb-1">৫+</div>
                <div className="text-xs opacity-90">বছর</div>
              </div>
            </div>
          </div>
        </section>

        {/* Books - Compact */}
        <section className="compact-section bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                প্রকাশিত বই
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">ইসলামিক উপন্যাস ও সাহাবীদের জীবনী</p>
            </div>
            
            <div className="max-w-6xl mx-auto mb-8">
              <BookCarousel books={featuredBooks} />
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-6 hidden">
                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border-2 border-primary/20">
                  <div className="flex gap-4">
                    <div className="w-20 h-28 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="inline-block px-2 py-0.5 bg-red-100 text-red-600 rounded text-xs font-bold mb-2">বেস্টসেলার</div>
                      <h3 className="text-xl font-bold mb-1">উত্তরসূরি</h3>
                      <div className="flex items-center gap-2 text-sm mb-2">
                        <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        <span className="font-bold">৪.৯/৫</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-600">২৬২ পৃষ্ঠা</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg font-bold text-primary">২৮৬৳</span>
                        <span className="text-sm text-gray-500 line-through">৪০৮৳</span>
                      </div>
                      <Link href="/books" className="text-sm text-primary font-medium hover:text-secondary">বিস্তারিত →</Link>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border-2 border-primary/20">
                  <div className="flex gap-4">
                    <div className="w-20 h-28 bg-gradient-to-br from-islamic-green to-secondary rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                    <div className="flex-1">
                      <div className="inline-block px-2 py-0.5 bg-green-100 text-green-600 rounded text-xs font-bold mb-2">#৮ বেস্টসেলার</div>
                      <h3 className="text-xl font-bold mb-1">তারা ঝলমল</h3>
                      <div className="flex items-center gap-2 text-sm mb-2">
                        <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        <span className="font-bold">৫.০/৫</span>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-600">১৯২ পৃষ্ঠা</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg font-bold text-primary">২৪০৳</span>
                        <span className="text-sm text-gray-500 line-through">৩২০৳</span>
                      </div>
                      <Link href="/books" className="text-sm text-primary font-medium hover:text-secondary">বিস্তারিত →</Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  'কোটিপতি সাহাবি',
                  'চার তারা',
                  'ওপারেতে সর্বসুখ',
                  'প্রদীপ্ত কুটির',
                  'খোঁপার বাঁধন',
                  'পুণ্যবতী',
                  'আর্গুমেন্টস অব আরজু'
                ].map((book, i) => (
                  <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center border border-gray-200 dark:border-gray-700 hover:border-primary transition-colors">
                    <h4 className="font-bold text-sm leading-tight">{book}</h4>
                  </div>
                ))}
              </div>

              <div className="text-center mt-6">
                <Link href="/books" className="inline-block px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all text-sm">
                  সব বই দেখুন
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts - Compact */}
        <section className="compact-section bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                সাম্প্রতিক লেখা
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {featuredPosts.map((post) => (
                <Link key={post.id} href={`/blog/${post.id}`} className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow p-4 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded">{post.category}</span>
                  </div>
                  <h3 className="font-bold text-sm mb-2 line-clamp-2">{post.title}</h3>
                  <span className="text-xs text-primary font-medium">পড়ুন →</span>
                </Link>
              ))}
            </div>

            <div className="text-center mt-6">
              <Link href="/blog" className="inline-block px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all text-sm">
                সব লেখা
              </Link>
            </div>
          </div>
        </section>

        {/* NEED - Compact */}
        <section className="compact-section bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6 md:p-8 border-2 border-primary/20">
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">নিড (Need)</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">অনলাইন শিক্ষা কোর্স প্ল্যাটফর্ম</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">৯৩K+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">ফলোয়ার</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">৭৭K+</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">লাইক</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">১০০%</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">সুপারিশ</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-3 mb-6">
                  {[
                    'অনলাইন কোর্স',
                    'রেকর্ডেড ক্লাস',
                    'PDF গাইড'
                  ].map((service, i) => (
                    <div key={i} className="text-center p-3 bg-white dark:bg-gray-800 rounded-lg border border-primary/20">
                      <div className="text-sm font-bold">{service}</div>
                    </div>
                  ))}
                </div>

                <div className="text-center">
                  <a href="https://www.facebook.com/Needconnectivity" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all text-sm">
                    নিড পেজ →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA - Compact */}
        <section className="compact-section bg-gradient-to-r from-primary via-islamic-green to-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">যোগাযোগ করুন</h2>
              <p className="text-sm mb-6 opacity-90">মতামত, প্রশ্ন বা সহযোগিতার জন্য</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/contact" className="px-6 py-2 bg-white text-primary rounded-lg font-medium hover:bg-gray-100 transition-all text-sm">
                  যোগাযোগ ফর্ম
                </Link>
                <a href="https://www.facebook.com/Ariful.islamDUBD" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-white/10 backdrop-blur text-white border border-white/30 rounded-lg font-medium hover:bg-white/20 transition-all text-sm">
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
