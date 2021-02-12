class Bird{
    constructor(x,y)
    {
    var options ={
        //isStatic:true
       restitution:0.8,
       friction:1,
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
     pos.x=mouseX;
     pos.y=mouseY;
    push ();
    translate(pos.x,pos.y)
    angleMode(RADIANS);
    rotate (angle);
    fill ("cyan");
    stroke("lime");
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop();
    }
    
    }



