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
        autoplay: true,
    });

    // counter js --------------------------------------------------
    // $('.counter').counterUp();


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


    // image resiger --------------------------

    // 1. get width and heigth of first image
    // var images, heigth, width; 

    // images = $('.tutor-image');

    // function getHeightAndWidth() {
    //     height = images[0].height;
    //     width = images[0].width;
    // };

    // 2. check all images if there height and width match with first one
    // $.each(images, function(index, item) {
    //     if ($(item).height !== height) {
    //         $(item).height = height;
    //     } else if ($(item).width !== width){
    //         $(item).width = width;
    //     }
    // });

    // 3. if dose not match than change its height and weight as the first one


    $('.preloader').fadeOut(400);
});