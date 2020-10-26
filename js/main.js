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

    // counter js ---------------------
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

    // select2 js --------------------
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

    // select gander ---------------------------------
    $('#select-gander, .select-gander').click(function () {
        $(this).siblings('.gander-inputs').toggleClass('visible');
    });

    $('.gander-inputs input').click(function () {
        var button = $(this).parents().children('#select-gander, .select-gander');

        button.click();
        button.html(button.siblings().children().children('.gander-inputs input:checked').val());
    });

    // open contact popup
    var contactBtns = $('.contact-button');

    $.each(contactBtns, function(index, item) {
        $(item).click(function (event) {

            function getEmptyField () {
                var formChild = $('.contact-popup form').children();

                $.each(formChild, function(index, item) {
                    var value = $(item).val();
                    if (!value) {
                        item.focus();

                        return false;
                    }
                });

            };

            $('.overlay, .contact-popup').fadeIn();

            getEmptyField();

            // var isNameEmpty = $('.contact-popup form input:first-child').val();
            
            // if (!isNameEmpty) {
            //     $('.contact-popup form input:first-child').focus();
            // } else {
            //     $('.contact-popup form input:first-child').next().focus();
            // };

            

            event.preventDefault();
        });
    });
    // close contact popup
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

        tabContainer.children('.tab-content').stop().hide()
            $(ID).stop().show();

        event.preventDefault();
    });

    // image upload ---------------------------
    $('.image-upload').find('.a_plus-icon').click(function(event) {

        $($(this).attr('href')).click();
        event.preventDefault();

    });

    // navigation-with-dropdown -----------------------------
    $('.navigation-with-dropdown i').click(function(event) {
        $(this).toggleClass('icofont-plus icofont-minus');
        $(this).siblings('ul').stop().slideToggle();        
    });


    // custom accordion
    $('.q-and-a-section .tab-content > a').click(function (e) {
        $(this).next().stop().slideToggle(200);

        e.preventDefault();
    });

    // auto focus ----------------
    $('.focused').focus();


    // preloader ------------------------
    $('.preloader').fadeOut(400);
});