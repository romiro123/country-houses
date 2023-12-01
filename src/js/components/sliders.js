import Swiper, { Navigation, Pagination, Autoplay, Grid, EffectCoverflow } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Grid, EffectCoverflow]);

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
