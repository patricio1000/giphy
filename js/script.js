console.log("script.js loaded");
console.log("script.js loaded");
const apiKey = "AdKUrvyuJqor1HCM3RPzh7LyAQidJ0mZ";

// Select elements
const gifContainer = document.querySelector("#gif-container");
const button = document.querySelector("#fetch-gif-btn");
const searchInput = document.querySelector("#search-input");

// Event listener
button.addEventListener("click", async () => {
  const searchTerm = searchInput.value || "funny";

  const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=12`;

  try {
    const response = await fetch(endpoint);
    const data = await response.json();

    // Clear previous gifs
    gifContainer.innerHTML = "";

    // Get image URLs
    const images = data.data.map(gif => gif.images.original.url);

    // Display gifs
    images.forEach(url => {
      gifContainer.innerHTML += `
        <img src="${url}" class="col-3 mb-3">
      `;
    });

  } catch (error) {
    console.error("Error fetching gifs:", error);
  }
});