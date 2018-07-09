// 180709_form_test.js

(function($){
  // .show_btn 클릭해서, form영역을 보이고 사라지게 만들기

  var btn = $('.show_btn');
  var form = $('#member');

  btn.on('click', function(e){ // .show_btn(변수 btn)을 클릭하면 이 함수를 시행해라
    e.preventDefault(); // button에 들어있는 (선행된)이벤트를 제거해라

    form.stop().slideToggle(500, function(){ 
    // btn을 누르면 form 슬라이드 토글시행 되는데(슬라이드up+down) 0.5초가 걸림
      var formView = $(this).css('display');
      // formView는 $(this)=form의 css 상 display 상태를 파악해서 가져오는 변수

      if(formView == 'none') {
        // 변수 formView가 파악한 form이 display:none 상태(form이 슬라이드up해서 보이지 않게 된 상태)라면
      btn.find('button').text('열기');
      // btn의 button 태그에 쓴 글을 열기로 바꿔주고,
      btn.find('button').addClass('close');
      // btn의 button 태그에 class close를 추가해준다(.close는 :before이고 {content:"\f0d7";}로 다른 클리픽콘 모양으로 써놨음)
    } else {
      // 변수 formView에서 파악한 form이 display:block 상태라면
      btn.find('button').text('닫기');
      // btn에서 button태그에 들어간 글자를 닫기라고 써주고
      btn.find('button').removeClass('close'); 
      // btn에서 button태그를 찾아 class close를 제거해준다.
      // 그럼 글리픽콘은 원래 상태대로 {content:"\f0d8";})로 설정 됨
    }
  });
  // 함수가 한꺼번에 처리되는 것이 아니라
  // form영역이 완전히 slideUp된 뒤에 열기버튼이 나오게 하려고 콜백함수를 사용

  // 콜백함수 : 메소드 하나의 함수 안에서 다시 함수를 불러옴
  // 애니메이션을 가진 함수는 시간차를 두고 함수를 불러올 수 있따
    

  });
  // btn 클릭 시의 함수(9번줄) 닫음~


})(jQuery);