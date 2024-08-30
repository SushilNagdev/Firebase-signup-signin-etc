import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {getAuth, 
        createUserWithEmailAndPassword, 
        signInWithEmailAndPassword,
        onAuthStateChanged,
        signOut,
        sendSignInLinkToEmail,
        GoogleAuthProvider , signInWithPopup, sendEmailVerification  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBf4Y94FEC6etn2ZfcLZF_XLrQLqGfprko",
    authDomain: "signup-4d863.firebaseapp.com",
    projectId: "signup-4d863",
    storageBucket: "signup-4d863.appspot.com",
    messagingSenderId: "142336306733",
    appId: "1:142336306733:web:51b585f927e275c45e12a4"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export{
    auth,
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    sendSignInLinkToEmail,
    GoogleAuthProvider,
    signInWithPopup,
    sendEmailVerification
    };
    
