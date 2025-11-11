import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'ব্লগ - আরিফুল ইসলাম',
  description: 'ইসলামিক ইতিহাস, অনুপ্রেরণা এবং ব্যক্তিগত উন্নয়নের লেখা',
};

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'নাসর ইবনে হাজ্জাজের মদিনা থেকে বসরা অভিযান',
      excerpt: 'একজন সাহাবীর যাত্রা, যা ইসলামে বিনয় এবং সৌন্দর্যের শিক্ষা দেয়। এই গল্পটি আমাদের শেখায় কিভাবে একজন মুসলিম তার চরিত্র এবং আচরণ দিয়ে সমাজে প্রভাব ফেলতে পারে।',
      category: 'ইসলামিক ইতিহাস',
      date: 'নভেম্বর ১০, ২০২৫',
      readTime: '৫ মিনিট'
    },
    {
      id: 2,
      title: 'ইহুদি চিকিৎসক যিনি সালাহউদ্দিন আইয়ুবীর চিকিৎসা করেছিলেন',
      excerpt: 'মাইমোনাইডস সুলতানের সেবা করেছিলেন, সহনশীলতা এবং জ্ঞানের উপর জোর দিয়ে। এই ঐতিহাসিক ঘটনা আমাদের শেখায় ইসলামে জ্ঞান এবং মানবতার মূল্য কতটা গুরুত্বপূর্ণ।',
      category: 'ইসলামিক ইতিহাস',
      date: 'সেপ্টেম্বর ১৫, ২০২৫',
      readTime: '৭ মিনিট'
    },
    {
      id: 3,
      title: 'উসমান ইবনে আফফান: কষ্টের মধ্যে উদারতা',
      excerpt: 'খরার সময় সাহায্যের গল্প, সম্পদকে ঐশ্বরিক আমানত হিসেবে দেখানো। হযরত উসমান (রা.) এর জীবন থেকে আমরা শিখি কিভাবে সম্পদ আল্লাহর পথে ব্যয় করতে হয়।',
      category: 'সাহাবীদের জীবনী',
      date: 'আগস্ট ২২, ২০২৫',
      readTime: '৬ মিনিট'
    },
    {
      id: 4,
      title: 'ইসলামিক জ্ঞানের ১০০টি অপরিহার্য বই',
      excerpt: 'নতুনদের জন্য অবশ্যপাঠ্য বইয়ের তালিকা, ব্যাখ্যা সহ। এই তালিকায় রয়েছে কুরআন, হাদিস, ফিকহ, সীরাত এবং আধ্যাত্মিকতার উপর গুরুত্বপূর্ণ বই।',
      category: 'বই সুপারিশ',
      date: 'জুলাই ৮, ২০২৫',
      readTime: '১০ মিনিট'
    },
    {
      id: 5,
      title: 'শীতকালীন স্বাস্থ্য টিপস (শীতল কাল আসার)',
      excerpt: 'সর্দি-কাশির জন্য মধু-আদার মতো ব্যবহারিক প্রতিকার, ইসলামিক অনুশীলনের সাথে সম্পর্কিত। নবী (সা.) এর সুন্নাহ অনুযায়ী স্বাস্থ্য রক্ষার উপায়।',
      category: 'স্বাস্থ্য ও জীবনযাপন',
      date: 'জুন ১২, ২০২৫',
      readTime: '৪ মিনিট'
    },
    {
      id: 6,
      title: 'মার্কেটিং সাইকোলজি: নৈতিক ব্যবসায়িক কৌশল',
      excerpt: 'কিভাবে ইসলামিক মূল্যবোধ বজায় রেখে কার্যকর মার্কেটিং করা যায়। মানুষের আচরণ বুঝে এবং সততার সাথে ব্যবসা পরিচালনার কৌশল।',
      category: 'উদ্যোক্তা',
      date: 'মে ২৫, ২০২৫',
      readTime: '৮ মিনিট'
    }
  ];

  const categories = ['সব', 'ইসলামিক ইতিহাস', 'সাহাবীদের জীবনী', 'বই সুপারিশ', 'স্বাস্থ্য ও জীবনযাপন', 'উদ্যোক্তা'];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">ব্লগ</h1>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                ইসলামিক ইতিহাস, অনুপ্রেরণা এবং ব্যক্তিগত উন্নয়নের লেখা
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-white dark:bg-gray-900 sticky top-16 z-40 shadow-sm">
          <div className="container mx-auto px-4">
            <div className="flex gap-3 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white rounded-full whitespace-nowrap transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid gap-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3 h-64 md:h-auto bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                        <svg className="w-24 h-24 text-primary/30" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                        </svg>
                      </div>
                      <div className="md:w-2/3 p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                            {post.category}
                          </span>
                          <span className="text-sm text-gray-500">{post.date}</span>
                          <span className="text-sm text-gray-500">• {post.readTime}</span>
                        </div>
                        <h2 className="text-2xl font-bold mb-3 hover:text-primary transition-colors">
                          <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        <Link 
                          href={`/blog/${post.id}`}
                          className="text-primary font-medium hover:text-secondary transition-colors inline-flex items-center gap-2"
                        >
                          সম্পূর্ণ পড়ুন
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center gap-2 mt-12">
                <button className="px-4 py-2 bg-primary text-white rounded-lg font-medium">1</button>
                <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-primary hover:text-white transition-colors">2</button>
                <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-primary hover:text-white transition-colors">3</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
