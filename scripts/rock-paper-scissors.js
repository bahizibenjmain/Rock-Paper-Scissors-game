const randomNumber=Math.random();
let computerMove='';

function pickComputerMove(){
if(randomNumber>=0 && randomNumber<1/3){
  computerMove='rock';
}else if(randomNumber>=1/3 && randomNumber<2/3){
  computerMove='paper';
}else if(randomNumber>=2/3 && randomNumber<1){
  computerMove='scissors';
}
return computerMove;
}

let scores=JSON.parse(localStorage.getItem(('scores')));
 if(scores===null){
  scores={
    wins:0,
    loses:0,
    ties:0
  };
 }
 
 displayScores();
 function displayScores(){
  document.querySelector('.js-displaying-scores')
  .innerHTML=`wins: ${scores.wins} loses: ${scores.loses} ties: ${scores.ties}`;
}
function playerGame(move){
  let computerMove=pickComputerMove();
   let result='';
  if (move=== 'rock'){
    if(computerMove==='rock'){
      result='tie';
    } else if(computerMove==='paper'){
      result='you lose';
    }else if(computerMove==='scissors'){
      result='you win'
    }
    }else if(move==='paper'){
    if(computerMove==='rock'){
      result='you win';
    } else if(computerMove==='paper'){
      result='tie';
    }else if(computerMove==='scissors'){
      result='you lose';
    }
    }else if(move==='scissors'){
    if(computerMove==='rock'){
      result='you lose';
    } else if(computerMove==='paper'){
      result='you win';
    }else if(computerMove==='scissors'){
      result='tie';
    }
   }

  if(result==='you win'){
    scores.wins+=1;
  }else if(result==='you lose'){
    scores.loses+=1;
  }else if(result==='tie'){
    scores.ties+=1;
  }
  setTimeout(()=>{
    document.querySelector('.js-displaying-results')
    .innerHTML=`${result}.`;
  },1000);

  document.querySelector('.js-displaying-results')
.innerHTML=`Wait...`;

  let displaygMove=document.querySelector('.js-displaying-move');
  displaygMove.innerHTML=`you <img src="images/${move}-emoji.png" alt="" class="js-move-image"> <img src="images/${computerMove}-emoji.png" alt=""  class="js-move-image"> computer`;

  
  displayScores();
  
 localStorage.setItem('scores',JSON.stringify(scores));
   pickComputerMove();
}



function resetScore(){
  scores.wins=0;
  scores.loses=0;
  scores.ties=0;
  localStorage.removeItem('scores');
  displayScores();
  document.querySelector('.js-displaying-move').innerHTML='';

  document.querySelector('.js-displaying-results').innerHTML=`<span>Pick to win!</span>`;


}

let resetButton=document.querySelector('.js-reset-scores-button');
resetButton.addEventListener('click',()=>{
  resetScore();
});

let rockButton=document.querySelector('.js-rock-button');
rockButton.addEventListener('click',()=>{
  playerGame('rock');
});

let paperButton=document.querySelector('.js-paper-button');
paperButton.addEventListener('click',()=>{
  playerGame('paper');
});

let scissorButton=document.querySelector('.js-scissor-button');
scissorButton.addEventListener('click',()=>{
  playerGame('scissors');
});

document.body.addEventListener('keydown',(event)=>{
  if(event.key==='r'){
    playerGame('rock');
  }else if(event.key==='p'){
    playerGame('paper');
  }else if(event.key==='s'){
    playerGame('scissors');
  }
})