import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'পরিচিতি - আরিফুল ইসলাম',
  description: 'আরিফুল ইসলাম সম্পর্কে জানুন - লেখক, মার্কেটিং সাইকোলজি বিশেষজ্ঞ ও উদ্যোক্তা',
};

export default function About() {
  const expertise = [
    { title: 'মার্কেটিং সাইকোলজি বিশেষজ্ঞ', desc: 'ক্রেতা আচরণ, সিদ্ধান্ত গ্রহণ ও ব্যবসায়িক কৌশল' },
    { title: 'লেখক', desc: 'ইসলামিক উপন্যাস ও সাহাবীদের জীবনী' },
    { title: 'উদ্যোক্তা', desc: 'নিড (Need) এর সহ-প্রতিষ্ঠাতা' },
    { title: 'শিক্ষক', desc: 'অনলাইন শিক্ষা' }
  ];

  const achievements = [
    '৯২,০০০+ ব্যক্তিগত পেজ ফলোয়ার',
    '৯৩,০০০+ নিড (Need) পেজ ফলোয়ার',
    '১১+ প্রকাশিত বই (উত্তরসূরি, তারা ঝলমল, কোটিপতি সাহাবি, প্রদীপ্ত কুটির)',
    '৫০০+ অনুপ্রেরণামূলক পোস্ট',
    '১০০+ বই সুপারিশ তালিকা',
    'নিড (Need) এর সহ-প্রতিষ্ঠাতা',
    'বেস্টসেলার লেখক (উত্তরসূরি - ৪.৯/৫, তারা ঝলমল - ৫.০/৫)',
    'প্রদীপ্ত কুটির - ৫.০/৫ (১৮ রিভিউ)'
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-20 bg-linear-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">আমার সম্পর্কে</h1>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                আসসালামু আলাইকুম! আমি আরিফুল ইসলাম
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  আমি একজন মার্কেটিং সাইকোলজি বিশেষজ্ঞ, লেখক এবং উদ্যোক্তা। 
                  আমি মানব মনোবিজ্ঞান এবং ইসলামিক জ্ঞানের সমন্বয়ে কাজ করার প্রতি আগ্রহী।
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  মার্কেটিং সাইকোলজিতে আমার বিশেষত্ব হল মানুষের আচরণ, সিদ্ধান্ত গ্রহণ প্রক্রিয়া 
                  এবং ক্রেতা মনোবিজ্ঞান বুঝে নৈতিক ও কার্যকর ব্যবসায়িক কৌশল তৈরি করা। 
                  আমি বিশ্বাস করি, ব্যবসা শুধু লাভের জন্য নয়, বরং সমাজের কল্যাণের জন্যও হওয়া উচিত।
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  আমার লেখায় আমি ইসলামিক ইতিহাসের গল্প, সাহাবীদের জীবনী, 
                  ব্যক্তিগত উন্নয়ন এবং মার্কেটিং সাইকোলজির বিষয়গুলো তুলে ধরি। 
                  আমার বিশ্বাস, ইসলামিক শিক্ষা এবং আধুনিক জ্ঞানের সমন্বয়ে 
                  আমরা একটি সুন্দর ও সফল জীবন গড়তে পারি।
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  আমি নিড (Need) এর সহ-প্রতিষ্ঠাতা, যা একটি অনলাইন শিক্ষা প্রতিষ্ঠান। 
                  এর মাধ্যমে আমরা রেকর্ডেড ক্লাস এবং PDF গাইড প্রদান করে 
                  ৯৩,০০০+ মানুষকে জ্ঞান অর্জন এবং ব্যক্তিগত উন্নয়নে সাহায্য করছি।
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  আমি একজন লেখক হিসেবে ইসলামিক উপন্যাস এবং জ্ঞানের বই লিখি। 
                  আমার বেস্টসেলার বই "উত্তরসূরি" (Uttorshuri) ৪.৯/৫ রেটিং পেয়েছে 
                  এবং পাঠকদের কাছে ব্যাপক সাড়া ফেলেছে। এছাড়াও "কোটিপতি সাহাবি" 
                  এবং "চার তারা" সহ আরও বই প্রকাশ করেছি।
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Books Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">আমার বই সমূহ</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-linear-to-br from-primary/10 to-secondary/10 p-6 rounded-xl">
                  <div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">উত্তরসূরি (Uttorshuri)</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        ইসলামিক উপন্যাস • ২০২৩ • ২৬২ পৃষ্ঠা
                      </p>
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        <span className="font-bold">৪.৯/৫</span>
                        <span className="text-sm text-gray-500">(১০ রিভিউ)</span>
                      </div>
                      <p className="text-sm">আধুনিক শিক্ষা ও ইসলামিক জ্ঞানের পার্থক্য</p>
                    </div>
                  </div>
                </div>

                <div className="bg-linear-to-br from-primary/10 to-secondary/10 p-6 rounded-xl">
                  <div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">তারা ঝলমল</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        সাহাবীদের জীবনী • ২০২৩ • ১৯২ পৃষ্ঠা
                      </p>
                      <div className="flex items-center gap-2 mb-2">
                        <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                        <span className="font-bold">৫.০/৫</span>
                        <span className="text-sm text-gray-500">(৪ রিভিউ)</span>
                      </div>
                      <p className="text-sm">সাহাবীদের জীবনী সহজ ভাষায়</p>
                    </div>
                  </div>
                </div>

                <div className="bg-linear-to-br from-primary/10 to-secondary/10 p-6 rounded-xl">
                  <div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">ওপারেতে সর্বসুখ</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        ইসলামি বই • সমকালীন প্রকাশন
                      </p>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-primary font-bold">১২৯ ৳</span>
                        <span className="text-xs text-gray-500 line-through">১৭২ ৳</span>
                      </div>
                      <p className="text-sm">আধ্যাত্মিক পরিপূর্ণতা ও পরকালের সুখ</p>
                    </div>
                  </div>
                </div>

                <div className="bg-linear-to-br from-primary/10 to-secondary/10 p-6 rounded-xl">
                  <div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">কোটিপতি সাহাবি</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        সাহাবীদের জীবনী • ২০২২
                      </p>
                      <p className="text-sm">ধনী সাহাবীদের জীবন ও সম্পদ ব্যবস্থাপনা</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <a 
                  href="/books"
                  className="inline-block px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all shadow-lg"
                >
                  সব বই দেখুন
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* NEED Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">নিড (Need) - আমার উদ্যোগ</h2>
              
              <div className="bg-linear-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl mb-8">
                <div className="flex items-start gap-6">
                  <svg className="w-16 h-16 text-primary shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">অনলাইন শিক্ষা প্রতিষ্ঠান</h3>
                    <p className="text-lg leading-relaxed mb-4">
                      নিড (Need) একটি অনলাইন শিক্ষা প্রতিষ্ঠান যা ব্যবহারিক জ্ঞান প্রদান করে। 
                      আমরা বাংলাদেশের মানুষদের জন্য বিশেষভাবে ডিজাইন করা রেকর্ডেড ক্লাস, 
                      লাইভ সেশন এবং PDF গাইড তৈরি করি।
                    </p>
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">৯৩,০০০+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">ফলোয়ার</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">৭৭,০০০+</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">লাইক</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary">১০০%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">সুপারিশ</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <h4 className="text-xl font-bold mb-3">শিক্ষা প্যাকেজ</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>৫.৫ ঘন্টার রেকর্ডেড ভিডিও</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>১ ঘন্টা ৪৭ মিনিট বোনাস কন্টেন্ট</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>৩০ পৃষ্ঠার শিক্ষা গাইড PDF</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>২০০ পৃষ্ঠার বিস্তারিত রিসোর্স বুক</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>লাইফটাইম এক্সেস</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <h4 className="text-xl font-bold mb-3">আমাদের ফোকাস</h4>
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>ব্যক্তিগত উন্নয়ন</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>জীবন দক্ষতা উন্নয়ন</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>সমস্যা সমাধান কৌশল</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-1">✓</span>
                      <span>ইসলামিক জ্ঞান</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center mt-8">
                <a 
                  href="https://www.facebook.com/Needconnectivity" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all shadow-lg"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  নিড পেজ ভিজিট করুন
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">আমার দক্ষতা</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {expertise.map((item, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                    <div className="text-5xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">অর্জন</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="p-6 bg-linear-to-br from-primary/5 to-secondary/5 rounded-xl">
                    <p className="text-lg">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20 bg-linear-to-br from-primary to-secondary text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">আমার লক্ষ্য</h2>
              <p className="text-xl leading-relaxed mb-8">
                আমার লক্ষ্য হল ইসলামিক জ্ঞান এবং আধুনিক মনোবিজ্ঞানের সমন্বয়ে 
                মানুষের জীবনে ইতিবাচক পরিবর্তন আনা। আমি চাই প্রতিটি মানুষ 
                তাদের ঈমান, জ্ঞান এবং দক্ষতা দিয়ে একটি সফল ও অর্থবহ জীবন গড়ুক।
              </p>
              <p className="text-lg opacity-90">
                আসুন, একসাথে শিখি, বেড়ে উঠি এবং সমাজের কল্যাণে কাজ করি।
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}



