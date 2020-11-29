var homeBtn = $('.home-btn');
homeBtn.click(function() {
  $('body, html').animate({
    scrollTop: 0
  }, 500);
  return false;
});

$('header .nav-list a').click(function() {
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({            
      'scrollTop': position             
    }, 500);
    return false;
  });
