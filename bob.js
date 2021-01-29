class Bob {
    constructor(x,y,width,height) {
      var options = {
        restitution:0.3,
        density:1,
        friction:2,
        isStatic:false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      ellipseMode(RADIUS);
      fill("red");
      ellipse(0, 0, this.width, this.height);
      pop()
    }
  };