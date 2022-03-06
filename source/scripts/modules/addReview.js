let reviewBtn = document.querySelector('.js-review-btn');
let modal = document.querySelector('.modal-review');
let modalContent = document.querySelector('.modal__wrapper');
let body = document.querySelector('body');
let resetBtn = document.querySelector('.js-modal-review-reset-btn');
let submitBtn = document.querySelector('.js-modal-review-submit-btn');
let form = document.querySelector('.modal-review form');

if(reviewBtn) {
    let controls = form.querySelectorAll('.js-validation-control');
    
    const onTouchCloseModal = (evt) => {
        if(evt.target.contains(modalContent)) {
            modal.classList.add('closed');
            body.style.overflow = 'auto';
            reviewBtn.addEventListener('click', onClickShowModal);
            resetBtn.removeEventListener('click', onClickCloseModal);
            modal.removeEventListener('click', onTouchCloseModal);
        }
    }

    const onClickCloseModal = () => {
        modal.classList.add('closed');
        body.style.overflow = 'auto';
        reviewBtn.addEventListener('click', onClickShowModal);
        modal.removeEventListener('click', onTouchCloseModal);
    }

    const onClickShowModal = () => {
        let btns = document.querySelectorAll('.modal-review__rate-container button');

        btns.forEach(btn => {
            btn.classList.contains('js-active') ?
            btn.classList.remove('js-active') : null;
        });


        controls.forEach(control => {
            control.classList.contains('js-invalid-control') ?
            control.classList.remove('js-invalid-control') : null;
        });

        let validateMsg = form.querySelector('.modal-review__validation-badge');

        !validateMsg.classList.contains('js-hidden') ?
        validateMsg.classList.add('js-hidden') : null;

        modal.classList.remove('closed');
        body.style.overflow = 'hidden';
        reviewBtn.removeEventListener('click', onClickShowModal);
        modal.addEventListener('click', onTouchCloseModal);
        resetBtn.addEventListener('click', onClickCloseModal);
    }

    reviewBtn.addEventListener('click', onClickShowModal);

    const onClickSubmitForm = (evt) => {
        evt.preventDefault();
        validateFormControls(form);
    }  

    function validateFormControls(form) {
        let validateMsg = form.querySelector('.modal-review__validation-badge');
    
        let invalidControls = [];
    
        controls.forEach(control => {
            control.classList.contains('js-invalid-control') ?
            control.classList.remove('js-invalid-control') : null;
    
            if(!control.value.trim().length) {
                invalidControls.push(control);
                control.classList.add('js-invalid-control');
            }
        })
    
        if(invalidControls.length && validateMsg.classList.contains('js-hidden')) {
            validateMsg.classList.remove('js-hidden');
        } else if(!invalidControls.length) {

            !validateMsg.classList.contains('js-hidden') ?
            validateMsg.classList.add('js-hidden') : null;
            
            console.log('SEND FORM DATA');

            modal.classList.add('closed');
            body.style.overflow = 'auto';
            reviewBtn.addEventListener('click', onClickShowModal);
            modal.removeEventListener('click', onTouchCloseModal);
            resetBtn.removeEventListener('click', onClickCloseModal);

            controls.forEach(control => {
                control.value = '';
            });
        }
    }

    submitBtn.addEventListener('click', onClickSubmitForm);
}