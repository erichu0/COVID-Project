// module aliases
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create();

// some window variables
const winWidth = window.innerWidth;
const winHeight = window.innerHeight;

// list of people
var people = []

// matter.js setup
engine = Engine.create();
Matter.Engine.run(engine);
world = engine.world;

engine.world.gravity.y = 0.5;

// drawing setup
function setup() {
    createCanvas(winWidth,winHeight);

    matterGround = Bodies.rectangle(winWidth/2, winHeight-150, winWidth*2, 300, {isStatic: true});
    leftBound = Bodies.rectangle(-50, winHeight/2, 60, winHeight, {isStatic: true});
    rightBound = Bodies.rectangle(winWidth+50, winHeight/2, 60, winHeight, {isStatic: true});
    
    World.add(world, [matterGround, leftBound, rightBound])
    
    rectMode(CENTER);
    noStroke();
}

// loop section
function draw() {
    background(0);
    fill(255)
    rect(winWidth/2, winHeight-150, winWidth, 300);
    people.forEach(i => i.show())
}