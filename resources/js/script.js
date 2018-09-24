document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
    indicators: true
    });
});
$(document).ready(function() {
    var mmm = 5;
    var intervalID;
    function changeColor() {
        intervalID = window.setInterval(getValues, 100);
    };
    
    function getValues(){
        //console.log($('.sliding-insane'));
        var matrix = $('.sliding-insane').css('transform').replace(/[^0-9\-.,]/g, '').split(',');
        var x = matrix[4];
        console.log(x);
        if(x < 0) {
            $("#logo-I").css("color", "#ffab00");
        }
    };
    
    function stopTextColor() {
        clearInterval(intervalID);
    };
    
    
    changeColor();
})