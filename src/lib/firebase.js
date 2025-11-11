// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwS6OaM0S2jP81Ujh0BKozxPQ015TX1DI",
  authDomain: "arif-need.firebaseapp.com",
  projectId: "arif-need",
  storageBucket: "arif-need.firebasestorage.app",
  messagingSenderId: "516127516932",
  appId: "1:516127516932:web:7890f1145da8e2e2b58851",
  measurementId: "G-BT3Z8XVJVL"
};

// Initialize Firebase (only once)
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Initialize Firebase services
let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, analytics, db, auth, storage };
