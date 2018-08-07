// fadeSlide_01.js

(function($){

  var bWrap = $('.banner_wrap');
  var banner = bWrap.children('div');
  var bannerLen = banner.length;

  var btn = $('.btn').children('button');



  // 배너 순서의 배치를 조정.
  // 제일 마지막에 오는 요소가 뒤로 배치되도록 조정하고,
  // 버튼을 클릭할 때마다 반복해서 z-index값을 재할당 처리
  // 자주 사용하는 기능이므로, 함수 처리함
  var ReZindex = function(){
    banner = bWrap.children('div');

    var i = 1;
    for(; i <= bannerLen; i += 1){
      var j = i * 10;
      banner.eq(bannerLen - i).css({zIndex:j});
    }
    banner.stop().fadeIn();
  };

  ReZindex();



  // 오른쪽 버튼 클릭시 '바로 뒤의 내용'이 나타나게 만들고,
  // 사라진 배너 영역은 맨뒤로 배치
  btn.on('click', function(e){
    e.preventDefault();

    var next = $(this)[0] == $('.next_btn')[0];
    // console.log($(this)[0]);
    // console.log($('.next_btn')[0]);
    // console.log(next);

    if( next ){
      banner.eq(0).stop().fadeOut(function(){
        banner.eq(0).appendTo(bWrap);
        // bWrap.append($(this)); 바로 위 문장과 완전히 같음
        ReZindex();
      });
    } else {
      banner.eq(-1).stop().fadeOut(function(){
        banner.eq(-1).prependTo(bWrap);
        // bWrap.prepend($(this)); 바로 위 문장과 완전히 같음
        ReZindex();
      });
    }
  });





})(jQuery);