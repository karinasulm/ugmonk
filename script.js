$(function() {

    // Smooth Scroll

    $('[data-scroll]').on('click', function(event) {
        event.preventDefault();

        var $this = $(this);
        var blockId = $this.data('scroll');
        var blockOffset = $(blockId).offset().top;

        $('html, body').animate({
            scrollTop: blockOffset
        }, 500);

    });

    // To Begin Invisible

    var toBegin = $('#to_begin');
    var introH = $('#intro').innerHeight();
    var scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);
    $(window).on('scroll', function() {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if ( scrollOffset >= introH*0.2 ) {
            toBegin.removeClass('invisible');
        }
        else {
            toBegin.addClass('invisible');
        }
    }



    $('#login').on('click', function(event) {
        event.preventDefault();
      $('#window_login').removeClass('invisible');
    });

    $('#window__close').on('click', function(event) {
        event.preventDefault();
      $('#window_login').addClass('invisible');
    });

    $('#search').on('click', function(event) {
        event.preventDefault();
      $('#search_input').toggleClass('invisible');
    });

    $('#search_btn').on('click', function(event) {
        event.preventDefault();
      $('#search_input').addClass('invisible');
    });
    
    $('.arrivals__link').on('click', function(event) {
        event.preventDefault();
        $('.arrivals__link').removeClass('active');
        $(this).addClass('active');
    });

    $('#new_arrivals').on('click', function(event) {
        event.preventDefault();
        $('.arrivals__item').removeClass('invisible');
    });

    $('#final_stock').on('click', function(event) {
        event.preventDefault();
        $('.arrivals__item').addClass('invisible');
        $('.final-stock').removeClass('invisible');
    });

    $('#best_sellers').on('click', function(event) {
        event.preventDefault();
        $('.arrivals__item').addClass('invisible');
        $('.best-sellers').removeClass('invisible');
    });

    $('#clothing').on('click', function(event) {
        event.preventDefault();
        $('.arrivals__item').addClass('invisible');
        $('.clothing').removeClass('invisible');
    });

    $('#objects').on('click', function(event) {
        event.preventDefault();
        $('.arrivals__item').addClass('invisible');
        $('.objects').removeClass('invisible');
    });

    $('#face_masks').on('click', function(event) {
        event.preventDefault();
        $('.arrivals__item').addClass('invisible');
        $('.face-masks').removeClass('invisible');
    });

});