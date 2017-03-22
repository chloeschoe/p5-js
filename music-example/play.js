
//Structure

var canvas = document.getElementById("myCanvas");

var ctx = canvas.getContext('2d');

var ballRadius = 10;

var x = canvas.width/2;

var y = canvas.height-30; 

var dx = 4; // speed along x

var dy = -3.75; // speed along y 

// Design of the ball  

function drawBall () {

	ctx.beginPath();
	ctx.arc (x,y, ballRadius,0, Math.PI*2);
	ctx.fillStyle = "#98FB98";
	ctx.fill();
	ctx.closePath();
}



function draw () {
	ctx.clearRect (0,0,canvas.width, canvas.height);
	drawBall();

	if (x + dx>canvas.width-ballRadius || x + dx <ballRadius) {

		dx = -dx;
	}

	if (y+dy > canvas.height-ballRadius || y + dy <ballRadius) {

		dy = -dy;
	}

	x +=dx;
	y +=dy;

}

// Set speed 

setInterval (draw,10);

// ball #2





