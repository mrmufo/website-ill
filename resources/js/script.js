document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        indicators: true
    });
});
$(document).ready(function() {
    var intervalID;
    function changeColor() {
        intervalID = window.setInterval(getValues, 100);
    };
    
    function getValues(){
        //console.log($('.sliding-insane'));
        var matrix = $('.sliding-insane').css('transform').replace(/[^0-9\-.,]/g, '').split(',');
        var x = matrix[4]/window.screen.availWidth;
        console.log(x);
        if(x > -0.475 && x < -0.12) {
            $("#logo-I").css("color", "#ffab00");
        }else if(x > -0.775 && x < -0.475) {
            $("#logo-N1").css("color", "#ffab00");
        }else if(x > -1.125 && x < -0.775) {
            $("#logo-S").css("color", "#ffab00");
        }else if(x > -1.375 && x < -1.125) {
            $("#logo-A").css("color", "#ffab00");
        }else if(x > -1.735 && x < -1.375) {
            $("#logo-N2").css("color", "#ffab00");
        }else if(x < -1.735) {
            $("#logo-E").css("color", "#ffab00");
            clearInterval(intervalID);
        }
        
    };
    
    function stopTextColor() {
        clearInterval(intervalID);
    };
    
  
    changeColor();
    
    $('.sliding-insane').bind('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(e) { $(this).remove(); });

    
//    var myBox = document.getElementById('sliding-insane');
//    myBox.addEventListener('webkitAnimationEnd', function( event ) { myBox.style.display = 'none'; }, false);
});