const dropdownContainer = document.getElementById("dropdownContainer");
const dropdownMenu = document.getElementById("dropdown");

let timeoutId;

dropdownContainer.addEventListener("mouseover", () => {
    clearTimeout(timeoutId);
    dropdownMenu.classList.add("visible");
    dropdownMenu.classList.remove("hidden");
});

dropdownContainer.addEventListener("mouseout", () => {
    timeoutId = setTimeout(() => {
        dropdownMenu.classList.remove("visible");
        dropdownMenu.classList.add("hidden");
    }, 250);
});