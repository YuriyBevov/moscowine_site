
let Masonry = require('masonry-layout');
const items = document.querySelectorAll('.catalog-menu__active');
const switchers = document.querySelectorAll('.js-catalog-menu-switcher');
const catalog = document.querySelector('.catalog-menu__content');
const backBtns = document.querySelectorAll('.catalog-menu__active-title');

let masonry = document.querySelector('.catalog-menu__active.is-active');
const active = masonry.querySelector('.catalog-menu__active-content');

masonry ?
new Masonry( active, {
  itemSelector: '.catalog-menu__inner',
  percentPosition: true,
}) : null;


const onClickChangeCatalogContent = (evt) => {
    const id = evt.currentTarget.getAttribute('data-label');
    switchers.forEach(sw => {
        sw.classList.contains('active') ?
        sw.classList.remove('active') : null;
    })

    evt.currentTarget.classList.add('active');
    
    items.forEach(item => {
        item.classList.contains('is-active') ?
        item.classList.remove('is-active') : null;
    });

    items.forEach(item => {
        if(item.getAttribute('data-id') === id) {
            item.classList.add('is-active');
            catalog.classList.remove('is-active');
            const active = item.querySelector('.catalog-menu__active-content');

            new Masonry( active, {
                itemSelector: '.catalog-menu__inner',
                percentPosition: true,
            })
        }
    });
}

switchers.forEach(switcher => {
    switcher.addEventListener('click', onClickChangeCatalogContent);
})

const onClickBackToMenu = () => {
    catalog.classList.add('is-active');
}

backBtns.forEach(btn => {
    btn.addEventListener('click', onClickBackToMenu);
})