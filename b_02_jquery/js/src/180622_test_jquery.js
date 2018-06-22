// 180622_test_jquery.js

(function($){

  var wrap = $('#wrap');
  var h1 = $('h1');
  var h1InA = h1.children('a');
  var imgPlace = $('.img_place');
  var img = imgPlace.children('img');

  // #wrap
  wrap.css({padding:'0.5rem', width:'100%', height:'auto', backgroundColor:'#fa0'});

  // h1
  h1.css({width:'200px', height:'80px', backgroundColor:'#fff'});
  h1InA.css({display:'block', width:'100%', height:'100%'});

  imgPlace.css({margin:'auto', width:'800px', height:'auto', padding:'0.5rem', backgroundColor:'#fff'});
  img.css({width:'inherit', height:'auto'});


  var imgsrc = img.attr('src');

  img
    .on('mouseenter', function(){
    $(this).attr({src:'../img/basic01/bg_02.jpg'});
  })
    .on('mouseleave',function(){
    $(this).attr({src:imgsrc});
  });


})(jQuery);