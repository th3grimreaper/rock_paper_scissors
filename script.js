//store the list of choices for computer in an array
let choices = ['rock', 'paper', 'scissor'];

//create a function to return a random choice from the list of items by the computer
function getComputerChoice(arr) {
  return arr[Math.floor(Math.random()*(arr.length - 0)+0)];
}

//computer and user scores
let userScore = 0;
let computerScore = 0;

//test getComputerChoice function using console.log();
//console.log(getComputerChoice(choices));

//write a function that plays a single round of rock paper scissor && store result in result
let result;
function playOneRound(playerSelection, computerSelection) {
  if(playerSelection === computerSelection) {
    result = "Draw!"
  } else if(playerSelection==='rock') {
    if(computerSelection==='scissor') {
      result = "Rock wins. One point for user.";
      userScore +=1;
    } else {
      result = "Paper wins. One point for computer.";
      computerScore +=1;
    }
  } else if(playerSelection==='paper') {
    if(computerSelection==='rock') {
      result = "Paper wins. One point for user.";
      userScore +=1;
    } else {
      result = "Scissor wins. One point for computer.";
      computerScore +=1;
    } 
  } else if(playerSelection==='scissor') {
    if(computerSelection==='paper') {
      result = "Scissor wins. One point for user.";
      userScore +=1;
    } else {
      result = "Rock wins. One point for computer.";
      computerScore +=1;
    }
  }
  return result;
}

//check if playOneRound() funcitoning properly
//console.log(playOneRound(userChoice, computerChoice));

//winner
let winner;

//play 5 rounds of rock paper scissor
function playFiveRounds() {
  for (let i = 0; i < 5; i++) {
    //get choice from user
    let userChoice = prompt("Enter rock, paper or scissor: ").toLowerCase();
    //get random choice from computer
    let computerChoice = getComputerChoice(choices);
    console.log(playOneRound(userChoice, computerChoice)); 
  }
  //decide a winner based on scores of user and the computer
  if(userScore===computerScore) {
    winner = "It's a Draw!";
    console.log(winner);
  } else if(userScore>computerScore) {
    winner = "User wins!";
    console.log(winner);
  } else {
    winner = "Computer wins!";
    console.log(winner);
  }
  //print final scores of user and the computer
  console.log(`Final Score is:
              User = ${userScore}
              Computer = ${computerScore}`);
}

playFiveRounds();
