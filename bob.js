class bob {
    constructor(x, y,radius) {
        var options = {
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Matter.Bodies.circle(x, y, radius,options);
        this.radius = radius
        
      }
      display(){
        var pos =this.body.position;
        ellipseMode(RADIUS);
        fill("silver");
        ellipse(pos.x, pos.y, this.radius,this.radius);
        pop();
    }
};