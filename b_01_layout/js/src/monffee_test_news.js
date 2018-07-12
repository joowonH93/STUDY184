// monffee_test_news.js

(function($){

  /*
    <반복기능을 사용하기 위해 알아야 할 몇 가지>

    - for(최초의 값; 조건; 증감){}   // forEach/each()
    - 배열 = [];
    - 객체 = {속성 : 속성값};
    - JSON방식 = 배열형식과 객체형식의 결합체
  */

  var addr = "../img/mongffee/new_menu/";

  /*
  var img = ['menu_01.png','menu_02.png','menu_03.png','menu_04.png','menu_05.png','menu_06.png','menu_07.png','default_menu.png'];
  var newsLink = ['news01.html','news02.html','news03.html','news04.html','news05.html','news06.html','news07.html'];
  var newsTitle = ['title01','title02','title03','title04','title05','title06','title07'];
  */

  var news = [
              {img:"menu_01.png", link:"news01.html", title:"title01", data:"news lorem ........"},
              {img:"menu_02.png", link:"news02.html", title:"title02", data:"news lorem ........"},
              {img:"menu_03.png", link:"news03.html", title:"title03", data:"news lorem ........"},
              {img:"menu_04.png", link:"news04.html", title:"title04", data:"news lorem ........"},
              {img:"menu_05.png", link:"news05.html", title:"title05", data:"news lorem ........"},
              {img:"menu_06.png", link:"news06.html", title:"title06", data:"news lorem ........"},
              {img:"menu_07.png", link:"news07.html", title:"title07", data:"news lorem ........"}
             ];

  /*
  $('.news_01').find('.news_img').css({backgroundImage:'url('+ addr + img[0] +')'})
  $('.news_02').find('.news_img').css({backgroundImage:'url('+ addr + img[1] +')'})
  $('.news_03').find('.news_img').css({backgroundImage:'url('+ addr + img[2] +')'})
  $('.news_04').find('.news_img').css({backgroundImage:'url('+ addr + img[3] +')'})
  $('.news_05').find('.news_img').css({backgroundImage:'url('+ addr + img[4] +')'})
  $('.news_06').find('.news_img').css({backgroundImage:'url('+ addr + img[5] +')'})
  $('.news_07').find('.news_img').css({backgroundImage:'url('+ addr + img[6] +')'})
  $('.news_08').find('.news_img').css({backgroundImage:'url('+ addr + img[7] +')'})
  */

  var best = $('#bestNews');
  var bestUl = best.find('ul');
  

  // html 복제해서 처리하는 방법
  var i=0;
  for (i; i < news.length; i+=1) {

    var bestLi = bestUl.find('li').eq(0).clone();

    bestUl.append(bestLi);
    var li = bestUl.children('li').eq(i);
    li.find('.news_img').css({backgroundImage:'url('+ addr + news[i].img +')'});
    li.find('a').attr({href:news[i].link});
    li.find('dt').text(news[i].title);
    li.find('dd').text(news[i].data);
  }
    bestUl.children('li').eq(news.length).remove();



  /*
  // li 자체를 생성해서 처리 하는 방법
  var i=0;

  for (i; i < img.length; i+=1) {
    bestUl.append('<li><a href="#"><div class="news_img"></div><dl><dt>???</dt><dd>======</dd></dl></a></li>');
    bestUl.children('li').eq(i).find('.news_img').css({backgroundImage:'url('+ addr + img[i] +')'});
  }

  bestUl.append('<li></li>');
  bestUl.find('li').eq(-1).css({backgroundImage:'url('+ addr + 'default_menu.png' +')', backgroundImage:'no-repeat'});
  */

})(jQuery);