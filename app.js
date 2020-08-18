var rock = document.getElementById('rock');
var paper = document.getElementById('paper');
var scissors = document.getElementById('scissors');
var scoreBoard = document.getElementById('score');
var backDrop = document.getElementById('back');
var userScoreSpan = document.getElementById('user-score');
var computerScoreSpan = document.getElementById('computer-score');
var userScore = 0;
var computerScore = 0;

function rockChoice(){
    
    var userInput = "ROCK";
    var randNumber = Math.random();
    var computerInput = "";
    
    if (randNumber < 0.3333){
        computerInput = "ROCK";
    }else if(randNumber < 0.6666){
        computerInput = "PAPER";
    }else{
        computerInput = "SCISSORS";
    }

    if(userInput == computerInput){
        backDrop.classList.add('visible');
        scoreBoard.classList.add('visible');
        scoreBoard.innerHTML= `
            <h1 class= "winner-msg">Draw!</h1>
            <img class= "draw-img" src="draw.png">
        `;
    }else if(computerInput == "PAPER"){
        backDrop.classList.add('visible');
        scoreBoard.classList.add('visible');
        scoreBoard.innerHTML=`
            <h1 class= "winner-msg">Computer Win!</h1>
            <img class= "draw-img" src= "pc.png">
        `;
        computerScore+=1;
        computerScoreSpan.innerHTML=`
            ${computerScore}
        `;
    }else{
        backDrop.classList.add('visible');
        scoreBoard.classList.add('visible');
        scoreBoard.innerHTML=`
            <h1 class= "winner-msg">You Win!</h1>
            <img class= "draw-img" src= "win.png">
        `;
        userScore+=1;
        userScoreSpan.innerHTML=`
            ${userScore}
        `;
    }
}

function paperChoice(){
    var userInput = "PAPER";
    var randNumber = Math.random();
    var computerInput = "";
    
    if (randNumber < 0.3333){
        computerInput = "ROCK";
    }else if(randNumber < 0.6666){
        computerInput = "PAPER";
    }else{
        computerInput = "SCISSORS";
    }

    if(userInput == computerInput){
        backDrop.classList.add('visible');
        scoreBoard.classList.add('visible');
        scoreBoard.innerHTML= `
            <h1 class= "winner-msg">Draw!</h1>
            <img class= "draw-img" src="draw.png">
        `;
    }else if(computerInput == "ROCK"){
        backDrop.classList.add('visible');
        scoreBoard.classList.add('visible');
        scoreBoard.innerHTML=`
            <h1 class= "winner-msg">You Win!</h1>
            <img class= "draw-img" src= "win.png">
        `;
        userScore+=1;
        userScoreSpan.innerHTML=`
            ${userScore}
        `;
    }else{
        backDrop.classList.add('visible');
        scoreBoard.classList.add('visible');
        scoreBoard.innerHTML=`
            <h1 class= "winner-msg">Computer Win!</h1>
            <img class= "draw-img" src= "pc.png">
        `;
        computerScore+=1;
        computerScoreSpan.innerHTML=`
            ${computerScore}
        `;
    }
}

function scissorsChoice(){
    var userInput = "SCISSORS";
    var randNumber = Math.random();
    var computerInput = "";
    
    if (randNumber < 0.3333){
        computerInput = "ROCK";
    }else if(randNumber < 0.6666){
        computerInput = "PAPER";
    }else{
        computerInput = "SCISSORS";
    }

    if(userInput == computerInput){
        backDrop.classList.add('visible');
        scoreBoard.classList.add('visible');
        scoreBoard.innerHTML= `
            <h1 class= "winner-msg">Draw!</h1>
            <img class= "draw-img" src="draw.png">
        `;
    }else if(computerInput == "ROCK"){
        backDrop.classList.add('visible');
        scoreBoard.classList.add('visible');
        scoreBoard.innerHTML=`
            <h1 class= "winner-msg">Computer Win!</h1>
            <img class= "draw-img" src= "pc.png">
        `;
        computerScore+=1;
        computerScoreSpan.innerHTML=`
            ${computerScore}
        `;
    }else{
        backDrop.classList.add('visible');
        scoreBoard.classList.add('visible');
        scoreBoard.innerHTML=`
            <h1 class= "winner-msg">You Win!</h1>
            <img class= "draw-img" src= "win.png">
        `;
        userScore+=1;
        userScoreSpan.innerHTML=`
            ${userScore}
        `;
    }
}

function toggle(){
    backDrop.classList.remove('visible');
    scoreBoard.classList.remove('visible');
}

rock.addEventListener('click', rockChoice);
paper.addEventListener('click', paperChoice);
scissors.addEventListener('click',scissorsChoice);
backDrop.addEventListener('click', toggle);