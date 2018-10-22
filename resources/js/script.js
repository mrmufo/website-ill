document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel')
    var instances = M.Carousel.init(elems, {
        indicators: true
    })
})
$(document).ready(function() {
    $.keyframe.debug = true
//    let dupa = '123'
//    console.log(`dupa jasia ${dupa}`)
//    
//    function funk() {
//        return;
//    }
//    
//    let dupa_2 = {
//        event: arg => arg += 1, 
//    }
//    
//    console.log(typeof dupa_2.event)
//    
//    console.log(dupa_2.event(1))
    
/* ----------------- VARIABLES ---------------- */
    var intervalID, letterWidth, elLuxuryWidth, elInsaneWidth
    var elInsane = $('#js-insane')[0]
    var elLuxury = $('#js-luxury')[0]
    var insane = $('#sliding-insane')[0]
    var luxury = $('#sliding-luxury')[0]
    var $newSpanLogoN1 = $("<span class='logo-N1'>n</span>")
    var $newSpanLogoS = $("<span class='logo-S'>s</span>")
    var $newSpanLogoA = $("<span class='logo-A'>a</span>")
    var $newSpanLogoN2 = $("<span class='logo-N2'>n</span>")
    var $newSpanLogoE = $("<span class='logo-E'>e</span>")
//    var shake_start = {
//                "opacity": "1",
//                "transform": "translateX(-luxuryWidth)"
//    }

/* -------------- NAVIGATION BAR -------------- */
    var navbar = $('#navbar')[0]
    var sticky = $('#navbar').offset().top;
    
    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= sticky) {
            $('#navbar').addClass('sticky');
        } else {
            $('#navbar').removeClass('sticky');
        }
        if ($(this).scrollTop() > 200) {
            if (!$('#navbar').hasClass('expand')) {
                $('#navbar').addClass('expand');
            }
        } else {
            if ($('#navbar').hasClass('expand')) {
                $('#navbar').removeClass('expand');
            }
        }
});
/* -------------------------------------------- */

    function measureLetterWidth(element, letters) {
        return element.scrollWidth/letters
    }
    
    function changeColor() {
        intervalID = window.setInterval(getValues, 100)
    }
    
    function getValues(){
        var matrix = $('#sliding-insane').css('transform').replace(/[^0-9\-.,]/g, '').split(',')
        var x = matrix[4]
        if(-2*letterWidth < x && x <= -letterWidth) {
            $(".logo-I").css({"color": "#ffab00", 'transition': 'color 3s'})
            $(".moveLeft").css({"transform": "translateX(-106px)", 'transition': 'transform 13s'})
            $("#logo-slash").css({"opacity": "0", 'transition': 'opacity 5s'})
        }else if(-3*letterWidth < x && x <= -2*letterWidth) {
//            $("#logo-waypoint").before($newSpanLogoN1)
            $('.logo-N1').addClass('fade-in')
        }else if(-4*letterWidth < x && x <= -3*letterWidth) {
//            $("#logo-waypoint").before($newSpanLogoS)
            $(".logo-S").addClass('fade-in')
//            $(".moveLeft").css({"transform": "translateX(-33px)", 'transition': 'transform 1s'})
        }else if(-5*letterWidth < x && x <= -4*letterWidth) {
//            $("#logo-waypoint").before($newSpanLogoA)
            $(".logo-A").addClass('fade-in')
//            $(".moveLeft").css({"transform": "translateX(-58px)", 'transition': 'transform 1s'})
        }else if(-6*letterWidth < x && x <= -5*letterWidth) {
//            $("#logo-waypoint").before($newSpanLogoN2)
            $(".logo-N2").addClass('fade-in')
//            $(".moveLeft").css({"transform": "translateX(-81px)", 'transition': 'transform 1s'})
        }else if(x <= -6*letterWidth) {
//            $("#logo-waypoint").before($newSpanLogoE)
            $(".logo-E").addClass('fade-in')
            $(".logo-uxury").css({"opacity": "1", 'transition': 'opacity 3s'})
//            $(".moveLeft").css({"transform": "translateX(-106px)", 'transition': 'transform 1s'})
            stopTextColor()
        }
    }
/* ----------------------First idea of logo---------------------- */
//    function getValues(){
//        var matrix = $('#sliding-insane').css('transform').replace(/[^0-  9\-.,]/g, '').split(',')
//        var x = matrix[4]
//        if(-2*letterWidth < x && x <= -letterWidth) {
//            $(".logo-I").css({"color": "#ffab00", 'transition': 'color 3s'})
//        }else if(-3*letterWidth < x && x <= -2*letterWidth) {
//            $("#logo-Luxury").before($newSpanLogoN1)
//            $('.logo-N1').addClass('fade-in')
//        }else if(-4*letterWidth < x && x <= -3*letterWidth) {
//            $("#logo-Luxury").before($newSpanLogoS)
//            $(".logo-S").addClass('fade-in')
//        }else if(-5*letterWidth < x && x <= -4*letterWidth) {
//            $("#logo-Luxury").before($newSpanLogoA)
//            $(".logo-A").css({"color": "#ffab00", "opacity": "1", 'transition': 'opacity 3s'})
//        }else if(-6*letterWidth < x && x <= -5*letterWidth) {
//            $("#logo-Luxury").before($newSpanLogoN2)
//            $(".logo-N2").css({"color": "#ffab00", "opacity": "1"})
//        }else if(x <= -6*letterWidth) {
//            $("#logo-Luxury").before($newSpanLogoE)
//            $(".logo-E").css({"color": "#ffab00", "opacity": "1"})
//            stopTextColor()
//        }
//    }
/* -------------------------------------------- */
    
    function stopTextColor() {
        clearInterval(intervalID)
    }
    
/* ---------------- KEYFRAMES ----------------- */
    $.keyframe.define([{
            name: "slidein-insane",
            "0%": {"transform": "translateX(0%)"},
            "100%": {"transform": "translateX(" +
                     (-elInsane.scrollWidth-150) + "px)"}
        },{
            name: "slidein-luxury",
            "0%": {
                "opacity": "1",
                "transform": "translateX(0%)"
            },
            "100%": {
                "opacity": "1",
                "transform": "translateX(" +
                (-elLuxury.scrollWidth-window.screen.width) + "px)"
            }
        }
    ])

    $(insane).playKeyframe({
        name: "slidein-insane",
        delay: "1s",
        duration: "10s",
        timingFunction: 'linear'
    })
    $(luxury).playKeyframe({
        name: "slidein-luxury",
        duration: "60s",
        iterationCount: 'infinite',
        timingFunction: 'linear'
    })
/* -------------------------------------------- */
   
///* For sticky navigation */
//    $('.js--section-sliding-text').waypoint(function(direction) {
//        if (direction == "down") {
//            $('main-nav').addClass('sticky');
//        } else {
//            $('main-nav').removeClass('sticky');           
//        }   
//    }, {
//        offset: '60px'
//    });
    
//    var waypoint = new Waypoint({
//  element: document.getElementById('waypoint'),
//  handler: function(direction) {
//    console.log('Scrolled to waypoint!')
//  }
//})
    
    letterWidth = measureLetterWidth(elInsane, 6)
    elLuxuryWidth = elLuxury.scrollWidth
    changeColor()
    
    $('#sliding-insane').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(e) { $(this).remove(); })
});