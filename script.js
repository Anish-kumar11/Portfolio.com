// Get the dark mode toggle button and set a click event listener
const darkModeToggle = document.getElementById("darkmode-toggle");
darkModeToggle.addEventListener("click", toggleDarkMode);

// Check if dark mode is enabled and apply it
if (localStorage.getItem("darkModeEnabled") === "true") {
    enableDarkMode();
}

// Function to toggle dark mode
function toggleDarkMode() {
    if (localStorage.getItem("darkModeEnabled") === "true") {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}

// Function to enable dark mode
function enableDarkMode() {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkModeEnabled", "true");
}

// Function to disable dark mode
function disableDarkMode() {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkModeEnabled", "false");
}
