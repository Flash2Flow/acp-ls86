$('#btn-accept').on('click',function(){
    $('#block-auth').hide();
    $('#block-code').show(500);
})
$('#close').on('click',function(){
    $('#block-autht').hide();
})
$('#btn-close-player').on('click',function(){
    $('#block-autht').show(300);
})
$('#open-read').on('click',function(){
    $('#block-module').show(300);
})

$(document).click( function(event){
    if( $(event.target).closest("#block-hot").length ) return;
    $("#block-hot").hide(300);
    event.stopPropagation();
  });