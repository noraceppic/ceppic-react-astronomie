
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "astro-e4037.firebaseapp.com",
  projectId: "astro-e4037",
  storageBucket: "astro-e4037.appspot.com",
  messagingSenderId: "966413846497",
  appId: "1:966413846497:web:cfce9722d3f1edad7ef4a0"
};



const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};