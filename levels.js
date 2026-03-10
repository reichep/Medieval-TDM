function spawnWave(){

for(let i=0;i<10;i++){

setTimeout(()=>{

enemies.push(new Enemy("swordsman",300,0));

}, i*800);

}

}