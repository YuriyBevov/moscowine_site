
let items = document.querySelectorAll('.offers__data-item');

if(items) {
    const onClickExpandItem = (evt) => {
        evt.currentTarget.classList.toggle('active');
    }

    items.forEach(item => {
        item.addEventListener('click', onClickExpandItem);
    });

    let historyTogglers = document.querySelectorAll('.history__togglers button');
    let contents = document.querySelectorAll('.history__content-field');

    const onClickToggleContent = (evt) => {
        let num = evt.target.getAttribute('data-history-tab');
        historyTogglers.forEach(toggler => {
            toggler.classList.contains('active') ?
            toggler.classList.remove('active') : null;
        })
        evt.target.classList.add('active');

        contents.forEach(content => {
            content.classList.contains('active') ?
            content.classList.remove('active') : null;
        })

        contents[num - 1].classList.add('active');
    }

    historyTogglers.forEach(toggler => {
        toggler.addEventListener('click', onClickToggleContent);
    });

    let historyTabs = document.querySelectorAll('.offers__tab button');

    const onClickChangeTab = (evt) => {
        historyTabs.forEach(tab => {
            tab.classList.contains('active') ?
            tab.classList.remove('active') : null;
        });

        evt.target.classList.add('active');
    }

    historyTabs.forEach(tab => {
        tab.addEventListener('click', onClickChangeTab);
    });
}