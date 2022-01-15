ymaps.ready(init);


function init(){
    // Создание карты.
    let myMap = new ymaps.Map("yandex-map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.76, 37.64],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 12,
        controls: [],
        behaviors: ['drag']
    });

    var circleLayout = ymaps.templateLayoutFactory.createClass('<div class="placemark">TESTEST</div>');

    var circlePlacemark = new ymaps.Placemark(
        [55.76, 37.64], {
            hintContent: 'Метка с круглым HTML макетом'
        }, {
            iconLayout: circleLayout,
            // Описываем фигуру активной области "Круг".
            iconShape: {
                type: 'Circle',
                // Круг описывается в виде центра и радиуса
                coordinates: [0, 0],
                radius: 25
            }
        }
    );
    myMap.geoObjects.add(circlePlacemark);

    // ZOOM-CONTROL
    let ZoomLayout = ymaps.templateLayoutFactory.createClass(
        //Шаблон html кнопок зума
        "<div class='zoom-btns'>"                                 +
            "<button id='zoom-in' class='zoom-btn zoom-btn-in'>"  +
                "<svg width='14' height='14'>"                    +
                    "<use xlink:href='#icon-zoom-in'>"            +
                "</svg>"                                          +
            "</button>"                                           +
            
            "<button id='zoom-out' class='zoom-btn zoom-btn-out'>" +
                "<svg width='14' height='2'>"                     +
                    "<use xlink:href='#icon-zoom-out'>"           +
                "</svg>"                                          +
            "</button>"                                           +
        "</div>"                                                  , {

        // Переопределяем методы макета, чтобы выполнять дополнительные действия
        // при построении и очистке макета.
        build: function () {
            // Вызываем родительский метод build.
            ZoomLayout.superclass.build.call(this);

            // Привязываем функции-обработчики к контексту и сохраняем ссылки
            // на них, чтобы потом отписаться от событий.
            this.zoomInCallback = ymaps.util.bind(this.zoomIn, this);
            this.zoomOutCallback = ymaps.util.bind(this.zoomOut, this);

            // Начинаем слушать клики на кнопках макета.
            let zoomInBtn = document.getElementById('zoom-in');
            let zoomOutBtn = document.getElementById('zoom-out');
 
            zoomInBtn.addEventListener('click', this.zoomInCallback);
            zoomOutBtn.addEventListener('click', this.zoomOutCallback);
        },

        clear: function () {
            // Снимаем обработчики кликов.
            zoomInBtn.removeEventListener('click', this.zoomInCallback);
            zoomOutBtn.removeEventListener('click', this.zoomOutCallback);
            // Вызываем родительский метод clear.
            ZoomLayout.superclass.clear.call(this);
        },

        zoomIn: function () {
            let map = this.getData().control.getMap();
            map.setZoom(map.getZoom() + 1, {checkZoomRange: true});
        },

        zoomOut: function () {
            let map = this.getData().control.getMap();
            map.setZoom(map.getZoom() - 1, {checkZoomRange: true});
        }
    }),

    zoomControl = new ymaps.control.ZoomControl({options: {layout: ZoomLayout, position: {right: '30px', bottom: '50px'} } });
    myMap.controls.add(zoomControl);
}
