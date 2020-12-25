const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Event = Matter.Events;

var engine, world, ground;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {

  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height, width, 20);

  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Divisions(k, height - divisionHeight/2, 10, divisionHeight));
  }


  for(var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75));
  }
  for(var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 175));
  }
  for(var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 275));
  }
  for(var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 375));
  }

}

function draw() {

  background(0);  
  Engine.update(engine);

  ground.display();

  for(var n = 0; n < plinkos.length; n++){
    plinkos[n].display();
  }
  

  if(frameCount % 60 === 0){
    particles.push(new Particle(random(width / 2 - 10, width / 2 + 10), 10, 10));
  }

  for(var m = 0; m < divisions.length; m++){
    divisions[m].display();
  }
  for(var l = 0; l < particles.length; l++){
    particles[l].display();
  }


}