import Link from 'next/link';
import Image from 'next/image';
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
        {/* Hero Section with Image */}
        <section className="relative overflow-hidden min-h-[550px] sm:min-h-[600px] md:min-h-[600px]">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/hero.png"
              alt="আরিফুল ইসলাম"
              fill
              priority
              className="object-cover object-top md:object-center"
              quality={90}
            />
            {/* Overlay for better text readability - stronger on mobile */}
            <div className="absolute inset-0 bg-linear-to-t md:bg-linear-to-r from-black/90 via-black/50 via-50% to-transparent md:from-black/70 md:via-black/40 md:to-transparent"></div>
          </div>

          {/* Content - Bottom aligned on mobile, left aligned on desktop */}
          <div className="container mx-auto px-4 relative h-full min-h-[550px] sm:min-h-[600px] md:min-h-[600px] flex items-end md:items-center">
            <div className="w-full md:max-w-2xl pb-12 md:pb-0 md:py-24">
              <div className="mb-3 md:mb-4">
                <span className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 bg-white/10 backdrop-blur-sm text-white rounded-full text-xs md:text-sm font-medium border border-white/20">
                  بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2 md:mb-4 leading-tight text-white drop-shadow-2xl">
                আরিফুল ইসলাম
              </h1>
              <p className="text-base sm:text-xl md:text-2xl text-white/95 mb-2 md:mb-3 drop-shadow-lg">
                মার্কেটিং সাইকোলজি বিশেষজ্ঞ • লেখক • উদ্যোক্তা
              </p>
              <p className="text-sm sm:text-base text-white/90 mb-4 md:mb-8 drop-shadow-lg">
                নিড (Need) এর সহ-প্রতিষ্ঠাতা
              </p>
              <div className="flex flex-wrap gap-2 md:gap-3">
                <Link href="/books" className="px-4 py-2 md:px-6 md:py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl text-sm md:text-base">
                  বই সমূহ
                </Link>
                <Link href="/blog" className="px-4 py-2 md:px-6 md:py-3 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg font-medium hover:bg-white/20 transition-all text-sm md:text-base">
                  ব্লগ
                </Link>
                <Link href="/contact" className="px-4 py-2 md:px-6 md:py-3 bg-secondary text-white rounded-lg font-medium hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl text-sm md:text-base">
                  যোগাযোগ
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats - Compact */}
        <section className="py-6 bg-linear-to-r from-primary to-islamic-green text-white">
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
              <div className="hidden md:grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-linear-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border-2 border-primary/20">
                  <div className="flex gap-4">
                    <div className="w-20 h-28 bg-linear-to-br from-primary to-secondary rounded-lg flex items-center justify-center shrink-0 shadow-lg">
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

                <div className="bg-linear-to-br from-primary/10 to-secondary/10 rounded-xl p-6 border-2 border-primary/20">
                  <div className="flex gap-4">
                    <div className="w-20 h-28 bg-linear-to-br from-islamic-green to-secondary rounded-lg flex items-center justify-center shrink-0 shadow-lg">
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
                  <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow text-center border border-gray-200 dark:border-gray-700 hover:border-primary transition-colors h-20 flex items-center justify-center">
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
              <div className="bg-linear-to-br from-primary/10 to-secondary/10 rounded-xl p-6 md:p-8 border-2 border-primary/20">
                <div className="text-center mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">নিড (Need)</h2>
                  <p className="text-sm text-gray-600 dark:text-gray-400">অনলাইন শিক্ষা প্রতিষ্ঠান</p>
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
                    'অনলাইন শিক্ষা',
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
        <section className="compact-section bg-linear-to-r from-primary via-islamic-green to-secondary text-white">
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
