
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

//*! light and dark mode

const dayNight = document.querySelector(".mode");
dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-moon");
  dayNight.querySelector("i").classList.toggle("fa-sun");
  document.body.classList.toggle("light")
})
window.addEventListener("load", () => {
  if (document.body.classList.contains("light")) {
    dayNight.querySelector("i").classList.remove("fa-sun");
    dayNight.querySelector("i").classList.add("fa-moon");
    console.log("Light Mode Selected");
  }
  else {
    dayNight.querySelector("i").classList.remove("fa-moon");
    dayNight.querySelector("i").classList.add("fa-sun");
    console.log("Dark Mode Selected");
  }
})


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
  console.log("DOM fully loaded and parsed."); // Debugging

  // Log body tex

  // Check if the body text contains 'light'
  if (document.body.classList.contains("light")) {
    console.log("'light' found. Calling type()"); // Debugging
    type(); // Call type() if 'light' is found
  } else {
    console.log("'light' not found. Calling type2()"); // Debugging
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














// Function to toggle the sidebar's visibility
function toggleSidebar() {
  document.querySelector('.side-nav').classList.toggle('active');
}

// Function to explicitly close the sidebar
function closeSidebar() {
  document.querySelector('.side-nav').classList.remove('active');
  window.location.href = 'index.html'

  // Find the currently active navigation link in the sidebar
  const activeLink = document.querySelector('.side-nav .nav-buttons.active');
  if (activeLink) {
    const target = activeLink.getAttribute('href');

    // Ensure the target is valid, not '#' and points to a section
    if (target && target !== '#' && target.startsWith("#")) {
      const targetSection = document.querySelector(target);
      if (targetSection) {
        // Remove active class from all sections
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => section.classList.remove('active'));

        // Activate the target section
        targetSection.classList.add('active');
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
}

// Function to explicitly close the sidebar (can be called directly)
function close() {
  closeSidebar();
}

// Add event listeners for showing and closing the sidebar
document.getElementById('showSidebar').addEventListener('click', toggleSidebar);
document.getElementById('closeSidebar').addEventListener('click', closeSidebar);

// Handle clicks on the navigation buttons inside the sidebar
const navButtons = document.querySelectorAll('.side-nav .nav-buttons');
navButtons.forEach(button => {
  button.addEventListener('click', function (event) {
    const target = this.getAttribute('href');

    // Close the sidebar after clicking a navigation button
    document.querySelector('.side-nav').classList.remove('active');

    // Check if href is valid and not '#'
    if (target && target !== '#') {
      if (target.startsWith("#")) {
        const targetSection = document.querySelector(target);
        if (targetSection) {
          // Remove active class from all sections
          const sections = document.querySelectorAll('.section');
          sections.forEach(section => section.classList.remove('active'));

          // Activate the clicked section and scroll to it
          targetSection.classList.add('active');
          targetSection.scrollIntoView({ behavior: "smooth" });
          event.preventDefault(); // Prevent default anchor behavior
        }
      } else {
        // For external links (e.g., profile.html), let the default behavior happen
        window.location.href = target;
      }
    } else {
      event.preventDefault(); // Prevent action for '#' href
    }
  });
});

const categoryThing = document.querySelector('.button-control');
const categories = document.querySelectorAll('.categories');

function showFilter() {
  // Toggle visibility of categories when categoryThing is clicked
  categoryThing.addEventListener('click', function (event) {
    categories.forEach(category => {
      category.classList.toggle('show');
    });
  });
}


// Search button functionality
document.getElementById("search").addEventListener("click", () => {
  let searchInput = document.getElementById("searchbar").value.toLowerCase();
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
  let noResults = document.getElementById("no-results");

  let found = false; // Flag to track if any products match the search
  elements.forEach((element, index) => {
    if (element.innerText.toLowerCase().includes(searchInput)) {
      cards[index].classList.remove("hide"); // Show the matching card
      found = true;
    } else {
      cards[index].classList.add("hide"); // Hide the non-matching card
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
showFilter();



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


// Add an event listener to the category heading (or button)
document.querySelector('.category-heading').addEventListener('click', toggleCategories);







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

      // Logging for debugging
      console.log(`Star ${i}:`, {
        classList: star.classList.value,
        ratingValue,
        fullStars,
        hasHalfStar
      });

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
          <p>Here is more detailed information about ${product.productName}.</p>
          <a href="${product.link}" target="_blank">Click here for more</a>
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






// Function to handle star ratings
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





// Initially display no products
window.onload = () => {
  createProductCards();
  filterProduct(""); // Call filterProduct to hide all initially
};

