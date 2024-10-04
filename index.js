
let displayedCount = 9;

function search_list() {
  let input = document.getElementById('searchbar').value.trim().toLowerCase();
  let x = document.getElementsByClassName('content');
  let anyItemsDisplayed = false;
  let count = 0;
  let totalMatchingItems = 0;

  // Initially hide all items
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = 'none';
  }

  // Count total matching items
  for (let i = 0; i < x.length; i++) {
    if (input === '' || x[i].innerHTML.toLowerCase().includes(input)) {
      totalMatchingItems++;
    }
  }

  // Show items that match the search input or all if input is empty
  for (let i = 0; i < x.length; i++) {
    if (input === '' || x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = 'list-item';
      count++;
      anyItemsDisplayed = true;
    }
    if (count >= displayedCount) {
      break;  // Show only up to displayedCount items
    }
  }

  // Show or hide "See More" button based on whether items are displayed and count
  if (anyItemsDisplayed && totalMatchingItems > displayedCount) {
    document.getElementById('seeMore').style.display = 'block';
  } else {
    document.getElementById('seeMore').style.display = 'none';
  }
}


function showMore() {
  let x = document.getElementsByClassName('content');
  let currentCount = 0;

  // Count currently displayed items
  for (let i = 0; i < x.length; i++) {
    if (x[i].style.display === 'list-item') {
      currentCount++;
    }
  }

  // Increase displayedCount by 9
  displayedCount = currentCount + 9;

  // Run search again to update display based on new count
  search_list();
}

document.getElementById('searchbar').addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    search_list();
  }
});

document.getElementById('seeMore').addEventListener('click', showMore);

// Initially hide "See More" button until items are displayed
document.getElementById('seeMore').style.display = 'none';
//displaying things on clcik



//only one thing active at a time

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
    if(document.body.classList.contains("light"))
    {
        dayNight.querySelector("i").classList.remove("fa-sun");
        dayNight.querySelector("i").classList.add("fa-moon");
    }
    else
    {
        dayNight.querySelector("i").classList.remove("fa-moon");
        dayNight.querySelector("i").classList.add("fa-sun");
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
      changeColor();
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

function changeColor() {
  const colors = ["#eab711", "#ffffff", "#eab711", "#ffffff", "#eab711"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  typewriterElement.style.color = randomColor;
}

type();


const showSidebar = document.getElementById('showSidebar');
const closeSidebar = document.getElementById('closeSidebar');
const sideNav = document.querySelector('.side-nav');

document.getElementById('showSidebar').addEventListener('click', function() {
      document.querySelector('.side-nav').classList.toggle('active');
  });

document.getElementById('closeSidebar').addEventListener('click', function() {
      document.querySelector('.side-nav').classList.remove('active');
  });

function closeSidebarOnOutsideClick(event) {
    if (!sideNav.contains(event.target) && !showSidebarBtn.contains(event.target)) {
        sideNav.classList.remove('active');
    }
}



// !API KEY for gemini AIzaSyBZzpaMm7yDHl0ukYT4g_UodnS9xVEb7gs