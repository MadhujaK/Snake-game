var scl = 20;
function setup() {
  createCanvas(600,600);
  x = 0;
  y = 0;
  xspeed = 0;
  yspeed = 0;
  total = 0;
  tail = [];
  pickLocation();
  frameRate(10);
}

function draw() {
  background(51);
  update();
  show();
  fill (255, 0 ,100);
  rect(food.x, food.y, scl, scl);
  
  if (eat(food)) {
    pickLocation();
    total++;
  }
}

function pickLocation() {
  var col = floor(width/scl);
  var row = floor(height/scl);
  food = createVector(floor(random(col)), floor(random(row)));
  food.mult(scl);
}

function update() {
  if (total == tail.length-1) {
    for (var i =0; i < tail.length-1; i++){
    tail[i] = tail[i+1];
  }
  }
  tail[total-1] = createVector(x, y)
  x = x + xspeed*scl;
  y = y + yspeed*scl;
  x = constrain(x, 0, width-scl);
  y = constrain(y, 0, height-scl);
}

function show() {
  fill (255);
  for (var i =0; i < total; i++) {
    rect (tail[i].x, tail[i].y, scl, scl);
  }
  rect (x, y, scl, scl);
}

function dir(x, y) {
  xspeed = x;
  yspeed = y;
}

function keyPressed() {
  if (keyCode == UP_ARROW) {
    dir(0, -1);
  }
  if (keyCode == DOWN_ARROW) {
    dir(0, 1);
  }
  if (keyCode == LEFT_ARROW) {
    dir(-1, 0);
  }
  if (keyCode == RIGHT_ARROW) {
    dir(1, 0);
  }
}

function eat(food) {
  var d = dist(food.x, food.y, x, y)
  if (d < 1) {
    return true;
  }
  else {
    return false;
  }
}
