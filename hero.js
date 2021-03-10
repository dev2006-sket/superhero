class Hero {
    constructor(x, y, r){
      var options = {
        density : 1,
        frictionAir : 1
      };
      this.x = x;
      this.y = y;
      this.r = r;
      this.image = loadImage("Superhero-01.png");
      this.body = Bodies.circle(this.x, this.y, (this.r)/2, options);
      World.add(world, this.body);
    }
  
    display() {
      var position = this.body.position;
      var angle = this.body.angle;
      push();
      translate(position.x, position.y);
      rotate(angle);
      fill('blue');
      ellipse(0 ,0, this.width, this.height);
      pop();   
    }
  }
  