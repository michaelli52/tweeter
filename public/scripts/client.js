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
          <img src="${escapeText(tweet.user.avatars)}"/>
          <label>${escapeText(tweet.user.name)}</label>
        </div>
        <div class="handle">
          ${escapeText(tweet.user.handle)}
        </div>
      </header>
      <text>
        ${escapeText(tweet.content.text)}
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

export const loadTweets = function() {
  $.get('/tweets', (data) => {
    renderTweets(data.reverse());
  });
};

const escapeText = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

$(document).ready(function() {
  loadTweets();
});
