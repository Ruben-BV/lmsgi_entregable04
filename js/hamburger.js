const nav = document.getElementById("nav")
const hamburger = document.getElementById("hamburger");
const exit = document.getElementById("exit");


hamburger.addEventListener("click", () => {
    nav.classList.add("visible");
    nav.classList.remove("hidden");
});


exit.addEventListener("click", () => {
    nav.classList.add("hidden");
    nav.classList.remove("visible");
});