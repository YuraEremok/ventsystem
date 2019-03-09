jQuery(window).load(function() {
    $("#preloader").fadeOut("slow");
});
$(function() {
    var Page = (function() {
        var $navArrows = $('#nav-arrows'),
            $nav = $('#nav-dots > span'),
            slitslider = $('#slider').slitslider({
                onBeforeChange: function(slide, pos) {
                    $nav.removeClass('nav-dot-current');
                    $nav.eq(pos).addClass('nav-dot-current');
                }
            }),
            init = function() {
                initEvents();
            },
            initEvents = function() {
                $navArrows.children(':last').on('click', function() {
                    slitslider.next();
                    return false;
                });
                $navArrows.children(':first').on('click', function() {
                    slitslider.previous();
                    return false;
                });
                $nav.each(function(i) {
                    $(this).on('click', function(event) {
                        var $dot = $(this);
                        if (!slitslider.isActive()) {
                            $nav.removeClass('nav-dot-current');
                            $dot.addClass('nav-dot-current');
                        }
                        slitslider.jump(i + 1);
                        return false;
                    });
                });
            };
        return {
            init: init
        };
    })();
    Page.init();
});
$(document).ready(function() {
    var slideHeight = $(window).height();
    $('#home-slider, #slider, .sl-slider, .sl-content-wrapper').css('height', slideHeight);
    $(window).resize(function() {
        'use strict',
        $('#home-slider, #slider, .sl-slider, .sl-content-wrapper').css('height', slideHeight);
    });
    $("#works, #testimonial").owlCarousel({
        navigation: true,
        pagination: false,
        slideSpeed: 700,
        paginationSpeed: 400,
        singleItem: true,
        navigationText: ["<i class='fa fa-angle-left fa-lg'></i>", "<i class='fa fa-angle-right fa-lg'></i>"]
    });
    $(".fancybox").fancybox({
        padding: 0,
        openEffect: 'elastic',
        openSpeed: 650,
        closeEffect: 'elastic',
        closeSpeed: 550,
        closeClick: true,
        beforeShow: function() {
            this.title = $(this.element).attr('title');
            this.title = '<h3>' + this.title + '</h3>' + '<p>' + $(this.element).parents('.portfolio-item').find('img').attr('alt') + '</p>';
        },
        helpers: {
            title: {
                type: 'inside'
            },
            overlay: {
                css: {
                    'background': 'rgba(0,0,0,0.8)'
                }
            }
        }
    });
});
google.maps.event.addDomListener(window, 'load', init);

function init() {
    var myLatLng = new google.maps.LatLng(22.402789, 91.822156);
    var mapOptions = {
        zoom: 15,
        center: myLatLng,
        disableDefaultUI: true,
        scrollwheel: false,
        navigationControl: true,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        styles: [{
            featureType: 'water',
            stylers: [{
                color: '#46bcec'
            }, {
                visibility: 'on'
            }]
        }, {
            featureType: 'landscape',
            stylers: [{
                color: '#f2f2f2'
            }]
        }, {
            featureType: 'road',
            stylers: [{
                saturation: -100
            }, {
                lightness: 45
            }]
        }, {
            featureType: 'road.highway',
            stylers: [{
                visibility: 'simplified'
            }]
        }, {
            featureType: 'road.arterial',
            elementType: 'labels.icon',
            stylers: [{
                visibility: 'off'
            }]
        }, {
            featureType: 'administrative',
            elementType: 'labels.text.fill',
            stylers: [{
                color: '#444444'
            }]
        }, {
            featureType: 'transit',
            stylers: [{
                visibility: 'off'
            }]
        }, {
            featureType: 'poi',
            stylers: [{
                visibility: 'off'
            }]
        }]
    };
    var mapElement = document.getElementById('map-canvas');
    var map = new google.maps.Map(mapElement, mapOptions);
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(22.402789, 91.822156),
        map: map,
        icon: 'img/icons/map-marker.png',
    });
}
var wow = new WOW({
    offset: 75,
    mobile: false,
});
wow.init();
$('.navbar-collapse').on('click', 'a', function(e) {
    $(e.delegateTarget).collapse('toggle');
});



                         // code for freelance sitr


    