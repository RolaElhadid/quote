// var btn = document.getElementById('btn');
// var output = document.getElementById('quote');
// var author = document.getElementById('author');

 var quotes = ['Be yourself everyone else is already taken. -Oscar wilde',
"“So many books, so little time.”― Frank Zappa",
"“A room without books is like a body without a soul.”― Marcus Tullius Cicero",
"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”― Bernard M. Baruch",
"“You only live once, but if you do it right, once is enough.”― Mae West",
"“Be the change that you wish to see in the world.”― Mahatma Gandhi",
"“In three words I can sum up everything I've learned about life: it goes on.”― Robert Frost",
"“If you tell the truth, you don't have to remember anything.”― Mark Twain",
"“A friend is someone who knows all about you and still loves you.”― Elbert Hubbard",
"“To live is the rarest thing in the world. Most people exist, that is all.”― Oscar Wilde"

 ]
 function newQuote(){
    var randomNum = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quote').innerHTML = quotes[randomNum];
 }

