let btns = document.querySelectorAll('.js-clipboard-btn');
console.log(btns)

function onClickCopyToClipboard(evt) {
        let copyText = evt.target.previousElementSibling.getAttribute('href');
        navigator.clipboard.writeText(copyText);
}

if(btns) {
    btns.forEach(btn => {
        btn.addEventListener('click', onClickCopyToClipboard)
    })
}
