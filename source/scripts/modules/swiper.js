import SwiperCore, { Autoplay, Scrollbar, Navigation, Pagination, Thumbs } from 'swiper/core';
SwiperCore.use([Autoplay, Scrollbar, Navigation, Pagination, Thumbs]);

import Swiper from 'swiper';

console.log('scripts is ok!');

/*let introSwiper = document.querySelector('.intro-swiper');

introSwiper ?
new Swiper(introSwiper, {
    slidesPerView: 1,
    modules: [Pagination],
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
}) : null


let reviewSwiper = document.querySelector('.reviews-swiper');

reviewSwiper ?
new Swiper(reviewSwiper, {
    modules: [Navigation],
    slidesPerView: 'auto',
    spaceBetween: 10,
    freeMode: true,

    breakpoints: {
        768: {
            spaceBetween: 30,
        },

        534: {
            spaceBetween: 20
        }
      },
    
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
}) : null

let popularSlider = document.querySelector('.popular-swiper');

popularSlider ?
new Swiper(popularSlider, {
    slidesPerView: '4',
    modules: [Pagination],

    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
}) : null

let historySlider = document.querySelector('.history-swiper');

historySlider ?
new Swiper(historySlider, {
    slidesPerView: '4',
    modules: [Pagination],

    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
}) : null*/