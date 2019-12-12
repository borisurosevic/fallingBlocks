class Block{
	constructor(){
		this.w = 65;
		this.h = 65;
		this.x = 200;
		this.y = height - 80;
		this.step = 18;
		this.r = this.g = this.b = 255;
	}

	show(){
		fill( this.r, this.g, this.b );
		rect( this.x, this.y, this.w, this.h, 10 );
	}

	moveLeft(){
		if ( leftWall.x + leftWall.w + this.step < this.x ){
			this.x -= this.step;
		}else{
			this.x = leftWall.x + leftWall.w;
		}
	}

	moveRight(){
		if ( rightWall.x - rightWall.w - this.step > this.x + this.w ){
			this.x += this.step;
		}else{
			this.x = rightWall.x - this.w;
		}
	}

	end(){
		this.g = 0;
		this.b = 0;
		barrier.stop();
	}

	collision(barrier){
		if ( barrier.y + barrier.h > this.y && barrier.y + barrier.h < this.y + this.h ){
			if ( barrier.x > this.x && barrier.x < this.x + this.w || barrier.x + barrier.w > this.x && barrier.x + barrier.w < this.x + this.w ){
				this.end();
			}
		}
	}
}