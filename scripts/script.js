/* INIT SWIPER */

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 125,
  loop: true,
  navigation: {
    nextEl: ".wrapper__button_next",
    prevEl: ".wrapper__button_prev",
  },
});

/* INIT AOS */

AOS.init({
  easing: "linear",
  once: true,
});
