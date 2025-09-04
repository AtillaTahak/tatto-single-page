/*
  [JS Index]
*/


/*
  1. preloader
  2. navigation
    2.1. navigation launcher
    2.2. navigation OPEN/CLOSE
  3. animate elements
  4. facts counter
  5. owl carousel
  6. chart skills
  7. skills bar
  8. magnificPopup
  9. swiper slider
  10. contact form
    10.1. contact modal
  11. the Wall
*/


$(function () {
    "use strict";


    $(window).on("load", function () {
        // 1. preloader
        $("#preloader").fadeOut(600);
        $(".preloader-bg").delay(400).fadeOut(600);
    });

    // 2. navigation
    $(".page-scroll").on("click", function (e) {
        var $anchor = $(this);
        $("html, body").stop().animate({
            scrollTop: $($anchor.attr("href")).offset().top - 0
        }, 1500, 'easeInOutExpo');
        e.preventDefault();
    });
    // 2.1. navigation launcher
    $(".navigation-fire").on("click", function () {
        if ($(".introduction").hasClass("introduction-off")) {
            $(".introduction").removeClass("introduction-off").addClass("introduction-on");
            $("nav.navigation-menu").removeClass("show");
        } else {
            $(".introduction").removeClass("introduction-on").addClass("introduction-off");
            $("nav.navigation-menu").addClass("show");
        }
    });
    // 2.2. navigation OPEN/CLOSE
    $("nav.navigation-menu a").on("click", function () {
        if ($("nav.navigation-menu").hasClass("show")) {
            $("nav.navigation-menu").removeClass("show");
            $(".introduction").removeClass("introduction-off").addClass("introduction-on");
        } else {
            $("nav.navigation-menu").addClass("show");
        }
    });

    $(window).on("scroll", function () {
        // 3. animate elements
        if ($(this).scrollTop() > 50) {
            $(".to-top-arrow").addClass("show");
            $(".round-menu").addClass("direction");
            $(".round-menu").addClass("round-menu-no-bg");
            $(".logo").addClass("off");
        } else {
            $(".to-top-arrow").removeClass("show");
            $(".round-menu").removeClass("direction");
            $(".round-menu").removeClass("round-menu-no-bg");
            $(".logo").removeClass("off");
        }
    });

    // 4. facts counter
    $(".facts-counter-number, .facts-counter-number-years").appear(function () {
        var count = $(this);
        count.countTo({
            from: 0,
            to: count.html(),
            speed: 1200,
            refreshInterval: 60
        });
    });

    // 5. owl carousel
    $("#owl-carousel-testimonials").owlCarousel({
        loop: true,
        center: true,
        items: 1,
        margin: 0,
        autoplay: true,
        autoplaySpeed: 1000,
        autoplayTimeout: 4000,
        smartSpeed: 450,
        nav: false,
        animateOut: "fadeOut",
        animateIn: "fadeIn"
    });
    $("#owl-carousel-works").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-works',
        items: 1,
        margin: 0
    });
    $("#owl-carousel-news").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-news',
        items: 1,
        margin: 0
    });
    $("#owl-carousel-team").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-team',
        responsive: {
            0: {
                items: 1,
                margin: 30
            },
            768: {
                items: 2,
                margin: 50
            },
            980: {
                items: 2,
                margin: 50
            },
            1240: {
                items: 3,
                margin: 50
            }
        }
    });
    $("#owl-carousel-news-1").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-news-all.owl-nav-custom-news-1',
        responsive: {
            0: {
                items: 1,
                margin: 15
            },
            768: {
                items: 1,
                margin: 50
            },
            980: {
                items: 1,
                margin: 50
            },
            1240: {
                items: 2,
                margin: 50
            }
        }
    });
    $("#owl-carousel-news-2").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-news-all.owl-nav-custom-news-2',
        responsive: {
            0: {
                items: 1,
                margin: 15
            },
            768: {
                items: 1,
                margin: 50
            },
            980: {
                items: 1,
                margin: 50
            },
            1240: {
                items: 2,
                margin: 50
            }
        }
    });
    $("#owl-carousel-news-3").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-news-all.owl-nav-custom-news-3',
        responsive: {
            0: {
                items: 1,
                margin: 15
            },
            768: {
                items: 1,
                margin: 50
            },
            980: {
                items: 1,
                margin: 50
            },
            1240: {
                items: 2,
                margin: 50
            }
        }
    });
    $("#owl-carousel-news-4").owlCarousel({
        loop: false,
        center: false,
        autoplay: false,
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        smartSpeed: 450,
        nav: false,
        nav: true,
        navText: ["<i class='ion-chevron-left'></i>", "<i class='ion-chevron-right'></i>"],
        navContainer: '.owl-nav-custom-news-all.owl-nav-custom-news-4',
        responsive: {
            0: {
                items: 1,
                margin: 15
            },
            768: {
                items: 1,
                margin: 50
            },
            980: {
                items: 1,
                margin: 50
            },
            1240: {
                items: 2,
                margin: 50
            }
        }
    });

    // 6. chart skills
    $(".chart-appear-skills").appear(function () {
        $(".chart-skills").easyPieChart({
            easing: "easeOutBounce",
            onStep: function (from, to, percent) {
                $(this.el).find(".percent-skills").text(Math.round(percent));
            }
        });
    });

    // 7. skills bar
    $(".show-skillbar").appear(function () {
        $(".skillbar").skillBars({
            from: 0,
            speed: 4000,
            interval: 100,
            decimals: 0
        });
    });

    // 8. magnificPopup
    $(".popup-photo").magnificPopup({
        type: "image",
        gallery: {
            enabled: false,
            tPrev: "",
            tNext: "",
            tCounter: "%curr% / %total%"
        },
        removalDelay: 100,
        mainClass: "mfp-fade",
        fixedContentPos: false
    });
    $(".popup-photo-gallery, .popup-photo-gallery-2").each(function () {
        $(this).magnificPopup({
            delegate: "a",
            type: "image",
            gallery: {
                enabled: true
            },
            removalDelay: 100,
            mainClass: "mfp-fade",
            fixedContentPos: false
        });
    });

    // 9. swiper slider
    var swiper = new Swiper(".swiper-container-wrapper .swiper-container", {
        preloadImages: false,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        init: true,
        loop: false,
        speed: 1200,
        grabCursor: true,
        mousewheel: false,
        keyboard: true,
        simulateTouch: true,
        parallax: true,
        effect: "slide",
        pagination: false,
        navigation: {
            nextEl: ".slide-next",
            prevEl: ".slide-prev"
        },
        scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true
        }
    });
    swiper.on("slideChangeTransitionStart", function () {
        $(".slider-progress-bar").removeClass("slider-active");
        $(".hero-bg").find("video").each(function () {
            this.pause();
        });
    });
    swiper.on("slideChangeTransitionEnd", function () {
        $(".slider-progress-bar").addClass("slider-active");
        $(".hero-bg").find("video").each(function () {
            this.play();
        });
    });
    swiper.on("slideChangeTransitionStart", function () {
        $(".slider-progress-bar").removeClass("slider-active");
    });
    swiper.on("slideChangeTransitionEnd", function () {
        $(".slider-progress-bar").addClass("slider-active");
    });
    var playButton = $(".swiper-slide-controls-play-pause-wrapper");
    function autoEnd() {
        playButton.removeClass("slider-on-off");
        swiper.autoplay.stop();
    }
    function autoStart() {
        playButton.addClass("slider-on-off");
        swiper.autoplay.start();
    }
    playButton.on("click", function () {
        if (playButton.hasClass("slider-on-off")) autoEnd();
        else autoStart();
        return false;
    });

    // 10. contact form
    $("form#form").on("submit", function () {
        $("form#form .error").remove();
        var s = !1;
        if ($(".requiredField").each(function () {
            if ("" === jQuery.trim($(this).val())) $(this).prev("label").text(), $(this).parent().append('<span class="error">This field is required</span>'), $(this).addClass(
                "inputError"), s = !0;
            else if ($(this).hasClass("email")) {
                var r = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                r.test(jQuery.trim($(this).val())) || ($(this).prev("label").text(), $(this).parent().append('<span class="error">Invalid email address</span>'), $(this).addClass(
                    "inputError"), s = !0);
            }
        }), !s) {
            $("form#form input.submit").fadeOut("normal", function () {
                $(this).parent().append("");
            });
            var r = $(this).serialize();
            $.post($(this).attr("action"), r, function () {
                $("form#form").slideUp("fast", function () {
                    $(this).before('<div class="success">Your email was sent successfully.</div>');
                });
            });
        }
        return !1;
    });
    // 10.1. contact modal
    $(".contact-modal-launcher, .contact-modal-closer").on("click", function (e) {
        e.preventDefault();
        if ($(".contact-modal").hasClass("open")) {
            $(".contact-modal").removeClass("open");
        } else {
            $(".contact-modal").addClass("open");
        }
    });


});


// 11. the Wall
window.addEvent("domready", function () {
    var imagewall = [
        ["the-wall/1.jpg", [
            ["the-wall/1-1.jpg", "Color Tattoo<br \/>\r\nFull Sleeve"]
        ]],
        ["the-wall/2.jpg", [
            ["the-wall/2-1.jpg", "Black & Grey Tattoo<br \/>\r\nTraditional"]
        ]],
        ["the-wall/3.jpg", [
            ["the-wall/3-1.jpg", "Portrait Tattoo<br \/>\r\nRealism"]
        ]],
        ["the-wall/4.jpg", [
            ["the-wall/4-1.jpg", "Minimalist Tattoo<br \/>\r\nGeometric"]
        ]],
        ["the-wall/5.jpg", [
            ["the-wall/5-1.jpg", "Script Tattoo<br \/>\r\nWatercolor"]
        ]],
        ["the-wall/6.jpg", [
            ["the-wall/5.jpg", "Color Tattoo<br \/>\r\nFull Sleeve"]
        ]],
        ["the-wall/7.jpg", [
            ["the-wall/6.jpg", "Black & Grey Tattoo<br \/>\r\nTraditional"]
        ]],
        ["the-wall/8.jpg", [
            ["the-wall/7.jpg", "Portrait Tattoo<br \/>\r\nRealism"]
        ]],
        ["the-wall/9.jpg", [
            ["the-wall/8.jpg", "Minimalist Tattoo<br \/>\r\nGeometric"]
        ]],
        ["the-wall/10.jpg", [
            ["the-wall/9.jpg", "Script Tattoo<br \/>\r\nWatercolor"]
        ]],
        ["the-wall/11.jpg", [
            ["the-wall/10.jpg", "Color Tattoo<br \/>\r\nFull Sleeve"]
        ]],
        ["the-wall/12.jpg", [
            ["the-wall/11.jpg", "Black & Grey Tattoo<br \/>\r\nTraditional"]
        ]],
        ["the-wall/13.jpg", [
            ["the-wall/12.jpg", "Realism Tattoo<br \/>\r\nFine Line"]
        ]],
        ["the-wall/14.jpg", [
            ["the-wall/14.jpg", "Minimalist Tattoo<br \/>\r\nGeometric"]
        ]],
        ["the-wall/15.jpg", [
            ["the-wall/13.jpg", "Script Tattoo<br \/>\r\nWatercolor"]
        ]],
        ["the-wall/16.jpg", [
            ["the-wall/12.jpg", "Color Tattoo<br \/>\r\nFull Sleeve"]
        ]],
        ["the-wall/17.jpg", [
            ["the-wall/11.jpg", "Black & Grey Tattoo<br \/>\r\nTraditional"]
        ]],
        ["the-wall/18.jpg", [
            ["the-wall/10.jpg", "Portrait Tattoo<br \/>\r\nRealism"]
        ]],
        ["the-wall/19.jpg", [
            ["the-wall/9.jpg", "Minimalist Tattoo<br \/>\r\nGeometric"]
        ]],
        ["the-wall/20.jpg", [
            ["the-wall/8.jpg", "Script Tattoo<br \/>\r\nWatercolor"]
        ]],
        ["the-wall/21.jpg", [
            ["the-wall/7.jpg", "Color Tattoo<br \/>\r\nFull Sleeve"]
        ]],
        ["the-wall/22.jpg", [
            ["the-wall/6.jpg", "Black & Grey Tattoo<br \/>\r\nTraditional"]
        ]],
        ["the-wall/23.jpg", [
            ["the-wall/5.jpg", "Portrait Tattoo<br \/>\r\nRealism"]
        ]],
        ["the-wall/24.jpg", [
            ["the-wall/24-1.jpg", "Minimalist Tattoo<br \/>\r\nGeometric"],
            ["the-wall/24-2.jpg", "Script Tattoo<br \/>\r\nWatercolor"]
        ]],
        ["the-wall/25.jpg", [
            ["the-wall/25-1.jpg", "Color Tattoo<br \/>\r\nFull Sleeve"]
        ]],
        ["the-wall/26.jpg", [
            ["the-wall/4.jpg", "Black & Grey Tattoo<br \/>\r\nTraditional"]
        ]],
        ["the-wall/27.jpg", [
            ["the-wall/3.jpg", "Portrait Tattoo<br \/>\r\nRealism"]
        ]],
        ["the-wall/28.jpg", [
            ["the-wall/2.jpg", "Minimalist Tattoo<br \/>\r\nGeometric"]
        ]],
        ["the-wall/29.jpg", [
            ["the-wall/1.jpg", "Script Tattoo<br \/>\r\nWatercolor"]
        ]],
        ["the-wall/29.jpg", [
            ["the-wall/1.jpg", "Color Tattoo<br \/>\r\nFull Sleeve"]
        ]],
    ];
    var maxLength = 29;
    var wallFluid = new Wall("wall", {
        "draggable": true,
        "slideshow": true, // options: true, false
        "speed": 1000,
        "showDuration": 4000,
        "transition": Fx.Transitions.Quad.easeOut,
        "inertia": true,
        "autoposition": true,
        "width": 310,
        "height": 310,
        "rangex": [-100, 100],
        "rangey": [-100, 100],
        callOnUpdate: function (items) {
            var root = Math.ceil(Math.sqrt(maxLength));
            document.id("wall").setStyle("margin-left", 0);
            var i = 0;
            (function () {
                try {
                    var position = ((Math.abs(items[i].y) % root) * root) + (Math.abs(items[i].x) % root);
                    if (position > maxLength) {
                        position = Math.floor(Math.random() * maxLength);
                    }
                    var file = imagewall[position][0];
                    var img = new Element("img[src=" + file + "]");
                    img.setStyles({
                        "width": '310px',
                        "height": '310px'
                    });
                    img.inject(items[i].node).fade("hide").fade("in");
                    var list = new Element("ul");
                    list.setProperty("class", "slideshow")
                    for (var j = 0; j < imagewall[position][1].length; j++) {
                        var slide = new Element("li");
                        new Element("img", {
                            src: imagewall[position][1][j][0],
                            width: '310px',
                            height: '310px'
                        }).inject(slide);
                        var desc = new Element("span", {
                            html: imagewall[position][1][j][1]
                        });
                        var div = new Element("div");
                        div.setProperty("class", "wall-item-description");
                        desc.inject(div);
                        div.inject(slide);
                        slide.inject(list);
                    }
                    list.inject(items[i].node);
                    var stop = false;
                    var firstSlide = true;
                    items[i].node.addEvents({
                        mouseenter: function (event) {
                            list.getChildren("li").setStyles({
                                "visibility": "hidden",
                                "opacity": 0,
                            });
                            stop = false;
                            if (imagewall[position][1].length) {
                                (function (item) {
                                    item.fade("in");
                                    if (firstSlide) {
                                        delay = 1000;
                                        firstSlide = false;
                                    } else {
                                        delay = 2000;
                                    }
                                    if (item.getNext("li") != null) {
                                        var tmpslide = arguments.callee;
                                        (function () {
                                            item.fade("out");
                                            if (!stop) tmpslide(item.getNext("li"));
                                        }).delay(delay);
                                    } else if (item.getSiblings("li").length > 0) {
                                        var tmpslide = arguments.callee;
                                        (function () {
                                            item.fade("out");
                                            if (!stop) tmpslide(item.getSiblings("li").pop());
                                        }).delay(delay);
                                    }
                                })(new Element(list.getFirst("li")));
                                img.fade("out");
                            }
                            return false;
                        },
                        mouseleave: function () {
                            stop = true;
                            firstSlide = true;
                            if (imagewall[position][1].length) {
                                list.getChildren("li").fade("out");
                                img.fade("in");
                            }
                        }
                    });
                    i++;
                    if (i < items.length) {
                        var tmp = arguments.callee;
                        (function () {
                            tmp();
                        }).delay(10);
                    } else { }
                } catch (e) { }
            })();
        }
    });
    window.setTimeout(function () {
        wallFluid.initWall();
    }, 500);
});
