var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ed778588-871d-46fb-b15c-9af134be73ec","bfe258b9-9ba8-4ca0-828a-53100aa892f7","89511920-fa85-40ac-a635-0e63588d328a","85229ed4-98bb-4114-9705-07d86c6955bc"],"propsByKey":{"ed778588-871d-46fb-b15c-9af134be73ec":{"name":"h","sourceUrl":null,"frameSize":{"x":50,"y":55},"frameCount":1,"looping":true,"frameDelay":12,"version":"hgwOT1yHnEl5TOjx2prrKruVVdIT4HLo","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":55},"rootRelativePath":"assets/ed778588-871d-46fb-b15c-9af134be73ec.png"},"bfe258b9-9ba8-4ca0-828a-53100aa892f7":{"name":"t","sourceUrl":null,"frameSize":{"x":40,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"3gJ0rx2Nt2Eqw9Fb0wAqr9Zypj170.B0","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":30},"rootRelativePath":"assets/bfe258b9-9ba8-4ca0-828a-53100aa892f7.png"},"89511920-fa85-40ac-a635-0e63588d328a":{"name":"car_blue_1","sourceUrl":null,"frameSize":{"x":25,"y":55},"frameCount":1,"looping":true,"frameDelay":12,"version":"G1lyNutRpGcZtbhCXi2_ur7YPArw4UEx","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":55},"rootRelativePath":"assets/89511920-fa85-40ac-a635-0e63588d328a.png"},"85229ed4-98bb-4114-9705-07d86c6955bc":{"name":"d","sourceUrl":null,"frameSize":{"x":400,"y":5},"frameCount":1,"looping":true,"frameDelay":12,"version":"5RNMfWkevjRc9UK0r53XnWnQyGRiEUgk","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":5},"rootRelativePath":"assets/85229ed4-98bb-4114-9705-07d86c6955bc.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var life = 0;


var hero = createSprite(375,200,25,25); 
hero.setAnimation("h");
var enemy1=createSprite(300,300,20,20);
 enemy1.velocityY = -5;
 enemy1.setAnimation("car_blue_1");
var enemy2=createSprite(200,100,20,20);
enemy2.velocityY = 5;
enemy2.setAnimation("car_blue_1");
var enemy3=createSprite(100,300,20,20);
enemy3.velocityY = -5;
enemy3.setAnimation("car_blue_1");
var dog = createSprite(30,200,20,20);
dog.setAnimation("t");
var deadend1= createSprite(200,350,400,5);
deadend1.setAnimation("d");
var deadend2= createSprite(200,50,400,5);
deadend2.setAnimation("d");


function draw() {
  
  background("lightblue");
  
  


  
  text("Lives: " + life,200,25);
 fill("white");
  
  

 
if(keyDown("right"))
{
  dog.x=dog.x +5;
}  
if(keyDown("left"))
{
  dog.x=dog.x -5;
}  
  
  if (dog.isTouching(enemy1)){
    dog.x=30;
    dog.y=200;
    life=life+1;
   playSound("assets/category_explosion/8bit_explosion.mp3");
   
  }
  if (dog.isTouching(enemy2)){
    dog.x=30;
    dog.y=200;
    life=life+1;
    playSound("assets/category_explosion/8bit_explosion.mp3");
  }
  if (dog.isTouching(enemy3)){
    dog.x=30;
    dog.y=200;
    life=life+1;
    playSound("assets/category_explosion/8bit_explosion.mp3");
  
  }
  
  if (life==5 ||dog.isTouching(hero)){
    dog.y=200;
    dog.x=30;
    enemy1.velocityY=0;
    enemy1.velocityX=0;
    enemy2.velocityY=0;
    enemy2.velocityX=0;
    enemy3.velocityY=0;
    enemy3.velocityX=0;
    text("game over!",200,200);
    
  
  }
  createEdgeSprites();
  enemy1.bounceOff(deadend1);
  enemy1.bounceOff(deadend2);
   enemy2.bounceOff(deadend1);
    enemy2.bounceOff(deadend2);
   enemy3.bounceOff(deadend1);
   enemy3.bounceOff(deadend2);
  
  drawSprites();
  
  
  
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
