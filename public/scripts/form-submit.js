import { loadTweets } from './client.js';

$(document).ready(function() {

  const $form = $('.new-tweet').children('form');
  $form.submit(function(event) {
    $('.warning').slideUp();
    const inputText = $('#tweet-text').val();
    if (inputText.length > 0 && inputText.length <= 140) {
      $.post('/tweets', $(this).serialize())
      .then(function() {
        $('.tweet-container').empty();
        $('#tweet-text').val('');
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

  $('#tweet-text').focus(function() {
    $('.warning').slideUp();
  })

  $('.nav-right').click(function() {
    $('.new-tweet').slideToggle(function() {
      $('#tweet-text').focus();
    });
  });

});