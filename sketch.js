var canvas;
var music;

var redFace, blueFace, greenFace, orangeFace;
var box;
var invisbleLeftEdge, invisibleRightEdge, invisibleTopEdge, invisibleBottomEdge;



function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,400);

    //Here I create 4 different surfaces
redFace=createSprite(350,350,90,30);
redFace.shapeColor="red";

blueFace=createSprite(250,350,90,30);
blueFace.shapeColor="blue";

greenFace=createSprite(150,350,90,30);
greenFace.shapeColor="green";
greenFace.debug=true;

orangeFace=createSprite(50,350,90,30)
orangeFace.shapeColor="orange";

//creating edgeSprites

invisbleLeftEdge=createSprite(5,200,5,400);
invisibleRightEdge=createSprite(395,200,5,400);

invisibleTopEdge=createSprite(200,5,400,5);
invisibleBottomEdge=createSprite(200,395,400,5);

    //create box sprite and give velocity
    box=createSprite((random(20,350)),200,30,30);
    box.shapeColor="white";
    box.velocityX=5;
    box.velocityY=7;

    orangeFace.debug=true   
}

function draw() {
    background(rgb(169,169,169));
    


    //adding condition to check if box touching surface and make it box

    
     if(isTouching(box,invisibleRightEdge) ){
         box.velocityX=-(box.velocityX);
         }
     if(isTouching(box,invisbleLeftEdge) ){
         box.velocityX=-(box.velocityX);
         }

     else{}
     if(isTouching(box,invisibleTopEdge)){
       box.velocityY=-(box.velocityY);
     }
     
     else{}
     if(isTouching(box,invisibleBottomEdge)){
      box.velocityY=-(box.velocityY);
    }
    else{}

    //checking for the 4 faces 

    if(isTouching(box,redFace) ){
        box.shapeColor="red";
        }
    if(isTouching(box,orangeFace) ){
    box.shapeColor="orange";
    
        
        music.stop();

        box.velocityX=0;
       box.velocityY=0;  
        }

    else{}
    if(isTouching(box,greenFace)){
      box.shapeColor="green";
    }
    
    else{}
    if(isTouching(box,blueFace)){
        box.shapeColor="blue";
        music.play();
   }
   else{}
    
    drawSprites();
}
function isTouching(object1,object2) {
    if(object1.x-object2.x <= object1.width/2+object2.width/2 && 
        object2.x-object1.x<=object2.width/2+object1.width/2 && 
        object1.y-object2.y<=object1.height/2+object2.height/2&&
        object2.y-object1.y<=object1.height/2+object2.height/2)
        {
       return true;
        }
        else{
        return false;

        }
}
