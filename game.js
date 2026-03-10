const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const TILE = 32;
const GRID_W = 16;
const GRID_H = 20;

let towers = [];
let enemies = [];

function drawGrid(){

ctx.strokeStyle="#567d46";

for(let x=0;x<GRID_W;x++){
for(let y=0;y<GRID_H;y++){
ctx.strokeRect(x*TILE,y*TILE,TILE,TILE);
}
}

}

function update(){

updateEnemies();
updateTowers();

}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

drawGrid();

drawEnemies();
drawTowers();

}

function gameLoop(){

update();
draw();

requestAnimationFrame(gameLoop);

}

gameLoop();