let products = {
  data: [
    {
      productName: "ChatGPT",
      category: "Chatbots",              // Add price values
    },
    {
      productName: "Google Gemini",
      category: "Chatbots",
      description: "smthn",
      link: "https://gemini.com",
    },
    {
      productName: "MightyGPT",
      category: "Chatbots",
    },
    {
      productName: "Replika",
      category: "Chatbots",
    },
    {
      productName: "Meta.ai",
      category: "Chatbots",
    },
    {
      productName: "ChatGPT",
      category: "ContentGeneration",
    },
    {
      productName: "Rytr",
      category: "ContentGeneration",
    },
    {
      productName: "MightyGPT",
      category: "ContentGeneration",
    },
    {
      productName: "Glasp",
      category: "ContentGeneration",
    },
    {
      productName: "Syllaby",
      category: "ContentGeneration",
    },
    {
      productName: "Axiom",
      category: "DataAnalysis",
    },
    {
      productName: "WolframAlpha",
      category: "DataAnalysis",
    },
    {
      productName: "Geogebra",
      category: "DataAnalysis",
    },
    {
      productName: "Consensus",
      category: "DataAnalysis",
    },
    {
      productName: "Ossai.ai",
      category: "DataAnalysis",
    },
    {
      productName: "Krea.ai",
      category: "CreativeAI",
    },
    {
      productName: "Midjourney",
      category: "CreativeAI",
    },
    {
      productName: "Craiyon",
      category: "CreativeAI",
    },
    {
      productName: "Supermeme.ai",
      category: "CreativeAI",
    },
    {
      productName: "Brandmark",
      category: "CreativeAI",
    },
    {
      productName: "PFP Maker",
      category: "CreativeAI",
    },
    {
      productName: "Adobe Firefly",
      category: "CreativeAI",
    },
    {
      productName: "Bing Art",
      category: "CreativeAI",
    },
    {
      productName: "Beautiful.ai",
      category: "CreativeAI",
    },
    {
      productName: "Remove.bg",
      category: "ImageEditing",
    },
    {
      productName: "Watermark Remover",
      category: "ImageEditing",
    },
    {
      productName: "AI Image Enlarger",
      category: "ImageEditing",
    },
    {
      productName: "PFP Maker",
      category: "ImageEditing",
    },
    {
      productName: "Kaiber.ai",
      category: "VideoTools",
    },
    {
      productName: "Lumen5",
      category: "VideoTools",
    },
    {
      productName: "Opus.pro",
      category: "VideoTools",
    },
    {
      productName: "Video Translator",
      category: "VideoTools",
    },
    {
      productName: "Elevenlabs.io",
      category: "AudioTools",
    },
    {
      productName: "Soundful",
      category: "AudioTools",
    },
    {
      productName: "Krisp",
      category: "AudioTools",
    },
    {
      productName: "Jotform",
      category: "Productivity",
    },
    {
      productName: "Superhuman.ai",
      category: "Productivity",
    },
    {
      productName: "Otter.ai",
      category: "Productivity",
    },
    {
      productName: "Rewind",
      category: "Productivity",
    },
    {
      productName: "Glasp",
      category: "Productivity",
    },
    {
      productName: "10Web",
      category: "Productivity",
    },
    {
      productName: "Gamma",
      category: "Productivity",
    },
    {
      productName: "Coursera",
      category: "EdTech",
    },
    {
      productName: "Syllaby",
      category: "EdTech",
    },
    {
      productName: "Geogebra",
      category: "EdTech",
    },
    {
      productName: "Semantris",
      category: "EdTech",
    },
    {
      productName: "Brandmark",
      category: "MarketingAI",
    },
    {
      productName: "Supermeme.ai",
      category: "MarketingAI",
    },
    {
      productName: "Krisp",
      category: "Communication",
    },
    {
      productName: "Otter.ai",
      category: "Communication",
    },
    {
      productName: "Glasp",
      category: "Communication",
    },
    {
      productName: "Giphy",
      category: "GIFsAndMedia",
    },
    {
      productName: "Tenor",
      category: "GIFsAndMedia",
    },
    {
      productName: "TinyWow",
      category: "UtilityTools",
    },
    {
      productName: "Gamma",
      category: "PresentationAI",
    },
    {
      productName: "Beautiful.ai",
      category: "PresentationAI",
    },
    {
      productName: "Thing Translator",
      category: "TranslationTools",
    },
    {
      productName: "Video Translator",
      category: "TranslationTools",
    },
    {
      productName: "Ossa.ai",
      category: "LanguageGames",
    },
    {
      productName: "Semantris",
      category: "LanguageGames",
    },
  ]
};

// JavaScript for creating product cards
for (let i of products.data) {
  let card = document.createElement("div");
  card.classList.add("card", i.category, "hide");

  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  let image = document.createElement("img");
  image.setAttribute("src", i.image); // Ensure this URL is valid
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  let container = document.createElement("div");
  container.classList.add("container");

  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);

  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

// Filter function
function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (value.toUpperCase() === button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    if (value === "all") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}

// Search button functionality
document.getElementById("searchbar").addEventListener("click", () => {
  let searchInput = document.getElementById("searchbar").value;
  let elements = document.querySelectorAll(".contents");
  let cards = document.querySelectorAll(".card");

  elements.forEach((element, index) => {
    if (element.innerText.includes(searchInput.toUpperCase())) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
});

// Initially display all products
window.onload = () => {
  filterProduct("all");
};
