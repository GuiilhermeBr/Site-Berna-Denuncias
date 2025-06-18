import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCT4j99meB1Z8jiKEC1J-4OmLtRGtP6rxg",
    authDomain: "disquedenuncia-3b029.firebaseapp.com",
    projectId: "disquedenuncia-3b029",
    storageBucket: "disquedenuncia-3b029.firebasestorage.app",
    messagingSenderId: "918952905658",
    appId: "1:918952905658:web:990ddc618e1d3c3c646b83",
    measurementId: "G-0CSVL4WV6T"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { db, auth }