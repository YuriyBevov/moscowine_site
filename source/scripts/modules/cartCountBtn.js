const cartCountDecs = document.querySelectorAll('.cart-content .js-count-dec');
const cartCountIncs = document.querySelectorAll('.cart-content .js-count-inc');
const cartItems = document.querySelectorAll('.cart-item');

const onClickDecItems = (evt) => {
    let countNode = evt.target.parentNode.querySelector('span');
    let currentCount = Number(countNode.innerHTML);

    if(currentCount > 0) {
        currentCount -= 1;
    }

    if (currentCount === 0) {
        cartItems.forEach(item => {
            item.contains(countNode) && !item.classList.contains('is-deleted') ?
            item.classList.add('is-deleted') : null;
        })
    }

    countNode.innerHTML = currentCount;
}   

const onClickIncItems = (evt) => {
    let countNode = evt.target.parentNode.querySelector('span');
    let currentCount = Number(countNode.innerHTML);
    
    currentCount += 1;

    cartItems.forEach(item => {
        item.contains(countNode) && item.classList.contains('is-deleted') ?
        item.classList.remove('is-deleted') : null;
    })

    countNode.innerHTML = currentCount;
}   

cartCountDecs.forEach(btn => {
    btn.addEventListener('click', onClickDecItems);
})
cartCountIncs.forEach(btn => {
    btn.addEventListener('click', onClickIncItems);
})
