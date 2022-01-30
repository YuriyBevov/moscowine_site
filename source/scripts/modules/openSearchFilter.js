const control = document.querySelector('.search__control');
const filter = document.querySelector('.search__filter');
const overlay = document.querySelector('.search__wrapper');

const onClickHideFilter = (evt) => {
    if(!overlay.contains(evt.target)) {
        filter.classList.remove('js-mounted');
        control.addEventListener('focusin', onClickShowFilter);
        window.removeEventListener('click', onClickHideFilter);
    }
}

const onClickShowFilter = () => {
    filter.classList.add('js-mounted');
    control.removeEventListener('focusin', onClickShowFilter);
    window.addEventListener('click', onClickHideFilter);
}

control.addEventListener('focusin', onClickShowFilter);