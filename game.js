var choice = ['rock', 'paper', 'scissors']
var scoreOfUser = 0
var scoreOfComputer = 0


function start(){
    if (personalId.value=='') {
        user.style.color='red'
        user.innerHTML='Kindly enter your Name upward'
    }
    else{
     user.innerHTML= personalId.value
     conclusion.innerHTML='start the game'
     personalId.value=''

    }
   
}
function rock() {
    computer = Math.floor(Math.random() * choice.length)
    computerOption = (choice[computer])
    if (computerOption == 'rock'){
        conclusion.style.color='blue'
        conclusion.innerHTML ='Computer Chose rock, It is a tie'
    }
    else if (computerOption == 'scissors'){
        conclusion.style.color = 'green'
        conclusion.innerHTML ='Computer Chose scissors, you won'
        scoreOfUser++
        userScore.innerHTML=scoreOfUser
    }
    else if (computerOption == 'paper'){
        conclusion.style.color='red'
        conclusion.innerHTML ='Computer Chose paper, you  lose'
        scoreOfComputer++
        computerScore.innerHTML=scoreOfComputer

    }
}
function scissors() {
    computer = Math.floor(Math.random() * choice.length)
    computerOption = (choice[computer])
    if (computerOption == 'rock'){
        conclusion.style.color='red'
        conclusion.innerHTML ='Computer Chose rock, You lose'
        scoreOfComputer++
        computerScore.innerHTML=scoreOfComputer
    }
    else if (computerOption == 'scissors'){
        conclusion.style.color = 'blue'
        conclusion.innerHTML ='Computer Chose scissors, It is a tie'

    }
    else if (computerOption == 'paper'){
        conclusion.style.color='green'
        conclusion.innerHTML ='Computer Chose paper, you  Won'
        scoreOfUser++
        userScore.innerHTML=scoreOfUser

    }
}
function paper() {
    computer = Math.floor(Math.random() * choice.length)
    computerOption = (choice[computer])
    if (computerOption == 'rock'){
        conclusion.style.color='green'
        conclusion.innerHTML ='Computer Chose rock, You Won'
        scoreOfUser++
        userScore.innerHTML = scoreOfUser
    }
    else if (computerOption == 'scissors'){
        conclusion.style.color = 'red'
        conclusion.innerHTML ='Computer Chose scissors, you lose'
        scoreOfComputer++
        computerScore.innerHTML=scoreOfComputer


    }
    else if (computerOption == 'paper'){
        conclusion.style.color='blue'
        conclusion.innerHTML ='Computer Chose paper, It is a tie'
    }
}
function reStart(){
    conclusion.style.color='black'
    conclusion.innerHTML='start the game'
    userScore.innerHTML=0
    computerScore.innerHTML=0

}