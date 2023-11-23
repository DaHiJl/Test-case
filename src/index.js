import './style.css'
import './style_null.css'

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    slidesPerView: 3,
    spaceBetween: 16,
    breakpoints: {
        375: {
            slidesPerView: 1,
            spaceBetween: 16,
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 16
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 16
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 16
        },
        1440: {
            slidesPerView: 3,
            spaceBetween: 16
        },
        // 640: {
        //     slidesPerView: 4,
        //     spaceBetween: 40
        // }
    },

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
    // Navigation arrows
    // navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
});
const swiper_sub = new Swiper('.swiper_sub', {
    loop: true,
    // direction: 'vertical',
    spaceBetween: 16,
    slidesPerView: 6,
    spaceBetween: 16,
    breakpoints: {
        375: {
            slidesPerView: 1,
            spaceBetween: 16,
        },
        // 640: {
        //     slidesPerView: 4,
        //     spaceBetween: 40
        // }
    },
    pagination: {
        el: '.swiper-pagination-sub',
        type: 'bullets',
    },
});