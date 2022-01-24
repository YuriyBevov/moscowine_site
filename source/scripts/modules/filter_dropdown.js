// нахожу все фильтры с менюшками скрытыми
let filters = document.querySelectorAll('.search-filter');
//  кнопка открытия меню
let btns = document.querySelectorAll('.search-filter button');

// btn - js-filter-active = когда фильтр внутри выбран полностью
// btn - active = когда кнопка активна и фильтр показан
// span - js-filter-selected = когда фильтр выбран частично и показывается кол-во
// form - js-collapsed = когда форма закрыта


// все работает норм кроме кнопки выбрать все !!!!!!!!!!!!!!!!!!
// сделать рефакторинг

// сохраняю в пер-ю текущее меню
let activeMenu;

// получаю активное меню и булево, была ли кликнута кнопка выбрать все
const setFilterParams = (menu, isSelectedAll) => {
    // все чекбоксы в форме
    let checkboxes = menu.querySelectorAll('input[type="checkbox"]');
    // все активные чекбоксы в форме
    let activeCheckboxes = menu.querySelectorAll('input[type="checkbox"]:checked');
    // бэджик в кнопке, с кол-м выбранных фильтров
    let badge = menu.previousElementSibling.querySelector('span');

    // если нажата кнопка выбрать все
    if(isSelectedAll) {
        ///лаги
        if(checkboxes.length > activeCheckboxes.length) {
            checkboxes.forEach(checkbox => checkbox.checked = true);
            menu.previousElementSibling.classList.add('js-filter-active');
            badge.classList.contains('js-filter-selected') ?
            badge.classList.remove('js-filter-selected') : null;
        } else {
            checkboxes.forEach(checkbox => checkbox.checked = false);
            menu.previousElementSibling.classList.remove('js-filter-active');
        }
        //------
    } else {
        if(activeCheckboxes.length > 0) {
            !badge.classList.contains('js-filter-selected') ?
            badge.classList.add('js-filter-selected') : null;
            badge.innerHTML = activeCheckboxes.length;
    
            if(checkboxes.length === activeCheckboxes.length && !menu.previousElementSibling.classList.contains('js-filter-active')) {
                menu.previousElementSibling.classList.add('js-filter-active');
                badge.classList.contains('js-filter-selected') ?
                badge.classList.remove('js-filter-selected') : null;
            } else {
                menu.previousElementSibling.classList.remove('js-filter-active');
            }
        } else {
            badge.classList.contains('js-filter-selected') ?
            badge.classList.remove('js-filter-selected') : null;
        } 
    }
}

const changeFilterParamsHandler = function() {
    // при выборе чекбокса, передаю активную менюшку, без параметра выбрать все
    setFilterParams(activeMenu, false);
}

const checkMenuItemsStatus = menu => {
    // записываю тек меню в пер-ю
    activeMenu = menu;

    //--------------------------

    // нахожу в меню кнопку "выбрать все"
    let selectAllBtn = menu.querySelector('.js-select-all');
    // вешаю на нее обработчик.. !! тут нужнобудет как то его удалять потом
    selectAllBtn.addEventListener('click', function() {
        console.log('event')
        // при клике на кнопку, передаю активную менюшку, с параметром выбрать все
        setFilterParams(activeMenu, true);
    });
    
    //--------------------------------
    // нахожу все чекбоксы
    let controls = menu.querySelectorAll('input[type="checkbox"]');
    controls.forEach(control => {
        // вешаю на них слушатель
        control.addEventListener('change', changeFilterParamsHandler)
    });
}

const onClickShowMenu = function() {
    let btn = this;
    //нахожу тек-е меню
    let menu = btn.nextElementSibling;
    // закрываю все открытые на данный момент менюшки
    btns.forEach(btn => {
        if(btn !== this && btn.classList.contains('active')) {
            btn.classList.remove('active');
            btn.nextElementSibling.classList.add('js-collapsed');
        }
    })
    // проверяю, если тек-я мнюшка уже открыта - закрываю ее,
    // если нет открываю и проверяю статус чекбоксов
    if(!btn.classList.contains('active')) {
        menu.classList.remove('js-collapsed');
        btn.classList.add('active');
        // проверяю статус чекбоксов в текущем меню
        checkMenuItemsStatus(menu);
    } else {
        menu.classList.add('js-collapsed');
        btn.classList.remove('active');
    }
}

// вешаю событие клика на все кнопки открытия менюшек
filters.forEach(filter => {
    let btn = filter.querySelector('button');
    btn.addEventListener('click', onClickShowMenu);
});