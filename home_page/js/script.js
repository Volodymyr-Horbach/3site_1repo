
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    skidesPerView: 1,

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