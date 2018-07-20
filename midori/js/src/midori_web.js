// midori_web.js

(function($){

  var win = $(window);
  var winW = win.outerWidth();
  var gnbBtn = $('.gnb_btn');
  var gnb = $('.gnb_wrap');

  var logo = $('h1');
  var lang = $('#language');

  var videoBox = $('#videoBox');
  var scrollBtn = videoBox.children('.scroll');
  var fullVideo = $('#fullVideo');
  var videoBanner = fullVideo.children('.video_banner');
  var videoBanLi = videoBanner.children('li');

  var productBox = $('#productBox');

  var topBtn = $('#topBtn');



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



  // 2. 스크롤 하면 top버튼 보이게 만들기
  topBtn.hide();

  win.on('scroll', function(e){
    var thisTop = $(this).scrollTop();

    if(thisTop < 1000){
      topBtn.stop().fadeOut(300);
    } else {
      topBtn.stop().fadeIn(300);
    }
  });


  // 2-1. 스크롤 내리면 h1과 language 가리기
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



  // 3. top버튼 클릭 시 최상단으로 올라가기
  topBtn.on('click', function(e){
    $('html, body').animate({scrollTop:0}, 500);
  });



  // 4. top버튼이 일정 지점에서 멈춤



  // 5. scroll 버튼 클릭시 product 영역이 보임
  scrollBtn.on('click', function(e){
    e.preventDefault();

    var thisLink = $(this).children('a').attr('href');
    var thisOffset = $(thisLink).offset().top;

    $('html, body').animate({scrollTop:thisOffset}, 1200, 'easeInOutBack');
  });



  // 6. 모바일, 태블릿 화면에서 비디오 대신 이미지 배너 나오게 하기


})(jQuery);





/*
var topBtn = $('.top_btn');

  // 브라우저 스크롤 기능으로 인해 topBtn이 나타남
  $(window).on('scroll', function(e){
    var thisTop = $(this).scrollTop();
    // console.log(thisTop);

    if(thisTop < 500){
      topBtn.stop().fadeOut();
    } else {
      topBtn.stop().fadeIn();
    }
  });



  // top버튼 클릭해서 상단으로 이동
  topBtn.on('click', function(e){
    // 선행되는 이벤트 제거(이 경우엔 a가 가지고 있는 이벤트)
    e.preventDefault();

    // $(window).scrollTop(0);   // 한 번에 움직이는 단점이 존재
    $('html, body').animate({scrollTop:0}, 500);
  });
*/