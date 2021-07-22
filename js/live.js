window.addEventListener("load", function(event) {
  
  const btnShow = document.querySelector('.btn_show');
  const btnHide = document.querySelector('.btn_hide');
  const btnsCatsWrap = document.querySelector('.btns__categories_wrap');

  // show all categories
  showCats = () => {
    btnShow.addEventListener('click', () => {
      btnsCatsWrap.classList.toggle("btns__categories_wrap_open");
      btnShow.classList.toggle("hide");
      btnHide.classList.toggle("hide");
    });
  };
  showCats();

  // hide categories
  closeCats = () => {
    btnHide.addEventListener('click', () => {
      btnsCatsWrap.classList.toggle("btns__categories_wrap_open");
      btnShow.classList.toggle("hide");
      btnHide.classList.toggle("hide");
    });
  };
  closeCats();


  // isotop grid
  const elem = document.querySelector('.live__masonry');
  const iso = new Isotope( elem, {
    // options
    itemSelector: '.masonry__item',
    percentPosition: true,
    // layoutMode: 'masonry',
    layoutMode: 'packery',
    packery: {
      // gutter: 20,
    }
  });

  // store filter for each group
  let filters = [];
  // on change input change masonry 
  document.querySelectorAll('.filter__btn').forEach(el => {
    el.addEventListener('change', (e) => {
      let filter = e.currentTarget.dataset.filter;

      if (e.currentTarget.checked) {
        // console.log("Checkbox is checked..");
        addFilter( filter );
      } else {
        // console.log("Checkbox is not checked..");
        removeFilter( filter );
      }
      // console.log(filters);

      iso.arrange({ filter: filters.join(',') });

    });
  });
  function addFilter(filter) {
    if ( filters.indexOf( filter ) == -1 ) {
      filters.push( filter );
    }
  }
  function removeFilter(filter) {
    var index = filters.indexOf( filter);
    if ( index != -1 ) {
      filters.splice( index, 1 );
    }
  }


  // init visual sliders
  function initVisuals() {
    
    const visualSwipersTop = document.querySelectorAll('.v_s_t_i');
    const visualSwipersBot = document.querySelectorAll('.v_s_b_i');

    // slider iterator
    let visIter = 0;

    for( i=0; i< visualSwipersBot.length; i++ ) {

      visualSwipersBot[i].classList.add('visual__swiper_bot_' + visIter);
      visualSwipersBot[i].classList.remove('v_s_b_i');
      visualSwipersTop[i].classList.add('visual__swiper_top_' + visIter);
      visualSwipersTop[i].classList.remove('v_s_t_i');


      let visualSwiperBot = new Swiper('.visual__swiper_bot_' + visIter, {
       /* Options */
        loop: true,
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      });

      let visualSwiperTop = new Swiper('.visual__swiper_top_' + visIter, {
        /* Options */
        centeredSlides: true,
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: visualSwiperBot,
        },
      });

      visIter++;

    }
  };
  initVisuals();

  

  // reference kitchen slider
  function initRefsKitchens() {
  
    const referencesKitchensTop = document.querySelectorAll('.r_k_t_i');
    // const referencesKitchensBot = document.querySelectorAll('.r_k_b_i');

    // slider iterator
    let refKitIter = 0;

    for( i=0; i< referencesKitchensTop.length; i++ ) {

      // referencesKitchensBot[i].classList.add('reference__kitchen_bot_' + refKitIter);
      // referencesKitchensBot[i].classList.remove('r_k_b_i');
      referencesKitchensTop[i].classList.add('reference__kitchen_top_' + refKitIter);
      referencesKitchensTop[i].classList.remove('r_k_t_i');

      
      // let referenceKitchenBot = new Swiper('.reference__kitchen_bot_' + refKitIter, {
        /* Options */
      //   loop: true,
      //   spaceBetween: 15,
      //   slidesPerView: 4,
      //   freeMode: true,
      //   watchSlidesVisibility: true,
      //   watchSlidesProgress: true,
      // });

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
        // thumbs: {
        //   swiper: referenceKitchenBot,
        // },
      });

      refKitIter++;

    }
  };
  initRefsKitchens();



  // reference furniture slider
  function initRefsFurnitures() {
    
    const referencesFurnituresTop = document.querySelectorAll('.r_f_t_i');
    const referencesFurnituresBot = document.querySelectorAll('.r_f_b_i');

    // slider iterator
    let refFurIter = 0;

    for( i=0; i< referencesFurnituresBot.length; i++ ) {

      referencesFurnituresBot[i].classList.add('reference__furniture_bot_' + refFurIter);
      referencesFurnituresBot[i].classList.remove('r_f_b_i');
      referencesFurnituresTop[i].classList.add('reference__furniture_top_' + refFurIter);
      referencesFurnituresTop[i].classList.remove('r_f_t_i');

      
      let referenceFurnitureBot = new Swiper('.reference__furniture_bot_' + refFurIter, {
        /* Options */
        loop: true,
        spaceBetween: 15,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
      });

      let referenceFurnitureTop = new Swiper('.reference__furniture_top_' + refFurIter, {
        /* Options */
        centeredSlides: true,
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: referenceFurnitureBot,
        },
      });

      refFurIter++;

    }
  };
  initRefsFurnitures();


});