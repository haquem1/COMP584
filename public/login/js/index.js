$('.message a').click(function(){
  if(window.location.hash){ //remove hash
   window.location.href = window.location.href.replace(/#.*/,'');
 }
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow"); //animate
});
