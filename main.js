var xpos=0;
var ypos=0;
function preload(){
    glasses=loadImage("kTKO7yAjc.png");
    hair=loadImage("hair.png");
}

function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    webcam=createCapture(VIDEO);
    webcam.hide();
    poseNet = ml5.poseNet(webcam,modelLoaded);
    poseNet.on('pose',gotPoses);

}

function draw(){
    image(webcam,0,0,400,400);
    image(glasses,xpos-175,ypos-100,100,50);

}

function modelLoaded(){
    console.log('Posenet is activated');
}

function gotPoses(results){
    if(results.length > 0){
    console.log(results);
    xpos=results[0].pose.nose.x;
    ypos=results[0].pose.nose.y;
    }
}

function takesnapshot(){
    save("fancy_selfie.png");
}