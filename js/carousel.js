let carousel = document.querySelector(".carousel");
let slides = document.querySelectorAll(".slide");
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let dots = document.querySelectorAll(".carousel-nav .dots li");

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

prev.addEventListener("click", showPrev);
next.addEventListener("click", showNext);