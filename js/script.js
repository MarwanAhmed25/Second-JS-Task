var quoteBtn = document.querySelector('button');
var quoteContainer = document.querySelector('#quote-section');
var quoteList = [
    {'author': 'Oscar Wilde', 'desc': 'Be yourself; everyone else is already taken'},
    {'author': "Marilyn Monroe", 'desc': "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my bes"},
    {'author': "Frank Zappa", 'desc': "So many books, so little time"},
    {'author': "Albert Einstein", 'desc': "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe"},
    {'author': "Marcus Tullius Cicero", 'desc': "A room without books is like a body without a soul"},
    {'author': "Bernard M. Baruch", 'desc': "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind"},
    {'author': "William W. Purkey", 'desc': "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth"},
    {'author': "Dr. Seuss", 'desc': "You know you're in love when you can't fall asleep because reality is finally better than your dreams"},
    {'author': "Mae West", 'desc': "You only live once, but if you do it right, once is enough"},
    {'author': "Mahatma Gandhi", 'desc': "Be the change that you wish to see in the world"},
    {'author': "Robert Frost", 'desc': "In three words I can sum up everything I've learned about life: it goes on"},
    {'author': "J.K. Rowling", 'desc': "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals"},

];

var randomNumber = 0;
quoteBtn.addEventListener('click', function(){
    quoteContainer.innerHTML = `<p class="m-auto fs-4 my-3">"${quoteList[randomNumber].desc}."</p>
            <span class="author text-secondary fs-5">-- ${quoteList[randomNumber].author}.</span>`
    randomNumber = getRandomNumber(randomNumber);
    console.log(randomNumber);
    

    
    
});


function getRandomNumber(lastNumber){
    var newNumber;
    do{
    newNumber = Math.floor(Math.random() * 10) % quoteList.length;
    }while(newNumber == lastNumber)
    return newNumber;
}