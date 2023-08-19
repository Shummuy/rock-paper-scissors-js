let rock = "Rock"
let paper = "Paper"
let scissors = "Scissors"
let playerScore = 0
let computerScore = 0

let resultHTML = document.querySelector('#result')
const botoes = document.querySelectorAll('input[type="button"]');

function getComputerChoice() {
    let choices = [rock, paper, scissors]
    return choices[Math.floor(Math.random() * choices.length)]
}

let computerSelection = getComputerChoice()

botoes.forEach(botao => {
    playerSelection = null
    botao.addEventListener('click', function(event) {
        playerSelection = botao.value;
        gameplay(playerSelection, getComputerChoice())
    })
})

function gameplay(playerSelection, computerSelection) {
    let result = ""

    if ((playerSelection == rock && computerSelection == scissors) ||
    (playerSelection == paper && computerSelection == rock) ||
    (playerSelection == scissors && computerSelection == paper)) {

    playerScore += 1
    result = `CPU: ${computerSelection} <br> You win! ${playerSelection} beats ${computerSelection} <br> Player Score: ${playerScore} <br> CPU Score: ${computerScore}`
    console.log(result) 
    resultHTML.innerHTML = result
    } else if (playerSelection == computerSelection) {
    result = `Draw! Both choices is ${playerSelection} <br> Player Score: ${playerScore} <br> CPU Score: ${computerScore}`
    console.log(result)
    resultHTML.innerHTML = result
    } else {
    computerScore += 1
    result = `CPU: ${computerSelection} <br> You lose! ${computerSelection} beats ${playerSelection} <br> Player Score: ${playerScore} <br> CPU Score: ${computerScore}`
    console.log(result)
    resultHTML.innerHTML = result
    }
}
























// function gameplay(playerSelection, computerSelection) {
//     if (playerSelection.toUpperCase() == computerSelection.toUpperCase()) {
//         console.log("Drawn!")
//     } else if (playerSelection == rock && computerSelection == paper) {
//         return console.log("CPU wins! Paper beats Rock!")
//     } else if (playerSelection == rock && computerSelection == scissors) {
//         return console.log("Player wins! Rock beats Scissors!")
//     } else if (playerSelection == scissors && computerSelection == rock) {
//         return console.log("CPU wins! Rock beats Scissors!")
//     } else if (playerSelection == scissors && computerSelection == paper) {
//         return console.log("Player wins! Scissors beats Paper!")
//     } else if (playerSelection == paper && computerSelection == scissors) {
//         return console.log("CPU wins! Scissors beats Paper!")
//     }
// }

