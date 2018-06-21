// 180621_test_01a.js

(function($) {
  // .accordion
  var accordion = $('.accordion');
  var title = accordion.find('dt');

  var timed = 500;
  var beforeColor = '#067';
  var afterColor = '#047';

  title.eq(0).nextAll().show();
  title.eq(0).css({backgroundColor:afterColor});

  // dt 클릭 시 형제 dd를 보이게 만들기
  title.on('click', function(e) {
    e.preventDefault();

    var mydt = $(this);

    // step_01
    /*
    // mydt.siblings('dd')
    mydt.nextAll('dd').addClass('view');

    // 선택한 것의 부모의 다른 dl의 자식 dd 
    mydt.parent().siblings('dl').children('dd').removeClass('view');
    */

    // step_02
    /*
    title.removeClass('view');
    mydt.addClass('view');
    */

    // step_03
    /* title.nextAll().hide(); */

    /* // step_03-1
    mydt.parent().siblings('dl').children('dd').hide(timed);
    mydt.nextAll().show(timed); */

    /* // step_03-2
   mydt.parent().siblings('dl').children('dd').fadeOut(timed);
   mydt.nextAll().fadeIn(timed); */

    /* // step_03-3
    mydt.parent().siblings('dl').children('dd').slideUp(timed);
    mydt.nextAll().slideDown(timed); */
    
// display:none -> hide() / fadeOut() / slideUp()

// display:block -> show() / fadeIn() / slideDown() 

    // step_04 열렸을 경우 클릭시 다시 사라지게
    mydt.parent().siblings('dl').children('dd').slideUp(timed);
    // 현재 선택하는 dt의 뒤의 dd가 열렸는가?
    var thisNext = mydt.nextAll().css('display');
    console.log(thisNext);

    if(thisNext === 'block'){
      mydt.nextAll().slideUp(timed);
    } else {
      mydt.nextAll().slideDown(timed);
    }

    title.css({backgroundColor:beforeColor});
    mydt.css({backgroundColor:afterColor});

    if(thisNext === 'block'){
      mydt.css({backgroundColor:beforeColor});
    }
    
  });

})(jQuery);