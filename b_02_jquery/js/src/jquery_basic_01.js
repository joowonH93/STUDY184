// jquery_basic_01.js

(function($) {
  // h1
  $('h1').css({backgroundColor:"#faa", color:"#fff"});

  // h1의 padding값을 console창에 띄운다
  var h1padding = $('h1').css('padding');
  // console.log( parseInt(h1padding) );
  $('h1').css({ 'padding':parseInt(h1padding)*2+'px' });

  var pBg = $('p').css('backgroundColor');
  var pColor = $('p').css('color');

  $('p').on('mouseenter', function(){
    $(this).stop().animate({backgroundColor:"#765", color:"#fff"}, 800, 'easeInSine');
  })

  $('p').on('mouseleave',function(){
    $(this).stop().animate({backgroundColor:pBg, color:pColor}, 800, 'easeInSine');
  });


  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


  var imgFirst = $('.img_place').find('img');
  var imgFirstOriginSrc = imgFirst.attr('src');
  var imgFirstOriginAlt = imgFirst.attr('alt');

  imgFirst.on('click', function(){
    $(this).attr({src:'../img/basic01/bg_02.jpg'});
  });

  $('h1').on('click', function(){
    imgFirst.attr({src:'../img/basic01/bg_03.jpg'});
  });

  $('p').on('click', function(){
    imgFirst.attr({src:imgFirstOriginSrc, alt:imgFirstOriginAlt});
    
  });


  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


  // make_type 내부에 요소를 삽입
  $('.make_type').html('<p>내용이 삽입되었습니다. <span>진짜로</span></p> <p>여러 요소를 한 번에 삽입할 수 있다.</p>')




})(jQuery);