$(function() {
  const header = $('#header');
  header.hide();
  $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        header.show();
      } else {
        header.hide();
      }
  });
});