var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  conteredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  autoplay: {
    delay: 2000,
  },
});

AOS.init();

const openModalButton = document.querySelector(".btn.btn-kuning");
const modal = document.getElementById("modal");
const closeModalButton = document.getElementById("close-modal");

openModalButton.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeModalButton.addEventListener("click", () => {
  modal.classList.add("hidden");
});
