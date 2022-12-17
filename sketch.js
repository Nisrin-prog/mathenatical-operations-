// Dom - data object model
// Using html in p5

// creating an input box 
var inp,inp1
var x1,x2
var result 

function setup (){
  createCanvas(400,400)
  inp = createInput("").attribute("placeholder","enter the number")
  inp.position(100,200)
  


  inp1 = createInput("").attribute("placeholder","enter the number")
  inp1.position(100,150)
  

  button = createButton('click me');
  button.position(100,250);
  button.mousePressed(operations);
  
}
function draw(){
  background("white")

}

function operations(){
  x1 = inp.value()
  x2 = inp1.value()
  x1 = int (x1)
  x2 = int(x2)
  console.log("Hi")

  console.log(x1)

  var add = x1+x2
  var subtract = x1-x2
  var divide = x1/x2
  var multiply = x1*x2

  var message = createElement ( "h2")
  message.position(10,300)
  message1 = "addition:" + add +  "&emsp;" + " subtraction:" + subtract + "&emsp;" + 
  "multiplication:" + multiply + "&emsp;" +"division:" + divide 
  console.log(message1)
  
  message.html(message1)

}