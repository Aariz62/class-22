var mario;
var platformGroup;

function preload(){



}

function setup() {
  createCanvas(displayWidth,668);
  var countDistanceX = 0;
  var platform;
  var gap;

  mario = new Player();
  platformGroup= createGroup();
  for (var i=0;i<100;i++)
	 {
      platform = new Platform(countDistanceX);
      platformGroup.add(platform.spt);
      gap=random([0,0,0,0,80]);
      countDistanceX = countDistanceX + platform.rw + gap; 
   }
 
}

function draw() {
  background('skyblue'); 
  
  translate (-mario.spt.x +width/2,0)

  mario.applyGravity();
  mario.spt.collide(platformGroup);
  drawSprites();

  if(keyDown("right")){
    mario.moveright()
  }

  if(keyDown("left")){
    mario.moveleft()
  }
  
  if(keyDown("space")){
    mario.jump()
  }












}



