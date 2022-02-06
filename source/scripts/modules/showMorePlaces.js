let items = document.querySelectorAll('.about__places-item');
let btn = document.querySelector('.js-show-more-places-btn');
let btnContainer = document.querySelector('.about__places-more');

if(btn) {
    items.forEach((item, i) => {
        if(i > 5) {
            item.style.display = 'none';
        }   
    })

    const onClickShowMore = () => {
        items.forEach((item, i) => {
            item.style.display = 'flex';
            if(i === items.length - 1) {
                item.style.borderBottom = 'none';
            }
        })

        btn.removeEventListener('click', onClickShowMore);
        btnContainer.style.display = 'none';
    }

    btn.addEventListener('click', onClickShowMore);
}