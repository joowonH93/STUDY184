// 180619_test_01.js

(function($) {
  // indicator 선택자 변수로 처리
  var banner = $('.banner');
  var bannerUl = banner.children('ul');
  var banLi = bannerUl.children('li');
  // banner_wrap 내부 div 선택자를 변수로 처리
  var bannerWrap = $('.banner_wrap');
  var bannerIn = bannerWrap.children('div');

  // banLi를 클릭하면,
    // 선택되지 않은 요소에는 클래스 이름을 제거
    // 해당 요소에 클래스이름을 부여('active')
    // 선택된 요소의 순서값( index() ) 파악
    // 광고배너의 클래스 이름을 제거
    // 선택요소와 동일한 위치의 광고배너 클래스이름을 부여 ('active')

  banLi.click(function(event){
    event.preventDefault();
    // // 선택되지 않은 요소에는 클래스 이름을 제거
    // banLi.removeClass('active')
    // // 해당 요소에 클래스이름을 부여('active')
    // $(this).addClass('active')


  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~위 아래 같은 식인데 다르게 씀


  // // 해당 요소에 클래스이름을 부여('active')
  // $(this).addClass('active')
  // // 선택된 요소의 다른 형제 요소에는 클래스 이름을 제거
  // $(this).siblings('li').removeClass('active');

  // // === 1차 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  // var i = $(this).index();
  // console.log(i); // 검증:순서값 파악
  // // 광고배너의 클래스 이름을 제거
  // bannerIn.removeClass('active');
  // // 선택요소와 동일한 순서의 광고배너 클래스 이름을 부여('active')
  // bannerIn.eq(i).addClass('active');


  // === 2차 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // .banner_wrap을 css로 margin-left값을 0, -100%, -200% 값으로 이동처리
    // bannerWrap.css({marginLeft:"-100%"});
  // .banner_wrap에서 css의 margin-left값을 indicator의 순서값의 -100%만큼 곱한 값으로 처리

  var i = $(this).index();
  var n = i * -100;
  console.log(n);
  var per = n + '%';

  // bannerWrap.css ({marginLeft:n + "%"});
  // bannerWrap.animate ({marginLeft:n + "%"});
  bannerWrap.animate ({marginLeft:per});

});


})(jQuery);