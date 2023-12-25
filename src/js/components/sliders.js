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
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  // centeredSlides: true,
  // speed: 3000,
  // autoplay: {
  //   delay: 5000,
  // },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 1.2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 2.8,
      spaceBetween: 50,
    }
  },
});

const swiperGallery = new Swiper('.swiper--gallery', {
  centeredSlides: true,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1.4,
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 1.6,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2.6,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 30,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 30,
    }
  }
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
    el: ".stage__pagination",

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
