// productBox.js

(function($){

  var win = $(window);
  var winW = win.outerWidth();
  var proLi = $('#productBox').find('li');

  if(winW >= 769){
    win.scroll(function(){
      proLi.each(function(){

        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = win.scrollTop() + win.height();

        if ( bottom_of_window > bottom_of_element ){
          $(this).animate({'opacity':'1'}, 300);
        }
      });
    });
  };

  win.on('resize', function(e){
    var nowW = win.outerWidth();
    if ( winW !== nowW ) {
      // location.reload();
      // location.reload(true);
      history.go(0);
    }
  });


})(jQuery);