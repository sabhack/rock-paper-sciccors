let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('input');

// Computer options
let options = ['rock', 'paper', 'scissors'];

// Computer selection of random value from the 3 options
function computerPlay(randomChoice) {
    randomChoice = options[Math.floor(Math.random()*3)];
    return randomChoice;
}

// Disabling the button on first run
function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

// Outputting Computer selection
console.log(computerPlay(options));

// Get text input of the player
/**
 * function getInput() {
    let playerSelection = prompt('Select either 1 from 3: rock, paper, or scissors? by typing it');
    playerSelection = playerSelection.toLocaleLowerCase();

    // Validate the input to match what is required
    while(playerSelection != 'rock' && playerSelection != 'paper' && playerSelection != 'scissors') {
        playerSelection = prompt('Select either 1 from 3: rock, paper, or scissors? by typing it');
    }
    return playerSelection;
}
 */

// Function that Plays a Single Round of Rock Paper Scissors.
function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""

    // This case the Player wins
    if (    (playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'paper' && computerSelection === 'rock') || 
            (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore+= 1;
        result = (`Computer Lose! ${playerSelection} beats ${computerSelection} 
        <br><br>Player score: ${playerScore} <br>Computer score: ${computerScore}`); 

        if (playerScore === 5) {
            result += "<br><br>You won the game! Reload the page to play again"
            disableButtons()
        }
    }

// This case the Computer wins
    else if (playerSelection == computerSelection) {

        result = (`The Game is Tie Player selected ${playerSelection} and Computer selected ${computerSelection}
        <br><br>Player score: ${playerScore} <br>Computer score:  ${computerScore}`);
    }

    // A Tie: The selections are the same (Draw)
    else {
        computerScore += 1
        result = (`Player Lose! ${computerSelection} beats ${playerSelection} 
        <br><br>Player score: ${playerScore} <br>Computer score: ${computerScore}`);

        if (computerScore === 5) {
            result += "<br><br>You won the game! Reload the page to play again"
            disableButtons()
        }
    }

    document.getElementById('result').innerHTML = result
    return

}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})
