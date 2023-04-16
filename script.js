let rock = "Rock"
let paper = "Paper"
let scissors = "Scissors"
const playerSelection = "Scissors";
const computerSelection = getComputerChoice()

function getComputerChoice() {
    let number = (Math.floor(Math.random() * 3));
    if (number == 0) {
        return rock
    }
    else if (number == 1) {
        return paper
    }
    else (number == 2) 
        return scissors
}

function gameplay(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Draw"
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You lose, Paper beats Rock"
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You win, Rocks beats Scissors"
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "You win, Paper beats Rock"
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "You lose, Scissors beats Paper"
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "You lose, Rock beats Scissors"
    } else 
        return "You win, Scissors beats Paper"
}

console.log("Player choice: " + playerSelection)
console.log("Computer choice: "+ computerSelection)
console.log(gameplay(playerSelection, computerSelection))
