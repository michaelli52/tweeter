import { loadTweets } from './client.js';

$(document).ready(function() {

  // Handle tweet submit and show error message if input is empty or text length is more than 140 characters.
  const $form = $('.new-tweet').children('form');
  $form.submit(function(event) {
    $('.warning').slideUp();
    const inputText = $('#tweet-text').val();
    const $counter = $('#tweet-text').parent().children('div').children('output');
    if (inputText.length > 0 && inputText.length <= 140) {
      $.post('/tweets', $(this).serialize())
      .then(function() {
        $('.tweet-container').empty();
        $('#tweet-text').val('');
        $counter.val(140);
        loadTweets();
      });
    }
    if (inputText.length > 140) {
      $('.warning').children('text').text('Exceeded maximum number of characters');
      $('.warning').slideDown();
    }
    if (inputText.length === 0) {
      $('.warning').children('text').text('Input can not be empty');
      $('.warning').slideDown();
    }
    event.preventDefault();
  });

  // Clear error message when ready to type again
  $('#tweet-text').focus(function() {
    $('.warning').slideUp();
  })

  // Toggle new tweet textarea when click button. Focus on textarea automatically when shown.
  $('.nav-right').click(function() {
    $('.new-tweet').slideToggle(function() {
      $('#tweet-text').focus();
    });
  });

});