console.log("Hello World!")


let values = ["Rock", 'Paper', 'Scissors'];
let computerChoice = ""; //computer rock paper or scissors
let playerChoice = ""; //player rock paper or scissors
let result = ""; //result of the individual game
let playerWins = 0;
let computerWins = 0;



document.getElementById("rockButton").addEventListener("click", rockButton);
document.getElementById("paperButton").addEventListener("click", paperButton);
document.getElementById("scissorsButton").addEventListener("click", scissorsButton);

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

function computerSelection(values) { //randomly picks rps for the computer
    computerChoice = values[Math.floor(Math.random() * values.length)];
}

function playerSelection() { //prompts the user to pick rps, converts answer to a lowercase string
    playerChoice = prompt("Rock, paper, or scissors?").toLowerCase(); //old way in console
}

function playRound() { //function to get a random comp selection, user prompted selection, and checks who won

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
    }

    else if (playerChoice == "rock" && computerChoice == "Paper" || 
    playerChoice == "paper" && computerChoice == "Scissors" || 
    playerChoice == "scissors" && computerChoice == "Rock") {
        result = "You lose :(";
        computerWins += 1;
        console.log(computerWins);
        document.getElementById('computerScore').innerHTML = computerWins;
    }

    else if (playerChoice == "rock" && computerChoice == "Rock" || 
    playerChoice == "paper" && computerChoice == "Paper" || 
    playerChoice == "scissors" && computerChoice == "Scissors") {
        result = "Tie!"
    }

    if (playerWins == 5) {
        console.log ("You won 5 times!");
        alert("You won 5 times!");
    }

    else if (computerWins == 5) {
        console.log("Computer won 5 times :(");
        alert("Computer won 5 times :(");
    }

    //else {
    //    result = "That's not what was asked!";
    //}

}

function game() { //checks if player/computer wins are up to 5. if neither is, play again. if one reaches 5, reports the winner
  
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