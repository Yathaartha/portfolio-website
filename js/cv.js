// Variables for DOM elements
const cvToggler = document.getElementById("cv");
const cvContainer = document.querySelector(".cv-container");
const closeBtn = cvContainer.querySelector(".closeBtn");

// Listener for Cv Button
cvToggler.addEventListener("click", () => {
  cvContainer.classList.remove("invisible");
});

// Listener for Cv closer
closeBtn.addEventListener("click", () => {
  cvContainer.classList.add("invisible");
});
