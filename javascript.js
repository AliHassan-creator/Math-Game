var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;

//if we click on the start/reset
document.getElementById("startreset").onclick = function(){
    
    if(playing == true){
        location.reload();
        
    }else{
        
        playing = true; 
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
       
        show("timeremaining");
        timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        
        hide("gameover");
        document.getElementById("startreset").innerHTML = "Reset Game"
       
        startcountdown();
        generateQA();
            
        }
    
}

for(i=1; i<5; i++){
    document.getElementById("box"+i).onclick = function(){
    if(playing == true){
        if(this.innerHTML == correctAnswer){
            
         score++; 
         document.getElementById("scorevalue").innerHTML = score;     hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");
            },1000);
            
            generateQA();
            
        }else{
             hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");
            },1000);   
        } 
    }
}
}

function startcountdown(){
    var trv = document.getElementById("timeremainingvalue");
    action = setInterval(function(){timeremaining -= 1;
    trv.innerHTML = timeremaining;
      if(timeremaining == 0){
          stopcountdown();
          show("gameover");
          document.getElementById("gameover").innerHTML = "<p>Game Over!</p><p>Your Score Is " + score + ".</p>";
          
          hide("timeremaining");
          hide("correct");
          hide("wrong");
          playing = false;
          document.getElementById("startreset").innerHTML = "Start Game";
      }                   
    },1000);
   }
function stopcountdown(){
    clearInterval(action);
}
function hide(Id){
    document.getElementById(Id).style.display = "none";
}
function show(Id){
    document.getElementById(Id).style.display = "block";
}
function generateQA(){
   var x = 1+ Math.round(9*Math.random());
    var y = 1+ Math.round(9*Math.random());
    correctAnswer = x*y;
    document.getElementById("question").innerHTML = x + "x" + y;
    var correctposition = 1+ Math.round(3*Math.random());
    document.getElementById("box" + correctposition).innerHTML = correctAnswer;
    
    var answers = [correctAnswer];
    for(i=1; i<5; i++){
        if(i != correctposition){
          var wronganswer;
           do{
               {
                  wronganswer= (1+ Math.round(9*Math.random()))*(1+ Math.round(9*Math.random()));
                  }
           } while(answers.indexOf(wronganswer)>-1)
            document.getElementById("box" + i).innerHTML = wronganswer;
            answers.push(wronganswer);
        }
    }
}