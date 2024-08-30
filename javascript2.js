// Import necessary functions from Firebase
import { 
    auth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut, 
    sendEmailVerification, 
    GoogleAuthProvider, 
    signInWithPopup 
} from "./firebase2.js";

// Listener to track authentication state changes
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is logged in with UID:", user.uid);
        if (!user.emailVerified) {
            console.log("Email is not verified yet. Please verify your email.");
            alert("Email not verified. Please check your inbox for the verification email.");
        } else {
            console.log("Email is verified.");
        }
    } else {
        console.log("User is logged out");
    }
});

// Signup function to create a new user
let signup = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("Password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
            console.log("User signed up:", res.user);
            sendEmailVerification(res.user)
                .then(() => {
                    console.log("Verification email sent.");
                    alert("Verification email sent. Please check your inbox.");
                })
                .catch((error) => {
                    console.error("Error sending email verification:", error);
                    alert("Error sending verification email: " + error.message);
                });
        })
        .catch((error) => {
            console.error("Signup error:", error);
            alert("Error signing up: " + error.message);
        });
};

// Signin function to authenticate the user
let signin = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("Password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
            if (res.user.emailVerified) {
                console.log("User signed in:", res.user);
                alert("Sign in successful!");
            } else {
                console.log("Email not verified. Please verify your email.");
                alert("Email not verified. Please check your inbox for the verification email.");
            }
        })
        .catch((error) => {
            console.error("Signin error:", error);
            alert("Error signing in: " + error.message);
        });
};

// Logout function to sign out the user
let logout = () => {
    signOut(auth)
        .then(() => {
            console.log('Sign-out successful.');
            alert("Sign-out successful.");
        })
        .catch((error) => {
            console.error("Logout error:", error);
            alert("Error signing out: " + error.message);
        });
};

// Google Sign-in function
let googleSignIn = () => {
    let provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            console.log("User signed in with Google:", result.user);
            alert("Sign in with Google successful!");
        })
        .catch((error) => {
            console.error("Google Sign-in error:", error);
            alert("Error signing in with Google: " + error.message);
        });
};

// Event listeners
document.querySelector('.signupBtn').addEventListener('click', signup);
document.querySelector('.signinbtn').addEventListener('click', signin);
document.querySelector('#logoutBtn').addEventListener('click', logout);
document.querySelector('#googleSignInBtn').addEventListener('click', googleSignIn);
