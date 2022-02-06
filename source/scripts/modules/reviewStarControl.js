let btns = document.querySelectorAll('.modal-review__rate-container button');

const onClickSetControlValue = (evt) => {
    let index = evt.currentTarget.getAttribute('data-id');

    let control = document.querySelector('.modal-review__hidden-rate input[data-rate-id="' + index + '"]');
    control.checked = true;

    btns.forEach(btn => {
        btn.classList.contains('js-active') ?
        btn.classList.remove('js-active') : null;
    })

    btns.forEach((btn, i) => {
        if(i < index && !btn.classList.contains('js-active')) {
            btn.classList.add('js-active');
        }
    })
}

if(btns) {
    btns.forEach(btn => {
        btn.addEventListener('click', onClickSetControlValue);
    })
}
