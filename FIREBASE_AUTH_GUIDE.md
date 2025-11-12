# Firebase Authentication & Database Integration

## ✅ What's Been Implemented

### 1. Login System
- **Login Modal Component** (`src/components/LoginModal.js`)
  - Email/password authentication
  - Error handling in Bengali
  - Loading states
  - Clean UI with gradient design

- **Header Integration** (`src/components/Header.js`)
  - Login button (visible when not logged in)
  - User menu with email display (visible when logged in)
  - Logout functionality
  - Responsive design

### 2. Firebase Context
- **FirebaseProvider** wraps the entire app in `src/app/layout.js`
- Provides `user` and `loading` state globally
- Automatic auth state management

### 3. Contact Form Integration
- **Contact Page** (`src/app/contact/page.js`)
  - Saves form submissions to Firestore
  - Stores: name, email, subject, message, timestamp, user info
  - Success/error messages in Bengali
  - Loading states during submission

### 4. Admin Dashboard
- **Admin Page** (`src/app/admin/page.js`)
  - View all contact submissions
  - Filter by status (new, read, replied)
  - Update message status
  - Delete messages
  - Protected route (requires login)

## 🔐 Firebase Setup Required

### Step 1: Enable Authentication
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: `arif-need`
3. Go to **Authentication** → **Sign-in method**
4. Enable **Email/Password** authentication
5. Create admin user:
   - Go to **Authentication** → **Users**
   - Click **Add user**
   - Enter email and password

### Step 2: Set Up Firestore Database
1. Go to **Firestore Database**
2. Click **Create database**
3. Choose **Start in production mode** (we'll set rules next)
4. Select a location (asia-south1 for Bangladesh)

### Step 3: Configure Security Rules

#### Firestore Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Contacts collection
    match /contacts/{contactId} {
      // Anyone can create (submit contact form)
      allow create: if true;
      // Only authenticated users can read, update, delete
      allow read, update, delete: if request.auth != null;
    }
    
    // Add more collections as needed
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## 🚀 How to Use

### For Users (Frontend)
1. **Submit Contact Form**
   - Go to `/contact`
   - Fill out the form
   - Submit (works without login)
   - Data saved to Firebase

### For Admin
1. **Login**
   - Click "লগইন" button in header
   - Enter admin email and password
   - Click "লগইন করুন"

2. **View Messages**
   - Go to `/admin` (or add link in header)
   - View all contact submissions
   - Filter by status
   - Update status or delete messages

3. **Logout**
   - Click on your email in header
   - Click "লগআউট"

## 📊 Database Structure

### Contacts Collection
```javascript
{
  name: "string",
  email: "string",
  subject: "string",
  message: "string",
  userId: "string | null",  // If user was logged in
  userEmail: "string",
  createdAt: "timestamp",
  status: "new" | "read" | "replied"
}
```

## 🔗 Component Usage

### Using Firebase Auth in Any Component
```javascript
'use client';
import { useFirebase } from '@/contexts/FirebaseContext';

export default function MyComponent() {
  const { user, loading } = useFirebase();

  if (loading) return <div>Loading...</div>;
  
  if (!user) return <div>Please login</div>;

  return <div>Welcome, {user.email}</div>;
}
```

### Saving Data to Firestore
```javascript
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const saveData = async () => {
  await addDoc(collection(db, 'myCollection'), {
    field1: 'value1',
    createdAt: serverTimestamp()
  });
};
```

### Reading Data from Firestore
```javascript
import { db } from '@/lib/firebase';
import { collection, query, getDocs } from 'firebase/firestore';

const fetchData = async () => {
  const q = query(collection(db, 'myCollection'));
  const snapshot = await getDocs(q);
  const data = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  return data;
};
```

## 🎨 UI Features

### Login Modal
- Gradient background overlay
- Centered modal with close button
- Form validation
- Error messages in Bengali
- Loading state during login

### Header
- Login button when not authenticated
- User menu with email when authenticated
- Dropdown menu for logout
- Responsive design

### Contact Form
- Success message after submission
- Error handling
- Loading state during submission
- Form disabled while submitting
- Auto-clear form on success

### Admin Dashboard
- Filter tabs (all, new, read)
- Status dropdown for each message
- Delete button
- Formatted timestamps in Bengali
- Protected route (redirects if not logged in)

## 🔒 Security Notes

1. **No Signup** - Only login is implemented as requested
2. **Admin Access** - Create admin users manually in Firebase Console
3. **Protected Routes** - Admin page checks for authentication
4. **Firestore Rules** - Set up proper rules in Firebase Console
5. **Public Forms** - Contact form works without login (by design)

## 📝 Next Steps

1. **Create Admin User** in Firebase Console
2. **Set Firestore Rules** as shown above
3. **Test Login** with admin credentials
4. **Test Contact Form** submission
5. **View Messages** in admin dashboard
6. **Optional**: Add admin link to header navigation

## 🛠️ Troubleshooting

### Login Not Working
- Check Firebase Console → Authentication is enabled
- Verify user exists in Authentication → Users
- Check browser console for errors

### Contact Form Not Saving
- Check Firestore Database is created
- Verify security rules allow creation
- Check browser console for errors

### Admin Page Not Loading
- Ensure you're logged in
- Check browser console for errors
- Verify Firestore rules allow read for authenticated users

## 📱 Mobile Responsive
All components are fully responsive and work on mobile devices.
