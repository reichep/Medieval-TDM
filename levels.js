let currentWave = 0;

function spawnWave(){

currentWave++;

document.getElementById("wave").innerText = "Wave " + currentWave;

for(let i=0;i<10;i++){

setTimeout(()=>{

enemies.push(new Enemy("swordsman", canvas.width/2, 0));

}, i * 800);

}

}
