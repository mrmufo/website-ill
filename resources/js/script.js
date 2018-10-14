document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel')
    var instances = M.Carousel.init(elems, {
        indicators: true
    })
})
$(document).ready(function() {
    window.onscroll = function() {myFunction()};
    document.getElementById('navbar').onscroll = function() {
        console.log("scrolling");
    };
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
    
    $.keyframe.debug = true
    var intervalID
    var letterWidth, elLuxuryWidth, elInsaneWidth
    var elInsane = document.getElementById("js-insane")
    var elLuxury = document.getElementById('js-luxury')
    var insane = document.getElementById("sliding-insane")
    var luxury = document.getElementById("sliding-luxury")
//    var shake_start = {
//                "opacity": "1",
//                "transform": "translateX(-luxuryWidth)"
//    }
    
    $(window).on('scroll', function () {
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
    
    var navbar = document.getElementById("navbar");
// navbar.onscroll = function() {
////        console.log("scrolling");
////    };
        
    var sticky = navbar.offsetTop;
    
    
    
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
    }
    
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
            $("#logo-I").css({"color": "#ffab00", "opacity": "1"})
        }else if(-3*letterWidth < x && x <= -2*letterWidth) {
            $("#logo-N1").css({"color": "#ffab00", "opacity": "1"})
        }else if(-4*letterWidth < x && x <= -3*letterWidth) {
            $("#logo-S").css({"color": "#ffab00", "opacity": "1"})
        }else if(-5*letterWidth < x && x <= -4*letterWidth) {
            $("#logo-A").css({"color": "#ffab00", "opacity": "1"})
        }else if(-6*letterWidth < x && x <= -5*letterWidth) {
            $("#logo-N2").css({"color": "#ffab00", "opacity": "1"})
        }else if(x <= -6*letterWidth) {
            $("#logo-E").css({"color": "#ffab00", "opacity": "1"})
            stopTextColor()
        }
    }
    
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
    
    console.log(-window.screen.width)
    letterWidth = measureLetterWidth(elInsane, 6)
    elLuxuryWidth = elLuxury.scrollWidth
    console.log(elLuxuryWidth)
    changeColor()
    
    $('#sliding-insane').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(e) { $(this).remove(); })
});