class Pig {

    constructor(x,y,w,h)
    {
    var options ={
        //isStatic:true
       restitution:1,
       friction:0.3,
       density:1
    }
    this.body=Bodies.rectangle(x,y,50,50,options);
    World.add(myWorld,this.body);
    
    this.width=50;
    this.height=50;
    }
    
    display()
    {
     var pos=this.body.position;
     var angle=this.body.angle;
    push ();
    translate(pos.x,pos.y)
    angleMode(RADIANS);
    rotate (angle);
    fill ("red");
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
    }
    
    
}