let playerScore = 0;
let computerScore = 0;

// Computer options
const options = ['rock', 'paper', 'scissors'];

// Computer selection of random value from the 3 options
function computerPlay(randomChoice) {
    randomChoice = options[Math.floor(Math.random()*3)];
    return randomChoice;
}

// Outputting Computer selection
console.log(computerPlay(options));

// Get text input of the player
function getInput() {
    let playerSelection = prompt('Select either 1 from 3: rock, paper, or scissors? by typing it');
    playerSelection = playerSelection.toLocaleLowerCase();

    // Validate the input to match what is required
    while(playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
        playerSelection = prompt('Select either 1 from 3: rock, paper, or scissors? by typing it');
    }
    return playerSelection;
}

// Function that Plays a Single Round of Rock Paper Scissors.
function playRound(playerSelection, computerSelection) {
    // This case the Player wins
    if (    (playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'paper' && computerSelection === 'rock') || 
            (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++;
        console.log(`Computer Lose! ${playerSelection} beats ${computerSelection}`); 
    }
    
    // This case the Computer wins
    else if ( (computerSelection === 'rock' && playerSelection === 'scissors') ||
              (computerSelection === 'paper' && playerSelection === 'rock') ||
              (computerSelection === 'scissors' && playerSelection === 'paper')
    ) {
        computerScore++;
        console.log(`Player Lose! ${computerSelection} beats ${playerSelection}`);
    }

    // A Tie: The selections are the same (Draw)
    else {
        console.log(`The Game is Tie Player selected ${playerSelection} and Computer selected ${computerSelection}`);
    }
}

// Creating a function to play 5 rounds of the game
function game(){
    
    for(let i = 0; i < 5; i++) {
        //keeping store of the selected value for player
        let playerSelection = getInput();

        //keeping store of the selected value for computer
        let computerSelection = computerPlay();

        //keeping store of the result of each round
    }
}

const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
