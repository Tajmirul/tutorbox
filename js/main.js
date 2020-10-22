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

    if (document.getElementById('counter-section')) {
        var waypoint = new Waypoint({
            element: document.getElementById('counter-section'),
                handler: function() {
                    notify('Basic waypoint triggered')
                }
        });
    };
    
    $('.counter').counterUp({
        delay: 300,
        time: 2000
    });

    // select2 js ---------------------------------------------------
    $('.select2').select2();


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

    $('#select-gander').click(function () {
        $(this).siblings('.gander-inputs').toggleClass('visible');
    });

    $('.gander-inputs input').click(function () {
        var button = $('#select-gander');
        button.click();
        button.html($('.gander-inputs input:checked').val());
    });

    // close contact popup
    var contactBtns = $('.contact-button');

    $.each(contactBtns, function(index, item) {
        $(item).click(function (event) {

            $('.overlay').fadeIn();
            $('.contact-popup').fadeIn();

            event.preventDefault();
        });
    });
    $('.close-contact-popup-icon').click(function () {
        $('.overlay').fadeOut();
        $('.contact-popup').fadeOut();
    });

    // bootstrap tooltip ---------------------
    $('[data-toggle="tooltip"]').tooltip({
        trigger: 'hover'
    });


    // custom tabs -----------------------------
    var tabPane = $('.tab-pane');
    var tabContainer = $('.tab-container');

    tabPane.children('a').click(function (event) {

        var ID = $(this).attr('href');

        tabPane.children('a').removeClass('active');
        $(this).addClass('active');

        tabContainer.children('.tab-content').stop().fadeOut(400, function() {
            $(ID).stop().fadeIn(600);
        });

        event.preventDefault();
    });

    // image upload ---------------------------
    $('.image-upload').find('.a_plus-icon').click(function(event) {

        $($(this).attr('href')).click();
        event.preventDefault();

    });



    // preloader ------------------------
    $('.preloader').fadeOut(400);
});