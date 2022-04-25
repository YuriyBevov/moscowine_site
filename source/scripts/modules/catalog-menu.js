import { bodyLocker } from "../functions";
const catalog = document.querySelector('.catalog-menu');
const content = document.querySelector('.catalog-menu__content');
const mobileMenu = document.querySelector('.mobile-menu');

if (catalog) {
    const catalogCloser = catalog.querySelector('.js-catalog-menu-closer');
    const catalogOpeners = document.querySelectorAll('.js-catalog-menu-opener');

    const onClickCloseCatalogMenu = () => {
        catalog.classList.remove('is-active');
        if(!content.classList.contains('is-active')) {
            content.classList.add('is-active');
        }
        bodyLocker(false);
    }

    const onOverlayClickCloseCatalogMenu  = (evt) => {
        if(evt.target === catalog) {
            catalog.classList.remove('is-active');
            bodyLocker(false);
            catalogCloser.removeEventListener('click', onClickCloseCatalogMenu);
            catalog.removeEventListener('click', onOverlayClickCloseCatalogMenu);
            if(!content.classList.contains('is-active')) {
                content.classList.add('is-active');
            }
        }
    }

    const onClickOpenCatalogMenu = (evt) => {
        evt.preventDefault();
        catalog.classList.toggle('is-active');

        mobileMenu.classList.contains('is-active') ?
        mobileMenu.classList.remove('is-active') : null;

        if(catalog.classList.contains('is-active')) {
            bodyLocker(true);
            catalogCloser.addEventListener('click', onClickCloseCatalogMenu);
            catalog.addEventListener('click', onOverlayClickCloseCatalogMenu);
        } else {
            bodyLocker(false);
            catalogCloser.removeEventListener('click', onClickCloseCatalogMenu);
            catalog.removeEventListener('click', onOverlayClickCloseCatalogMenu);
            if(!content.classList.contains('is-active')) {
                content.classList.add('is-active');
            }
        }
    }

    catalogOpeners.forEach(opener => {
        opener.addEventListener('click', onClickOpenCatalogMenu);
    });
}
