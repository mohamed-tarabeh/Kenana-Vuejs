/* eslint-disable no-undef */
$('#show').click(function(){
    $('#more_tour').slideToggle();
    $('#show').hide();
    $('#less').show();
    });


    /////////////////////

    $('#less').click(function(){
        $('#more_tour').slideUp(1000);
        $('#show').show();
        $('#less').hide();
    
        });