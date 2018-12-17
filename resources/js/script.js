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
    var insane = $('.sliding-insane')[0]
    var luxury = $('.sliding-luxury')[0]
    var $newSpanLogoN1 = $("<span class='logo-N1'>n</span>")
    var $newSpanLogoS = $("<span class='logo-S'>s</span>")
    var $newSpanLogoA = $("<span class='logo-A'>a</span>")
    var $newSpanLogoN2 = $("<span class='logo-N2'>n</span>")
    var $newSpanLogoE = $("<span class='logo-E'>e</span>")

/* -------------- NAVIGATION BAR -------------- */
    var navbar = $('#navbar')[0]
    var sticky = $('#navbar').offset().top;
    
    $("#inpt_search").on('focus', function () {
        $(this).parent('label').addClass('active');
    });
    
    $("#inpt_search").on('blur', function () {
        if($(this).val().length == 0)
            $(this).parent('label').removeClass('active');
    });

    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= sticky) {
            $('#navbar').addClass('sticky');
        } else {
            $('#navbar').removeClass('sticky');
        }
        if ($(this).scrollTop() > 1) {
            if (!$('#navbar').hasClass('expand')) {
                $('#navbar').addClass('expand');
            }
//            if (!$('.moveLeft').hasClass('on-scroll-logo')) {
//                $('.moveLeft').addClass('on-scroll-logo');
//            }
        } else {
            if ($('#navbar').hasClass('expand')) {
                $('#navbar').removeClass('expand');
            }
//            if ($('.moveLeft').hasClass('on-scroll-logo')) {
//                $('.moveLeft').removeClass('on-scroll-logo');
//            }
        }
});
    
/* -------------- ANIMATED LOGO -------------- */
    function measureLetterWidth(element, letters) {
        return element.scrollWidth/letters
    }
    
    // Runs specific function with set interval time
    function functionInterval(fName, interval) {
        intervalID = window.setInterval(fName, interval)
    }
    
    function checkHPosition() {
        var matrix = $('.sliding-insane').css('transform').replace(/[^0-9\-.,]/g, '').split(',')
        var x = matrix[4] //Stores X axis displacement of element

        //Checks if each letter moved outside the viewport
        if(-2*letterWidth < x && x <= -letterWidth) {
            $(".logo-I").css({"color": "#ffab00", 'transition': 'color 3s'})
            $(".moveLeft").css({"transform": "translateX(-106px)", 'transition': 'transform 13s'})
            $("#logo-slash").css({"opacity": "0", 'transition': 'opacity 5s'})
        }else if(-3*letterWidth < x && x <= -2*letterWidth) {
            $('.logo-N1').addClass('fade-in')
        }else if(-4*letterWidth < x && x <= -3*letterWidth) {
            $('.logo-S').addClass('fade-in')
        }else if(-5*letterWidth < x && x <= -4*letterWidth) {
            $('.logo-A').addClass('fade-in')
        }else if(-6*letterWidth < x && x <= -5*letterWidth) {
            $('.logo-N2').addClass('fade-in')
        }else if(x <= -6*letterWidth) {
            $('.logo-E').addClass('fade-in')
            $('.logo-uxury').css({"opacity": '1', 'transition': 'opacity 3s'})
            stopInterval(intervalID)
        }
    }
    
    function stopInterval(interval) {
        clearInterval(interval)
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
        delay: "3s",
        duration: "60s",
        iterationCount: 'infinite',
        timingFunction: 'linear'
    })
/* -------------------------------------------- */
    
    letterWidth = measureLetterWidth(elInsane, 6)
    elLuxuryWidth = elLuxury.scrollWidth
    functionInterval(checkHPosition, 100)
    
    $('.sliding-insane').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(e) { $(this).remove(); })
});