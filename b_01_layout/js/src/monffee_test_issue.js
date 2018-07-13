// monffee_test_issue.js

(function($){
  // issue banner 영역에 마지막 위치에 첫 배너를 복제하여 배치

  var isBan = $('.issue_banner');
  var isLiClone = isBan.find('li').eq(0).clone();
  isBan.children('ul').append(isLiClone);
  var isBanLen = isBan.find('li').length;
  isBan.children('ul').css({width:isBanLen * 100 + '%'});



  // indicator 클릭 시 배너 이동
  var issue = $('.issue_text');
  var issueBtn = issue.children('.btn');
  var indi = issueBtn.find('.indicator');
  var indiLi = indi.children('li');
  var i = 0;



  var issueBanner = function(i){
    indiLi.eq(i).addClass('active');
    indiLi.eq(i).siblings('li').removeClass('active');
    // 배너의 갯수를 파악해서 최대 갯수 위치에 오면 일단 정지
    var num = i * -100 + '%';
    if ( i < isBanLen-1 ){
    // 만약 i가 배너의 총 갯수에서 -1한 갯수 (5 - 4)보다 작다면
      isBan.children('ul').animate({marginLeft:num});
    } else {
      i = 0;
      isBan.children('ul').animate({marginLeft:num}, function(){
        $(this).css({marginLeft:0});
      });
    }
    indiLi.eq(i).addClass('active');
    indiLi.eq(i).siblings('li').removeClass('active');
  };



  issueBanner(i);



  indiLi.on('click', function(e) {
    e.preventDefault();
    i = $(this).index();
    issueBanner(i);
  });



  // 일정시간마다 움직이는 자동 슬라이드 기능 (setInterval, clearInterval)
  var timed = 1000;
  var autoStart;

  var startSlide = function(){
      autoStart  =  setInterval(function(){
                    ( i < isBanLen-1 ) ? i+=1 : i = 1;
                    issueBanner(i);  },  timed*2); };
  var stopSlide = function(){ clearInterval( autoStart ); };

  startSlide();



  // issue mouseenter/leave 했을 때

  issue.off( 'mouseleave' );
  issue.on('mouseleave', function(){
    // event.stopPropagation();
    startSlide();
    play.addClass('active');
    pause.removeClass('active');
  });

  issue.on('mouseenter', function(){
    // event.stopPropagation(); 이걸 써도 버블링 제거X 일단 주석!
    stopSlide();
    pause.addClass('active');
    play.removeClass('active');
  });



  var play = issue.find('.play');
  var pause = issue.find('.pause');
  play.addClass('active');

  
  play.off('click');
  play.on('click', function(e){
    // event.stopPropagation();
    e.preventDefault();
    issue.trigger('mouseleave');
    $(this).off('click');
    // startSlide();
    // play.addClass('active');
    // pause.removeClass('active');
  });

  pause.unbind('click');
  pause.on('click', function(e){
    // event.stopPropagation();
    e.preventDefault();
    issue.trigger('mouseenter');
    // clearInterval( autoStart );
    // pause.addClass('active');
    // play.removeClass('active');
  });


  // setInterval(function(){}, 시간);
  // clearInterval(setInterval이름);



})(jQuery);


/*
var A;

function start(){
  A = setInterval(function(){}, 2000);
};

start();

click => clearInterval( A );

start();
*/