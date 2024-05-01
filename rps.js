console.log("Hello World2");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    rnd = Math.random()
    if (rnd < 0.33) {
        return 'rock';
    } else if (rnd < 0.66) {
        return 'paper';
    } else {
        return 'scisors';
    }
}

function getHumanChoice() {
    return prompt('What do you choose?');
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let res; //0 - draw, 1 - win, 2 - loose, -1 - invalid input

    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            res = 0;
        } else if (computerChoice == "paper") {
            res = 2;
        } else if (computerChoice == "scisors") {
            res = 1;
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            res = 1;
        } else if (computerChoice == "paper") {
            res = 0;
        } else if (computerChoice == "scisors") {
            res = 2;
        }        
    } else if (humanChoice == "scisors") {
        if (computerChoice == "rock") {
            res = 2;
        } else if (computerChoice == "paper") {
            res = 1;
        } else if (computerChoice == "scisors") {
            res = 0;
        } 
    } else {
        res = -1;
    }

    if (res == 1) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }

    if (res == 2) {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
    
    if (res == 0) {
        console.log(`Draw! You both chose ${humanChoice}`);
    }

    if (res == - 1) {
        console.log(`${humanChoice} is not a valid selection`);
    }
}

function playGame() {
    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log(`You are a winner! (${humanScore} : ${computerScore})`);
    } else if (humanScore < computerScore) {
        console.log(`You are a loser! (${humanScore} : ${computerScore})`);
    } else {
        console.log(`Draw! (${humanScore} : ${computerScore})`);
    }
}

playGame();