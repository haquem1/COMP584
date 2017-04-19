$(document).ready(function(){

  // SHOW HOMEPAGE
  $('.swish-nav-logo').click(function(){
    hide_views();
    $('#homepage-elements').fadeIn();
  });

  // SHOW USER SEARCH
  $('.search-result-list').click(function(){
    hide_views();
    $('.swish-list-area').fadeIn();

  });

  // SHOW USER FAVORITES
  $('.user-fav-cards').click(function(){
    hide_views();
    $('.swish-card-area').fadeIn();

  });

});


function hide_views(){

  // hide hompage
  $('#homepage-elements').hide();

  // hide search results 
  $('.swish-list-area').hide();

  // hide user favorites
  $('.swish-card-area').hide();
}