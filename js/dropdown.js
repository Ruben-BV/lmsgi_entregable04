const dropdownContainer = document.getElementById("dropdownContainer");
const dropdownMenu = document.getElementById("dropdown");

let timeoutId;

function setupDropdownListeners() {
    dropdownContainer.addEventListener("mouseover", showDropdown);
    dropdownContainer.addEventListener("mouseout", hideDropdown);
}

function removeDropdownListeners() {
    dropdownContainer.removeEventListener("mouseover", showDropdown);
    dropdownContainer.removeEventListener("mouseout", hideDropdown);
}

function showDropdown() {
    clearTimeout(timeoutId);
    dropdownMenu.classList.add("visible");
    dropdownMenu.classList.remove("hidden");
}

function hideDropdown() {
    timeoutId = setTimeout(() => {
        dropdownMenu.classList.remove("visible");
        dropdownMenu.classList.add("hidden");
    }, 250);
}

function checkScreenWidth() {
    if (window.innerWidth > 1050) {
        setupDropdownListeners();
    } else {
        removeDropdownListeners();
    }
}

checkScreenWidth();

window.addEventListener("resize", checkScreenWidth);