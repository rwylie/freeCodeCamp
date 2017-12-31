
$(document).ready(function() {
  var theQuote = '';
  var theAuthor = '';
  newQuote();

  $('#b1').on("click", function() {
    newQuote();
  });

  $('#b2').on("click", function() {
    var twitterUrl = 'https://twitter.com/intent/tweet?text=' + theQuote + ' ' + theAuthor;
    window.open(twitterUrl, 'twitter');
    return false;
  });

  function newQuote() {
    var output = $.ajax({
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous',
      type: 'GET',
      data: {},
      dataType: 'json',
      success: function(data) {
        theQuote = data.quote;
        theAuthor = data.author;
        document.getElementById('quote').innerHTML = theQuote;
        document.getElementById('author').innerHTML = theAuthor;
      },
      error: function(err) {

        var quotes = {
          1: ['It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.', 'Jane Austen'],
          2: ['Ah! There is nothing like staying at home, for real comfort.', 'Jane Austen'],
          3: ['The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.', 'Jane Austen'],
          4: ['Friendship is certainly the finest balm for the pangs of disappointed love.', 'Jane Austen'],
          5: ['To be fond of dancing was a certain step towards falling in love.', 'Jane Austen']
        };
        var randomNumber = Math.ceil(Math.random() * Object.keys(quotes).length);

        $('#quote').text(quotes[randomNumber][0]);
        $('#author').text(quotes[randomNumber][1]);

      },
      beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Authorization", "4jlNBqqp8OmshfNhsD0lnbm7PNKgp1vNIo2jsntsxeBJx3iyG2"); 
      }
    });
  }
});
