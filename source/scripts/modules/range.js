import noUiSlider from 'nouislider';

const rangeSliders = document.querySelectorAll('.range');

if(rangeSliders) {
    rangeSliders.forEach(range => {

        let filterSection = range.parentNode.parentNode;

        const rangeFrom = filterSection.querySelector('label:first-of-type > input[type="number"]');
        const rangeTo = filterSection.querySelector('label:last-of-type > input[type="number"]');

        let min = Number(rangeFrom.getAttribute('min'));
        let max = Number(rangeTo.getAttribute('max'));
        const step = Number(rangeFrom.getAttribute('step'));

        noUiSlider.create(range, {
            start: [min, max],
            connect: true,
            step: step ? step : 1,
            range: {
                'min': [min],
                'max': [max]
            }
        });

        const inputs = [rangeFrom, rangeTo];

        range.noUiSlider.on('update', function(values, handle){
            inputs[handle].value = Math.round(values[handle]);
        });

        const setRangeSlider = (i, value) => {
            let arr = [null, null];
            arr[i] = value;

            range.noUiSlider.set(arr);
        };

        inputs.forEach((el, index) => {
            el.addEventListener('change', (evt) => {
                setRangeSlider(index, evt.currentTarget.value);
            });
        });
    })
}