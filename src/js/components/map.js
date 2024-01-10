document.addEventListener("DOMContentLoaded", function () {
  ymaps.ready(init);
  let windowInnerWidth = window.innerWidth;
  let y;
  let x;
  let zoom;
  let iconY = 55.71339976040793;
  let iconX = 52.39788032773994;


  if (windowInnerWidth >= 576) {
    y = 55.713460328680306;
    x = 52.39791251424815;
    zoom = 16;
  } else {
    y = 55.73907597124874;
    x = 52.4024098543674;
    zoom = 15;
  }

  function init() {
    let myMap = new ymaps.Map("map", {
      center: [y, x],
      zoom: 16,
      controls: ['zoomControl'],
      behaviors: ['multiTouch']
    }, {
      suppressMapOpenBlock: true
    });


    let myPlacemark = new ymaps.Placemark([iconY, iconX], {}, {
      iconLayout: 'default#image',
      iconImageHref: './img/svg/geo.svg',
      iconImageSize: [40, 40],
      iconImageOffset: [-15, -42]
    });
    myMap.behaviors.disable('scrollZoom').disable('drag').enable('multiTouch');
    myMap.geoObjects.add(myPlacemark);








    // let myMap = new ymaps.Map("map", {
    //   center: [y, x],
    //   zoom: zoom,
    //   controls: []
    // }, {
    //   suppressMapOpenBlock: true
    // });


    // let myPlacemark = new ymaps.Placemark([iconY, iconX], {}, {
    //   iconLayout: 'default#image',
    //   iconImageHref: './img/icon-map.svg',
    //   iconImageSize: [30, 42],
    //   iconImageOffset: [-15, -42]
    // });
    // myMap.behaviors.disable('scrollZoom');
    // myMap.geoObjects.add(myPlacemark);
  }
});
