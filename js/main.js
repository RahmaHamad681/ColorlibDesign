$(document).ready(function () {
    
    // Initialize Swiper
    var swiper = new Swiper('.s1', {
      effect: 'cube',
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });

    var swiper = new Swiper('.s2', {
      slidesPerView: 4,
      spaceBetween: 40,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
          spaceBetween: 75,
        },
        768: {
          slidesPerView: 2,
          spaceBetween:75,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }
    });
    // Go To Top
    $("#toTop").click(function() {
      $("html, body").animate({scrollTop: 0}, 1000);
  });
})