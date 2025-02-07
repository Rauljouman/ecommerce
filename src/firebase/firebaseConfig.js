import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzQSR3_8xUTTu199mmIO1d4z8gZM3ATEg",
  authDomain: "ecommerce-c55f4.firebaseapp.com",
  projectId: "ecommerce-c55f4",
  storageBucket: "ecommerce-c55f4.firebasestorage.app",
  messagingSenderId: "415670021036",
  appId: "1:415670021036:web:b81597488f3e6907c42809"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);