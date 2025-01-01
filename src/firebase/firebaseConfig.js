import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
//   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
// };


const firebaseConfig = {
  apiKey: "AIzaSyBw4Ef_L1SGoQSNNBBqu2ma8izGMqQFJW4",
  authDomain: "e-commerce-696e8.firebaseapp.com",
  projectId: "e-commerce-696e8",
  storageBucket: "e-commerce-696e8.firebasestorage.app",
  messagingSenderId: "663292733395",
  appId: "1:663292733395:web:5222d02f8258cf408b7126",
  measurementId: "G-DF5D59C3KH"
};


const app = initializeApp(firebaseConfig);
const analytic = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

googleProvider.addScope("profile");
googleProvider.addScope("email");

export { auth, googleProvider, db };
export default app;
