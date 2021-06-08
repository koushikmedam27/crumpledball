class Paper{
    constructor(x,y,radius){
        var options ={
            isStatic:false,
            restitution:0.04,
            friction:0,
            density:1.2
        }
this.x=x
this.y=y
this.radius=radius
        this.image=loadImage("paper.png");
        this.body=Bodies.circle(this.x,this.y,(this.radius-20)/2,options)
        World.add(world,this.body)
    }
    
display(){
    
			push()
			translate(this.body.position.x, this.body.position.y);
			imageMode(CENTER);
			image(this.image, 0,0,this.radius,this.radius);
			//rect(0,0,this.dustbinWidth, this.wallThickness);
			pop()
}
}