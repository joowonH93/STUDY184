// mousewheel_01.js

(function($){

  $(window).animate({scrollTop:0}, 300);
  $('html, body').animate({scrollTop:0}, 300);

  var box = $('.box');
  var boxList = [];
  var boxLen = box.length;
  var j = 0;

  // 1. 일일이 넣기
  // boxList[0] = box.eq(0).offset().top;

  // 2. for문 이용하기
  /*
  for (var i = 0; i < box.length; i += 1){
    boxList[i] = box.eq(i).offset().top;
  }
  */

  // 번외. forEach 기능
  /*
  box.forEach(function(value, index){
    boxList[index] = $(this).offset().top;
  });
  */

  // 3. 각각 알아서 처리할 수 있도록 each 메소드 이용하기
  $.each(box, function(index, value) {
    boxList[index] = $(this).offset().top;
  });
  // console.log(boxList);

  /* 마우스 휠 기능 처리시 동작(firefox에서는 DOMMouseScroll 이벤트로 수행)
  */
  var go = true;

  $('html').on('mousewheel DOMMouseScroll', function(e){
    // console.log(e);

    // 1. 한 번 휠을 움직였을 때의 수치를 확인함
    // {originalEvent: {wheelDelta:-120} }
    var originE = e.originalEvent;

    var foxevt = originE.detail; // 파이어폭스 해당
    var evt = originE.wheelDelta; //파이어폭스를 제외한 나머지 브라우저
    var delta;

    // ----------------------------------------------------

  // 파이어폭스에서는 어떠한 이벤트를 받아 들이는가?
    // console.log(e);

    if (foxevt){
      // console.log('firefox에는 detail 속성이 존재한다', foxevt);
      foxevt *= -40;
      delta = foxevt;
    } else {
      // console.log('wheelDelta 속성이 존재한다', evt);
      delta = evt;
    };

    // ----------------------------------------------------

    // console.log(evt);

    /*
    if ( delta < 0 ){
      if ( j >= boxLen ){
        j = boxLen-1;
      } else {
        j += 1;
      }
      console.log('마우스를 내렸습니다', j);
    } else {
      if ( j <= 0){
        j = 0;
      } else {
        j -= 1;
      }
      console.log('마우스를 올렸습니다', j);
    };
    */

    // /*위 아래 if문 똑같은 식!*/

    if(delta < 0 && go){
      go = false;
      (j >= boxLen-1) ? j = boxLen-1 : j += 1;
      // console.log('마우스를 내렸습니다', j);

    } else if (delta > 0 && go) {
      go = false;
      (j <= 0) ? j = 0 : j -= 1;
      // console.log('마우스를 올렸습니다', j);
    };

    $('html').stop().animate({ scrollTop:boxList[j] }, function(){
      go = true;
    });

  });

  /* 마우스 휠 기능 뿐 아니라, 스크롤 처리시 동작하는 기능까지 결합
  */

  /*
  $(window).on('scroll', function(){
    var myTop = $(this).scrollTop();
    // console.log(myTop);

    for (var k = 0; k < boxList.length; k += 1){
      if( myTop >= boxList[k] && myTop < boxList[k+1]){
        $('html, body').stop().animate({scrollTop:boxList[k]});
      }
    };

  });
  */

  $('body').css({overflow:'hidden'});
  $(window).on('keyup', function(e){
    // console.log(e);
    var myKey = e.key.toLowerCase();

    if(myKey == 'home'){
      j = 0;
      $('html, body').stop().animate({scrollTop:boxList[j]});
    } else if ( myKey == 'end'){
      j = boxList.length-1;
      $('html, body').stop().animate({scrollTop:boxList[j]});
    } else if ( myKey == 'pageup'){
      j -= 1;
      $('html, body').stop().animate({scrollTop:boxList[j]});
    } else if ( myKey == 'pagedown'){
      j += 1;
      $('html, body').stop().animate({scrollTop:boxList[j]});
    };
  });

})(jQuery);