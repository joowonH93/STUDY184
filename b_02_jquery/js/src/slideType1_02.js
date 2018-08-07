// slideType1_02.js

(function($){

  var bannerWrap = $('.banner_wrap');
  var banner = bannerWrap.children('div');
  // div의 가로값을 파악(margin값까지 포함한 width값으로)
  var divWidth = banner.outerWidth(true);
  var l = divWidth;

  // 마지막 요소를 앞으로 배치
  banner.eq(-1).prependTo(bannerWrap);
  // 파악한 가로값만큼 margin-left로 밀어줌
  bannerWrap.css({marginLeft:-divWidth});
  // 순서 재할당
  banner = bannerWrap.children('div');



  banner.eq(3).addClass('active');

  var nbtn = $('.nbtn');
  var pbtn = $('.pbtn');

  nbtn.on('click',function(e) {
    e.preventDefault();
    banner.eq(3).removeClass('active');
    bannerWrap.animate({marginLeft:-(l+divWidth)},function(){
      banner.eq(0).appendTo(bannerWrap);
      bannerWrap.css({marginLeft:-divWidth});
      banner = bannerWrap.children('div');
      banner.eq(3).addClass('active');
    });
  });


  pbtn.on('click',function(e) {
    e.preventDefault();
    banner.eq(3).removeClass('active');
    bannerWrap.animate({marginLeft:0},function(){
      banner.eq(-1).prependTo(bannerWrap);
      bannerWrap.css({marginLeft:-divWidth});
      banner = bannerWrap.children('div');
      banner.eq(3).addClass('active');
    });
  });



})(jQuery);