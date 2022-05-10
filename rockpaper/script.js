

function playRound(playerSelection, computerSelection) {
    // your code here!
   let answer =  window.prompt("Enter Rock, Paper or Scissors");
    
    console.log("Player says " + answer);

    console.log("Computer says " + computerSelection);
    // inputs
  }
  
  const myArray = ["Rock", "Paper", "Scissors"];
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));

  

function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}