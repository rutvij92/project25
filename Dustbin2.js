class dustbind{

    constructor(x,y,width,height){
    
        var options={
        isStatic:true
        }
    this.width=width;
    this.height=height;
        
    this.body=Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
   
    this.image=loadImage("dustbingreen.png")
 
    }
    
    display() {
    var pos=this.body.position;
    push();
    fill("white");
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, 0, -this.height/2, this.width, this.height);
    pop();
    
    }
    
    
    }