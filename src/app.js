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
$('#btn-find').on('click',function(){
    $('#block-find').show(300);
    return false;
})
$('#open-settings-player').on('click',function(){
    $('#block-tipes').hide(0);
    $('#block-settings-player').show(300);
    return false;
})
$('#open-block-ban').on('click',function(){
    $('#block-retest').hide(0);
    $('#block-warn').hide(0);
    $('#block-ban').show(300);
    return false;
})
$('#open-block-warn').on('click',function(){
    $('#block-warn').show(300);
    $('#block-ban').hide(0);
    $('#block-retest').hide(0);
    return false;
})
$('#open-block-retest').on('click',function(){
    $('#block-retest').show(300);
    $('#block-warn').hide(0);
    $('#block-ban').hide(0);
    return false;
})
$('#player-one').on('click',function(){
    $('#block-player-set').show(300);
    $('#block-settings-player').hide(0);
    return false;
})
$('#close-block').on('click',function(){
    $('#block-tipes').show(300);
    $('#block-player-set').hide(0);
    return false;
})



$(document).click( function(event){
    if( $(event.target).closest("#block-hot").length ) return;
    $("#block-hot").hide(300);
    event.stopPropagation();
  });
  $(document).click( function(event){
    if( $(event.target).closest("#block-find").length ) return;
    $("#block-find").hide(300);
    event.stopPropagation();
  });
  $(document).click( function(event){
    if( $(event.target).closest("#block-settings-player").length ) return;
    $("#block-settings-player").hide(300);
    event.stopPropagation();
  });
  $(document).click( function(event){
    if( $(event.target).closest("#block-ban").length ) return;
    $("#block-ban").hide(300);
    event.stopPropagation();
  });
  $(document).click( function(event){
    if( $(event.target).closest("#block-warn").length ) return;
    $("#block-warn").hide(300);
    event.stopPropagation();
  });
  $(document).click( function(event){
    if( $(event.target).closest("#block-retest").length ) return;
    $("#block-retest").hide(300);
    event.stopPropagation();
  });