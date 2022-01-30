import { addClass, removeClass, checkClass, toggleClass } from '../functions.js';

// нахожу все кнопки для открытия меню
let filterBtns = document.querySelectorAll('.search-dropdown__button');


let activeFilter = null;
let prevFilter = activeFilter;
let overlay = null;

const onClickCloseDropdown = (evt) => {
    console.log(evt.target, overlay)
    if(evt.target.contains(overlay)) {
        activeFilter.classList.add('js-collapsed');
        activeFilter = null;
    }
}

const onClickOpenDropdown = function() {
    let btn = this;
   
    activeFilter = btn.nextElementSibling;
    overlay = btn.parentElement;

    activeFilter.classList.remove('js-collapsed');
    window.addEventListener('click', onClickCloseDropdown);
}


//вешаю событие клика на все кнопки открывающие меню с фильтром
filterBtns.forEach(btn => {
    btn.addEventListener('click', onClickOpenDropdown);
})