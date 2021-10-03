var iss, spacebg, sc1, sc2, sc3, sc4
function preload(){
spacebg= loadImage("spacebg.jpg")
issImage= loadImage("iss.png")
sc1= loadImage("spacecraft1.png")
sc2= loadImage("spacecraft2.png")
sc3= loadImage("spacecraft3.png")
sc4= loadImage("spacecraft4.png")

}



function setup() {
  createCanvas(800,400);
  sc= createSprite(400,350,50,50)
 sc.addImage(sc1)
 sc.scale=.2
  iss= createSprite(400, 150, 50, 50);
 iss.addImage(issImage)
 iss.scale=.5
 iss.debug=true
 iss.setCollider("rectangle",0,0,50,50)

}

function draw() {
  background(spacebg);  
  if(keyDown (UP_ARROW)){
sc.y=sc.y-2
sc.addImage(sc2)
  }
  if(keyDown (LEFT_ARROW)){
    sc.x=sc.x-2
    sc.addImage(sc3)
      }
      if(keyDown (RIGHT_ARROW)){
        sc.x=sc.x+2
        sc.addImage(sc4)
          }
          if(keyDown (DOWN_ARROW)){
            sc.y=sc.y+2
            sc.addImage(sc1)
              }
  if(sc.isTouching(iss)){
    textSize(20)
    text("docking successful",400,350)
  }
  drawSprites();

}