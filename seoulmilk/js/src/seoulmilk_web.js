// seoulmilk_web.js

(function($){

  var gnbBtn = $('#gnbBtn');
  var navBox = $('#navBox');
  var navWrap = $('#navWrap');
  var globalM = $('.global_menu');
  var gBig = globalM.children('li').children('a');
  var gSmall = gBig.next('ul');
  var bigLast = globalM.children('li').eq(-1).find('a');

  var NavHide = function(){
    navBox.stop().fadeOut();
    gnbBtn.removeClass('close');
  };





  // 1. gnb버튼 클릭 시 메뉴창이 보임
  navBox.hide();

  gnbBtn.on('click', function(e){
    e.preventDefault();

    navBox.stop().fadeToggle();
    $(this).toggleClass('close');

    navWrap.on('click', function(){
      var cc = gnbBtn.hasClass('close');
      if ( cc ){
        NavHide();
      }
    });
  });



  // 2. gnb 메뉴에 마우스 호버시 하위메뉴 보임
  gSmall.hide();

  gBig.on('mouseenter focus', function(){
    $(this).next('ul').stop().slideDown();
  });

  globalM.children('li').on('mouseleave', function(){
    gSmall.stop().slideUp();
  });

  $.each(gBig, function(index, value){
    $(this).next('ul').children('li').children('a').eq(-1).on('blur', function(){
      $(this).next('ul').stop().slideUp();
    });
  });

  bigLast.on('blur', function(){
    GnbHide();
  });

    



})(jQuery);