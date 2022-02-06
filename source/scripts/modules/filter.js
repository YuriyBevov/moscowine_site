import { addClass, removeClass, checkClass } from "../functions";

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

//--------- Загрузчик и показ результатов, временно, для показа

let loader = document.querySelector('.loader');
const loaderTime = 700; //мс
const intervalTime = 100; // мс
const intervalClearStep = 1;
let intervalClearTime = 0;

let resultBlock = document.querySelector('.search__filter-result');
let resultsContainer = document.querySelector('.search-result__container');

let emptyResultBlock = document.querySelector('.search-result__empty');
let listResultBlock = document.querySelector('.search-result__list');

let addsFields = document.querySelectorAll('.search__field--adds');
//let catalogBtn = document.querySelector('.search__catalog-btn');

const searching = function(fields) {
    emptyResultBlock.style.display = 'none';
    listResultBlock.style.display = 'none';
    
    removeClass(resultsContainer, 'active');

    if(!checkClass(loader, 'js-active')) {
        addClass(loader, 'js-active');
        
        addClass(resultBlock, 'active');
        
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
    //-- рандомный показ блока с результатами
    let random = Math.floor(Math.random() * 10);

    if(random % 2 === 0) {
        emptyResultBlock.style.display = 'none';
        listResultBlock.style.display = 'flex';
    } else {
        emptyResultBlock.style.display = 'flex';
        listResultBlock.style.display = 'none';
    }
    //----

    addClass(resultsContainer, 'active');

    addsFields.forEach(field => {
        field.style.display = 'none';
    })
    //catalogBtn.style.display = 'none';
}

//----------

const onClickCheckControl = function(evt) {
        // бэджик в кнопке, с кол-м выбранных фильтров
        let badge = activeFilter.previousElementSibling.querySelector('.search-dropdown__badge');
        // все чекбоксы в форме
        let controls = activeFilter.querySelectorAll('input[type="checkbox"]');
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
    
            addClass(activeFilter.previousElementSibling, 'js-filter-active');
        } else {
            checkClass(badge, 'js-filter-selected') ?
            removeClass(badge, 'js-filter-selected') : null;
            removeClass(activeFilter.previousElementSibling, 'js-filter-active');
        }
        
        // передаю выбранные чекбоксы в функцию поиска
        let selected = [];
        controls.forEach(ctrl => ctrl.checked === true ? selected.push(ctrl.getAttribute('id')) : null);

        searching(selected);
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

        let controls = prevFilter.querySelectorAll('input[type="checkbox"]');

        controls.forEach(control => {
            control.addEventListener('click', onClickCheckControl);
        })
    }

    isActiveFilterOpened = false;
    window.addEventListener('click', onClickAwayCloseActiveFilter);

    activeFilterBtn.classList.toggle('active');
    activeFilter.classList.toggle('js-collapsed');

    //--controls
    let controls = activeFilter.querySelectorAll('input[type="checkbox"]');

    controls.forEach(control => {
        control.addEventListener('click', onClickCheckControl);
    })
    //--

    if(!activeFilterBtn.classList.contains('active')) {
        window.removeEventListener('click', onClickAwayCloseActiveFilter);
    }
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', onClickOpenDropdown);
})
