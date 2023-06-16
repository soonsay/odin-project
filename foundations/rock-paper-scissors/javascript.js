function getComputerChoice() {
    let choiceArray = [
        'Rock',
        'Paper',
        'Scissors'
    ]

    randomIndex = Math.floor(Math.random()*choiceArray.length);

    choice = choiceArray[randomIndex];

    return choice;
}

function getPlayerChoice() {
    let playerSelection = prompt("Please pick Rock, Paper, or Scissors", "Rock/Paper/Scissors");
    let firstLetter = playerSelection.charAt(0);

    let remainingLetters = playerSelection.substring(1);

    let firstLetterCap = firstLetter.toUpperCase();
    let remainingLettersLower = remainingLetters.toLowerCase();

    let formattedChoice = firstLetterCap + remainingLettersLower;

    let validChoices = [
        'Rock',
        'Paper',
        'Scissors'
    ]

    let validResponse = (formattedChoice === validChoices[0] ||
                        formattedChoice === validChoices[1] ||
                        formattedChoice === validChoices[2]);


    if (!validResponse) {
        return "Invalid response, please enter a valid selection";
    }  
    else {
        return formattedChoice;
    }


}

function playRPS(playerSelection, computerSelection, playerScore, cpuScore) {

    if (playerSelection === computerSelection) {
        return "Tie! Play again?"
    }

    else {
        if (playerSelection === "Rock") {
            if (computerSelection === "Paper") {
                return "You lose. Play again?";
            }
            else {
                return "You win! Play again?";
            }
        }

        if (playerSelection === "Paper") {
            if (computerSelection === "Scissors") {
                return "You lose. Play again?";
            }
            else {
                return "You win! Play again?";
            }
        }
        if (playerSelection === "Scissors") {
            if (computerSelection === "Rock") {
                return "You lose. Play again?";
            }
            else {
                return "You win! Play again?";
            }
        }
    }
}

function game() {
    let playerScore = 0;
    let cpuScore = 0;

    for (let i = 0; playerScore < 5 && cpuScore < 5; i++) {
        computerSelection = getComputerChoice();
        console.log(computerSelection);

        playerSelection = getPlayerChoice();


        result = playRPS(playerSelection, computerSelection);

        if (result === "You win! Play again?") {
            playerScore += 1;
            console.log(playerScore, cpuScore);
        }

        if (result === "You lose. Play again?") {
            cpuScore += 1;
            console.log(playerScore, cpuScore);
        }

        if (result === "Tie! Play again?") {
            console.log(playerScore, cpuScore);
        }
    }

    if (playerScore === 5) {
        return "You won! Play again?";
    }
    if (cpuScore === 5) {
        return "You lost. Play again?";
    }
    else {
        return "Error";
    }


}