// create variables for all pages
let pageOne = document.getElementById('pageOne');
let pageTwo = document.getElementById('pageTwo');
let pageThree = document.getElementById('pageThree');
let pageFour = document.getElementById('pageFour');
let pageFive = document.getElementById('pageFive');
let pageSix = document.getElementById('pageSix');

// create array of pages
var pagesArr = [
];

function init() {
    pagesArr = [
    pageOne,
    pageTwo,
    pageThree, 
    pageFour,
    pageFive,
    pageSix
    ];
    setYourSymbol();
    setSymbols();
}
// create string for randomString
var symbolString = '!@#$%^&*()_-+=?';

// variable for first and last items in array
var firstItem = pagesArr[0];
var lastItem = pagesArr[pagesArr.length - 1];

// function to make pages visible
function pageSwitch() {
    // move first page to end of array, second page to front of array
    var firstToLast = pagesArr.push(pagesArr[0]);
    var lastFirst = pagesArr.shift();
    // console.log(pagesArr);

    // make first page in array visible, last page invisible
    var firstItem = pagesArr[0];
        firstItem.style.display = "block";
    var lastItem = pagesArr[pagesArr.length - 1];
        lastItem.style.display = "none";
}

// generate random symbol from symbolString
function randomSymbol() {
    // variable to grab letter from symbolString by running Math.random rounded down multiplied by length of symbolString
   var randSymbol = symbolString[Math.floor(Math.random() * symbolString.length)];
   return randSymbol;
} 
console.log(randomSymbol())
var yourSymbol = randomSymbol();
console.log(yourSymbol)

// array to hold symbols to display
var symbolArr = [];

// loop through numbers 1-99, format and push to symbolArr
for (let i = 0; i <= 99; i++) {
    var currentString = "";
    if (i % 9 === 0) {
        currentString = i + ": " + yourSymbol;
    } else {
        currentString = i + ": " + randomSymbol();
    }
    symbolArr.push('<br>' + currentString);
    
    } console.log(symbolString);
    

    // symbol to match to multiples of 9
function setYourSymbol() {
    document.getElementById('yourSymbol').innerHTML = yourSymbol;
}

setYourSymbol();

// set random symbols in array
function setSymbols() {
    document.getElementById('symbolArr').innerHTML = symbolArr;
}



