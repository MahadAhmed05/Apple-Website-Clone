// NavBar
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.querySelector(".nav-bar-links");

  menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });
});

// Slider
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Footer
document.querySelectorAll(".dropdown-header").forEach((header) => {
  header.addEventListener("click", function () {
    this.parentElement.classList.toggle("open");
  });
});
