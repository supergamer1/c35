var ball;
var database,position;
var hball;
function setup(){
    database=firebase.database();
    createCanvas(500,500);
    hball = createSprite(250,250,10,10);
    hball.shapeColor = "red";


    //on = firebase =read from database
    var hballRef = database.ref('ball/position');
    hballRef.on("value", readPosition,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readPosition(data){
    position = data.val();
    hball.x = position.x;
    hball.y = position.y;
     
}

function showError(){
    console.log("show error")
}
function writePosition(x,y){
    database.ref('ball/position').set({
        'x':position.x+x,
        'y':position.y+y
    })



}