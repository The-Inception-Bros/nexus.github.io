// Import Firebase functions from SDKs
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';
import { getFirestore, doc, setDoc } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js';

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
const db = getFirestore(app);

// Register function
window.register = async function () {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;

    try {
        // Create a new user with email and password
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save additional user data to Firestore
        const userDocRef = doc(db, 'users', user.uid);  // Create a reference to the user's document
        await setDoc(userDocRef, {
            email: user.email,
            username: username, // Placeholder for user's name
            password: password,
            registeredAt: new Date(),
        });

        console.log('User registered with ID: ', user.uid);
        alert('Succesfully Registered')
        window.location.href = 'login.html'; // Redirect to login page after registration

    } catch (error) {
        console.error('Error during registration:', error.message);
        alert('Error: ' + error.message);
    }
};

