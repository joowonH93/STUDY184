// headBox.js

(function($){

  var win = $(window);
  
  var gnbBtn = $('.gnb_btn');
  var gnb = $('.gnb_wrap');


  var bigPro = $('.gnb_01');
  var s_ms = bigPro.find('.m_s');

  var bigShop = $('.gnb_02');
  var s_on = bigShop.find('.on_s');
  var s_off = bigShop.find('.off_s');

  var bigCp = $('.gnb_03');
  var s_bm = bigCp.find('.b_m');
  var s_im = bigCp.find('.i_m');

  var MovePosition = function(i, m){
    var thisPosition = $(i.attr('data-target')).offset().top;
    $('html, body').stop().animate({scrollTop:thisPosition - m + 'px'}, 1000, 'easeInOutBack');
  };

  var _this;

  var logo = $('h1');
  var lang = $('#language');


  // 1. gnb 보이고 사라지게 하기

  /* 처음 화면에서 gnb 메뉴가 보이지 않도록 설정 */
  gnb.hide();

  /*
  gnb버튼을 클릭 시 gnb가 나오고
  gnb의 버튼 태그에 .active를 추가해 X 이미지가 보이도록 한다
  */
  gnbBtn.on('click', function(e){
    gnb.stop().fadeToggle();
    $(this).children('button').toggleClass('active');
  });


  // 2. 스크롤 내리면 h1과 language 가리기
  win.on('scroll', function(e){
    var thisTop = $(this).scrollTop();

    if(thisTop > 100){
      logo.stop().fadeOut(150);
      lang.stop().fadeOut(150);
    } else {
      logo.stop().fadeIn(150);
      lang.stop().fadeIn(150);
    }
  });

  // 3. 작은 메뉴 클릭하면 해당 영역을 보여줌
  s_ms.on('click', function(e){
    e.preventDefault();
    _this = $(this);

    MovePosition(_this, 50);
  });

  // s_ms.on('click', function(e){
  //   e.preventDefault();
  //   _this = $(this);

  //   MovePosition(_this, 50);
  // });

  s_on.on('click', function(e){
    e.preventDefault();
    _this = $(this);

    MovePosition(_this, 50);
  });

  s_off.on('click', function(e){
    e.preventDefault();
    _this = $(this);

    MovePosition(_this, 50);
  });

  s_bm.on('click', function(e){
    e.preventDefault();
    _this = $(this);

    MovePosition(_this, 0);
  });

  s_im.on('click', function(e){
    e.preventDefault();
    _this = $(this);

    MovePosition(_this, 50);
  });

})(jQuery);