import SwiperCore, { Autoplay, Scrollbar, Navigation, Pagination, Thumbs } from 'swiper/core';
SwiperCore.use([Autoplay, Scrollbar, Navigation, Pagination, Thumbs]);

import Swiper from 'swiper';

let mainSlider = document.querySelector('.main-slider');
console.log(mainSlider)
mainSlider ?
new Swiper(mainSlider, {
    slidesPerView: 1,
    modules: [Pagination],
    pagination: {
        el: ".main-slider-pagination",
    },
    navigation: {
        nextEl: ".main-slider-button-next",
        prevEl: ".main-slider-button-prev",
    }
}) : null