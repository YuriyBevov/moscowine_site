import { bodyLocker } from '../functions.js';

let btns = document.querySelectorAll('.js-modal-opener');

if(btns) {
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

    function closeModal(modal) {
        let closeBtn = modal.querySelector('.js-modal-closer');

        const onClickCloseModal = () => {
            modal.classList.add('closed');
            modal.removeEventListener('click', onClickOverlayCloseModal);
            closeBtn.removeEventListener('click', onClickOverlayCloseModal);
            bodyLocker(false);
        }

        const onClickOverlayCloseModal = (evt) => {
            if(evt.target === modal) {
                modal.classList.add('closed');
                modal.removeEventListener('click', onClickOverlayCloseModal);
                closeBtn.removeEventListener('click', onClickOverlayCloseModal);
                bodyLocker(false);
            }
        }

        closeBtn.addEventListener('click', onClickCloseModal);
        modal.addEventListener('click', onClickOverlayCloseModal);
    };

    const onClickShowModal = (evt) => {
        let modalName = evt.currentTarget.getAttribute('data-modal');
        let modal = document.querySelector('.' + modalName);
        modal.classList.remove('closed')
        bodyLocker(true);
        closeModal(modal)
    }

    btns.forEach(btn => {
        btn.addEventListener('click', onClickShowModal);
    })
}