$(document).ready(function(){
  $('.dropdown-toggle').dropdown();

  var active_side_bar = false;


  $('.swish-nav-menu-btn').click(function(){
    if(!active_side_bar){
      $('.swish-nav-menu').animate({right:'0'}, 500);
    }else{
      $('.swish-nav-menu').animate({right:'-25vw'}, 500);
    }
    active_side_bar = !active_side_bar;
  });


  
});