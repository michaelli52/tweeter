$(document).ready(function() {
  
  // Show scroll-to-top button when scrolled down
  $(window).scroll(function() {
    if($(window).scrollTop() >= 200) {
      $('#scroll-to-top').show();
    }
    if($(window).scrollTop() < 200) {
      $('#scroll-to-top').hide();
    }
  }) 
  
  // Scroll to the top of the web page when click scroll-to-top button 
  $('#scroll-to-top').click(function() {
    $(window).scrollTop(0);
    $(this).hide()
  })
});