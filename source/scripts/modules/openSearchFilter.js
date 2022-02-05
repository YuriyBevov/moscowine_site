//import { initFilters } from './filter.js';
const searchControl = document.querySelector('.search__control');
const filter = document.querySelector('.search__filter');
const overlay = document.querySelector('.search__wrapper');

const onClickHideFilter = (evt) => {
    if(!overlay.contains(evt.target)) {
        filter.classList.remove('js-mounted');
        searchControl.addEventListener('focusin', onClickShowFilter);
        window.removeEventListener('click', onClickHideFilter);

        let activeFilter = document.querySelector('.search-dropdown__button.active');
        // let resultBlock = document.querySelector('.search__filter-result');

        if(activeFilter) {
            console.log('searchClose')
            activeFilter.classList.remove('active');
            activeFilter.nextElementSibling.classList.add('js-collapsed');
        }

        /* if(resultBlock.classList.contains('active')) {
            resultBlock.classList.remove('active');
        } */
    }
}

const onClickShowFilter = () => {
    filter.classList.add('js-mounted');
    searchControl.removeEventListener('focusin', onClickShowFilter);
    window.addEventListener('click', onClickHideFilter);
}

searchControl.addEventListener('focusin', onClickShowFilter);