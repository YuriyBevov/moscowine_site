import { addClass, removeClass } from "../functions";

const filterBtns = document.querySelectorAll('.search-dropdown__button');

let activeFilterBtn = null;
let prevFilterBtn = null;
let activeFilter = null;
let prevFilter = null;
let isActiveFilterOpened = false;

const onClickAwayCloseActiveFilter = function(evt) {

    if(!activeFilter.contains(evt.target) && isActiveFilterOpened) {
        console.log('conta')
        window.removeEventListener('click', onClickAwayCloseActiveFilter);
        activeFilterBtn.classList.remove('active');
        activeFilter.classList.add('js-collapsed');
    }

    isActiveFilterOpened = true;
}

const onClickOpenDropdown = function(evt) {
    prevFilterBtn = activeFilterBtn;
    prevFilterBtn ?
    prevFilter = prevFilterBtn.nextElementSibling : null;

    activeFilterBtn = this;
    activeFilter = this.nextElementSibling;

    if(prevFilterBtn && prevFilterBtn !== activeFilterBtn) {
        removeClass(prevFilterBtn, 'active');
        addClass(prevFilter, 'js-collapsed');
        window.removeEventListener('click', onClickAwayCloseActiveFilter);
    }

    isActiveFilterOpened = false;
    window.addEventListener('click', onClickAwayCloseActiveFilter);

    activeFilterBtn.classList.toggle('active');
    activeFilter.classList.toggle('js-collapsed');

    if(!activeFilterBtn.classList.contains('active')) {
        window.removeEventListener('click', onClickAwayCloseActiveFilter);
    }
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', onClickOpenDropdown);
})