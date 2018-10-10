document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        indicators: true
    });
});
$(document).ready(function() {
    $.keyframe.debug = true;
    var intervalID;
    var letterWidth;
    var insane = document.getElementById("sliding-insane");
    
    function measureLetterWidth(element, letters) {
        return element.scrollWidth/letters;
    };
    
    function changeColor() {
        intervalID = window.setInterval(getValues, 100);
    };
    
    function getValues(){
        var matrix = $('#sliding-insane').css('transform').replace(/[^0-9\-.,]/g, '').split(',');
        var x = matrix[4];
        if(-2*letterWidth < x && x <= -letterWidth)
            $("#logo-I").css({"color": "#ffab00", "opacity": "1"});
        }else if(-3*letterWidth < x && x <= -2*letterWidth) {
            $("#logo-N1").css({"color": "#ffab00", "opacity": "1"});
        }else if(-4*letterWidth < x && x <= -3*letterWidth) {
            $("#logo-S").css({"color": "#ffab00", "opacity": "1"});
        }else if(-5*letterWidth < x && x <= -4*letterWidth) {
            $("#logo-A").css({"color": "#ffab00", "opacity": "1"});
        }else if(-6*letterWidth < x && x <= -5*letterWidth) {
            $("#logo-N2").css({"color": "#ffab00", "opacity": "1"});
        }else if(x <= -6*letterWidth) {
            $("#logo-E").css({"color": "#ffab00", "opacity": "1"});
            stopTextColor();
        }
    };
    
    function stopTextColor() {
        clearInterval(intervalID);
    };

    
    letterWidth = measureLetterWidth(insane, 6);
    changeColor();
    
    $('#sliding-insane').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(e) { $(this).remove(); });
});