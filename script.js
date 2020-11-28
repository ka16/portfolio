var homeBtn = $('.home-btn');
homeBtn.click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 500);
  return false;
});
