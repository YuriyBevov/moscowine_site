import SwiperCore, { Autoplay, Scrollbar, Navigation, Pagination, Thumbs } from 'swiper/core';
SwiperCore.use([Autoplay, Scrollbar, Navigation, Pagination, Thumbs]);

import Swiper from 'swiper';

/* index-page/intro */
let mainSlider = document.querySelector('.main-slider');

mainSlider ?
new Swiper(mainSlider, {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 1500,
    loop: true,
    modules: [Pagination, Navigation],
    pagination: {
        el: ".main-slider-pagination",
    },
    navigation: {
        nextEl: ".main-slider-button-next",
        prevEl: ".main-slider-button-prev",
    }
}) : null

/*index-page/features*/

let regSlider = document.querySelector('.reg-slider');

regSlider ?
new Swiper(regSlider, {
    slidesPerView: 'auto',
    spaceBetween: 20,
    freeMode: true,
    //loop: true, 
    modules: [Navigation],

    navigation: {
        nextEl: ".reg-slider-button-next",
        prevEl: ".reg-slider-button-prev",
    }
}) : null

let prodSlider = document.querySelectorAll('.product-card-slider');

prodSlider ?
prodSlider.forEach(slider => {
    new Swiper(slider, {
        slidesPerView: 'auto',
        spaceBetween: 20,
    });
}) : null;

const catItemSlider = document.querySelector('.thumbs-slider');

if(catItemSlider) {
    let swiper = new Swiper(".thumbs-slider-preview", {
      slidesPerView: "auto",
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      direction: 'vertical',
      spaceBetween: 10,
    });

    let swiperThumbs = new Swiper(".thumbs-slider", {
      zoom: true,
      loop: true,
      spaceBetween: 10,

      thumbs: {
        swiper: swiper,
      },
    });
}
