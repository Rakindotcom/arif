'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { db } from '@/lib/firebase';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';

const categories = ['সব', 'ইসলামিক ইতিহাস', 'সাহাবীদের জীবনী', 'বই সুপারিশ', 'স্বাস্থ্য ও জীবনযাপন', 'উদ্যোক্তা', 'ব্যক্তিগত উন্নয়ন', 'মার্কেটিং'];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null);
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('সব');

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const blogsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setBlogPosts(blogsData);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = selectedCategory === 'সব' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-20 bg-linear-to-br from-primary/10 to-secondary/10">
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
            {/* Mobile: Dropdown */}
            <div className="md:hidden">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 font-medium"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Desktop: Buttons */}
            <div className="hidden md:flex gap-3 justify-center flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white'
                  }`}
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
            <div className="max-w-6xl mx-auto">
              {loading ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                  <p>ব্লগ লোড হচ্ছে...</p>
                </div>
              ) : filteredPosts.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                  <p className="text-gray-600 dark:text-gray-400">কোন ব্লগ পোস্ট নেই</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-3 gap-6">
                  {filteredPosts.map((post) => {
                    // Extract first non-empty paragraph as preview
                    const tempDiv = document.createElement('div');
                    tempDiv.innerHTML = post.content;
                    const paragraphs = tempDiv.querySelectorAll('p');
                    let preview = 'ব্লগ পোস্ট';
                    // Find first non-empty paragraph with substantial content
                    for (const p of paragraphs) {
                      const text = p.textContent?.trim();
                      if (text && text.length > 10) {
                        preview = text;
                        break;
                      }
                    }
                    
                    return (
                      <article key={post.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                        <div className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
                              {post.category}
                            </span>
                            <span className="text-xs text-gray-500">{post.readTime}</span>
                          </div>
                          <h2 className="text-lg font-bold mb-4 line-clamp-3 hover:text-primary transition-colors">
                            {preview}
                          </h2>
                          <button 
                        onClick={() => setSelectedPost(post)}
                        className="text-primary font-medium hover:text-secondary transition-colors inline-flex items-center gap-2 text-sm"
                      >
                        সম্পূর্ণ পড়ুন
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                        </svg>
                      </button>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Modal */}
        {selectedPost && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedPost(null)}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              {/* Close Button */}
              <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4 flex justify-end items-center">
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div className="p-8">
                <div 
                  className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />

                {/* Share */}
                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold mb-4">শেয়ার করুন</h3>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                      Facebook
                    </button>
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
                      WhatsApp
                    </button>
                    <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm">
                      Copy Link
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
