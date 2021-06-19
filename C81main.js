var canvas=document.getElementById("canvaso");
ctx=canvas.getContext("2d");

var color="red";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", mouse);

function mouse(e){
    color=document.getElementById("jomama").value;
    console.log(color);
    var x=e.clientX-canvas.offsetLeft;
    var y=e.clientY-canvas.offsetTop;
    console.log("x= " +x+ " y= " +y);
    circle(x, y);
}
function circle(x , y){
    ctx.beginPath();    
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(x, y, 40, 0, 2*Math.PI);
    ctx.stroke();
}
function tenhut(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
}


    

