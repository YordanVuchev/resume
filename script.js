const sliderRightArrow = document.querySelector(".slide-arrow--right");
const sliderLeftArrow = document.querySelector(".slide-arrow--left");
const sliders = document.querySelectorAll(".slide");
const sliderFirst = document.querySelector(".slide--1");
const sliderSecond = document.querySelector(".slide--2");
const dots = document.querySelectorAll(".dot");
const dotsContainer = document.querySelector(".dots");
const sectionAbout = document.querySelector(".section-about");
const sectionProjects = document.querySelector(".section-projects");
const navList = document.querySelector(".nav-list");

/* 
===============================
Smooth scrolling when clicked on nav links
===============================
*/

navList.addEventListener("click", function (e) {
  e.preventDefault();
  if (!e.target.classList.contains("nav-link")) return;

  const id = e.target.getAttribute("href");
  const scrollToSection = document.querySelector(id);
  const coords = scrollToSection.getBoundingClientRect();

  const options = {
    left: coords.left + window.pageXOffset,
    top: coords.top + window.pageYOffset,
    behavior: "smooth",
  };

  window.scrollTo(options);
});

/* 
===============================
SLIDER COMPONENT (PROJECTS SECTION)
===============================
*/

let currSlide = 1;
const maxSlides = 3;

const nextSlide = function (slide) {
  if (slide === maxSlides) {
    slide = 1;
  } else {
    slide++;
  }

  return slide;
};

const previousSlide = function (slide) {
  if (slide === 1) {
    slide = maxSlides;
  } else {
    slide--;
  }

  return slide;
};

const goToSlide = function (slide) {
  const slideComponent = document.querySelector(`.slide--${slide}`);

  sliders.forEach((node) => node.classList.add("hidden"));

  slideComponent.classList.remove("hidden");
};

const changeDot = function (slide) {
  dots.forEach((node) => node.classList.remove("dot--active"));
  const currDot = document.querySelector(`[data-slide="${slide}"]`);
  currDot.classList.add("dot--active");
};

sliderRightArrow.addEventListener("click", function (e) {
  currSlide = nextSlide(currSlide);
  changeDot(currSlide);
  goToSlide(currSlide);
});

sliderLeftArrow.addEventListener("click", function (e) {
  currSlide = previousSlide(currSlide);
  changeDot(currSlide);
  goToSlide(currSlide);
});

dotsContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dot")) {
    const { slide } = e.target.dataset;
    changeDot(slide);
    goToSlide(slide);
  }
});
