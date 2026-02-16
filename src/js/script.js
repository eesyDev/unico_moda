const parentSwiperEl = document.querySelector('.new-products__slider');
const collectionSwiperEl = document.querySelector('.collection-products__slider');
const promoSwiperEl = document.querySelector('.promo__slider');

const productItems = document.querySelectorAll('.product-item');

try {
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
} catch(err) {
    console.log(err)
}

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

if (collectionSwiperEl) {
    const swiperCollectionParams = {
        init: false, 
        navigation: {
            nextEl: '.collection__controls .next-btn',
            prevEl: '.collection__controls .prev-btn',
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

    Object.assign(collectionSwiperEl, swiperCollectionParams);
    collectionSwiperEl.initialize();
}

if (promoSwiperEl) {
    const swiperPromoParams = {
        init: false, 
        navigation: {
            nextEl: '.promo__controls .next-btn',
            prevEl: '.promo__controls .prev-btn',
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
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    };

    Object.assign(promoSwiperEl, swiperPromoParams);
    promoSwiperEl.initialize();
}

if (window.innerWidth < 992) {
    // const gallery = document.querySelector('.woocommerce-product-gallery__wrapper');
    // gallery.classList.add('swiper-wrapper');

    // document.querySelectorAll('.woocommerce-product-gallery__image')
    //     .forEach(el => el.classList.add('swiper-slide'));

    // new Swiper('.woocommerce-product-gallery', {
    //     slidesPerView: 1,
    //     spaceBetween: 10,
    // });
}

// Аккордеон FAQ
// document.querySelectorAll('.product-page__faq-head').forEach(head => {
//     head.addEventListener('click', () => {
//         const item = head.parentElement;
//         // закрываем остальные
//         document.querySelectorAll('.product-page__faq-item')
//         .forEach(el => {
//             if (el !== item) el.classList.remove('is-open');
//         });
//         // переключаем текущий
//         item.classList.toggle('is-open');
//     });
// });

document.addEventListener('click', function (e) {
    const head = e.target.closest(
        '.product-page__faq-head, .size-accordion__head'
    );

    if (!head) return;

    const item = head.parentElement;
    const container = head.closest(
        '.product-page__faq, .size-accordion'
    );
    // закрываем остальные внутри конкретного блока
    container.querySelectorAll(
        '.product-page__faq-item, .size-accordion__item'
    ).forEach(el => {
        if (el !== item) el.classList.remove('is-open');
    });
    // переключаем текущий
    item.classList.toggle('is-open');
});


document.querySelectorAll('.faq-head').forEach(head => {
    head.addEventListener('click', () => {
        const item = head.parentElement;

        document.querySelectorAll('.faq-item')
        .forEach(el => {
            if (el !== item) el.classList.remove('is-open');
        });
        item.classList.toggle('is-open');
    });
});



// Аккордеон FAQ

// Поиск в хедере
const searchToggle = document.querySelector('.header-search__toggle');
const searchClose = document.querySelector('.header-search__close');
const searchForm = document.querySelector('.header-search__form');
const searchInput = document.querySelector('.header-search__input');
const headerMain = document.querySelector('.header__main');

if (searchToggle && headerMain) {
    searchToggle.addEventListener('click', () => {
        headerMain.classList.add('is-search-open');
        searchInput.focus();
    });

    searchClose.addEventListener('click', () => {
        headerMain.classList.remove('is-search-open');
        searchInput.value = '';
    });

    document.addEventListener('click', (e) => {
        if (!searchToggle.contains(e.target) && !searchForm.contains(e.target)) {
            headerMain.classList.remove('is-search-open');
        }
    });
}

// Мобильное бургер-меню
const burger = document.querySelector('.header__burger');
const mobileNav = document.querySelector('.header__mobile-nav');
const mobileOverlay = document.querySelector('.header__mobile-overlay');
const mobileClose = document.querySelector('.header__mobile-close');
const header = document.querySelector('.header');
const catalogToggle = document.querySelector('.header__mobile-catalog-toggle');
const catalogItem = document.querySelector('.header__mobile-menu-item--catalog');

function openMobileMenu() {
    header.classList.add('is-menu-open');
    document.body.classList.add('is-menu-open');
}

function closeMobileMenu() {
    header.classList.remove('is-menu-open');
    document.body.classList.remove('is-menu-open');
}

if (burger) {
    burger.addEventListener('click', () => {
        if (header.classList.contains('is-menu-open')) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    });
}

if (mobileClose) {
    mobileClose.addEventListener('click', closeMobileMenu);
}

if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMobileMenu);
}

if (catalogToggle && catalogItem) {
    catalogToggle.addEventListener('click', () => {
        catalogItem.classList.toggle('is-open');
    });
}

// Табы с адресами магазинов
const items = document.querySelectorAll('.maps-contact-item');
const mapFrame = document.getElementById('map-frame');

items.forEach(item => {
    item.addEventListener('click', () => {
        // убрать активный у всех
        items.forEach(el => el.classList.remove('is-active'));
        // добавить текущему
        item.classList.add('is-active');
        // поменять карту
        const newMap = item.dataset.map;
        mapFrame.src = newMap;
    });
});
// Табы с адресами магазинов
