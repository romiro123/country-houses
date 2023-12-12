import Swiper, { Navigation, Pagination, Autoplay, Grid, EffectCoverflow, EffectCreative } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Grid, EffectCoverflow, EffectCreative]);

const swiperHero = new Swiper('.swiper--hero', {
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: ".swiper-pagination--bottom",
    type: "progressbar",
  },
  // speed: 3000,
  // autoplay: {
  //   delay: 5000,
  // },
  // loop: true,
});

const swiperWorks = new Swiper('.swiper--works', {
  slidesPerView: 1,
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },
  // loop: true,
  pagination: {
    el: ".swiper-pagination--bottom",
    type: "progressbar",
  },
  slidesPerView: 2.8,
  spaceBetween: 50,
  // centeredSlides: true,
  // speed: 3000,
  // autoplay: {
  //   delay: 5000,
  // },
  loop: true,
});

const swiperGallery = new Swiper('.swiper--gallery', {
  // slidesPerView: 1,
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
});



const swiperStage = new Swiper(".swiper--stage", {
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },

  pagination: {
    el: ".swiper-pagination",

    clickable: true,
    renderBullet: function (index, t1) {
      return '<li class="stage__pagination-item ' + t1 + '">'
        +
        (`${'0' + (index + 1)}`)
        +
        '<span class="stage__pagination-text"> Этап' + '</span>'
        +
        '</li>';

    },
  },
});
