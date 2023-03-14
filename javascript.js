let playerScore = 0;
let computerScore = 0;
const playerScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("computerScore");
const result_div = document.querySelector(".result");

function getComputerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice === 0) {
        return "rock"
    } else if (randomChoice === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

function win(player,computer) {
    playerScore ++;
    playerScore_span.innerHTML = playerScore;
    result_div.innerHTML = player + " beats " + computer + ". You won 1 point!";
    exit()
}

function lose(player,computer) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = player + " loses to " + computer + ". Computer won 1 point";
    exit()
}

function draw() {
    document.querySelector(".result") = "Draw! Try again!";
    exit()
}


function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    if (playerSelection === computerSelection ) {
        draw(playerSelection,computerSelection)
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
        win(playerSelection,computerSelection)
    } else {
        lose(playerSelection,computerSelection)
    }
}

function exit() {
    if (playerScore == 5) {
        document.querySelector(".final").classList.add("win");
        document.querySelector(".final").innerHTML = "CONGRATULATIONS YOU WIN!";
        setTimeout(function() {window.location.reload();}, 2000 );
    }
    if (computerScore == 5) {
        document.querySelector(".final").classList.add("lose");
        document.querySelector(".final").innerHTML = "I'M SORRY, COMPUTER WINS!";
        setTimeout(function() {window.location.reload();}, 2000 );
    }
}

function main() {
    document.getElementById("rock").addEventListener('click', function() {
        playRound("rock")
    })
    
    document.getElementById("paper").addEventListener('click', function() {
        playRound("paper")
    })
    
    document.getElementById("scissors").addEventListener('click', function() {
        playRound("scissors")
    })
}

main()

// primeira versão

// Criar um jogo de pedra papel e tesoura
// computador escolher aleatoriamente uma das opções
// usuário escolher uma das opções
// comparar as escolhas e determinar o vencedor
// contar quantos jogos foram jogados e quem vencer. Melhor de 5 (quem ganhar 3x primeiro)

// function getComputerChoice() {
//     const randomChoice = Math.floor(Math.random() * 3);
//     if (randomChoice === 0) {
//         return "rock"
//     } else if (randomChoice === 1) {
//         return "paper"
//     } else {
//         return "scissors"
//     }
// }

// function game() {
//     let playerWins = 0;
//     let computerWins = 0;
//     for (let i = 1; i < 11; i++) {
//         const playerSelection = prompt(("Choose a option: rock, paper or scissors")).toLowerCase();
//         const computerSelection = getComputerChoice();
//         [playerWins, computerWins] = playRound(playerSelection, computerSelection, i, playerWins, computerWins);
//         if (playerWins === 3) {
//             console.log(`You won by ${playerWins} to ${computerWins} in ${i} rounds`);
//             break
//         } else if (computerWins === 3) {
//             console.log(`You lose by ${computerWins} to ${playerWins} in ${i} rounds`);
//             break
//         } else if (i === 10){
//             return "too many draws"
//         }
//     }
// }

// function playRound(playerSelection, computerSelection, i, playerWins, computerWins) {
//     if (playerSelection === computerSelection ) {
//         console.log(`Game ${i}: Draw!`)
//     } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
//         console.log(`Game ${i}:You won! ${playerSelection} beats ${computerSelection}`);
//         playerWins++;
//     } else {
//         console.log(`Game ${i}:You lose! ${playerSelection} loses to ${computerSelection}`);
//         computerWins++;
//     }
//     return [playerWins, computerWins]
// }

// console.log(game())