$(document).ready(function() {
  $(window).scroll(function() {
    if($(window).scrollTop() >= 200) {
      $('#scroll-to-top').show();
    }
    if($(window).scrollTop() < 200) {
      $('#scroll-to-top').hide();
    }
  }) 
  
  $('#scroll-to-top').click(function() {
    $(window).scrollTop(0);
    $(this).hide()
  })
});