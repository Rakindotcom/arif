'use client';
import { useEffect, useState } from 'react';
import { useFirebase } from '@/contexts/FirebaseContext';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const { user, loading } = useFirebase();
  const router = useRouter();
  const [contacts, setContacts] = useState([]);
  const [loadingContacts, setLoadingContacts] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    if (!loading && !user) {
      router.push('/');
    }
  }, [user, loading, router]);

  useEffect(() => {
    if (user) {
      fetchContacts();
    }
  }, [user]);

  const fetchContacts = async () => {
    try {
      const q = query(collection(db, 'contacts'), orderBy('createdAt', 'desc'));
      const querySnapshot = await getDocs(q);
      const contactsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setContacts(contactsData);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    } finally {
      setLoadingContacts(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('এই বার্তা মুছে ফেলতে চান?')) return;
    
    try {
      await deleteDoc(doc(db, 'contacts', id));
      setContacts(contacts.filter(c => c.id !== id));
    } catch (error) {
      console.error('Error deleting contact:', error);
      alert('মুছতে সমস্যা হয়েছে');
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateDoc(doc(db, 'contacts', id), { status: newStatus });
      setContacts(contacts.map(c => c.id === id ? { ...c, status: newStatus } : c));
    } catch (error) {
      console.error('Error updating status:', error);
      alert('স্ট্যাটাস আপডেট করতে সমস্যা হয়েছে');
    }
  };

  const filteredContacts = contacts.filter(c => {
    if (filter === 'all') return true;
    return c.status === filter;
  });

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
      <main className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">যোগাযোগ বার্তা</h1>
              <p className="text-gray-600 dark:text-gray-400">সব বার্তা দেখুন এবং পরিচালনা করুন</p>
            </div>

            <div className="mb-6 flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
              >
                সব ({contacts.length})
              </button>
              <button
                onClick={() => setFilter('new')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === 'new'
                    ? 'bg-primary text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
              >
                নতুন ({contacts.filter(c => c.status === 'new').length})
              </button>
              <button
                onClick={() => setFilter('read')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === 'read'
                    ? 'bg-primary text-white'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                }`}
              >
                পড়া হয়েছে ({contacts.filter(c => c.status === 'read').length})
              </button>
            </div>

            {loadingContacts ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
                <p>বার্তা লোড হচ্ছে...</p>
              </div>
            ) : filteredContacts.length === 0 ? (
              <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-xl">
                <p className="text-gray-500">কোনো বার্তা নেই</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredContacts.map((contact) => (
                  <div
                    key={contact.id}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{contact.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{contact.email}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {contact.createdAt?.toDate().toLocaleString('bn-BD')}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <select
                          value={contact.status || 'new'}
                          onChange={(e) => handleStatusChange(contact.id, e.target.value)}
                          className="px-3 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-lg dark:bg-gray-700"
                        >
                          <option value="new">নতুন</option>
                          <option value="read">পড়া হয়েছে</option>
                          <option value="replied">উত্তর দেওয়া হয়েছে</option>
                        </select>
                        <button
                          onClick={() => handleDelete(contact.id)}
                          className="px-3 py-1 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                        >
                          মুছুন
                        </button>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                      <p className="font-bold mb-2">বিষয়: {contact.subject}</p>
                      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
                        {contact.message}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
