// $(function() {
//   alert("jQueryが正常に動作しています！");
// });

// $(function() {
//   $('#header').hide();
// });

// $(function() {
//   $(window).scroll(function() {
//     $('#header').show();
//   });
// });

$(function() {   
  $('#header').hide();
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#header').show();
      } else {
        $('#header').hide();
      }
  });
});

// $(function() {
//   var topHeader = $('#header');    
//   topHeader.hide();
//   //スクロールが100に達したらボタン表示
//   $(window).scroll(function () {
//       if ($(this).scrollTop() > 100) {
//         topHeader.show();
//       } else {
//         topHeader.hide();
//       }
//   });
//   //スクロールしてトップ
//   topHeader.click(function () {
//       $('body,html').animate({
//           scrollTop: 0
//       }, 500);
//       return false;
//   });
// });

$('#header').click(function () {
  $('body,html').animate({
      scrollTop: 0
  }, 500);
  return false;
});