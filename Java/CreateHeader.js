var loc;
var curTheme=0 //grab from cookie made from theme page default to 0 if not found

function makeTheThing(location){
  var headerDiv=document.getElementById("header")
  //add tippy top canvas projects for eyePleasing
//switch case with cur theme for different headers to match with theme

  
const HeaderCellConsts=` onmouseover="changeClass('C4B', this); addClass('C2T',this)" onmouseout="changeClass('C2B C4T', this); updateHeadLoc()" style="padding:0.75%"`//constanst for style/func of header buttons
  const linkConsts=`style='text-decoration: none; color:inherit; width:100%; padding-left:22.5%; padding-right:22.5%; padding-top:2%; padding-bottom:2%'`//constants for links in header buttons
  
  headerDiv.innerHTML+=`<img width=100% src="../images/all banners/evengoodererbanner.jpg"> </img><table class="C2B C4T" width=100% style="text-align:center; font-size:2.5vw; padding:0.25%">
      <tr id="tableRow">
      <td id="Home" `+HeaderCellConsts+`><a `+linkConsts+` href='../index.html'>Home</a></td>
      <td id="About Me" `+HeaderCellConsts+`><a `+linkConsts+` href='../Pages/Facts.html'>About Me</a></td>
      <td id="Projects" `+HeaderCellConsts+`><a `+linkConsts+` href='../Pages/Projects.html'>Projects</a></td>
      <td id="Quotes" `+HeaderCellConsts+`><a `+linkConsts+` href='../Pages/Quotes.html'>Quotes</a></td>
      <td id="Themes" `+HeaderCellConsts+`><a `+linkConsts+` href='../Pages/Themes.html'>Themes</a></td>
      </tr>
    </table>`
    temp=document.getElementById(location)
  temp.className="C5B"
  loc=location
    temp2=document.getElementById("tableRow")
 
  
  //console.log(temp)

}
function updateHeadLoc(){
  temp=document.getElementById(loc)
  temp.className+=" C5B"
}

function changeClass(one,two){
  two.className=one
  //console.log(two)
}
function addClass(one,two){
  two.className+=" "+one
}
function removeClass(one,two){
  two.className.replace(one,'')
}


