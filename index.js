let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random()*10)
}

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
     const humanHowClose = Math.abs(targetNumber - humanGuess)
     const computerHowClose = Math.abs(targetNumber - computerGuess)

     if (humanHowClose < computerHowClose){
        return true
     }else if (humanHowClose > computerHowClose){
        return false
     }else if(humanHowClose === computerHowClose){
        return true
     }
}

const updateScore = winner => {
    if (winner === 'human'){
        humanScore += 1
    }else if (winner === 'computer'){
        computerScore += 1
    }
}

const advanceRound = () =>{
    currentRoundNumber += 1
}
