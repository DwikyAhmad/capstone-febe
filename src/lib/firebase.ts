import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase config object
const firebaseConfig = {
    apiKey: "AIzaSyD-0J64YEv9uAS5vB7Iroal-OtiXVlwg9U",
    authDomain: "capstone-cc-ece23.firebaseapp.com",
    projectId: "capstone-cc-ece23",
    storageBucket: "capstone-cc-ece23.firebasestorage.app",
    messagingSenderId: "129966569334",
    appId: "1:129966569334:web:bcedad8664829ac9f9ec57",
    measurementId: "G-LR6Z9NQN1W",
};

// Initialize Firebase
const app =
    getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const db = getFirestore(app);
