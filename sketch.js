const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground1;
var box1,box2 ,box3, box4, box5, box6, box7, box8, box9, box10, box11, box12;
var bob1;
var chain1;

function preload() {
  
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground1=new ground(750,350,250,10)
 box1=new box(800,300);
 
 box2=new box(780,250);
 box3=new box(765,200);
 //box4=new box(800,150);
 box5=new box(750,300);
 box6=new box(730,250);
 //box7=new box(750,200);
 //box8=new box(750,150);
 box9=new box(700,300);
 box10=new box(1000,250);
 box11=new box(1000,200);
 box12=new box(1000,150);
 bob1=new bob(600,300);
 chain1=new chain(bob1.body,{x:600,y:100});
  

    //log6 = new Log(230,180,80, PI/2);
   
}

function draw(){
    background(0)
    Engine.update(engine)
    ground1.display()
    box1.display()
   box2.display()
   box3.display()
  //  box4.display()
    box5.display()
    box6.display()
   // box7.display()
   // box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
   bob1.display()
  chain1.display()
 
    
}

function mouseDragged()
{
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:100,y:-100})
}
