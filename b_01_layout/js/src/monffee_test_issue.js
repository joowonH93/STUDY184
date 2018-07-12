// monffee_test_issue.js

(function($){
  // issue banner 영역에 마지막 위치에 첫 배너를 복제하여 배치

  var isBan = $('.issue_banner');
  var isLiClone = isBan.find('li').eq(0).clone();
  isBan.children('ul').append(isLiClone);
  var isBanLen = isBan.find('li').length;
  isBan.children('ul').css({width:isBanLen * 100 + '%'});



  // indicator 클릭 시 배너 이동
  var issueBtn = $('.issue_text').children('.btn');
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

  setInterval(function(){
    ( i < isBanLen-1 ) ? i+=1 : i = 1;
    issueBanner(i);
  }, timed*2);

})(jQuery);