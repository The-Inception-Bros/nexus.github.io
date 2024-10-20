// Example product data with `price` and `link`
let content = {
    data: [
        {
            productName: "ChatGPT",
            category: "Chatbots",
            description: "AI chatbot that generates human-like responses to questions and prompts",
            link: "https://openai.com/chatgpt/"
        },
        {
            productName: "Axiom",
            category: "DataAnalysis",
            description: "A company that captures data for analytics, security, operations, and new insights",
            link: "https://axiom.co/"
        },
        {
            productName: "Wolfram|Alpha",
            category: "DataAnalysis",
            description: "Provides answers to factual queries by using algorithms and curated data.",
            link: "https://www.wolframalpha.com/"
        },
        {
            productName: "TinyWow",
            category: "UtilityTools",
            description: "TinyWow offers a collection of AI tools that can help solve users' issues when it comes to PDFs, images, writing, videos, and documents.",
            link: "https://tinywow.com/"
        },
        {
            productName: "Jotform",
            category: "Productivity",
            description: "Jotform is a web-based tool that allows users to create custom online forms without coding.",
            link: "https://www.jotform.com/"
        },
        {
            productName: "Ossa.ai",
            category: "DataAnalysis",
            description: "OSSA.AI is the first platform of its kind dedicated to transforming written scripts into short-form videos with a focus on engagement.",
            link: "https://ossa.ai/"
        },
        {
            productName: "Coursera",
            category: "EdTech",
            description: "Coursera is an online learning platform that offers courses, certificates, degrees, and more from universities and companies.",
            link: "https://www.coursera.org/en-IN"
        },
        {
            productName: "Syllaby",
            category: "ContentGeneration",
            description: "Syllaby is an AI-powered tool designed to help businesses and professionals generate video scripts for social media marketing.",
            link: "https://syllaby.io/?via=victor33&gad_source=1&gclid=CjwKCAjw1emzBhB8EiwAHwZZxTu2M8RLRmf9kncoDbijMeIQqhdv9b8tRWAf4-sw3ISa0-1I-b8PgxoCeDMQAvD_BwE"
        },
        {
            productName: "Watermarker Remover",
            category: "ImageEditing",
            description: "A tool for removing watermarks from images.",
            link: "https://www.watermarkremover.io/"
        },
        {
            productName: "Opus.pro",
            category: "VideoTools",
            description: "Opus Pro is a visual development tool for fast-track development of HTML5, Flash, and Windows applications and resources.",
            link: "https://www.opus.pro/"
        },
        {
            productName: "Krea.ai",
            category: "CreativeAI",
            description: "KREA is an advanced AI-powered platform designed to revolutionize the creation and enhancement of visual content.",
            link: "https://www.krea.ai/home"
        },
        {
            productName: "Bing Art",
            category: "CreativeAI",
            description: "Bing's AI Art Generator uses machine learning algorithms to create images from text descriptions.",
            link: "https://www.bing.com/"
        },
        {
            productName: "Gamma",
            category: "Productivity",
            description: "The Gamma app is an AI-powered tool that helps users create presentations, documents, and websites quickly and easily.",
            link: "https://gamma.app/"
        },
        {
            productName: "Superhuman",
            category: "Productivity",
            description: "Superhuman AI Automation is a framework for rapidly and safely automating the majority of the work in complex tasks, with human-level or above performance.",
            link: "https://superhuman.com/"
        },
        {
            productName: "remove.bg",
            category: "ImageEditing",
            description: "A tool that removes backgrounds from images.",
            link: "https://www.remove.bg/"
        },
        {
            productName: "Otter.ai",
            category: "Productivity",
            description: "Otter.ai is a speech-to-text software that uses AI to transcribe spoken words into written text in real time.",
            link: "https://otter.ai/"
        },
        {
            productName: "elevenlabs.io",
            category: "AudioTools",
            description: "ElevenLabs is a company that uses AI to create voice and audio content.",
            link: "https://elevenlabs.io/"
        },
        {
            productName: "Lumen5",
            category: "VideoTools",
            description: "Lumen5 is a video creation platform that uses AI to help users create videos from written content.",
            link: "https://lumen5.com/"
        },
        {
            productName: "Rytr",
            category: "ContentGeneration",
            description: "Rytr is an AI writing tool that can generate original content for a variety of purposes.",
            link: "https://rytr.me/"
        },
        {
            productName: "Kaiber.ai",
            category: "VideoTools",
            description: "Kaiber is an AI-powered platform that helps users create videos, images, and animations using text, images, and audio.",
            link: "https://kaiber.ai/"
        },
        {
            productName: "Consensus",
            category: "DataAnalysis",
            description: "Consensus is an academic search engine, powered by AI, but grounded in scientific research.",
            link: "https://consensus.app/"
        },
        {
            productName: "Video Translator",
            category: "VideoTools",
            description: "A video translation tool (currently in development).",
            link: "#"
        },
        {
            productName: "Google Gemini",
            category: "Chatbots",
            description: "Gemini for Google Cloud offers generative AI-powered assistance to a wide range of Google Cloud users, including developers and data scientists.",
            link: "https://gemini.google.com/app?hl=en"
        },
        {
            productName: "Midjourney",
            category: "CreativeAI",
            description: "Midjourney is an AI-powered image generator that creates realistic images from text prompts.",
            link: "https://www.midjourney.com/home"
        },
        {
            productName: "Replika",
            category: "Chatbots",
            description: "The Replika app is an artificial intelligence-based chatbot that mimics human conversations.",
            link: "https://replika.com/"
        },
        {
            productName: "10Web",
            category: "Productivity",
            description: "10Web is a WordPress platform that uses AI to help users build and manage websites.",
            link: "https://10web.io/"
        },
        {
            productName: "MightyGPT",
            category: "Chatbots",
            description: "Allows users to access a powerful chatGPT directly on WhatsApp.",
            link: "https://www.mightygpt.com/"
        },
        {
            productName: "Krisp",
            category: "AudioTools",
            description: "Krisp is a desktop application that uses AI to reduce background noise and echo during online meetings.",
            link: "https://krisp.ai/"
        },
        {
            productName: "Rewind",
            category: "Productivity",
            description: "Rewind is an AI-powered app that helps you find things you've seen, heard, or said.",
            link: "https://www.rewind.ai/"
        },
        {
            productName: "Craiyon",
            category: "CreativeAI",
            description: "Craiyon is an AI art generator that creates unique images from text prompts.",
            link: "https://www.craiyon.com/"
        },
        {
            productName: "supermeme.ai",
            category: "CreativeAI",
            description: "Supermeme.ai is an AI-powered meme generator that lets users create memes by typing in text.",
            link: "https://www.supermeme.ai/"
        },
        {
            productName: "Brandmark",
            category: "CreativeAI",
            description: "Brandmark is used for creating unique, AI-powered logos and brand identities.",
            link: "https://brandmark.io/"
        },
        {
            productName: "Glasp",
            category: "ContentGeneration",
            description: "Glasp is a tool for highlighting and collecting notes from any webpage.",
            link: "https://glasp.co/"
        },
        {
            productName: "Soundful",
            category: "AudioTools",
            description: "Soundful is an AI music generator that lets users create royalty-free tracks for a variety of projects.",
            link: "https://soundful.com/"
        },
        {
            productName: "Beautiful.ai",
            category: "CreativeAI",
            description: "Beautiful.ai is an online presentation tool that helps teams create, collaborate, and present from anywhere.",
            link: "https://www.beautiful.ai/presentation-software"
        },
        {
            productName: "ai.image enlarger",
            category: "ImageEditing",
            description: "A tool that uses AI to expand the size of an image without losing quality.",
            link: "https://imglarger.com/"
        },
        {
            productName: "Semantris",
            category: "EdTech",
            description: "Semantris is an engaging pair of word association games offered as a Google experiment.",
            link: "https://research.google.com/semantris/"
        },
        {
            productName: "pfpmaker",
            category: "CreativeAI",
            description: "PFPMaker is a free AI-powered tool that helps users create personalized profile pictures for social media.",
            link: "https://pfpmaker.com/"
        },
        {
            productName: "thing translator",
            category: "TranslationTools",
            description: "Thing Translator is a web app that lets you point your phone at an object to hear its name in a different language.",
            link: "https://experiments.withgoogle.com/thing-translator"
        },
        {
            productName: "geogebra",
            category: "DataAnalysis",
            description: "Free, open-source software that helps students, teachers, and mathematicians learn and teach math and science.",
            link: "https://www.geogebra.org/"
        },
        {
            productName: "meta.ai",
            category: "Chatbots",
            description: "Develops artificial intelligence and augmented reality technologies.",
            link: "https://www.meta.ai/"
        },
        {
            productName: "giphy",
            category: "GIFsAndMedia",
            description: "Giphy allows users to search for, share, and create animated GIFs, stickers, and short video clips.",
            link: "https://giphy.com/"
        },
        {
            productName: "tenor",
            category: "GIFsAndMedia",
            description: "Tenor is an online GIF search engine owned by Google that allows users to search for and share GIFs and videos.",
            link: "https://tenor.com/"
        },
        {
            productName: "Adobe Firefly",
            category: "CreativeAI",
            description: "Adobe Firefly is a web application and family of generative AI models that help people create content.",
            link: "https://www.adobe.com/in/products/firefly/features/text-to-image.html"
        }
    ]
};

// Function to create product cards
function createProductCards() {
    const container = document.getElementById("content");

    content.data.forEach(product => {
        // Create card div without 'hide' class
        const card = document.createElement("div");
        card.classList.add("card", product.category);

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
        category.innerText = `Category: ${product.category}`;
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

// Filter function (if you have filter buttons)
function filterProduct(value) {
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
        button.classList.remove("active"); // Remove active class from all buttons
        if (value.toUpperCase() === button.innerText.toUpperCase()) {
            button.classList.add("active"); // Add active class to the clicked button
        }
    });

    let elements = document.querySelectorAll(".card");
    elements.forEach((element) => {
        if (value.toLowerCase() === "all") {
            element.classList.remove("hide");
        } else {
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
    const categories = document.querySelector('#buttons'); // Change to correct selector
    categories.classList.add('show'); // Toggle the 'hidden' class
}


  // Add an event listener to the button
  document.querySelector('.button-control.category-heading').addEventListener('click', toggleCategories);