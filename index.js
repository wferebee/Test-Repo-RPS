var score =0;
var userChoice;
var computerChoice;
var randomNum;
var result = "";
const randomNums = ()=> {
    randomNum = Math.floor(Math.random(10) * 100);
    console.log("Random NUmber is: " + randomNum)
}


const computerChoices = ()=> {
    if(randomNum >= 66){
        computerChoice = "Rock"
    } else if(randomNum >= 33){
        computerChoice = "Paper"
    } else {computerChoice = "Scissors"}
    
    console.log("Computer Choice is: " + computerChoice)
    document.getElementById('computerChoice').innerHTML = `Computer Choice: ${computerChoice}`
    return(computerChoice) 
    
}



document.addEventListener('keyup', (event) => {
 
    const {
        key,
        keyCode
      } = event;

      if(keyCode === 82){
          userChoice = "Rock"
        } else if(keyCode === 80) {
            userChoice = "Paper"
        } else if (keyCode === 83){
            userChoice = "Scissors"
        } else {
            userChoice = "error: try again"
        }
        document.getElementById('keys').innerHTML = `User Choice: ${userChoice}`
        console.log("user choice:" + userChoice)
        randomNums();
        computerChoices();
        gameLogic();
})


const gameLogic = ()=> {
    
    if ((userChoice === "Rock" && computerChoice === "Paper") || (userChoice === "Paper" && computerChoice === "Scissors") || (userChoice === "Scissors" && computerChoice === "Rock")) {
        result = "Lose"
        score-=1
    }  else if ((userChoice === "Rock" && computerChoice === "Scissors") || (userChoice === "Paper" && computerChoice === "Rock") || (userChoice === "Scissors" && computerChoice === "Paper")) {
        result = "Win"
        score +=1
    } else if ((userChoice === "Rock" && computerChoice === "Rock") || (userChoice === "Paper" && computerChoice === "Paper") || (userChoice === "Scissors" && computerChoice === "Scissors")) {
        result = "tie"
        score +=0
    } else if ( userChoice === "error: try again") {
        window.alert("I should penalize you for that")
    }

    document.getElementById('outcome').innerHTML = `Result: ${result}`
    document.getElementById('score').innerHTML = `Score: ${score}`
    console.log(result)
    console.log(score)
    }