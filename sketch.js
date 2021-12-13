var tom, jerry;
var jerryImg1,jerryImg2,jerryImg3;
var tomImg1,tomImg2,tomImg3;
var fundo;

function preload() {
    //carregue as imagens aqui
bg = loadImage("images/garden.png");
jerryImg1 = loadAnimation("images/mouse1.png");
jerryImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
tomImg1 = loadImage("images/cat1.png");
tomImg2 = loadAnimation("images/cat2.png","images/cat3.png");
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    jerry = createSprite(200,600);
    jerry.addAnimation("jerryStading",jerryImg1);
    jerry.scale=0.15;

    tom = createSprite(870,600);
    tom.addAnimation("tomSleeping",tomImg1);
    tom.scale=0.2;
}

function draw() {

    background(bg);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem

    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX = 0;
        tom.addAnimation("ultimaimagemgato",tomImg1);
        tom.changeAnimation("ultimaimagemgato");
        tom.x = 300;
        tom.scale=0.2;
    }
    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui

  if(keyCode === LEFT_ARROW){
    jerry.addAnimation("ratoProvocando",jerryImg2);
    jerry.changeAnimation("ratoProvocando");
    jerry.frameDelay = 25;

    tom.velocityX = -5;
  }

}
