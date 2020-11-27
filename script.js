// $(function() {
//   $('#my-image').hide().fadeIn(1000);
//
//   $('.txt-info-ttl').hide().fadeIn(1000);
//
//   $('.furigana').hide().fadeIn(2000);
//   $('.name').hide().fadeIn(2000);
//   $('.text').hide().fadeIn(3000);
//
//   $('.skil-box').hide().fadeIn(4000);
// })

var homeBtn = $('.home-btn');
homeBtn.click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 500);
  return false;
});

var aboutBtn = $('.about-btn');
aboutBtn.click(function () {
  $('body,html').animate({
    scrollTop: 830
  }, 500);
  return false;
});

var serviceBtn = $('.service-btn');
serviceBtn.click(function () {
  $('body,html').animate({
    scrollTop: 1745
  }, 500);
  return false;
});

var worksBtn = $('.works-btn');
worksBtn.click(function () {
  $('body,html').animate({
    scrollTop: 2660
  }, 500);
  return false;
});

var contactBtn = $('.contact-btn');
contactBtn.click(function () {
  $('body,html').animate({
    scrollTop: 3492
  }, 500);
  return false;
});

$(function() {
  $('.menu-icon').click(function() {
    $('.nav-list').show();
  })
});

// $(function(){
//     $('.about-btn').click(function() {
//     // スクロールの速度
//     var speed = 400; // ミリ秒で記述
//     var href= $(this).attr(".about-me");
//     var target = $(href == "#" || href == "" ? 'html' : href);
//     var position = target.offset().top;
//     $('body,html').animate({scrollTop:position}, speed, 'swing');
//     return false;
//   });
// });

// $("#about-btn").click(function () {
//
//       const position = $('#about-me').offset().top;
//       const speed = 200;
//       $("html,body").animate({scrollTop:position},speed);
//     });
