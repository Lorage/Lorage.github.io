var blinker = $( "#indicator" );

function cursorAnimation() {
    $('#indicator').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}

$(document).ready(function() {
    setInterval ('cursorAnimation()', 900);
    
});
