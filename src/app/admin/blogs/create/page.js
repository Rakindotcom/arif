'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useFirebase } from '@/contexts/FirebaseContext';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Toast from '@/components/Toast';
import Link from 'next/link';

const categories = [
  'ইসলামিক ইতিহাস',
  'সাহাবীদের জীবনী',
  'বই সুপারিশ',
  'স্বাস্থ্য ও জীবনযাপন',
  'উদ্যোক্তা',
  'ব্যক্তিগত উন্নয়ন',
  'মার্কেটিং'
];

export default function CreateBlog() {
  const { user, loading } = useFirebase();
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState(null);
  const [formData, setFormData] = useState({
    content: '',
    category: categories[0],
    readTime: '৫ মিনিট',
    date: new Date().toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' })
  });

  useEffect(() => {
    if (!loading && !user) {
      router.push('/admin/login');
    }
  }, [user, loading, router]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const formatContentToHTML = (content) => {
    // If content already has HTML tags, return as is
    if (content.includes('<p>') || content.includes('<h2>') || content.includes('<ul>')) {
      return content;
    }
    
    // Convert plain text to HTML
    const paragraphs = content.split('\n\n').filter(p => p.trim());
    return paragraphs.map(p => {
      const trimmed = p.trim();
      // Check if it's a heading (starts with #)
      if (trimmed.startsWith('# ')) {
        return `<h2 class="text-2xl font-bold mb-4 mt-8">${trimmed.substring(2)}</h2>`;
      }
      // Check if it's a list item (starts with - or *)
      if (trimmed.includes('\n-') || trimmed.includes('\n*')) {
        const items = trimmed.split('\n').filter(line => line.trim().startsWith('-') || line.trim().startsWith('*'));
        const listItems = items.map(item => `<li>${item.substring(1).trim()}</li>`).join('\n');
        return `<ul class="list-disc list-inside mb-6 space-y-2">\n${listItems}\n</ul>`;
      }
      // Regular paragraph
      return `<p class="mb-6">${trimmed}</p>`;
    }).join('\n');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const formattedContent = formatContentToHTML(formData.content);
      
      await addDoc(collection(db, 'blogs'), {
        content: formattedContent,
        category: formData.category,
        readTime: formData.readTime,
        date: formData.date,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        authorId: user.uid,
        authorEmail: user.email
      });

      setToast({ message: 'ব্লগ সফলভাবে তৈরি হয়েছে!', type: 'success' });
      setTimeout(() => {
        router.push('/admin/blogs');
      }, 1000);
    } catch (error) {
      console.error('Error creating blog:', error);
      setToast({ message: 'ব্লগ তৈরি করতে সমস্যা হয়েছে', type: 'error' });
      setSaving(false);
    }
  };

  if (loading || !user) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p>লোড হচ্ছে...</p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <Link href="/admin/blogs" className="text-primary hover:underline mb-4 inline-block">
                ← ব্লগ তালিকায় ফিরে যান
              </Link>
              <h1 className="text-3xl font-bold mb-2">নতুন ব্লগ পোস্ট</h1>
              <p className="text-gray-600 dark:text-gray-400">একটি নতুন ব্লগ পোস্ট তৈরি করুন</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <div className="space-y-6">
                {/* Category and Read Time */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium mb-2">
                      ক্যাটাগরি *
                    </label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700"
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="readTime" className="block text-sm font-medium mb-2">
                      পড়ার সময়
                    </label>
                    <input
                      type="text"
                      id="readTime"
                      name="readTime"
                      value={formData.readTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700"
                      placeholder="৫ মিনিট"
                    />
                  </div>
                </div>

                {/* Content */}
                <div>
                  <label htmlFor="content" className="block text-sm font-medium mb-2">
                    ব্লগ পোস্ট লিখুন *
                  </label>
                  <textarea
                    id="content"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    required
                    rows={20}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 resize-none"
                    placeholder="আপনার ব্লগ পোস্ট এখানে লিখুন...&#10;&#10;টিপস:&#10;- দুই লাইন ফাঁকা রাখলে নতুন প্যারাগ্রাফ হবে&#10;- # দিয়ে শুরু করলে হেডিং হবে (যেমন: # শিরোনাম)&#10;- - বা * দিয়ে লিস্ট তৈরি করুন"
                  />
                  <div className="text-sm text-gray-500 mt-2 space-y-1">
                    <p className="font-medium">ফরম্যাটিং টিপস:</p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>দুই লাইন ফাঁকা রাখলে নতুন প্যারাগ্রাফ হবে</li>
                      <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded"># শিরোনাম</code> - বড় হেডিং তৈরি করতে</li>
                      <li><code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">- আইটেম</code> বা <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">* আইটেম</code> - লিস্ট তৈরি করতে</li>
                    </ul>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={saving}
                    className="flex-1 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {saving ? 'সংরক্ষণ হচ্ছে...' : 'ব্লগ পাবলিশ করুন'}
                  </button>
                  <Link
                    href="/admin/blogs"
                    className="px-6 py-3 bg-gray-200 dark:bg-gray-700 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-all text-center"
                  >
                    বাতিল
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </>
  );
}
