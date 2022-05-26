$(document).ready(function() {
  
  $('#tweet-text').on('input', function() {
    const textLength = $(this).val().length;
    const $counter = $(this).parent().children('div').children('output');
    if (140 - textLength < 0) {
      $counter.addClass('invalid');
    } else {
      $counter.removeClass('invalid');
    }
    $counter.val(140 - textLength);
  })

});

