let playerChoice;
let playerScore = 0,
    computerScore = 0;

const computerChoicePanel = document.querySelector('.computer-selection');
const container = document.querySelector('.container');

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    switch(choice){
        case 0:
            console.log("computer choose rock");
            computerChoicePanel.src = "imgs/Rock.PNG";
            return choice;
            break;
        case 1:
            console.log("computer choose paper");
            computerChoicePanel.src = "imgs/Paper.PNG";
            return choice;
            break;
        case 2:
            console.log("computer choose scissors");
            computerChoicePanel.src = "imgs/Scissors.PNG";
            return choice;
            break;
        default:
            console.log("incorrect value.");
            return choice;
            break;
    }
}

function playerSelection(choiceNum){
    let computerChoice = getComputerChoice();
    switch(choiceNum)
    {
        case 0:
            console.log("player choose rock");
            playRound(choiceNum, computerChoice)
            //return 0;
            break;
        case 1:
            console.log("player choose paper");
            playRound(choiceNum, computerChoice)
            //return 1;
            break;
        case 2:
            console.log("player choose scissors");
            playRound(choiceNum, computerChoice)
            //return 2;
            break;
        default:
            console.log("incorrect value.");
            /*playerChoice = prompt("Rock, Paper or Scissors:", "rock");
            playerChoiceFixed = playerSelection(playerChoice);*/
            //return 3;
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

    checkEnd();

    //window.alert("----------------\nSCORES:\nPlayer: " + playerScore + "\nComputer: " + computerScore + "\n----------------");
}

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const buttons = document.querySelectorAll('button');

rock.addEventListener('click' , () => {
    playerSelection(0);
});
paper.addEventListener('click' , () => {
    playerSelection(1);
});
scissors.addEventListener('click' , () => {
    playerSelection(2);
});

function checkEnd(){
    if(playerScore >= 5 || computerScore >= 5){
        for(let i = 0; i < buttons.length; i++){
            buttons[i].style.display = 'none';
        }

    let winner;

    if(playerScore > computerScore){
        winner = "PLAYER WON!";
    }else if(playerScore === computerScore){
        winner = "It's a Tie!";
    }else{
        winner = "COMPUTER WON!";
    }

    const resultsPanel = document.createElement('div');
    resultsPanel.classList.add('results');
    const content = document.createElement('div');        
    resultsPanel.appendChild(content);
    content.classList.add('content');

    content.innerText = `G A M E  O V E R\nPlayer: ${playerScore}\nComputer: ${computerScore}\n${winner}`;

    const buttonRestart = document.createElement('button');
    buttonRestart.classList.add('restart');
    buttonRestart.innerText = `Restart`;
    buttonRestart.onclick = function(){
        window.location.reload();
    };
    content.appendChild(buttonRestart);
    container.appendChild(resultsPanel);
    }
}


