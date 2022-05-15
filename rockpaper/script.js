

function playRound(playerSelection, computerSelection) {
    // your code here!
   let answer =  window.prompt("Enter Rock, Paper or Scissors");
   let theAnswer = answer.toLowerCase();
    
    
    // inputs
    if ((theAnswer == "rock") || (theAnswer == "paper") || (theAnswer == "scissors" )){
      playerSelection = theAnswer;  
        console.log("You chose " + playerSelection);
        
      } else { console.log("Please make a valid selection!");  }
  
      console.log("Computer says " + computerSelection);

    if (computerSelection == playerSelection) { console.log("A Draw"); }
    else if ((computerSelection == "rock" && playerSelection == "scissors") ||
    (computerSelection == "scissors" && playerSelection == "paper") ||
    (computerSelection == "paper" && playerSelection == "rock"))
    { console.log("You lose"); } else {console.log("You Win!"); }
    
  }
  
  const myArray = ["rock", "paper", "scissors"];
  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));

  

function computerPlay() {
  return myArray[~~(Math.random() * myArray.length)];
}