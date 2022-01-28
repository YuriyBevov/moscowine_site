'use strict'
import filter_drop from './modules/filter_drop.js';
import swiper from './modules/swiper.js';
import yandex_map from './modules/yandex_map.js';
import limitStr from './modules/limitStr.js';

let btn = document.querySelector('.js-search-advanced-more-btn');
let container = document.querySelector('.search__advanced-result-container');

const onClickShowMoreResults = () => {
    container.style.overflowY = 'auto';
}

btn.addEventListener('click', onClickShowMoreResults);
