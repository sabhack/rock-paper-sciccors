// Computer options
const options = ['rock', 'paper', 'scissors'];

// Computer selection of random value from the 3 options
function computerPlay(randomChoice) {
    randomChoice = options[Math.floor(Math.random()*3)];
    return randomChoice;
}

// Outputting Computer selection
console.log(computerPlay(options));

// Function that Plays a Single Round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection) {
    // This case the Player wins
    if (    (playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'paper' && computerSelection === 'rock') || 
            (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        return `Computer Lose! ${playerSelection} beats ${computerSelection}`; 
    }
    
    // This case the Computer wins
    else if ( (computerSelection === 'rock' && playerSelection === 'scissors') ||
              (computerSelection === 'paper' && playerSelection === 'rock') ||
              (computerSelection === 'scissors' && playerSelection === 'paper')
    ) {
        return `Player Lose! ${computerSelection} beats ${playerSelection}`;
    }

    // A Tie: The selections are the same (Draw)
    else {
        return `The Game is Tie Player selected ${playerSelection} and Computer selected ${computerSelection}`;
    }
}

let playerSelection = "rock";
playerSelection.toLocaleLowerCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));