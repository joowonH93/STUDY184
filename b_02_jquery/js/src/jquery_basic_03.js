// jquery_basic_03.js

(function($) {

  // .wrap
  var wrap = $('.wrap');
  wrap.css({width:'100%', height:'auto'});

  wrap.html('<header>');
  wrap.children('header').attr({id:'headBox'});

  var headBox = $('#headBox');
  headBox.css({margin:'auto', width:'60rem', height:'100px', backgroundColor:'#ccc'});

  var headBg = headBox.css('backgroundColor');
  headBox.wrap('<div class="head_wrap">');
  headBox.parent().css({width:'100%', height:'auto', backgroundColor:headBg});

  // headBox를 기준으로 h1과 nav생성
  headBox.html('<h1>');
  $('h1').after('<nav id="navBox">');

  var h1 = $('h1')
  var navBox = $('#navBox')
  h1.css({width:'150px', height:'100%', backgroundColor:'#fa0', float:'left'});
  navBox.css({marginTop:'50px', width:'600px', height:'50%', backgroundColor:'#0af', float:'right'});

  // h1 내부에 링크 기능 첨부
  h1.html('<a href="#">');
  h1.children('a').html('<span class="hidden">');
  h1.find('span').text('jQuery를 이용한 텍스트 생성');
  h1.children('a').css({display:'block', width:'100%', height:'100%'});

  // nav 내부에 ul 생성, 내부에 li 3개 생성, 내부에 링크(네이버, 다음, 구글 처리)
  navBox.html('<ul>');
  var navUl = navBox.children('ul');
  navUl.css({width:'100%', height:'100%', backgroundColor:'#ff0'});

  var linkText = ['네이버', '다음', '구글', '싸이월드', 'kt', 'sk'];
  var linkValue = ['naver.com', 'daum.net', 'google.com', 'cyworld.com', 'kt.com', 'sk.com'];
  var linkLength = linkText.length;

  // navUl.html('<li><li><li>');
  // 공통 내용이 반복사용될 경우 for문 이용
  for (var i = 0; i < linkLength; i += 1){
    navUl.append('<li><a href="http://' + linkValue[i] + '">' + linkText[i] + '</a></li>');
  }

  var navLi = navUl.children('li');
  var navLiInA = navLi.children('a')
  navLi.css({marginRight:'50px', float:'left', width:'auto', height:'100%', backgroundColor:'#fff', lineHeight:'50px', textAlign:'center'}); 
  navLi.last().css({marginRight:'0'});

  navLiInA.attr({target:'_blank'});
  navLiInA.css({display:'block', width:'100%', height:'100%'});

})(jQuery);