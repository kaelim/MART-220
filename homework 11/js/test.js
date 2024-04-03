let player, floor;

function setup() {
	new Canvas(500, 240);
	world.gravity.y = 100;
	player = new Sprite(100, 0);
	floor = new Sprite(250, 200, 500, 40, 'static');
}

function draw() {
	clear();
	if (kb.presses()) {
		player.vel.y = 4;
		player.vel.x = 50;
	}
	if (kb.pressing('up')) {
		player.direction = -90;
	} else if (kb.pressing('down')) {
		player.direction = 90;
	} else if (kb.pressing('left')) {
		player.direction = 180;
	} else if (kb.pressing('right')) {
		player.direction = 0;
	} else {
	  player.speed = 0;
	}
	camera.x = player.x;

	new Sprite()
}
