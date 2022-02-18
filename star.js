let color=0;
let factor=1;
let yPos=360;
let xPos=1080/2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 255);
}

function draw() {
  background(255,10);// to 20 einai opacity sto background
  //factor = map(mouseX,0,width,0.1,0.1);
  
  //color=color+20;
  
  //if (color>0) {
    //color=255;
    
  //}
  
  
  yPos--;
  if(yPos<=0){
    xPos=width/2;
    yPos=height; 
    //factor=random(10,3); //pososto klimaka einai ta arguments
    translate(width * 0.5, height * 0.5); 
    
  }
  
  
  push();
  translate(width/2, height/2);
  rotate(frameCount / -70.0);
  fill(51);
  star(0, 0, 350, 50, 3); 
  pop();
   
  push();
  translate(xPos,yPos); //width*0.5
  stroke(0);
  fill(frameCount%255,100,255);
  scale(factor);
  rotate(frameCount / 30.0);
  star(10, 10, 10, 100, 2);
 
  
  pop();
  
  push();
  translate(xPos,yPos); //width*0.5
  stroke(255);
  fill(0,0,0);
  scale(factor);
  rotate(frameCount / 30.0);
  star(10, 10, 10, 50, 50);
  pop();

push();
  translate(xPos/3,yPos); //width*0.5
  stroke(255);
  fill(255,0,0);
  scale(factor);
  rotate(frameCount / 120.0);
  star(50, 10, 10, 50, 50);
  pop();
  
  push();
  translate(3*xPos/2,yPos); //width*0.5
  stroke(255);
  fill(255,0,0);
  scale(factor);
  rotate(frameCount / 120.0);
  star(50, 10, 10, 50, 50);
  
  pop();

}
    
    


function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
