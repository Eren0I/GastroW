
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

export const firebaseConfig = {
  apiKey: "AIzaSyAMYKvp1igKLEFZiuhAwxrVnIjZ1nDC2RE",
  authDomain: "gastrowork-c7e94.firebaseapp.com",
  projectId: "gastrowork-c7e94",
  storageBucket: "gastrowork-c7e94.appspot.com",
  messagingSenderId: "172340720606",
  appId: "1:172340720606:web:c9f4b399584bd5300e234f",
  measurementId: "G-4G42EFL89B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app