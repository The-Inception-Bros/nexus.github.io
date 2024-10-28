// Import Firebase modules, including Firestore
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';
import { getFirestore, doc, getDoc, setDoc } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js';

// Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAg7KCmN3uBaFiMxOpWFdDz4yYxc7i8bXY",
    authDomain: "aiweb-90ebe.firebaseapp.com",
    projectId: "aiweb-90ebe",
    storageBucket: "aiweb-90ebe.appspot.com",
    messagingSenderId: "927434244753",
    appId: "1:927434244753:web:0565f5b39e947a5d6ab530",
    measurementId: "G-GX1HNTGQZG"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

// Function to fetch user data from Firestore
async function fetchUserData(uid) {
    try {
        const userDocRef = doc(db, 'users', uid);
        if (userDoc.exists()) {
            const userData = userDoc.data();
            console.log('User data:', userData);
            // You can now use this data in your application
        } else {
            console.log('No such document!');
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

// Expose functions to global scope
window.login = async function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        // Login successful
        const user = userCredential.user;
        console.log('Logged in as:', user.email);
        
        // Fetch user data from Firestore using their UID
        await fetchUserData(user.uid);
        
        // Redirect or handle successful login
        window.location.href = 'profile.html'; // Change this as needed
    } catch (error) {
        // Handle Errors here.
        console.error('Error during login:', error.message);
        alert(error.message);
    }
};

window.googleSignIn = async function() {
    const provider = new GoogleAuthProvider();

    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        const userDocRef = doc(db, 'users', user.uid);
        const userDoc = await getDoc(userDocRef);

        if (!userDoc.exists()) {
            // User doesn't exist in Firestore, create a new document with Google details
            await setDoc(userDocRef, {
                username: user.displayName || "Google User",  // Google display name or default
                email: user.email,
                registeredAt: new Date()
            });
            console.log('New user data saved to Firestore.');
        } else {
            console.log('User already exists in Firestore.');
        }

        // Redirect to profile page
        window.location.href = 'profile.html';
    } catch (error) {
        console.error('Error during Google sign-in:', error.message);
        alert(error.message);
    }
}