const choices = ["rock", "paper", "scissor"]

let playerChoice = document.getElementById("playerChoice")
let computerChoice = document.getElementById("computerChoice")

let result = document.getElementById("result")

let playerScore = document.getElementById("playerScore")
let computerScore = document.getElementById("computerScore")

let playerpoint = 0;
let computerpoint = 0;

function playGame(playerPick) {

    const computerPick = choices[Math.floor(Math.random() * 3)]
    let resultPick;

    if (playerPick === computerPick) {
        resultPick = "It's a tie"
    }
    else {
        switch (playerPick) {
            case "rock":
                resultPick = (computerPick == "scissor") ? "You win !" : "You lose"
                break;
            case "paper":
                resultPick = (computerPick == "rock") ? "You win !" : "You lose"
                break;
            case "scissor":
                resultPick = (computerPick == "paper") ? "You win !" : "You lose"
        }
    }

    if(resultPick == "You win !"){
        
    }

    playerChoice.textContent = playerPick
    computerChoice.textContent = computerPick
    result.textContent = resultPick

    if(resultPick == "You win !"){
        result.style.color = "green"   
    }
    else if(resultPick == "It's a tie"){
        result.style.color = "black"  
    }
    else{
        result.style.color = "tomato"  
    }

    switch (resultPick) {
        case "You win !":
            playerpoint++;
            playerScore.textContent = playerpoint;
            break;

        case "You lose":
            computerpoint++;
            computerScore.textContent = computerpoint;
            break;
    }








}