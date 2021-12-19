class Poisonball{
    constructor(x, y) {
      var options = {
        isStatic: true
      };
      this.r = 30;
      this.speed = 0.05;
      this.body = Bodies.circle(x, y, this.r, options);
      this.image = loadAnimation("./assets/poison1.png");
      this.animation = [this.image];
      this.trajectory = [];
      this.isHit = false;
      World.add(world, this.body);
    }
  
    animate() {
      this.speed += 0.05;
    }
  
    remove(index) {
      this.isHit = true;
      Matter.Body.setVelocity(this.body, { x: 0, y: 0 });
  
      this.animation = poisonattack;
      this.speed = 0.05;
      this.r = 150;
      setTimeout(() => {
        Matter.World.remove(world, this.body);
        delete balls[index];
      }, 2000);
    }
  
    shoot() {
    

      Matter.Body.setStatic(this.body, false);
      Matter.Body.setVelocity(this.body, {
        x: velocity.x *(180/3.14), y: velocity.y * (180/3.14)});
    }
     
    display() {
     this.body.position.x
     this.body.position.y
    }






}








