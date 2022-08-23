import { getFirestore } from "firebase/firestore";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "REACT_APP_APIKEY",
  authDomain: "astronomie-d8afd.firebaseapp.com",
  projectId: "astronomie-d8afd",
  storageBucket: "astronomie-d8afd.appspot.com",
  messagingSenderId: "810497130581",
  appId: "1:810497130581:web:81cb3f886e8d21b14714dc"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export {db}