var c = document.getElementById('c');
var ctx = c.getContext('2d');
var scope = 20; //DONT GO OVER 5000, and make it an even number so its accurate
var unit = 1/scope;
initialize();
grid(scope);
console.log('loaded');



function zoomIn(){
if(scope>2){
	scope -=2;
}
equate();
}


function zoomOut(){
scope +=2;
equate();
}

//initialize coordinate plane
function initialize(){
ctx.moveTo(0,c.height/2)
ctx.lineTo(c.width, c.height/2)
ctx.moveTo(c.width/2,0);
ctx.lineTo(c.width/2,c.height)
ctx.stroke();
}

//add scope lines
function grid(scope){
//x
for(i = 0; i<=c.width; i+=(c.width/scope)){
	ctx.beginPath();
  ctx.strokeStyle="#708090";
  ctx.moveTo(i,0);
  ctx.lineTo(i,c.height)
  ctx.stroke();
	ctx.beginPath();
  ctx.strokeStyle="black";
	ctx.moveTo(i,c.height/2+10)
  ctx.lineTo(i,c.height/2-10)
  ctx.stroke();
}
//y
for(i = 0; i<=c.height; i+=(c.height/scope)){
	ctx.beginPath();
  ctx.strokeStyle="#708090";
  ctx.moveTo(0,i);
  ctx.lineTo(c.width,i)
  ctx.stroke();
	ctx.beginPath();
  ctx.strokeStyle="black";
	ctx.moveTo(c.width/2+10,i)
  ctx.lineTo(c.width/2-10,i)
  ctx.stroke();
}
}
function reset(){
ctx.setTransform(1, 0, 0, 1, 0, 0);
ctx.clearRect(0,0,5000,5000);
initialize();
grid(scope);
}
function equate(){
reset();
reset();
ctx.translate(c.width/2,c.height/2)
var eq = document.getElementById('equation').value;
ctx.beginPath();
ctx.moveTo(-c.width/2,0);
	for(var x = -c.width/2; x <=c.width/2; x+=unit){
  	var y = -eval(eq);
  	//var xCoor = Math.max(Math.min(x*(c.width/scope), c.width/2), -c.width/2);
  	//var yCoor = Math.max(Math.min(y*(c.height/scope), c.height/2), -c.height/2);
  	ctx.lineTo(Math.max(Math.min(x*(c.width/scope), c.width/2), -c.width/2), Math.max(Math.min(y*(c.height/scope), c.height/2), -c.height/2));                                   
  }
  ctx.stroke();
}
