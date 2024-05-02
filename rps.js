console.log("Hello World2");

let humanScore = 0;
let computerScore = 0;

const res_div = document.querySelector("#result");


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

// function getHumanChoice() {
//     return prompt('What do you choose?');
// }

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
        res_div.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    }

    if (res == 2) {
        computerScore++;
        res_div.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    }
    
    if (res == 0) {
        res_div.textContent = `Draw! You both chose ${humanChoice}`;
    }

    if (res == - 1) {
        res_div.textContent = `${humanChoice} is not a valid selection`;
    }

    checkWinner();
}

function checkWinner() {
    if (humanScore >= 5 || computerScore >= 5) {
        if (humanScore > computerScore) {
            // console.log(`You are a winner! (${humanScore} : ${computerScore})`);
            res_div.textContent = `You are a winner! (${humanScore} : ${computerScore})`;
        } else if (humanScore < computerScore) {
            // console.log(`You are a loser! (${humanScore} : ${computerScore})`);
            res_div.textContent = `You are a loser! (${humanScore} : ${computerScore})`;
        }
    }
}

function playGame() {

    //button references
    const rock_btn = document.querySelector("#rock_btn");
    const paper_btn = document.querySelector("#paper_btn");
    const scisors_btn = document.querySelector("#scisors_btn");

    rock_btn.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        const humanSelection = 'rock';
        playRound(humanSelection, computerSelection);
    });

    paper_btn.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        const humanSelection = 'paper';
        playRound(humanSelection, computerSelection);
    });

    scisors_btn.addEventListener("click", () => {
        const computerSelection = getComputerChoice();
        const humanSelection = 'scisors';
        playRound(humanSelection, computerSelection);
    });

}

playGame();