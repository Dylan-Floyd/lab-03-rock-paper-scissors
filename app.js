// import functions and grab DOM elements
import { didUserWin, getRandomObject } from './utils.js';

const resultH1 = document.getElementById('result-h1');
const winsSpan = document.getElementById('wins-span');
const lossesSpan = document.getElementById('losses-span');
const playButton = document.getElementById('play');
const resetButton = document.getElementById('reset');

const computerRockButton = document.getElementById('computer-rock');
const computerPaperButton = document.getElementById('computer-paper');
const computerScissorsButton = document.getElementById('computer-scissors');

// initialize global state
let wins;
let losses;
let computerObjectName;

function initializeGame() {
    wins = 0;
    losses = 0;
    computerObjectName = getRandomObject();
}

initializeGame();


function getResultString(result) {
    if (result === 'win') {
        return 'You won!';
    } else if (result === 'draw') {
        return 'It\'s a draw!';
    } else {
        return 'You lost!';
    }
}

function showComputersPick(computerObjectName) {
    if (computerObjectName === 'rock') {
        computerRockButton.checked = true;
    } else if (computerObjectName === 'paper') {
        computerPaperButton.checked = true;
    } else if (computerObjectName === 'scissors') {
        computerScissorsButton.checked = true;
    }
}

function showResult(result) {
    showComputersPick(computerObjectName);
    resultH1.textContent = getResultString(result);
    resultH1.className = '';
    winsSpan.textContent = 'Wins: ' + wins;
    lossesSpan.textContent = 'Losses: ' + losses;
    playButton.disabled = true;
}

// set event listeners 
    // get user input
    // use user input to update state 
    // update DOM to reflect the new state
playButton.addEventListener('click', () => {
    let usersPick = document.querySelector('.user-radio-buttons>div>input:checked');
    if (usersPick === null) {
        return;
    }
    let result = didUserWin(usersPick.value, computerObjectName);
    if (result === 'win') {
        wins++;
    } else if (result === 'lose') {
        losses++;
    }
    showResult(result);
});

resetButton.addEventListener('click', () => {
    resultH1.className = 'hidden';
    for (let el of document.querySelectorAll('input:checked')) {
        el.checked = false;
    }
    computerObjectName = getRandomObject();
    playButton.disabled = false;
});