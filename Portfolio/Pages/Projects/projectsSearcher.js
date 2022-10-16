var projects = []
var divs = []
var currentDirection=1
var currentSortMethod="TIME"
var page=0

var pName, pTime, pLink, pStatus, pFav
class Project {
  constructor(dataLine) {
    var sDLine = dataLine.split(", ")
    this.pName = sDLine[0]
    this.pTime = sDLine[1]
    this.pLink = sDLine[2]
    this.pStatus = sDLine[3]
    if (sDLine[4] == "FAVORITE") {
      this.pFav = true
    } else {
      this.pFav = false
    }
  }
  compName(other){
   if(this.pName.toLowerCase()>other.pName.toLowerCase())
     return 1
    else if(this.pName.toLowerCase()<other.pName.toLowerCase())
      return -1
    else
      return this.compTime(other)
  }
  compTime(other){
    var pSegs=this.pTime.split(".")
    var oSegs=other.pTime.split(".")
    if(pSegs[2]>oSegs[2])
      return 1
    else  if(pSegs[2]<oSegs[2])
      return -1
    else if(pSegs[0]>oSegs[0])
      return 1
    else  if(pSegs[0]<oSegs[0])
      return -1
    else if(pSegs[1]>oSegs[1])
      return 1
    else  if(pSegs[1]<oSegs[1])
      return -1
    else 
      return this.compName(other)
  }
  compStatus(other){
    var pNumStat;
    var oNumStat;
    if(this.pStatus=="INCOMPLETE"){
      pNumStat=0;
    }else if(this.pStatus=="WIP"){
      pNumStat=1;
    }else if(this.pStatus=="COMPLETE"){
      pNumStat=2;
    }
    if(other.pStatus=="INCOMPLETE"){
      oNumStat=0;
    }else if(other.pStatus=="WIP"){
      oNumStat=1;
    }else if(other.pStatus=="COMPLETE"){
      oNumStat=2;
    }
    if(pNumStat>oNumStat)
      return 1
    else if(pNumStat<oNumStat)
      return -1
    
    return this.compName(other)
  }
  
}


function onLoad() {
  for (var i = 1; i < 6; i++) {
    divs.push(document.getElementById("div" + i))
    //divs[i-1].innerHTML="captured"
  }
  //console.log("here")
  var input = "Fish AI, 09.19.2022, ProjFIsh.html, WIP\nMaze, 05.30.2022, https://replit.com/@Jayiscooldoot/Maze-1#main/main.pde, INCOMPLETE\nStarfield, 05.29.2022, https://replit.com/@Jayiscooldoot/StarField, COMPLETE\nTrain game, 05.28.2022, https://replit.com/@Jayiscooldoot/OoeyGooeyTrainGameminiprojecttoaddtobiggerprojectgoesbrrr, INCOMPLETE\nNormal Website, 04.30.2022, https://replit.com/@Jayiscooldoot/NormalWebsite#index.html, COMPLETE, FAVORITE\nWord Matcher, 04.29.2022, https://replit.com/@Jayiscooldoot/Word-matched#Main.java, COMPLETE, FAVORITE\nFractal, 04.21.2022, https://editor.p5js.org/843690/sketches/r0wLPNb7v, COMPLETE\nMusic Gen, 03.30.2022, https://replit.com/@Jayiscooldoot/musicGenNonProcessingCauseItBroke#Main.java, COMPLETE\nSorting Algos, 02.27.2022, https://replit.com/@Jayiscooldoot/Sorting-algos#Main.java, COMPLETE\nTicTacToe, 01.12.2022, https://editor.p5js.org/843690/sketches/QnF440XR2, INCOMPLETE\nParticle Explosion, 01.05.2022, https://editor.p5js.org/843690/sketches/ofxEPLRNA, COMPLETE\nRGB GamerClock, 12.09.2021, https://editor.p5js.org/843690/sketches/9nzQXSrQc, COMPLETE, FAVORITE\nPacGuy, 11.11.2021, https://editor.p5js.org/843690/sketches/2P-YKzGH6, COMPLETE\nRandom Walker, 11.10.2021, https://editor.p5js.org/843690/sketches/Oox21jXxv, COMPLETE\nDice Game, 10.28.2021, https://editor.p5js.org/843690/sketches/zx1AHuOc0, COMPLETE\nScaled Scene, 10.20.2021, https://editor.p5js.org/843690/sketches/0iXmanduM, COMPLETE\nPortfolio, 09.21.2021, https://replit.com/@Jayiscooldoot/Portfolio#index.html, WIP, FAVORITE\nMemory Game, 06.01.2021, https://editor.p5js.org/843690/sketches/5orEB15_-, COMPLETE\nMaze Gen, 09.21.2020, https://replit.com/@Jayiscooldoot/Full-maze#Main.java, COMPLETE".split("\n")
  for (var i of input) {
    projects.push(new Project(i))
  }
  //console.log(projects)
}

 












function updateDivs(sortMethod) {

var culledProjects=projects
if(sortMethod!=null){

  if(sortMethod=="NAME"){
    for(var j=0;j<culledProjects.length;j++){
    for(var i=0;i<culledProjects.length-1;i++){
      if(culledProjects[i].compName(culledProjects[i+1])==currentDirection){//Change to a var swap value to easily swithc between descending and ascending
        var temp=culledProjects[i]
        culledProjects[i]=culledProjects[i+1]
        culledProjects[i+1]=temp
      }
    }
    }
  }

  if(sortMethod=="TIME"){
    for(var j=0;j<culledProjects.length;j++){
    for(var i=0;i<culledProjects.length-1;i++){
      if(culledProjects[i].compTime(culledProjects[i+1])==currentDirection){//Change to a var swap value to easily swithc between descending and ascending
        var temp=culledProjects[i]
        culledProjects[i]=culledProjects[i+1]
        culledProjects[i+1]=temp
      }
    }
    }
  }
  
  if(sortMethod=="STATUS"){
    for(var j=0;j<culledProjects.length;j++){
    for(var i=0;i<culledProjects.length-1;i++){
      if(culledProjects[i].compStatus(culledProjects[i+1])==currentDirection){//Change to a var swap value to easily swithc between descending and ascending
        var temp=culledProjects[i]
        culledProjects[i]=culledProjects[i+1]
        culledProjects[i+1]=temp
      }
    }
    }
  }
}
  

  
  var count = page*5;
  for (var d of divs) {
    if(culledProjects[count]==null){
      d.innerHTML="";
    }else{
    var changeTo="<div style=\" display:table-cell; padding:2.5%; text-align:center; font-size:2.0vw;\" class='C3B C1T'><a class='C1T' style='text-decoration:none;' href=" + culledProjects[count].pLink + ">" + culledProjects[count].pName + "<br>("+culledProjects[count].pLink+")</a></div><div style=\" display:table-cell; padding:2.5%; text-align:center; font-size:2.0vw;\" class='C3B C1T'>" + culledProjects[count].pTime + "</div><div class='C3B'"

    if(culledProjects[count].pStatus=="COMPLETE"){
      changeTo+=" style=\"color:rgb(140,167,47);  display:table-cell; text-align:center; font-size:2.0vw;\">";
    }else if(culledProjects[count].pStatus=="WIP"){
      changeTo+=" style=\"color:rgb(255,255,0);  display:table-cell; text-align:center; font-size:2.0vw;\">"
    }else if(culledProjects[count].pStatus=="INCOMPLETE"){
      changeTo+=" style=\"color:rgb(255,0,0);  display:table-cell; text-align:center; font-size:2.0vw;\">"
    }
    changeTo+=culledProjects[count].pStatus
    
    if(culledProjects[count].pFav){
      changeTo+="<p style=\"color:rgb(205,205,10);\"> &#9733; </p></div>"
    }else{
      changeTo+=" </div>"
    }
    d.innerHTML = changeTo
    }
    count++
  }
}
function sortName(){
  //console.log("pname",projects)
  updateDivs("NAME")
  currentSortMethod="NAME"
  setPage(0)
  //console.log("name",projects)
}
function sortTime(){
  //console.log("ptime",projects)
  updateDivs("TIME")
  currentSortMethod="TIME"
  setPage(0)
  //console.log("time",projects)
}
function sortStatus(){
  //console.log("pStatus",projects)
  updateDivs("STATUS")
  currentSortMethod="STATUS"
  setPage(0)
  //console.log("Status",projects)
}
function flipSort(){
  if(currentDirection==1){
    currentDirection=-1
  }else{
    currentDirection=1
  }
  updateDivs(currentSortMethod)
}
function setPage(toSet){
  page=toSet
  updateDivs()
}
function getPage(){
  return page;
}

onLoad()
updateDivs()
