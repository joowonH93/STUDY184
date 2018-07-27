// loadJson_01.js

(function($){

  $.getJSON("../etc/name.json", function(data){
    var a = data;
    console.log(a);

    var ty = $('.type1');
    for (var i=0; i < a.length; i+=1){
      ty.append('<li></li>');
      ty.children('li').eq(i).text( a[i].name + ' : ' + a[i].gender);
    }
  });

})(jQuery);

// load는 태그를 불러오는 것
// getJSON는 data를 갖는 것