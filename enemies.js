class Enemy{

constructor(type,x,y){

const stats = ENEMY_TYPES[type];

this.type = type;
this.x = x;
this.y = y;

this.hp = stats.hp;
this.speed = stats.speed;

}

update(){

this.y += this.speed;

}

draw(){

ctx.fillStyle="red";
ctx.fillRect(this.x,this.y,20,20);

}

}

const ENEMY_TYPES = {

swordsman:{hp:12,speed:1},
pikeman:{hp:10,speed:1},
armored:{hp:30,speed:0.7},
cavalry:{hp:10,speed:3},
heavyCavalry:{hp:30,speed:3},
siege:{hp:150,speed:0.4},
ram:{hp:200,speed:0.5}

};

function updateEnemies(){

for(let e of enemies){
e.update();
}

enemies = enemies.filter(e => e.hp > 0);

}

function drawEnemies(){

for(let e of enemies){
e.draw();
}

}