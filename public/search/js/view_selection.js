$(document).ready(function(){

  // SHOW HOMEPAGE
  $('.swish-nav-brand').click(function(){
    hide_views();
    $('#homepage-elements').fadeIn();
  });

  // SHOW USER SEARCH
  $('.list-search-results').click(function(){
    hide_views();
    $('.swish-list-area').fadeIn();
  });

  // SHOW USER FAVORITES
  $('.card-favorite-results').click(function(){
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