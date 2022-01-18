ymaps.ready(init);

let data = {
    "type": "FeatureCollection",
    "features": [
        {"type": "Feature", "id": 0, "geometry": {"type": "Point", "coordinates": [55.831903, 37.411961]},
            "properties": {
                "balloonContentHeader": 
                    "<div class='balloon-header'>"  +
                        "<span class='cmn__text'> Альто-Адиже Альто-Адиже </span>" + 
                        "<span class='cmn__text cmn__text--small district'> м. Хорошево </span>" +  
                    "</div>", 
                "balloonContentBody": 
                    "<div class='balloon-content'>"  +
                        "<span class='opentime'> Открыто до 22:00 </span>" + 
                        "<span class='min-order-price'> Минимальный заказ от 7000₽ </span>" +  
                    "</div>", 
                "balloonContentFooter": 
                    "<div class='balloon-footer'>" + 
                        "<a href='#' class='cmn__btn cmn__btn--outlined'>Ассортимент</a>" +
                    "</div>", 
            }
        },
        
        {
            "type": "Feature", 
            "id": 1, 
            "geometry": {
                "type": "Point", 
                "coordinates": [55.763338, 37.565466]
            }, 

            "properties": {
                "balloonContentHeader": 
                    "<div class='balloon-header'>"  +
                        "<span class='cmn__text'> Альто-Адиже </span>" + 
                        "<span class='cmn__text cmn__text--small district'> м. Хорошево </span>" +  
                    "</div>", 
                "balloonContentBody": 
                    "<div class='balloon-content'>"  +
                        "<span class='opentime'> Открыто до 22:00 </span>" + 
                        "<span class='min-order-price'> Минимальный заказ от 3000₽ </span>" +  
                    "</div>", 
                "balloonContentFooter": 
                    "<div class='balloon-footer'>" + 
                        "<a href='#' class='cmn__btn cmn__btn--outlined'>Ассортимент</a>" +
                    "</div>", 
            }
        },
        
        {
            "type": "Feature", 
            "id": 2, 
            "geometry": {
                "type": "Point", 
                "coordinates": [55.763340, 37.575466]
            },

            "properties": {
                "balloonContentHeader": 
                    "<div class='balloon-header'>"  +
                        "<span class='cmn__text'> Альто-Адиже </span>" + 
                        "<span class='cmn__text cmn__text--small district'> м. Хорошево </span>" +  
                    "</div>", 
                "balloonContentBody": 
                    "<div class='balloon-content'>"  +
                        "<span class='opentime'> Открыто до 22:00 </span>" + 
                        "<span class='min-order-price'> Минимальный заказ от 3000₽ </span>" +  
                    "</div>", 
                "balloonContentFooter": 
                    "<div class='balloon-footer'>" + 
                        "<a href='#' class='cmn__btn cmn__btn--outlined'>Ассортимент</a>" +
                    "</div>", 
            }
        },

        {
            "type": "Feature", 
            "id": 4, 
            "geometry": {
                "type": "Point", 
                "coordinates": [55.651903, 37.411961]
            }, 
            "properties": {
                "balloonContentHeader": 
                    "<div class='balloon-header'>"  +
                        "<span class='cmn__text'> Альто-Адиже </span>" + 
                        "<span class='cmn__text cmn__text--small district'> м. Хорошево </span>" +  
                    "</div>", 
                "balloonContentBody": 
                    "<div class='balloon-content'>"  +
                        "<span class='opentime'> Открыто до 22:00 </span>" + 
                        "<span class='min-order-price'> Минимальный заказ от 3000₽ </span>" +  
                    "</div>", 
                "balloonContentFooter": 
                    "<div class='balloon-footer'>" + 
                        "<a href='#' class='cmn__btn cmn__btn--outlined'>Ассортимент</a>" +
                    "</div>", 
            }
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
    );

    // Метки
    objectManager.objects.options.set({
        iconLayout: customPlacemarkLayout,
        iconShape: {type: 'Circle', coordinates: [0, 0], radius: 30},
        hideIconOnBalloonOpen: false,
    });

    // Кластеры
    objectManager.clusters.options.set({
        clusterOpenBalloonOnClick: true,
        clusterIcons: clusterIcons,
        clusterIconContentLayout: customClusterIconLayout,
        // В данном примере балун никогда не будет открываться в режиме панели.
        clusterBalloonPanelMaxMapArea: 0,
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

    //--- Смена шаблона активной метки

    let activePlacemarkLayout = ymaps.templateLayoutFactory.createClass(
        '<div class="placemark js-active">' +
            '<div class="placemark-border"></div>' +

            '<div class="placemark-inner"></div>' + 
        '</div>'
    );
    
    let previousObjectId = null;

    const checkIsPreviosObjectIdExist = () => {
        previousObjectId !== null ?
        objectManager.objects.setObjectOptions(previousObjectId, {
            iconLayout: customPlacemarkLayout,
        }) : null
    }

    objectManager.objects.events.add('click', function (e) {
        let objectId = e.get('objectId');

        checkIsPreviosObjectIdExist()

        objectManager.objects.setObjectOptions(objectId, {
            iconLayout: activePlacemarkLayout,

            // позиция балуна относительно метки
            balloonOffset: [65, 237]
        });

        previousObjectId = objectId;

        objectManager.objects.balloon.open(objectId);
    });

    objectManager.objects.balloon.events.add('userclose', function() {
        checkIsPreviosObjectIdExist();
    })

    // закрытие балуна при клике вне его зоны и смена шаблона на стандартную для метки
    myMap.events.add('click', function() {
        myMap.balloon.close();
        checkIsPreviosObjectIdExist();
    });

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
            myMap.balloon.close();
            checkIsPreviosObjectIdExist();

            let map = this.getData().control.getMap();
            map.setZoom(map.getZoom() + 1, {checkZoomRange: true});
        },

        zoomOut: function () {
            myMap.balloon.close();
            checkIsPreviosObjectIdExist();

            let map = this.getData().control.getMap();
            map.setZoom(map.getZoom() - 1, {checkZoomRange: true});
        }
    }),

    zoomControl = new ymaps.control.ZoomControl({options: {layout: ZoomLayout, position: {right: '30px', bottom: '50px'} } });
    myMap.controls.add(zoomControl);
}
