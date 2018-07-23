// gallery_modal_01.js

(function($){

  var mdBox = $('.modal_box');
  var mdBg = $('.modal_bg');
  var list = $('.list').children('li');

  // 처음 화면에서 모달박스가 보이지 않게 가려줌
  // js는 css가 구동된 뒤 구동되기 때문에 이 방식을 사용하면 약간의 갭이 생길 수 있음
  mdBox.hide();
  mdBg.hide();

  // 이미지 위치에 대한 주소(html 문서를 기준으로 한 위치)
  var addr = "../img/gallery/";
  var useImg = ["j01.jpg",
                "j02.jpg",
                "j03.jpg",
                "j04.jpg",
                "j05.jpg",
                "j06.jpg",
                "j07.jpg",
                "j08.jpg",
                "j09.jpg",
                "j10.jpg"]
  var useImgBig = ["j01_big.jpg",
                   "j02_big.jpg",
                   "j03_big.jpg",
                   "j04_big.jpg",
                   "j05_big.jpg",
                   "j06_big.jpg",
                   "j07_big.jpg",
                   "j08_big.jpg",
                   "j09_big.jpg",
                   "j10_big.jpg"]

  /*
  list.eq(0).children('a').css({backgroundImage:'url('+ addr + useImg[0] + ')'});
  list.eq(1).children('a').css({backgroundImage:'url('+ addr + useImg[1] + ')'});
  list.eq(2).children('a').css({backgroundImage:'url('+ addr + useImg[2] + ')'});
  list.eq(3).children('a').css({backgroundImage:'url('+ addr + useImg[3] + ')'});
  list.eq(4).children('a').css({backgroundImage:'url('+ addr + useImg[4] + ')'});
  list.eq(5).children('a').css({backgroundImage:'url('+ addr + useImg[5] + ')'});
  list.eq(6).children('a').css({backgroundImage:'url('+ addr + useImg[6] + ')'});
  list.eq(7).children('a').css({backgroundImage:'url('+ addr + useImg[7] + ')'});
  list.eq(8).children('a').css({backgroundImage:'url('+ addr + useImg[8] + ')'});
  list.eq(9).children('a').css({backgroundImage:'url('+ addr + useImg[9] + ')'});
  list.eq(10).children('a').css({backgroundImage:'url('+ addr + useImg[10] + ')'});
  */

  for (var i = 0; i < list.length; i += 1) {
    list.eq(i).children('a').css({backgroundImage:'url('+ addr + useImg[i] + ')'});
  };

  // 이런 식으로 $가 붙은 건 utility라고 얘기함...
  // $.each() (여러 개의 순서 또는 각각 처리하는 것, function(순서, 값){});

  $.each(useImg, function(index,value){
    console.log("i는: "+ index, 'v는: '+value);
  });
  
  /*
  useImg.forEach(function(value,index){
    console.log("js-i는: "+ index, 'v는: '+value);
  });
  */

  // list 클릭시 모달창 띄워서 처리
  list.on('click', ['a'], function(e){
    e.preventDefault();
    // console.log( $(this).index() );

    var thisI = $(this).index();

    mdBox.css({backgroundImage:'url(' + addr + useImgBig[thisI] + ')'});
    mdBox.fadeIn();
    mdBg.fadeIn();
  });

  mdBg.on('click', function(){
    mdBox.fadeOut();
    mdBg.fadeOut();
  });

})(jQuery);