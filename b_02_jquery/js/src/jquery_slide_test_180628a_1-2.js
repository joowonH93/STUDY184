// jquery_slide_test_180628a_1-2.js

(function($){

  // 변수 선언
  var topBtn = $('.top_btn');
  var headBox = $('#headBox');
  // headBox의 떨어진 양을 계산
  var headOffset = headBox.offset().top;
  var headBg = headBox.css('backgroundColor');
  // var headH = headBox.css('height');
  var headH = headBox.css('innerHeight');



  /*
  크기 값을 가져오는 메소드

  기본 높이값 파악        : 선택자.height();
  padding값 포함한 높이값 : 선택자.innerHeight();
  border값 포함한 높이값  : 선택자.outerHeight();
  margin값 포함한 높이값  : 선택자.outerHeight(true);

  기본 너비값 파악        : 선택자.width();
  padding값 포함한 너비값 : 선택자.innerWidth();
  border값 포함한 너비값  : 선택자.outerWidth();
  margin값 포함한 너비값  : 선택자.outerWidth(true);

  */


  // step1 화면 스크롤(300px 이상 움직였을 경우) top 버튼이 나타나게

  // 브라우저가 스크롤하면 실행해라
  $(window).on('scroll', function(){

    var winTop = $(window).scrollTop();
    // console.log(winTop);

    // 300px이상 인지 파악

    // if( winTop > 300 ){ topBtn.show(); } else { topBtn.hide(); }
    // (위)if문   / (밑)삼항연산자
    ( winTop > 300 ) ? topBtn.show() : topBtn.hide();
    // 삼항연산자는   ->   ( 조건 소괄호 생략가능) ? 참인 경우 실행 : 거짓인 경우에 실행;

  });



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  // step2 화면 스크롤시 header 상단에 고정
  $(window).on('scroll', function(){

    var winTop = $(window).scrollTop();

    if ( winTop > headOffset ) {
      // 조건에 맞다면 상단에 고정시켜라
      // headBox.css({position:'fixed', top:0});

      headBox.addClass('fixed');

    } else if ( winTop < headOffset ) {

      // 조건에 맞지 않다면 고정값을 풀어줘라
      // headBox.css({position:'absolute', top:'32px'});
      // headBox.removeAttr('style');

      headBox.removeClass('fixed');
      // headBox.unwrap();
    }

    /*
    // headBox가 상단에 고정값으로 설정되면!
    var hasFixed = headBox.hasClass('fixed');
    // hasClass() 메소드는 내부의 class 이름이 있는지 없는지를 판단하는 메소드(결과는 true/false)
    // console.log(hasFixed);

    if ( hasFixed ){} else {}
    */
    
  });


})(jQuery);