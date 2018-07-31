// mousewheel_01.js

(function($){

  $('html, body').on('mousewheel DOMMouseScroll', function(e){
    console.log(e);
  });

})(jQuery);