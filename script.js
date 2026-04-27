// Task 1: Verification Log
console.log("Status Manager Started");

// Global variable setup (required for Task 10 using setInterval/clearInterval)
let intervalId = null;

// Use const to target required elements for easier access later in the script
// We use querySelector or getElementById to retrieve specific DOM nodes [3].
const mainTitle = document.querySelector("#main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");
const itemList = document.getElementById("item-list");

/* ======================================= */
// --- Task 3: Selecting and Changing Inner HTML ---
// Write the code here to select the mainTitle and update its innerHTML:
// Example: mainTitle.innerHTML = "New Title";
mainTitle.innerHTML = "DOM Project: Ready!";

/* ======================================= */
// --- Task 4: Attribute Modification ---
// Write the code here to use setAttribute() on the toggleButton element
// to add the required 'data-action' attribute.
toggleButton.setAttribute("data-action", "status-toggle");

/* ======================================= */
// --- Task 9: Looping and Applying Changes ---
// Define and call the highlightListItems() function here so it runs on load.
// You will need to use document.querySelectorAll('li') and a loop structure
// (like a 'for' loop or 'forEach') to iterate over all list items [3-5].

/* ======================================= */
// --- Tasks 5, 6, 7 & 8: Toggle Functionality ---
// Define the functions (e.g., toggleStatus, createTimestamp) 
// and event listeners
// here to handle the click event on the toggleButton [6, 7].
toggleButton.addEventListener("click", toggleStatus);
function toggleStatus(e) {
    console.log("toggleStatus()");
    statusOutput.classList.toggle("hidden");
    e.preventDefault();

    // check if hidden or not
    if (!statusOutput.classList.contains("hidden")) {
        mainTitle.style.backgroundColor = "yellow";
        createTimestamp();
    } else {
        mainTitle.style.backgroundColor = "";
    }
}

function createTimestamp() {
    const span = document.createElement("span");
    span.innerHTML = new Date().toLocaleDateString();
    statusOutput.appendChild(span);
}

function highlightListItems() {
    const itemList = document.querySelectorAll('li');

    itemList.forEach(function(item) {
        item.style.color = "blue";
    });
}

highlightListItems();

function startFlashing() {
    // prevent multiple intervals
    if (intervalId !== null) return;

    intervalId = setInterval(() => {
        controlPanel.classList.toggle("hidden");
    }, 500);
}
function stopFlashing() {
    clearInterval(intervalId);
    intervalId = null; // reset so it can be started again
}

timerButton.addEventListener("click", startFlashing);
timerButton.addEventListener("dblclick", stopFlashing);

/* ======================================= */
// --- Task 10: Timed Animation ---
// Define the startFlashing() and stopFlashing() functions using
// setInterval() and clearInterval() [8, 9], and bind them to the
// timerButton using addEventListener for 'click' and 'dblclick' [10].
