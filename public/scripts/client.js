/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const createTweetElement = function(tweet) {
  const $tweetElement = $(
    `
    <article class="tweet">
      <header>
        <div>
          <img src="${tweet.user.avatars}"/>
          <label>${tweet.user.name}</label>
        </div>
        <div class="handle">
          ${tweet.user.handle}
        </div>
      </header>
      <text>
        ${tweet.content.text}
      </text>
      <footer>
        <div>
          ${timeago.format(tweet.created_at)}
        </div>
        <div>
          <i class="fa-solid fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
  </article>
  `
  );
  return $tweetElement;
};

const renderTweets = function(tweets) {
  for (const tweet of tweets) {
    const $tweetElement = createTweetElement(tweet);
    $('.tweet-container').append($tweetElement);
  }
};

const loadTweets = function() {
  $.get('/tweets', (data) => {
    renderTweets(data.reverse());
  });
};

$(document).ready(function() {
  loadTweets();

  const $form = $('.new-tweet').children('form');

  $form.submit(function(event) {
    const inputText = $('#tweet-text').val();
    if (inputText.length > 0 && inputText.length <= 140) {
      $.post('/tweets', $(this).serialize())
      .then(function() {
        $('.tweet-container').empty();
        loadTweets();
      });
    }
    if (inputText.length > 140) {
      alert('Exceeded maximum of characters.');
    }
    if (inputText.length === 0) {
      alert('Input can not be empty.')
    }
    event.preventDefault();
  });
});

