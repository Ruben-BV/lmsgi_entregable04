let carousel = document.querySelector(".carousel");
let slides = document.querySelectorAll(".slide");
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let dots = document.querySelectorAll(".carousel-nav .dots li");
let dotA = document.querySelector(".carousel .carousel-nav .dots .dotA");
let dotB = document.querySelector(".carousel .carousel-nav .dots .dotB");
let dotC = document.querySelector(".carousel .carousel-nav .dots .dotC");

let indexActualSlide = 0;
let lengthSlides = slides.length -1;

function showActualSlide(index) {
    if (index !== indexActualSlide) {
        slides[indexActualSlide].classList.remove("slide-visible");
        slides[indexActualSlide].classList.add("slide-hidden");
    }

    slides[index].classList.remove("slide-hidden");
    slides[index].classList.add("slide-visible");

    let lastActiveDot = document.querySelector(".carousel-nav .dots li.active-slide")
    lastActiveDot.classList.remove("active-slide");
    dots[index].classList.add("active-slide");

    indexActualSlide = index;
}

function showNext() {
    let index;
    if(indexActualSlide === slides.length -1 ) {
        index = 0;
    } else {
        index = indexActualSlide + 1;
    }

    showActualSlide(index);
}

function showPrev() {
    let index;
    if(indexActualSlide === 0 ) {
        index = slides.length - 1;
    } else {
        index = indexActualSlide - 1;
    }
    
    showActualSlide(index);
}

function showSlideA() {
    showActualSlide(0);
}

function showSlideB() {
    showActualSlide(1);
}

function showSlideC() {
    showActualSlide(2);
}

prevButton.addEventListener("click", showPrev);
nextButton.addEventListener("click", showNext);
dotA.addEventListener("click", showSlideA);
dotB.addEventListener("click", showSlideB);
dotC.addEventListener("click", showSlideC);