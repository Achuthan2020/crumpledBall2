class crumpledBall {
    constructor(x,y){
        var options={
            'restitution':0.5,
            'friction':0.3,
            'density':0.5
    }
    this.body=this.circle(x,y,20,40,options);
    this.image=loadImage("ball.png");
}
  display() {
    strokeWeight(4);
    stroke("pink");
    fill("pink"); 
  } 

    
}