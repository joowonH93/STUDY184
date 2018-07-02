// jquery_gnb_01.js

(function($){

  // #headBox 영역에 마우스 올라가면 gnb 하위메뉴가 나타나게 만듦


  var headBox = $('#headBox');


  // 배경영역 생성
  var nav = $('#gnb');

  nav.after('<div class="nav_bg"></div>');

  var navBg = $('.nav_bg');

  navBg.css({
    display:'none',
    position:'absolute', top:'100px',
    marginLeft:'-15px',
    width:'inherit', height:'13rem', backgroundColor:'rgba(0,255,100,0.5)'});

  // 변수로 정리하기
  var liInA = headBox.find('#gnb').children('ul').children('li').children('a');

  var lastLi = headBox.find('ol').find('li').eq(-1).find('a');


  // headBox
  // .on('mouseenter', function(){
  //   $(this).addClass('view');
  // })
  // .on('mouseleave', function(){
  //   $(this).removeClass('view');
  // });


  headBox.find('ol').hide();


  var SlideShow = function(){
    headBox.find('ol').stop().slideDown();
    navBg.stop().slideDown();
  };

  var SlideHide = function(){
    headBox.find('ol').stop().slideUp();
    navBg.stop().slideUp();
  };


  headBox
  .on('mouseenter', function(){ SlideShow(); })

  .on('mouseleave', function(){ SlideHide(); });


  liInA
  .on('focus', function(){ SlideShow(); });


  // eq(-1)는 끝에서 첫번 째. 여러 개 중 마지막에서 벗어났을 때 ol 슬라이드업함

  lastLi
  .on('blur', function(){ SlideHide(); });


})(jQuery);
