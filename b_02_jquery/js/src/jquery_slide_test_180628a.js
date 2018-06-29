// jquery_slide_test_180628a.js

(function($){

  // 변수로 설정 : 선택자, 시간, 기본 숫자 indicator 설정 숫자
  // indicator
  var sel = $('.selector');
  var selLi = sel.children('li');

  // slide button
  var slide = $('.slide_btn');
  var prevBtn = slide.children('.prev_btn')[0];
  var nextBtn = slide.children('.next_btn')[0];

  // product(배너)
  var product = $('.product');
  var prLi = product.children('li');
  var prLength = prLi.length - 1;

  // timed, index 설정
  var timed = 500;
  var num = 0;



  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


  // indicator 클릭 시 배너 이동하게
  selLi.on('click', function(e){
    e.preventDefault();

    // 선택한 그것에 class 이름을 부여, 이외는 해제
    var _this = $(this);

    _this.addClass('active');
    _this.siblings('li').removeClass('active');

    // 그것의 순서를 기억해서 해당 순서에 맞는 배너를 위치하게 만듦
    num = _this.index();
    var move = num * -100 + '%';

    product.animate({marginLeft:move});
  });


  // slide_button 클릭하면 배너가 이동
  slide.children('button').on('click', function(e){

    // 1. 선택한 그것의 좌우 버튼 비교
    // 2. 각각의 버튼 클릭 시 1씩 증감
    // 3. 증감의 범위를 제한
    // 4. indicator 연동

    var _this = $(this)[0];
    // console.log( $(this)[0] );
    // console.log ( $('.next_btn')[0] );
    // .next_btn을 클릭했을 때 위 두 개의 값이 같음

    if ( _this === prevBtn && num > 0 ){
      num -= 1;
      console.log('왼쪽 버튼');
    } else if ( _this === nextBtn && num < prLength ){
      num += 1;
      console.log('오른쪽 버튼');
    }

    var move = num * -100 + '%';
    product.animate({marginLeft:move});

    // selLi의 순번에 맞는 곳에 class를 부여
    selLi.eq(num).addClass('active');
    selLi.eq(num).siblings('li').removeClass('active');

  });

})(jQuery);
