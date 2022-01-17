ymaps.ready(init);

let data = {
    "type": "FeatureCollection",
    "features": [
        {"type": "Feature", "id": 0, "geometry": {"type": "Point", "coordinates": [55.831903, 37.411961]}, "properties": {"balloonContentHeader": "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>", "balloonContentBody": "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>", "balloonContentFooter": "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>", "clusterCaption": "<strong><s>Еще</s> одна</strong> метка"}},

        {
            "type": "Feature", 
            "id": 4, 
            "geometry": {
                "type": "Point", 
                "coordinates": [55.651903, 37.411961]
            }, 
            /*"properties": {
                "balloonContentHeader": "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>", 
                "balloonContentBody": "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>", 
                "balloonContentFooter": "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>", 
                "clusterCaption": "<strong><s>Еще</s> одна</strong> метка", 
                /*"hintContent": "<strong>Текст  <s>подсказки</s></strong>"*/
            /*}*/
        },
        
        {
            "type": "Feature", 
            "id": 1, 
            "geometry": {
                "type": "Point", 
                "coordinates": [55.763338, 37.565466]
            }, 
            /*"properties": {
                "balloonContentHeader": "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>", 
                "balloonContentBody": "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>", 
                "balloonContentFooter": "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>", 
                "clusterCaption": "<strong><s>Еще</s> одна</strong> метка", 
                /*"hintContent": "<strong>Текст  <s>подсказки</s></strong>"*/
            /*}*/
        },
        
        {
            "type": "Feature", 
            "id": 2, 
            "geometry": {
                "type": "Point", 
                "coordinates": [55.763340, 37.575466]
            },

            /*"properties": {
                "balloonContentHeader": "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>", 
                "balloonContentBody": "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>", 
                "balloonContentFooter": "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>", 
                "clusterCaption": "<strong><s>Еще</s> одна</strong> метка", 
            },*/
        },
    ]
}

function init(){
    // Создание карты.
    let myMap = new ymaps.Map("yandex-map", {
        // Координаты центра карты.
        center: [55.76, 37.64],
        // Уровень масштабирования. Допустимые значения: 0 - 19
        zoom: 10,
        controls: [],
        behaviors: ['drag'],
        
    }),    
    // оптимизация меток
    objectManager = new ymaps.ObjectManager({
        // Чтобы метки начали кластеризоваться
        clusterize: true,
        // ObjectManager принимает те же опции, что и кластеризатор.
        gridSize: 64,
        // clusterDisableClickZoom: false,
        zoomMargin: 100,
    });

    // html-шаблон метки
    let customPlacemarkLayout = ymaps.templateLayoutFactory.createClass(
        '<div class="placemark">' +
            '<div class="placemark-border"></div>' +

            '<div class="placemark-inner"></div>' + 
        '</div>'
    );
    // html-шаблон кластера
    
    let customClusterIconLayout = ymaps.templateLayoutFactory.createClass(
        '<div class="placemark-multiple">' +
            '<div class="placemark-multiple-border"></div>' + 

            '<div class="placemark-multiple-inner"><span class="count">$[properties.geoObjects.length]</span>' + 
            
            '</div>' + 
        '</div>',

        clusterIcons = [
            {
               href: '',
               size: [46, 55],
               // Отступ, чтобы центр картинки совпадал с центром кластера.
               offset: [-23, -55]
            }
        ],

        /*customItemContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div>test</div>'
        )*/
    );

    /*let myBalloonLayout = ymaps.templateLayoutFactory.createClass(
        '<div>test</div>'
    ); */

    // Метки
    objectManager.objects.options.set({
        iconLayout: customPlacemarkLayout,
        iconShape: {type: 'Circle', coordinates: [0, 0], radius: 50},
        hideIconOnBalloonOpen: false,

        iconBalloonContentLayout: '<div>ЕУЫЕ</div>',
        iconBalloonContentHeader: "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>"

        //iconBaloonContentLayout: "properties": {"balloonContentHeader": "<font size=3><b><a target='_blank' href='https://yandex.ru'>Здесь может быть ваша ссылка</a></b></font>", "balloonContentBody": "<p>Ваше имя: <input name='login'></p><p><em>Телефон в формате 2xxx-xxx:</em>  <input></p><p><input type='submit' value='Отправить'></p>", "balloonContentFooter": "<font size=1>Информация предоставлена: </font> <strong>этим балуном</strong>", "clusterCaption": "<strong><s>Еще</s> одна</strong> метка"}
    });

    // Кластеры
    objectManager.clusters.options.set({
        //clusterDisableClickZoom: true,
        clusterOpenBalloonOnClick: true,
        //groupByCoordinates: true,
        clusterIcons: clusterIcons,
        clusterIconContentLayout: customClusterIconLayout,
        // В данном примере балун никогда не будет открываться в режиме панели.
        clusterBalloonPanelMaxMapArea: 0,

        // clusterBalloonItemContentLayout: myBalloonLayout,
        // Устанавливаем размер макета контента балуна (в пикселях).
        /*clusterBalloonContentLayoutWidth: 350,
        // Устанавливаем собственный макет.
        
        // Устанавливаем ширину левой колонки, в которой располагается список всех геообъектов кластера.
        clusterBalloonLeftColumnWidth: 120 */
    });

    myMap.geoObjects.add(objectManager);
    /* 
        Пример получения json с данными 

        $.ajax({
            url: "url/test.json"
        }).done(function(data) {
            objectManager.add(data);
        });

    */
    objectManager.add(data);
    //--- 

    let activePlacemarkLayout = ymaps.templateLayoutFactory.createClass(
        '<div class="placemark js-active">' +
            '<div class="placemark-border"></div>' +

            '<div class="placemark-inner"></div>' + 
        '</div>'
    );
    //customPlacemarkLayout

    let previousObjectId = null;

    objectManager.objects.events.add('click', function (e) {
        let objectId = e.get('objectId');

        previousObjectId !== null ?
        objectManager.objects.setObjectOptions(previousObjectId, {
            iconLayout: customPlacemarkLayout,
        }) : null

        objectManager.objects.setObjectOptions(objectId, {
            iconLayout: activePlacemarkLayout,
        });

        previousObjectId = objectId;

        objectManager.objects.balloon.open(objectId);
    });

    /*objectManager.objects.events.add('mouseleave', function (e) {
        console.log('CLICK')

        var objectId = e.get('objectId');
        // objectManager.objects.balloon.close(objectId);

        objectManager.objects.setObjectOptions(objectId, {
            iconLayout: customPlacemarkLayout,
        });
    });*/

    //objectManager.clusters.events
    /*objectManager.objects.events
        .add('click', function (e) {
            // Ссылку на объект, вызвавший событие,
            // можно получить из поля 'target'.
            //e.get('target').options.set('preset', 'islands#greenIcon');
            console.log('in', e.get('currentTarget'))

            e.get('currentTarget').options.set({
                iconLayout: activePlacemarkLayout
            });
        })
        .add('mouseleave', function (e) {
            //e.get('target').options.unset('preset');
            console.log('leave')
        });

    console.log(objectManager.clusters.events)*/

    // ZOOM-CONTROL
    let ZoomLayout = ymaps.templateLayoutFactory.createClass(
        //Шаблон html кнопок зума
        "<div class='zoom-btns'>"                                   +
            "<button id='zoom-in' class='zoom-btn zoom-btn-in'>"    +
                "<svg width='14' height='14'>"                      +
                    "<use xlink:href='#icon-zoom-in'>"              +
                "</svg>"                                            +
            "</button>"                                             +
            
            "<button id='zoom-out' class='zoom-btn zoom-btn-out'>"  +
                "<svg width='14' height='2'>"                       +
                    "<use xlink:href='#icon-zoom-out'>"             +
                "</svg>"                                            +
            "</button>"                                             +
        "</div>"                                                    , {

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
