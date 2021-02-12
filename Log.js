class Log{

    constructor(x,y,h,angle)
    {
    var options ={
        //isStatic:true
       restitution:0.8, 
       friction:1,
       density:1
    }
    this.body=Bodies.rectangle(x,y,20,h,options);
    Matter.Body.setAngle(this.body,angle);
    World.add(myWorld,this.body);
    
    this.width=20;
    this.height=h;
    }
    
    display()
    {
     var pos=this.body.position;
     var angle=this.body.angle;
    push ();
    translate(pos.x,pos.y)
    angleMode(RADIANS);
    rotate (angle);
    strokeWeight ("green")
    fill("white");
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
    }
    
    }
