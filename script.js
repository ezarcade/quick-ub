var frame = document.getElementById("frame");

var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");

btn1.addEventListener("click",link1)
btn2.addEventListener("click",link2)
btn3.addEventListener("click",link3)

function link1(){
  frame.src="https://spew45.github.io/"
}
function link2(){
  frame.src="https://pixabay.com/photo-3126513/"
}
function link3(){
  frame.src="https://pixabay.com/photo-3114729/"
}