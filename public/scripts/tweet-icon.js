$(document).ready(function() {
  const $tweet = $('article');
  $tweet.on('mouseenter', function() {
    $(this).addClass('hover');
  });
  $tweet.on('mouseleave', function() {
    $(this).removeClass('hover');
  });

  const $icon = $tweet.children('footer').children('div').children('.fa-solid');
  $icon.on('mouseenter', function() {
    $(this).addClass('hover');
  });
  $icon.on('mouseleave', function() {
    $(this).removeClass('hover');
  });
});