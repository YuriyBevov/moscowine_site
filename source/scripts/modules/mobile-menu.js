import { bodyLocker } from "../functions";

const menu = document.querySelector('.mobile-menu');
const catalog = document.querySelector('.catalog-menu');
const catalogContent = document.querySelector('.catalog-menu__content');
const menuOpener = document.querySelector('.js-mobile-menu-opener');
const menuCloser = document.querySelector('.js-mobile-menu-closer');

if(menu) {
    const onClickCloseMobileMenu = () => {
        menu.classList.remove('is-active');
        bodyLocker(false);
    }

    const onClickOpenMobileMenu = (evt) => {
        evt.preventDefault();
        menu.classList.toggle('is-active');

        catalog.classList.contains('is-active') ?
        catalog.classList.remove('is-active') : null;
        !catalogContent.classList.contains('is-active') ?
        catalogContent.classList.add('is-active') : null;

        if(menu.classList.contains('is-active')) {
            bodyLocker(true);
            menuCloser.addEventListener('click', onClickCloseMobileMenu);
        } else {
            bodyLocker(false);
            menuCloser.removeEventListener('click', onClickCloseMobileMenu);
        }
    }

    menuOpener.addEventListener('click', onClickOpenMobileMenu);
}