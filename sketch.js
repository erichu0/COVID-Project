// module aliases
var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

// create an engine
var engine = Engine.create();
Matter.Engine.run(engine);
world = engine.world;

// some window variables
var winWidth = window.innerWidth;
var winHeight = window.innerHeight;

// list of people
var people = []


engine.world.gravity.y = 1;

// drawing setup
function setup() {
    createCanvas(winWidth, winHeight);

    matterGround = Bodies.rectangle(winWidth / 2, winHeight - 150, winWidth * 2, 300, { isStatic: true, restitution: 0 });
    leftBound = Bodies.rectangle(-50, winHeight / 2, 60, winHeight, { isStatic: true });
    rightBound = Bodies.rectangle(winWidth + 50, winHeight / 2, 60, winHeight, { isStatic: true });

    World.add(world, [matterGround, leftBound, rightBound])

    rectMode(CENTER);
    noStroke();
}

// loop section
function draw() {
    winWidth = window.innerWidth;
    winHeight = window.innerHeight;
    fill(0);
    rectMode(CORNER);
    rect(0, 0, window.innerWidth, window.innerHeight);

    //background(0);
    rectMode(CENTER);
    fill(255);
    rect(winWidth / 2, winHeight - 150, winWidth, 300);
    console.log(winHeight*0.35)
    people.forEach(i => i.show())
}

function windowResized() {
    

    // engine.world.bounds.max.x = winWidth;
    // engine.world.bounds.max.y = winHeight;

    // matterGround.position.y = winHeight-150;
    // matterGround.restitution = 0;

    // rightBound.position.x = winHeight-150;
    resizeCanvas(winWidth, winHeight);
    World.add(world, [matterGround, leftBound, rightBound])
  }