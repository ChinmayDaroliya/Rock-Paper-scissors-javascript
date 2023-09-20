const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const scoreDisplay = document.getElementById('score')

let userChoice
let computerChoice
let result
let score = 0

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
    scoreUpdate()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random()*3)+1
    console.log(randomNumber)

    if(randomNumber === 1){
        computerChoice = 'rock'
    }
    else if(randomNumber === 2){
        computerChoice = 'paper'
    }
    else{
        computerChoice === 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if(computerChoice === userChoice){
        result = "It's draw"
    }
    else if(computerChoice === 'rock' && userChoice === 'paper'){
        result = 'You win'
    }
    else if(computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'You lost'
    }
    else if(computerChoice === 'paper' && userChoice === 'rock'){
        result = 'You lost'
    }
    else if(computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'You win'
    }
    else if(computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'You lost'
    }
    else if(computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'You win'
    }

    resultDisplay.innerHTML = result
}

function scoreUpdate(){
    if(result === 'You win'){
        score += 1
    }
    else if(result === 'You lost'){
        score -= 1
    }
    else{
        score = score
    }
    scoreDisplay.innerHTML = score
}