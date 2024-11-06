// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js";
import { content } from './productData.js'; // Adjust path as needed

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
const db = getDatabase(app);

// Log Firebase objects to confirm initialization
console.log("Firebase app initialized:", app);
console.log("Database initialized:", db);



console.log("JavaScript file is loading");

// !Light and Dark Mode
document.addEventListener('DOMContentLoaded', function () {

  const toggleSwitch = document.getElementById('switch');

  if (toggleSwitch) {
    toggleSwitch.addEventListener('change', function () {
      document.body.classList.toggle('light', this.unchecked);
      console.log(`Body class 'light' is now: ${document.body.classList.contains('light')}`);
    });
  } else {
    console.error('Toggle switch not found!');
  }
});
// !Linking For Buttons and sections
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.nav-buttons');
  const sections = document.querySelectorAll('.section');

  links.forEach(link => {
    link.addEventListener('click', function (idk) {
      idk.preventDefault();

      // Remove active class from all sections
      sections.forEach(section => section.classList.remove('active'));

      // Remove active class from all nav links
      links.forEach(link => link.classList.remove('active'));

      // Add active class to clicked link
      this.classList.add('active');

      // Show the corresponding section
      const target = document.querySelector(this.getAttribute('href'));
      target.classList.add('active');
    });
  });
});




//*! animation text
const textArray = ["Discover The Power OF AI", "Discover The Power OF AI"];
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseBetween = 2000;

let textIndex = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;

const typewriterElement = document.getElementById('typewriter');


document.addEventListener('DOMContentLoaded', () => {

  // Log body text

  // Check if the body text contains 'light'
  if (document.body.classList.contains("light")) {
    type(); // Call type() if 'light' is found
  } else {
    type2(); // Call type2() if 'light' is not found
  }
});

function type() {
  if (isDeleting) {
    if (charIndex > 0) {
      currentText = textArray[textIndex].substring(0, charIndex - 1);
      charIndex--;
      typewriterElement.innerHTML = currentText;
      setTimeout(type, deletingSpeed);
    } else {
      isDeleting = false;
      textIndex = (textIndex + 1) % textArray.length;
      changeColor2();
      setTimeout(type, typingSpeed);
    }
  } else {
    if (charIndex < textArray[textIndex].length) {
      currentText = textArray[textIndex].substring(0, charIndex + 1);
      charIndex++;
      typewriterElement.innerHTML = currentText;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(() => {
        isDeleting = true;
        setTimeout(type, deletingSpeed);
      }, pauseBetween);
    }
  }
}

function type2() {
  if (isDeleting) {
    if (charIndex > 0) {
      currentText = textArray[textIndex].substring(0, charIndex - 1);
      charIndex--;
      typewriterElement.innerHTML = currentText;
      setTimeout(type2, deletingSpeed); // Changed to type2
    } else {
      isDeleting = false;
      textIndex = (textIndex + 1) % textArray.length;
      changeColor();
      setTimeout(type2, typingSpeed); // Changed to type2
    }
  } else {
    if (charIndex < textArray[textIndex].length) {
      currentText = textArray[textIndex].substring(0, charIndex + 1);
      charIndex++;
      typewriterElement.innerHTML = currentText;
      setTimeout(type2, typingSpeed); // Changed to type2
    } else {
      setTimeout(() => {
        isDeleting = true;
        setTimeout(type2, deletingSpeed); // Changed to type2
      }, pauseBetween);
    }
  }
}

function changeColor() {
  const colors = ["#eab711", "#5E81EC", "#eab711", "#5E81EC", "#eab711"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  typewriterElement.style.color = randomColor;
}

function changeColor2() {
  const colors2 = ["#000000", "#000080", "#000000", "#000080", "#000000"];
  const randomColor2 = colors2[Math.floor(Math.random() * colors2.length)];
  typewriterElement.style.color = randomColor2;
}















//! Search button functionality
document.getElementById("search").addEventListener("click", () => {
  let searchInput = document.getElementById("searchbar").value.toLowerCase();
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
  let noResults = document.getElementById("no-results");

  let found = false; // Flag to track if any products match the search
  elements.forEach((element, index) => {
    if (element.innerText.toLowerCase().includes(searchInput)) {
      cards[index].classList.remove("hide");
      found = true;
    } else {
      cards[index].classList.add("hide");
    }
  });

  // Show/hide no results message
  if (noResults) {
    noResults.style.display = found ? "none" : "block";
  }
});


// Optionally, add event listener for 'Enter' key in search bar
document.getElementById("searchbar").addEventListener("keypress", function (e) {
  if (e.key === 'Enter') {
    document.getElementById("search").click();
  }
});

// Initialize the showFilter function

// !filter
const categoryThing = document.querySelector('.button-control');
const categories = document.querySelectorAll('.categories');

document.querySelectorAll('.button-value.category').forEach((button) => {
  button.addEventListener('click', (event) => {
    const category = event.target.innerText; // Get the clicked category
    filterProduct(category); // Call filterProduct with the category
  });
});

// Adjust the filterProduct function
function filterProduct(value) {            
  let buttons = document.querySelectorAll(".button-value.category");
  buttons.forEach((button) => {
    button.classList.remove("active");
    if (value.toUpperCase() === button.innerText.toUpperCase()) {
      button.classList.add("active");
    }
  });

  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    if (value.toLowerCase() === "all") {
      element.classList.remove("hide");
    } else {
      // Check if the card has the category in its classList
      element.classList.toggle("hide", !element.classList.contains(value));
    }
  });
}





function toggleCategories() {
  const categories = document.querySelectorAll(".button-value.category");
  
  categories.forEach((item) => {
    // Toggling the 'show' class
    if (item.classList.contains('show')) {
      item.classList.remove('show');
    } else {
      item.classList.add('show');
    }
  });
}



categoryThing.addEventListener("click", () => {
  createProductCards();
  filterProduct("all");
});



window.onload = () => {
  createProductCards();
  filterProduct("");
};

// Add an event listener to the category heading (or button)
document.querySelector('.category-heading').addEventListener('click', toggleCategories);














// !Ai Display

  function createProductCards() {
    const container = document.getElementById("content");

  content.data.forEach(product => {
    // Create card div
    const card = document.createElement("div");

    // Add categories as class names
    product.category.forEach(cat => {
      card.classList.add(cat);
    });
    card.classList.add("card");
    card.classList.add("hide"); // Initially hide all cards

    // Content Container
    const contentContainer = document.createElement("div");
    contentContainer.classList.add("container");

    // Product Name
    const name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = product.productName.toUpperCase();
    contentContainer.appendChild(name);

    // Category
    const category = document.createElement("p");
    category.classList.add("product-category");
    category.innerText = `Categories: ${product.category.join(", ")}`;
    contentContainer.appendChild(category);

    // Create Rating Stars
    const ratingContainer = document.createElement("div");
    ratingContainer.classList.add("rating-container");

    // Create a flex container for stars and rating score
    const starScoreContainer = document.createElement("div");
    starScoreContainer.classList.add("star-score-container");

    // Create stars
    const stars = document.createElement("div");
    stars.classList.add("stars");
    const ratingValue = parseFloat(product.rating);
    const fullStars = Math.floor(ratingValue);
    const hasHalfStar = ratingValue % 1 !== 0;

    // Create 5 stars
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("i");
      star.classList.add("fa-solid", "star");

      // Check for full, half, and empty stars
      if (i <= fullStars) {
        star.classList.add("fa-star"); // Full star
      } else if (i === fullStars + 1 && hasHalfStar) {
        star.classList.add("fa-star-half-stroke"); // Half star
      } else {
        star.classList.add("fa-star-empty"); // Empty star
      }


      star.setAttribute("data-value", i); // Set the value for rating
      stars.appendChild(star);
    }

    // Create rating score element
    const ratingScore = document.createElement("span");
    ratingScore.id = "rating-score";
    ratingScore.innerText = product.rating; // Show the rating score

    // Append stars and rating score to the flex container
    starScoreContainer.appendChild(stars);
    starScoreContainer.appendChild(ratingScore);
    ratingContainer.appendChild(starScoreContainer);

    // Append the rating container before the description
    contentContainer.appendChild(ratingContainer);

    // Description
    if (product.description) {
      const description = document.createElement("p");
      description.classList.add("product-description");
      description.innerText = product.description;
      contentContainer.appendChild(description);
    }

    // Visit Button
    if (product.link) {
      const buttonLink = document.createElement("a");
      buttonLink.href = product.link;
      buttonLink.target = "_blank"; // Open in new tab

      const button = document.createElement("button");
      button.classList.add("list-button");
      button.innerText = "Visit ";

      const icon = document.createElement("i");
      icon.classList.add("fa-solid", "fa-up-right-from-square", "icon");

      button.appendChild(icon);
      buttonLink.appendChild(button);
      contentContainer.appendChild(buttonLink);
    }

    card.appendChild(contentContainer);

    // Add click event listener to enlarge the card and change content
    card.addEventListener('click', function () {
      // Toggle the "enlarged" class
      card.classList.toggle("enlarged");

      // Change content when enlarged
      if (card.classList.contains("enlarged")) {
        contentContainer.innerHTML = `
          <h2>${product.productName} - Expanded View</h2>
                    <p class="product-category">Categories: ${product.category.join(", ")}</p>
          <div class="rating-container">
            <div class="star-score-container">
              <div class="stars">
                ${[...Array(5)].map((_, i) => {
          let starClass = "fa-star-empty"; // Default to empty star
          if (i < Math.floor(product.rating)) {
            starClass = "fa-star"; // Full star
          } else if (i === Math.floor(product.rating) && (product.rating % 1) !== 0) {
            starClass = "fa-star-half-stroke"; // Half star
          }
          return `<i class="fa-solid ${starClass} star" data-value="${i + 1}"></i>`;
        }).join('')}
              </div>
              <span id="rating-score">${product.rating}</span>
            </div>
          </div>
          <p>Here is more detailed information about ${product.productName}.</p>
          <p>${product.description}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt maiores incidunt, deserunt, quidem facere debitis 
          odio aspernatur ex alias nobis nihil natus necessitatibus dicta molestiae eius laborum repellat modi</p>
          <a href="${product.link}" target="_blank">
            <button class="list-button">Visit <i class="fa-solid fa-up-right-from-square icon"></i></button>
          </a>
        `;
      } else {
        // Restore the original content when minimized
        contentContainer.innerHTML = `
          <h5 class="product-name">${product.productName.toUpperCase()}</h5>
          <p class="product-category">Categories: ${product.category.join(", ")}</p>
          <div class="rating-container">
            <div class="star-score-container">
              <div class="stars">
                ${[...Array(5)].map((_, i) => {
          let starClass = "fa-star-empty"; // Default to empty star
          if (i < Math.floor(product.rating)) {
            starClass = "fa-star"; // Full star
          } else if (i === Math.floor(product.rating) && (product.rating % 1) !== 0) {
            starClass = "fa-star-half-stroke"; // Half star
          }
          return `<i class="fa-solid ${starClass} star" data-value="${i + 1}"></i>`;
        }).join('')}
              </div>
              <span id="rating-score">${product.rating}</span>
            </div>
          </div>
          <p class="product-description">${product.description}</p>
          <a href="${product.link}" target="_blank">
            <button class="list-button">Visit <i class="fa-solid fa-up-right-from-square icon"></i></button>
          </a>
        `;
      }
    });

    // Call the rating handling function
    handleRating(card);

    container.appendChild(card);
  });
}






// !Function to handle star ratings
function handleRating(card) {
  const stars = card.querySelectorAll('.star');
  const ratingScore = card.querySelector('#rating-score');

  stars.forEach(star => {
    star.addEventListener('click', function () {
      const ratingValue = this.getAttribute('data-value');
      ratingScore.innerText = ratingValue; // Update the displayed rating

      // Remove 'selected' class from all stars
      stars.forEach(star => star.classList.remove('selected'));

      // Add 'selected' class to the clicked star and all preceding stars
      stars.forEach(star => {
        if (star.getAttribute('data-value') <= ratingValue) {
          star.classList.add('selected');
        } else {
          star.classList.remove('selected');
        }
      });

      // Handle half stars
      if (ratingValue % 1 !== 0) {
        // If the clicked star is half, ensure the previous star is marked as full
        const previousStar = stars[parseInt(ratingValue) - 1];
        if (previousStar) {
          previousStar.classList.add('selected');
        }
      }
    });
  });
}













// !Remove Open on outside click and other links
const navToggleBtn = document.querySelector(".nav-toggle");
const aside = document.querySelector(".aside");
const navLinks = document.querySelectorAll(".nav-buttons");
const mainContent = document.querySelector('.main-content');

navToggleBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleAside();
});

document.addEventListener("click", (event) => {
  if (aside.classList.contains("open") && !aside.contains(event.target) && !navToggleBtn.contains(event.target)) {
    closeAside();
  }
});

// Add click event listener to each navigation link
navLinks.forEach(link => {
  link.addEventListener("click", closeAside);
});

function toggleAside() {
  const isOpen = aside.classList.toggle("open"); // Toggle the open class and store the result
  navToggleBtn.classList.toggle("open");

  if (isOpen) {
    mainContent.classList.add('blur'); // Add blur if aside is open
  } else {
    mainContent.classList.remove('blur'); // Remove blur if aside is closed
  }
}

function closeAside() {
  aside.classList.remove("open");
  navToggleBtn.classList.remove("open");
  mainContent.classList.remove('blur'); // Ensure blur is removed when closing
}



// !Submitting the review
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("productInput");
  const list = document.getElementById("autocomplete-list");
  const form = document.getElementById("reviewForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form submission on Enter key press in the input
  });

  input.addEventListener("input", function() {
    const value = this.value;

    list.innerHTML = ""; // Clear any previous suggestions

    if (!value) {
      list.style.display = "none"; // Hide the list if input is empty
      return;
    }

    list.style.display = "block"; // Show the list when there's input

    // Use `content.data` to access the array of products
    content.data.forEach(product => {
      if (product.productName.toLowerCase().includes(value.toLowerCase())) {
        const item = document.createElement("div");
        item.innerText = product.productName;

        item.addEventListener("click", function() {
          input.value = product.productName;
          list.innerHTML = ""; // Clear the list after selecting an item
          list.style.display = "none"; // Hide the list after selection
        });

        list.appendChild(item);
      }
    });
  });

  document.addEventListener("click", function(e) {
    if (!list.contains(e.target) && e.target !== input) {
      list.innerHTML = ""; // Close the list when clicking outside
      list.style.display = "none"; // Hide the list
    }
  });
});
