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
