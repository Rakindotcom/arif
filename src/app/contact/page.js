'use client';
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useFirebase } from '@/contexts/FirebaseContext';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const { user } = useFirebase();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      // Save to Firebase
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        userId: user?.uid || null,
        userEmail: user?.email || formData.email,
        createdAt: serverTimestamp(),
        status: 'new'
      });

      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      console.error('Error saving contact:', err);
      setError('বার্তা পাঠাতে সমস্যা হয়েছে। আবার চেষ্টা করুন।');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">যোগাযোগ</h1>
              <p className="text-xl text-gray-700 dark:text-gray-300">
                আপনার মতামত, প্রশ্ন বা সহযোগিতার জন্য আমার সাথে যোগাযোগ করুন
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">বার্তা পাঠান</h2>
                  
                  {success && (
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-600 dark:text-green-400 mb-6">
                      ধন্যবাদ! আপনার বার্তা সফলভাবে পাঠানো হয়েছে।
                    </div>
                  )}

                  {error && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-600 dark:text-red-400 mb-6">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        নাম *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 disabled:opacity-50"
                        placeholder="আপনার নাম লিখুন"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        ইমেইল *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 disabled:opacity-50"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        বিষয় *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 disabled:opacity-50"
                        placeholder="বার্তার বিষয়"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        বার্তা *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={loading}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 resize-none disabled:opacity-50"
                        placeholder="আপনার বার্তা লিখুন..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? 'পাঠানো হচ্ছে...' : 'বার্তা পাঠান'}
                    </button>
                  </form>
                </div>

                {/* Contact Info */}
                <div>
                  <h2 className="text-2xl font-bold mb-6">যোগাযোগের তথ্য</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">ঠিকানা</h3>
                        <p className="text-gray-600 dark:text-gray-400">ঢাকা, বাংলাদেশ</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Facebook</h3>
                        <div className="space-y-2">
                          <div>
                            <a 
                              href="https://www.facebook.com/Ariful.islamDUBD" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-primary hover:text-secondary transition-colors block"
                            >
                              @Ariful.islamDUBD
                            </a>
                            <p className="text-xs text-gray-600 dark:text-gray-400">ব্যক্তিগত পেজ - ৯২,০০০+ ফলোয়ার</p>
                          </div>
                          <div>
                            <a 
                              href="https://www.facebook.com/Needconnectivity" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-primary hover:text-secondary transition-colors block"
                            >
                              @Needconnectivity
                            </a>
                            <p className="text-xs text-gray-600 dark:text-gray-400">নিড (Need) - ৯৩,০০০+ ফলোয়ার</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">ফোন (নিড)</h3>
                        <a 
                          href="tel:+8801951433164"
                          className="text-primary hover:text-secondary transition-colors"
                        >
                          +880 1951-433164
                        </a>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">কোর্স সংক্রান্ত তথ্যের জন্য</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">প্রতিক্রিয়া সময়</h3>
                        <p className="text-gray-600 dark:text-gray-400">সাধারণত ২৪-৪৮ ঘন্টার মধ্যে</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-gradient-to-br from-primary to-secondary text-white rounded-2xl">
                    <h3 className="text-xl font-bold mb-3">সহযোগিতার সুযোগ</h3>
                    <p className="mb-4">
                      আমি নিম্নলিখিত বিষয়ে সহযোগিতা করতে আগ্রহী:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <span>✓</span> লেখা ও কন্টেন্ট তৈরি
                      </li>
                      <li className="flex items-center gap-2">
                        <span>✓</span> মার্কেটিং পরামর্শ
                      </li>
                      <li className="flex items-center gap-2">
                        <span>✓</span> বক্তৃতা ও সেমিনার
                      </li>
                      <li className="flex items-center gap-2">
                        <span>✓</span> ব্যবসায়িক পরামর্শ
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">সাধারণ প্রশ্ন</h2>
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg font-bold mb-2">আপনি কি ব্যক্তিগত পরামর্শ দেন?</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    হ্যাঁ, আমি মার্কেটিং, ব্যবসা এবং ব্যক্তিগত উন্নয়নের বিষয়ে পরামর্শ দিয়ে থাকি। 
                    বিস্তারিত জানতে যোগাযোগ করুন।
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg font-bold mb-2">আপনার লেখা কোথায় পাওয়া যায়?</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    আমার সব লেখা এই ওয়েবসাইটের ব্লগ সেকশনে এবং Facebook পেজে পাওয়া যায়।
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg font-bold mb-2">সহযোগিতার জন্য কিভাবে যোগাযোগ করব?</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    উপরের ফর্মটি পূরণ করুন অথবা Facebook এর মাধ্যমে সরাসরি বার্তা পাঠান।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
