const productCardImgs = new Swiper('.product__card_imgs', {
  // Optional parameters
  loop: true,
  autoHeight: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});



const similarProductsSlider = new Swiper('.similar__products_slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 4,
  // spaceBetween: 20,
  // autoHeight: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});