class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visibility=255;
      this.image=loadImage("block.png")
    }
    display(){
      var pos= this.body.position;
      if(this.body.speed < 8){ 
        push(); 
        translate(pos.x, pos.y); 
        rectMode(CENTER); 
        rect(0,0,this.width, this.height); 
        pop(); 
      } else{ 
        World.remove(world, this.body); 
        push(); 
        this.visibility = this.visibility - 5; 
        tint(255,this.visibility); 
        pop(); 
      }
  
     

      rectMode(CENTER);
      rect(pos.x,pos.y,this.width, this.height);
    }
}

 