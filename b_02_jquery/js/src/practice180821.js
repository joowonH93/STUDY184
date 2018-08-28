// practice180821.js

(function($) {

/* * videoBox 스크롤 버튼을 누르면 contentBox영역을 보여준다 */

  var videoBox = $('#videoBox');
  var scrollBtn = videoBox.children('.scroll_btn');

  // scrollBtn을 클릭했을 때
  scrollBtn.on('click', function(e){
    // 선행되는 이벤트 기능 제거
    e.preventDefault();

    // 1-1. scrollBtn의 자식인 a가 가진 href값을 파악
    // var thisLink = $(this).children('a').attr('href');
    // 1-2. thisLink에서 얻어진 href영역의 offset top값을 파악
    // var thisTop = thisLink.offset().top;

    // 2. 직접적으로 해당 영역을 선택해 offser top값을 파악
    var conTop = $('#contentBox').offset().top;

    // 버튼을 클릭하면 자연스럽게 해당영역으로 이동한다
    $('html, body').animate({scrollTop:conTop}, 1000, 'easeOutSine');
  });

})(jQuery);