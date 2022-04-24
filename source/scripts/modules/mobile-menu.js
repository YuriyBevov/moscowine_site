import { bodyLocker } from "../functions";

const menu = document.querySelector('.mobile-menu');
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