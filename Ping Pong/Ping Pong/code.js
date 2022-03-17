var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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

var raquetadeljugador = createSprite(390, 200,10, 100);
var raquetadelacomputadora = createSprite(10, 200,10, 100);
var pelota = createSprite(200, 200,10,10);


raquetadeljugador.shapeColor=("red");
raquetadelacomputadora.shapeColor=("blue");
pelota.shapeColor=("green");


function draw() {
background("white");

createEdgeSprites();

if (keyDown("space")) {
 iniciarmovimiento();
}
if (keyDown("up")) {
raquetadeljugador.velocityY=-4.5;
}   
if (keyDown("down")) {
raquetadeljugador.velocityY=4.5;
}
raquetadelacomputadora.y=pelota.y;

if (pelota.x > 400 ||pelota.x < 0 ) {
resetgame();
}

drawnet();
pelota.bounceOff(topEdge);
pelota.bounceOff(bottomEdge);
pelota.bounceOff(raquetadeljugador);
pelota.bounceOff(raquetadelacomputadora);
raquetadeljugador.bounceOff(topEdge);
raquetadeljugador.bounceOff(bottomEdge);



if (raquetadelacomputadora.y > 360) {
 raquetadelacomputadora.y=359;  
 }
  
if (raquetadelacomputadora.y < 30) {
raquetadelacomputadora.y=31;  
}

drawSprites();
}

function drawnet() {
for (var x  = 0; x < 400; x=x+20) {
line(200, x, 200, x+10);  
}  
}
function iniciarmovimiento() {
 pelota.velocityX=2;
pelota.velocityY=3;  
}

function resetgame() {
 pelota.x=200;
pelota.y=200;
pelota.velocityX=0;
pelota.velocityY=0; 
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
