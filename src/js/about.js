import "../pages/about.css";
import "./swiper";

const swipe = document.querySelector('.swipe');
let mySwiper = new Swiper (swipe, {
    /*centeredSlides: true,*/
    grabCursor: true,
    /*freemode: true,*/
    slideClass: 'slide',
    wrapperClass: 'swipe__wrapper',
    breakpoints: {
        320: {
            slidesPerView: 1.1,
            spaceBetween: 8,
            loop: false,
        },

        400: {
            slidesPerView: 1.5,
            spaceBetween: 8,
            loop: false,
        },

        660: {
            slidesPerView: 2,
            spaceBetween: 8,
            loop: false,
        },
        768: {
            slidesPerView: 2.2558,
            spaceBetween: 8,
            loop: false,
        },

        1024: {
            slidesPerView: 3.5,
            spaceBetween: 16,
            centeredSlides: true,
            loop: true,
        }

    },
    navigation: {
        nextEl: '.swipe__button_next',
        prevEl: '.swipe__button_prev',
    },
    pagination: {
        el: '.swipe__pagination',
        type: 'bullets',
        bulletClass: 'swipe__pagination-bullet',
        bulletActiveClass: 'swipe__pagination-bullet_active',
    },
})