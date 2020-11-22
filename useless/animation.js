// const sleep = (milliseconds) => {
//     return new Promise(resolve => setTimeout(resolve, milliseconds))
// }

let engine = Matter.Engine.create();

let render = Matter.Render.create({
    element: document.body,
    engine: engine,

});

engine.world.gravity.y = 0.1;



const windowWidth = window.innerWidth;
var xCor1 = Math.random()*windowWidth;
var xCor2 = Math.random()*windowWidth;

console.log(windowWidth, xCor1, xCor2);

var box1 = Matter.Bodies.rectangle(xCor1,0,20,20,{
    isStatic: false, 
    render: {
        fillStyle: 'red',
        stokeStyle: 'blue',
        lineWidth: 3
    } 
});

console.log(box1.render.fillStyle);

var box2 = Matter.Bodies.circle(xCor2,0,20,{isStatic: false});


Matter.Engine.run(engine);
Matter.Render.run(render);

// const doSomething = async () => {
//     await sleep(1000);
//     spawn();
//   }

// doSomething()

Matter.World.add(engine.world,[box1,box2]);