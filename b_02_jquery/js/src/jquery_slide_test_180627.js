// jquery_slide_test_180627.js

(function($){

  var indi = $('.indicator');
  var indiLi = indi.children('li');

  var product = $('.product');
  var prLi = product.children('li');

  var slide = $('.slide_btn');
  var n_btn = slide.children('.next_btn');
  var p_btn = slide.children('.prev_btn');


  /*
  // tapIndex의 경우 1차 처리
  var TabIndex = function(tabi){
    prLi.eq(tabi).children('a').attr({tapIndex:0});
    prLi.eq(tabi).siblings('li').children('a').attr({tapIndex:-1});
  };

  // var tabi = 0;
  TabIndex(0);



  // .indicator 클릭
  indiLi.on('click', function(event){
    event.preventDefault();

    var _this = $(this);

    // indicator 처리
    _this.siblings('li').removeClass('active');
    _this.addClass('active');

    // banner 이동
    var thisI = _this.index();
    var i = thisI * -100 + '%';

    product.stop().animate({marginLeft:i});

    TabIndex(thisI);
  });
  */



  // 좌우 버튼 클릭으로 슬라이딩 처리하기

  var num = 0;
  var prLength = prLi.length;
  

  /*
  // n_btn(오른버튼) 클릭
  n_btn.on('click', function(event){
    event.preventDefault();

    if (num < prLength -1) {
      num += 1;
    }

    var i = num * -100 + '%';

    product.stop().animate({marginLeft:i});
  });

  // p_btn(왼버튼) 클릭
  p_btn.on('click', function(event){
    event.preventDefault();

    if (num > 0) {
      num -= 1;
    }

    var i = num * -100 + '%';

    product.stop().animate({marginLeft:i});
  });
  */

  /*
  // tabIndex 기능 다시 한 번 익히기
  var Ti = function(Ti){
    prLi.eq(Ti).children('a').attr({tabIndex:0});
    prLi.eq(Ti).siblings('li').children('a').attr({tabIndex:-1});
  };

  Ti(0);

  // console.log(n_btn);
  // console.log(n_btn[0]);

  slide.children('button').on('click', function(event){
    // console.log(event.currentTarget);
    // console.log($(this)[0]);

    var _this = $(this)[0];

    if( _this === n_btn[0] && num < prLength-1 ){
      // 선택된 버튼이 n_btn이고 전체 갯수보다 하나 작은 수(4)이면 ~
      // 변수 num에 1씩 더해라
      // console.log(n_btn);
      num += 1;
    } else if( _this === p_btn[0] && num > 0 ) {
      // 선택된 버튼이 p_btn이고 0보다 큰 수이면~
      // 변수 num에 1씩 빼라
      // console.log(p_btn);
      num -= 1;
    }

    // console.log(num);
    var i = num * -100 + '%';
    product.stop().animate({marginLeft:i});

    Ti(num);
  });
  */



  // 좌우 슬라이드버튼과 indicator 기능 합치기

  // tapIndex
  var Tab = function(i){
    prLi.eq(i).find('a').attr({tabIndex:0});
    prLi.eq(i).siblings('li').find('a').attr({tabIndex:-1});

    indiLi.eq(i).addClass('active');
    indiLi.eq(i).siblings('li').removeClass('active');
    var n = i * -100 + '%';
    product.stop().animate({marginLeft:n});
  };

  Tab(num);

  // indicator
  indiLi.on('click', function(event){
    event.preventDefault();
    var _t = $(this);
    num = _t.index();

    Tab(num);
  });

  slide.children('button').on('click', function(e){
    event.preventDefault();
    var _t = $(this)[0];

    if( _t === n_btn[0] && num < prLength-1 ){
      num += 1;
    } else if( _t === p_btn[0] && num > 0 ) {
      num -= 1;
    }

    Tab(num);
  });

})(jQuery);