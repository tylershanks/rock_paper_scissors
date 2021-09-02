console.log("Hello World!")


let values = ["rock", 'paper', 'scissors'];
let computerChoice = ""; //computer rock paper or scissors
let playerChoice = ""; //player rock paper or scissors
let result = ""; //result of the individual game
let playerWins = 0;
let computerWins = 0;

function computerSelection(values) { //randomly picks rps for the computer
    computerChoice = values[Math.floor(Math.random() * values.length)];    
}

function playerSelection() { //prompts the user to pick rps, converts answer to a lowercase string
    playerChoice = prompt("Rock, paper, or scissors?").toLowerCase();
}

function playRound() { //function to get a random comp selection, user prompted selection, and checks who won

    computerSelection(values);
    playerSelection();

    if (playerChoice == "rock" && computerChoice == "scissors" || 
    playerChoice == "paper" && computerChoice == "rock" || 
    playerChoice == "scissors" && computerChoice == "paper") {
        result = "You win!";
        playerWins += 1;
    }

    else if (playerChoice == "rock" && computerChoice == "paper" || 
    playerChoice == "paper" && computerChoice == "scissors" || 
    playerChoice == "scissors" && computerChoice == "rock") {
        result = "You lose :(";
        computerWins += 1;
    }

    else if (playerChoice == "rock" && computerChoice == "rock" || 
    playerChoice == "paper" && computerChoice == "paper" || 
    playerChoice == "scissors" && computerChoice == "scissors") {
        result = "Tie!"
    }

    else {
        result = "That's not what was asked!";
    }

}

function game() { //checks if player/computer wins are up to 5. if neither is, play again. if one reaches 5, reports the winner
    

    if (playerWins < 5 && computerWins < 5) {
        playRound();
        console.log(playerChoice);
        console.log(computerChoice);
        console.log(result);
        console.log(playerWins);
        console.log(computerWins);
        game();
    }

    else if (playerWins == 5) {
        console.log ("You won 5 times!");
    }

    else if (computerWins == 5) {
        console.log("Computer won 5 times :(");
    }
    
}


game();