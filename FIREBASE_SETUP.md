# Firebase Setup Guide

## ✅ Firebase Initialized

Firebase has been successfully integrated into your Next.js project.

## 📦 Installed Packages

```bash
npm install firebase
```

## 🔧 Configuration

### Firebase Config File
Location: `src/lib/firebase.js`

This file includes:
- Firebase App initialization
- Analytics (client-side only)
- Firestore Database
- Authentication
- Storage

### Firebase Context
Location: `src/contexts/FirebaseContext.js`

Provides authentication state management across the app.

## 🚀 Usage Examples

### 1. Using Firebase in Components

```javascript
'use client';

import { db } from '@/lib/firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';

export default function MyComponent() {
  // Add document
  const addData = async () => {
    try {
      const docRef = await addDoc(collection(db, 'posts'), {
        title: 'নতুন পোস্ট',
        content: 'কন্টেন্ট এখানে...',
        createdAt: new Date()
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  // Get documents
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
    });
  };

  return (
    <div>
      <button onClick={addData}>Add Data</button>
      <button onClick={getData}>Get Data</button>
    </div>
  );
}
```

### 2. Using Authentication

```javascript
'use client';

import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

export default function AuthComponent() {
  const handleLogin = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in:', userCredential.user);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User logged out');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div>
      <button onClick={() => handleLogin('email@example.com', 'password')}>
        Login
      </button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
```

### 3. Using Firebase Context

First, wrap your app with the provider in `src/app/layout.js`:

```javascript
import { FirebaseProvider } from '@/contexts/FirebaseContext';

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <body>
        <FirebaseProvider>
          {children}
        </FirebaseProvider>
      </body>
    </html>
  );
}
```

Then use it in components:

```javascript
'use client';

import { useFirebase } from '@/contexts/FirebaseContext';

export default function UserProfile() {
  const { user, loading } = useFirebase();

  if (loading) return <div>Loading...</div>;

  if (!user) return <div>Please login</div>;

  return (
    <div>
      <h1>Welcome, {user.email}</h1>
    </div>
  );
}
```

### 4. Using Storage

```javascript
'use client';

import { storage } from '@/lib/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default function FileUpload() {
  const handleUpload = async (file) => {
    const storageRef = ref(storage, `images/${file.name}`);
    
    try {
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      console.log('File uploaded:', downloadURL);
    } catch (error) {
      console.error('Upload error:', error);
    }
  };

  return (
    <input 
      type="file" 
      onChange={(e) => handleUpload(e.target.files[0])} 
    />
  );
}
```

## 🔐 Security Rules

### Firestore Rules (Example)
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Public read, authenticated write
    match /posts/{postId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // User-specific data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### Storage Rules (Example)
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /images/{imageId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## 📊 Firebase Services Available

1. **Firestore Database** - NoSQL database
2. **Authentication** - User authentication
3. **Storage** - File storage
4. **Analytics** - User analytics (client-side only)

## 🔗 Useful Links

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firestore Guide](https://firebase.google.com/docs/firestore)
- [Authentication Guide](https://firebase.google.com/docs/auth)
- [Storage Guide](https://firebase.google.com/docs/storage)

## 🛠️ Next Steps

1. Set up Firestore security rules in Firebase Console
2. Set up Storage security rules in Firebase Console
3. Enable Authentication methods you need (Email/Password, Google, etc.)
4. Create collections and documents in Firestore
5. Test the integration

## ⚠️ Important Notes

- Analytics only works on client-side (browser)
- Always use 'use client' directive for components using Firebase
- Keep your Firebase config secure (already in code, but be careful with git)
- Set up proper security rules before going to production

## 🔒 Environment Variables (Optional)

For better security, you can move Firebase config to environment variables:

Create `.env.local`:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDwS6OaM0S2jP81Ujh0BKozxPQ015TX1DI
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=arif-need.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=arif-need
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=arif-need.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=516127516932
NEXT_PUBLIC_FIREBASE_APP_ID=1:516127516932:web:7890f1145da8e2e2b58851
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-BT3Z8XVJVL
```

Then update `src/lib/firebase.js`:
```javascript
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};
```
