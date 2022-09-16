$(window).on("load", function () {

    "use strict";

    /* ===================================
            Loading Timeout
     ====================================== */

    $('.side-menu').removeClass('hidden');

    setTimeout(function(){
        $('.preloader').fadeOut();
    }, 1000);

});


jQuery(function ($) {


    "use strict";

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 50) { // Set position from top to add class
            $('header').addClass('header-appear');
        }
        else {
            $('header').removeClass('header-appear');
        }
    });

    //scroll to appear
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500)
            $('.scroll-top-arrow').fadeIn('slow');
        else
            $('.scroll-top-arrow').fadeOut('slow');
    });

    //Click event to scroll to top
    $(document).on('click', '.scroll-top-arrow', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    $(".scroll").on("click", function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top - 60}, 1200);
    });

    /* ===================================
        Side Menu
    ====================================== */
    if ($("#sidemenu_toggle").length) {
        $("#sidemenu_toggle").on("click", function () {
            $(".pushwrap").toggleClass("active");
            $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
        }), $("#close_side_menu").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active")
        }), $(".side-nav .navbar-nav .nav-link").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
        }), $("#btn_sideNavClose").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
        });
    };


    /* ===================================
        popup open
    ====================================== */

    const body = document.querySelector('body');
    let scrollPosition = 0;

    // #pop_info_1
    $(".PopUpOpen").on("click", function(){
        $("#pop_info_1").addClass("Popup_active").fadeIn(300), $("#closePopupMenu").fadeIn(300);
        scrollPosition = window.pageYOffset;
        body.style.overflow = 'hidden';
        body.style.position = 'fixed';
        body.style.top = `-${scrollPosition}px`;
        body.style.width = '100%';
    });
    $("#closePopupMenu").on("click", function(){
        $("#pop_info_1").removeClass("Popup_active").fadeOut(300), $("#closePopupMenu").fadeOut(300);
        body.style.removeProperty('overflow');
        body.style.removeProperty('position');
        body.style.removeProperty('top');
        body.style.removeProperty('width');
        window.scrollTo(0, scrollPosition);
    });
    $("#pop_info_1 > #btn_PopupClose").on("click", function(){ // 220803 수정
        $("#pop_info_1").removeClass("Popup_active").fadeOut(300), $("#closePopupMenu").fadeOut(300);
        body.style.removeProperty('overflow');
        body.style.removeProperty('position');
        body.style.removeProperty('top');
        body.style.removeProperty('width');
        window.scrollTo(0, scrollPosition);
    });

    // #pop_info_2 //220803 추가
    $(".PopUpOpen2").on("click", function(){
        $("#pop_info_2").addClass("Popup_active").fadeIn(300), $("#closePopupMenu").fadeIn(300);
        scrollPosition = window.pageYOffset;
        body.style.overflow = 'hidden';
        body.style.position = 'fixed';
        body.style.top = `-${scrollPosition}px`;
        body.style.width = '100%';
    });
    $("#closePopupMenu").on("click", function(){
        $("#pop_info_2").removeClass("Popup_active").fadeOut(300), $("#closePopupMenu").fadeOut(300);
        body.style.removeProperty('overflow');
        body.style.removeProperty('position');
        body.style.removeProperty('top');
        body.style.removeProperty('width');
        window.scrollTo(0, scrollPosition);
    });
    $("#pop_info_2 > #btn_PopupClose").on("click", function(){
        $("#pop_info_2").removeClass("Popup_active").fadeOut(300), $("#closePopupMenu").fadeOut(300);
        body.style.removeProperty('overflow');
        body.style.removeProperty('position');
        body.style.removeProperty('top');
        body.style.removeProperty('width');
        window.scrollTo(0, scrollPosition);
    });
    
    /* ===================================
        popup slide
    ====================================== */

    // Feedback Carousel
    var $imagesSlider = $(".feedback-slides .client-feedback>div"),
        $thumbnailsSlider = $(".client-thumbnails>div");
    // Images Options
    $imagesSlider.slick({
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear',
        fade: true,
        dots: true,
        arrows:false,
        autoplay: false,
        draggable: false,
        asNavFor: ".client-thumbnails>div",
    });
    // Thumbnails Options
    $thumbnailsSlider.slick({
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: 'linear',
        autoplay: true,
        arrows:false,
        centerMode: true,
        draggable: false,
        focusOnSelect: true,
        asNavFor: ".feedback-slides .client-feedback>div",
    });
    // Feedback Item Slides
    $('.feedback-item-slides').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        arrows:false,
        mouseDrag: true,
        margin: 30,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            1200: {
                items: 3,
            },
        }
    });


    /* ===================================
         Counter
    ====================================== */


    $('.count').each(function () {
        $(this).appear(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 3000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });

    $(".progress-bar").each(function () {
        $(this).appear(function () {
            $(this).animate({width: $(this).attr("aria-valuenow") + "%"}, 3000)
        });
    });

    /* ===================================
      Mouse parallax
     ====================================== */


    $('.MouseParallax').mousemove(function(e) {
        $('[data-depth]').each(function () {
            var depth = $(this).data('depth');
            var amountMovedX = (e.pageX * -depth/3.1);
            var amountMovedY = (e.pageY * -depth/3.1);

            $(this).css({
                'transform':'translate3d(' + amountMovedX +'px,' + amountMovedY +'px, 0)',
            });
        });
    });

    /* =====================================
          Parallax
       ====================================== */

    if ($(window).width() > 992) {
        $(".parallax").parallaxie({
            speed: 0.55,
            offset: 0,
        });
    }


    /* ===================================
        WOW Animation
    ====================================== */

    if ($(window).width() > 991) {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        new WOW().init();
    }


    /*===================================
        Go Top Scroll
    ====================================== */
    $(function(){
        // Scroll Event
        $(window).on('scroll', function(){
            var scrolled = $(window).scrollTop();
            if (scrolled > 600) $('.go-top').addClass('active');
            if (scrolled < 600) $('.go-top').removeClass('active');
        });
        // Click Event
        $('.go-top').on('click', function() {
            $("html, body").animate({ scrollTop: "0" },  500);
        });
    });


    /* ===================================
      Owl Carousel
     ====================================== */

    //Testimonial Slider
    $("#owl-client").owlCarousel({
        items: 1,
        margin: 60,
        loop: true,
        // dots: false,
        nav: true,
        navContainer: "#client-nav",
        autoWidth: true,
        autoplay: 1500,
        // responsive: {
        //     2000: { items: 1, },
        //     390: { items: 1, },
        // }
    });


    $('.partners-slider').owlCarousel({
        items: 5,
        autoplay: 500,
        smartSpeed: 1500,
        autoplayHoverPause: true,
        slideBy: 1,
        loop: true,
        margin: 0,
        dots: false,
        nav: true,
        center: true,
        navContainer: "#partners-nav",
        autoWidth: true,
        responsive: {
            2000: { items: 5, },
            390: { items: 5, },
        }
    });


    /* ===================================
        Cube Portfolio
    ====================================== */

    $('#js-grid-mosaic').cubeportfolio({
    // $('#js-grid-mosaic').cubeportfolio({
        filters: '#js-filters-mosaic',
        layoutMode: 'grid',
        sortByDimension: true,
        mediaQueries: [{
            width: 1500,
            cols: 2,
        }, {
            width: 1100,
            cols: 2,
        }, {
            width: 768,
            cols: 1,
        }, {
            width: 480,
            cols: 1,
            options: {
                gapHorizontal: 60
            }
        }],
        defaultFilter: '*',
        animationType: 'fadeIn',
        gapHorizontal: 50,
        gapVertical: 50,
        gridAdjustment: 'responsive',
        caption: 'zoom',

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

        plugins: {
            loadMore: {
                element: "#js-loadMore-lightbox-gallery",
                action: "click",
                loadItems: 5,
            }
        }
    })
    .on('initComplete.cbp', function () {
        // your functionality
        var $this = $(this);
        if ($(".cbp-filter-item-active").attr("data-filter") === "*") {
            $("#js-loadMore-lightbox-gallery").addClass("active");
        } else {
            $("#js-loadMore-lightbox-gallery").removeClass("active");
        }
        $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
            $(this).removeClass("even");

            console.log();
            var val = index + 1;
            if ($(this).css('left') !== "0px") {
                $(this).addClass("even");
            }
        });
    })
    .on('onAfterLoadMore.cbp', function () {
        // your functionality
        var $this = $(this);
        $("#js-loadMore-lightbox-gallery a").addClass("d-none");
        $("#js-loadMore-lightbox-gallery").addClass("active-outer");
        $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
            $(this).removeClass("even");
            console.log();
            var val = index + 1;
            if ($(this).css('left') !== "0px") {
                $(this).addClass("even");
            }
        });
    })
    .on('filterComplete.cbp', function () {
        // your functionality
        var $this = $(this);
        if ($(".cbp-filter-item-active").attr("data-filter") === "*") {
            $("#js-loadMore-lightbox-gallery").addClass("active");
            $("#js-loadMore-lightbox-gallery").removeClass("d-none");
        } else {
            $("#js-loadMore-lightbox-gallery").removeClass("active");
            $("#js-loadMore-lightbox-gallery").addClass("d-none");
        }
        $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
            $(this).removeClass("even");
            var val = index + 1;
            if ($(this).css('left') !== "0px") {
                $(this).addClass("even");
            }
        });
    });

    /* ===================================
        Popup [Swiper] 
    ====================================== */
    $(document).ready(function() {
        // object-fit : IE 대응   
        if($(document).find('.object-fit').length > 0){    
            var objectFitImg = new App.ObjectFit();
            objectFitImg.init('.object-fit');
        }
        
        $('.gallery-main-swiper').each(function() {
            var thumbSwiper = new Swiper('.gallery-thumb-swiper', {
                initialSlide: 0,
                spaceBetween: 0, // 슬라이드 사이간격(margin-right)
                slidesPerView: 5,
                loopedSlides: 10,
                watchSlidesProgress: true,
                slideToClickedSlide: true,
                loop: true,
                centeredSlides: true,
                slidesPerView: "auto",
                loopAdditionalSlides: 2,
                // autoplay: {
                //     delay: 2000,
                // },
                navigation: {
                    nextEl: '.swiper-gallery-next',
                    prevEl: '.swiper-gallery-prev'
                },
                // breakpoints: {
                //     1024: {
                //         slidesPerView: 5,
                //         loopedSlides: 10,
                //     },
                //     768: {
                //         slidesPerView: 5,
                //         loopedSlides: 10,
                //     },
                //     480: {
                //         slidesPerView: 5,
                //         loopedSlides: 10,
                //     }
                // }
                
            });
        
            var mainSwiper = new Swiper('.gallery-main-swiper', {
                effect: 'fade',
                initialSlide: 0,
                spaceBetween: 0,
                allowTouchMove: false,
                loop: true,
                loopedSlides: 10,
                loopAdditionalSlides: 1,
                // breakpoints: {
                //     1024: {
                //         loopedSlides: 10
                //     },
                //     768: {
                //         loopedSlides: 10
                //     },
                //     480: {
                //         loopedSlides: 10,
                //     }
                // }
            });

            mainSwiper.controller.control = thumbSwiper;
            thumbSwiper.controller.control = mainSwiper;
        })
    })

    var App = new Object();

    //object-fit(IE)
    App.ObjectFit = function () {
        var self;
        return {
            init: function (param) {
                if ('objectFit' in document.documentElement.style === false) {
                    var container = document.querySelectorAll(param);
                    for (var i = 0; i < container.length; i++) {
                        var imageSource = container[i].querySelector('img').src;
                        container[i].querySelector('img').style.display = 'none';
                        container[i].style.backgroundSize = 'cover';
                        container[i].style.backgroundImage = 'url(' + imageSource + ')';
                        container[i].style.backgroundPosition = '50% 50%';
                    }
                }
            }
        }
    };

    /* ===================================
        Portfolio [Swiper] 
    ====================================== */
    $(document).ready(function(){
  
        

        var productSwiper = new Swiper ('.swiper-product', {

            width: 320, //width
            slidesOffsetBefore: -160, //left
            slidesPerView: 1, //보여질 슬라이드 수
            spaceBetween: 20, //margin-left

            grabCursor: true,
            observer: true,
            loop: true,
            loopedSlides: 20,
            loopAdditionalSlides: 1,
            centeredSlides: true,
            runCallbacksOnInit: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false, // next, prev btn 클릭 시, 오토플레이 멈춤 해제
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                1390: {
                    width: 2000,
                    slidesOffsetBefore: -300,
                    slidesPerView: 3,
                    spaceBetween: 60,
                    grabCursor: true,
                },
            },
        // If we need pagination
            pagination: {
              el: '.swiper-pagination',
              clickable : true,
            },
        // And if we need scrollbar
            // scrollbar: {
            //   el: '.swiper-scrollbar',
            //   draggable : true,
            //   snapOnRelease : true,
            // },
            // scrollbarHide:false,
            updateOnImagesReady: true,
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
        })
        
        // swiper filter
        $('.swiper-filter').on( 'click', 'a', function() {
            var filter = $(this).attr('data-filter');
            
            $('.PortfolioSlideContainer').css('display', 'none')
            $('.PortfolioSlideContainer' + filter).css('display', '' )
            // $('.swiper-product .swiper-slide').css('display', 'none')
            // $('.swiper-product .swiper-slide' + filter).css('display', '' )

            $( '.swiper-filter a' ).removeClass( 'filter-active' );
            $( this ).addClass( 'filter-active' );
            
            productSwiper.updateSize();
            productSwiper.updateSlides();
            productSwiper.updateProgress();
            productSwiper.updateSlidesClasses();
            productSwiper.slideTo(0);
            productSwiper.scrollbar.updateSize();
            
            return ture;
        });

        // swiper.init(true);
        swiper.update();
      });



    /* ===================================
        animated elements banner* [lucy ob move]
    ====================================== */
    $("#rev_single").show().revolution({
        sliderType: "hero",
        jsFileLocation: "revolution/js/",
        sliderLayout: "fullscreen",
        dottedOverlay: "none",
        delay: 9000,
        navigation: {
        },
        responsiveLevels: [1240, 1024, 778, 480],
        visibilityLevels: [1240, 1024, 778, 480],
        gridwidth: [1240, 1024, 778, 480],
        gridheight: [868, 768, 960, 720],
        lazyType: "none",
        parallax: {
            type: "mouse",
            origo: "slidercenter",
            speed: 400,
            levels: [9,10, 15, 20, 25, 30, 35, 40,  -10, -15, -20, -25, -30, -35, -40, -45, 55]
        },
        shadow: 0,
        spinner: "off",
        autoHeight: "off",
        fullScreenAutoWidth: "off",
        fullScreenAlignForce: "off",
        fullScreenOffsetContainer: "",
        disableProgressBar: "on",
        hideThumbsOnMobile: "off",
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        debugMode: false,
        fallbacks: {
            simplifyAll: "off",
            disableFocusListener: false
        }
    });

    // // test
    // $(document).ready(function () {
    //     // 변수를 선언합니다.
    //     var canvas = document.getElementById('canvas');
    //     var context = canvas.getContext('2d');

    //     // 이벤트를 연결합니다.
    //     $(canvas).on({
    //         mousedown: function (event) {
    //             // 위치를 얻어냅니다.
    //             var position = $(this).offset();
    //             var x = event.pageX - position.left;
    //             var y = event.pageY - position.top;

    //             // 선을 그립니다.
    //             context.beginPath();
    //             context.moveTo(x, y);
    //         },
    //         mouseup: function (event) {
    //             // 위치를 얻어냅니다.
    //             var position = $(this).offset();
    //             var x = event.pageX - position.left;  // 이렇게 계산 안하고 event.offsetX로 하면된다.
    //             var y = event.pageY - position.top;

    //             // 선을 그립니다.
    //             context.lineTo(x, y);
    //             context.stroke();
    //         }
    //     });
    // });



});