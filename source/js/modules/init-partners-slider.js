/* global Swiper*/

const initPartnersSlider = () => {
  const partnersSlider = document.querySelector('.partners .partners__slider');
  // eslint-disable-next-line no-unused-vars
  const partnersSwiper = new Swiper(partnersSlider, {
    slidesPerGroup: 1,
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 15,
    watchSlidesProgress: true,
    watchOverflow: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    pagination: {
      el: '.partners__slider-pagination',
      clickable: true,
      bulletClass: 'partners__slider-pagination-item',
      bulletActiveClass: 'partners__slider-pagination-current-item',
    },
  });
};

export {initPartnersSlider};
