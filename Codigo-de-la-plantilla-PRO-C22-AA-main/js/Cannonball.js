class Cannonball {
  constructor(x,y){
    var options = {
        isStatic: true
    }

    this.x = x;
    this.y = y;
    this.radius = 30;
    this.body = Bodies.circle(this.x,this.y,this.radius,options);
    this.cannonballImg = loadImage("assets/cannonball.png");
    World.add(world,this.body);
  }
  
  display(){
    var xPos, yPos;
    xPos = this.body.position.x;
    yPos = this.body.position.y;
    push();
    imageMode(CENTER);
    image(this.cannonballImg,xPos,yPos,this.radius,this.radius);
    pop();
  }
}

