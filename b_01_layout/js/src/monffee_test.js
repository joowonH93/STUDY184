// monffee_test.js

(function($){

  // headBox 스크롤 처리시 상단 고정 *************************************************

  var headBox = $('.head_box_wrap');
  var beforeTop = headBox.offset().top;

  $(window).on('scroll', function(e){
    // console.log( $(window).scrollTop() );
    var nowTop = $(window).scrollTop();

    // 1번 방법 - 바로 css 속성을 주고 없애는 방식
    // if (beforeTop <= nowTop ) {
    //   headBox.css({position:'fixed', top:0, bottom:'auto'});
    // } else {
    //   headBox.removeAttr('style');
    // }

    // 2번 방법 - css상에서 클래스 속성을 설정하고 add/removeClass를 해줌
    if (beforeTop <= nowTop ) {
      headBox.addClass('fixed');
    } else {
      headBox.removeClass('fixed');
    }

  });



  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  var win = $(window);
  var wh = win.outerHeight();

  var headChild = headBox.children('#headBox');
  var headNav = headBox.find('ul').children('li');
  var headOl = headBox.find('ol');
  var olLink = headOl.find('a');
  var timed = 500;

  headOl.hide();



  headNav.on('mouseenter', function(e){

    // 스크롤 위치를 파악
    
    var st = win.scrollTop();
    
    if (wh/2 > st) {
      headChild.addClass('top');
      headOl.addClass('top');
    } else {
      headChild.removeClass('top');
      headOl.removeClass('top');
    }

    headOl.slideDown(timed);
    headChild.addClass('show');

  });

  headBox.on('mouseleave', function(e){
    headOl.slideUp();
    headChild.removeClass('show');
  });

  // headNav.children('a').on('focus', function(e){
  //   headOl.slideDown(timed);
  //   headChild.addClass('show');
  // });

  // olLink.eq(-1).on('blur', function(e){
  //   headOl.slideUp();
  //   headChild.removeClass('show');
  // });

  headNav.children('a').on('focus', function(e){
    // headOl.slideDown(timed);
    // headChild.addClass('show');

    headNav.trigger('monseenter');
    // trigger라는 기능은 방아쇠라는 의미로, 미리 만들어진 이벤트 기능을 수행하도록 처리
  });

  olLink.eq(-1).on('blur', function(e){
    // headOl.slideUp();
    // headChild.removeClass('show');

    headBox.trigger('monseleave');
  });

})(jQuery);