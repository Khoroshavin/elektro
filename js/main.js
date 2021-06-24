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

// const swiper = new Swiper('.swiper-container_news', {
//   // Optional parameters
//   loop: true,

//   // Pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   //
//   slidesPerView: 4,
//   // spaceBetween: 10,
//   // Responsive breakpoints
//   breakpoints: {
//     320: {
//       slidesPerView: 1,
//       // spaceBetween: 20
//     },
//     576: {
//       slidesPerView: 2,
//       // spaceBetween: 20
//     },
//     768: {
//       slidesPerView: 4,
//       // spaceBetween: 20
//     },
//     992: {
//       slidesPerView: 4,
//       spaceBetween: 10
//     },
//     // 1150: {
//     //   slidesPerView: 5,
//     //   spaceBetween: 20
//     // },

//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

// });