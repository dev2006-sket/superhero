const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2,box3;
var hero, string, monster;
function preload() {
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    hero = new Hero(100, 300, 10);
    monster = new Monster(200, 100);
     
    
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
   
}

function mouseDragged(){
    Matter.Body.setPosition(hero.body, {x : mouseX, y : mouseY});
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

monster.display();
hero.display();
ground.display();