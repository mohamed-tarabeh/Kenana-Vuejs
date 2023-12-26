

document.getElementById('btn-inform').addEventListener('click',function(){

$('#info_div').show();
$('#review_div').hide();
$('#tour_div').hide();
});

document.getElementById('btn-tour').addEventListener('click',function(){
    $('#info_div').hide();
    $('#review_div').hide();
    $('#tour_div').show();

});

document.getElementById('btn-review').addEventListener('click',function(){
    $('#info_div').hide();
    $('#tour_div').hide();
    $('#review_div').show();

});





