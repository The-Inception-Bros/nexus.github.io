// Import necessary Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, serverTimestamp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
import { content } from './productData.js';


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

// Create an array of product names from content for autocomplete and validation
const productNames = content.data.map(product => product.productName);

// Autocomplete functionality for the product input
const productInput = document.getElementById("productInput");
const autocompleteList = document.getElementById("autocomplete-list");

productInput.addEventListener("input", function() {
  const input = this.value;
  autocompleteList.innerHTML = ""; // Clear previous suggestions

  if (input.length === 0) return;

  // Filter product names based on input
  const filteredProducts = productNames.filter(product =>
    product.toLowerCase().includes(input.toLowerCase())
  );

  // Display suggestions
  filteredProducts.forEach(product => {
    const item = document.createElement("div");
    item.textContent = product;
    item.classList.add("autocomplete-item");
    item.addEventListener("click", function() {
      productInput.value = product;
      autocompleteList.innerHTML = ""; // Clear suggestions
    });
    autocompleteList.appendChild(item);
  });
});

// Close the autocomplete suggestions if clicked outside
document.addEventListener("click", function(e) {
  if (e.target !== productInput) {
    autocompleteList.innerHTML = "";
  }
});

// Function to display the review with formatted date and time
function displayReview(productName, rating, reviewText, timestamp) {
  const reviewElement = document.createElement('div');
  reviewElement.classList.add('review');

  let starIcons = '';
  for (let i = 1; i <= 5; i++) {
    starIcons += i <= rating ? '<i class="fa fa-star"></i>' : '<i class="fa fa-star-o"></i>';
  }

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

  const productName = productInput.value.trim();
  const rating = parseInt(document.getElementById('rating').value);
  const reviewText = document.getElementById('reviewText').value;

  // Check if the entered product name matches any name in productNames array
  if (!productNames.includes(productName)) {
    alert("Invalid AI product name. Please select a product from the autocomplete suggestions.");
    return; // Stop form submission if product name is invalid
  }

  try {
    await addDoc(collection(db, "reviews"), {
      productName: productName,
      rating: rating,
      reviewText: reviewText,
      timestamp: serverTimestamp()
    });

    displayReview(productName, rating, reviewText, { seconds: Date.now() / 1000 });
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
    
    if (querySnapshot.empty) {
      console.log("No reviews found in the database.");
    } else {
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        console.log("Loaded review:", data); // Debugging: Log each review
        
        // Destructure and pass to displayReview
        const { productName, rating, reviewText, timestamp } = data;
        displayReview(productName, rating, reviewText, timestamp);
      });
    }
  } catch (e) {
    console.error("Error loading reviews: ", e);
    alert("Failed to load reviews. Please check the console for more details.");
  }
}

// Load reviews when the page loads
document.addEventListener("DOMContentLoaded", loadReviews);
