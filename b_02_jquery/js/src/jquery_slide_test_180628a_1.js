// jquery_slide_test_180628a_1.js

(function($){

  // 변수로 설정 : 선택자, 시간, 기본 숫자 indicator 설정 숫자
  var sel = $('.selector');
  var selLi = sel.children('li');

  var slide = $('.slide_btn');
  var prevBtn = slide.children('.prev_btn')[0];
  var nextBtn = slide.children('.next_btn')[0];

  var product = $('.product');
  var prLi = product.children('li');
  var prLength = prLi.length - 1;

  var timed = 500;
  var num = 0;
  var option = "easeInOutQuint";

  var CommonFn = function(n){
    var move = n * -100 + '%';
    product.animate({marginLeft:move}, timed, option);
    selLi.eq(n).addClass('active');
    selLi.eq(n).siblings('li').removeClass('active');
  };



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


  // indicator 클릭 시 배너 이동하게
  selLi.on('click', function(e){
    e.preventDefault();

    // 그것의 설정과 순서파악
    var _this = $(this);
    num = _this.index();

    CommonFn(num);

    /*
    _this.addClass('active');
    _this.siblings('li').removeClass('active');

    selLi.eq(num).addClass('active');
    selLi.eq(num).siblings('li').removeClass('active');

    // 그것의 순서를 기억해서 해당 순서에 맞는 배너를 위치하게 만듦
    
    var move = num * -100 + '%';
    product.animate({marginLeft:move});
    */

  });


  // slide_button 클릭하면 배너가 이동
  slide.children('button').on('click', function(e){

    // 1. 선택한 그것의 좌우 버튼 비교
    // 2. 각각의 버튼 클릭 시 1씩 증감
    // 3. 증감의 범위를 제한
    // 4. indicator 연동

    var _this = $(this)[0];

    if ( _this === prevBtn && num > 0 ){
      num -= 1;
      console.log('왼쪽 버튼');
    } else if ( _this === nextBtn && num < prLength ){
      num += 1;
      console.log('오른쪽 버튼');
    }

    CommonFn(num);

    /* 밑에서 함수를 만들어 주고 그걸 끌어올려서 씀

    var move = num * -100 + '%';
    product.animate({marginLeft:move});

    // selLi의 순번에 맞는 곳에 class를 부여
    selLi.eq(num).addClass('active');
    selLi.eq(num).siblings('li').removeClass('active');
    */

  });



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


  // 공통영역을 별도의 함수 처리하여 동작하게 만들기

  /* step 3
  function CommonFn(n){

    var move = n * -100 + '%';
    product.animate({marginLeft:move});
    selLi.eq(n).addClass('active');
    selLi.eq(n).siblings('li').removeClass('active');

  };
  */

  // 단, 함수는 변수로 생성(함수표현식)하여 처리할 것을 권장
  // var CommonFn = function(){}; 형태로 사용하여 상단으로 옮김

})(jQuery);
