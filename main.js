function preload(){
Canvas_Img=loadImage("download.jfif");
Canvas_Img1=loadImage("download.jfif");
}

function setup(){
    canvas=createCanvas(700,600);
    canvas.center();
}
function draw(){
image(Canvas_Img,0,0);
image(Canvas_Img1,675,300);

 fill("black");
 stroke("black");
 circle(400,200,20,500);

 fill("green");
 stroke("green");
 rect(350,0,10,600);
}