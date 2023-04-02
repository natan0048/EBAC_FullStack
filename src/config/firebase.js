import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDo54kmzWnwJu6A7PhtbJz-iEI-FjEF33k",
  authDomain: "tiktok-journey.firebaseapp.com",
  projectId: "tiktok-journey",
  storageBucket: "tiktok-journey.appspot.com",
  messagingSenderId: "559453271885",
  appId: "1:559453271885:web:c85ece604a3581c5802904"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db;
