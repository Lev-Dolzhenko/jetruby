/* BURGER MENU */

const burgerButton = document.getElementById("burgerButton");
const navMobile = document.getElementById("navMobile");

burgerButton.addEventListener("click", function () {
  navMobile.classList.toggle("open");
  navMobile.classList.toggle("none");
  document.querySelector(".overlay").classList.toggle("open");
});

/* MODALS */


/* INIT SWIPER */

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 125,
  loop: true,
  navigation: {
    nextEl: ".wrapper__button_next",
    prevEl: ".wrapper__button_prev",
  },
  breakpoints: {
    // when window width is <= 499px
    320: {
      slidesPerView: 1,
      spaceBetween: 30, // Правильное свойство для промежутка между слайдами
    },
    // when window width is <= 999px
    1100: {
      slidesPerView: 2,
      spaceBetween: 40, // Правильное свойство для промежутка между слайдами
    },
  },
});

/* INIT AOS */

AOS.init({
  easing: "linear",
  once: true,
});
