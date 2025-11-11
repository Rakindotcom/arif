import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BlogPost({ params }) {
  const post = {
    id: params.id,
    title: 'নাসর ইবনে হাজ্জাজের মদিনা থেকে বসরা অভিযান',
    category: 'ইসলামিক ইতিহাস',
    date: 'নভেম্বর ১০, ২০২৫',
    readTime: '৫ মিনিট',
    content: `
      <p class="mb-6">বিসমিল্লাহির রাহমানির রাহিম। আজকের এই লেখায় আমরা জানব একজন মহান সাহাবীর গল্প, যা আমাদের শেখায় ইসলামে বিনয় এবং সৌন্দর্যের প্রকৃত অর্থ।</p>

      <h2 class="text-2xl font-bold mb-4 mt-8">ঘটনার পটভূমি</h2>
      <p class="mb-6">নাসর ইবনে হাজ্জাজ (রা.) ছিলেন একজন অসাধারণ সুদর্শন সাহাবী। তাঁর সৌন্দর্য এতটাই ছিল যে মদিনার মহিলারা তাঁকে দেখার জন্য রাস্তায় অপেক্ষা করতেন। এই পরিস্থিতি যখন ফিতনার কারণ হয়ে দাঁড়াল, তখন খলিফা উমর (রা.) একটি গুরুত্বপূর্ণ সিদ্ধান্ত নিলেন।</p>

      <h2 class="text-2xl font-bold mb-4 mt-8">উমর (রা.) এর প্রজ্ঞা</h2>
      <p class="mb-6">হযরত উমর (রা.) বুঝতে পারলেন যে এই পরিস্থিতি সমাজের জন্য ক্ষতিকর হতে পারে। তিনি নাসর ইবনে হাজ্জাজকে ডেকে বললেন, "তোমাকে মদিনা ছেড়ে বসরায় চলে যেতে হবে।" এটি ছিল একটি কঠিন সিদ্ধান্ত, কিন্তু সমাজের বৃহত্তর কল্যাণের জন্য প্রয়োজনীয়।</p>

      <h2 class="text-2xl font-bold mb-4 mt-8">শিক্ষা ও উপদেশ</h2>
      <p class="mb-6">এই ঘটনা থেকে আমরা কয়েকটি গুরুত্বপূর্ণ শিক্ষা পাই:</p>
      <ul class="list-disc list-inside mb-6 space-y-2">
        <li>ফিতনা প্রতিরোধ করা প্রতিটি মুসলিমের দায়িত্ব</li>
        <li>ব্যক্তিগত স্বার্থের চেয়ে সমাজের কল্যাণ বড়</li>
        <li>নেতৃত্বের প্রজ্ঞা এবং সাহস</li>
        <li>সাহাবীদের আনুগত্য এবং ত্যাগের মনোভাব</li>
      </ul>

      <h2 class="text-2xl font-bold mb-4 mt-8">আধুনিক প্রাসঙ্গিকতা</h2>
      <p class="mb-6">আজকের যুগে, যখন সোশ্যাল মিডিয়া এবং আধুনিক প্রযুক্তি আমাদের জীবনের অংশ, এই শিক্ষা আরও বেশি প্রাসঙ্গিক। আমাদের উচিত এমন কিছু করা বা প্রদর্শন করা থেকে বিরত থাকা যা সমাজে ফিতনার কারণ হতে পারে।</p>

      <p class="mb-6">আল্লাহ আমাদের সবাইকে সঠিক পথে চলার তৌফিক দিন। আমীন।</p>
    `
  };

  const relatedPosts = [
    { id: 2, title: 'ইহুদি চিকিৎসক যিনি সালাহউদ্দিন আইয়ুবীর চিকিৎসা করেছিলেন' },
    { id: 3, title: 'উসমান ইবনে আফফান: কষ্টের মধ্যে উদারতা' }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <article className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {/* Breadcrumb */}
              <nav className="mb-8 text-sm">
                <Link href="/" className="text-primary hover:underline">প্রচ্ছদ</Link>
                <span className="mx-2">/</span>
                <Link href="/blog" className="text-primary hover:underline">ব্লগ</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-600">বর্তমান লেখা</span>
              </nav>

              {/* Meta */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500">{post.date}</span>
                <span className="text-sm text-gray-500">• {post.readTime}</span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                {post.title}
              </h1>

              {/* Featured Image */}
              <div className="mb-12 h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                <svg className="w-32 h-32 text-primary/30" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                </svg>
              </div>

              {/* Content */}
              <div 
                className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-4">শেয়ার করুন</h3>
                <div className="flex gap-4">
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Facebook
                  </button>
                  <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    WhatsApp
                  </button>
                  <button className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                    Copy Link
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">সম্পর্কিত লেখা</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link 
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.id}`}
                    className="block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <h3 className="text-xl font-bold hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
