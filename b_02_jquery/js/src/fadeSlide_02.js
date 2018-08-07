// fadeSlide_02.js

(function($){

  var bWrap = $('.banner_wrap');
  var banner = bWrap.children('div');
  var bannerLen = banner.length-1;

  var btn = $('.btn').children('button');

  var indi = $('.indicator');
  var indiLi = indi.find('li');
  var j = 0;



  // 배너 순서의 배치를 조정.
  // 제일 마지막에 오는 요소가 뒤로 배치되도록 조정하고,
  // 버튼을 클릭할 때마다 반복해서 z-index값을 재할당 처리
  // 자주 사용하는 기능이므로, 함수 처리함
  var ReZindex = function(){
    var i = 0;
    for(; i <= bannerLen; i += 1){
      var j = i * 10;
      banner.eq(bannerLen - i).css({zIndex:j});
    }
  };
  ReZindex();

  var IndiActive = function(j){
    indiLi.eq(j).addClass('active');
    indiLi.eq(j).siblings().removeClass('active');

    banner.eq(j).fadeIn();
    banner.eq(j).nextAll().fadeIn();
    banner.eq(j).prevAll().fadeOut();
  };
  IndiActive(j);

  btn.on('click', function(e){
    e.preventDefault();
    var next = $(this)[0] == $('.next_btn')[0];

    if( next ){
      ( j >= bannerLen ) ? j = 0 : j += 1;
    } else {
      ( j <= 0 ) ? j = bannerLen : j -= 1;
    }

    IndiActive(j);
  });



  // indiLi 클릭시 fade배너 위치가 나타나거나 사라지게 만듦
  indiLi.on('click', function(e){
    e.preventDefault();
    var j = $(this).index();

    IndiActive(j);
    
  });



})(jQuery);
      
      