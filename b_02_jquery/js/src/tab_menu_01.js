// tab_menu_01.js

(function($){

  // tab_box 내의 li 클릭시
  var tabBox = $('.tab_box');
  var tabLi = tabBox.find('li');
  var tabText = $('.tab_text').children('div');

  tabLi.on('click', function(e){
    e.preventDefault();
    var i = $(this).index();

    // 선택한 li에 .select를 적용
    tabLi.eq(i).addClass('select');
    tabLi.eq(i).siblings().removeClass('select');

    // tab_text 내의 순서에 맞는 내용에 .select를 적용
    tabText.eq(i).addClass('select');
    tabText.eq(i).siblings().removeClass('select');
  });

  // tab_text 내의 순서에 맞는 내용에 .select를 적용


})(jQuery);