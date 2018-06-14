// galleria_01.js

(function($) {
  // .indicator_selector_btn 자식인 li
  var indiSel = $('.indicator_selector_btn');
  var indiLi = indiSel.children('li');

  // .ad_banner 자식인 div를 선택하고자 할 때
  var adBanner = $('.ad_banner');
  var adDiv = adBanner.children('div');

  // 몇 번째라고 지칭 eq(n)
  // 몇 번째인지 확인 index()

  // indiLi를 클릭하면
  indiLi.click(function(){
    // 1. indiLi에 클래스 이름('active')을 첨부
    // indiLi.addClass('active');

    // 1-1. indiLi 중에서 선택한 것( $(this) )에 이름('active')을 첨부
    // $(this).addClass('active');

    // 2. indiLi에 클래스 이름을 빼기
    // indiLi.removeClass('active');

    // 3. indiLi에 부여된 클래스이름('active')을 일단 빼고
    //    동시에 선택한 것에만 ('active')를 적용
    indiLi.removeClass('active');
    $(this).addClass('active');

    // 선택한 순서값 검증
    var thisI = $(this).index()
    console.log(this);

    // 1. adDiv의 class를 해제('active')
    // adDiv.removeClass('active');

    // 2. adDiv의 세번째에 class이름('active')를 부여
    // adDiv.eq(2).addClass('active');

    // 2-1. adDiv에 선택한 순서에 맞는 위치에 class이름('active')를 부여
    adDiv.eq(thisI).addClass('active');

    // 3. adDiv 중에 class이름('active')은 삭제하고,
    //    동시에 선택한 순서( indiLi의 index() )에
    //    맞는 adDiv는 class이름 부여

    var i = $(this).index(); // 선택한 순서
    adDiv.removeClass('active');
    adDiv.eq(i).addClass('active');

  }); 


})(jQuery);