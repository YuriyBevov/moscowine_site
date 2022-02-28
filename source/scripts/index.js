'use strict'
import swiper from './modules/swiper.js';
import yandex_map from './modules/yandex_map.js';
import limitStr from './modules/limitStr.js';

import cardAddCount from './modules/cartAddCount.js';
import cartCountBtn from './modules/cartCountBtn.js';
import openSearchFilter from './modules/openSearchFilter.js';
import infoTabs from './modules/infoTabs.js';
import filter from './modules/filter.js'
import searchResultMore from './modules/searchResultMore.js';
import filterObserver from './modules/filterObserver.js';
import showMorePlaces from './modules/showMorePlaces.js';
import reviewStarControl from './modules/reviewStarControl.js';
import addReview from './modules/addReview.js';
import copyToClipboard from './modules/copyToClipboard.js';

let items = document.querySelectorAll('.offers__data-item');

const onClickExpandItem = (evt) => {
    console.log(evt.currentTarget);
    evt.currentTarget.classList.toggle('active');
}

items.forEach(item => {
    item.addEventListener('click', onClickExpandItem);
})

let historyTogglers = document.querySelectorAll('.history__togglers button');
let contents = document.querySelectorAll('.history__content-field');

const onClickToggleContent = (evt) => {
    console.log(evt.target)

    let num = evt.target.getAttribute('data-history-tab');
    historyTogglers.forEach(toggler => {
        toggler.classList.contains('active') ?
        toggler.classList.remove('active') : null;
    })
    evt.target.classList.add('active');

    contents.forEach(content => {
        content.classList.contains('active') ?
        content.classList.remove('active') : null;
    })

    contents[num - 1].classList.add('active');
}

historyTogglers.forEach(toggler => {
    toggler.addEventListener('click', onClickToggleContent);
})

let historyTabs = document.querySelectorAll('.offers__tab button');

const onClickChangeTab = (evt) => {
    historyTabs.forEach(tab => {
        tab.classList.contains('active') ?
        tab.classList.remove('active') : null;
    });

    evt.target.classList.add('active');
}

historyTabs.forEach(tab => {
    tab.addEventListener('click', onClickChangeTab);
})