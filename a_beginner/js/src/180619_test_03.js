// 180619_test_02.js

(function($) {

  var banner = $('.banner');
  var bannerUl = $('.indicator');
  var banLi = bannerUl.children('li');

  var slideBtn = $('.slide_btn');
  var slideView = slideBtn.children("button");
  var prevBtn = slideBtn.children(".prev_btn");
  var nextBtn = slideBtn.children(".next_btn");

  var bannerWrap = $('.banner_wrap');
  var bannerIn = bannerWrap.children('div');  

  var i = 0;

  banLi.click(function(event){
    event.preventDefault();

  i = $(this).index();
  var n = i * -100;
  console.log(n);
  var per = n + '%';

  bannerWrap.animate ({marginLeft:per});

  banLi.eq(i).addClass('active');
  banLi.eq(i).siblings('li').removeClass('active');

});

  slideView.on('click', function(e){
    e.preventDefault();

    console.log($(this));
  });

  nextBtn.on('click', function(e){
    e.preventDefault();

    if(i < 2){
      i += 1;
    }
    
    console.log(n);
    var n = i * -100;
    var per = n + '%';
    bannerWrap.animate ({marginLeft:per});

    banLi.eq(i).addClass('active');
    banLi.eq(i).siblings('li').removeClass('active');

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

  });
})(jQuery);