var colors= {
  color1: ["rgb(000,000,000)"," rgb(140,167,047)"],
  color2: ["rgb(000,000,000)"," rgb(001,065,059)"],
  color3: ["rgb(000,000,000)"," rgb(015,068,003)"],
  color4: ["rgb(000,000,000)"," rgb(003,167,137)"],
  color5: ["rgb(000,000,000)"," rgb(002,115,104)"]
}
var curColorMode=1//grab from cookie made from theme page default to 0 if not found




function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
 // console.log(cname + "=" + cvalue + ";" + expires + ";path=/")
}



function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


function saveColors(){
  setCookie("colors", ""+colors.color1+'NC'+colors.color2+'NC'+colors.color3+'NC'+colors.color4+'NC'+colors.color5,999)
  setCookie("colorMode",curColorMode,999)
}

function setColors(){
  //console.log(getCookie("colors"))
  var colorCook=getCookie('colors').split("NC")
  var count=0;
  for(var curCol of colorCook){
    //console.log(curCol)
    count++
    eval('colors.color'+count+'=[]')
    for(var cur of curCol.split(', ')){
     // console.log(cur)

      //console.log('colors.color'+count+'.push(" '+cur+'")')
      cur=cur.replace(" ","")
      eval('colors.color'+count+'.push(" '+cur+'")')//Weakness allows people to arbitrarily execute code, however I dont care
      
      //console.log(colors.color1)
    }
  }
}
function changeColorMode(cToo){
  curColorMode=cToo
  saveColors()
}
function changeCustColor(cAt, cToo){
  //console.log('colors.color'+cAt+'[0]='+cToo)
  eval('colors.color'+cAt+'[0]="'+cToo+'"')
  saveColors()
  
}








var C1B=document.getElementsByClassName("C1B")
var C1T=document.getElementsByClassName("C1T")
var C1Border=document.getElementsByClassName("C1Border")
var C2B=document.getElementsByClassName("C2B")
var C2T=document.getElementsByClassName("C2T")
var C3B=document.getElementsByClassName("C3B")
var C3T=document.getElementsByClassName("C3T")
var C4B=document.getElementsByClassName("C4B")
var C4T=document.getElementsByClassName("C4T")
var C5B=document.getElementsByClassName("C5B")
var C5T=document.getElementsByClassName("C5T")





var color= function (){
for (let act of C1B) {
  act.style.backgroundColor=""+colors.color1.at(curColorMode)
}

for (let act of C1T) {
  act.style.color=""+colors.color1.at(curColorMode)
}

for (let act of C1Border){
  act.style.borderColor=""+colors.color1.at(curColorMode)
}
  
for (let act of C2B) {
  act.style.backgroundColor=""+colors.color2.at(curColorMode)
}

for (let act of C2T) {
  act.style.color=""+colors.color2.at(curColorMode)
}

for (let act of C3B) {
  act.style.backgroundColor=""+colors.color3.at(curColorMode)
}

for (let act of C3T) {
  act.style.color=""+colors.color3.at(curColorMode)
}

for (let act of C4B) {
  act.style.backgroundColor=""+colors.color4.at(curColorMode)
}

for (let act of C4T) {
  act.style.color=""+colors.color4.at(curColorMode)
}

for (let act of C5B) {
  act.style.backgroundColor=""+colors.color5.at(curColorMode)
}

for (let act of C5T) {
  act.style.color=""+colors.color5.at(curColorMode)
}
}
//console.log(color)
setColors()
saveColors()
setColors()

 changeCustColor(1,' rgb(050,100,050)')
 //console.log(colors.color1)
setInterval(color,1)