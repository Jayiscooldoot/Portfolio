var WIDTH=400
var HEIGHT=400
var dcOff=WIDTH/12.5

var x
var y
var middleX
var middleY
var topLeftX
var topLeftY
var botRightX
var botRightY
var topRightX
var topRightY
var botLeftX
var botLeftY
var midRightX
var midRightY
var midLeftX
var midLeftY
var rolling
var dcWidth=WIDTH/6.66
var d1
var d2
var d3
var d4
var turnScore
var sc=[]
var die=[]
var win
var timeToWin
var numRolls
var frameStart
var totRolls=0
var totTime=0
var resets=0
var gamerule
var numNeeded
var numLow
var numHigh
var range
function setup() {
  createCanvas(WIDTH, HEIGHT);

  die=[new dice(),new dice(), new dice(), new dice()]
  gamerule="default"
  noStroke()
  newGame()
  for(i=0;i<22;i++){
    sc[i]=false
  }
  win=true;
}
function gameRules(){
  if(gamerule==("default")){
    numNeeded=21
    numLow=4
    numHigh=24
    range=numHigh-numLow+1
  }
}
function draw() {
  clear()
  
  gameRules()
  background(235,112,120);
if(win){
  for(var j=0; j<4; j++){
    die[j].display(j*dcWidth+dcOff*(j+1),WIDTH/12.5)
  }
  /* if(frameCount%1==0){
    turnScore=0
    for(var j=0;j<4;j++)
      die[j].roll()
    mouseReleased()
  }
  /*die[0].display(30,20)
  die[1].display(90,20)
  die[2].display(140,20)
  die[3].display(180,20)*/
  displayScore()
  textSize(WIDTH/10)
  textAlign(CENTER)
    text(turnScore,WIDTH/2,WIDTH/1.5)
  textSize(WIDTH/20)
  text(numRolls/4+" rolls",WIDTH/2, WIDTH/2)
  if(mouseIsPressed&&frameCount%2==0){
    turnScore=0
    for(var j=0;j<4;j++)
      die[j].roll()
  }
  checkForWin()
}else{
  
  clear()
  background(235,112,120);
  textSize(WIDTH/5)
  textAlign(CENTER)
  text("You Win",WIDTH/2,WIDTH/2)
  textSize(WIDTH/20)
  text(timeToWin+" seconds to complete",WIDTH/2,WIDTH/1.1)
  text(numRolls/4+" rolls to complete", WIDTH/2,WIDTH/1.2)
  text(round(totRolls/resets,2)+" avgerage amount of rolls", WIDTH/2, WIDTH/1.3)
  if(mouseIsPressed)
    newGame()
}
}
function checkForWin(){
  var amountGot=0
  for(var i=0;i<=numHigh-numLow+1;i++){
    if(sc[i]){
      amountGot++
    }
  }
  if(amountGot==numNeeded){
    win=false
    timeToWin=round((frameCount-frameStart)/60,2)
    totRolls=totRolls+(numRolls/4)
  totTime=totTime+timeToWin
  }
}
function displayScore(){
var numOff=WIDTH/8
var inc=0
  textAlign(RIGHT)
  textSize(WIDTH/20)
  for(var yy=1; yy<=range/7;yy++){
    for(var xx=1; xx<=range/3;xx++){
      if(!sc[inc]){
    text(inc+4,xx*numOff,(WIDTH/(10/(yy+3))+WIDTH/3))
  }
      inc++
    }
  }
}
function score(){
  for(var i=0;i<22;i++){
    //print(turnScore)
   // if(sc[i]&&turnScore==i+4){
    // newGame() 
   // }
    if(!sc[i]&&turnScore==i+4){
      sc[i]=true;

    }   
  }
}
function mouseReleased(){
  if(die[0].rolling==true)
    for(j=0;j<4;j++)
      die[j].stopAndScore()
  score()
}
function newGame(){
for(var i=0; i<22;i++){
  sc[i]=false
}
  win=true
  numRolls=0;
  frameStart=frameCount
  resets++
}
class dice{
  
  constructor(){
    this.num=6
  
    this.rolling=false
  }
  display(x,y){
    this.x=x  
    this.y=y
    
    this.middleX=((this.x+this.x+dcWidth)/2)
    this.middleY=((this.y+this.y+dcWidth)/2)
    this.topLeftX=((this.x+this.middleX)/2)
    this.topLeftY=((this.y+this.middleY)/2)
    this.botRightX=((this.x+dcWidth+this.middleX)/2)
    this.botRightY=((this.y+dcWidth+this.middleY)/2)
    this.topRightX=((this.x+dcWidth+this.middleX)/2)
    this.topRightY=((this.y+this.middleY)/2)
    this.botLeftX=((this.x+this.middleX)/2)
    this.botLeftY=((this.y+dcWidth+this.middleY)/2)
    this.midLeftX=((this.topLeftX+this.botLeftX)/2)
    this.midLeftY=((this.topLeftY+this.botLeftY)/2)
    this.midRightX=((this.topRightX+this.botRightX)/2)
    this.midRightY=((this.topRightY+this.botRightY)/2)
    fill(255)
    square(this.x,this.y,dcWidth,10)
    fill(0)
    if(this.num==1)//no brackets
    ellipse(this.middleX,this.middleY,WIDTH/40)
    else if(this.num==2){
    ellipse(this.topLeftX,this.topLeftY,WIDTH/40)
    ellipse(this.botRightX,this.botRightY,WIDTH/40)
  } else if(this.num==3){
        ellipse(this.topLeftX,this.topLeftY,WIDTH/40)
    ellipse(this.botRightX,this.botRightY,WIDTH/40)
    ellipse(this.middleX,this.middleY,WIDTH/40)
  } else if(this.num==4){
    ellipse(this.topLeftX,this.topLeftY,WIDTH/40)
    ellipse(this.botRightX,this.botRightY,WIDTH/40)  
    ellipse(this.topRightX,this.topRightY,WIDTH/40)
    ellipse(this.botLeftX,this.botRightY,WIDTH/40)
  } else if(this.num==5){
          ellipse(this.topLeftX,this.topLeftY,WIDTH/40)
    ellipse(this.botRightX,this.botRightY,WIDTH/40)  
    ellipse(this.topRightX,this.topRightY,WIDTH/40)
    ellipse(this.botLeftX,this.botRightY,WIDTH/40)      
    ellipse(this.middleX,this.middleY,WIDTH/40)
  } else if(this.num==6){
    ellipse(this.topLeftX,this.topLeftY,WIDTH/40)
    ellipse(this.botRightX,this.botRightY,WIDTH/40)  
    ellipse(this.topRightX,this.topRightY,WIDTH/40)
    ellipse(this.botLeftX,this.botLeftY,WIDTH/40)
    ellipse(this.midLeftX,this.midLeftY,WIDTH/40)
    ellipse(this.midRightX,this.midRightY,WIDTH/40)
  }
  }
  updateX(x){
this.x=x
}
  updateY(y){
this.y=y
}
  roll(){
    this.rolling=true
  this.num=this.num+1
    if(this.num>6)
      this.num=1
}
  stopAndScore(){
    this.rolling=false
    this.num=int(random(1,7))
    numRolls=numRolls+1
    turnScore=turnScore+this.num
  
  }
  
}