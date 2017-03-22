function setup() {

	createCanvas (900, 600); 

}

function draw() {
	if(mouseIsPressed) {
		fill(0);
	} else {
		fill(255);
	}

	rect(mouseX,mouseY,80,80); // shape adjustment
	
}


