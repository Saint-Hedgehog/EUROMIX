/* global Swiper*/

const initFeedbackSlider = () => {
  const feedbackSlider = document.querySelector('.feedback .feedback__slider');
  // eslint-disable-next-line no-unused-vars
  const feedbackSwiper = new Swiper(feedbackSlider, {
    slidesPerGroup: 3,
    slidesPerView: 3,
    speed: 1000,
    spaceBetween: 1,
    watchSlidesProgress: true,
    watchOverflow: true,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    pagination: {
      el: '.feedback__slider-pagination',
      clickable: true,
      bulletClass: 'feedback__slider-pagination-item',
      bulletActiveClass: 'feedback__slider-pagination-current-item',
    },
  });
};

export {initFeedbackSlider};
