let selectedTower = null;

function selectTower(type){
selectedTower = type;
}

canvas.addEventListener("click",function(e){

if(!selectedTower) return;

const rect = canvas.getBoundingClientRect();

let x = Math.floor((e.clientX - rect.left)/32)*32;
let y = Math.floor((e.clientY - rect.top)/32)*32;

towers.push(new Tower(selectedTower,x,y));

});

class Tower{

constructor(type,x,y){

const stats = TOWER_TYPES[type];

this.type = type;
this.x = x;
this.y = y;

this.range = stats.range;
this.damage = stats.damage;
this.rate = stats.rate;

this.cooldown = 0;

}

update(){

this.cooldown--;

if(this.cooldown <= 0){

let target = findTarget(this);

if(target){

target.hp -= this.damage;
this.cooldown = this.rate;

}

}

}

draw(){

ctx.fillStyle="blue";
ctx.fillRect(this.x,this.y,24,24);

}

}

function updateTowers(){

for(let t of towers){
t.update();
}

}

function drawTowers(){

for(let t of towers){
t.draw();
}

}

function findTarget(tower){

for(let e of enemies){

let dx = e.x - tower.x;
let dy = e.y - tower.y;

let dist = Math.sqrt(dx*dx + dy*dy);

if(dist < tower.range){
return e;
}

}

return null;

}

const TOWER_TYPES = {

archer:{range:120,damage:10,rate:60},
ballista:{range:180,damage:25,rate:90},
trebuchet:{range:220,damage:35,rate:120},
tar:{range:80,damage:4,rate:40},
mage:{range:150,damage:15,rate:70},
poison:{range:150,damage:5,rate:80},
dragon:{range:100,damage:20,rate:150}

};