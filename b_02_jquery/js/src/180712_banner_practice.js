// 180712_banner_practice.js

var bannerF = $('#banner01');

var indiF = bannerF.children('.indicator');
var selF = indiF.children('.selector');
var selLiF = selF.children('li');
var liLengthF = selLiF.length;

var slideF = indiF.children('.slide_btn');
var slideBtnF = slideF.children('button');
var prevBtnF = slideF.children('.prev_btn')[0];
var nextBtnF = slideF.children('.next_btn')[0];
var bannerImgF = bannerF.find('.banner_img');

var i = 0;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

selLiF.on('click', function(event){
  event.preventDefault();
  var _this = $(this);
  i = $(this).index();
  var bannerSlide = i * -100 + '%';

  _this.addClass('active');
  _this.siblings().removeClass('active');

  bannerImgF.stop().animate({marginLeft:bannerSlide});

});

slideBtnF.on('click', function(event){
  event.preventDefault();
  var _this = $(this)[0];
  i = $(this).index();
  var bannerSlide = i * -100 + '%';

  if ( _this === prevBtnF && i > 0 ){
    i -= 1;
  } else if ( _this === nextBtnF && i < liLengthF ){
    i += 1;
  };

  selLiF.eq(i).addClass('active');
  selLiF.eq(i).siblings().removeClass('active');

  bannerImgF.stop().animate({marginLeft:bannerSlide});

});







// var banner02 = $('#banner02');