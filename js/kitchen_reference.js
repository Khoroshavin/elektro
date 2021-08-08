document.addEventListener("DOMContentLoaded", function() {

  
  // main slider kitchen photo
  const kitchenRefSliderBot = new Swiper(".kitchen__ref_slider_bot", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      425: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 8,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 10,
        spaceBetween: 10,
      },
      1300: {
        slidesPerView: 12,
      },
      1400: {
        slidesPerView: 14,
      },
      1600: {
        slidesPerView: 14,
      },

    },
  });
  const kitchenRefSliderTop = new Swiper(".kitchen__ref_slider_top", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: kitchenRefSliderBot,
    },
  });




  // slider kitchen install phhoto 
  const sliderInstall = new Swiper(".slider_install", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 30,
    freeMode: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      425: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });




  // reference kitchen slider
  function initRefsKitchens() {

    const referencesKitchensTop = document.querySelectorAll('.r_k_t_i');
    const referencesKitchensBot = document.querySelectorAll('.r_k_b_i');

    // slider iterator
    let refKitIter = 0;

    for( i=0; i< referencesKitchensTop.length; i++ ) {

      referencesKitchensBot[i].classList.add('reference__kitchen_bot_' + refKitIter);
      referencesKitchensBot[i].classList.remove('r_k_b_i');
      referencesKitchensTop[i].classList.add('reference__kitchen_top_' + refKitIter);
      referencesKitchensTop[i].classList.remove('r_k_t_i');

      
      let referenceKitchenBot = new Swiper('.reference__kitchen_bot_' + refKitIter, {
        /* Options */
        loop: true,
        spaceBetween: 15,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      });

      let referenceKitchenTop = new Swiper('.reference__kitchen_top_' + refKitIter, {
        /* Options */
        centeredSlides: true,
        loop: true,
        spaceBetween: 10,
        // autoHeight: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: referenceKitchenBot,
        },
      });

      refKitIter++;

    }
  };
  initRefsKitchens();





});