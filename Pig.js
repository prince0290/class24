class Pig {
    constructor(x,y){
        var options = {
        restitution : 1, 
        friction : 1 , 
        density : 1  
    };
        this.body=Bodies.rectangle(x,y,50,50,options);
        World.add(world,this.body);
        this.width=50;
        this.height=50;
    }
display(){
    var pos  = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    angleMode(RADIANS);
    rotate (angle);
    rectMode(CENTER);
    fill ("red");
    rect (0,0,this.width,this.height)
    pop();
}

}