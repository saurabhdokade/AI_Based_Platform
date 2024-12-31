import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Add this import

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyAW6hNfPMhiouV7ZZ_IzYI6szTBUpy94Zw",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "https://ai-based-training-platfo-ca895.web.app",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "ai-based-training-platfo-ca895",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "ai-based-training-platfo-ca895.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "922681810547",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:922681810547:web:8b5e692405eea5261c9406",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-NWN1KEM01N",
};

// Initialize Firebase only if it hasn't been initialized already
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0]; // if already initialized, use that one
}

const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); // Initialize Firebase Storage
const googleProvider = new GoogleAuthProvider();

googleProvider.addScope("profile");
googleProvider.addScope("email");

export { auth, googleProvider, db, storage }; // Add storage to exports
export default app;