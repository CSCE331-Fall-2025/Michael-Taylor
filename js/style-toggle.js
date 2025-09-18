
// Theme Toggle Script

// Defining style state var
const STORAGE_KEY = "styleState";

// Get current style state
let currentStyle = localStorage.getItem(STORAGE_KEY) || "style1";

// Default style state
document.getElementById("style-link").setAttribute("href", `css/${currentStyle}.css`);

// Get button
const buttonThemeToggle = document.getElementById("style-toggle");


// Listen for button click...
buttonThemeToggle.addEventListener("click", () => {
    currentStyle = (currentStyle === "style1") ? "style2" : "style1";
    
    document.getElementById("style-link").setAttribute("href", `css/${currentStyle}.css`);
    
    // Save state back to local storage
    localStorage.setItem(STORAGE_KEY, currentStyle);
});

