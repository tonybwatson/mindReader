Upon clicking a button, player moves to a different page.


Various page states in an array. 
Switch between pages when button clicked.
Reset button brings player back to start, resets randomSymbols()

Objects
    nextButton -  onclick, display next page in array and hide current
    restartButton - onclick, goes back to beginning of pagesArr
    page - holds information for what should be on page (several different ones)
    symbolString - string of symbols
    yourSymbol - specific symbol chosen for multiples of 9


Arrays
    pagesArr - holds page states
    symbolsArr - displays randomised symbols matched to numbers, multiples of 9 are yourSymbol

Variables
    

Functions
    pageSwitch() - display pagesArr(this page + 1)
    backToStart() - display pagesArr[0]
    randomSymbol() - chooses a random symbol from string of symbols and places at front of symbolsArr


START

INIT ()
    button
    restartButton
    page
    pages[]

Show first item in pagesArr
randomSymbol()
IF nextButton clicked, display next page in pagesArr and hide current page
IF restartButton clicked, go to pagesArr[0]
generate randomSymbol()
(repeats until page 4)
store randomSymbol
???
Profit
display symbolsArr
on page6, show randomSymbol; message "Your symbol is (randomSymbol)"; and restartButton


create mostly random array of numbers & symbols
for numbers between 1 & 99
    add number to array as (number: (randomSymbol))
IF array item is multiple of 9, replace with yourSymbol

backToStart()
    make current page hidden
    WHILE loop through items in array
        until firstPage is in first spot of array
    change firstPage to display: block