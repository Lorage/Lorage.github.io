var blinker = $( "#indicator" );

$( document ).ready(function () {
    var i = 0;
    while ( i < 100 ) {
        $("#indicator").hide(0).delay(200).show(0);
        i++;
    };
});


