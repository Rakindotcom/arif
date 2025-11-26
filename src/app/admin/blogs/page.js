'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useFirebase } from '@/contexts/FirebaseContext';
import { db } from '@/lib/firebase';
import { collection, getDocs, deleteDoc, doc, orderBy, query } from 'firebase/firestore';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Toast from '@/components/Toast';
import Link from 'next/link';

export default function AdminBlogs() {
  const { user, loading } = useFirebase();
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);
  const [loadingBlogs, setLoadingBlogs] = useState(true);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/admin/login');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user) {
      fetchBlogs();
    }
  }, [user]);

  const fetchBlogs = async () => {
    try {
      const q = query(collection(db, 'blogs'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const blogsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setBlogs(blogsData);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoadingBlogs(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'blogs', id));
      setBlogs(blogs.filter(blog => blog.id !== id));
      setDeleteConfirm(null);
      setToast({ message: 'ব্লগ সফলভাবে মুছে ফেলা হয়েছে', type: 'success' });
    } catch (error) {
      console.error('Error deleting blog:', error);
      setToast({ message: 'ব্লগ মুছতে সমস্যা হয়েছে', type: 'error' });
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
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold mb-2">ব্লগ ম্যানেজমেন্ট</h1>
                <p className="text-gray-600 dark:text-gray-400">ব্লগ পোস্ট তৈরি, সম্পাদনা এবং মুছুন</p>
              </div>
              <Link
                href="/admin/blogs/create"
                className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all shadow-lg"
              >
                + নতুন ব্লগ
              </Link>
            </div>

            {/* Blogs List */}
            {loadingBlogs ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p>ব্লগ লোড হচ্ছে...</p>
              </div>
            ) : blogs.length === 0 ? (
              <div className="text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-xl">
                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                <p className="text-gray-600 dark:text-gray-400 mb-4">কোন ব্লগ পোস্ট নেই</p>
                <Link
                  href="/admin/blogs/create"
                  className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all"
                >
                  প্রথম ব্লগ তৈরি করুন
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {blogs.map((blog) => {
                  // Extract first non-empty paragraph as preview
                  const tempDiv = document.createElement('div');
                  tempDiv.innerHTML = blog.content;
                  const paragraphs = tempDiv.querySelectorAll('p');
                  let preview = 'ব্লগ পোস্ট';
                  // Find first non-empty paragraph
                  for (const p of paragraphs) {
                    const text = p.textContent?.trim();
                    if (text && text.length > 10) {
                      preview = text;
                      break;
                    }
                  }
                  
                  return (
                    <div key={blog.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                              {blog.category}
                            </span>
                            <span className="text-sm text-gray-500">{blog.readTime}</span>
                          </div>
                          <h2 className="text-xl font-bold mb-2 line-clamp-2">{preview}</h2>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>{blog.date}</span>
                          <span>•</span>
                          <span>তৈরি: {new Date(blog.createdAt?.seconds * 1000).toLocaleDateString('bn-BD')}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Link
                          href={`/admin/blogs/edit/${blog.id}`}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                        >
                          সম্পাদনা
                        </Link>
                        <button
                          onClick={() => setDeleteConfirm(blog.id)}
                          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
                        >
                          মুছুন
                        </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Delete Confirmation Modal */}
        {deleteConfirm && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setDeleteConfirm(null)}>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
              <h3 className="text-xl font-bold mb-4">নিশ্চিত করুন</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                আপনি কি নিশ্চিত এই ব্লগ পোস্টটি মুছে ফেলতে চান? এই কাজটি পূর্বাবস্থায় ফেরানো যাবে না।
              </p>
              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => setDeleteConfirm(null)}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  বাতিল
                </button>
                <button
                  onClick={() => handleDelete(deleteConfirm)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  মুছে ফেলুন
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </>
  );
}
