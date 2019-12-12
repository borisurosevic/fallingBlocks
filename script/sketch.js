var counter = 0;

function setup() {
	createCanvas(400,650);
	block = new Block();
	leftWall = new Wall(10);
	rightWall = new Wall(370);
	barrier = new Barrier();
}

function preload(){

}

function draw() {
	background(255);

	textSize(32);
	text(counter, 40, 30);

	leftWall.show();
	rightWall.show();

	block.show();
	block.collision(barrier);

	barrier.show();
	barrier.move();
}

function keyPressed(){
	if ( !barrier.stoped ){
		if (keyCode === LEFT_ARROW) {
			block.moveLeft();
		} else if (keyCode === RIGHT_ARROW) {
			block.moveRight();
		}

		if ( keyCode === UP_ARROW ){
			barrier.speed += 2;
		}else if ( keyCode == DOWN_ARROW ){
			barrier.speed -= 2;
		}
	}
}