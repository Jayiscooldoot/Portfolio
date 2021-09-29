/*High scores
-----------
Ian: Stage 2 level 3
Owen: Stage 2 level 2
Jay: Stage 2 level 1
Raunit: Stage 1 level 4
Ben: Stage 1 level 2
*/

/*
How to play:
Colors will appear on the screen, after little bit of time they will disappear and eventually reapear. When they reapear you have to click on whatever box is displaying a different color. The more you get right the harder the game gets.
*/
var height;
 var width;
var boxesC1;
 var boxesC2;
 var boxesC3;
 var boxesToReplaceC1;
 var boxesToReplaceC2;
 var boxesToReplaceC3;
 var boxesToReplace;
var level;
 var stage;
 var boxesToCreate;
 var timeToDisplay;
 var timeToHide;
 var lLength;
 var gTWC;
var createNew;
 var orderIsDisplay;
 var orderIsHide;
 var orderIsFinalDisplay;
 var orderIsGameOver;
 var orderIsLevelDisplay;
 var orderIsStart;

function setup() {
  createCanvas(925, 400);
  height=800;
  width=925;
  
  level=0;
  stage=0;
  boxesToCreate=4;
  timeToDisplay=9000;
  timeToHide=1000;
  lLength=1000;
  orderIsStart=true;
  createNew=false;
  orderIsDisplay=false;
  orderIsHide=false;
  orderIsFinalDisplay=false;
  orderIsGameOver=false;
}

function draw() {
  if(createNew){
   createBoxes(boxesToCreate);
  }else if(orderIsDisplay){
   showColors(timeToDisplay+(stage*1000));
  }else if(orderIsHide){
    hideColors(timeToHide)
  }else if(orderIsFinalDisplay){
    finalDisplay()
  }else if(orderIsLevelDisplay){
    levelDisplay(lLength)
  }else if(orderIsGameOver){
    gameOver();
  }else if(orderIsStart){
    startScreen();
  }
  
}

function startScreen(){

       fill(140,167,47)
     textSize(50);
       text("Clck to start!", width/3+10, height/2-50)
       if(mouseIsPressed){
         orderIsStart=false;
         createNew=true;
       }
}
function createBoxes(numBoxes){

  boxesC1= new Array(numBoxes);
  boxesC2= new Array(numBoxes);
  boxesC3= new Array(numBoxes);
  for(var x=0; x<boxesC1.length; x++){
    boxesC1[x]=round(random(0, 255));
    boxesC2[x]=round(random(0, 255));
    boxesC3[x]=round(random(0, 255));
  }
  boxesToReplaceC1=round(random(0, 255));
  boxesToReplaceC2=round(random(0, 255));
  boxesToReplaceC3=round(random(0, 255));
  boxesToReplace=round(random(-0.5, numBoxes-0.5))
if(!(boxesToReplaceC1>=boxesC1[boxesToReplace]-40&&boxesToReplaceC1<=boxesC1[boxesToReplace])){
if(!(boxesToReplaceC2>=boxesC2[boxesToReplace]-40&&boxesToReplaceC2<=boxesC2[boxesToReplace])){
if(!(boxesToReplaceC3>=boxesC3[boxesToReplace]-40&&boxesToReplaceC3<=boxesC3[boxesToReplace])){
  createNew=false;
  orderIsDisplay=true;
  timeToDisplay+=millis()
}
}
}
}

//Display and hide loops
function showColors(dispLength){

  if(millis()<dispLength){
    for(var x=0; x<boxesC1.length; x++){

      fill(boxesC1[x], boxesC2[x], boxesC3[x])
      
      rect(x*(width/boxesC1.length),0,(width/boxesC1.length),height)
    }
  }else{
    orderIsDisplay=false;
    orderIsHide=true;
    timeToHide=timeToHide+millis();
  }
}

function hideColors(hideLength){
  if(millis()<hideLength){
    clear()
  }else{
    orderIsHide=false;
    orderIsFinalDisplay=true;
  }
  
}

function finalDisplay(){

    for(var x=0; x<boxesToReplace; x++){

      fill(boxesC1[x], boxesC2[x], boxesC3[x])
      
      rect(x*(width/boxesC1.length),0,(width/boxesC1.length),height)
    }
  fill(boxesToReplaceC1,boxesToReplaceC2,boxesToReplaceC3)
rect(boxesToReplace*(width/boxesC1.length),0,(width/boxesC1.length),height)
   for(var y=boxesToReplace+1; y<boxesC1.length; y++){

      fill(boxesC1[y], boxesC2[y], boxesC3[y])
      
      rect(y*(width/boxesC1.length),0,(width/boxesC1.length),height)
    }
    var clickX;
    var clickY;
  if(mouseIsPressed){
    clickX=mouseX;
    clickY=mouseY;
    if(clickX/(width/boxesC1.length)>=boxesToReplace&&clickX/(width/boxesC1.length)<boxesToReplace+1){
      orderIsFinalDisplay=false;
      levelUp();
    }else{
        orderIsFinalDisplay=false;
        gTWC=millis();
        orderIsGameOver=true;
    } 
  }
  }

function levelUp(){
  clear();
  level++;
  if(level==5){
    stage++;
    timeToDisplay=8000;
    timeToHide=2000;
    boxesToCreate+=2;
    level=1
  }else if(level==4){
    timeToDisplay=2000; 
    timeToHide=8000;
  }else if(level==3){
    timeToDisplay=4000; 
    timeToHide=6000;    
  }else if(level==2){
    timeToDisplay=6000; 
    timeToHide=4000;
  }else if(level==1){
    timeToDisplay=8000; 
    timeToHide=2000;    
  }
  lLength=millis()+1000;
    orderIsLevelDisplay=true;

    
}

function levelDisplay(length){
   if(millis()<length){
    clear()
     fill(140,167,47)
     textSize(50);
       text("Stage: "+stage+" Level: "+level, width/4-20, height/2-100)
  }else{
    createNew=true;
    orderIsLevelDisplay=false;
}
}
function gameOver(){
  clear()
     fill(boxesToReplaceC1,boxesToReplaceC2,boxesToReplaceC3)
  rect(boxesToReplace*(width/boxesC1.length),0,(width/boxesC1.length),height)
  fill(140,167,47)
  textSize(100)
  text('Game Over', width/4-20, height/2-20)
  textSize(50);
  text("Stage: "+stage+" Level: "+level, width/4-20, height/2-100)
  if(gTWC+500<millis())
  if(mouseIsPressed){
    setup();
  }
}