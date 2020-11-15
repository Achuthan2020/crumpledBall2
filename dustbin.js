class Dustbin {
    constructor(x, y, width, height, angle) {
        var options={
            'restitution':0.3,
            'friction':0.5,
            'density':1.0
    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    this.image=loadImage("dustbin.js");
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        pop(); 
    }  
  }
