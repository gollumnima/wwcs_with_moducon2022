import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { collection, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);

const cloudDB = process.env.REACT_APP_FIRESTORE_CLOUD_DB_NAME ?? '';
const footPrintDB = process.env.REACT_APP_FIRESTORE_FOOTPRINT_DB_NAME ?? '';

export const cloudRef = collection(db, cloudDB);
export const footPrintRef = collection(db, footPrintDB);
