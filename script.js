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

$('.menu-icon').on('click' , function(){
    if ($('.menu-icon').hasClass('cross')){
    $('.menu-icon').removeClass('cross');
    $('.nav-list').slideUp();
    }
    else {
      $('.menu-icon').addClass('cross');
      $('.nav-list').slideDown();
    }
  });
