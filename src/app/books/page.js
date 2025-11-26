import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BookCarousel from '@/components/BookCarousel';
import { books } from '@/data/books';

export const metadata = {
  title: 'বই সমূহ - আরিফুল ইসলাম',
  description: 'আরিফুল ইসলামের লেখা বই - উত্তরসূরি, কোটিপতি সাহাবি এবং আরও অনেক',
};

export default function Books() {
  const featuredBook = books.find(book => book.id === 1); // Uttorshuri

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">আমার বই সমূহ</h1>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                ইসলামিক উপন্যাস, সাহাবীদের জীবনী এবং জ্ঞানের সংকলন
              </p>
            </div>

            {/* Author Bio Card */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8 border-2 border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 relative rounded-full overflow-hidden flex-shrink-0 shadow-lg">
                    <Image
                      src="/logo.webp"
                      alt="আরিফুল ইসলাম"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-primary">লেখক পরিচিতি</h3>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
                      আরিফুল ইসলাম, ডাকনাম আরিফ, ঢাকা বিশ্ববিদ্যালয়ে অধ্যয়ন করেছেন। লেখার চেয়ে পড়তে বেশি ভালোবাসেন এবং পড়ার নির্যাসটুকু লেখার মাধ্যমে তুলে ধরেন। তাঁর এই প্রচেষ্টার ফলস্বরূপ এ পর্যন্ত তিনটি বই প্রকাশিত হয়েছে। সমকালীন প্রকাশন থেকে প্রকাশিত 'আর্গুমেন্টস অব আরজু' এবং সমর্পণ প্রকাশন থেকে প্রকাশিত 'প্রদীপ্ত কুটির' তাঁর প্রকাশিত প্রথম দুটি বই। 'চার তারা' তাঁর তৃতীয় বই। এছাড়াও, তাঁর আরও বই রয়েছে—'ওপারেতে সর্বসুখ', 'তারা ঝলমল', এবং 'খোপার বাঁধন'।
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Books Carousel */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">বিশেষ বই সমূহ</h2>
              <BookCarousel books={books.filter(b => b.featured)} />
            </div>
          </div>
        </section>

        {/* All Books */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">সব বই</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {books.map((book) => (
                  <div key={book.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="aspect-[3/4] relative">
                      {book.cover ? (
                        <Image
                          src={book.cover}
                          alt={book.title}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                          <div className="text-center p-6">
                            <svg className="w-20 h-20 mx-auto mb-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                            </svg>
                            <h3 className="text-xl font-bold">{book.title}</h3>
                          </div>
                        </div>
                      )}
                      {/* Book Title Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <h3 className="text-white font-bold text-lg line-clamp-2">{book.title}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full">
                          {book.category}
                        </span>
                        {book.year && (
                          <span className="text-sm text-gray-500">{book.year}</span>
                        )}
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                        {book.description}
                      </p>
                      {book.price && (
                        <div className="flex items-center gap-2 mb-4">
                          <span className="text-2xl font-bold text-primary">{book.price} ৳</span>
                          {book.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">{book.originalPrice} ৳</span>
                          )}
                        </div>
                      )}
                      {book.buyLinks && (
                        <div className="flex gap-2">
                          {book.buyLinks.map((link, index) => (
                            <a
                              key={index}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 text-center px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-all"
                            >
                              {link.store}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">পাঠকদের মতামত</h2>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
                    <span className="font-bold">৫/৫</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                    "খুবই সুন্দর একটা বই। লেখকের প্রথম উপন্যাস হলেও অসাধারণ লেগেছে। 
                    আনাস চরিত্রটি খুবই relatable। ইসলামিক পণ্ডিতদের সম্পর্কে অনেক কিছু 
                    জানতে পারলাম। এই বইটি পড়ার পর ইসলামিক ইতিহাস আরও গভীরভাবে 
                    পড়ার ইচ্ছা জাগে।"
                  </p>
                  <div className="text-sm text-gray-600 dark:text-gray-400">- সামিউর</div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
                    <span className="font-bold">৫/৫</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 italic">
                    "এই বইটি একটি মাস্টারপিস। আপনাকে একটি অসাধারণ যাত্রায় নিয়ে যাবে 
                    যেখানে আপনি এই উম্মাহর মহান পণ্ডিতদের সম্পর্কে বিস্তারিত জানতে পারবেন। 
                    সবাইকে এই বইটি পড়ার পরামর্শ দিচ্ছি।"
                  </p>
                  <div className="text-sm text-gray-600 dark:text-gray-400">- পাঠক</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">আরও বই আসছে শীঘ্রই</h2>
              <p className="text-xl mb-8 opacity-90">
                নতুন বই এবং আপডেট পেতে আমার Facebook পেজ ফলো করুন
              </p>
              <a 
                href="https://www.facebook.com/Ariful.islamDUBD"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-white text-primary rounded-full font-medium hover:bg-gray-100 transition-all shadow-lg"
              >
                Facebook পেজ ফলো করুন
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}


