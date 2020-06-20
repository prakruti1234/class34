const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var paint;


function setup(){
    var canvas = createCanvas(2000,2000);
    engine = Engine.create();
    world = engine.world; 
    paint = new Paint(200,200);
    
}

function draw(){
        
 
        Engine.update(engine);
   
 paint.display(); 

  
}


