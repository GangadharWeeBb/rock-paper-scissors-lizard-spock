let playerScore = 0;
let computerScore = 0;
const WinningScore = 5;

const choices = ["rock", "paper","scissors","lizard","spock"];

const getRandomIndex = array => Math.floor(Math.random()*array.length);
const getRandomComputerChoice = () => choices[getRandomIndex(choices)];

const determineRoundWinner = (userChoice, computerChoice) => {
    const rules = {
        "rock":["scissors","lizard"],
        "paper":["rock","spock"],
        "scissors":["paper","lizard"],
        "lizard":["spock","paper"],
        "spock":["scissors","rock"]
    };
    if (userChoice === computerChoice) {
        return "It's a tie!"
    }
    else if(rules[userChoice].includes(computerChoice)) {
        playerScore++;
        return "You Win!"
    }
    else{
        computerScore++;
        return "Computer Wins!"
    }
};

const updateScores = () => {
    document.getElementById('player-score').innerText = playerScore;
    document.getElementById('computer-score').innerText = computerScore;
};

const declareWinner = () => {
    if(playerScore === WinningScore) {
        document.getElementById('result').innerText = "Congo You win!"
    }
    else if(computerScore === WinningScore) {
        document.getElementById('result').innerText= "Congo Computer win!"
    }
};

const playRound = userChoice => {
    const computerChoice = getRandomComputerChoice();
    const roundResult = determineRoundWinner(userChoice, computerChoice);
    document.getElementById('result').innerText = `Your choice: ${userChoice}, Computer's choice: ${computerChoice}, Result: ${roundResult}`;
    
    updateScores();
    declareWinner();

    // Check if either player has won
    if(playerScore === WinningScore || computerScore === WinningScore) {
        // Delay the reset slightly to show the final result for a moment
        setTimeout(() => {
            // Reset scores for a new game
            playerScore = 0;
            computerScore = 0;

            // Update the score display
            updateScores();

            // Clear the result display
            document.getElementById('result').innerText = "";
        }, 1000); 
    }
};

