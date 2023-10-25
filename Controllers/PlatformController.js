export default class PlatformController {
    constructor(){
      this.position ={
        x:300,
        y:350,
      }
  
      this.width = 200;
      this.height = 20;
    }
  
    draw(context){
      context.fillStyle = "blue";
      
      context.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }