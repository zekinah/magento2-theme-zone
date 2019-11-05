require(['jquery', 'slick'], function ($) {
    'use strict';
    $(window).ready(function () {
        $('#class-slider').slick({
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        });
    });
});