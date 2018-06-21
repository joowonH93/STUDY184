// 180621_test_01.js

(function($){

  var ctBox = $(".content_t_box");
  var cpBox = $(".content_p_box");

  var oc = ctBox.children(".open_close_btn");
  var ocBtn = oc.children("button");
  var openBtn = ctBox.children(".open_btn");
  var closeBtn = ctBox.children(".close_btn");

  closeBtn.on("click", function(e){
    e.preventDefault();
    // 

  });

})(jQuery);