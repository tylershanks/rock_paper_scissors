console.log("Hello World!")


let values = ["Rock", 'Paper', 'Scissors'];
let computerChoice = ""; //computer rock paper or scissors
let playerChoice = ""; //player rock paper or scissors
let result = ""; //result of the individual game
let playerWins = 0;
let computerWins = 0;

// "new" buttons used for when the game restarts. "old" buttons are deleted and replaced
// by the restart button, then when the restart button is pressed, these "new" buttons
// are re added in. also creaeted the restart button here to be used later
let newRockButton = document.getElementById("rockButton")
let newPaperButton = document.getElementById("paperButton")
let newScissorsButton = document.getElementById("scissorsButton");
let restartButton = document.createElement("BUTTON");
        restartButton.id = 'restartButton';
        restartButton.textContent = "Play Again";

//listeners for all the buttons
document.getElementById("rockButton").addEventListener("click", rockButton);
document.getElementById("paperButton").addEventListener("click", paperButton);
document.getElementById("scissorsButton").addEventListener("click", scissorsButton);

//functions to run when buttons are clicked. changes player choice from
//empty string/previous choice to the new choice then calls the playRound function
function rockButton() {
    playerChoice = "rock"
    playRound();
}

function paperButton() {
    playerChoice = "paper"
    playRound();
}

function scissorsButton() {
    playerChoice = "scissors"
    playRound();
}

//randomly picks rps for the computer
function computerSelection(values) { 
    computerChoice = values[Math.floor(Math.random() * values.length)];
}

//old function for running this in the console
function playerSelection() { //prompts the user to pick rps, converts answer to a lowercase string
    playerChoice = prompt("Rock, paper, or scissors?").toLowerCase(); 
}

//resets wins to 0 both internally and visually, removes the restart button and adds
//the "new" rock paper scissors buttons
function restart() {
    playerWins = 0;
    computerWins = 0;
    document.getElementById('playerScore').innerHTML = playerWins;
    document.getElementById('computerScore').innerHTML = computerWins;
    document.getElementById('result').innerHTML = "Result";
    let topRow = document.querySelector('#topRow');
        topRow.removeChild(restartButton);
        topRow.appendChild(newRockButton);
        topRow.appendChild(newPaperButton);
        topRow.appendChild(newScissorsButton);
}

//removes "old" buttons and replaces them with a restart button. once the restart button
//is clicked, calls the restart function
function gameEnd() {
    const rockButton = document.getElementById("rockButton")
    rockButton.remove();

    const paperButton = document.getElementById("paperButton")
    paperButton.remove();

    const scissorsButton = document.getElementById("scissorsButton")
    scissorsButton.remove();
    
    let topRow = document.querySelector('#topRow');
    topRow.appendChild(restartButton);
    document.getElementById("restartButton").addEventListener("click", restart);

}

//called after user presses a rps button then calls for a random computer rps choice and 
//displays it. Then compares choices and displays relevant info
function playRound() {

    computerSelection(values);
    console.log(computerChoice);
    document.getElementById('computerChoice').innerHTML = computerChoice;
    //playerSelection();

    if (playerChoice == "rock" && computerChoice == "Scissors" || 
    playerChoice == "paper" && computerChoice == "Rock" || 
    playerChoice == "scissors" && computerChoice == "Paper") {
        result = "You win!";
        playerWins += 1;
        console.log(playerWins);
        document.getElementById('playerScore').innerHTML = playerWins;
        document.getElementById('result').innerHTML = "You win!";
    }

    else if (playerChoice == "rock" && computerChoice == "Paper" || 
    playerChoice == "paper" && computerChoice == "Scissors" || 
    playerChoice == "scissors" && computerChoice == "Rock") {
        result = "You lose :(";
        computerWins += 1;
        console.log(computerWins);
        document.getElementById('computerScore').innerHTML = computerWins;
        document.getElementById('result').innerHTML = "You lose :(";
    }

    else if (playerChoice == "rock" && computerChoice == "Rock" || 
    playerChoice == "paper" && computerChoice == "Paper" || 
    playerChoice == "scissors" && computerChoice == "Scissors") {
        result = "Tie!"
        document.getElementById('result').innerHTML = "Tie!";
    }

    if (playerWins == 5) {
        console.log ("You won 5 times!");
        document.getElementById('result').innerHTML = "You won 5 times!";
        gameEnd();
    }

    else if (computerWins == 5) {
        console.log("Computer won 5 times :(");
        document.getElementById('result').innerHTML = "Computer won 5 times :(";
        gameEnd();
    }

    //else {
    //    result = "That's not what was asked!";
    //}

}

//old way used in console
//checks if player/computer wins are up to 5. if neither is, play again. 
//if one reaches 5, reports the winner.
function game() { 
  
/*
    playRound();
        console.log(playerChoice);

        console.log(computerChoice);
        document.getElementById('computerChoice').innerHTML = computerChoice;

        console.log(result);

        console.log(playerWins);
        document.getElementById('playerScore').innerHTML = playerWins;

        console.log(computerWins);
        document.getElementById('computerScore').innerHTML = computerWins;

        game();
*/

    if (playerWins < 5 && computerWins < 5) {
        //playRound();
        console.log(playerChoice);

        console.log(computerChoice);
        document.getElementById('computerChoice').innerHTML = computerChoice;

        console.log(result);

        console.log(playerWins);
        document.getElementById('playerScore').innerHTML = playerWins;

        console.log(computerWins);
        document.getElementById('computerScore').innerHTML = computerWins;

        //game();
    }

    else if (playerWins == 5) {
        console.log ("You won 5 times!");
        alert("You won 5 times!");
    }

    else if (computerWins == 5) {
        console.log("Computer won 5 times :(");
        alert("Computer won 5 times :(");
    }
    
}