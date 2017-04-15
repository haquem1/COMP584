$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow"); //animate
   if(window.location.hash){ //remove hash
    window.location.href = window.location.href.replace(/#.*/,'');
  }
});
