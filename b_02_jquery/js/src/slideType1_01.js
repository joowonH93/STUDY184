// slideType1_01.js

(function($){

  var bannerWrap = $('.banner_wrap');
  var banner = bannerWrap.children('div');


  // .banner_wrap의 자식인 div 중 마지막 div(.banner_04)를
  // 맨 처음 순서로 끌어올린다
  banner.eq(-1).prependTo(bannerWrap);
  // 그리고 다시 div를 선언해준다(다시 순서값을 잡아줌)
  banner = bannerWrap.children('div');
  // .banner_01을 제일 처음에 보이게 하기 위해 margin값을 조정해준다
  bannerWrap.css({ marginLeft: -100 + '%' });





  // ******** 지금 margin값은 -100% ********


  var pbtn = $('.pbtn');
  var nbtn = $('.nbtn');
  var timed = 600;
  // var easing = 'easeInBounce';


  pbtn.on('click', function(e){
    e.preventDefault();
    bannerWrap.stop().animate({ marginLeft:0 }, timed, function(){
      banner.eq(-1).prependTo(bannerWrap);
      bannerWrap.css({ marginLeft: -100 + '%' });
      banner = bannerWrap.children('div');
    });
  });

  nbtn.on('click', function(e){
    e.preventDefault();
    // animate로 움직이고 처음 걸 마지막으로 옮겨준다
    bannerWrap.stop().animate({ marginLeft: -200 + '%' }, timed, function(){
      banner.eq(0).appendTo(bannerWrap);
      bannerWrap.css({ marginLeft: -100 + '%' });
      // 동작 후 순서목록 다시 할당
      banner = bannerWrap.children('div');
    });
  });

  // nbtn을 클릭하는 기능을 수행해라
  setInterval(function(){
    nbtn.trigger('click');
  }, 2000);

  // nbtn.hide();
  // pbtn.hide();





})(jQuery);