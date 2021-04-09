/* DOM */
const explainerText = document.querySelector(".explainer-text"); // This is your explainer text.
const modeBtn = document.querySelector(".mode-btn"); // This is your mode button.
const minus = document.querySelector(".minus"); // This is your minus button.
const inc = document.querySelector("#inc"); // This is the number text.
const plus = document.querySelector(".plus"); // This is your plus button.
const reset = document.querySelector(".reset"); // This is your reset button.

let i = 0; // This is your variable for the number.

/* Event Handler */
// When this is clicked, toggle light/dark mode
modeBtn.addEventListener("click", toggleChange);
// When this is clicked, increase the number text by 1.
minus.addEventListener("click", decrease);
// When this is clicked, decrease the number text by 1.
plus.addEventListener("click", increase);
// When this is clicked, reset the number text back to 0.
reset.addEventListener("click", resetNumber);

/* Functions */
// Increase the number text by 1.
function increase() {
    i++
    updateNumberText();
};

// Decrease the number text by 1.
function decrease() {
    i--;
    updateNumberText();
};

// Reset the number text back to 0.
function resetNumber() {
    i = 0;
    updateNumberText();
}

// This will update the number text.
function updateNumberText() {
    inc.value = i;
}

// This will toggle dark mode and light mode.
function toggleChange() {
    document.body.classList.toggle("dark-mode");
    // This will change the text depending on the mode.
    if (document.body.classList.contains("dark-mode")) explainerText.textContent = "Click to enable light mode."; 
    if (!document.body.classList.contains("dark-mode")) explainerText.textContent = "Click to enable Dark Mode.";
}