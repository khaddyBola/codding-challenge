'use strict';

// Application State Variables
// const secretNumber = Math.trunc(Math.random() * ( 20 +1));
// console.log(secretNumber)
let score = 20;
let highScore = 0;

function displayMessage (msg) {
    message.textContent = msg;
}

function secretNumberFN() {
    return Math.trunc(Math.random() * ( 20 +1));
}

let secretNumber = secretNumberFN()
console.log(secretNumber)

// const secretNumber = function () {
//     return Math.trunc(Math.random() * ( 20 +1));
// }
// console.log(secretNumber());

// document.querySelector('.message');
// document.querySelector('.guess');
// console.log(document.querySelector('.check'));

// Selecting DOM Elements
const checkBtn = document.querySelector('.check');
const resetBtn = document.querySelector('.again');
const guessNumber = document.querySelector('.guess');
const message = document.querySelector('.message');
const mark = document.querySelector('.number');
const scoreCard = document.querySelector('.score');
const highscoreUI = document.querySelector('.highscore');
const body = document.body;



// Creating Events
checkBtn.addEventListener('click', function() {
    // Getting Number from Input
    const newGuessNum =Number (guessNumber.value);

    // When Input is empty
    if (!newGuessNum) {
        message.textContent = ' ⛔ No Number';

        // When Input Number is correct
    } else if (newGuessNum === secretNumber) {
        displayMessage('👍 Correct Number');
        body.style.backgroundColor = '#60b347';
        mark.style.width = '35rem';
        mark.textContent = newGuessNum;

        if (score > highScore) {
            highScore = score;
        }

        // When Input Number is below the secret Number
    } else if (newGuessNum < secretNumber) {
        if (score > 1) {
            message.textContent = '📉 Too low';
            score--;
            scoreCard.textContent = score;
        } else {
            message.textContent = '💥 Game over';
            score = 0;
            scoreCard.textContent = score;
        }

         // When Input Number is above the secret Number
    } else if (newGuessNum > secretNumber) {
        if (score > 1) {
            message.textContent = '📈 Too high';
            score--;
            scoreCard.textContent = score;
        } else {
            message.textContent = '💥 Game over';
            score = 0;
            scoreCard.textContent = score;
        }
    } 
})

// Res
resetBtn.addEventListener('click', function() {
    displayMessage('start guessing...')
    secretNumberFN();
    mark.textContent = '?'
    score = 20;
    scoreCard.textContent = score;
    body.style.backgroundColor = '#222';
    mark.style.width = '15rem';
    guessNumber.value = '';
    highscoreUI.textContent = highScore;

})

