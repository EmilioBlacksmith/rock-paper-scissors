let playerChoice;
let playerChoiceFixed;
let playerScore = 0,
    computerScore = 0;

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch(choice){
        case 0:
            console.log("computer choose rock");
            return choice;
            break;
        case 1:
            console.log("computer choose paper");
            return choice;
            break;
        case 2:
            console.log("computer choose scissors");
            return choice;
            break;
        default:
            console.log("incorrect value.");
            return choice;
            break;
    }
}

function playerSelection(choice){
    let fixedCoice = choice.toLowerCase();
    fixedCoice = fixedCoice.trim();
    switch(fixedCoice)
    {
        case "rock":
            console.log("player choose rock");
            return 0;
            break;
        case "paper":
            console.log("player choose paper");
            return 1;
            break;
        case "scissors":
            console.log("player choose scissors");
            return 2;
            break;
        default:
            console.log("incorrect value.");
            playerChoice = prompt("Rock, Paper or Scissors:", "rock");
            playerChoiceFixed = playerSelection(playerChoice);
            return 3;
            break;            
    }
}

function playRound(playerSelection, computerSelection){

    if(computerSelection == 0 && playerSelection == 0){
        console.log("rock and rock is a tie");
    }
    if(computerSelection === 1 && playerSelection === 0){
        console.log("paper wins rock, computer wins round");
        computerScore++;
    }
    if(computerSelection === 2 && playerSelection === 0){
        console.log("rock wins scissors, player wins round");
        playerScore++;
    }

    if(computerSelection === 0 && playerSelection === 1){
        console.log("paper wins rock, player wins round");
        playerScore++;
    }
    if(computerSelection === 1 && playerSelection === 1){
        console.log("paper and paper is a tie");
    }
    if(computerSelection === 2 && playerSelection === 1){
        console.log("scissors wins paper, computer wins round");
        playerScore++;
    }

    if(computerSelection === 0 && playerSelection === 2){
        console.log("rock wins scissors, computer wins round");
        computerScore++;
    }
    if(computerSelection === 1 && playerSelection === 2){
        console.log("scissors wins paper, player wins");
        playerScore++;
    }
    if(computerSelection === 2 && playerSelection === 2){
        console.log("scissors and scissors is a tie");
    }

    window.alert("----------------\nSCORES:\nPlayer: " + playerScore + "\nComputer: " + computerScore + "\n----------------");
    console.log("----------------\nSCORES:\nPlayer: " + playerScore + "\nComputer: " + computerScore + "\n----------------");
}

function game(){
    window.alert("\\Welcome to Rock Paper and Scissors//");

    for(let i = 0; i < 5; i++){
        do{
            playerChoice = prompt("Rock, Paper or Scissors:", "rock");
            playerChoiceFixed = playerSelection(playerChoice);
        }while(playerChoiceFixed > 3)
        let computerChoice = getComputerChoice();
        playRound(playerChoiceFixed, computerChoice);
    }

    console.log("----------------");
    console.log("G A M E  O V E R");
    console.log("----------------");
    console.log("SCORES:");
    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore);
    console.log("----------------");
    
    
    if(playerScore > computerScore){
        window.alert("PLAYER WON");
        console.log("PLAYER WON");
    }else if(playerScore === computerScore){
        window.alert("It's a Tie!");
        console.log("It's a Tie!");
    }else{
        window.alert("COMPUTER WON");
        console.log("COMPUTER WON");
    }
}

game();