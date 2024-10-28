// Import necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";

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
const db = getFirestore(app);

// Function to display the review with formatted date and time
function displayReview(productName, rating, reviewText, timestamp) {
  const reviewElement = document.createElement('div');
  reviewElement.classList.add('review');

  // Generate star icons for the rating
  let starIcons = '';
  for (let i = 1; i <= 5; i++) {
    starIcons += i <= rating ? '<i class="fa fa-star"></i>' : '<i class="fa fa-star-o"></i>';
  }

  // Format timestamp to a readable date and time
  const date = timestamp ? new Date(timestamp.seconds * 1000) : new Date();
  const formattedDate = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();

  reviewElement.innerHTML = `
    <h4>${productName}</h4>
    <div class="stars">${starIcons}</div>
    <p>${reviewText}</p>
    <small>Posted on: ${formattedDate}</small>
  `;

  document.getElementById('reviewsList').appendChild(reviewElement);
}

// Submit review form
document.getElementById('reviewForm').addEventListener('submit', async function(event) {
  event.preventDefault();

  // Get input values
  const productName = document.getElementById('productInput').value;
  const rating = parseInt(document.getElementById('rating').value);
  const reviewText = document.getElementById('reviewText').value;

  try {
    // Add a new document to the "reviews" collection in Firestore with server timestamp
    await addDoc(collection(db, "reviews"), {
      productName: productName,
      rating: rating,
      reviewText: reviewText,
      timestamp: serverTimestamp() // Use server timestamp
    });

    // Display the review on the page
    displayReview(productName, rating, reviewText, { seconds: Date.now() / 1000 });

    // Clear the form inputs
    document.getElementById('reviewForm').reset();
    alert("Review submitted successfully!");

  } catch (e) {
    console.error("Error adding document: ", e);
    alert("Failed to submit review. Please try again.");
  }
});

// Load and display reviews from Firestore
async function loadReviews() {
  try {
    const querySnapshot = await getDocs(collection(db, "reviews"));
    querySnapshot.forEach((doc) => {
      const { productName, rating, reviewText, timestamp } = doc.data();
      displayReview(productName, rating, reviewText, timestamp);
    });
  } catch (e) {
    console.error("Error loading reviews: ", e);
  }
}

// Load reviews when the page loads
document.addEventListener("DOMContentLoaded", loadReviews);
