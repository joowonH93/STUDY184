// 180626_jw.js

(function($){

  var newList = $(".new_list");

  newList.wrap('<div><div>');
  newList.parent('div').attr({'id=news'});
  // newList.append('<li>list value 01 생성하기</li>');

  for (var a=0; a <= 5; a += 1){
    newList.append('<li>list value 0'+'a'+' 생성하기');}

})(jQuery);