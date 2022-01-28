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

export  { limitStr, addClass, removeClass, checkClass, toggleClass }