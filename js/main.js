var canvas = document.getElementById("sierpinskiCanvas");
var ctx = canvas.getContext("2d");	
var fillColor = document.getElementById("myColor").value;
var depth;
var rescursividad = document.getElementById("opcion2");

updateConfiguration();

function updateConfiguration(){	
	var slider = document.getElementById("myRange");
	depth = slider.value;
	document.getElementById("rangeText").innerHTML = depth; // Display the default slider value	
	drawSierpinski(depth);
}

function changeColor(){			
	fillColor = document.getElementById("myColor").value;
	ctx.fillStyle = fillColor;
	ctx.fill();
}

function drawSierpinski(d){	
	clearSierpinski();
	drawTriangle(d,ctx);		
	ctx.fillStyle = fillColor;
	ctx.fill();
	ctx.strokeStyle = 'black';
	ctx.lineWidth = 1;
	ctx.stroke();
}

function clearSierpinski(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.resetTransform();
	ctx.beginPath();
	ctx.moveTo(0,0);
}

var iteration;
var myTimer;
var input1 = document.getElementById("opcion1")
var input2 = document.getElementById("opcion2")
var inputRange = document.getElementById("myRange")

function startAnimation(){
	iteration = 1;
	clearSierpinski();
	drawSierpinski(0);
	if (opcion1.checked) {
		var value = Number(inputRange.value) * 1000
		myTimer = setInterval(showAnimation, value);
    }
	else if (rescursividad.checked) {
		myTimer = setInterval(showAnimation2, 1000);
	}
	
}

function showAnimation(){
	drawSierpinski(iteration%8);
	iteration++;
}

function showAnimation2(){
	if (iteration == inputRange.value) {
		clearInterval(myTimer);
		console.log(iteration, inputRange.value)
	}
	drawSierpinski(iteration%8);
	iteration++;
}

function stopAnimation(){
	clearInterval(myTimer);
}