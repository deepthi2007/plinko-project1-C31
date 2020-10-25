const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;

var particles=[];
var plinkos=[];
var divisions=[];
var divisionHeight=300;

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,750,480,50);

  for(var k=0;k<480;k=k+60){
    divisions.push(new Division(k,580,10,divisionHeight));
  }

  for(var j=50;j<430;j=j+50){
    plinkos.push(new Plinko(j,100));
  }
  for(var j=50;j<430;j=j+50){
    plinkos.push(new Plinko(j,200));
  }
  for(var j=50;j<430;j=j+50){
    plinkos.push(new Plinko(j,300));
  }
}

function draw() {
  background(0,0,0);
  
  Engine.update(engine);

  ground.display();

  for(var k=0;k<divisions.length;k++){
    divisions[k].display();
  }

  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();
  }

  for(var i=0;i<particles.length;i++){
    particles[i].display();
  
  }

  mousePressed();
  drawSprites();
}

function mousePressed(){
  particles.push(new Particle(random(0,480),0));


}