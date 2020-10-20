$(document).ready(function () {

    // slick slider for banner
    $('.slider-type-1').slick({
        dots: true,
        appendDots: $('.slider-dots'),
        arrows: false,
        autoplay: true,
    });

    $('.slider-type-2').slick({
        prevArrow: '<i class="arrows prev icofont-rounded-left"></i>',
        nextArrow: '<i class="arrows next icofont-rounded-right"></i>',
        appendArrows: $('.slider-type-2-arrows'),
        // autoplay: true,
    });

    // my code ----------------------------------------------------------------------

    // sticky menu ber and go to top button
    $(window).scroll(function () {
        var scrolled = $(window).scrollTop();

        if (scrolled > 0) {
            $('#nav').addClass('sticky');
        } else {
            $('#nav').removeClass('sticky');
        }
    });

    // menu bar open -------------------------
    $('.open-navigation').click(function (event) {
        event.preventDefault();

        $('.mobile-navigation').css({
            'width': '100%',
        });
    });
    // menu bar close -------------------------
    $('.close-navigation').click(function (event) {
        event.preventDefault();

        $('.mobile-navigation').css({
            'width': '0',
        });
    });

});    
