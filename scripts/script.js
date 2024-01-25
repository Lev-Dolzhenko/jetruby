const htmlOverlay = document.querySelector(".html");
const overlay = document.querySelector(".overlay");

/* BURGER MENU */

const burgerButton = document.getElementById("burgerButton");
const navMobile = document.getElementById("navMobile");

burgerButton.addEventListener("click", function () {
  navMobile.classList.toggle("open");
  navMobile.classList.toggle("none");
  htmlOverlay.classList.toggle("hideScrollY");
  document.querySelector(".overlay").classList.toggle("open");
});

/* MODALS */

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "block";
    overlay.style.display = "block";
    htmlOverlay.style.overflowY = "hidden";
  }
}

// window.onclick = function(event) {
//   if (event.target.classList.contains('modal')) {
//     event.target.style.display = "none";
//   }
// }

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "none";
    overlay.style.display = "none";
    htmlOverlay.style.overflowY = "unset";
  }
  console.log("click");
}
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
