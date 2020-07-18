class PaperBall{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        World.add(world,this.body);
        this.image = loadImage("Sprites/paperball.png");
    }
    display(){
        var pos = this.body.position;
        push();
       
        translate(pos.x,pos.y);
        image(this.image,pos.x,pos.y,this.radius,this.radius)
        fill("red");
        
        pop();
    }
}