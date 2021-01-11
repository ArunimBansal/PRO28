
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint
var boy,tree
function preload()
{
	boy=loadImage("boy.png")
	tree=loadImage("tree.png")
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;
tree1=createSprite(1000,350,450,600)
tree1.addImage(tree)
tree1.scale=0.5
mango1=new Mango(1000,200,30)
mango1.scale=0.1
mango2=new Mango(1100,300,30)
mango3=new Mango(750,290,30)
mango4=new Mango(900,330,30)
stone1=new Stone(220,470,20)



	//Create the Bodies Here.


	Engine.run(engine);
	 launcher = new Launcher(stone1.body,{x:200,y:100});
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(boy,200,400,200,300)
  drawSprites();
 mango1.display()
 mango2.display()
 mango3.display()
 mango4.display()
 stone1.display()
 launcher.display()
 detectCollision(stone1,mango1)
 detectCollision(stone1,mango2)
 detectCollision(stone1,mango3)
 detectCollision(stone1,mango4)
}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
	
	
	
	}
	function mouseReleased(){
	
	 launcher.fly()   
	}
	function detectCollision(lstone, lmango)
	 { mangoBodyPosition = lmango.body.position;
		 stoneBodyPosition = lstone.body.position;
		  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
		   if(distance <= lmango.r + lstone.r)
			{ Matter.Body.setStatic(lmango.body, false); 
			} 
		}
