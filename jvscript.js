let userScore = 0 ;
let compScore = 0;

const text = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice1");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    let options = ["rock" , "scissor" , "paper"];
    const option = Math.floor(Math.random()*3);
    return options[option];
};

const showWinner = (userWin , userChoice , compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        text.innerHTML = `You Won!&nbsp;&nbsp; Your ${userChoice} beats ${compChoice}`;
        text.style.backgroundColor="green";        
    }
    else {
        compScore++;
        compScorePara.innerText=compScore;
        console.log("You lost!!");
        text.innerHTML = `You Lose.&nbsp;&nbsp; ${compChoice} beats your ${userChoice}`;
        text.style.backgroundColor = "red";
    }
    return;
};

const draw = () => {
    text.style.backgroundColor = "magenta";
    text.innerText = "Game Draw Play Again!!"
};

const playGame = (userChoice)=>{
    console.log("User Choice:",userChoice);
    // Comp Choice
   const compChoice = genCompChoice();

    console.log("Comp Choice : ",compChoice);

    if(userChoice === compChoice){
        draw();
    }
    else {
        let userWin = true;
        if(userChoice === 'rock'){
            // compChoice -> scissor or paper
            userWin = compChoice==='scissor'? true:false;
        }
        else if (userChoice === 'scissor'){
            //compChoice -> paper or rock
            userWin = compChoice==='rock'?false:true;
        }
        else{
            // compChoice -> rock or scissor
            userWin = compChoice==='rock'?true:false;
        }
        showWinner(userWin , userChoice , compChoice);
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click" , ()=> {
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);

    });
});