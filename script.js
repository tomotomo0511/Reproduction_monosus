// $(function() {
//   alert("jQueryが正常に動作しています！");
// });

$(function() {
  $('#header').hide();
});

$(function() {
  $(window).scroll(function() {
    $('#header').show();
  });
});