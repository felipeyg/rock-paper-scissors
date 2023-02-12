// Criar um jogo de pedra papel e tesoura
// computador escolher aleatoriamente uma das opções
// usuário escolher uma das opções
// comparar as escolhas e determinar o vencedor
// contar quantos jogos foram jogados e quem vencer. Melhor de 5 (quem ganhar 3x primeiro)

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

function game() {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 1; i < 11; i++) {
        const playerSelection = prompt(("Choose a option: rock, paper or scissors")).toLowerCase();
        const computerSelection = getComputerChoice();
        [playerWins, computerWins] = playRound(playerSelection, computerSelection, i, playerWins, computerWins);
        if (playerWins === 3) {
            console.log(`You won by ${playerWins} to ${computerWins} in ${i} rounds`)
            break
        } else if (computerWins === 3) {
            console.log(`You lose by ${computerWins} to ${playerWins} in ${i} rounds`)
            break
        } else if (i === 10){
            return "too many draws"
        }
    }
}

function playRound(playerSelection, computerSelection, i, playerWins, computerWins) {
    if (playerSelection === computerSelection ) {
        console.log(`Game ${i}: Draw!`)
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper") {
        console.log(`Game ${i}:You won! ${playerSelection} beats ${computerSelection}`)
        playerWins++
    } else {
        console.log(`Game ${i}:You lose! ${playerSelection} loses to ${computerSelection}`)
        computerWins++
    }
    return [playerWins, computerWins]
}


console.log(game())


