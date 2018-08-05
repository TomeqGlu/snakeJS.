window.onload=function() {
    canv=document.getElementById("gc");
    ctx=canv.getContext("2d");
    document.addEventListener("keydown",keyPush);
    setInterval(game,1000/15);
}
var playerX;
var playerY;
playerX=playerY=10;
gs=tc=20;
appleX=appleY=15;
xv=yv=0;
trail=[];
tail = 5;
function game() {
    playerX+=xv;
    playerY+=yv;
    if(playerX<0) {
        playerX= tc-1;
    }
    if(playerX>tc-1) {
        playerX= 0;
    }
    if(playerY<0) {
        playerY= tc-1;
    }
    if(playerY>tc-1) {
        playerY= 0;
    }
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canv.width,canv.height);
 
    ctx.fillStyle="lime";
    for(var i=0;i<trail.length;i++) {
        ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2);
        if(trail[i].x==playerX && trail[i].y==playerY) {
            tail = 5;
        }
    }
    trail.push({x:playerX,y:playerY});
    while(trail.length>tail) {
    trail.shift();
    }
 
    if(appleX==playerX && appleY==playerY) {
        tail++;
        appleX=Math.floor(Math.random()*tc);
        appleY=Math.floor(Math.random()*tc);
    }
    ctx.fillStyle="red";
    ctx.fillRect(appleX*gs,appleY*gs,gs-2,gs-2);
}
function keyPush(evt) {
    switch(evt.keyCode) {
        case 37:
            xv=-1;yv=0;
            break;
        case 38:
            xv=0;yv=-1;
            break;
        case 39:
            xv=1;yv=0;
            break;
        case 40:
            xv=0;yv=1;
            break;
    }
}