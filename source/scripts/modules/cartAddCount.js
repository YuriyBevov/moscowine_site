let cartAddBtns = document.querySelectorAll('.js-cart-add-btn');

const onClickShowItemCount = function() {
    this.classList.add('clicked');
    const countField = this.nextElementSibling.querySelector('span');
    let currentCount = 1;
    const countDec = this.nextElementSibling.querySelector('.js-count-dec');
    const countInc = this.nextElementSibling.querySelector('.js-count-inc');

    countField.innerHTML = currentCount;
    const onClickDecCount = () => {
        if(currentCount > 1) {
            currentCount -= 1;
            countField.innerHTML = currentCount;
        } else {
            currentCount = 0;
            countField.innerHTML = currentCount;
            this.classList.remove('clicked');
            countInc.removeEventListener('click', onClickIncCount);
            countDec.removeEventListener('click', onClickDecCount);
        }
    }
    const onClickIncCount = () => {
        currentCount += 1;
        countField.innerHTML = currentCount;
    }
    countInc.addEventListener('click', onClickIncCount);
    countDec.addEventListener('click', onClickDecCount);
}

cartAddBtns.forEach(btn => {
    btn.addEventListener('click', onClickShowItemCount);
});