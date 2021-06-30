document.addEventListener("DOMContentLoaded", function(event) {

  // burger menu
  const burgerBtn = document.querySelector('.burger__btn_input');
  const headerBot = document.querySelector('.header__bot');
  openBurgerMenu = () => {
    burgerBtn.addEventListener('click', () => {
      headerBot.classList.toggle("header__bot_open");
      document.body.classList.toggle("no_scroll");
    });
  };
  openBurgerMenu();







});
// document.addEventListener( 'DOMContentLoaded', function () {
  new Splide( '.splide',{
    type   : 'loop',
    perPage    : 3,
		breakpoints: {
			956: {
				perPage: 2
			},
    },
    perMove: 1,
    // focus: 'center',
    // arrows: 'splide__arrows arrows',
    // arrow: 'splide__arrow arrow',
    // prev: 'splide__arrow--prev arrow',
    // next: 'splide__arrow--next arrow',
    // autoWidth: true,
    // cover     : true,
    // fixedWidth: '250px',
    // focus: 'center',
    // autoplay: true,
    // interval: 3000,
  }).mount();
// } );