document.addEventListener("DOMContentLoaded", function(event) {

  // burger menu
  const burgerBtn = document.querySelector('.burger__btn_input');
  const headerBot = document.querySelector('.header__bot_wrap');
  openBurgerMenu = () => {
    burgerBtn.addEventListener('click', () => {
      headerBot.classList.toggle("header__bot_open");
      document.body.classList.toggle("no_scroll");
    });
  };
  openBurgerMenu();


  // main page kitchen examples slider
  const swiperExamples = new Swiper('.examples__slider', {
    // parameters
    // loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: false,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: false,
      },
      1330: {
        slidesPerView: 5,
        spaceBetween: 30,
        centeredSlides: false,
      },
      1558: {
        slidesPerView: 6,
        spaceBetween: 30,
        centeredSlides: false,
      },
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
  });


  // main page choice kitchen slider
  const swiperChoise = new Swiper('.choice__kitchen_slider', {
    // parameters
    // loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
      },
      500: {
        slidesPerView: 2,
        spaceBetween: 30,
        // centeredSlides: true,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: false,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1250: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1350: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1558: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

  });


});