// scroll_top_test_01.js

(function($){

  var sideMenu = $('#sideMenu');
  var sideLi = sideMenu.find('li');
  var scrollBox = $('.scroll_menu');
  var timed = 500;

  // $('html, body').animate({scrollTop:0}, time/10);
  sideLi.eq(0).addClass('select');

  // sideLi 클릭시,
  sideLi.on('click', function(e){
    e.preventDefault();

    // 순서값을 파악해서,
    var i = $(this).index();

    // 해당 위치의 값을 파악하고(offset().top)
    var ot = scrollBox.eq(i).offset().top;

    // 스크롤이 이동
    // $('html, body').scrollTop(ot); // 애니메이션 기능없이 화면 전환
    $('html, body').animate({scrollTop:ot}, timed); // 애니메이션 기능을 적용해 화면 전환

    sideLi.eq(i).addClass('select');
    sideLi.eq(i).siblings(i).removeClass('select');

  });
  
})(jQuery);