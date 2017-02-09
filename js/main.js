$(document).ready(function () {
  $("a.scrollto").click(function () {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination - 70
    }, 800);
    return false;
  });
});
if ($('#back-to-top').length) {
  var scrollTrigger = 100,
    backToTop = function () {
      var scrollTop = $(window).scrollTop();
      var windowWidth = $(window).width();
      if (scrollTop > scrollTrigger) {
        $('#back-to-top').addClass('show');
      } else {
        $('#back-to-top').removeClass('show');
      }
    };
  backToTop();
  $(window).on('scroll', function () {
    backToTop();
  });
  $('#back-to-top').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
      scrollTop: 0
    }, 700);
  });
}