document.addEventListener("DOMContentLoaded", function () {
  ymaps.ready(init);
  let windowInnerWidth = window.innerWidth;
  let y;
  let x;
  let zoom;
  let iconY = 55.71339976040793;
  let iconX = 52.39788032773994;


  if (windowInnerWidth >= 1024) {
    y = 55.713460328680306;
    x = 52.39791251424815;
    zoom = 16;
  }
  else if (windowInnerWidth >= 576) {
    y = 55.71336810295606;
    x = 52.39378621160888;
    zoom = 16;
  }
  else {
    y = 55.71280481304755;
    x = 52.39671518385317;
    zoom = 17;
  }


  function init() {
    let myMap = new ymaps.Map("map", {
      center: [y, x],
      zoom: zoom,
      controls: ['zoomControl'],
      behaviors: ['multiTouch']
    }, {
      suppressMapOpenBlock: true
    });


    let myPlacemark = new ymaps.Placemark([iconY, iconX], {}, {
      iconLayout: 'default#image',
      iconImageHref: './img/svg/geo-house.svg',
      iconImageSize: [50, 50],
      iconImageOffset: [-20, -52]
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
