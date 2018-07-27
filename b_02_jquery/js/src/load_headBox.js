// load_headBox.js

(function($){
  var headBox = $('#headBox');
  headBox.on('mouseenter', function(){
    headBox.animate({backgroundColor:'#fcc'});
  });
})(jQuery);