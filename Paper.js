class paper{

    constructor(x,y,width,height){
    
        var options={ isStatic:false,
             restitution:0.3, 
            friction:0.5,
             density:0.9
            }
    this.width=width;
    this.height=height;
        
    this.body=Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
   
    this.image=loadImage("paper.png")
 
    }
    
    display() {
    var pos=this.body.position;
    push();
    fill("white");
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
    
    }
    
    
    }
    