class Boat{
  constructor(x,y,width,height,boatpos){
    this.width= width;
    this.height = height;
    this.boatposition = boatpos;
  
    this.body = Bodies.rectangle(x,y,width,height)
    World.add(world,this.body)

    this.image = loadImage("assets/boat.png")

  }
  remove(index){
    
   

    setTimeout(()=>{
      
      Matter.World.remove(world, boats[index].body)
      delete boats[index]

    },2000)
  }
  display(){
   push()
   translate(this.body.position.x,this.body.position.y)
    imageMode(CENTER)

    image(this.image,0,this.boatposition,this.width,this.height)
    pop()
  }
 
}