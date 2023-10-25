import './style.css';
import PlayerController from './Controllers/PlayerController';
import PlatformController from './Controllers/PlatformController';

//CANVAS
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

//Tamaño del cambas segun el tamaño de la ventana
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const gravity = 1.5;

//Nuevo Jugador
const player = new PlayerController();
const platform = new PlatformController();

const keys = {
  left:{ pressKey: false},
  right:{ pressKey: false},
  velocityPress: { x: 5, y: 32}
}

const animate = () =>{
  requestAnimationFrame(animate);
  context.clearRect(0, 0 , canvas.width, canvas.height);

  if(keys.left.pressKey){
    player.velocity.x = -keys.velocityPress.x;

  }else if(keys.right.pressKey){
    player.velocity.x = keys.velocityPress.x;

  }else{
    player.velocity.x = 0;   
  }
  
  //Segun plataforma
  if(player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y){
    player.velocity.y = 0;

  }


  player.update({context, canvas, gravity});
  platform.draw(context);
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
      player.velocity.y -= keys.velocityPress.y;    
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
