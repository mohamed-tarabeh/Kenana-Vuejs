

document.getElementById('btn-account').addEventListener('click',function(){

$('#info_div').show();
$('#history_div').hide();
 $('#payment_div').hide();
});

document.getElementById('btn-hist').addEventListener('click',function(){
    $('#info_div').hide();
    $('#history_div').show();
    $('#payment_div').hide();

});

document.getElementById('btn-pay').addEventListener('click',function(){
    $('#info_div').hide();
    $('#history_div').hide();
    $('#payment_div').show();

});





