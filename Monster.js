class Monster{
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':0.009,
            'density':1.0
        }
       
        this.width = 400;
        this.height =400;
        this.image = loadImage("Monster-01.png");
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}