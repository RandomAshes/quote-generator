// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Array of quotes
var arrQuotes = [
    {
        'quote': 'Tears water the garden of our heart and allow the rainbows of healing to come out and shine.',
        'source': 'Kandee Johnson',
        'citation': '',
        'year': '',
        'tags': 'female, inspirational, healing'
    },
    {
        'quote': 'You are not a burden, an accident, or a mistake. You are meant for amazing things that you can\'t even imagine for yourself.',
        'source': 'Lacey Sturm',
        'citation': '',
        'year': '',
        'tags': 'female, inspirational, purpose'
    },
    {
        'quote': 'For beautiful eyes, look for the good in others; for beautiful lips, speak only words of kindness; and for poise, walk with the knowledge that you are never alone.',
        'source': ' Audrey Hepburn',
        'citation': '',
        'year': '',
        'tags': 'female, inspirational, beautiful, beauty'
    },
    {
        'quote': 'Your life is your story. Write well. Edit often.',
        'source': 'Susan Statham',
        'citation': '',
        'year': '',
        'tags': ''
    },
    {
        'quote': 'Great minds discuss ideas; average minds discuss events; small minds discuss people.',
        'source': 'Eleanor Roosevelt',
        'citation': '',
        'year': '',
        'tags': ''
    },
    {
        'quote': 'Whenever you find yourself doubting how far you can go, just remember how far you have come. Remember everything you have faced, all the battles you have won, and all the fears you have overcome.',
        'source': 'Unknown',
        'citation': '',
        'year': '',
        'tags': ''
    },
    {
        'quote': 'Eventually soulmates meet, for they have the same hiding place.',
        'source': 'Robert Brault',
        'citation': '',
        'year': '',
        'tags': ''
    },
    {
        'quote': 'I believe in Christianity as I believe that the sun has risen: not only because I see it, but because by it I see everything else.',
        'source': 'C. S. Lewis',
        'citation': '',
        'year': '',
        'tags': 'christianity, believe'
    }
];

// VARIABLES
var randomNum, changeQuote,

    // get number of quotes in quotes array (arrQuotes)
    numOfQuotes = arrQuotes.length,

    // create array to store used quote indexes
    arrNum = [];


// When Button gets clicked...
function printQuote() {

    // If changeQuote setInterval has been run, CLEAR IT
    clearInterval(changeQuote);

    // If the number of quotes in arrQuotes === the number of quotes used,
    if ( numOfQuotes === arrNum.length  ) {

        // then clear arrNum
        // so quotes can be rotated through again
        arrNum = [];
    }

    // CHANGE BACKGROUND COLOR:
    // Get random color
    var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});

    // Change background color to the random color
    document.body.style.backgroundColor = randomColor;


    // GET RANDOM QUOTE
    var quoteObj = getRandomQuote();

    // Create HTML string to update page:
    // Quote
    var printHtml = ' <p class="quote">' + quoteObj.quote + '</p>';

    // Source ( quote author)
    printHtml += '<p class="source">' + quoteObj.source;

    // If quote object includes a citation
    if ( quoteObj.citation !== '' ) {

        // Citation
        printHtml += '<span class="citation">' + quoteObj.citation + '</span> ';
    }

    // If quote object includes a year
    if ( quoteObj.year !== '' ) {

        // Year
        printHtml += '<span class="year">' + quoteObj.year + '</span> ';
    }

    // closing p tag
    printHtml += '</p>';

    // If quote object includes any tags
    if ( quoteObj.tags !== '' ) {

        // Year
        printHtml += '<p>' + quoteObj.tags + '</p> ';
    }

    // Grab current HTML
   var currentQuote = document.getElementById('quote-box').innerHTML;

    // Replace it with new html (new random quote)
    document.getElementById('quote-box').innerHTML =
        document.getElementById('quote-box').innerHTML.replace( currentQuote, printHtml);

    // Start automatic quote rotation
    // ***quote will change every 15 seconds.
    startSetInt();
}

function getRandomQuote() {

    do {
        // pick random number from 1 to the number of quotes
        randomNum =  Math.floor( Math.random() * numOfQuotes );

        // If the arrNum array doesn't already include the random number,
    } while ( arrNum.includes(randomNum) );

    // then add the number to the arrNum array
    // to keep track of which numbers have been used
    arrNum.push(randomNum);

    // Use the random number to get the corresponding quote from arrQuotes
    // and return that quote
    return arrQuotes[ randomNum ];
}

function startSetInt() {

    // Change quote every 15 seconds
    changeQuote = setInterval(function () {

        printQuote();
    }, 15000);

}
