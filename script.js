var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("change_btn");


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;

}

function backgroundColor() {
	body.style.background = 
	'linear-gradient(to right, ' 
	+ color1.value 
	+ ', ' 
	+ color2.value
	+ ')';

	btn.style.background = 
	'linear-gradient(to right, ' 
	+ color1.value 
	+ ', ' 
	+ color2.value
	+ ')';
}

function changeClickColor() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
}

function changeColor() {
	backgroundColor()
	
	css.textContent = body.style.background + ';';
}

function btnChangeColor() {
	changeClickColor()
	backgroundColor()
	css.textContent = body.style.background + ';';
}


backgroundColor()
color1.addEventListener("input", changeColor);
color2.addEventListener("input", changeColor);
btn.addEventListener('click', btnChangeColor);