const parentSwiperEl = document.querySelector('.new-products__slider');

// Находим все карточки товаров
const productItems = document.querySelectorAll('.product-item');

productItems.forEach(item => {
    const swiperEl = item.querySelector('.product-item__images-slider');
    const btnNext = item.querySelector('.inner-next');
    const btnPrev = item.querySelector('.inner-prev');

    if (swiperEl && btnNext && btnPrev) {
        // При клике на кастомную кнопку - просим Swiper переключить слайд
        btnNext.addEventListener('click', (e) => {
            e.preventDefault(); // Чтобы не сработала ссылка на товар
            swiperEl.swiper.slideNext();
        });

        btnPrev.addEventListener('click', (e) => {
            e.preventDefault();
            swiperEl.swiper.slidePrev();
        });
    }
});

if (parentSwiperEl) {
    const swiperParams = {
        init: false, 
        navigation: {
            nextEl: '.new-products__heading .next-btn',
            prevEl: '.new-products__heading .prev-btn',
        },
        slidesPerView: 4,
        spaceBetween: 20,
        injectStyles: [
          `
          :host .swiper-button-next,
          :host .swiper-button-prev {
            display: none;
          }
          `,
        ],
        breakpoints: {
            320: { slidesPerView: 1.2 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 4 }
        }
    };

    Object.assign(parentSwiperEl, swiperParams);
    parentSwiperEl.initialize();
}