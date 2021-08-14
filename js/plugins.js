/*
 * Template Name      : Hammani CV (-- I am X--)
 * Template Version   : V 1.0.0
 * Template Url       : .....................
 * Language           : HTML5 | CSS3 |JavaScript
 * Framework          : Bootstrap[CSS] | jQuery [JavaScript]
 * Preprocesseur      : SaSS [CSS]
 * Contact Me : Skaype   :- Boudraa.Hammani
 *				Facebook :- Ham mani
 *				Email    :- Ham47mani@gmail.com
*/
/*global $, window, navigator*/
$(function () {
    "use strict";

    /*                       Start Cashing Variables
    ========================================================================== */
    var header  = $("header");
    /*                       End Cashing Variables
    ========================================================================== */
    
    /*                       Start Header
    ========================================================================== */
    //--> Costumize The Height Of Header
    header.height($(window).height());
    $(window).resize(function () {
        header.height($(window).height());
    });
    
    //--> Costomize Sticky Plugin
    $("nav").sticky({
        topSpacing: 0,
        zIndex: 9999
    });
    
    //--> Costumize ScrollSpy
    $('body').scrollspy({
        target: '.navbar',
        offset: 70
    });
    /*                       End Header
    ========================================================================== */
    
    /*                       Start Video Section
    ========================================================================== */
    //--> Initialize FitVids Library
    $(".container-video").fitVids();
    /*                       End Video Section
    ========================================================================== */
    
    /*                       Start Skills Section
    ========================================================================== */
    //--> Progress Bar
    $(".skill-progress").on("inview", function (event, visible) {
        if (visible) {
            $.each($("div .progress-bar"), function () {
                $(this).css("width", $(this).attr("aria-valuenow") + "%");
            });
            
            $.each($("div .progress-bar span"), function () {
                $(this).animate({opacity: 1}, 20);
                $(this).css("left", $(this).data("value"));
            });
            
            $(this).off("inview");
        }
    });
    
    //--> Circle Progress Chart
    $(".more-skill").on("inview", function (event, visible) {
        if (visible) {
            $(".chart").easyPieChart({
                //your configuration goes here
                easing: "easeOut",
                delay: 3000,
                barColor: "#FC913A",
                trackColor: "rgba(255,255,255,0.2)",
                scaleColor: false,
                lineWidth: 8,
                size: 140,
                animate: 2000,
                onStep: function (from, to, percent) {
                    this.el.children[0].innerHTML = Math.round(percent);
                }
            });
            $(this).off("inview");
        }
    });
    /*                       End Skills Section
    ========================================================================== */
    
    /*                       Start Works Section
    ========================================================================== */
    //--> Costumize MixItUp Library
    $(".grid").mixItUp();
    
    //--> Customize Popup
    $('.image-link').magnificPopup({
        gallery: {
            enabled: true
        },
        removalDelay: 300,
        mainClass: 'mfp-with-zoom',
        type: 'image'
    });
    //--> Customize Our Works
    $(".blog-more a").on("click", function () {
        $(".web-design .hidden-post").fadeIn(1000);
    });
    /*                       End Works Section
    ========================================================================== */
    
    /*                       Start Fact Section
    ========================================================================== */
    //--> Customize Count To
    $(".count-wrap").on("inview", function (event, visible) {
        if (visible) {
            $(".timer").countTo({
                speed: 1000
            });
            $(this).off("inview");
        }
    });
    /*                       End Fact Section
    ========================================================================== */
    
    /*                       Start Nice Scroll
    ========================================================================== */
    $('html').niceScroll({
        cursorcolor: '#FC913A',
        cursorborder: '1px solid #FC913A'
    });
    /*                       End Nice Scroll
    ========================================================================== */
    
    /*                       Start Customize scroll To top
    ========================================================================== */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('.scrollTop').fadeIn();
        } else {
            $('.scrollTop').fadeOut();
        }
    });
    $('.scrollTop').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
    });
    /*                       End Customize scroll To top
    ========================================================================== */
    
    /*                       Start WoW Library
    ========================================================================== */
    new WOW().init();
    /*                       End WoW Library
    ========================================================================== */
    
    /*                       Start Contact Us Section
    ========================================================================== */
    //--> Customize Google Map
    var myLatlng = new google.maps.LatLng(32.479456, 3.679669),

        styles = [
            {
                featureType: "landscape",
                stylers: [
                    { color: '#f7f7f7' }
                ]
            }, {
                featureType: "natural",
                stylers: [
                    { hue: '#00ffe6' }
                ]
            }, {
                featureType: "road",
                stylers: [
                    { hue: '#fff' },
                    { saturation: -70 }
                ]
            }, {
                featureType: "building",
                elementType: "labels",
                stylers: [
                    { hue: '' }
                ]
            }, {
                featureType: "poi",
                stylers: [
                    { hue: '' }
                ]
            }
        ],

        mapOptions = {
            zoom: 16,
            scrollwheel: false,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            disableDefaultUI: true,
            styles: styles
        },
        map = new google.maps.Map(document.getElementById('mapCanvas'), mapOptions),

        marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            animation: google.maps.Animation.DROP,
            title: 'Hello World!'
        }),

        contentString = "",

        infowindow = new google.maps.InfoWindow({
            content: contentString
        });

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.open(map, marker);
    });
    /*                       End Contact Us Section
    ========================================================================== */
});

$(window).on("load", function () {
    "use strict";
    /*                       Start Stellar Library
    ========================================================================== */
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $.stellar({
            horizontalScrolling: false,
            responsive: true
        });
    }
    /*                       End Stellar Library
    ========================================================================== */
    
    /*                       Start Loading
    ========================================================================== */
    $(".loading").fadeOut(1000, function () {
        $("body").css("overflow", "auto");
    });
    /*                       End Loading
    ========================================================================== */
});