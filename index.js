
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

// Initialize the showFilter function
showFilter();




let content = {
  data: [
    {
      "productName": "ChatGPT",
      "category": ["Chatbots", "ContentGeneration"],
      "description": "ChatGPT is an AI model generating human-like text based on prompts.",
      "link": "https://chatgpt.com/"
    },
    {
      "productName": "Axiom",
      "category": ["DataAnalysis", "UtilityTools"],
      "description": "A company that captures data for analytics, security, operations, and new insights",
      "link": "https://axiom.co/"
    },
    {
      "productName": "Wolfram|Alpha",
      "category": ["DataAnalysis", "UtilityTools"],
      "description": "Provides answers to factual queries by using algorithms and curated data.",
      "link": "https://www.wolframalpha.com/"
    },
    {
      "productName": "TinyWow",
      "category": ["UtilityTools", "ImageEditing"],
      "description": "TinyWow provides AI tools for managing PDFs, images, videos, and documents.",
      "link": "https://tinywow.com/"
    },
    { 
      "productName": "Jotform",
      "category": ["Productivity", "UtilityTools"],
      "description": "Jotform is a web-based tool that allows users to create custom online forms without coding.",
      "link": "https://www.jotform.com/"
    },
    {
      "productName": "Ossa AI",
      "category": ["DataAnalysis", "VideoTools"],
      "description": "OSSA.AI transforms written scripts into engaging short-form videos.",
      "link": "https://ossa.ai/"
    },
    {
      "productName": "Coursera",
      "category": ["EdTech", "Productivity"],
      "description": "Coursera offers online courses and degrees from universities and companies.",
      "link": "https://www.coursera.org/en-IN"
    },
    {
      "productName": "Syllaby",
      "category": ["ContentGeneration", "CreativeAI"],
      "description": "Syllaby generates video scripts for social media marketing using AI.",
      "link": "https://syllaby.io/?via=victor33&gad_source=1&gclid=CjwKCAjw1emzBhB8EiwAHwZZxTu2M8RLRmf9kncoDbijMeIQqhdv9b8tRWAf4-sw3ISa0-1I-b8PgxoCeDMQAvD_BwE"
    },
    {
      "productName": "Watermarker Remover",
      "category": ["ImageEditing", "UtilityTools"],
      "description": "A tool for removing watermarks from images.",
      "link": "https://www.watermarkremover.io/"
    },
    {
      "productName": "Opus Pro",
      "category": ["VideoTools", "Productivity"],
      "description": "Opus Pro enables fast development of HTML5, Flash, and Windows applications.",
      "link": "https://www.opus.pro/"
    },
    {
      "productName": "Krea AI",
      "category": ["CreativeAI", "ContentGeneration"],
      "description": "KREA revolutionizes visual content creation and enhancement with AI.",
      "link": "https://www.krea.ai/home"
    },
    {
      "productName": "Bing Art",
      "category": ["CreativeAI", "ImageEditing"],
      "description": "Bing's AI Art Generator uses machine learning algorithms to create images from text descriptions.",
      "link": "https://www.bing.com/"
    },
    {
      "productName": "Gamma",
      "category": ["Productivity", "PresentationAI"],
      "description": "Gamma app allows quick creation of presentations, documents, and websites.",
      "link": "https://gamma.app/"
    },
    {
      "productName": "Superhuman",
      "category": ["Productivity", "UtilityTools"],
      "description": "Superhuman AI Automation automates complex tasks with human-level performance.",
      "link": "https://superhuman.com/"
    },
    {
      "productName": "Remove BG",
      "category": ["ImageEditing", "UtilityTools"],
      "description": "A tool that removes backgrounds from images.",
      "link": "https://www.remove.bg/"
    },
    {
      "productName": "Otter AI",
      "category": ["Productivity", "AudioTools"],
      "description": "Otter.ai is a speech-to-text software that uses AI to transcribe spoken words into written text in real time.",
      "link": "https://otter.ai/"
    },
    {
      "productName": "elevenlabs io",
      "category": ["AudioTools", "CreativeAI"],
      "description": "ElevenLabs is a company that uses AI to create voice and audio content.",
      "link": "https://elevenlabs.io/"
    },
    {
      "productName": "Lumen 5",
      "category": ["VideoTools", "ContentGeneration"],
      "description": "Lumen5 is a video creation platform that uses AI to help users create videos from written content.",
      "link": "https://lumen5.com/"
    },
    {
      "productName": "Rytr",
      "category": ["ContentGeneration", "CreativeAI"],
      "description": "Rytr is an AI writing tool that can generate original content for a variety of purposes.",
      "link": "https://rytr.me/"
    },
    {
      "productName": "Kaiber AI",
      "category": ["VideoTools", "CreativeAI"],
      "description": "Kaiber creates videos, images, and animations from text, images, and audio.",
      "link": "https://kaiber.ai/"
    },
    {
      "productName": "Consensus",
      "category": ["DataAnalysis", "UtilityTools"],
      "description": "Consensus is an academic search engine, powered by AI, but grounded in scientific research.",
      "link": "https://consensus.app/"
    },
    {
      "productName": "Video Translator",
      "category": ["VideoTools", "TranslationTools"],
      "description": "A video translation tool (currently in development).",
      "link": "#"
    },
    {
      "productName": "Google Gemini",
      "category": ["Chatbots", "CreativeAI"],
      "description": "Google's factual language model, able to generate different creative text formats and answer your questions.",
      "link": "https://gemini.google.com/app?hl=en"
    },
    {
      "productName": "Midjourney",
      "category": ["CreativeAI", "ImageEditing"],
      "description": "Midjourney is an AI-powered image generator that creates realistic images from text prompts.",
      "link": "https://www.midjourney.com/home"
    },
    {
      "productName": "Replika",
      "category": ["Chatbots", "UtilityTools"],
      "description": "The Replika app is an artificial intelligence-based chatbot that mimics human conversations.",
      "link": "https://replika.com/"
    },
    {
      "productName": "10Web",
      "category": ["Productivity", "UtilityTools"],
      "description": "10Web is a WordPress platform that uses AI to help users build and manage websites.",
      "link": "https://10web.io/"
    },
    {
      "productName": "MightyGPT",
      "category": ["Chatbots", "UtilityTools"],
      "description": "Allows users to access a powerful chatGPT directly on WhatsApp.",
      "link": "https://www.mightygpt.com/"
    },
    {
      "productName": "Krisp",
      "category": ["AudioTools", "UtilityTools"],
      "description": "Krisp is a desktop application that uses AI to reduce background noise and echo during online meetings.",
      "link": "https://krisp.ai/"
    },
    {
      "productName": "Rewind",
      "category": ["Productivity", "UtilityTools"],
      "description": "Rewind is an AI-powered app that helps you find things you've seen, heard, or said.",
      "link": "https://www.rewind.ai/"
    },
    {
      "productName": "Craiyon",
      "category": ["CreativeAI", "ImageEditing"],
      "description": "Craiyon is an AI art generator that creates unique images from text prompts.",
      "link": "https://www.craiyon.com/"
    },
    {
      "productName": "supermeme ai",
      "category": ["CreativeAI", "ContentGeneration"],
      "description": "Supermeme.ai is an AI-powered meme generator that lets users create memes by typing in text.",
      "link": "https://www.supermeme.ai/"
    },
    {
      "productName": "Brandmark",
      "category": ["CreativeAI", "UtilityTools"],
      "description": "Brandmark is used for creating unique, AI-powered logos and brand identities.",
      "link": "https://brandmark.io/"
    },
    {
      "productName": "Glasp",
      "category": ["ContentGeneration", "UtilityTools"],
      "description": "Glasp is a tool for highlighting and collecting notes from any webpage.",
      "link": "https://glasp.co/"
    },
    {
      "productName": "Soundful",
      "category": ["AudioTools", "CreativeAI"],
      "description": "Soundful is an AI music generator that lets users create royalty-free tracks for a variety of projects.",
      "link": "https://soundful.com/"
    },
    {
      "productName": "Beautiful ai",
      "category": ["CreativeAI", "PresentationAI"],
      "description": "Beautiful.ai is an online presentation tool that helps teams create, collaborate, and present from anywhere.",
      "link": "https://www.beautiful.ai/presentation-software"
    },
    {
      "productName": "ai image enlarger",
      "category": ["ImageEditing", "UtilityTools"],
      "description": "A tool that uses AI to expand the size of an image without losing quality.",
      "link": "https://imglarger.com/"
    },
    {
      "productName": "Semantris",
      "category": ["EdTech", "LanguageGames"],
      "description": "Semantris is an engaging pair of word association games offered as a Google experiment.",
      "link": "https://research.google.com/semantris/"
    },
    {
      "productName": "pfpmaker",
      "category": ["CreativeAI", "UtilityTools"],
      "description": "PFPMaker is a free AI-powered tool that helps users create personalized profile pictures for social media.",
      "link": "https://pfpmaker.com/"
    },
    {
      "productName": "thing translator",
      "category": ["TranslationTools", "UtilityTools"],
      "description": "Thing Translator is a web app that lets you point your phone at an object to hear its name in a different language.",
      "link": "https://experiments.withgoogle.com/thing-translator"
    },
    {
      "productName": "geogebra",
      "category": ["DataAnalysis", "EdTech"],
      "description": "Free, open-source software that helps students, teachers, and mathematicians learn and teach math and science.",
      "link": "https://www.geogebra.org/"
    },
    {
      "productName": "meta ai",
      "category": ["Chatbots", "UtilityTools"],
      "description": "Develops artificial intelligence and augmented reality technologies.",
      "link": "https://www.meta.ai/"
    },
    {
      "productName": "giphy",
      "category": ["GIFsAndMedia", "CreativeAI"],
      "description": "Giphy allows users to search for, share, and create animated GIFs, stickers, and short video clips.",
      "link": "https://giphy.com/"
    },
    {
      "productName": "tenor",
      "category": ["GIFsAndMedia", "CreativeAI"],
      "description": "Tenor is an online GIF search engine owned by Google that allows users to search for and share GIFs and videos.",
      "link": "https://tenor.com/"
    },
    {
      "productName": "Adobe Firefly",
      "category": ["CreativeAI", "ContentGeneration"],
      "description": "Adobe Firefly is a web application and family of generative AI models that help people create content.",
      "link": "https://www.adobe.com/in/products/firefly/features/text-to-image.html"
    },
    {
      "productName": "Jasper AI",
      "category": ["MarketingAI", "ContentGeneration"],
      "description": "Jasper AI is an AI writing assistant designed to help users generate high-quality content quickly and efficiently.",
      "link": "https://www.jasper.ai/"
    },
    {
      "productName": "Emarsys",
      "category": ["MarketingAI", "Productivity"],
      "description": "Emarsys is a customer engagement platform that enables businesses to personalize marketing campaigns and automate communication across multiple channels.",
      "link": "https://emarsys.com/"
    },
    {
      "productName": "Persado",
      "category": ["MarketingAI", "ContentGeneration"],
      "description": "Persado uses AI to generate data-driven, emotionally engaging marketing content that boosts customer engagement and conversions.",
      "link": "https://www.persado.com/"
    },
    {
      "productName": " Acquisio",
      "category": ["MarketingAI", "Productivity"],
      "description": "Acquisio is a digital marketing platform that uses AI to optimize ad campaigns across search, social, and display channels for better performance and ROI.",
      "link": "https://www.acquisio.com/"
    },
    {
      "productName": "Tidio",
      "category": ["Chatbots", "UtilityTools"],
      "description": "A live chat and chatbot tool designed for e-commerce businesses.",
      "link": "https://www.tidio.com/"
    },
    {
      "productName": "ManyChat",
      "category": ["Chatbots", "MarketingAI", "Communication"],
      "description": "A platform for creating Facebook Messenger bots for marketing and communication.",
      "link": "https://manychat.com/"
    },
    {
      "productName": "Landbot",
      "category": ["Chatbots", "UtilityTools"],
      "description": "A no-code chatbot builder for interactive web experiences.",
      "link": "https://landbot.io/"
    },
    {
      "productName": "Botsify",
      "category": ["Chatbots", "UtilityTools"],
      "description": "AI chatbot platform that supports multiple messaging channels and websites.",
      "link": "https://botsify.com/"
    },
    {
      "productName": "Intercom",
      "category": ["Chatbots", "UtilityTools", "Communication"],
      "description": "Customer messaging platform with chatbots for sales and support.",
      "link": "https://www.intercom.com/"
    },
    {
      "productName": "Drift",
      "category": ["Chatbots", "UtilityTools", "Communication"],
      "description": "A user-friendly chatbot builder for Facebook Messenger and Instagram.",
      "link": "https://www.salesloft.com/welcome-drift"
    },
    {
      "productName": "Panda Chat",
      "category": ["Chatbots", "UtilityTools"],
      "description": "AI-powered chatbot for improving customer interactions on various platforms.",
      "link": "https://pandachat.ai/"
    },
    {
      "productName": "Aivo",
      "category": ["Chatbots", "UtilityTools"],
      "description": "AI-powered conversational platform for customer service and support.",
      "link": "https://www.aivo.co/"
    },
    {
      "productName": "BotStar",
      "category": ["Chatbots", "UtilityTools"],
      "description": "A chatbot platform for designing bots to automate tasks on websites and social media.",
      "link": "https://botstar.com/"
    },
    {
      "productName": "Ada",
      "category": ["Chatbots", "UtilityTools", "Communication"],
      "description": "A customer service chatbot that personalizes automated conversations for support teams.",
      "link": "https://www.ada.cx/"
    },






    {
      "productName": "Copy AI",
      "category": ["ContentGeneration"],
      "description": "Copy.ai generates creative, high-quality content quickly for marketing, blogs, and social media.",
      "link": "https://www.copy.ai/"
    },
    {
      "productName": "Pictory",
      "category": ["ContentGeneration"],
      "description": "AI transforms written content into short, engaging videos for social media.",
      "link": "https://pictory.ai/?el=2000&htrafficsource=pictoryblog"
    },
    {
      "productName": "Runway ML",
      "category": ["ContentGeneration"],
      "description": "AI tools for generating visuals, video effects, and creative media content.",
      "link": "https://runwayml.com/"
    },
    {
      "productName": "Synthesia",
      "category": ["ContentGeneration"],
      "description": "AI-generated videos with lifelike avatars, voiceovers, and custom scripts.",
      "link": "https://www.synthesia.io/"
    },
    {
      "productName": "Writesonic",
      "category": ["ContentGeneration"],
      "description": "AI helps craft blog posts, product descriptions, and digital marketing content.",
      "link": "https://writesonic.com/"
    }
]

};



// Function to create product cards
function createProductCards() {
  const container = document.getElementById("content");

  content.data.forEach(product => {
    // Create card div
    const card = document.createElement("div");
    
    // Add all the categories from the list as class names
    product.category.forEach(cat => {
      card.classList.add(cat); 
    });
    card.classList.add("card");

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
    container.appendChild(card);
  });
}

// Filter function to handle multiple categories
function filterProduct(value) {            
  let buttons = document.querySelectorAll(".button-value");
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

// Search button functionality
// Search button functionality
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


// Initially display all products
window.onload = () => {
  createProductCards();
  filterProduct("all");
};

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
