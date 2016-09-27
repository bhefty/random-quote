// Set quotes
var quoteArr = [
  '"The power of imagination makes us infinite." ~ John Muir',
  '"Don\’t regret the past, just learn from it." ~ Ben Ipock',
  '"Life is trying things to see if they work." ~ Ray Bradbury',
  '"It does not matter how slowly you go as long as you do not stop." ~ Confucius',
  '“I\’m sorry, Dave. I\’m afraid I can\’t do that.” ~ HAL',
  '“If I\’m not back in five minutes, just wait longer.” ~ Ace Ventura',
  '"I find your lack of faith disturbing." ~ Darth Vader'
];

$(document).ready(function() {
  $('body').css('display', 'none');
  $('body').fadeIn(500);
  newQuote();
  colorChange();
});

function Reload() {
  try {
    var headElement = document.getElementsByTagName("head")[0];
    if (headElement && headElement.innerHTML)
      headElement.innerHTML += "<meta http-equiv=\"refresh\" content=\"1\">";
  } catch (e) {}
}

function fadeFirst() {
  colorChange();
  $('body').fadeOut('slow', newQuote);
};

function newQuote() {
  var randomIndex = Math.floor(Math.random() * quoteArr.length);
  $('body').fadeIn('slow');
  $('.quote').text(quoteArr[randomIndex]);

  $('.twitter-share-button').attr("href", "https://twitter.com/intent/tweet?text=" + quoteArr[randomIndex]);

}

function colorChange() {
  var colors = ["#6B8EB2", "#6b8eb2", "#b26b8e", "#8eb26b", "#6c6bb2",
    "#475935", "#99ccff", "#ff99cc", "#e7d99d"
  ];
  var newColor = colors[Math.floor(Math.random() * (colors.length))];
  //Change color of body, buttons and text
  $("body").css("background-color", newColor);

}

/* On button click, fade out then fade in new quote */
$("#getQuote").click(fadeFirst);
