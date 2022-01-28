import { limitStr } from '../functions.js';

let limited = document.querySelectorAll('.js-limited-string');

limited.forEach(str => {
    str.innerHTML = limitStr(str.innerHTML, 50);
})
