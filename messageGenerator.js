/*
CodeAcademy Portfolio - Mixed Messages
 Coded by Lloyd; January 26th 2021

 ---- TASK: ----
    - Message Generator
    - Run Program > Outputs Random Message
    - Comprised of three segments in Output

 ---- REQUIREMENTS: ----
    - Javascript
    - Git version Control
    - Command Line

 ---- TOPIC: 'Butchered' Movie Quotes----
    - 'No, I am your father!'
    - 'RAAARGH, Get to the Chopper!'
    - 'Uh say Jarvis, is it that time?'
*/

// Define Quotes in Arrays
const quote1 = ["No,", " I am your ", "father!"]
const quote2 = ["RAAARGH,", " get to the ", "Chopper!"]
const quote3 = ["Jarvis,", " check the ", "heart!"]
// console.log(quote1[0] + quote2[1] + quote3[2])

const movieQuotes = {
    quote1: ["No,", " I am your ", "father!"],
    quote2: ["RAAARGH,", " get to the ", "Chopper!"],
    quote3: ["Jarvis,", " check the ", "heart!"]
}

const msgRandomiser = (quotes) => {

    output = []

    let loopPos = 0;
    while (loopPos < 3){

        randInt = Math.floor(Math.random() * 3);
        
    switch (randInt){
        case 0:
        randomQuote = movieQuotes.quote1[loopPos];
        break;
    case 1:
        randomQuote = movieQuotes.quote2[loopPos];
        break;
    case 2:
        randomQuote = movieQuotes.quote3[loopPos];
        break;
    }
    output.push(randomQuote);
    loopPos++;
    }
    console.log('"' + output[0] + output[1] + output[2] + '"')
}
console.log("Here is a randomised butchered quote from 3 different films:")
console.log("No, I am your father!\nRAAARGH, get to the Chopper!\nJarvis, check the heart!\n\nShuffled Output:")
msgRandomiser(movieQuotes);