// New code
rock.addEventListener('click',  () => { playRound("Rock") })
paper.addEventListener('click',  () => { playRound("Paper") })
scissors.addEventListener('click',  () => { playRound("Scissors") })

let playerScore = 0;
let cpuScore = 0;


// DOM Manipulation (init)
const playerScoreDisplay = document.createElement("div");
playerScoreDisplay.classList.add("playerScore");
playerScoreDisplay.textContent = "Player Score: " + playerScore;
results.appendChild(playerScoreDisplay);

const cpuScoreDisplay = document.createElement("div");
cpuScoreDisplay.classList.add("cpuScore");
cpuScoreDisplay.textContent = "CPU Score: " + cpuScore;
results.appendChild(cpuScoreDisplay);

const resultDisplay = document.createElement("div");
resultDisplay.classList.add("resultDisplay");




// Old code refactored
function getComputerSelection() {
    let choiceArray = [
        'Rock',
        'Paper',
        'Scissors'
    ]

    randomIndex = Math.floor(Math.random()*choiceArray.length);

    choice = choiceArray[randomIndex];

    return choice;
}

function checkResult(playerSelection, cpuSelection) {

    if (playerSelection === cpuSelection) {
        return "Tie"
    }

    else {
        if (playerSelection === "Rock") {
            if (cpuSelection === "Paper") {
                return "Loss"
            }
            else {
                return "Win"
            }
        }

        if (playerSelection === "Paper") {
            if (cpuSelection === "Scissors") {
                return "Loss"
            }
            else {
                return "Win"
            }
        }
        if (playerSelection === "Scissors") {
            if (cpuSelection === "Rock") {
                return "Loss"
            }
            else {
                return "Win"
                
            } 
        }
    }
} 

function playRound(playerSelection) {

    let cpuSelection = getComputerSelection();
    console.log(playerSelection);
    console.log(cpuSelection);

    let result = checkResult(playerSelection, cpuSelection);
    console.log(result);
    updateScore(result);
}

function updateScore(result) {
    if (result === "Tie") {
        
    }
    else if (result === "Win") {
        playerScore += 1;
    }
    else if (result === "Loss") {
        cpuScore +=1;
    }

    playerScoreDisplay.textContent = "Player Score: " + playerScore;
    results.appendChild(playerScoreDisplay);

    cpuScoreDisplay.textContent = "CPU Score: " + cpuScore;
    results.appendChild(cpuScoreDisplay);


    resultDisplay.textContent = result;
    results.appendChild(resultDisplay);
}




// function game() {
//     let playerScore = 0;
//     let cpuScore = 0;

//     for (let i = 0; playerScore < 5 && cpuScore < 5; i++) {
//         computerSelection = getComputerChoice();
//         console.log(computerSelection);

//         playerSelection = getPlayerChoice();


//         result = playRPS(playerSelection, computerSelection);

//         if (result === "You win! Play again?") {
//             playerScore += 1;
//             console.log(playerScore, cpuScore);
//         }

//         if (result === "You lose. Play again?") {
//             cpuScore += 1;
//             console.log(playerScore, cpuScore);
//         }

//         if (result === "Tie! Play again?") {
//             console.log(playerScore, cpuScore);
//         }
//     }

//     if (playerScore === 5) {
//         return "You won! Play again?";
//     }
//     if (cpuScore === 5) {
//         return "You lost. Play again?";
//     }
//     else {
//         return "Error";
//     }


// }