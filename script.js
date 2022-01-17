/**
* Guess The Number
* DONE: get user input and save in              = inputNumber
* DONE: generate 1 to 100 random number         = wholeNum -->      correctNumber
* DONE: compare user input with random number   = playGame()        (correctNumber with inputNumber)
* DONE: compare user input/random Numner in fun = displayresult()   (create function to comare )
* DONE: show result on browser                  = Dialog(), guessRight(), guessHigh(), guessLow()


**/

//global store rando num in correctNumber
let correctNumber = getRandomNumber();

window.onload = function () {
    document.getElementById("number-submit").addEventListener("click", playGame);
}


// user input number
function playGame() {
    let inputNumber = document.getElementById('number-guess').value;
    displayresult(inputNumber);
}

// create function Too high, Too Low, Correct
function displayresult(inputNumber) {
    if (correctNumber == inputNumber) {
        console.log("correct");
    }
    else if (inputNumber < correctNumber) {
        console.log("Too Low");
    }

    else {
        console.log("Too High");
    }
}


// generate random number
function getRandomNumber() {
    let x = Math.random();
    let wholeNum = Math.floor(x * 100) + 1;
    return wholeNum;
}




// Retrieve the dialog based on if the guess is wrong or correct 
function Dialog(type, text) {
    let dialog;
    switch (type) {
        case "warning":
            dialog = "<div class='alert alert-warning' role='alert'>"
            break;
        case "won":
            dialog = "<div class='alert alert-success' role='alert'>"
            break;
    }
    dialog += text;
    dialog += "</div>"
    return dialog;
}

// correcr guess
function guessRight() {
    const text = "Awesome You got the Number";

    let dialog = Dialog('won', text);
    document.getElementById("result").innerHTML = dialog;
}


// for guess is High
function guessHigh() {
    const text = "Your Guess is High";
    let dialog = Dialog('warning', text);
    document.getElementById("result").innerHTML = dialog;
}

// for guess is Low
function guessLow() {
    const text = "Your Guess is Low";
    let dialog = Dialog('warning', text);
    document.getElementById("result").innerHTML = dialog;
}





