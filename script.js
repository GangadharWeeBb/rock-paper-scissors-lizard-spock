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
    if(playerScore >= WinningScore) {
        document.getElementById('result').innerText = "Congo You win!"
    }
    else if(computerScore >= WinningScore) {
        document.getElementById('result').innerText= "Congo Computer win!"
    }
};

const playRound = userChoice => {
    const computerChoice = getRandomComputerChoice();
    const roundResult = determineRoundWinner(userChoice, computerChoice);
    document.getElementById('result').innerText = `Your choice: ${userChoice}, Computer's choice:${computerChoice}, Result: ${roundResult}`
    updateScores();
    declareWinner();  

    //check if either play or computer has won
    if(playerScore >= WinningScore || computerChoice >= WinningScore) {
        playerScore = 0;
        computerScore = 0;
        updateScores();
        document.getElementById('result').innerText = "";
        declareWinner();
    }
}