var bg,asteroidImage,rocketImage;
var gameState="play"

function preload(){
bg=loadImage("spacebg.jpeg")
asteroidImage=loadImage("asteroid.png")
rocketImage=loadImage("rocket.png")
}

function setup() {
 createCanvas(600,600)
 bgs=createSprite(300,300,600,600)
 bgs.velocityY=5
 bgs.addImage(bg)
 bgs.scale=2
rocket=createSprite(300,500,30,30)
rocket.addImage(rocketImage)
rocket.scale=0.7
asteroidGroup=new Group()
}


function draw() {
    background("black")
    if(gameState==="play"){

    
    if(bgs.y>700){
        bgs.y=300
    }
    rocket.x=World.mouseX
 drawSprites()
createAsteroid()
    }
    if(gameState==="end"){
        textSize(30)
        fill("red")
        text("GAME OVER",250,300)
    }
if(rocket.isTouching(asteroidGroup)){
gameState="end"
}
}
function createAsteroid(){
    if(frameCount%100===0){
asteroid=createSprite(random(0,600),10,20,30)
asteroid.velocityY=3
asteroid.addImage(asteroidImage)
asteroid.lifetime=600
asteroid.scale=0.5
asteroidGroup.add(asteroid)
    }
}
