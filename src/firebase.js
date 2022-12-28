import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA6B4Ad80o8-T2QLyWfvYCOoN_84RLA5X8",
    authDomain: "decidou-decision-maker.firebaseapp.com",
    databaseURL: "https://decidou-decision-maker-default-rtdb.firebaseio.com",
    projectId: "decidou-decision-maker",
    storageBucket: "decidou-decision-maker.appspot.com",
    messagingSenderId: "692413719655",
    appId: "1:692413719655:web:dc63e1304c817522a4a0c2",
    measurementId: "G-9H1YMC5FY8"
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);