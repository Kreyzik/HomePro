var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  /*  breakpoints:{
      '@0.75':{
        slidesPerView:1,
      },
      '@1.00':{
        slidesPerView:2,
      },
      '@1.50':{
        slidesPerView:3,
      },

    }*/
  });