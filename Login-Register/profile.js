// Import Firebase modules, including Firestore and Authentication
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js';
import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js';
import { getFirestore, doc, getDoc } from 'https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js';

// Firebase configuration (same as before)
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

// Function to display user data
async function displayUserData(uid) {
    try {
        const userDocRef = doc(db, 'users', uid);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
            const userData = userDoc.data();
            console.log('Fetched user data:', userData);  // Debugging log

            // Display user data
            document.getElementById('username').textContent = userData.username || 'User';
            document.getElementById('email').textContent = userData.email;
            document.getElementById('registeredAt').textContent = new Date(userData.registeredAt.seconds * 1000).toLocaleDateString();
        } else {
            console.error('No user data found');
        }
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}



// Function to handle logout
function logout() {
    signOut(auth)
        .then(() => {
            console.log('User signed out');
            window.location.href = '../landing 2.html'; // Redirect to login page after logout
        })
        .catch((error) => {
            console.error('Error signing out:', error);
        });
}

// Check if a user is authenticated
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, retrieve their data from Firestore
        displayUserData(user.uid);
    } else {
        // No user is signed in, redirect to login page
        window.location.href = 'login.html';
    }
});

// Event listener for the logout button
document.getElementById('logout-btn').addEventListener('click', logout);