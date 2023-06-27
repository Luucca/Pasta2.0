const gameover = document.getElementById("gameover")
const exhibition = document.getElementById("playgame")
const score = document.getElementById("score")
const restart = document.getElementById("restart")

 let x = 2, y = 2;
 let velocidadeX = 2, velocidadeY = 2;
 let pX = 25 , pY= 1;
 let velpacX = 25;
 let scoregame = 0;
 let game = false;

window.addEventListener("keyup",(u) => {
  if(u.key == "ArrowUp"){ // pra cima

  };
  if(u.key == "ArrowDown"){ // pra baixo

  };
  if(u.key == "ArrowLeft"){ // pra esquerda

  };
  if(u.key == "ArrowRight"){ // pra direita

  };
});
const voltaanimação = () =>{
    intervalfps = window.setInterval(fps, 100)
}
const pause = () => {
    clearInterval(intervalfps);
    gameover.style.display = "flex";
}
const play = () => {
   gameover.style.display = "none";
   voltaanimação()
}
const pAnimaction = () => {
    pX = 25
    pY = Math.floor(Math.random() * 15) + 1;
    velpacX = 25;
} 
let intervalpAnimaction = window.setInterval(pAnimaction, 2500)
const gameRestart = () => {
    pause()
}
const fps = () => {// A cada 100 milisegundos isso vai acontecer
  let html = `<div id="cub" style="grid-area: ${y}/${x}"></div>`
  html +=  `<div id="pacote" style="grid-area: ${pY}/${pX}"></div>`
  pX = velpacX = velpacX - 1;
  exhibition.innerHTML = html;
}
const printValidate = () => {
    if(x < 1 || y < 1 || y > 15 || x > 25){// Validação de parede
        gameRestart()
    }
    if(pX == x && pY == y){ // Validação de gameover
        gameRestart()
    }
}
let intervalprintValidate =  window.setInterval(printValidate, 100)
let intervalfps = window.setInterval(fps, 100)

restart.addEventListener("click" , function() {
    play()
})