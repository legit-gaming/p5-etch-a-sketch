var canvasWidth = '600';
var canvasHeight = '600';

var x = canvasWidth / 2;
var y = canvasHeight / 2;
var x_prev = x;
var y_prev = y;

// p5 lifecycle function
function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background('white');

  // Line color and size
  stroke('black');
  strokeWeight(4);
}

// p5 lifecycle function
function draw() {
  // save previous coordinates
  x_prev = x;
  y_prev = y;

  // change position based on key press
  if (keyIsDown(UP_ARROW) && y > 0) {
    y--
  } else if (keyIsDown(DOWN_ARROW) && y < canvasHeight) {
    y++;
  } else if (keyIsDown(RIGHT_ARROW) && x < canvasWidth) {
    x++;
  } else if (keyIsDown(LEFT_ARROW) && x > 0) {
    x--;
  }

  // draw line
  line(x, y, x_prev, y_prev);
}
