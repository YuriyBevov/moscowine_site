let fields = document.querySelectorAll('.js-field-opened');

const onClickExpandContent = (evt) => {
    evt.currentTarget.classList.toggle('active');
}

fields.forEach(field => {
    field.addEventListener('click', onClickExpandContent);
})