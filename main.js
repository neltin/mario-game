import './style.css';

//CANVAS
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");


//Tamaño del cambas segun el tamaño de la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const gravity = 1.5;


class Player {
  constructor(){
    this.position ={
      x:100,
      y:100,
    }

    this.velocity = {
      x: 0,
      y: 0
    }

    this.width = 30;
    this.height = 30;
  }

  draw(){
    context.fillStyle = "red";
    
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(){
    this.draw();

    this.position.y += this.velocity.y;
    this.position.x += this.velocity.x;
    
    if(this.position.y + this.height + this.velocity.y <= canvas.height){ 
      this.velocity.y += gravity; 
    }else{ 
      this.velocity.y = 0;
    }

  }
}

const player = new Player();

const keys = {
  left:{ pressKey: false},
  right:{ pressKey: false}
}




const animate = () =>{
  requestAnimationFrame(animate);
  context.clearRect(0, 0 , canvas.width, canvas.height);

  if(keys.left.pressKey){
    player.velocity.x = -5;

  }else if(keys.right.pressKey){
    player.velocity.x = 5;  

  }else{
    player.velocity.x = 0;   
  }
  
  player.update();
} 


window.addEventListener("keydown", event=> {
  if(event.key == "ArrowLeft"){ 
    keys.left.pressKey = true;
   
  }
  
  if(event.key == "ArrowRight"){ 
    keys.right.pressKey = true;
  }
  
  if(event.key == "ArrowDown") {

  }

  if(event.key == "ArrowUp") {
      player.velocity.y -= 20;    
    }
  });
  
  window.addEventListener("keyup", event=> {
  if(event.key == "ArrowLeft"){ 
    keys.left.pressKey = false;
  }
  
  if(event.key == "ArrowRight"){ 
    keys.right.pressKey = false;
  }

  if(event.key == "ArrowDown") {

  }
});

animate();

//console.log(context);
