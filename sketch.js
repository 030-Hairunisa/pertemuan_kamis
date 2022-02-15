let j;
unction setup() {
  // put setup code here
  createCanvas(400,200);
  j = 0;
}

function draw() {
  // put drawing code here
  background(200);
  
  strokeWeight(8);
  stroke(243, 31, 22);
  point(200,100);
  line(0,0,50,180);

  fill(139,0,0);
  rect(150,20, 20, 100);
  
  strokeWeight(2);
  fill(90, 166, 2);
  ellipse(150, 120, 20, 20);
  ellipse(200, 120, 20, 50);
  
  strokeWeight(0);
  //noStroke()

  fill(90, 2, 2);
  triangle(20, 20, 20, 40, 60, 20);
  arc(70, 50, 40, 40, radians(0), radians(0));

  beginShape();
  vertex(300,50);
  vertex(350,100);
  endShape(close);

  for (var i=0; i<=400; i++){
    x = i
    y = 300 + Math.sin(x)
    point(x,y)
  }
  var y = 200 + 20*Math.sin(PI*j)
}