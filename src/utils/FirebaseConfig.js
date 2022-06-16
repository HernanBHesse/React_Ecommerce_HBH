// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3NSWrzXD2LFZNBW5OoAf1I8Qmc8ViQNo",
  authDomain: "ecommerce-react-hbh.firebaseapp.com",
  projectId: "ecommerce-react-hbh",
  storageBucket: "ecommerce-react-hbh.appspot.com",
  messagingSenderId: "697691575500",
  appId: "1:697691575500:web:879bd906c680a4084c1e69",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app);

export default db;
