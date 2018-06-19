// 180619_test_02.js

(function($) {

  // slide_btn 내부 버튼요소를 변수


  // indicator 선택자 변수로 처리
  var banner = $('.banner');
  var bannerUl = $('.indicator');
  var banLi = bannerUl.children('li');
  // banner_wrap 내부 div 선택자를 변수로 처리
  var slideBtn = $('.slide_btn');
  var slideView = slideBtn.children("button");
  var prevBtn = slideBtn.children(".prev_btn");
  var nextBtn = slideBtn.children(".next_btn");

  var bannerWrap = $('.banner_wrap');
  var bannerIn = bannerWrap.children('div');  

  // 순서를 만드는 변수를 생성(indicator, slideBtn 기능에도 영향이 있다)
  var i = 0;

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


  // // // 해당 요소에 클래스이름을 부여('active')
  // $(this).addClass('active')
  // // // 선택된 요소의 다른 형제 요소에는 클래스 이름을 제거
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

  i = $(this).index();
  var n = i * -100;
  console.log(n);
  var per = n + '%';

  // bannerWrap.css ({marginLeft:n + "%"});
  // bannerWrap.animate ({marginLeft:n + "%"});
  bannerWrap.animate ({marginLeft:per});

  // 순서값 i에 대한 내용으로 순서에 맞게 변경
  banLi.eq(i).addClass('active');
  banLi.eq(i).siblings('li').removeClass('active');

});


  // === 3차 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // .slide_btn의 버튼요소를 선택했을 경우,
  // 광고배너의 이전 이미지와 다음 이미지의 내용이 보이게 만들기


  // var slideBtn = $('.slide_btn');
  // var slideView = slideBtn.children("button");
  // var prevBtn = slideBtn.children(".prev_btn");
  // var nextBtn = slideBtn.children(".next_btn");

  slideView.on('click', function(e){
    e.preventDefault();

    console.log($(this));
  });

  // nextBtn, prevBtn 클릭시 1씩 수치가 올라가거나 떨어지게 처리
  // 단, 배너의 숫자 최대치 이상, 0 미만은 생성되지 않게 처리


  nextBtn.on('click', function(e){
    e.preventDefault();
    
    // 증감연산자
    // ++ : 1씩 더해라!
    // -- : 1씩 빼라
    // 10++ : 10에 1씩 더해라

    if(i < 2){
      i += 1;
    }
    
    console.log(n);
    var n = i * -100;
    var per = n + '%';
    bannerWrap.animate ({marginLeft:per});

    banLi.eq(i).addClass('active');
    banLi.eq(i).siblings('li').removeClass('active');

    // i += 1; // ++i;
    // console.log( i );
  });

  prevBtn.on('click', function(e){
    e.preventDefault();

    if(i > 0){
      i -= 1;
    }

    console.log(n);
    var n = i * -100;
    var per = n + '%';
    bannerWrap.animate ({marginLeft:per});

    banLi.eq(i).addClass('active');
    banLi.eq(i).siblings('li').removeClass('active');

    // i -= 1; // --i;
    // console.log( i );
  });
})(jQuery);