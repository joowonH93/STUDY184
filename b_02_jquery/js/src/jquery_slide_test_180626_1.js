// jquery_slide_test_180626_1.js

(function($){

  var indicator = $('.indicator');
  var indiLi = indicator.children('li');

  var product = $('.product');
  var productLi = product.children('li');

  product.wrap('<div class="product_wrap"></div>');
  $('.product_wrap').css({width:'100%', height:'100%', overflow:"hidden"});



  var thisIndex = 0;

  // 접근성 고려1
  // product 영역에서 일부 키보드 탭이 반응하지 않도록 처리
  product.find('a').attr({tapIndex:-1});
  product.children('li').eq(thisIndex).children('a').attr({tabIndex:0});


  indiLi.on('click', function(event){
    event.preventDefault();

    var _this = $(this);

    _this.addClass('active');
    _this.siblings('li').removeClass('active');

    thisIndex = _this.index();
    var i = thisIndex * '-100' + '%';
    product.stop().animate({marginLeft:i});

    product.find('a').attr({tabIndex:-1});
    product.children('li').eq(thisIndex).children('a').attr({tabIndex:0});

    });

})(jQuery);