// gallery_modal_01.js

(function($){

  var mdBox = $('.modal_box');
  var mdBg = $('.modal_bg');

  // 처음 화면에서 모달박스가 보이지 않게 가려줌
  // js는 css가 구동된 뒤 구동되기 때문에 이 방식을 사용하면 약간의 갭이 생길 수 있음
  mdBox.hide();
  mdBg.hide();

  // 이미지 위치에 대한 주소(html 문서를 기준으로 한 위치)
  var list = $('.list');
  var listLi = list.children('li');

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

  var i = $(this).index();
  





})(jQuery);