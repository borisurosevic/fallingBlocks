class Barrier{
	constructor(){
		this.w = 30;
		this.h = 30;
		this.x = floor(random(30,340));
		this.y = 0;
		this.speed = 6;
		this.stoped = false;
	}

	show(){
		fill( 0, 0, 0 );
		rect( this.x, this.y, this.w, this.h, 2 );
	}

	move(){
		if ( !this.stoped ){
			this.y += this.speed;
			if ( this.y > height ){
				this.x = floor(random(30,340));
				this.y = 0;
				counter++;

				if ( counter%4 == 0 ){
					barrier.speed += 2;
				}
			}
		}
	}
	
	stop(){
		this.stoped = true;
	}
}