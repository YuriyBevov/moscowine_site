import SwiperCore, { Autoplay, Scrollbar, Navigation, Pagination, Thumbs } from 'swiper/core';
SwiperCore.use([Autoplay, Scrollbar, Navigation, Pagination, Thumbs]);

import Swiper from 'swiper';

/* index-page/intro */
let mainSlider = document.querySelector('.main-slider');

mainSlider ?
new Swiper(mainSlider, {
    slidesPerView: 1,
    spaceBetween: 20,
    speed: 800,
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

/* index-page/hero */
let heroSlider = document.querySelector('.hero-slider');

if(heroSlider) {
    new Swiper(heroSlider, {
        slidesPerView: 1,
        spaceBetween: 20,
        speed: 500,
        loop: true,
        modules: [Pagination, Navigation],
        pagination: {
            el: ".hero-slider-pagination",
        },
        navigation: {
            nextEl: ".hero-slider-button-next",
            prevEl: ".hero-slider-button-prev",
        }
    });

    let header = document.querySelector('header');
    let headerHeight = header.getBoundingClientRect().height;
    
    heroSlider.style.maxHeight = `calc(100vh - ${headerHeight}px`;
    
    window.addEventListener('resize', () => {
        if(header.getBoundingClientRect().height !== headerHeight) {
            headerHeight = header.getBoundingClientRect().height;
            heroSlider.style.maxHeight = `calc(100vh - ${headerHeight}px`;
        }
    })
}

/*index-page/features*/

let regSlider = document.querySelector('.reg-slider');

regSlider ?
new Swiper(regSlider, {
    slidesPerView: 'auto',
    spaceBetween: 20,
    freeMode: true,
    modules: [Navigation],

    navigation: {
        nextEl: ".reg-slider-button-next",
        prevEl: ".reg-slider-button-prev",
    }
}) : null

/*index-page/blog*/

let blogSlider = document.querySelector('.blog-slider');

blogSlider ?
new Swiper(blogSlider, {
    slidesPerView: 'auto',
    spaceBetween: 20,
    freeMode: true,
    modules: [Navigation],

    navigation: {
        nextEl: ".blog-slider-button-next",
        prevEl: ".blog-slider-button-prev",
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

let compareSlider = document.querySelectorAll('.compare-card-slider');

compareSlider ?
compareSlider.forEach(slider => {
    new Swiper(slider, {
        slidesPerView: 'auto',
        modules: [Pagination, Navigation],
        
        navigation: {
            nextEl: ".compare-slider-button-next",
            prevEl: ".compare-slider-button-prev",
        }
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

const filterSlider = document.querySelector('.filter-slider');

if(filterSlider) {
    let swiper = new Swiper(filterSlider, {
        slidesPerView: "auto",
        freeMode: true,
        spaceBetween: 10,
    });
}

let tabSlider = document.querySelectorAll('.tabs-swiper-container');

tabSlider ?
tabSlider.forEach(slider => {
    new Swiper(slider, {
        slidesPerView: 'auto',
        slideToClickedSlide: true,
    });
}) : null;


// proposal page

let propSlider = document.querySelector('.proposal-slider');
let windowWidth = window.innerWidth;
let isPropSliderEnabled = false;

let proposalSliderInstance = new Swiper(propSlider, {
    slidesPerView: 'auto',
    freeMode: true,
});

if(propSlider && windowWidth < 769) {
    isPropSliderEnabled = true;
    proposalSliderInstance.enable();
} else {
    proposalSliderInstance.disable();
}

const onResizeHandler = () => {
    if(window.innerWidth < 769 && !isPropSliderEnabled) {
        isPropSliderEnabled = true;
        proposalSliderInstance = new Swiper(propSlider, {
            slidesPerView: 'auto',
            freeMode: true,
        });
    } else if (window.innerWidth >= 769 && isPropSliderEnabled) {
        isPropSliderEnabled = false;
        proposalSliderInstance.destroy(true, true);
    }
}

window.addEventListener('resize', onResizeHandler);