export default class PlayerController {
    constructor(){
      this.position ={
        x:100,
        y:400,
      }
  
      this.velocity = {
        x: 0,
        y: 0
      }
  
      this.width = 30;
      this.height = 30;
    }
  
    draw(context){
      context.fillStyle = "red";
      
      context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  
    update({context, canvas, gravity}){
      this.draw(context);
  
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;
      
      if(this.position.y + this.height + this.velocity.y <= canvas.height){ 
        this.velocity.y += gravity; 
      }else{ 
        this.velocity.y = 0;
      }
  
    }
  }