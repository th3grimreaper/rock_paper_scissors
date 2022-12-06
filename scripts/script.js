const choices = ['rock', 'paper', 'scissor'];

function getComputerChoice(arr) {
  return arr[Math.floor(Math.random()*(arr.length))];
}

//computer and user scores
let userScore = 0;
let computerScore = 0;
let round = 0;

//write a function that plays a single round of rock paper scissor && store result in result
let result;
function playOneRound(playerSelection, computerSelection) {
  round += 1;
  if(playerSelection === computerSelection) {
    result = "Draw!"
  } else if(playerSelection==='rock') {
    if(computerSelection==='scissor') {
      result = "Rock wins over Scissor.";
      userScore +=1;
    } else {
      result = "Paper wins over Rock.";
      computerScore +=1;
    }
  } else if(playerSelection==='paper') {
    if(computerSelection==='rock') {
      result = "Paper wins over Rock.";
      userScore +=1;
    } else {
      result = "Scissor wins over Paper.";
      computerScore +=1;
    } 
  } else if(playerSelection==='scissor') {
    if(computerSelection==='paper') {
      result = "Scissor wins over Paper.";
      userScore +=1;
    } else {
      result = "Rock wins over Scissor.";
      computerScore +=1;
    }
  }
  return result;
}

const showChoice = document.querySelector('.show-choice');
const gameResult = document.querySelector('.declare-winner')
const buttons = document.querySelectorAll('.choice'); 
const playButton = document.querySelector('.play-btn'); 
const roundDiv = document.querySelector('.rounds');

//play on click
playButton.addEventListener('click', () => {
  playButton.style.display = "none";
  let btnArr = [...buttons];
  btnArr.forEach((btn) => {
    btn.style.display = "block";
  })
  showChoice.textContent = "Make a choice";
  gameResult.textContent = "";
})

function announceWinner() {
  if (userScore === computerScore) {
    showChoice.textContent = "Draw!";
  } else if (userScore > computerScore) {
    showChoice.textContent = "User wins!";
  } else {
    showChoice.textContent = "Computer wins!";
  }
}

function checkRPS(event) {
  const userChoice = event.target.textContent.toLowerCase();
  const computerChoice = getComputerChoice(choices);
  showChoice.textContent = playOneRound(userChoice, computerChoice);
  roundDiv.textContent = `ROUND ${round}`;
  gameResult.textContent = `User ${userScore}:${computerScore} Comp`;
  if (userScore === 5 || computerScore === 5) {
  buttons.forEach(btn => {
    btn.removeEventListener('click', checkRPS);
  });
  let btnArr = [...buttons];
  btnArr.forEach((btn) => {
    btn.style.display = "none"
  })
  playButton.style.display = "block";
  playButton.textContent = "Reload"
  playButton.addEventListener('click', ()=>{
    window.location.reload();
  })
  announceWinner();
  gameResult.textContent = `User ${userScore}:${computerScore} Comp`;
  }
}

//check on btn click
buttons.forEach((btn) => {
  btn.addEventListener('click', checkRPS);
})
