let moreBtn = document.querySelector('.js-search-result-more-btn');
let productCards = document.querySelectorAll('.product-card-sm');
let searchBlock = document.querySelector('.search');

productCards.forEach((card, i) => {
    if(i > 1) {
        card.style.display = 'none';
    }
})

const onClickHideMoreCards = () => {
    productCards.forEach((card, i) => {
        if(i > 1) {
            card.style.display = 'none';
        }
    })

    moreBtn.removeEventListener('click', onClickHideMoreCards);
    moreBtn.innerHTML = 'Все результаты';
    moreBtn.addEventListener('click', onClickShowMoreCards);

    searchBlock.scrollIntoView({ top: 0, behavior: "smooth" })
}

const onClickShowMoreCards = () => {
    productCards.forEach(card => {
        if(card.style.display === 'none') {
            card.style.display = 'flex';
        }

        moreBtn.removeEventListener('click', onClickShowMoreCards);
        moreBtn.innerHTML = 'Свернуть';
        moreBtn.addEventListener('click', onClickHideMoreCards);       
    })
}

moreBtn.addEventListener('click', onClickShowMoreCards);