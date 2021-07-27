document.addEventListener("DOMContentLoaded", function() {
  
  const brandCategoriesList = new Swiper('.brandstore__categories_list', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 5,
    spaceBetween: 30,
    breakpoints: {
      319: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      650: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      850: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1000: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
    // pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.brand_categories_next',
      prevEl: '.brand_categories_prev',
    },
  


  });
  
});