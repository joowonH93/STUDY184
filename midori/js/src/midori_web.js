// midori_web.js

(function($){

  var winW = $(window).outerWidth();
  var gnbBtn = $('.gnb_btn');
  var gnb = $('.gnb_wrap');

  gnb.hide();

  gnbBtn.on('click', function(e){
    gnb.stop().fadeToggle();
    $(this).children('button').toggleClass('active');
  });
  
})(jQuery);
