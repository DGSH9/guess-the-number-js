/**
* Guess The Number
* DONE: get user input and save in              = inputNumber
* DONE: generate 1 to 100 random number         = wholeNum -->      correctNumber
* DONE: compare user input with random number   = playGame()        (correctNumber with inputNumber)
* DONE: compare user input/random Numner in fun = displayresult()   (create function to comare )
* DONE: show result on browser                  = Dialog(), guessRight(), guessHigh(), guessLow()
* DONE: call function in displayresult
* DONE: iterate array and display
* DONE: restart           

**/

// creating empty array to store all the user input
let arr1 = []
//global store rando num in correctNumber
let correctNumber = getRandomNumber();

window.onload = function () {
    document.getElementById("number-submit").addEventListener("click", playGame);
    document.getElementById("restart-game").addEventListener("click", restartGame);
}


// user input number
function playGame() {
    let inputNumber = document.getElementById('number-guess').value;
    displayresult(inputNumber);
    arr1History(inputNumber);
    displayHistory()
}

// create function Too high, Too Low, Correct
function displayresult(inputNumber) {
    if (correctNumber == inputNumber) {
        // console.log("correct");
        guessRight();
    }
    else if (inputNumber < correctNumber) {
        // console.log("Too Low");
        guessLow()
    }
    else {
        // console.log("Too High");
        guessHigh();
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

// storing value in array for history
function arr1History(inputNumber) {
    arr1.push(inputNumber)
}


// display history
function displayHistory() {
    let i = arr1.length - 1;
    let list = "<ul class='list-group'>";

    while (i >= 0) {
        list += "<li class='list-group-item'>" +
            "You Enter : " + arr1[i] + "</li>";
        i -= 1;
    }

    list += '</ul>';
    document.getElementById("history").innerHTML = list;
}


// restart the game
function restartGame() {
    // reset the correct number(randome number)
    // reset result display
    // reset arr1
    // reset history
    correctNumber = getRandomNumber();
    document.getElementById("result").innerHTML = "";
    arr1 = [];
    displayHistory();

}