function limitStr( str, n ) {
    return str.slice(0, n) + '...';
}

function addClass(el, cl) {
    el.classList.add(cl);
}

function removeClass(el, cl) {
    el.classList.remove(cl);
}

function checkClass(el, cl) {
    return el.classList.contains(cl);
}

function toggleClass(el, cl) {
    el.classList.toggle(cl);
}

function tabs(btns, tabs) {
    const onClickChangeTab = function(evt) {
        let btn = evt.currentTarget;

        btns.forEach(btn => {
            if(btn.classList.contains('active')){
                btn.classList.remove('active');
                let id = btn.getAttribute('data-id');
                tabs[id].classList.remove('active-tab');
            }
        })

        btn.classList.add('active');
        let id = btn.getAttribute('data-id');
        tabs[id].classList.add('active-tab');
    }

    btns.forEach((btn,i) => {
        btn.setAttribute('data-id', i);
        btn.addEventListener('click', onClickChangeTab);
    })
}

export  { tabs, limitStr, addClass, removeClass, checkClass, toggleClass }