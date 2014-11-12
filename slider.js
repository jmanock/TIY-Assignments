
$('.rightArrow').click(function(){
  $('.active').addClass('hidden').next().removeClass('hidden');
  $('.active').removeClass('active').next().addClass('active');
  $('.current').removeClass('current').next().addClass('current');
  $('.leftArrow').removeClass('hidden');
  if($('#sliderList > li:last').hasClass('active')){
    $('.rightArrow').addClass('hidden');
  }
});
$('.leftArrow').click(function(){
  $('active').addClass('hidden').prev().removeClass('hidden');
  $('.active').removeClass('active').prev().addClass('active');
  $('.current').removeClass('current').prev().addClass('current');
  $('.rightArrow').removeClass('hidden');
  if($('#sliderList > li:first' ).hasClass('active')){
    $('.leftArrow').addClass('hidden');
  }
});
// $('#img1').click(function(){
//   $('.active').addClass('hidden').removeClass('active');
//   $('#one').removeClass('hidden').addClass('active');
//   $('.current').removeClass('current');
//   $('#img1').addClass(' ');
//   $('.leftArrow').addClass('hidden');
//   $('.rightArrow').removeClass('hidden');
// });
//
// $('#img2').click(function(){
//   $('.active').addClass('hidden').removeClass('active');
//   $('#two').removeClass('hidden').addClass('active');
//   $(".current").removeClass('current');
//   $('.leftArrow', '.rightArrow').removeClass('hidden');
// });
