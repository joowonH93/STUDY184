// jquery_beginner_01.js

// 기본 형태 (function($){})(jQuery);
(function($){

var jwrap = $('.jwrap');
var jp = jwrap.children('p');

  jwrap.css({'margin':'auto', 'width':'600px', 'height':'300px', 'backgroundColor':'#fa0', 'color':'#fff'});
  jp.css({'margin':'auto', 'width':'70%', 'height':'100px', 'color':'#ff0', 'fontSize':'2rem', 'textAlign':'center'});

  jp.on('click', function(){
    $('.wrap>p').animate({'backgroundColor':'#f06', 'color':'#fff', 'fontWeight':'bold'});
  });

})(jQuery);