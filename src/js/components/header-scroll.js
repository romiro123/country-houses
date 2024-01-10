let lastScroll = 0;
let defaultOffset;
if (window.innerWidth >= 576) {
  defaultOffset = 200;
}
else {
  defaultOffset = 50;
}
const header = document.querySelector('.header');
const menu = document.querySelector('.menu');


const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
const containHide = () => header.classList.contains('header__hide');

window.addEventListener('scroll', () => {
  if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
    //scroll down
    header.classList.add('header__hide');
    header.classList.add('header__light');
    menu.classList.add('menu--light');
  }
  if (scrollPosition() < defaultOffset) {
    header.classList.remove('header__light');
    menu.classList.remove('menu--light');
  }

  else if (scrollPosition() < lastScroll && containHide()) {
    //scroll up
    header.classList.remove('header__hide');
  }

  // console.log(lastScroll)
  lastScroll = scrollPosition();
})
