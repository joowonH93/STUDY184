// jquery_slide_test_180628.js

(function($){

  // 우선은 변수를 만들어 놓는당
  var indi = $('.indicator');

  var selector = $('.selector');
  var selLi = selector.children('li');

  var slide = $('.slide_btn');
  var prevBtn = $('.prev_btn');
  var nextBtn = $('.next_btn');

  var product = $('.product');
  var prLi = product.children('li');



  var num = 0;



  // selector
  selLi.on('click', function(e){
    e.preventDefault();

    var _this = $(this);
    var thisI = _this.index();

    selLi.eq(thisI).addClass('active');
    selLi.eq(thisI).siblings('li').removeClass('active');

    var n = thisI * -100 + '%';

    product.stop().animate({marginLeft:n});
  });

  /*
  // slide button
  slide.children('button').on('click', function(e){
    e.preventDefault();

    var _this = $(this)[0];
    var prLength = prLi.length;

    if ( _this === prevBtn[0] && num > 0 ) {
      num -= 1;
    } else if ( _this === nextBtn[0] && num < prLength-1 ){
      num += 1;
    }

    var thisI = _this.index();

    // selLi.eq(thisI).addClass('active');
    // selLi.eq(thisI).siblings('li').removeClass('active');

    var n = thisI * -100 + '%';
    product.stop().animate({marginLeft:n});

  });
  */

})(jQuery);