new Vue({
  el: '#app',
  data: {
    currentQuote: '',
    currentQuoteAuthor: '',
    quotes_api_url:
      'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json',
    quotes_proxy_url: 'https://cryptic-thicket-75396.herokuapp.com/',
  },
  methods: {
    newQuote: function () {
      fetch(this.quotes_proxy_url + this.quotes_api_url)
        .then((response) => response.json())
        .then((quotes) => {
          this.currentQuote = quotes.quoteText;
          this.currentQuoteAuthor = quotes.quoteAuthor;
        });
    },
  },
});
