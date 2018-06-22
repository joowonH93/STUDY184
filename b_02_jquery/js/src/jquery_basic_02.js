// jquery_basic_02

(function($) {

  // h1
  var h1 = $('h1');
  h1.html('<a></a>');

  var h1InA = h1.children('a');
  // // 보고 있는 창에서 네이버로 바로 이동
  // h1InA.attr({href:'http://naver.com', title:'네이버로 이동'});
  // h1InA.text('네이버로 이동하는 버튼을 생성');

  // 새 창에 네이버를 띄워줌
  h1InA.attr({href:'http://naver.com', title:'네이버로 이동', target:'_blank'});
  h1InA.text('네이버로 이동하는 버튼을 생성');
  h1InA.css({padding:'0.5rem 2rem', backgroundColor:'#f06', color:'#fff', fontSize:'1rem'});

  var h1InABg = h1InA.css('backgroundColor');

  h1InA
    .on('mouseenter', function(){
      $(this).animate({backgroundColor:'#457'});
    })
    .on('mouseleave', function(){
      $(this).animate({backgroundColor:h1InABg});
    });


  h1.css({float:'left'});
  h1.wrap('<header></header>');
  h1.parent('header').attr({id:'headBox'});

  var headBox = $('#headBox');

  headBox.css({backgroundColor:'#ccc', padding:'1rem', width:'100%', height:'5rem'});


  // append and prepend
  var pend = $('.pend');
  pend.html('<li class="base">기준이 되는 요소를 삽입</li>')
  $('.base').css({backgroundColor:'#a65'});

  // append
  pend.append('<li class="after1">뒤에 첫 번째 리스트를 생성</li>');
  pend.append('<li>뒤에 두 번째 리스트를 생성</li>');
  pend.append('<li>뒤에 세 번째 리스트를 생성</li>');
  pend.append('<li>뒤에 네 번째 리스트를 생성</li>');
  pend.append('<li>뒤에 다섯 번째 리스트를 생성</li>');

  // prepend
  pend.prepend('<li>base앞에 첫 번째 리스트를 생성</li>');
  pend.prepend('<li>base앞에 두 번째 리스트를 생성</li>');
  pend.prepend('<li>base앞에 세 번째 리스트를 생성</li>');
  pend.prepend('<li>base앞에 네 번째 리스트를 생성</li>');
  pend.prepend('<li>base앞에 다섯 번째 리스트를 생성</li>');

  // appendTo
  // $('.one').appendTo('.after1');

  $('<li>appendTo를 이용하여 삽입</li>').appendTo(pend);
  $('<li>appendTo를 이용하여 두 번째 삽입</li>').appendTo(pend);
  $('<li>appendTo를 이용하여 세 번째 삽입</li>').appendTo(pend);
  $('<li>appendTo를 이용하여 네 번째 삽입</li>').appendTo(pend);

  pend.append('<li>appendTo를 이용하여 다시 삽입</li>');

  // prependTo
  $('<li>prependTo를 이용하여 앞에 삽입</li>').prependTo(pend);
  $('<li>prependTo를 이용하여 앞에 또 삽입</li>').prependTo(pend);

  // append와 prepend는 선택자 내부의 앞과 뒤에 생성하는 기능
  // 생성을 요구할 때에는 요소의 모양 그대로 (<li></li>)사용.
  // 요소(태그)의 모양 그대로 사용하지 않고 처리하면 이동의 의미를 가짐

  var conBox = $('#contentBox');
  conBox.css({backgroundColor:'#fac', padding:'1rem'});
  conBox.children('.base').css({border:'1px solid #fff', padding:'1rem'});

  // .first와 .last를 간단하게 css처리
  var fr = $('.first');
  var ls = $('.last');

  fr.css({backgroundColor:'#5a0'});
  ls.css({backgroundColor:'#0af'});

  // .base클릭 시 위치 이동
  conBox.children('.base').on('click', function(){
    conBox.prepend(fr);
    conBox.append(ls);
  });

  

  var news = $('#newsBox');
  var newsBase = news.children('.base');
  news.css({padding:'1rem', marginTop:'0.5rem', backgroundColor:'#faa'});
  newsBase.css({backgroundColor:'#0af', margin:'0.4rem auto', textAlign:'center'});

  // newBase 이전과 후에 생성
  newsBase.before('<p>.base 이전에 내용이 생성되었습니다.</p>');
  newsBase.before('<p>.base 이전에 두 번째 내용이 생성되었습니다.</p>');

  newsBase.after('<p>.base 이후에 내용이 생성되었습니다.</p>');
  newsBase.after('<p>.base 이후에 두 번째 내용이 생성되었습니다.</p>');

})(jQuery);