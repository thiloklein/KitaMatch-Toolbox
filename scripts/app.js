import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

const swiper = new Swiper(".swiper", {
    modules: [Navigation, Pagination, Autoplay],
    loop: true,
    speed: 1000,
  
    pagination: {
        el: ".swiper-pagination",
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});