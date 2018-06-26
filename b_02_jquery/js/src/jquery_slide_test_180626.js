// 180626_js_test.js

(function($){

  var indicator = $('.indicator');
  var indiLi = indicator.children('li');

  var product = $('.product');
  var productLi = product.children('li');

  product.wrap('<div class="product_wrap"></div>');
  $('.product_wrap').css({width:'100%', height:'100%', overflow:'hidden'});



  indiLi.on('click', function(event){
    event.preventDefault();

    var _this = $(this);

    _this.addClass('active');
    _this.siblings('li').removeClass('active');

    var thisIndex = _this.index();
    var i = thisIndex * '-100' + '%';

    product.stop().animate({marginLeft:i});
  });

})(jQuery);