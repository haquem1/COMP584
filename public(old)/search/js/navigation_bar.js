$(document).ready(function(){
  var active_side_bar = false;

  $('.swish-menu').click(function(){
    if(!active_side_bar){
      $('.hidden-menu-container').animate({right:'0'}, 500);
    }else{
      $('.hidden-menu-container').animate({right:'-50%'}, 500);
    }
    active_side_bar = !active_side_bar;
  });


  
});