let rock = "Rock"
let paper = "Paper"
let scissors = "Scissors"
let playerScore = 0
let computerScore = 0

let resultHTML = document.querySelector('#result')
const botoes = document.querySelectorAll('input[type="button"]');
const playAgainBtn = document.querySelector('.playAgain')

function disableButtons() {
    botoes.forEach(function(event){
        event.disabled = true
    })
}

function refreshPage() {
   location.reload() 
}

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

        if (playerScore == 5)  {
            resultHTML.innerHTML = `Congrats! You won! <br> Your score: ${playerScore} <br> CPU score: ${computerScore}`
            disableButtons()
            playAgainBtn.classList.replace('playAgain', 'playAganShow')
        }
        
    } else if (playerSelection == computerSelection) {
    result = `Draw! Both chose ${playerSelection} <br> Player Score: ${playerScore} <br> CPU Score: ${computerScore}`
    console.log(result)
    resultHTML.innerHTML = result
    } else {
    computerScore += 1
    result = `CPU: ${computerSelection} <br> You lose! ${computerSelection} beats ${playerSelection} <br> Player Score: ${playerScore} <br> CPU Score: ${computerScore}`
    console.log(result)
    resultHTML.innerHTML = result

        if (computerScore == 5) {
            resultHTML.innerHTML = `Oh damn! You lose! <br> Your score: ${playerScore} <br> CPU score: ${computerScore}`
            disableButtons()
            playAgainBtn.classList.replace('playAgain', 'playAganShow')
        }
    }
}