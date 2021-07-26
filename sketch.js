  var runner1, runner_moving, edges;

  var path, pathImage;

  


  function preload(){
    //pre-load images

    runner_moving = loadAnimation ("Runner-1.png","Runner-2.png");

    pathImage = loadImage("path.png");



  }

  function setup(){
    createCanvas(400,400);
    //create sprites here

    path = createSprite(200,200);

    path.addImage (pathImage);

    path.velocityY = 4;

    path.scale = 1.25;

    runner1 = createSprite(300,330,15,15);

    runner1.addAnimation("runner",runner_moving);

   edges = createEdgeSprites();


    runner1.scale = 0.1;

  

    invisibleGround = createSprite(10,200,10,400);

    invisibleGround.visible = false;

    invisibleGround2 = createSprite(390,200,10,400);

    invisibleGround2.visible = false;

  }

    function draw() {
    background("white");

    if (path.y > 400){

      path.y = height/2;

      }
      runner1.x = World.mouseX;

      runner1.collide(invisibleGround);

      runner1.collide(invisibleGround2);

      runner1.collide(edges[3]);
      
      drawSprites();
  }
