let btns = document.querySelectorAll('[data-tab]');
let views = document.querySelectorAll('.login-modal__form');
let modalFooter = document.querySelector('.login-modal__footer');

const onClickChangeView = (evt) => {
    let currentView = evt.currentTarget.getAttribute('data-tab');

    views.forEach(view => {
        view.classList.contains('active') ?
        view.classList.remove('active') : null;

        view.getAttribute('data-content') === currentView ?
        view.classList.add('active') : null;
    })

    if(currentView === 'recovery') {
        modalFooter.classList.contains('active') ?
        modalFooter.classList.remove('active') : null;

        document.querySelector('.login-modal__header-tabs').classList.remove('active');
        document.querySelector('.login-modal__header-recovery').classList.add('active');
    } else {
        !modalFooter.classList.contains('active') ?
        modalFooter.classList.add('active') : null;

        document.querySelector('.login-modal__header-tabs').classList.add('active');
        document.querySelector('.login-modal__header-recovery').classList.remove('active');
    }
}

btns.forEach(btn => {
    btn.addEventListener('click', onClickChangeView);
})