const playingField = document.getElementById("playing-field")
const down = document.getElementById("down")
const up = document.getElementById("up")
const right = document.getElementById("right")
const left = document.getElementById("left")
const ball = document.getElementById("ball")
ball.style.backgroundColor ="blue"
let newleft=ball.style.left;
let newbottom=ball.style.bottom;

const movment = function(styleDerction){
    let diraction = parseInt(styleDerction) || 0
    if(arguments[1]==-1){
        diraction -= 15   
    } else{
        diraction += 15 
    }    
    return styleDerction = diraction + "px"
}

up.onclick=function () {
   ball.style.top=movment(newbottom,-1)
   newbottom=ball.style.top
   
}
left.onclick=function () {
    ball.style.left=movment(newleft,-1)
    newleft=ball.style.left;
    
    
}
right.onclick=function () {   
    ball.style.left=movment(newleft)
    newleft=ball.style.left;
    
}
down.onclick=function () {    
    ball.style.top=movment(newbottom)
    newbottom=ball.style.top    
    
}

   

const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)


const subHeader= document.createElement("h2");
subHeader.innerHTML="hello the best game "
subHeader.setAttribute("class","mySubHeader")
document.body.appendChild(subHeader);








