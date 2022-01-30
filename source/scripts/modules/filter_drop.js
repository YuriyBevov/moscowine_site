import { addClass, removeClass, checkClass, toggleClass } from '../functions.js';
// нахожу все кнопки для открытия меню
let btns = document.querySelectorAll('.search-dropdown__button');

// сохраняю в пер-ю текущее меню
let activeMenu = null;

//--------- Загрузчик и показ результатов, для показа

let loader = document.querySelector('.loader');
const loaderTime = 700; //мс
const intervalTime = 100; // мс
const intervalClearStep = 1;
let intervalClearTime = 0;
let results = document.querySelector('.search__advanced-result-container');

const searching = function(fields) {
    removeClass(results, 'active');

    if(!checkClass(loader, 'js-active')) {
        addClass(loader, 'js-active');
        let loaderInterval = setInterval(() => {
            intervalClearTime += intervalClearStep;
            if(intervalClearTime === loaderTime / intervalTime) {
                removeClass(loader, 'js-active');
                clearInterval(loaderInterval);
                intervalClearTime = 0;
                showResults();
            }
        }, intervalTime);
    } else {
        intervalClearTime = 0;
    }
};

const showResults = function() {
    addClass(results, 'active');
}

//----------

const setFilterParams = (evt) => {       
    // бэджик в кнопке, с кол-м выбранных фильтров
    let badge = activeMenu.previousElementSibling.querySelector('.search-dropdown__badge');
    // все чекбоксы в форме
    let controls = activeMenu.querySelectorAll('input[type="checkbox"]');
    // чекбокс выбрать все
    let selectAllControl = controls[0];
    // все активные чекбоксы в форме

    if(evt.target === selectAllControl) {
        selectAllControl.checked === true ?
        controls.forEach(checkbox => {
            checkbox.checked === false ?
            checkbox.checked = true : null;
        }) :
        controls.forEach(checkbox => {
            checkbox.checked === true ?
            checkbox.checked = false : null;
        });
    }

    let checkedControlsLength = 0;

    controls.forEach(c => {
        c.checked ?
        checkedControlsLength += 1 : null;
    });
    
    if(controls.length - 1 === checkedControlsLength && selectAllControl.checked === false) {
        selectAllControl.checked = true;
        checkedControlsLength += 1;
    } else if (controls.length - 1 === checkedControlsLength && selectAllControl.checked === true) {
        selectAllControl.checked = false;
        checkedControlsLength -= 1;
    }

    if(checkedControlsLength > 0) {
        !checkClass(badge, 'js-filter-selected') ?
        addClass(badge, 'js-filter-selected') : null;
        // показываю кол-во активных чекбоксов, за искл ч-са выбрать все
        selectAllControl.checked === false ?
        badge.innerHTML = checkedControlsLength :
        badge.innerHTML = checkedControlsLength - 1;

        addClass(activeMenu.previousElementSibling, 'js-filter-active');
    } else {
        checkClass(badge, 'js-filter-selected') ?
        removeClass(badge, 'js-filter-selected') : null;
        removeClass(activeMenu.previousElementSibling, 'js-filter-active');
    }
    
    // передаю выбранные чекбоксы в функцию поиска
    let selected = [];
    controls.forEach(ctrl => ctrl.checked === true ? selected.push(ctrl.getAttribute('id')) : null);
    //searching(selected);
}

// показываю меню
const onClickOpenMenu = function() {
    // контекст, наша кнопка открытия фильтра
    let btn = this;
    
    // текущее меню фильтр
    let prevMenu = activeMenu;
    let prevMenuControls;

    activeMenu = btn.nextElementSibling;
    let activeMenuControls = activeMenu.querySelectorAll('input[type="checkbox"]');

    // закрываю все активные фильтры
    btns.forEach(btn => {
        if(btn !== this && checkClass(btn, 'active')) {
            removeClass(btn, 'active');
            addClass(btn.nextElementSibling, 'js-collapsed');
        }
    });

    // открываю/закрываю фильтр
    if(!btn.classList.contains('active')) {
        console.log(btn);
        removeClass(activeMenu, 'js-collapsed');
        addClass(btn, 'active');

        // вешаю слушатели на инпуты в активном меню
        activeMenuControls.forEach(control => {
            control.addEventListener('change', setFilterParams);
        });

        // удаляю слушатели на инпуты в предыдущем менюб если было
        if(prevMenu) {
            prevMenuControls = prevMenu.querySelectorAll('input[type="checkbox"]');
            prevMenuControls.forEach(control => {
                control.removeEventListener('change', setFilterParams);
            });
        }
    } else {
        addClass(activeMenu, 'js-collapsed');
        removeClass(btn, 'active');
        // обнуляю активное меню
        activeMenu = null;
        // удаляю слушатели на инпуты в предыдущем меню
        let prevMenuControls = prevMenu.querySelectorAll('input[type="checkbox"]');
        prevMenuControls.forEach(control => {
            control.removeEventListener('change', setFilterParams);
            console.log('remove else el')
        });
    }
};

let advancedBtn = document.querySelector('.js-advanced-search-more');
let advancedFilter = document.querySelector('.search__advanced');

const onClickToggleAdvancedSearch = (evt) => {
    evt.preventDefault();
    advancedFilter.classList.toggle('active');
}

advancedBtn.addEventListener('click', onClickToggleAdvancedSearch);

//вешаю событие клика на все кнопки открывающие меню с фильтром
btns.forEach(btn => {
    btn.addEventListener('click', onClickOpenMenu);
})